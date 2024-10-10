interface Event {
  title: string;           
  price: string;         
  description: string;   
  imgSrc: string;         
  image_qr: string;       
  event_id: string; 
}

import React, { useState,useEffect,useRef  } from "react";
import {  useNavigate } from "react-router-dom";
import { Menu } from "../components/Navbar-menu";
import { HeroParallax } from "../components/hero";

import { MaskContainer } from "../components/svg-mask-effect";
import { FocusCards } from "../components/focus-cards";
import axios from "axios";
import { BACKEND_URL } from "../config";
import { Typewriter } from "../components/code-effect";
import { StyledWrapper } from "../components/styled-components";


import { Link } from "react-router-dom";

const Dashboard = () => {

  
  const homeRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const tcards = [
  
    { title: "Card 1", src: "assets/images/evengtimage7.jpeg" },
    { title: "Card 2", src: "assets/images/eventimage2.JPG" },
    { title: "Card 3", src: "assets/images/eventimage1.JPG" },
    { title: "Card 4", src: "assets/images/eventimage3.jpeg" },
    { title: "Card 5", src: "assets/images/eventimage10.jpeg" },
    { title: "Card 6", src: "assets/images/eventimage8.jpeg" },
    { title: "Card 7", src: "assets/images/eventimage9.jpeg" },
    { title: "Card 8", src: "assets/images/eventimage6.jpeg" },
    { title: "Card 9", src: "assets/images/eventimage7.jpeg" },
    { title: "Card 10", src: "assets/images/eventimage4.jpeg" },
    
  ];
  
    
  


  
  const textToDisplay = "  srmist@Unknown-2 ~ % TechSpectRuM will feature various technical competitions, workshops, hackathons, and exhibitions, providing participants with a platform to showcase their skills, collaborate on innovative ideas, and explore the latest trends in technology. The event will be a hub for innovation, learning, and networking, where attendees can immerse themselves in cutting-edge technology and engage with industry leaders. Companies are invited to sponsor the event and are also encouraged to introduce new event ideas, allowing for a collaborative and dynamic experience for all involved."; // Text you want to display


  
  return (
    <div className="bg-black min-h-screen">

      <Navbar homeRef={homeRef} aboutRef={aboutRef} />
     <div ref={homeRef}>
        <HeroParallax />
        <div className="mx-auto w-full max-w-[1410px] h-auto sm:h-[1290px] md:h-[600px] lg:h-[400px] translate-y-45 rounded-md flex items-center justify-center relative overflow-hidden">
  <div className="bg-black sm:py-10 translate-y-0">
    <div className="mx-auto max-w-7xl mt-18 px-5 lg:px-8">
      <h2 className="text-1xl relative z-20 md:text-4xl lg:text-5xl text-center text-black dark:text-white font-sans tracking-tight">
        Our {}
        <div className="relative mx-auto inline-block w-max [filter:drop-shadow(0px_1px_3px rgba(27,37,80,0.14))]">
          <div className="font-bold absolute left-0 top-[1px] bg-clip-text bg-no-repeat text-transparent bg-gradient-to-r py-4 from-purple-500 via-violet-500 to-pink-500 [text-shadow:0_0 rgba(0,0,0,0.1)]">
            <span className="">Sponsors</span>
          </div>
          <div className="font-bold relative bg-clip-text text-transparent bg-no-repeat bg-gradient-to-r from-purple-500 via-violet-500 to-pink-500 py-4">
            <span className="">Sponsors</span>
          </div>
        </div>
      </h2>
      <div className="mx-auto grid grid-cols-2 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-x-14 gap-y-12 items-center justify-center">
        <img
          alt="Transistor"
          src="assets/sponsorslogo/download__2_-removebg-preview.png"
          width={158}
          height={48}
          className="max-h-28 w-full object-contain lg:col-span-1"
        />
        <img
          alt="Reform"
          src="assets/sponsorslogo/download-removebg-preview.png"
          width={158}
          height={48}
          className="max-h-28 w-full object-contain lg:col-span-1"
        />
        <img
          alt="Tuple"
          src="assets/sponsorslogo/WhatsApp_Image_2024-10-09_at_10.12.34_93d956a4-removebg-preview.png"
          width={158}
          height={48}
          className="max-h-28 w-full object-contain lg:col-span-1"
        />
        <img
          alt="SavvyCal"
          src="assets/sponsorslogo/White_and_Brown_Elegant_Simple_Boba_Drink_Logo_20240627_113859_0001-removebg-preview.png"
          width={158}
          height={48}
          className="max-h-28 w-full object-contain lg:col-span-1"
        />
         <img
          alt=""
          src="assets\sponsorslogo\Burger_beats_logo_curved-removebg-preview.png"
          width={158}
          height={48}
          className="max-h-28 w-full object-contain lg:col-span-1"
        />
          <img
          alt=""
          src="assets\sponsorslogo\1000013675-removebg-preview.png"
          width={158}
          height={48}
          className="max-h-28 w-full object-contain lg:col-span-1"
        />
         <img
          alt=""
          src="assets\sponsorslogo\Logo_01.png"
          width={158}
          height={48}
          className="max-h-28 w-full object-contain lg:col-span-1"
        />
           <img
          alt=""
          src="assets\sponsorslogo\TN 45 CAFE_SOCIAL MEDIA DP copy 2.jpg"
          width={158}
          height={48}
          className="max-h-28 w-full object-contain lg:col-span-1"
        />

      </div>
      
    </div>
  </div>
  </div>
      </div>
        <div ref={aboutRef} className="mt-[90px]">
        <FocusCards cards={tcards} />
      </div>
    
    
      
      <div className="mt-20 mx-auto bg-black w-full sm:w-[90%] md:w-[910px] lg:w-[1024px] h-auto sm:h-[400px] lg:h-[350px] translate-y-45 rounded-md flex flex-col xl:flex-row items-center justify-center px-4 py-6">
      <StyledWrapper>
      <div className="card">
        <div className="boxshadow" />
        <div className="main">
          <div className="top" />
          <div className="left side" />
          <div className="right side" />
          <div className="title">Follow Us</div>
          <div className="button-container">
            <button className="button">
              <svg
                className="svg"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                stroke="red"
                fill="none"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
              </svg>
            </button>
            <button className="button">
              <svg
                className="svg twitter"
                xmlns="http://www.w3.org/2000/svg"
                height="24"
                width="24"
                fill="red"
                viewBox="0 0 512 512"
              >
                <path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z"></path>
              </svg>
            </button>
            <button className="button">
              <svg
                className="svg"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="red"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
                <path d="M9 18c-4.51 2-5-2-7-2" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </StyledWrapper>


    <div className="terminal p-0 rounded-lg font-mono w-full sm:w-[280px] md:w-[500px] h-auto sm:h-[200px] md:h-[360px] translate-x-0 sm:translate-x-4 md:translate-x-12">
  <div className="pb-2 terminal-header bg-zinc-800 text-white p-3 rounded-t-lg flex items-center">
    <div className="flex space-x-2 text-red-500">
      <div className="w-3 h-3 rounded-full bg-red-500" />
      <div className="w-3 h-3 rounded-full bg-yellow-500" />
      <div className="w-3 h-3 rounded-full bg-green-500" />
    </div>
    <span className="ml-4 align-baseline">
      SRMIST Tiruchirappalli Campus
    </span>
  </div>

  <div className="mb-10 pl-2 pt-3 bg-gray-900 h-[190px] sm:h-[160px] md:h-[240px] overflow-hidden" id="output">
    <Typewriter text={textToDisplay} speed={90} />
  </div>
</div>

    </div>

      <MaskContainer
        
        revealText={
          
          <p className="max-w-4xl mx-auto text-slate-800 text-center  text-4xl font-bold ">
           SRMIST Tiruchirappalli's Biggest Techfest on October 24th and 25th, 2024
          </p>
          
        }
        className="mt-10 h-[20rem] border rounded-md"
      >
        SRMIST Tiruchirappalli's Biggest<span className="text-red-500">Techfest</span> on October <span className="text-red-500">24th and 25th</span>, 2024.
        
      </MaskContainer>

      <Footer /> 
    </div>
  );
};

