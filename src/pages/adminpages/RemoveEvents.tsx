// src/pages/adminpages/RemoveEvents.tsx

import React, { useState } from 'react';

// Sample data for events (replace this with actual event data)
const initialEventList = [
  {
    id: 1,
    title: 'Tech Talk',
    description: 'A talk on the latest in technology.',
    image: 'url_to_image_1.jpg', // Replace with the actual image URL
  },
  {
    id: 2,
    title: 'Workshop',
    description: 'Hands-on workshop for coding.',
    image: 'url_to_image_2.jpg', // Replace with the actual image URL
  },
  // Add more events as needed
];

const RemoveEvents = () => {
  const [events, setEvents] = useState(initialEventList);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [isConfirmationVisible, setConfirmationVisible] = useState(false);

  const handleCardClick = (event) => {
    setSelectedEvent(event);
    setConfirmationVisible(true);
  };

  const handleRemove = () => {
    // Remove the selected event from the events list
    setEvents(events.filter(event => event.id !== selectedEvent.id));
    setConfirmationVisible(false);
    setSelectedEvent(null);
  };

  const handleCancel = () => {
    setConfirmationVisible(false);
    setSelectedEvent(null);
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Remove Events</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {events.map((event) => (
          <div
            key={event.id}
            className="border rounded-lg overflow-hidden shadow hover:shadow-lg cursor-pointer"
            onClick={() => handleCardClick(event)}
          >
            <img src={event.image} alt={event.title} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h2 className="text-xl font-semibold">{event.title}</h2>
              <p className="text-gray-600">{event.description}</p>
            </div>
          </div>
        ))}
      </div>

      {isConfirmationVisible && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded shadow-lg">
            <h2 className="text-lg font-semibold mb-4">Are you sure you want to remove this event?</h2>
            <p className="mb-4">{selectedEvent.title}</p>
            <div className="flex justify-between">
              <button
                className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
                onClick={handleRemove}
              >
                Yes, Remove
              </button>
              <button
                className="bg-gray-300 text-gray-700 px-4 py-2 rounded hover:bg-gray-400"
                onClick={handleCancel}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default RemoveEvents;
