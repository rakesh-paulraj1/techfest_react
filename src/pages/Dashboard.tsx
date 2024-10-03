import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { HoveredLink, Menu, MenuItem } from "../components/Navbar-menu";
import { cn } from "../lib/utils";
import { HeroParallax } from "../components/hero";
import { Carousel, Card } from "../components/apple-cards-carousel";

import { Carousel, Card } from "../components/apple-cards-carousel";

const Dashboard = () => {
  const cards = data.map((card, index) => (
    <Card key={card.src} card={card} index={index} layout={true} />
  ));
  return (
    <div className="bg-black min-h-screen">
      <Navbar />
      <HeroParallax />
      
      {/* Image Boxes Section */}
      <div className="max-w-2xl mx-auto mt-10 grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div className="bg-gray-800 rounded-lg shadow-lg p-4">
          <img
            src="https://via.placeholder.com/300" // Replace with your image URL
            alt="Image 1"
            className="rounded-lg w-full h-auto"
          />
        </div>
        <div className="bg-gray-800 rounded-lg shadow-lg p-4">
          <img
            src="https://via.placeholder.com/300" // Replace with your image URL
            alt="Image 2"
            className="rounded-lg w-full h-auto"
          />
        </div>
        <div className="bg-gray-800 rounded-lg shadow-lg p-4">
          <img
            src="https://via.placeholder.com/300" // Replace with your image URL
            alt="Image 3"
            className="rounded-lg w-full h-auto"
          />
        </div>
        <div className="bg-gray-800 rounded-lg shadow-lg p-4">
          <img
            src="https://via.placeholder.com/300" // Replace with your image URL
            alt="Image 4"
            className="rounded-lg w-full h-auto"
          />
        </div>
      </div>

      {/* Modern Contact Us Section */}
      <div className="bg-gray-900 text-white py-8 mt-10 rounded-lg shadow-lg">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
          <p className="text-gray-400 mb-4">We'd love to hear from you!</p>
          <div className="bg-gray-800 p-6 rounded-lg shadow-md">
            <p className="mb-2">Email: <a href="mailto:contact@example.com" className="text-blue-400 hover:underline">contact@example.com</a></p>
            <p className="mb-2">Phone: <a href="tel:+1234567890" className="text-blue-400 hover:underline">+1 (234) 567-890</a></p>
          </div>
        </div>
      </div>
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
        description="Hardware will be given which should be dismantled, understood, and analyzed its Architecture. Reassemble it."
        imgSrc="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/66aced86518357.5d9c37a10c838.jpg"
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
      />
    ),
  },
];

export default Dashboard;
