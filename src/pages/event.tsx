// @ts-nocheck

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  image_qr: string; 
  event_id:  string; 
  event_teamsize: string; 
}

import React, { useState } from "react";
import axios from "axios";
import { BACKEND_URL } from "../config";
import { useNavigate } from "react-router-dom";
const EventCard = ({ event, onClick }: { event: { title: string; description: string; src?: string }; onClick: () => void }) => {
  return (
    <div
    className="relative group bg-white dark:bg-neutral-900 shadow-lg rounded-xl overflow-hidden transform transition-transform duration-300 hover:scale-105 cursor-pointer flex flex-col justify-between"
    onClick={onClick}
  >
    {event.src && (
    <img
    src={event.src}
    alt={event.title}
     
  />
    )}
  </div>
  
  );
};


const Popup = ({ event, onClose }: { event: { title: string; description: string; price: string; imgSrc: string ,event_id:string,event_teamsize:string,event_qr:string,event_register_link:string,event_rulebook:string }; onClose: () => void }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();
  const handleRegisterClick = () => {
    const role = localStorage.getItem('role');
    
    if (role !== 'user') {
        navigate('/login'); 
    }  else {
        setIsModalOpen(true); 
    }
};

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };
  const handleFormSubmit = (upiNumber: string, transactionId: string) => {
    console.log("UPI Number:", upiNumber);
    console.log("Transaction ID:", transactionId);
   
    setIsModalOpen(false);
  };
  const convertUrlsToLinks = (text) => {
    return text.replace(
      /(https?:\/\/[^\s]+)/g,
      '<a href="$1" target="_blank" rel="noopener noreferrer">$1</a>'
    );
  };
  return (
    <div className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center">
    <div className="bg-white dark:bg-neutral-800 p-6 rounded-3xl shadow-lg h-full w-full md:w-3/4 lg:w-2/3 flex flex-col relative max-h-[90vh] overflow-y-auto">
      
      <button
        className="absolute top-4 right-4 bg-red-500 text-white px-4 py-2 rounded-full hover:bg-red-600 focus:outline-none"
        onClick={onClose}
      >
        Close
      </button>
    
     

      <div className="flex flex-col justify-start flex-1  overflow-y-auto">
  <img
    src={event.imgSrc}
    alt={`${event.title} image`}
    className="w-full h-auto object-contain mb-4"
  />
  <h2 className="text-4xl font-bold mb-4 text-neutral-800 dark:text-neutral-200">
    {event.title}
  </h2>
  <p className="font-semibold text-lg">{'Event Price ₹' + event.price}</p>
 
  <p className="font-semibold text-lg">{'Team size including you: ' + event.event_teamsize}</p>
  {event.event_rulebook && (
  <a
    className="font-bold text-blue-400 text-lg"
    href={event.event_rulebook}
    target="_blank"
    rel="noopener noreferrer"
  >
    <span> Click Here for Rule Book</span>
    <span className="absolute inset-x-0 w-1/2 mx-auto -bottom-px bg-gradient-to-r from-transparent via-blue-500 to-transparent h-px" />
  </a>
)}

  <p
    className="text-lg text-neutral-600 dark:text-neutral-400 mb-4"
    dangerouslySetInnerHTML={{
      __html: convertUrlsToLinks(event.description),
    }}
  />

  <div className="mt-4 flex justify-center">
  <a
  className="px-8 py-2 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-[6px] relative group transition duration-200 font-bold text-white hover:from-indigo-800 hover:to-purple-800"
  href={`${event.event_register_link}`} 
  target="_blank" 
  rel="noopener noreferrer" 
>
  <span>Register</span>
  <span className="absolute inset-x-0 w-1/2 mx-auto -bottom-px bg-gradient-to-r from-transparent via-blue-500 to-transparent h-px" />
</a>

  </div>
</div>

      
      <Modal 
        isOpen={isModalOpen}
        image_qr={event.event_qr} 
        onSubmit={handleFormSubmit} 
        onClose={handleCloseModal} 
        event_id={event.event_id}
        event_teamsize={event.event_teamsize}
      />
    </div>
  </div>
  
  );
};
// const Modal = ({ isOpen, onClose, }) => {
//   const handleBackdropClick = (event) => {
    
