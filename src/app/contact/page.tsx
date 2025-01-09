import React from 'react';
import { Button } from '@/components/ui/button';

export default function Contact() {
  return (
    <div className="flex flex-col items-center justify-center p-6">
      <div className="text-center font-bold text-3xl mb-6">
        Contact Us
      </div>

      {/* Form Section */}
      <div className="flex flex-col items-center gap-6 w-full max-w-xl">
        {/* Name Input */}
        <div className="w-full">
          <h3 className="text-xl font-bold text-gray-800">Name</h3>
          <textarea
            name="Name"
            placeholder="Your Name"
            className="w-full mt-2 px-4 py-2 border border-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          ></textarea>
        </div>

        {/* Email Input */}
        <div className="w-full">
          <h3 className="text-xl font-bold text-gray-800">Email</h3>
          <textarea
            name="Email"
            placeholder="Your Email"
            className="w-full mt-2 px-4 py-2 border border-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          ></textarea>
        </div>

        {/* Message Input */}
        <div className="w-full">
          <h3 className="text-xl font-bold text-gray-800">Message</h3>
          <textarea
            name="Message"
            placeholder="Your Message"
            rows={5}
            className="w-full mt-2 px-4 py-2 border border-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          ></textarea>
        </div>

        {/* Submit Button */}
        <Button className="w-full bg-black text-slate-50 rounded-lg hover:shadow-xl mt-4 py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500">
          Submit
        </Button>
      </div>
    </div>
  );
}
