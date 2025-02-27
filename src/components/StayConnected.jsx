"use client";
import { useState } from "react";

const StayConnected = () => {
  const [email, setEmail] = useState("");
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [showError, setShowError] = useState(false);
  const [showInvalidEmail, setShowInvalidEmail] = useState(false);
  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
};
  const handleSubscribe = async (e) => {
    e.preventDefault();
    console.log("User Subscribed:", email);
    setShowSuccessMessage(false);
    if (!email) {
      setShowError(true);
      setShowInvalidEmail(false);
  } else if (!validateEmail(email)) {
      setShowError(false);
      setShowInvalidEmail(true);
  } else {
      setShowError(false);
      setShowInvalidEmail(false);
      const date = new Date();
      try {
          const response = await fetch('/api/emailsubscribe', {
              method: 'POST',
              headers: {
                  'Content-Type': 'application/json',
              },
              body: JSON.stringify({ date, email  }),
              credentials: 'include', 
          });

          if (response.ok) {
              setShowSuccessMessage(true);
              // const data = await response.json();
              // console.log(data.message);
              setEmail(''); 
          } else {
              const errorData = await response.json();
              console.log(`Error: ${errorData}`);
          }
        } catch (error) {
            console.error('Error submitting form:', error);
            alert('Failed to subscribe. Please try again later.');
        }
      }
  };

  return (
    <section className="w-full bg-primaryblue text-white py-12 rounded-lg">
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
            onChange={(e) => {setEmail(e.target.value); setShowSuccessMessage(false); setShowInvalidEmail(false); setShowError(false)}}
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
        <div className="flex justify-center">
            {showSuccessMessage && (
                <div className="border-2 border-green-500 rounded-md w-fit p-2 mt-2 text-center text-sm">
                    Congratulations, your request for subscription is received.
                </div>
            )}
            {showError && (
                <div className="border-2 border-red-500 text-red-400 w-fit rounded-md p-2 mt-2 text-center text-sm">
                    Oops! Please enter your email first.</div>
            )}
            {showInvalidEmail && (
                <div className="border-2 border-red-500 text-red-400 w-fit rounded-md p-2 mt-2 text-center text-sm">
                    Please enter a valid email address.
                </div>
            )}
        </div>
      </div>
    </section>
  );
};

export default StayConnected;