//     if (event.target === event.currentTarget) {
//       onClose();
//     }
//   };

//   return (
//     isOpen && (
//       <div
//         className="fixed inset-0 bg-black bg-opacity-50 flex items-start justify-center z-50" // Changed items-center to items-start
//       >
//         <div
//           className="bg-white p-5 rounded-lg shadow-lg w-11/12 md:w-1/3 mt-80" // Added mt-20 for vertical spacing
//         >
//           <h2 className="text-lg text-black font-bold">Coming Soon</h2>
//           <p className="mt-2 text-black">This event will be available for registration soon!</p>
//           <button
//             className="mt-4 bg-black text-white px-4 py-2 rounded hover:bg-gray-800 transition duration-200"
//             onClick={onClose}
//           >
//             Close
//           </button>
//         </div>
//       </div>
//     )
//   );
// };
const onSubmit = async (upiNumber: string, transactionId: string, event_id: string,iteamsize:string) => {
  
  try {
      
      const response = await axios.post(
        `${BACKEND_URL}/user/eventregistration`,
        { event_id, upi_id: upiNumber, transaction_id: transactionId,event_teamsize:iteamsize },
        { withCredentials: true }
      );
      if (response.data.message) {
        localStorage.setItem(`${event_id}`, "registerd");
        window.location.href = '/userprofile';
      } 
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.error('Error registering event:', error.response ? error.response.data : error.message);
        alert(  error.response?.data.error );
      } else {
        console.error('Unexpected error:', error);
      }
    }
};
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Modal: React.FC<ModalProps> = ({ isOpen, onClose, image_qr,event_id,event_teamsize }) => {
  const [upiNumber, setUpiNumber] = useState("");
  console.log(  event_teamsize);
  const [transactionId, setTransactionId] = useState("");
  const [iteamsize, setiteamsize] = useState("");
     console.log(event_id);
  const handleBackdropClick = (event: { target: unknown; currentTarget: unknown; }) => {
    if (event.target === event.currentTarget) {
      onClose();
    }
  };

  const handleSubmit = () => {
    if (localStorage.getItem(`${event_id}`)) {
        alert("You have already registered for this event.");
        return;
    }

    if (upiNumber && transactionId && event_teamsize) {
        onSubmit(upiNumber, transactionId, event_id,iteamsize);
    } else {
        alert("Please fill in both fields");
    }
};


  return (
    isOpen && (
      <div
        className="fixed inset-0 bg-black bg-opacity-50 flex items-start justify-center z-60"
        onClick={handleBackdropClick}
      >
<div className="bg-white p-5 rounded-lg shadow-lg w-full md:w-1/3 lg:w-1/3 fixed top-1 left-1/2 transform -translate-x-1/2 z-10 overflow-y-auto max-h-[90vh]">          {image_qr ? (
            <>
              <h2 className="text-lg text-black font-bold">Complete Payment</h2>
    
              <img
                src={image_qr}
                alt="QR Code"
                className="w-64 h-64 mx-auto mt-4"
              /> 
    
              <p className="mt-4 text-black">
                Pay using the above QR code, then provide your UPI ID and Transaction ID below:
              </p>
              <p className="mt-4 text-black font-bold">
                *ADD TECHSEPCTRUM-2024 AS A KEY TO THE PAYMENT
              </p>
              <select
                value={iteamsize}
                onChange={(e) => setiteamsize(e.target.value)}
                className="mt-4 p-2 w-full border rounded text-black"
              >
                {[...Array(event_teamsize)].map((_, index) => (
                  <option key={index + 1} value={index + 1}>
                    {index + 1}
                  </option>
                ))}
              </select>
              <input
                type="text"
                placeholder="Enter UPI Number"
                value={upiNumber}
                onChange={(e) => setUpiNumber(e.target.value)}
                className="mt-4 p-2 w-full border rounded text-black"
              />
    
              <input
                type="text"
                placeholder="Enter Transaction ID"
                value={transactionId}
                onChange={(e) => setTransactionId(e.target.value)}
                className="mt-4 p-2 w-full border rounded text-black"
              />
    
              <button
                className="mt-4 bg-black text-white px-4 py-2 rounded hover:bg-gray-800 transition duration-200 w-full"
                onClick={handleSubmit}
              >
                Submit
              </button>
            </>
    
          ) : (
            <>
              <h2 className="text-lg font-bold">Coming Soon</h2>
              <p className="mt-2">
                This event will be available for registration soon!
              </p>
            </>
          )}

          <button
            className="mt-4 bg-black text-white px-4 py-2 rounded hover:bg-gray-800 transition duration-200 w-full"
            onClick={onClose}
          >
            Close
          </button>
        </div>
      </div>
    )
  );
};


