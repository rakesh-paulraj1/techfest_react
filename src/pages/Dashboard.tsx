import React, { useState,useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { HoveredLink, Menu, MenuItem } from "../components/Navbar-menu";
import { cn } from "../lib/utils";
import { HeroParallax } from "../components/hero";
import { Carousel, Card } from "../components/apple-cards-carousel";
import { MaskContainer } from "../components/svg-mask-effect";
import { FocusCards } from "../components/focus-cards";
import axios from "axios";
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

  return (
    <div className="bg-black min-h-screen">
      <Navbar />
      <HeroParallax />
      <FocusCards cards={tcards} className="mt-[-90px]" />
      
      
      <MaskContainer
        
        revealText={
          
          <p className="max-w-4xl mx-auto text-slate-800 text-center  text-4xl font-bold ">
           SRMIST Tiruchirappalli's Biggest Techfest on October 24th and 25th, 2024
          </p>
          
        }
        className="h-[20rem] border rounded-md"
      >
        SRMIST Tiruchirappalli's Biggest<span className="text-red-500">Techfest</span> on October <span className="text-red-500">24th and 25th</span>, 2024.
        
      </MaskContainer>

      <Footer /> {/* Added Footer here */}
    </div>
  );
};

function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  const navigate = useNavigate();

  const handleLoginClick = () => {
    navigate("/login");
  };

  return (
    <div
      className={cn(
        "fixed top-10 inset-x-0 max-w-2xl mx-auto z-50",
        className
      )}
    >
      <Menu setActive={setActive}>
        <div>
          <div className="cursor-pointer text-black hover:opacity-[0.9] dark:text-white"> Home</div>
        </div>
        <div className="cursor-pointer text-black hover:opacity-[0.9] dark:text-white"> Events</div>
        <div className="cursor-pointer text-black hover:opacity-[0.9] dark:text-white"> About</div>
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

export const DummyContent = ({ title, price, description, imgSrc }) => {
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
          onClick={handleRegisterClick}
        >
          <span>Register</span>
          <span className="absolute inset-x-0 w-1/2 mx-auto -bottom-px bg-gradient-to-r from-transparent via-blue-500 to-transparent h-px" />
        </button>
      </div>
      <Modal isOpen={isModalOpen} onClose={handleCloseModal} />
    </div>
  );
};

const Modal = ({ isOpen, onClose }) => {
  const handleBackdropClick = (event) => {
    // Close the modal if the backdrop (the dark area) is clicked
    if (event.target === event.currentTarget) {
      onClose();
    }
  };

  return (
    isOpen && (
      <div
        className="fixed inset-0 bg-black bg-opacity-50 flex items-start justify-center z-50" // Changed items-center to items-start
      >
        <div
          className="bg-white p-5 rounded-lg shadow-lg w-11/12 md:w-1/3 mt-80" // Added mt-20 for vertical spacing
        >
          <h2 className="text-lg font-bold">Coming Soon</h2>
          <p className="mt-2">This event will be available for registration soon!</p>
          <button
            className="mt-4 bg-black text-white px-4 py-2 rounded hover:bg-gray-800 transition duration-200"
            onClick={onClose}
          >
            Close
          </button>
        </div>
      </div>
    )
  );
};



export const data = [
  {
    category: "SRMIST",
    title: "Crypt-o-Track",
    price: "$20",
    src: "https://www.knowafest.com/files/uploads/WhatsApp%20Image%202022-11-02%20at%2018.38.17-2022110203.jpg",
    content: (
      <DummyContent
        title="Crypt-o-Track"
        price="$20"
        description="A crime investigation event on the AI (Artificial intelligence) platform with clues based on images, QR codes, coding, and algorithms. A case file will be provided with formats. The winner will depend on the report submitted."
        imgSrc="https://www.knowafest.com/files/uploads/WhatsApp%20Image%202022-11-02%20at%2018.38.17-2022110203.jpg"
      />
    ),
  },
  {
    category: "SRMIST",
    title: "Reverse Engineering",
    price: "$15",
    src: "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/66aced86518357.5d9c37a10c838.jpg",
    content: (
      <DummyContent
        title="Reverse Engineering"
        price="$15"
        description="Reverse engineering is the process of analyzing software in order to understand how it works. This involves taking a program apart, examining the individual components, and identifying the logic of the underlying algorithms."
        imgSrc="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/66aced86518357.5d9c37a10c838.jpg"
      />
    ),
  },
  {
    category: "SRMIST",
    title: "Tech Spectrum",
    price: "$25",
    src: "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/5e92ff86518357.5d9c37a10c838.jpg",
    content: (
      <DummyContent
        title="Tech Spectrum"
        price="$25"
        description="Tech Spectrum is a technology festival that brings together tech enthusiasts from different backgrounds to showcase their innovative projects, learn from industry leaders, and network with like-minded individuals."
        imgSrc="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/5e92ff86518357.5d9c37a10c838.jpg"
      />
    ),
  },
];


function Footer() {
  return (
    <footer className="bg-black text-center dark:bg-neutral-8000 lg:text-left border border-gray-600">
  
 
    <div className="bg-black p-4 text-center text-neutral-200 dark:bg-black">
      © 2024 Copyright:
      <a className="text-gray-300 dark:text-neutral-400" href="https://tw-elements.com/">
        SRMIST
      </a>
    </div>
    
  </footer>
  
  );
}

export default Dashboard;