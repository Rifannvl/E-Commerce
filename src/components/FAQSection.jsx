import React, { useState } from "react";

const FAQItem = ({ question, answer, isOpen, onClick }) => (
  <div className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-lg transition-shadow duration-300 hover:shadow-xl">
    <button
      type="button"
      className="flex items-center justify-between w-full px-6 py-5 text-left bg-gray-50 hover:bg-gray-100"
      onClick={onClick}
    >
      <span className="text-lg font-semibold text-gray-800">{question}</span>
      <svg
        className={`w-6 h-6 text-gray-600 transition-transform duration-300 ${
          isOpen ? "rotate-180" : "rotate-0"
        }`}
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M19 9l-7 7-7-7"
        />
      </svg>
    </button>
    {isOpen && (
      <div className="px-6 py-5 bg-gray-100">
        <p className="text-base text-gray-700">
          {answer}{" "}
          <a
            href="#"
            className="text-blue-600 hover:text-blue-700 transition-colors duration-200 font-medium"
          >
            Learn more
          </a>
        </p>
      </div>
    )}
  </div>
);

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-12 bg-gray-50 sm:py-16 lg:py-24">
      <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-6xl">
        <div className="text-center">
          <h2 className="text-4xl font-bold leading-tight text-gray-900 sm:text-5xl lg:text-6xl">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-xl mx-auto">
            Find answers to the most common questions we receive.
          </p>
        </div>
        <div className="mt-8 space-y-6">
          <FAQItem
            question="How to create an account?"
            answer="Creating an account is simple. Just follow the instructions on the registration page and you'll be set up in no time."
            isOpen={openIndex === 0}
            onClick={() => toggleFAQ(0)}
          />
          <FAQItem
            question="How can I make payment using PayPal?"
            answer="You can make payments using PayPal by selecting PayPal as your payment option at checkout."
            isOpen={openIndex === 1}
            onClick={() => toggleFAQ(1)}
          />
          <FAQItem
            question="Can I cancel my plan?"
            answer="Yes, you can cancel your plan at any time through your account settings or by contacting support."
            isOpen={openIndex === 2}
            onClick={() => toggleFAQ(2)}
          />
          <FAQItem
            question="How can I reach support?"
            answer="You can reach our support team by email, phone, or through the contact form on our website."
            isOpen={openIndex === 3}
            onClick={() => toggleFAQ(3)}
          />
        </div>
        <p className="mt-8 text-center text-gray-600 text-base">
          Didn’t find the answer you are looking for?{" "}
          <a
            href="#"
            className="font-medium text-blue-600 hover:text-blue-700 transition-colors duration-200"
          >
            Contact our support
          </a>
        </p>
      </div>
    </section>
  );
};

export default FAQSection;
