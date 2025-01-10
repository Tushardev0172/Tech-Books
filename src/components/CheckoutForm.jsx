import React, { useState } from "react";
import { useStripe, useElements, CardElement } from "@stripe/react-stripe-js";
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
          card: elements.getElement(CardElement),
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

  return (
    <form onSubmit={handleSubmit}>
      <CardElement onChange={handleCardChange} />
      <button
        type="submit"
        disabled={!stripe || loading}
        className={`p-2 rounded-lg my-2 ${
          loading
            ? "bg-gray-400 text-gray-700 cursor-not-allowed"
            : "bg-[#f57224] text-white"
        }`}
      >
        {loading ? "Processing..." : `Pay ₹${totalPrice}`}
      </button>
      {error && <p style={{ color: "red" }}>{error}</p>}
      {paymentSuccess && <p style={{ color: "green" }}>Payment Successful!</p>}
    </form>
  );
};

export default CheckoutForm;
