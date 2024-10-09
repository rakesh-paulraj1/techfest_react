interface Event {
  status: string;
  upi_id: string;
  registration_id: string;
  transaction_id: string;
  title: string;
  description: string;
  price: string;
  src: string;
  teamsize: string;
}

import  { useState,useEffect } from "react";
import axios from "axios";
import { BACKEND_URL } from "../config";
const EventCard = ({ event, onClick }: { event: { title: string; description: string; src: string }; onClick: () => void }) => {
  return (
    <div
    className="relative group bg-white dark:bg-neutral-900 shadow-lg rounded-xl overflow-hidden transform transition-transform duration-300 hover:scale-105 cursor-pointer flex flex-col justify-between"
    onClick={onClick}
  >
    
    <div className="text-2xl font-semibold mb-4 text-neutral-900 dark:text-neutral-200 text-center p-4">
      {event.title}
     
    </div>

    {event.src && (
      <img
        src={event.src}
        alt={event.title}
        className="w-full h-full object-cover"
      />
    )} 
  </div>
  
  );
};


const Popup = ({ event, onClose }: { event: { registration_id: string; transaction_id: string; upi_id: string; status: string,teamsize:string }; onClose: () => void }) => {
  const handleCloseModal = () => {
    onClose();  // Close the popup
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center">
      <div className="bg-white dark:bg-neutral-800 p-10 rounded-3xl shadow-lg w-4/5 md:w-3/4 lg:w-2/3 flex relative">
        
        <button
          className="absolute top-4 right-4 bg-red-500 text-white px-4 py-2 rounded-full hover:bg-red-600 focus:outline-none"
          onClick={handleCloseModal}
        >
          Close
        </button>

        <div className="flex flex-col justify-start flex-1">
          {/* Display fields for registration details */}
          <div className="mb-4">
            <label className="block text-neutral-800 dark:text-neutral-200 mb-2">
              Registration ID:
            </label>
            <p className="text-neutral-600 dark:text-neutral-400">
              {event.registration_id}
            </p>
          </div>

          <div className="mb-4">
            <label className="block text-neutral-800 dark:text-neutral-200 mb-2">
              Transaction ID:
            </label>
            <p className="text-neutral-600 dark:text-neutral-400">
              {event.transaction_id}
            </p>
          </div>

          <div className="mb-4">
            <label className="block text-neutral-800 dark:text-neutral-200 mb-2">
              UPI ID:
            </label>
            <p className="text-neutral-600 dark:text-neutral-400">
              {event.upi_id}
            </p>
          </div>
          <div className="mb-4">
            <label className="block text-neutral-800 dark:text-neutral-200 mb-2">
             Your Team size:
            </label>
            <p className="text-neutral-600 dark:text-neutral-400">
              {event.teamsize}
            </p>
          </div>

          <div className="mb-4">
            <label className="block text-neutral-800 dark:text-neutral-200 mb-2">
              Payment Status:
            </label>
            <p className="text-neutral-600 dark:text-neutral-400">
              {event.status}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};



const Userprofile = () => {
  const [selectedEvent, setSelectedEvent] = useState<{ title: string; description: string; price: string; src: string ,registration_id: string; transaction_id: string; upi_id: string; status: string,teamsize:string } | null>(null);
 const [data, setData] = useState([]);
 

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await axios.get(`${BACKEND_URL}/user/getregisterdevents`,{withCredentials:true});
        const events = response.data.eventswithimageurls;
 
      
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const formattedData = events.map((registration: { Event: { event_name: unknown; event_price: any; event_image: any; event_description: any; }; registration_id: any; transaction_id: any; upi_id: any; verification_status: any; event_teamsize: any; }) => ({
    category: "SRMIST", 
    title: registration.Event.event_name, 
    price: `${registration.Event.event_price}`, 
    src: registration.Event.event_image,
    description: registration.Event.event_description, 
    registration_id: registration.registration_id,
    transaction_id: registration.transaction_id, 
    upi_id: registration.upi_id, 
    status: registration.verification_status, 
    teamsize: registration.event_teamsize,
  }));
  
console.log(data);
        setData(formattedData);
      } catch (err) {
        console.error("Error fetching events:", err);
      }
    };
  fetchEvents();},[])
  const handleEventClick = (event: { title: string; description: string; price: string; src: string; registration_id: string; transaction_id: string; upi_id: string; status: string; teamsize: string }) => {
    setSelectedEvent(event);
  };

  const handleClosePopup = () => {
    setSelectedEvent(null);
  };

  return (
    <div className="bg-black min-h-screen">
      <button
    className="absolute top-4 left-4 bg-slate-50 text-black px-4 py-2 rounded-full hover:bg-slate-300 transition-transform duration-300"
    onClick={() => window.location.href = '/'} // Adjust path as necessary
  >
   MainMenu
  </button>
  <button
    className="absolute top-4 right-4 bg-slate-50 text-black px-4 py-2 rounded-full hover:bg-slate-300 transition-transform duration-300"
    onClick={() =>{
        axios.post(`${BACKEND_URL}/userlogout`, {}, {
          withCredentials: true
        }).then(() => {
          localStorage.clear();
          window.location.href = '/';
        }).catch((error) => {
          console.error('Logout failed:', error);
        });
      }}
  >
  Logout
  </button>
      <div className="min-h-screen gradient-bg p-8">
        <h1 className="text-4xl font-bold text-center mb-8 text-white">Hello Student</h1>
        <h2 className="text-2xl font-bold text-left mb-8 text-white">Registred events</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

        {data.map((event: Event, index: number) => (
          
  <EventCard
    key={index}
    event={event}
    onClick={() => handleEventClick({
      title: event.title,
      description: event.description,
      price: event.price,
      src: event.src,
      teamsize: event.teamsize,
      registration_id:event.registration_id,
      transaction_id: event.transaction_id,
      upi_id: event.upi_id,
      status: event.status,
      
    })}
  />
))}

        </div>
        {selectedEvent && (
          <Popup event={selectedEvent} onClose={handleClosePopup} />
        )}
      </div>

      
      <style>{`
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

  /* Gradient background with image */
  .gradient-bg {
    background: url('https://your-image-url.com/background-image.jpg') center center / cover no-repeat; /* Use your image URL here */
    background-size: cover; /* Ensures the image covers the entire background */
    background-position: center;
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

// Sample data for events
// export const data = [
//   {
//     category: "SRMIST",
//     title: "Crypt-o-Track",
//     price: "$20",
//     description: "A crime investigation event on the AI (Artificial intelligence) platform with clues based on images, QR codes, coding, and algorithms. A case file will be provided with formats. The winner will depend on the report submitted.",
//     src: "https://www.knowafest.com/files/uploads/WhatsApp%20Image%202022-11-02%20at%2018.38.17-2022110203.jpg",
//   },
//   {
//     category: "SRMIST",
//     title: "Reverse Engineering",
//     price: "$15",
//     description: "Reverse engineering is the process of analyzing software in order to understand how it works. This involves taking a program apart, examining the individual components, and identifying the logic of the underlying algorithms.",
//     src: "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/66aced86518357.5d9c37a10c838.jpg",
//   },
//   {
//     category: "SRMIST",
//     title: "Tech Spectrum",
//     price: "$25",
//     description: "Tech Spectrum is a technology festival that brings together tech enthusiasts from different backgrounds to showcase their innovative projects, learn from industry leaders, and network with like-minded individuals.",
//     src: "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/5e92ff86518357.5d9c37a10c838.jpg",
//   },,
//   {
//     category: "SRMIST",
//     title: "Reverse Engineering",
//     price: "$15",
//     description: "Reverse engineering is the process of analyzing software in order to understand how it works. This involves taking a program apart, examining the individual components, and identifying the logic of the underlying algorithms.",
//     src: "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/66aced86518357.5d9c37a10c838.jpg",
//   }
  
// ];

export default Userprofile;
