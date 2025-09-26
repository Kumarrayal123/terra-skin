import React from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

declare global {
  interface Window {
    Razorpay: any;
  }
}

interface ShippingAddress {
  name: string;
  mobile: string;
  city: string;
  street: string;
  pincode: string;
  country: string;
}

const Payment: React.FC = () => {
  const navigate = useNavigate();
  const { state, clearCart } = useCart();
  const shippingAddress: ShippingAddress = JSON.parse(
    localStorage.getItem("shippingAddress") || "{}"
  );

  const subtotal = state.total;
  const tax = subtotal * 0.08;
  const total = subtotal + tax;

  const handlePayment = () => {
    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.async = true;

    script.onload = () => {
      if (window.Razorpay) {
        // const options = {
        //   key: "rzp_test_AOZA9FvJqbOWam",
        //   amount: total * 100, // in paise
        //   currency: "INR",
        //   name: "Your Store",
        //   description: "Order Payment",
        //   prefill: {
        //     name: shippingAddress.name || "",
        //     contact: shippingAddress.mobile || "",
        //   },
        //   handler: function (response: any) {
        //     toast.success(
        //       `Payment Successful! Payment ID: ${response.razorpay_payment_id}`
        //     );
        //     clearCart();
        //     navigate("/");
        //   },
        //   theme: { color: "#8d4745" },
        // };
       
         const options = {
  key: "rzp_test_AOZA9FvJqbOWam",
  amount: Math.round(total * 100), // in paise, integer
  currency: "INR",
  name: "Your Store",
  description: "Order Payment",
  prefill: {
    name: shippingAddress.name || "Guest",
    contact: shippingAddress.mobile || "9999999999",
  },
  handler: function (response: any) {
    toast.success(`Payment Successful! Payment ID: ${response.razorpay_payment_id}`);
    clearCart();
    navigate("/");
  },
  theme: { color: "#8d4745" },
};

        const paymentObject = new window.Razorpay(options);
        paymentObject.open();
      } else {
        toast.error("Razorpay SDK failed to load. Please try again later.");
      }
    };

    script.onerror = () =>
      toast.error("Failed to load Razorpay. Check your internet connection.");

    document.body.appendChild(script);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-6">
      <h2 className="text-3xl font-bold text-[#8d4745] mb-8">Checkout</h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 w-full max-w-5xl">
        {/* Shipping Details */}
        <div className="bg-white rounded-2xl shadow-lg p-6">
          <h3 className="text-xl font-semibold text-gray-700 mb-4">
            Shipping Information
          </h3>
          <div className="space-y-2 text-gray-600">
            <p>
              <span className="font-semibold">Name:</span> {shippingAddress.name}
            </p>
            <p>
              <span className="font-semibold">Mobile:</span> {shippingAddress.mobile}
            </p>
            <p>
              <span className="font-semibold">Address:</span>{" "}
              {shippingAddress.street}, {shippingAddress.city}, {shippingAddress.pincode},{" "}
              {shippingAddress.country}
            </p>
          </div>
        </div>

        {/* Order Summary */}
        <div className="bg-white rounded-2xl shadow-lg p-6 flex flex-col justify-between">
          <h3 className="text-xl font-semibold text-gray-700 mb-6">Order Summary</h3>
          <div className="space-y-3 text-gray-600 mb-6">
            <div className="flex justify-between">
              <span>Subtotal</span>
              <span>₹{subtotal.toFixed(2)}</span>
            </div>
            <div className="flex justify-between">
              <span>Shipping</span>
              <span>Free</span>
            </div>
            <div className="flex justify-between">
              <span>Tax (8%)</span>
              <span>₹{tax.toFixed(2)}</span>
            </div>
          </div>
          <div className="border-t pt-4 mb-6 flex justify-between items-center">
            <span className="text-lg font-bold text-gray-900">Total</span>
            <span className="text-lg font-bold text-[#8d4745]">₹{total.toFixed(2)}</span>
          </div>

          <button
            onClick={handlePayment}
            className="w-full bg-[#8d4745] text-white py-3 px-6 rounded-full font-semibold hover:bg-[#7a3f3d] transition-colors duration-300"
          >
            Pay Now ₹{total.toFixed(2)}
          </button>
        </div>
      </div>

      <ToastContainer />
    </div>
  );
};

export default Payment;

