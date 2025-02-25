"use client";
import { useState } from "react";

const StayConnected = () => {
  const [email, setEmail] = useState("");

  const handleSubscribe = (e) => {
    e.preventDefault();
    console.log("User Subscribed:", email);
  };

  return (
    <section className="w-full bg-[#2f5596] text-white py-12 rounded-lg">
      <div className="max-w-3xl mx-auto text-center px-6">
        <h2 className="text-3xl font-bold mb-4">Stay Connected</h2>
        <p className="text-lg mb-6">
          Subscribe to our newsletter to get the latest updates, news, and insights.
        </p>

        {/* Newsletter Form */}
        <form
          onSubmit={handleSubscribe}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full sm:w-2/3 px-4 py-2 rounded-lg text-black focus:outline-none"
            required
          />
          <button
            type="submit"
            className="bg-white text-[#2f5596] px-6 py-2 rounded-lg font-semibold hover:bg-gray-200 transition-all duration-300"
          >
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
};

export default StayConnected;