const EventsPage = () => {
  const [selectedEvent, setSelectedEvent] = useState<{ title: string; description: string; price: string; imgSrc: string,event_id:string,event_teamsize:string,event_qr:string,event_register_link:string ,event_rulebook:string} | null>(null);
 
  // const [data, setData] = useState([]);
  // console.log(selectedEvent);
  // useEffect(() => {
  //   const fetchEvents = async () => {
  //     try {
  //       const response = await axios.get(`${BACKEND_URL}/getallevents`);
  //       const events = response.data.eventswithimageurls;
       
  //       const formattedData = events.map((event: { event_name: string; event_price: string ; event_image: string; event_description: string; event_id: string; event_teamsize: string;event_qr:string }) => ({
  //         category: "SRMIST",
  //         title: event.event_name,
  //         price: `${event.event_price}`, 
  //         src: event.event_image,
  //         description: event.event_description,
  //         event_id:event.event_id,
  //         event_teamsize:event.event_teamsize,
  //         event_qr: event.event_qr,
  //       }));

  //       setData(formattedData);
  //     } catch (err) {
  //       console.error("Error fetching events:", err);
  //     }
  //   };
  // fetchEvents();},[])
  const events = [
    {
      event_name: "Hackathon",
      event_price: "Round 1(free),Round 2(400)",
      event_image: "assets/workshopimages/hackathon.png",
      event_description: "Welcome to an adrenaline-filled hackathon where creativity and innovation come to life! This exciting event invites participants to solve real-world problems. Whether you’re a beginner or an expert, this is your chance to showcase your skills and build cutting-edge solutions.",
      event_id: "E001",
      event_teamsize: "1-4",
      event_qr: "/images/event1_qr.jpg",
      event_register_link: "https://unstop.com/o/vFRGLVm?lb=kgsYG1W&utm_medium=Share&utm_source=shortUrl",
      event_rulebook: "https://docs.google.com/document/d/1Zq_eqzSavNh8wN9Wan5OOVte3CEM_7zNAslONY8Orqg/edit?usp=sharing",
    },

    {
      event_name: "Marathon",
      event_price: "50",
      event_image: "/assets/workshopimages/marathonnew.png",
      event_description: "Join the Tech Spectrum '24 Marathon to support mental health! Run for hope, health, and a stronger mind and spirit. Register with a fee starting at ₹50, and help raise funds for mental health initiatives. Date: October 25, 2024, at SRM IST, Tiruchirappalli.",
      event_id: "E001",
      event_teamsize: "1",
      event_qr: "/images/event1_qr.jpg",
      event_register_link: "https://forms.gle/bHbLtNYyTKXWMbKHA",
      event_rulebook: "",
    },{
      event_name: "Capture the Flag",
      event_price: "300",
      event_image: "assets/eventimages/Capturetheflag.jpg",
      event_description: "The Cyberanzen Club is excited to announce a thrilling Capture The Flag (CTF) event! Teams of 3 will engage in a race to solve various security challenges, including web exploitation, reverse engineering, cryptography, and system vulnerabilities. The event aims to enhance participants' cybersecurity skills, foster teamwork, and encourage healthy competition. The team that solves the challenges first and captures the flags wins.",
      event_id: "E001",
      event_teamsize: "3",
      event_qr: "/images/event1_qr.jpg",
      event_register_link: "https://forms.gle/r5r4zvdKhTZeweeXA",
      event_rulebook: "https://docs.google.com/document/d/1-9O0xocG3Edoc_3t-vQJR1yy2inP-RkFNU7hpABx4GI/edit?usp=sharing",
    },
    {
      event_name: "CIRCUWAVE",
      event_price: "300",
      event_image: "assets/eventimages/ciruwave (1).jpg",
      event_description: "Surf the waves of creativity and expertise in electronics engineering!",
      event_id: "E002",
      event_teamsize: "3",
      event_qr: "/images/event2_qr.jpg",
      event_register_link: "https://forms.gle/vcQTmJqXyfkjxZSk6",
      event_rulebook: "https://docs.google.com/document/d/14J0GfO_z28eMN1NBqXpECKhkwYj07RpeqdAPru5T4EY/edit?tab=t.0",
    },
    {
      event_name: "CLOUDCRAFT",
      event_price: "300",
      event_image: "assets/eventimages/cloudcraft.png",
      event_description: "Design and simulate drones using MATLAB in this hands-on event. Participants will create drone models, develop control algorithms, and test performance in simulated environments. Showcase your skills in drone design and optimization to achieve the best performance and innovation. Task:  Complete a line follower task in simulation using Simulink.",
      event_id: "E003",
      event_teamsize: "3",
      event_qr: "/images/event3_qr.jpg",
      event_register_link: "https://forms.gle/v5PFnFkSFetdmauf7",
      event_rulebook: "https://docs.google.com/document/d/1P8MaYTKYo8mDmBBYi2pHa5RS2CWOUMxNTrc392friLc/edit?usp=sharing",
    },
    {
      event_name: "Cosmic Connection",
      event_price: "500",
      event_image: "assets/eventimages/cosmicconnectionsideathon (1).jpg",
      event_description: "Explore this exciting ideathon where participants tackle real-world challenges inspired by space exploration, from exploring methods of communication across vast cosmic distances, sustaining life in extreme environments and addressing ethical concerns of potentially life-bearing worlds, participants will design innovative systems and prototypes while engaging in creative thinking, brainstorming, and fun challenges. This thrilling event blends creativity and science, pushing the boundaries of what's possible when space meets life!",
      event_id: "E004",
      event_teamsize: "5",
      event_qr: "/images/event4_qr.jpg",
      event_register_link: "https://forms.gle/qvVqu4nHgdsFsmzXA",
      event_rulebook: "https://docs.google.com/document/d/1Ovs4a_TNUdb381vc1C_r5XZLNKoYT3ka0isDl9wjPnY/edit?usp=sharing"
    },
    {
      event_name: "DevStorm",
      event_price: "400",
      event_image: "assets/eventimages/DEVSTORM  (1).jpg",
      event_description: "DevStorm is a high-octane app development competition that challenges participants to turn their innovative ideas into fully functional apps. Teams will be given a problem statement at the start of the event and must design, code, and present an app that provides a creative solution. Whether it's a mobile ( android ) app, participants will need to combine their technical expertise with out-of-the-box thinking to build something truly impactful. The storm of coding, creativity, and collaboration will culminate in the ultimate showcase of talent, as teams race against the clock to deliver their apps to the panel of expert judges. Get ready to dive into a whirlwind of development and emerge victorious!",
      event_id: "E005",
      event_teamsize: "4",
      event_qr: "/images/event5_qr.jpg",
      event_register_link: "https://forms.gle/jvSpR48ATScpzG4BA",
      event_rulebook: "https://docs.google.com/document/d/1PdCEKHMf93qINNDklIXk5r0IrLjSFX9JT-LwXq9dcFo/edit?tab=t.0",
    },
    {
      event_name: "Ideanova",
      event_price: "400",
      event_image: "assets/eventimages/Ideanova.png",
      event_description: "Join us for an exciting Ideathon, where creativity meets innovation! Pitch your boldest ideas, collaborate with diverse minds, and solve real-world challenges in a fast-paced, fun environment. Turn your concepts into actionable solutions and win awesome prizes!",
      event_id: "E005",
      event_teamsize: "4",
      event_qr: "/images/event5_qr.jpg",
      event_register_link: "https://forms.gle/31bUhcSdkdJnorQU8",
      event_rulebook:"https://docs.google.com/document/d/1oRGyfd9_62DoUMgtBWoANnLN9UdHZDM3R48ODF88yp4/edit?usp=sharing"
    }, {
      event_name: "Pitch Perfect",
      event_price: "350",
      event_image: "assets/eventimages/pitchcperfect.jpg",
      event_description: "The Paper Presentation offers participants an opportunity to present their research on cutting-edge technologies. Topics of interest include the intersection of open-source software with emerging fields such as AI/ML, open source technologies, and sustainable technological solutions. Participants will showcase their innovative ideas and findings to a panel of experts, promoting a collaborative exchange of knowledge and insights. ",
      event_id: "E005",
      event_teamsize: "4",
      event_qr: "/images/event5_qr.jpg",
      event_register_link: "https://forms.gle/hBwGLDRCdJxQ1BN78",
      event_rulebook: "https://docs.google.com/document/d/1X0cbPwZ0Ch1svy_C1ggraY05xh_U9FTSCH1y9aRysb8/edit?tab=t.0",
    }, {
      event_name: "SUMO ROBO WAR",
      event_price: "300",
      event_image: "assets/eventimages/robo.png",
      event_description: "Participants build remote-controlled (RC) or autonomous cars that battle against each other in a designated arena. The goal is to disable or push the opponent’s car out of the arena or follow any specific battle challenge defined by the event organizers.",
      event_id: "E005",
      event_teamsize: "3",
      event_qr: "assets/eventimages/shark tank edc.jpg",
      event_register_link: "https://forms.gle/pLnsJWSvSfVZiJmZ7",
      event_rulebook: "https://docs.google.com/document/d/1A5SR2Y-mW2Fp8I0OJzTFW8A7IcbMqo3AXtg9xZLsa6g/edit?usp=sharing",
    }, {
      event_name: "Stump the data",
      event_price: "250",
      event_image: "assets/eventimages/stumpthedata (2).jpg",
      event_description: "Are you ready to test your machine learning skills on a dataset filled with cricket insights? Join us for the Cricket Data Challenge, a datathon where your task is to develop a high-performance ML model to solve a real-world problem using cricket data. This is your chance to dive into player statistics, match details, and team dynamics to extract meaningful patterns and predictions!Participants will be given a dataset based on cricket, and the goal is to build an ML model that achieves the highest precision or accuracy. Compete with the brightest data enthusiasts and prove your skills in data preprocessing, feature engineering, model selection, and tuning. Whether you are a cricket fanatic or a data science wizard, this datathon will challenge your creativity and expertise!",
      event_id: "E005",
      event_teamsize: "2",
      event_qr: "/images/event5_qr.jpg",
      event_register_link: "https://forms.gle/JU7eYErLchHF25w78",
      event_rulebook: "https://docs.google.com/document/d/1vy4ukI3bDaYFXm5KkoAEMf46whI-sgw1_L_-SipIa6U/edit?usp=sharing",
    },
    {
      event_name: "Deep Learning and GEN AI Workshop",
      event_price: "150",
      event_image: "assets/workshopimages/ml wrokshop.png",
      event_description: "Join us for an exciting Quantum Machine Learning workshop at TechSpectrum '24! Explore the cutting-edge field where quantum computing meets machine learning to revolutionize efficiency and performance. Learn from experts, participate in hands-on sessions, and discover the future of AI.Register now and be part of this innovative journey!",
      event_id: "E005",
      event_teamsize: "1",
      event_qr: "/images/event5_qr.jpg",
      event_register_link: "https://forms.gle/oLLmFGfBe5cvgR8e9",
      event_rulebook: "",
    },
    {
      event_name: "Quantum Machine Learning Workshop",
      event_price: "150",
      event_image: "assets/workshopimages/quantum.png",
      event_description: "Get ready for an exciting journey into the world of Deep Learning and Generative AI at TechSpectrum '24! This hands-on workshop will cover the fundamentals of deep learning and explore cutting-edge generative AI models that are reshaping industries. Learn from experts and gain practical experience in building AI solutions.Register today and take your AI skills to the next level!",
      event_id: "E005",
      event_teamsize: "1",
      event_qr: "/images/event5_qr.jpg",
      event_register_link: "https://forms.gle/FQ88AxH5dp5CJPvV6",
      event_rulebook: "",
    },{
      event_name: "Shark Tank",
      event_price: "300",
      event_image: "assets/eventimages/shark tank edc.jpg",
      event_description: "A deep dive into blockchain technologies and applications.",
      event_id: "E005",
      event_teamsize: "3",
      event_qr: "/images/event5_qr.jpg",
      event_register_link: "https://forms.gle/hoaEuANcZvJWSrvi6",
      event_rulebook: "https://docs.google.com/document/d/1Gh_-EmiSoUZiLpF-01VsyyXenOx3Ba9bbab_vJ8ffTA/edit?tab=t.0",
    },
    {
      event_name: "Geek for Geeks Workshop",
      event_price: "Free",
      event_image: "assets/workshopimages/geekfogeeeeks.jpeg",
      event_description: "The AI/ML Online Bootcamp by GeeksforGeeks (GFG) for SRM, Trichy is a comprehensive program designed to introduce participants to the fundamentals of Data Science, Python, and Machine Learning. This hands-on bootcamp focuses on building practical skills through interactive sessions and real-world projects, making it ideal for students and professionals seeking to enhance their knowledge in AI and ML.",
      event_id: "E005",
      event_teamsize: "1",
      event_qr: "/images/event5_qr.jpg",
      event_register_link: "https://www.geeksforgeeks.org/courses/ai-ml-srm-trichy",
      event_rulebook: "",
    },
  ];

  
  const data = events.map((event) => ({
    category: "SRMIST",
    title: event.event_name,
    price: event.event_price,
    src: event.event_image,
    description: event.event_description,
    event_id: event.event_id,
    event_teamsize: event.event_teamsize,
    event_qr: event.event_qr,
    event_register_link: event.event_register_link,
    event_rulebook: event.event_rulebook,
  }));
  
  
  
  
 
  
  const handleEventClick = (event: { title: string; description: string; price: string; imgSrc: string; event_id: string,event_teamsize:string,event_qr:string ,evnet_register_link:string,event_rulebook:string }) => {
    setSelectedEvent({
      title: event.title,
      description: event.description,
      price: event.price,
      imgSrc: event.imgSrc,
      event_id: event.event_id,
      event_teamsize:event.event_teamsize,
      event_qr:event.event_qr,
      event_register_link: event.event_register_link,
      event_rulebook: event.event_rulebook,
    });
   
  };

  const handleClosePopup = () => {
    setSelectedEvent(null);
  };

  return (
    <div className="bg-black min-h-screen">
      <button
    className="absolute top-4 left-4 bg-slate-50 text-black px-4 py-2 rounded-full hover:bg-slate-300 transition-transform duration-300"
    onClick={() => window.location.href = '/'} 
  >
   MainMenu
  </button>
      <div className="min-h-screen gradient-bg p-8">
        <h1 className="text-4xl font-bold text-center mb-8 text-white">Events</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {data.map((event, index) => (
            <EventCard
              key={index}
              event={event}
              onClick={() => handleEventClick({ title: event.title, description: event.description, price: event.price, imgSrc: event.src, event_id: event.event_id, event_teamsize: event.event_teamsize,event_qr:event.event_qr,event_register_link:event.event_register_link,event_rulebook:event.event_rulebook } as { title: string; description: string; price: string; imgSrc: string; event_id: string; event_teamsize: string,event_qr:string,event_register_link:string,event_rulebook:string  })}
            />
          ))}
        </div>
        {selectedEvent && (
         
          <Popup event={selectedEvent} onClose={handleClosePopup} />
        )}
      </div>

      {/* Adding CSS directly here for convenience */}
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
//     image_qr:""
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

export default EventsPage;
