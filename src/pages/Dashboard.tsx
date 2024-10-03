import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { HoveredLink, Menu, MenuItem } from "../components/Navbar-menu";
import { cn } from "../lib/utils";
import { HeroParallax } from "../components/hero";
import { Carousel, Card } from "../components/apple-cards-carousel";
import { MaskContainer } from "../components/svg-mask-effect";
import { FocusCards } from "../components/focus-cards";

const Dashboard = () => {
  const tcards = [
    {
      title: "Forest Adventure",
      src: "https://images.unsplash.com/photo-1518710843675-2540dd79065c?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "Valley of life",
      src: "https://images.unsplash.com/photo-1600271772470-bd22a42787b3?q=80&w=3072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "Sala behta hi jayega",
      src: "https://images.unsplash.com/photo-1505142468610-359e7d316be0?q=80&w=3070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "Camping is for pros",
      src: "https://images.unsplash.com/photo-1486915309851-b0cc1f8a0084?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "The road not taken",
      src: "https://images.unsplash.com/photo-1507041957456-9c397ce39c97?q=80&w=3456&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "The First Rule",
      src: "https://assets.aceternity.com/the-first-rule.png",
    },
  ];
  const cards = data.map((card, index) => (
    <Card key={card.src} card={card} index={index} layout={true} />
  ));

  return (
    <div className="bg-black min-h-screen">
      <Navbar />
      <HeroParallax />
      return <FocusCards cards={tcards} />;
      <MaskContainer
        revealText={
          <p className="max-w-4xl mx-auto text-slate-800 text-center  text-4xl font-bold">
            The first rule of MRR Club is you do not talk about MRR Club. The
            second rule of MRR Club is you DO NOT talk about MRR Club.
          </p>
        }
        className="h-[20rem] border rounded-md"
      >
        The first rule of <span className="text-red-500">MRR Club</span> is you
        do not talk about MRR Club. The second rule of MRR Club is you DO NOT
        talk about <span className="text-red-500">MRR Club</span>.
      </MaskContainer>
      
     
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
        description="NetWiz Showdown: Network Design Challenge with Cisco Packet: Test your networking skills in the NetWiz Showdown, a competitive event where participants will face off to design, configure, and troubleshoot complex network scenarios using Cisco Packet Tracer. Compete against peers to solve real-world networking challenges under time constraints, showcasing your expertise and strategic thinking."
        imgSrc="https://i.pinimg.com/originals/c1/8e/85/c18e85536e741ca1fb354233f7a6de59.jpg"
      />
    ),
  },
  {
    category: "SRMIST",
    title: "Poster Presentation",
    price: "$5",
    src: "https://th.bing.com/th/id/R.71dc08f1b732fd77f477e1ed07568cd7?rik=CUhZT5%2fiMlf4vw&pid=ImgRaw&r=0",
    content: (
      <DummyContent
        title="Poster Presentation"
        price="$5"
        description="Prepare a poster showcasing your innovative ideas and research findings. Present your work to a panel of judges and gain valuable feedback!"
        imgSrc="https://th.bing.com/th/id/R.71dc08f1b732fd77f477e1ed07568cd7?rik=CUhZT5%2fiMlf4vw&pid=ImgRaw&r=0"
      />
    ),
  },
];

export default Dashboard;
