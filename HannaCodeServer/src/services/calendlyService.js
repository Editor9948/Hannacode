const axios = require("axios");
const logger = require("../utils/logger");

// Calendly API base URL
const CALENDLY_API_BASE_URL = "https://api.calendly.com";

/**
 * Create Calendly API client with authentication
 * @returns {Object} Axios instance
 */
const createCalendlyClient = () => {
  return axios.create({
    baseURL: CALENDLY_API_BASE_URL,
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${process.env.CALENDLY_API_KEY}`,
    },
  });
};

// Function to get the Organization URI
const getCalendlyOrganization = async () => {
  try {
    const client = createCalendlyClient();
    const response = await client.get('/users/me');
    const organizationUri = response.data.resource.current_organization;
    console.log('Organization URI:', organizationUri);
    return organizationUri;
  } catch (error) {
    console.error('Error fetching Organization URI:', error.response?.data || error.message);
    throw error;
  }
};

/**
 * Get available event types
 * @returns {Array} Event types
 */
const getEventTypes = async () => {
  try {
    const client = createCalendlyClient();
    const response = await client.get(`/event_types?organization=${process.env.CALENDLY_ORGANIZATION}`);
    return response.data.collection;
  } catch (error) {
    logger.error(`Error getting Calendly event types: ${error.message}`);
    throw error;
  }
};

/**
 * Get user's scheduled events
 * @param {string} userUri - Calendly user URI
 * @param {Object} params - Query parameters
 * @param {string} params.minStartTime - Minimum start time
 * @param {string} params.maxStartTime - Maximum start time
 * @returns {Array} Scheduled events
 */
const getScheduledEvents = async (userUri, params = {}) => {
  try {
    const client = createCalendlyClient();
    const queryParams = {
      user: userUri,
      ...params,
    };
    const response = await client.get("/scheduled_events", { params: queryParams });
    return response.data.collection;
  } catch (error) {
    logger.error(`Error getting Calendly scheduled events: ${error.message}`);
    throw error;
  }
};

/**
 * Get available time slots
 * @param {string} eventTypeUri - Event type URI
 * @param {Object} params - Query parameters
 * @param {string} params.startTime - Start time
 * @param {string} params.endTime - End time
 * @returns {Array} Available time slots
 */
const getAvailableTimeSlots = async (eventTypeUri, params = {}) => {
  try {
    const client = createCalendlyClient();
    const response = await client.get(`/event_type_available_times?event_type=${eventTypeUri}`, {
      params,
    });
    return response.data.collection;
  } catch (error) {
    logger.error(`Error getting Calendly available time slots: ${error.message}`);
    throw error;
  }
};

/**
 * Create invitee for an event
 * @param {Object} eventDetails - Event details
 * @param {string} eventDetails.eventTypeUuid - Event type UUID
 * @param {string} eventDetails.startTime - Start time
 * @param {string} eventDetails.endTime - End time
 * @param {Object} inviteeDetails - Invitee details
 * @param {string} inviteeDetails.name - Invitee name
 * @param {string} inviteeDetails.email - Invitee email
 * @returns {Object} Created event
 */
const createInvitee = async (eventDetails, inviteeDetails) => {
  try {
    const client = createCalendlyClient();
    const payload = {
      event_type_uuid: eventDetails.eventTypeUuid,
      start_time: eventDetails.startTime,
      end_time: eventDetails.endTime,
      invitee: {
        name: inviteeDetails.name,
        email: inviteeDetails.email,
      },
    };
    const response = await client.post("/invitees", payload);
    return response.data;
  } catch (error) {
    logger.error(`Error creating Calendly invitee: ${error.message}`);
    throw error;
  }
};

/**
 * Cancel scheduled event
 * @param {string} eventUuid - Event UUID
 * @param {string} reason - Cancellation reason
 * @returns {Object} Cancellation result
 */
const cancelEvent = async (eventUuid, reason) => {
  try {
    const client = createCalendlyClient();
    const payload = { reason };
    const response = await client.post(`/scheduled_events/${eventUuid}/cancellation`, payload);
    return response.data;
  } catch (error) {
    logger.error(`Error canceling Calendly event: ${error.message}`);
    throw error;
  }
};

/**
 * Get event details
 * @param {string} eventUuid - Event UUID
 * @returns {Object} Event details
 */
const getEventDetails = async (eventUuid) => {
  try {
    const client = createCalendlyClient();
    const response = await client.get(`/scheduled_events/${eventUuid}`);
    return response.data;
  } catch (error) {
    logger.error(`Error getting Calendly event details: ${error.message}`);
    throw error;
  }
};

/**
 * Create webhook subscription
 * @param {string} url - Webhook URL
 * @param {Array} events - Events to subscribe to
 * @returns {Object} Webhook subscription
 */
const createWebhookSubscription = async (url, events) => {
  try {
    const client = createCalendlyClient();
    const payload = {
      url,
      events,
      organization: process.env.CALENDLY_ORGANIZATION,
      scope: "organization",
    };
    const response = await client.post("/webhook_subscriptions", payload);
    return response.data;
  } catch (error) {
    logger.error(`Error creating Calendly webhook subscription: ${error.message}`);
    throw error;
  }
};

/**
 * Delete webhook subscription
 * @param {string} webhookUuid - Webhook UUID
 * @returns {boolean} Success status
 */
const deleteWebhookSubscription = async (webhookUuid) => {
  try {
    const client = createCalendlyClient();
    await client.delete(`/webhook_subscriptions/${webhookUuid}`);
    return true;
  } catch (error) {
    logger.error(`Error deleting Calendly webhook subscription: ${error.message}`);
    throw error;
  }
};

/**
 * Get mentor's Calendly link
 * @param {string} mentorEmail - Mentor's email address
 * @returns {string} Calendly link
 */
const getMentorCalendlyLink = async (mentorEmail) => {
  try {
    const client = createCalendlyClient();
    const response = await client.get('/users/me');
    const userUri = response.data.resource.uri;
    
    // Get the first event type for the user
    const eventTypesResponse = await client.get(`/event_types?user=${userUri}`);
    const eventType = eventTypesResponse.data.collection[0];
    
    if (!eventType) {
      throw new Error('No event types found for the mentor');
    }
    
    return eventType.scheduling_url;
  } catch (error) {
    logger.error(`Error getting mentor's Calendly link: ${error.message}`);
    throw error;
  }
};

/**
 * Schedule a Calendly event
 * @param {Object} options - Event options
 * @param {string} options.mentorEmail - Mentor's email
 * @param {string} options.userEmail - User's email
 * @param {string} options.userName - User's name
 * @param {string} options.date - Event date
 * @param {number} options.duration - Event duration in minutes
 * @param {string} options.topic - Event topic
 * @returns {Object} Scheduled event
 */
const scheduleEvent = async (options) => {
  try {
    const client = createCalendlyClient();
    
    // Get mentor's user URI
    const mentorResponse = await client.get('/users/me');
    const mentorUri = mentorResponse.data.resource.uri;
    
    // Get the first event type for the mentor
    const eventTypesResponse = await client.get(`/event_types?user=${mentorUri}`);
    const eventType = eventTypesResponse.data.collection[0];
    
    if (!eventType) {
      throw new Error('No event types found for the mentor');
    }
    
    // Calculate end time based on duration
    const startTime = new Date(options.date);
    const endTime = new Date(startTime.getTime() + options.duration * 60000);
    
    // Create the event
    const payload = {
      event_type_uuid: eventType.uuid,
      start_time: startTime.toISOString(),
      end_time: endTime.toISOString(),
      invitee: {
        name: options.userName,
        email: options.userEmail,
      },
      location: {
        type: 'zoom',
      },
      custom_questions: [
        {
          question: 'Topic',
          answer: options.topic,
        },
      ],
    };
    
    const response = await client.post('/invitees', payload);
    return {
      id: response.data.resource.uuid,
      meetingUrl: response.data.resource.location.join_url,
    };
  } catch (error) {
    logger.error(`Error scheduling Calendly event: ${error.message}`);
    throw error;
  }
};

/**
 * Get mentor's availability
 * @param {string} mentorEmail - Mentor's email address
 * @returns {Object} Mentor's availability
 */
const getMentorAvailability = async (mentorEmail) => {
  try {
    const client = createCalendlyClient();
    const response = await client.get('/users/me');
    const userUri = response.data.resource.uri;
    
    // Get the first event type for the user
    const eventTypesResponse = await client.get(`/event_types?user=${userUri}`);
    const eventType = eventTypesResponse.data.collection[0];
    
    if (!eventType) {
      throw new Error('No event types found for the mentor');
    }
    
    // Get available time slots for the next 7 days
    const startTime = new Date().toISOString();
    const endTime = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString();
    
    const availableSlots = await getAvailableTimeSlots(eventType.uri, {
      start_time: startTime,
      end_time: endTime
    });
    
    return {
      eventType: eventType,
      availableSlots: availableSlots
    };
  } catch (error) {
    logger.error(`Error getting mentor's availability: ${error.message}`);
    throw error;
  }
};

// Export all functions
module.exports = {
  getCalendlyOrganization,
  getEventTypes,
  getScheduledEvents,
  getAvailableTimeSlots,
  createInvitee,
  cancelEvent,
  getEventDetails,
  createWebhookSubscription,
  deleteWebhookSubscription,
  getMentorCalendlyLink,
  scheduleEvent,
  getMentorAvailability,
};