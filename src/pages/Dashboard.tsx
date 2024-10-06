import React, { useState,useEffect,useRef  } from "react";
import { useNavigate } from "react-router-dom";
import { HoveredLink, Menu, MenuItem } from "../components/Navbar-menu";
import { cn } from "../lib/utils";
import { HeroParallax } from "../components/hero";
import { Carousel, Card } from "../components/apple-cards-carousel";
import { MaskContainer } from "../components/svg-mask-effect";
import { FocusCards } from "../components/focus-cards";
import axios from "axios";

import { Typewriter } from "../components/code-effect";
import { StyledWrapper } from "../components/styled-components";


import { Link } from "react-router-dom";

const Dashboard = () => {
 /* const [data, setData] = useState([]);
  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await axios.get('http://localhost:3000/getallevents');
        const events = response.data.eventswithimageurls;
  
      
        const formattedData = events.map(event => ({
          category: "SRMIST",
          title: event.event_name,
          price: `${event.event_price}`, 
          src: event.event_image,
          content: (
            <DummyContent
              title={event.event_name}
              price={`${event.event_price}`}
              description={event.event_description}
              imgSrc={event.event_image}
            />
          )
        }));
  
        setData(formattedData);
      } catch (err) {
        console.error("Error fetching events:", err);
      }
    };
  
    fetchEvents();
  }, []);*/
  const homeRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const tcards = [
  
    { title: "Card 1", src: "src/assets/images/IMG_8006.jpg" },
    { title: "Card 2", src: "src/assets/images/IMG_8007.jpg" },
    { title: "Card 3", src: "src/assets/images/IMG_8008.JPG" },
    { title: "Card 4", src: "src/assets/images/IMG_8009.JPG" },
    { title: "Card 5", src: "src/assets/images/IMG_8010.JPG" },
    { title: "Card 6", src: "src/assets/images/IMG_8011.JPG" },
    { title: "Card 7", src: "src/assets/images/IMG_8012.JPG" },
    { title: "Card 8", src: "src/assets/images/IMG_8013.JPG" },
    
  ];
  
    
  

  const cards = data.map((card, index) => (
    <Card key={card.src} card={card} index={index} layout={true} />
  ));
  const textToDisplay = "  srmist@Unknown-2 ~ % TechSpectRuM will feature various technical competitions, workshops, hackathons, and exhibitions, providing participants with a platform to showcase their skills, collaborate on innovative ideas, and explore the latest trends in technology. The event will be a hub for innovation, learning, and networking, where attendees can immerse themselves in cutting-edge technology and engage with industry leaders. Companies are invited to sponsor the event and are also encouraged to introduce new event ideas, allowing for a collaborative and dynamic experience for all involved."; // Text you want to display


  
  return (
    <div className="bg-black min-h-screen">

      <Navbar />
     <div ref={homeRef}>
        <HeroParallax />
      </div>
        <div ref={aboutRef} className="mt-[-90px]">
        <FocusCards cards={tcards} />
      </div>
    
    <div className="mt-0  mx-auto  bg-black w-[1410px] h-[400px] translate-y-45  rounded-md flex items-center justify-center">
      
      
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


    <div className="terminal p-0  rounded-lg font-mono w-[900px] h-90 translate-x-12   ">
      <div className="pb-2 terminal-header bg-zinc-800 text-white p-3 rounded-t-lg flex items-center ">
        <div className="flex space-x-2 text-red-500">
          <div className="w-3 h-3 rounded-full bg-red-500" />
          <div className="w-3 h-3 rounded-full bg-yellow-500" />
          <div className="w-3 h-3 rounded-full bg-green-500" />
        </div>
        <span className="ml-60 align-baseline">
          SRMIST Tiruchirappalli Campus
        </span>
      </div>

      <div
        className="pl-2 pt-3 bg-gray-900 h-60 overflow-hidden" 
        id="output"
      >
        <Typewriter text={textToDisplay} speed={100} />
      </div>

      <div
        className="input flex pl-4 pb-14 bg-gray-900 rounded-b-lg items-center"
        id="terminal-input-container"
      >
        {/* Input area (if needed in the future) */}
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

      <Footer /> {/* Added Footer here */}
    </div>
  );
};

