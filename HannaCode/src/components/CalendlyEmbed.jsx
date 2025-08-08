import React, { useEffect } from 'react';

const CalendlyEmbed = ({ url, mentorName }) => {
  useEffect(() => {
    // Load Calendly embed script
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Cleanup script on unmount
      const existingScript = document.querySelector('script[src="https://assets.calendly.com/assets/external/widget.js"]');
      if (existingScript) {
        document.body.removeChild(existingScript);
      }
    };
  }, []);

  if (!url) {
    return (
      <div className="text-center p-8 border border-gray-200 rounded-lg">
        <p className="text-gray-600 mb-4">
          {mentorName} hasn't set up their Calendly booking link yet.
        </p>
        <p className="text-sm text-gray-500">
          Please contact the mentor directly or try again later.
        </p>
      </div>
    );
  }

  return (
    <div 
      className="calendly-inline-widget" 
      data-url={url}
      style={{ minWidth: '320px', height: '630px' }}
    ></div>
  );
};

export default CalendlyEmbed;
