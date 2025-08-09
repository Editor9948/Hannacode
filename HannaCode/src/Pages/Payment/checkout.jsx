import React, { useState, useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useToast } from "../../hooks/useToast";

const API_URL = process.env.REACT_APP_API_URL 

export default function CheckoutPage() {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [searchParams] = useSearchParams();
  const [isProcessing, setIsProcessing] = useState(false);
  const [isLoadingPaystack, setIsLoadingPaystack] = useState(true);

  // Get plan from URL parameters
  const selectedPlan = searchParams.get('plan') || 'monthly';

  // Define plan details
  const planDetails = {
    monthly: {
      name: "Premium Monthly",
      cycle: "Monthly",
      price: 30000,
      description: "Billed monthly"
    },
    annual: {
      name: "Premium Annual",
      cycle: "Annual", 
      price: 288000,
      description: "Billed annually (Save 20%)"
    },
    lifetime: {
      name: "Lifetime Access",
      cycle: "One-time",
      price: 499999,
      description: "One-time payment"
    }
  };

  // Get current plan details
  const currentPlan = planDetails[selectedPlan] || planDetails.monthly;

  // Subscription details
  const subscriptionDetails = {
    plan: currentPlan.name,
    billingCycle: currentPlan.cycle,
    price: currentPlan.price,
    discount: 0,
    total: currentPlan.price,
  };

  // Billing details state
  const [billingDetails, setBillingDetails] = useState({
    firstName: "",
    lastName: "",
    email: "",
    address: "",
    city: "",
    state: "",
    zipCode: "",
    country: "US",
  });

  // Card details state
  const [cardDetails, setCardDetails] = useState({
    cardNumber: "",
    expiryMonth: "",
    expiryYear: "",
    cvv: "",
  });

  useEffect(() => {
    // Load Paystack script
    const script = document.createElement('script');
    script.src = 'https://js.paystack.co/v1/inline.js';
    script.async = true;
    script.onload = () => setIsLoadingPaystack(false);
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const handleBillingDetailsChange = (e) => {
    const { name, value } = e.target;
    setBillingDetails((prev) => ({ ...prev, [name]: value }));
  };

  const handleCardDetailsChange = (e) => {
    const { name, value } = e.target;
    
    if (name === 'cardNumber') {
      // Format card number with spaces
      const formattedValue = value.replace(/\s/g, '').replace(/(.{4})/g, '$1 ').trim();
      setCardDetails((prev) => ({ ...prev, [name]: formattedValue }));
    } else if (name === 'expiryMonth' || name === 'expiryYear') {
      // Only allow numbers for expiry
      const numericValue = value.replace(/\D/g, '');
      setCardDetails((prev) => ({ ...prev, [name]: numericValue }));
    } else if (name === 'cvv') {
      // Only allow numbers for CVV
      const numericValue = value.replace(/\D/g, '');
      setCardDetails((prev) => ({ ...prev, [name]: numericValue }));
    } else {
      setCardDetails((prev) => ({ ...prev, [name]: value }));
    }
  };

  // Simple validation
  const validateForm = () => {
    const requiredFields = ['firstName', 'lastName', 'email', 'address', 'city', 'state', 'zipCode', 'country'];
    
    for (const field of requiredFields) {
      if (!billingDetails[field]) {
        toast({
          title: "Missing Information",
          description: `Please fill in your ${field.replace(/([A-Z])/g, " $1")}.`,
          variant: "error",
        });
        return false;
      }
    }

    // Validate card details
    if (!cardDetails.cardNumber || !cardDetails.expiryMonth || !cardDetails.expiryYear || !cardDetails.cvv) {
      toast({
        title: "Missing Card Information",
        description: "Please fill in all card details.",
        variant: "error",
      });
      return false;
    }

    // Basic card number validation (16 digits)
    if (!/^\d{16}$/.test(cardDetails.cardNumber.replace(/\s/g, ''))) {
      toast({
        title: "Invalid Card Number",
        description: "Please enter a valid 16-digit card number.",
        variant: "error",
      });
      return false;
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(billingDetails.email)) {
      toast({
        title: "Invalid Email",
        description: "Please enter a valid email address.",
        variant: "error",
      });
      return false;
    }

    return true;
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsProcessing(true);
    try {
      // Get auth token from localStorage or context
      const token = localStorage.getItem('token');
      
      console.log("Making payment request with token:", token ? "Present" : "Missing");
      console.log("Plan:", selectedPlan);
      console.log("Email:", billingDetails.email);
      
      const response = await fetch(`${API_URL}/payments/initialize`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`,
        },
        body: JSON.stringify({
          plan: selectedPlan,
          email: billingDetails.email,
        }),
      });

      const data = await response.json();
      
      console.log("Response status:", response.status);
      console.log("Response data:", data);
      
      if (!response.ok) {
        throw new Error(data.message || `HTTP error! status: ${response.status}`);
      }
      
      if (!data.success) {
        throw new Error(data.error || "Payment initialization failed");
      }

      // Initialize Paystack payment with card details
      const handler = window.PaystackPop.setup({
        key: process.env.REACT_APP_PAYSTACK_PUBLIC_KEY,
        email: billingDetails.email,
        amount: data.data.amount, // Use amount from Paystack response
        currency: 'NGN',
        ref: data.data.reference,
        // Pre-fill card details
        card: {
          number: cardDetails.cardNumber.replace(/\s/g, ''),
          cvv: cardDetails.cvv,
          expiry_month: cardDetails.expiryMonth,
          expiry_year: cardDetails.expiryYear,
        },
        metadata: {
          custom_fields: [
            {
              display_name: "Plan",
              variable_name: "plan",
              value: subscriptionDetails.plan
            },
            {
              display_name: "Full Name",
              variable_name: "full_name",
              value: `${billingDetails.firstName} ${billingDetails.lastName}`
            }
          ]
        },
        callback: function(response) {
          // Redirect to verification page
          window.location.href = `/payment/verify?reference=${response.reference}`;
        },
        onClose: function() {
          setIsProcessing(false);
          toast({
            title: "Payment Cancelled",
            description: "You have cancelled the payment process.",
            variant: "info",
          });
        }
      });
      
      handler.openIframe();
    } catch (error) {
      toast({
        title: "Payment Failed",
        description: error.message || "There was an error processing your payment.",
        variant: "error",
      });
      setIsProcessing(false);
    }
  };

  return (
    <div className="max-w-xl mx-auto p-6 bg-white dark:bg-gray-800 rounded shadow dark:shadow-gray-700/20 mt-8">
      <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Checkout</h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Subscription Summary */}
        <div className="border border-gray-200 dark:border-gray-600 rounded p-4 mb-4 bg-gray-50 dark:bg-gray-700">
          <h3 className="font-semibold mb-2 text-gray-900 dark:text-white">Subscription Details</h3>
          <div className="flex justify-between text-gray-700 dark:text-gray-300">
            <span>Plan:</span>
            <span>{subscriptionDetails.plan}</span>
          </div>
          <div className="flex justify-between text-gray-700 dark:text-gray-300">
            <span>Billing Cycle:</span>
            <span>{subscriptionDetails.billingCycle}</span>
          </div>
          <div className="flex justify-between text-gray-700 dark:text-gray-300">
            <span>Price:</span>
            <span>₦{subscriptionDetails.price.toLocaleString()}</span>
          </div>
          <div className="flex justify-between text-gray-700 dark:text-gray-300">
            <span>Discount:</span>
            <span>₦{subscriptionDetails.discount.toLocaleString()}</span>
          </div>
          <div className="flex justify-between font-bold text-gray-900 dark:text-white">
            <span>Total:</span>
            <span>₦{subscriptionDetails.total.toLocaleString()}</span>
          </div>
        </div>

        {/* Billing Details */}
        <div>
          <h3 className="font-semibold mb-2 text-gray-900 dark:text-white">Billing Details</h3>
          <div className="grid grid-cols-2 gap-4">
            <input
              type="text"
              name="firstName"
              placeholder="First Name"
              value={billingDetails.firstName}
              onChange={handleBillingDetailsChange}
              className="border border-gray-300 dark:border-gray-600 rounded p-2 bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:border-primary dark:focus:border-primary focus:ring-1 focus:ring-primary dark:focus:ring-primary"
            />
            <input
              type="text"
              name="lastName"
              placeholder="Last Name"
              value={billingDetails.lastName}
              onChange={handleBillingDetailsChange}
              className="border border-gray-300 dark:border-gray-600 rounded p-2 bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:border-primary dark:focus:border-primary focus:ring-1 focus:ring-primary dark:focus:ring-primary"
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={billingDetails.email}
              onChange={handleBillingDetailsChange}
              className="border border-gray-300 dark:border-gray-600 rounded p-2 col-span-2 bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:border-primary dark:focus:border-primary focus:ring-1 focus:ring-primary dark:focus:ring-primary"
            />
            <input
              type="text"
              name="address"
              placeholder="Address"
              value={billingDetails.address}
              onChange={handleBillingDetailsChange}
              className="border border-gray-300 dark:border-gray-600 rounded p-2 col-span-2 bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:border-primary dark:focus:border-primary focus:ring-1 focus:ring-primary dark:focus:ring-primary"
            />
            <input
              type="text"
              name="city"
              placeholder="City"
              value={billingDetails.city}
              onChange={handleBillingDetailsChange}
              className="border border-gray-300 dark:border-gray-600 rounded p-2 bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:border-primary dark:focus:border-primary focus:ring-1 focus:ring-primary dark:focus:ring-primary"
            />
            <input
              type="text"
              name="state"
              placeholder="State"
              value={billingDetails.state}
              onChange={handleBillingDetailsChange}
              className="border border-gray-300 dark:border-gray-600 rounded p-2 bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:border-primary dark:focus:border-primary focus:ring-1 focus:ring-primary dark:focus:ring-primary"
            />
            <input
              type="text"
              name="zipCode"
              placeholder="Zip Code"
              value={billingDetails.zipCode}
              onChange={handleBillingDetailsChange}
              className="border border-gray-300 dark:border-gray-600 rounded p-2 bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:border-primary dark:focus:border-primary focus:ring-1 focus:ring-primary dark:focus:ring-primary"
            />
            <input
              type="text"
              name="country"
              placeholder="Country"
              value={billingDetails.country}
              onChange={handleBillingDetailsChange}
              className="border border-gray-300 dark:border-gray-600 rounded p-2 bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:border-primary dark:focus:border-primary focus:ring-1 focus:ring-primary dark:focus:ring-primary"
            />
          </div>
        </div>

        {/* Card Details */}
        <div>
          <h3 className="font-semibold mb-2 text-gray-900 dark:text-white">Card Details</h3>
          <div className="space-y-4">
            <input
              type="text"
              name="cardNumber"
              placeholder="Card Number (e.g., 4084084084084081)"
              value={cardDetails.cardNumber}
              onChange={handleCardDetailsChange}
              className="border border-gray-300 dark:border-gray-600 rounded p-2 w-full bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:border-primary dark:focus:border-primary focus:ring-1 focus:ring-primary dark:focus:ring-primary"
              maxLength={19}
            />
            <div className="grid grid-cols-3 gap-4">
              <input
                type="text"
                name="expiryMonth"
                placeholder="MM"
                value={cardDetails.expiryMonth}
                onChange={handleCardDetailsChange}
                className="border border-gray-300 dark:border-gray-600 rounded p-2 bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:border-primary dark:focus:border-primary focus:ring-1 focus:ring-primary dark:focus:ring-primary"
                maxLength={2}
              />
              <input
                type="text"
                name="expiryYear"
                placeholder="YY"
                value={cardDetails.expiryYear}
                onChange={handleCardDetailsChange}
                className="border border-gray-300 dark:border-gray-600 rounded p-2 bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:border-primary dark:focus:border-primary focus:ring-1 focus:ring-primary dark:focus:ring-primary"
                maxLength={2}
              />
              <input
                type="text"
                name="cvv"
                placeholder="CVV"
                value={cardDetails.cvv}
                onChange={handleCardDetailsChange}
                className="border border-gray-300 dark:border-gray-600 rounded p-2 bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:border-primary dark:focus:border-primary focus:ring-1 focus:ring-primary dark:focus:ring-primary"
                maxLength={4}
              />
            </div>
            <div className="text-xs text-gray-500 dark:text-gray-400">
              <p>For testing, use card number: <strong className="text-gray-700 dark:text-gray-300">4084084084084081</strong></p>
              <p>CVV: <strong className="text-gray-700 dark:text-gray-300">408</strong>, Expiry: any future date</p>
            </div>
          </div>
        </div>

        {/* Payment Notice */}
        <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded text-center border border-gray-200 dark:border-gray-600">
          <p className="text-sm text-gray-600 dark:text-gray-300">
            Secure payment powered by Paystack. You will be redirected to our payment provider to complete your purchase.
          </p>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-primary hover:bg-primary/80 dark:bg-primary dark:hover:bg-primary/90 text-white py-2 rounded font-semibold transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-primary focus:ring-opacity-50"
          disabled={isProcessing}
        >
          {isProcessing ? "Processing..." : "Pay Now"}
        </button>
      </form>
    </div>
  );
}