function Navbar({
  homeRef,
  aboutRef,
}: {
  homeRef: React.RefObject<HTMLDivElement>;
  eventsRef: React.RefObject<HTMLDivElement>;
}) {
  const navigate = useNavigate();

  const handleLoginClick = () => {
    navigate("/login");
  };

  // Function to scroll to a specific section
  const scrollToSection = (ref: React.RefObject<HTMLDivElement>) => {
    if (ref && ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const [active, setActive] = useState<string | null>(null);
  return (
    <div className="fixed top-10 inset-x-0 max-w-2xl mx-auto z-50">
      <Menu setActive={setActive}>
        <div
          className="cursor-pointer text-black hover:opacity-[0.9] dark:text-white"
          onClick={() => scrollToSection(homeRef)}
        >
          Home
        </div>
        <Link to="/events"
          className="cursor-pointer text-black hover:opacity-[0.9] dark:text-white"
         
        >
          Events
        </Link>
        <div className="cursor-pointer text-black hover:opacity-[0.9] dark:text-white"
         onClick={() => scrollToSection(aboutRef)}>
          About
        </div>
        <button
          className="border text-sm font-medium relative border-neutral-200 dark:border-white/[0.2] text-white px-4 rounded-full"
          onClick={handleLoginClick}
        >
          <span>Register</span>
          <span className="absolute inset-x-0 w-1/2 mx-auto -bottom-px bg-gradient-to-r from-transparent via-blue-500 to-transparent h-px" />
        </button>
      </Menu>
    </div>
  );
}

export const DummyContent = ({ title, price, description, imgSrc, eventPath }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate(); // useNavigate hook to redirect

  const handleRegisterClick = () => {
    setIsModalOpen(true);
    navigate(eventPath); // Navigate to the event path
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-10 rounded-3xl mb-4 flex">
      <img
        src={imgSrc}
        alt={`${title} image`} // Corrected this line
        height="150"
        width="150"
        className="w-1/3 h-auto object-contain mr-10"
      />
      <div className="flex flex-col justify-start flex-1">
        <h2 className="text-neutral-700 dark:text-neutral-200 font-bold text-lg">
          {title}
        </h2>
        <p className="text-green-600 font-semibold text-md">{price}</p>
        <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl overflow-auto">
          {description}
        </p>
        <button
          className="mt-4 border text-sm font-medium relative border-neutral-200 dark:border-white/[0.2] text-white px-4 rounded-full"
          onClick={handleRegisterClick} // Call navigate on click
        >
          <span>Register</span>
          <span className="absolute inset-x-0 w-1/2 mx-auto -bottom-px bg-gradient-to-r from-transparent via-blue-500 to-transparent h-px" />
        </button>
      </div>
    </div>
  );
};

// Example of data with event paths
export const data = [
  {
    category: "SRMIST",
    title: "Crypt-o-Track",
    price: "$20",
    src: "",
    content: (
      <DummyContent
        title="Crypt-o-Track"
        price="$20"
        description="A crime investigation event on the AI (Artificial intelligence) platform with clues based on images, QR codes, coding, and algorithms. A case file will be provided with formats. The winner will depend on the report submitted."
        imgSrc=""
        eventPath="/event1" // Specify the path for this event
      />
    ),
  },
  {
    category: "SRMIST",
    title: "Event 2 Title",
    price: "$30",
    src: "",
    content: (
      <DummyContent
        title="Event 2 Title"
        price="$30"
        description="Description for Event 2."
        imgSrc=""
        eventPath="/event2" // Specify the path for this event
      />
    ),
  },

  {
    category: "SRMIST",
    title: "Event 3 Title",
    price: "$30",
    src: "",
    content: (
      <DummyContent
        title="Event 3 Title"
        price="$30"
        description="Description for Event 2."
        imgSrc=""
        eventPath="/event3" // Specify the path for this event
      />
    ),
  },

  {
    category: "SRMIST",
    title: "Event 4 Title",
    price: "$30",
    src: "",
    content: (
      <DummyContent
        title="Event 4 Title"
        price="$30"
        description="Description for Event 2."
        imgSrc=""
        eventPath="/event4" // Specify the path for this event
      />
    ),
  },

  {
    category: "SRMIST",
    title: "Event 5 Title",
    price: "$30",
    src: "",
    content: (
      <DummyContent
        title="Event 5 Title"
        price="$30"
        description="Description for Event 2."
        imgSrc=""
        eventPath="/event5" // Specify the path for this event
      />
    ),
  },
  {
    category: "SRMIST",
    title: "Event 6 Title",
    price: "$30",
    src: "",
    content: (
      <DummyContent
        title="Event 6 Title"
        price="$30"
        description="Description for Event 2."
        imgSrc=""
        eventPath="/event6" // Specify the path for this event
      />
    ),
  },
  {
    category: "SRMIST",
    title: "Event 7 Title",
    price: "$30",
    src: "",
    content: (
      <DummyContent
        title="Event 7 Title"
        price="$30"
        description="Description for Event 2."
        imgSrc=""
        eventPath="/event7" // Specify the path for this event
      />
    ),
  },
  {
    category: "SRMIST",
    title: "Event 8 Title",
    price: "$30",
    src: "",
    content: (
      <DummyContent
        title="Event 8 Title"
        price="$30"
        description="Description for Event 2."
        imgSrc=""
        eventPath="/event8" // Specify the path for this event
      />
    ),
  },
  {
    category: "SRMIST",
    title: "Event 9 Title",
    price: "$30",
    src: "",
    content: (
      <DummyContent
        title="Event 9 Title"
        price="$30"
        description="Description for Event 2."
        imgSrc=""
        eventPath="/event9" // Specify the path for this event
      />
    ),
  },
  {
    category: "SRMIST",
    title: "Event 10 Title",
    price: "$30",
    src: "",
    content: (
      <DummyContent
        title="Event 10 Title"
        price="$30"
        description="Description for Event 2."
        imgSrc=""
        eventPath="/event10" // Specify the path for this event
      />
    ),
  },
  {
    category: "SRMIST",
    title: "Event 11 Title",
    price: "$30",
    src: "",
    content: (
      <DummyContent
        title="Event 11 Title"
        price="$30"
        description="Description for Event 2."
        imgSrc=""
        eventPath="/event11" // Specify the path for this event
      />
    ),
  },
  {
    category: "SRMIST",
    title: "Event 12 Title",
    price: "$30",
    src: "",
    content: (
      <DummyContent
        title="Event 12 Title"
        price="$30"
        description="Description for Event 2."
        imgSrc=""
        eventPath="/event12" // Specify the path for this event
      />
    ),
  },
];

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