function Navbar({
  homeRef,
  aboutRef,
}: {
  homeRef: React.RefObject<HTMLDivElement>;
   aboutRef: React.RefObject<HTMLDivElement>;
}) {
  const navigate = useNavigate();
 const [role, setRole] = useState<string | null>(null);
  const handleLoginClick = () => {
    navigate("/login");
  };
  useEffect(() => {
    const storedRole = localStorage.getItem('role');
    if (storedRole=='user') {
      setRole(storedRole);
    }
  }, []);

  // Function to scroll to a specific section
  const scrollToSection = (ref: React.RefObject<HTMLDivElement>) => {
    if (ref && ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const [, setActive] = useState<string | null>(null);
  return (
    <div className="fixed top-10 inset-x-0 max-w-2xl mx-auto z-50">
      <Menu setActive={setActive}>
        <div
          className="cursor-pointer text-black hover:opacity-[0.9] dark:text-white"
          onClick={() => scrollToSection(homeRef)}
        >
          Home
        </div>
        <Link
          to="/events"
          className="cursor-pointer text-black hover:opacity-[0.9] dark:text-white"
        >
          Events
        </Link>
        <div
          className="cursor-pointer text-black hover:opacity-[0.9] dark:text-white"
          onClick={() => scrollToSection(aboutRef)}
        >
          About
        </div>

        {/* Conditionally render Register or Profile based on user role */}
        {role ? (
          <Link
            to="/userprofile"
            className="border text-sm font-medium relative border-neutral-200 dark:border-white/[0.2] text-white px-4 rounded-full"
          >
            <span>Profile</span>
            <span className="absolute inset-x-0 w-1/2 mx-auto -bottom-px bg-gradient-to-r from-transparent via-blue-500 to-transparent h-px" />
          </Link>
        ) : (
          <button
            className="border text-sm font-medium relative border-neutral-200 dark:border-white/[0.2] text-white px-4 rounded-full"
            onClick={handleLoginClick}
          >
            <span>Register</span>
            <span className="absolute inset-x-0 w-1/2 mx-auto -bottom-px bg-gradient-to-r from-transparent via-blue-500 to-transparent h-px" />
          </button>
        )}
      </Menu>
    </div>
  );
}

export const DummyContent = ({ title, price, description, imgSrc, image_qr, event_id }:Event) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleRegisterClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-10 rounded-3xl mb-4 flex">
      <img
        src={imgSrc}
        alt={`${title} image`}
        height="150"
        width="150"
        className="w-1/3 h-auto object-contain mr-10"
      />
      <div
        className="flex flex-col justify-start flex-1 max-h-[300px] overflow-y-auto" // Set max height and enable scrolling
      >
        <h2 className="text-neutral-700 dark:text-neutral-200 font-bold text-lg">
          {title}
        </h2>
        <p className="text-green-600 font-semibold text-md">{price}</p>
        <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl">
          {description}
        </p>
        <button
          className="mt-4 border text-sm font-medium relative border-neutral-200 dark:border-white/[0.2] text-white px-4 rounded-full"
          onClick={handleRegisterClick}
        >
          <span>Register</span>
          <span className="absolute inset-x-0 w-1/2 mx-auto -bottom-px bg-gradient-to-r from-transparent via-blue-500 to-transparent h-px" />
        </button>
      </div>
      <Modal isOpen={isModalOpen} onClose={handleCloseModal} image_qr={image_qr} event_id={event_id} />
    </div>
  );
};

