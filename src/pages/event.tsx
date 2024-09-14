import React, { useState } from "react";

// Dummy event data with six events
const eventData = [
  { title: "Event 1", description: "Details about Event 1", imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYSsunq6CQXT9CsJ_90CPx6ETRjJIDX3zCxg&s" },
  { title: "Event 2", description: "Details about Event 2" },
  { title: "Event 3", description: "Details about Event 3" },
  { title: "Event 4", description: "Details about Event 4" },
  { title: "Event 5", description: "Details about Event 5" },
  { title: "Event 6", description: "Details about Event 6" },
];

// Popup component to show event details
const Popup = ({ event, onClose }: { event: { title: string; description: string }; onClose: () => void }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center">
      <div className="bg-white dark:bg-neutral-800 p-10 rounded-3xl shadow-lg w-3/4 md:w-2/3 lg:w-1/2">
        <h2 className="text-4xl font-bold mb-6 text-neutral-800 dark:text-neutral-200">{event.title}</h2>
        <p className="text-lg text-neutral-600 dark:text-neutral-400">{event.description}</p>
        <button
          className="mt-8 px-6 py-3 bg-blue-500 text-white rounded-full"
          onClick={onClose}
        >
          Close
        </button>
      </div>
    </div>
  );
};

// Single event card component with Apple-like style
const EventCard = ({ event, onClick }: { event: { title: string; description: string; imageUrl?: string }; onClick: () => void }) => {
  return (
    <div
      className="apple-card relative group bg-white dark:bg-neutral-900 shadow-lg rounded-xl overflow-hidden transform transition-transform duration-300 hover:scale-105 cursor-pointer flex flex-col justify-between"
      onClick={onClick}
    >
      {event.imageUrl && (
        <img
          src={event.imageUrl}
          alt={event.title}
          className="absolute inset-0 w-full h-full object-cover"
        />
      )}
      <div className="apple-card-content p-6 flex flex-col justify-between relative z-10">
        <h2 className="text-2xl font-semibold mb-4 text-neutral-900 dark:text-neutral-200">{event.title}</h2>
        <p className="text-base text-neutral-600 dark:text-neutral-400">{event.description}</p>
      </div>
    </div>
  );
};

const EventsPage = () => {
  const [selectedEvent, setSelectedEvent] = useState<{ title: string; description: string } | null>(null);

  const handleEventClick = (event: { title: string; description: string }) => {
    setSelectedEvent(event);
  };

  const handleClosePopup = () => {
    setSelectedEvent(null);
  };

  return (
    <div className="bg-black min-h-screen">
      <div className="min-h-screen gradient-bg p-8">
        <h1 className="text-4xl font-bold text-center mb-8 text-white">Events</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {eventData.map((event, index) => (
            <EventCard
              key={index}
              event={event}
              onClick={() => handleEventClick(event)}
            />
          ))}
        </div>
        {selectedEvent && (
          <Popup event={selectedEvent} onClose={handleClosePopup} />
        )}
      </div>

      {/* Adding CSS directly here for convenience */}
      <style >{`
        /* Apple-like card styles */
        .apple-card {
          position: relative;
          width: 100%;
          height: 100%;
          padding-top: 100%; /* Makes the height 100% of the width */
          overflow: hidden;
          border-radius: 24px;
          box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1); /* Soft shadow for a floating effect */
          transition: all 0.3s ease;
        }

        .apple-card:hover {
          box-shadow: 0 12px 36px rgba(0, 0, 0, 0.15); /* Hover shadow for more depth */
          transform: scale(1.05);
        }

        .apple-card-content {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          backdrop-filter: blur(10px); /* Blurring the background inside the card */
          background-color: rgba(255, 255, 255, 0.1); /* Transparent overlay */
          color: #333;
          padding: 1rem;
        }

        /* Gradient background */
        .gradient-bg {
          background: linear-gradient(45deg, #0a0a0a, #1a1a1a, #262626, #000000);
          background-size: 400% 400%;
          animation: gradientAnimation 10s ease infinite;
        }

        @keyframes gradientAnimation {
          0% {
            background-position: 0% 0%;
          }
          50% {
            background-position: 100% 100%;
          }
          100% {
            background-position: 0% 0%;
          }
        }

        /* Global styles for dark theme */
        body {
          background-color: #000000;
          color: #fff;
        }
      `}</style>
    </div>
  );
};

export default EventsPage;
