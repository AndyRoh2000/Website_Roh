"use client";

import React from "react";

const ContactForm: React.FC = () => {
  return (
    <div className="max-w-5xl mx-auto px-8 sm:px-10 lg:px-12 py-16">
      <form className="space-y-8">
        <div className="flex flex-col sm:flex-row gap-8">
          {/* Name Input */}
          <div className="w-full">
            <label htmlFor="name" className="block text-lg font-medium mb-2">
              Name
            </label>
            <input
              type="text"
              id="name"
              className="block w-full border rounded-lg p-3 text-lg focus:outline-none focus:ring-2"
              placeholder="Your Name"
            />
          </div>
          {/* Email Input */}
          <div className="w-full">
            <label htmlFor="email" className="block text-lg font-medium mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="block w-full border rounded-lg p-3 text-lg focus:outline-none focus:ring-2"
              placeholder="Your Email"
            />
          </div>
        </div>
        {/* Subject Input */}
        <div>
          <label htmlFor="subject" className="block text-lg font-medium mb-2">
            Subject
          </label>
          <input
            type="text"
            id="subject"
            className="block w-full border rounded-lg p-3 text-lg focus:outline-none focus:ring-2"
            placeholder="Subject"
          />
        </div>
        {/* Message Input */}
        <div>
          <label htmlFor="message" className="block text-lg font-medium mb-2">
            Message
          </label>
          <textarea
            id="message"
            rows={8}
            className="block w-full border rounded-lg p-3 text-lg focus:outline-none focus:ring-2"
            placeholder="Your Message"
          ></textarea>
        </div>
        {/* Submit Button */}
        <div>
          <button
            type="submit"
            className="px-6 py-3 w-full sm:w-auto rounded-lg text-lg font-medium border focus:outline-none focus:ring-2"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
