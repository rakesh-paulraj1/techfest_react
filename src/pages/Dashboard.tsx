import React, { useState,useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { HoveredLink, Menu, MenuItem } from "../components/Navbar-menu";
import { cn } from "../lib/utils";
import { HeroParallax } from "../components/hero";
import { Carousel, Card } from "../components/apple-cards-carousel";
<<<<<<< HEAD
import { MaskContainer } from "../components/svg-mask-effect";
import { FocusCards } from "../components/focus-cards";
import axios from "axios";
const Dashboard = () => {
 /* const [data, setData] = useState([]);
=======
import { useEffect } from "react";
import axios from "axios";

const Dashboard = () => {
  const [data, setData] = useState([]);
>>>>>>> 391b4f56ff90d02860e5ce4b9a0f3025ab54025b
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
<<<<<<< HEAD
  }, []);*/
  const tcards = [
  
    { title: "Card 1", src: "https://cdn.pixabay.com/photo/2023/04/03/12/59/crowd-7896788_1280.jpg" },
    { title: "Card 2", src: "https://cdn.pixabay.com/photo/2016/11/23/15/48/audience-1853662_1280.jpg" },
    { title: "Card 3", src: "https://cdn.pixabay.com/photo/2015/02/21/19/54/event-644537_1280.jpg" },
    { title: "Card 4", src: "https://media.istockphoto.com/id/483495210/photo/concert-crowd.jpg?s=1024x1024&w=is&k=20&c=bNDdnSObNmaR1cnJL4sn7vOsEMj1qzazpvuQdjagEZA=" },
    { title: "Card 5", src: "https://cdn.pixabay.com/photo/2018/05/10/11/34/concert-3387324_1280.jpg" },
    { title: "Card 6", src: "https://cdn.pixabay.com/photo/2017/08/06/23/50/people-2597679_1280.jpg" },
    { title: "Card 7", src: "https://media.istockphoto.com/id/502088147/photo/nothing-beats-live-music.jpg?s=1024x1024&w=is&k=20&c=JXLh0ER_bEeb6miBbkeMkCs1DHNT7Bltiy5nS67z34g=" },
    { title: "Card 8", src: "https://cdn.pixabay.com/photo/2022/06/02/15/01/music-7238254_1280.jpg" },
    { title: "Card 9", src: "https://cdn.pixabay.com/photo/2020/01/15/17/38/fireworks-4768501_1280.jpg" },
    { title: "Card 10", src: "https://cdn.pixabay.com/photo/2015/02/21/19/54/event-644537_1280.jpg" },
  ];
  
    
  

=======
  }, []);
