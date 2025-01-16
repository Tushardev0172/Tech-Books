import React, { useState } from "react";
import {
  useStripe,
  useElements,
  CardNumberElement,
  CardExpiryElement,
  CardCvcElement,
} from "@stripe/react-stripe-js";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { cartContext } from "../Global/cartContext";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const CheckoutForm = ({ totalPrice }) => {
  const navigate = useNavigate();
  const stripe = useStripe();
  const elements = useElements();
  const { dispatch } = useContext(cartContext);
  const [error, setError] = useState(null);
  const [paymentSuccess, setPaymentSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }
    setLoading(true);

    try {
      const response = await fetch(
        "http://localhost:5000/create-payment-intent",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ amount: totalPrice * 100 }),
        }
      );

      if (!response.ok) {
        throw new Error("Failed to create payment intent");
      }

      const { clientSecret } = await response.json();
      console.log("Client Secret:", clientSecret);

      const payload = await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: elements.getElement(CardNumberElement),
        },
      });

      if (payload.error) {
        console.error("Payment failed:", payload.error.message);
        setError(payload.error.message);
      } else {
        console.log("Payment successful:", payload.paymentIntent);
        setPaymentSuccess(true);
        setError(null);
        toast.success("Payment Successful", {
          position: "top-center",
          autoClose: 1000,
          closeOnClick: true,
          pauseOnHover: false,
        });
        dispatch({ type: "EMPTY" });

        setTimeout(() => {
          navigate("/");
        }, 2000);
      }
    } catch (error) {
      console.error("Error in payment:", error.message);
      setError(error.message);
      toast.error("Payment failed. Please try again.", {
        position: "top-center",
        autoClose: 1000,
        closeOnClick: true,
        pauseOnHover: false,
      });
    } finally {
      setLoading(false);
    }
  };

  const handleCardChange = (event) => {
    if (event.complete) {
      setError(null);
    } else if (event.error) {
      setError(event.error.message);
    }
  };

  const cardStyle = {
    style: {
      base: {
        color: "#32325d",
        fontFamily: "'Roboto', sans-serif",
        fontSmoothing: "antialiased",
        fontSize: "16px",
        "::placeholder": {
          color: "#aab7c4",
        },
      },
      invalid: {
        color: "#fa755a",
        iconColor: "#fa755a",
      },
    },
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 bg-white rounded-md shadow">
      <h2 className="text-lg font-semibold mb-4">Payment Information</h2>
      {/* Card Number Field */}
      <div className="mb-4">
        <label className="block text-sm font-medium mb-1">Card Number</label>
        <div className="border p-2 rounded-md">
          <CardNumberElement options={cardStyle} onChange={handleCardChange} />
        </div>
      </div>
      {/* Expiry Date Field */}
      <div className="mb-4">
        <label className="block text-sm font-medium mb-1">Expiry Date</label>
        <div className="border p-2 rounded-md">
          <CardExpiryElement options={cardStyle} onChange={handleCardChange} />
        </div>
      </div>
      {/* CVC Field */}
      <div className="mb-4">
        <label className="block text-sm font-medium mb-1">CVC</label>
        <div className="border p-2 rounded-md">
          <CardCvcElement options={cardStyle} onChange={handleCardChange} />
        </div>
      </div>
      <button
        type="submit"
        disabled={!stripe || loading}
        className={`w-full p-2 rounded-lg my-2 ${
          loading
            ? "bg-gray-400 text-gray-700 cursor-not-allowed"
            : "bg-[#f57224] text-white font-bold"
        }`}
      >
        {loading ? "Processing..." : `Pay ₹${totalPrice}`}
      </button>
      {error && <p className="text-red-500">{error}</p>}
      {paymentSuccess && <p className="text-green-500">Payment Successful!</p>}
    </form>
  );
};

export default CheckoutForm;
