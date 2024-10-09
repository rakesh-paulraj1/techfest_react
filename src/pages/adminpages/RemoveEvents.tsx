// @ts-nocheck
import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { BACKEND_URL } from '../../config';
const RemoveEvents = () => {
  const [data, setData] = useState([]);
  const [events, setEvents] = useState([]);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [isConfirmationVisible, setConfirmationVisible] = useState(false);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await axios.get(`${BACKEND_URL}/getallevents`);
        const events = response.data.eventswithimageurls;

        // Transform the fetched events to match your structure
        const formattedData = events.map(event => ({
          id: event.event_id,
          title: event.event_name,
          price: `${event.event_price}`,
          image: event.event_image,
          description: event.event_description || 'No description available', // Fallback for description
        }));

        // Set the fetched and formatted events into state
        setData(formattedData);
        setEvents(formattedData); // Update the events state after fetching
      } catch (err) {
        console.error("Error fetching events:", err);
      }
    };

    fetchEvents();
  }, []);

  const handleCardClick = (event) => {
    setSelectedEvent(event);
    setConfirmationVisible(true);
  };

  const handleRemove = async () => {
    setEvents(events.filter(event => event.id == selectedEvent?.id));
    await axios.delete(`${BACKEND_URL}/admin/deleteevent/${selectedEvent.id}`,{
      withCredentials: true,
    });
    setConfirmationVisible(false);
    
    setSelectedEvent(null);
  };

  const handleCancel = () => {
    setConfirmationVisible(false);
    setSelectedEvent(null);
  };

  return (
    <div className="max-h-[80vh] overflow-y-auto">
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
              {/* <button
                className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
                onClick={()=>{
                  window.location.href = `/asmin/student`;
                }}
              >
                Yes, Remove
              </button> */}
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