>>>>>>> 391b4f56ff90d02860e5ce4b9a0f3025ab54025b
  const cards = data.map((card, index) => (
    <Card key={card.src} card={card} index={index} layout={true} />
  ));
  return (
    <div className="bg-black min-h-screen">
      <Navbar />
      <HeroParallax />
      <FocusCards cards={tcards} className="mt-[-90px]" />
    / <MaskContainer
        revealText={
          <p className="max-w-4xl mx-auto text-slate-800 text-center  text-4xl font-bold">
            The first rule of MRR Club is you do not talk about MRR Club. The
            second rule of MRR Club is you DO NOT talk about MRR Club.
          </p>
        }
        className="h-[25rem] border rounded-md"
      >
        The first rule of <span className="text-red-500">MRR Club</span> is you
        do not talk about MRR Club. The second rule of MRR Club is you DO NOT
        talk about <span className="text-red-500">MRR Club</span>.
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
  return (
    isOpen && (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
        <div className="bg-white p-5 rounded-lg">
          <h2 className="text-lg font-bold">Coming Soon</h2>
          <p>This event will be available for registration soon!</p>
          <button
            className="mt-4 bg-black text-white px-4 py-2 rounded"
            onClick={onClose}
          >
            Close
          </button>
        </div>
      </div>
    )
  );
};
/*
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
<<<<<<< HEAD
    title: "Tech Spectrum",
    price: "$25",
    src: "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/5e92ff86518357.5d9c37a10c838.jpg",
    content: (
      <DummyContent
        title="Tech Spectrum"
        price="$25"
        description="Tech Spectrum is a technology festival that brings together tech enthusiasts from different backgrounds to showcase their innovative projects, learn from industry leaders, and network with like-minded individuals."
        imgSrc="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/5e92ff86518357.5d9c37a10c838.jpg"
=======
    title: "Networking Puzzle Quest",
    price: "$10",
    src: "https://i.pinimg.com/originals/c1/8e/85/c18e85536e741ca1fb354233f7a6de59.jpg",
    content: (
      <DummyContent
        title="Networking Puzzle Quest"
        price="$10"
        description="NetWiz Showdown: Network Design Challenge with Cisco Packet: Test your networking skills in the NetWiz Showdown, a competitive event where participants will face off to design, configure, and troubleshoot complex network scenarios using Cisco Packet Tracer. Compete against peers to solve real-world networking challenges under time constraints, showcasing your expertise and speed. Perfect for students and networking enthusiasts!"
        imgSrc="https://i.pinimg.com/originals/c1/8e/85/c18e85536e741ca1fb354233f7a6de59.jpg"
      />
    ),
  },
  {
    category: "SRMIST",
    title: "Networking Puzzle Quest",
    price: "$10",
    src: "https://i.pinimg.com/originals/c1/8e/85/c18e85536e741ca1fb354233f7a6de59.jpg",
    content: (
      <DummyContent
        title="Networking Puzzle Quest"
        price="$10"
        description="NetWiz Showdown: Network Design Challenge with Cisco Packet: Test your networking skills in the NetWiz Showdown, a competitive event where participants will face off to design, configure, and troubleshoot complex network scenarios using Cisco Packet Tracer. Compete against peers to solve real-world networking challenges under time constraints, showcasing your expertise and speed. Perfect for students and networking enthusiasts!"
        imgSrc="https://i.pinimg.com/originals/c1/8e/85/c18e85536e741ca1fb354233f7a6de59.jpg"
      />
    ),
  },
  {
    category: "SRMIST",
    title: "Networking Puzzle Quest",
    price: "$10",
    src: "https://i.pinimg.com/originals/c1/8e/85/c18e85536e741ca1fb354233f7a6de59.jpg",
    content: (
      <DummyContent
        title="Networking Puzzle Quest"
        price="$10"
        description="NetWiz Showdown: Network Design Challenge with Cisco Packet: Test your networking skills in the NetWiz Showdown, a competitive event where participants will face off to design, configure, and troubleshoot complex network scenarios using Cisco Packet Tracer. Compete against peers to solve real-world networking challenges under time constraints, showcasing your expertise and speed. Perfect for students and networking enthusiasts!"
        imgSrc="https://i.pinimg.com/originals/c1/8e/85/c18e85536e741ca1fb354233f7a6de59.jpg"
      />
    ),
  },
  {
    category: "SRMIST",
    title: "Ideathon",
    price: "$30",
    src: "https://i.pinimg.com/originals/25/56/21/2556210e95b6e5d8debf48ce58678b07.jpg",
    content: (
      <DummyContent
        title="Ideathon"
        price="$30"
        description="Innovative thinkers compete to present the best ideas and solutions."
        imgSrc="https://i.pinimg.com/originals/25/56/21/2556210e95b6e5d8debf48ce58678b07.jpg"
>>>>>>> 391b4f56ff90d02860e5ce4b9a0f3025ab54025b
      />
    ),
  },
];
<<<<<<< HEAD


function Footer() {
  return (
    <footer className="bg-black text-center dark:bg-neutral-8000 lg:text-left border border-gray-600">
  <div className="container p-6 text-gray-300">
    <div className="grid gap-4 lg:grid-cols-2">
      <div className="mb-6 md:mb-0">
        <h5 className="mb-2 font-medium uppercase">Footer text</h5>
        <p className="mb-4">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste
            atque ea quis molestias. Fugiat pariatur maxime quis culpa
            corporis vitae repudiandae aliquam voluptatem veniam, est atque
            cumque eum delectus sint!
          </p>
        </div>
        <div className="mb-6 md:mb-0">
          <h5 className="mb-2 font-medium uppercase">Footer text</h5>
          <p className="mb-4">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste
            atque ea quis molestias. Fugiat pariatur maxime quis culpa
            corporis vitae repudiandae aliquam voluptatem veniam, est atque
            cumque eum delectus sint!
          </p>
        </div>
      </div>
    </div>

 
    <div className="bg-gray-700 p-4 text-center text-neutral-200 dark:bg-neutral-700">
      © 2023 Copyright:
      <a className="text-gray-300 dark:text-neutral-400" href="https://tw-elements.com/">
        TW Elements
      </a>
    </div>
  </footer>
  
  );
}

export default Dashboard;
=======
*/
export default Dashboard;
>>>>>>> 391b4f56ff90d02860e5ce4b9a0f3025ab54025b
