"use client";

import React from "react";

const ContactForm: React.FC = () => {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <form className="space-y-6">
        <div className="flex flex-col sm:flex-row gap-6">
          {/* Name Input */}
          <div className="w-full">
            <label htmlFor="name" className="block text-sm font-medium mb-1">
              Name
            </label>
            <input
              type="text"
              id="name"
              className="block w-full border rounded-md p-2 text-sm focus:outline-none focus:ring-2"
              placeholder="Your Name"
            />
          </div>
          {/* Email Input */}
          <div className="w-full">
            <label htmlFor="email" className="block text-sm font-medium mb-1">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="block w-full border rounded-md p-2 text-sm focus:outline-none focus:ring-2"
              placeholder="Your Email"
            />
          </div>
        </div>
        {/* Subject Input */}
        <div>
          <label htmlFor="subject" className="block text-sm font-medium mb-1">
            Subject
          </label>
          <input
            type="text"
            id="subject"
            className="block w-full border rounded-md p-2 text-sm focus:outline-none focus:ring-2"
            placeholder="Subject"
          />
        </div>
        {/* Message Input */}
        <div>
          <label htmlFor="message" className="block text-sm font-medium mb-1">
            Message
          </label>
          <textarea
            id="message"
            rows={6}
            className="block w-full border rounded-md p-2 text-sm focus:outline-none focus:ring-2"
            placeholder="Your Message"
          ></textarea>
        </div>
        {/* Submit Button */}
        <div>
          <button
            type="submit"
            className="px-4 py-2 w-full sm:w-auto rounded-md text-sm font-medium border focus:outline-none focus:ring-2"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
