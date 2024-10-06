// src/pages/NoticeBoard.tsx
import React, { useState } from 'react';

const NoticeBoard: React.FC = () => {
  const [upiId, setUpiId] = useState('');
  const [transactionId, setTransactionId] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle the form submission logic here (e.g., send data to the server)
    console.log('UPI ID:', upiId);
    console.log('Transaction ID:', transactionId);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black text-white p-4">
      {/* Event Name */}
      <h1 className="text-4xl font-bold mb-4 text-center text-white-500">Crypt-o-Track</h1> {/* Added Event Name */}

      {/* Important Details Box */}
      <div className="bg-black bg-opacity-60 p-6 rounded-lg shadow-lg w-full w-128 mb-8 border border-gray-700">
        <h2 className="text-xl font-bold mb-4 text-center">Important Event Details</h2>
        <p className="text-base">
          Here you can find all the important information about our upcoming events.
          Please ensure that you check this box regularly for updates and announcements.
        </p>
      </div>

      {/* Centered Image */}
      <img
        src="https://en.pimg.jp/064/305/428/1/64305428.jpg" // Replace with your image URL
        alt="Notice Board"
        className="mb-8 w-full max-w-lg object-contain" // Centered and bigger image
      />
      
      {/* Notice Board Box */}
      <div className="bg-black bg-opacity-60 p-6 rounded-lg shadow-lg w-full w-120 border border-gray-700">
        <h2 className="text-xl font-bold mb-4 text-center">Payment Information</h2>
        <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
          <input
            type="text"
            placeholder="Enter your UPI ID"
            value={upiId}
            onChange={(e) => setUpiId(e.target.value)}
            className="p-2 rounded border border-gray-600 bg-gray-700 focus:outline-none focus:ring focus:ring-gray-500"
            required
          />
          <input
            type="text"
            placeholder="Enter your Transaction ID"
            value={transactionId}
            onChange={(e) => setTransactionId(e.target.value)}
            className="p-2 rounded border border-gray-600 bg-gray-700 focus:outline-none focus:ring focus:ring-gray-500"
            required
          />
          <button
            type="submit"
            className="bg-white hover:bg-black-700 transition duration-200 text-black font-semibold py-2 rounded"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default NoticeBoard;
