import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useToast } from "../../hooks/useToast";

export default function CheckoutPage() {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [isProcessing, setIsProcessing] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState("credit-card");

  // Card details state
  const [cardDetails, setCardDetails] = useState({
    cardNumber: "",
    cardName: "",
    expiryMonth: "",
    expiryYear: "",
    cvc: "",
  });

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

  // Subscription details
  const subscriptionDetails = {
    plan: "Premium",
    billingCycle: "Monthly",
    price: 29.0,
    discount: 0,
    total: 29.0,
  };

  // Handle input changes
  const handleCardDetailsChange = (e) => {
    const { name, value } = e.target;
    setCardDetails((prev) => ({ ...prev, [name]: value }));
  };

  const handleBillingDetailsChange = (e) => {
    const { name, value } = e.target;
    setBillingDetails((prev) => ({ ...prev, [name]: value }));
  };

  // Simple validation
  const validateForm = () => {
    // Check all billing fields
    for (const key in billingDetails) {
      if (!billingDetails[key]) {
        toast({
          title: "Missing Information",
          description: `Please fill in your ${key.replace(/([A-Z])/g, " $1")}.`,
          variant: "error",
        });
        return false;
      }
    }
    // Check all card fields if credit card is selected
    if (paymentMethod === "credit-card") {
      for (const key in cardDetails) {
        if (!cardDetails[key]) {
          toast({
            title: "Missing Card Info",
            description: `Please fill in your ${key.replace(/([A-Z])/g, " $1")}.`,
            variant: "error",
          });
          return false;
        }
      }
      // Basic card number validation
      if (!/^\d{16}$/.test(cardDetails.cardNumber)) {
        toast({
          title: "Invalid Card Number",
          description: "Card number must be 16 digits.",
          variant: "error",
        });
        return false;
      }
    }
    return true;
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsProcessing(true);
    try {
      // Simulate API call
      await new Promise((res) => setTimeout(res, 2000));

      toast({
        title: "Payment Successful",
        description: "Your subscription is now active.",
        variant: "success",
      });
      navigate("/dashboard");
    } catch (error) {
      toast({
        title: "Payment Failed",
        description: "There was an error processing your payment.",
        variant: "error",
      });
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <div className="max-w-xl mx-auto p-6 bg-white rounded shadow mt-8">
      <h2 className="text-2xl font-bold mb-4">Checkout</h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Subscription Summary */}
        <div className="border rounded p-4 mb-4 bg-gray-50">
          <h3 className="font-semibold mb-2">Subscription Details</h3>
          <div className="flex justify-between">
            <span>Plan:</span>
            <span>{subscriptionDetails.plan}</span>
          </div>
          <div className="flex justify-between">
            <span>Billing Cycle:</span>
            <span>{subscriptionDetails.billingCycle}</span>
          </div>
          <div className="flex justify-between">
            <span>Price:</span>
            <span>${subscriptionDetails.price.toFixed(2)}</span>
          </div>
          <div className="flex justify-between">
            <span>Discount:</span>
            <span>${subscriptionDetails.discount.toFixed(2)}</span>
          </div>
          <div className="flex justify-between font-bold">
            <span>Total:</span>
            <span>${subscriptionDetails.total.toFixed(2)}</span>
          </div>
        </div>

        {/* Billing Details */}
        <div>
          <h3 className="font-semibold mb-2">Billing Details</h3>
          <div className="grid grid-cols-2 gap-4">
            <input
              type="text"
              name="firstName"
              placeholder="First Name"
              value={billingDetails.firstName}
              onChange={handleBillingDetailsChange}
              className="border rounded p-2"
            />
            <input
              type="text"
              name="lastName"
              placeholder="Last Name"
              value={billingDetails.lastName}
              onChange={handleBillingDetailsChange}
              className="border rounded p-2"
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={billingDetails.email}
              onChange={handleBillingDetailsChange}
              className="border rounded p-2 col-span-2"
            />
            <input
              type="text"
              name="address"
              placeholder="Address"
              value={billingDetails.address}
              onChange={handleBillingDetailsChange}
              className="border rounded p-2 col-span-2"
            />
            <input
              type="text"
              name="city"
              placeholder="City"
              value={billingDetails.city}
              onChange={handleBillingDetailsChange}
              className="border rounded p-2"
            />
            <input
              type="text"
              name="state"
              placeholder="State"
              value={billingDetails.state}
              onChange={handleBillingDetailsChange}
              className="border rounded p-2"
            />
            <input
              type="text"
              name="zipCode"
              placeholder="Zip Code"
              value={billingDetails.zipCode}
              onChange={handleBillingDetailsChange}
              className="border rounded p-2"
            />
            <input
              type="text"
              name="country"
              placeholder="Country"
              value={billingDetails.country}
              onChange={handleBillingDetailsChange}
              className="border rounded p-2"
            />
          </div>
        </div>

        {/* Payment Method */}
        <div>
          <h3 className="font-semibold mb-2">Payment Method</h3>
          <div className="flex gap-4 mb-2">
            <label className="flex items-center">
              <input
                type="radio"
                name="paymentMethod"
                value="credit-card"
                checked={paymentMethod === "credit-card"}
                onChange={() => setPaymentMethod("credit-card")}
                className="mr-2"
              />
              Credit Card
            </label>
            <label className="flex items-center">
              <input
                type="radio"
                name="paymentMethod"
                value="paypal"
                checked={paymentMethod === "paypal"}
                onChange={() => setPaymentMethod("paypal")}
                className="mr-2"
              />
              PayPal
            </label>
          </div>
        </div>

        {/* Card Details */}
        {paymentMethod === "credit-card" && (
          <div>
            <h3 className="font-semibold mb-2">Card Details</h3>
            <div className="grid grid-cols-2 gap-4">
              <input
                type="text"
                name="cardNumber"
                placeholder="Card Number"
                value={cardDetails.cardNumber}
                onChange={handleCardDetailsChange}
                className="border rounded p-2 col-span-2"
                maxLength={16}
              />
              <input
                type="text"
                name="cardName"
                placeholder="Name on Card"
                value={cardDetails.cardName}
                onChange={handleCardDetailsChange}
                className="border rounded p-2 col-span-2"
              />
              <input
                type="text"
                name="expiryMonth"
                placeholder="MM"
                value={cardDetails.expiryMonth}
                onChange={handleCardDetailsChange}
                className="border rounded p-2"
                maxLength={2}
              />
              <input
                type="text"
                name="expiryYear"
                placeholder="YY"
                value={cardDetails.expiryYear}
                onChange={handleCardDetailsChange}
                className="border rounded p-2"
                maxLength={2}
              />
              <input
                type="text"
                name="cvc"
                placeholder="CVC"
                value={cardDetails.cvc}
                onChange={handleCardDetailsChange}
                className="border rounded p-2"
                maxLength={4}
              />
            </div>
          </div>
        )}

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-primary text-white py-2 rounded font-semibold hover:bg-primary/80 transition"
          disabled={isProcessing}
        >
          {isProcessing ? "Processing..." : "Pay Now"}
        </button>
      </form>
    </div>
  );
}