const onSubmit = async (upiNumber: string, transactionId: string, event_id: string) => {
  
  try {
      console.log(event_id);

      const response = await axios.post(
        `${BACKEND_URL}/user/eventregistration`,
        { event_id, upi_id: upiNumber, transaction_id: transactionId },
        { withCredentials: true }
      );
      if (response.data.message) {
        window.location.href = '/userprofile';
      } 
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.error('Error registering event:', error.response ? error.response.data : error.message);
      } else {
        console.error('Unexpected error:', error);
      }
    }
};

const Modal = ({ isOpen, onClose, image_qr ,event_id}: { isOpen: boolean; onClose: () => void; image_qr: string; event_id: string; }) => {
  const handleBackdropClick = (event: React.MouseEvent<HTMLDivElement>) => {
    if (event.target === event.currentTarget) {
      onClose();
    }
  };
  const [upiNumber, setUpiNumber] = useState("");
  const [transactionId, setTransactionId] = useState("");

  const handleSubmit = () => {
    if (upiNumber && transactionId) {
      onSubmit(upiNumber, transactionId,event_id); 
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
        <div className="bg-white p-5 rounded-lg shadow-lg w-full md:w-1/3 lg:w-1/3 fixed top-1 left-1/2 transform -translate-x-1/2 z-10">
          {image_qr ? (
            <>
              <h2 className="text-lg text-black font-bold">Complete Payment</h2>

              <img
                src={image_qr}
                alt="QR Code"
                className="w-64 h-64 mx-auto mt-4"
              /> {/* Larger QR code */}

              <p className="mt-4 text-black">
                Pay using the above QR code, then provide your UPI ID and Transaction ID below:
              </p>
 <input
                type="text"
                placeholder="Enter UPI Number"
                value={upiNumber}
                onChange={(e) => setUpiNumber(e.target.value)}
                className="mt-4 p-2 w-full border rounded"
              />

              <input
                type="text"
                placeholder="Enter Transaction ID"
                value={transactionId}
                onChange={(e) => setTransactionId(e.target.value)}
                className="mt-4 p-2 w-full border rounded"
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


// Example of data with event paths
// export const data = [
//   {
//     category: "SRMIST",
//     title: "Crypt-o-Track",
//     price: "$20",
//     src: "",
//     content: (
//       <DummyContent
//         title="Crypt-o-Track"
//         price="$20"
//         description="A crime investigation event on the AI (Artificial intelligence) platform with clues based on images, QR codes, coding, and algorithms. A case file will be provided with formats. The winner will depend on the report submitted."
//         imgSrc=""
//         eventPath="/event1" // Specify the path for this event
//       />
//     ),
//   },
//   {
//     category: "SRMIST",
//     title: "Event 2 Title",
//     price: "$30",
//     src: "",
//     content: (
//       <DummyContent
//         title="Event 2 Title"
//         price="$30"
//         description="Description for Event 2."
//         imgSrc=""
//         eventPath="/event2" // Specify the path for this event
//       />
//     ),
//   },

//   {
//     category: "SRMIST",
//     title: "Event 3 Title",
//     price: "$30",
//     src: "",
//     content: (
//       <DummyContent
//         title="Event 3 Title"
//         price="$30"
//         description="Description for Event 2."
//         imgSrc=""
//         eventPath="/event3" // Specify the path for this event
//       />
//     ),
//   },

//   {
//     category: "SRMIST",
//     title: "Event 4 Title",
//     price: "$30",
//     src: "",
//     content: (
//       <DummyContent
//         title="Event 4 Title"
//         price="$30"
//         description="Description for Event 2."
//         imgSrc=""
//         eventPath="/event4"
//         image_qr="adefadefadfv" // Specify the path for this event
//       />
//     ),
//   },

//   {
//     category: "SRMIST",
//     title: "Event 5 Title",
//     price: "$30",
//     src: "",
//     content: (
//       <DummyContent
//         title="Event 5 Title"
//         price="$30"
//         description="Description for Event 2."
//         imgSrc=""
//         eventPath="/event5" // Specify the path for this event
//       />
//     ),
//   },
//   {
//     category: "SRMIST",
//     title: "Event 6 Title",
//     price: "$30",
//     src: "",
//     content: (
//       <DummyContent
//         title="Event 6 Title"
//         price="$30"
//         description="Description for Event 2."
//         imgSrc=""
//         eventPath="/event6" // Specify the path for this event
//       />
//     ),
//   },
//   {
//     category: "SRMIST",
//     title: "Event 7 Title",
//     price: "$30",
//     src: "",
//     content: (
//       <DummyContent
//         title="Event 7 Title"
//         price="$30"
//         description="Description for Event 2."
//         imgSrc=""
//         eventPath="/event7" // Specify the path for this event
//       />
//     ),
//   },
//   {
//     category: "SRMIST",
//     title: "Event 8 Title",
//     price: "$30",
//     src: "",
//     content: (
//       <DummyContent
//         title="Event 8 Title"
//         price="$30"
//         description="Description for Event 2."
//         imgSrc=""
//         eventPath="/event8" // Specify the path for this event
//       />
//     ),
//   },
//   {
//     category: "SRMIST",
//     title: "Event 9 Title",
//     price: "$30",
//     src: "",
//     content: (
//       <DummyContent
//         title="Event 9 Title"
//         price="$30"
//         description="Description for Event 2."
//         imgSrc=""
//         eventPath="/event9" // Specify the path for this event
//       />
//     ),
//   },
//   {
//     category: "SRMIST",
//     title: "Event 10 Title",
//     price: "$30",
//     src: "",
//     content: (
//       <DummyContent
//         title="Event 10 Title"
//         price="$30"
//         description="Description for Event 2."
//         imgSrc=""
//         eventPath="/event10" // Specify the path for this event
//       />
//     ),
//   },
//   {
//     category: "SRMIST",
//     title: "Event 11 Title",
//     price: "$30",
//     src: "",
//     content: (
//       <DummyContent
//         title="Event 11 Title"
//         price="$30"
//         description="Description for Event 2."
//         imgSrc=""
//         eventPath="/event11" // Specify the path for this event
//       />
//     ),
//   },
//   {
//     category: "SRMIST",
//     title: "Event 12 Title",
//     price: "$30",
//     src: "",
//     content: (
//       <DummyContent
//         title="Event 12 Title"
//         price="$30"
//         description="Description for Event 2."
//         imgSrc=""
//         eventPath="/event12" // Specify the path for this event
//       />
//     ),
//   },
// ];

// Ensure you have the routes set up in your App component or Router

  


function Footer() {
  return (
    <footer className="bg-black text-center dark:bg-neutral-8000 lg:text-left border border-gray-600">
  
 
    <div className="bg-black p-4 text-center text-neutral-200 dark:bg-black">
      © 2024 Copyright:
      <a className="text-gray-300 dark:text-neutral-400" href="https://tw-elements.com/">
        SRMIST Tiruchirappalli
      </a>
    </div>
    
  </footer>
  
  );
}

export default Dashboard;