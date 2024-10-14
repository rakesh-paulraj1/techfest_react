import React from "react";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  MotionValue,stagger, useAnimate
} from "framer-motion";
// import { BACKEND_URL } from "../config";
import { useEffect} from "react";
import { Card,
 } from "./apple-cards-carousel";
import { Link } from 'react-router-dom';
import { cn } from "../lib/utils";
import { Carousel } from "./apple-cards-carousel";
import { DummyContent } from "../pages/Dashboard";
// import { data } from "../pages/Dashboard";

export const HeroParallax = () => {
  const data = [
    {
      category: "Hackathon",
      title: "Capture the Flag",
      price: "300",
      src: "assets/workshopimages/hackathon.png",
      content: (
        <DummyContent
          title="Capture the Flag"
          price="300"
          description="The Cyberanzen Club is excited to announce a thrilling Capture The Flag (CTF) event! Teams of 3 will engage in a race to solve various security challenges, including web exploitation, reverse engineering, cryptography, and system vulnerabilities. The event aims to enhance participants' cybersecurity skills, foster teamwork, and encourage healthy competition. The team that solves the challenges first and captures the flags wins."
          imgSrc="assets/eventimages/Capturetheflag.jpg"
          image_qr="/images/event1_qr.jpg"
          event_id="E001"
        />
      ),
    },
    {
      category: "Cyberanzen Club",
      title: "Capture the Flag",
      price: "300",
      src: "assets/workshopimages/marathonnew.png",
      content: (
        <DummyContent
          title="Capture the Flag"
          price="300"
          description="The Cyberanzen Club is excited to announce a thrilling Capture The Flag (CTF) event! Teams of 3 will engage in a race to solve various security challenges, including web exploitation, reverse engineering, cryptography, and system vulnerabilities. The event aims to enhance participants' cybersecurity skills, foster teamwork, and encourage healthy competition. The team that solves the challenges first and captures the flags wins."
          imgSrc="assets/eventimages/Capturetheflag.jpg"
          image_qr="/images/event1_qr.jpg"
          event_id="E001"
        />
      ),
    },
    {
      category: "Cyberanzen Club",
      title: "Capture the Flag",
      price: "300",
      src: "assets/eventimages/Capturetheflag.jpg",
      content: (
        <DummyContent
          title="Capture the Flag"
          price="300"
          description="The Cyberanzen Club is excited to announce a thrilling Capture The Flag (CTF) event! Teams of 3 will engage in a race to solve various security challenges, including web exploitation, reverse engineering, cryptography, and system vulnerabilities. The event aims to enhance participants' cybersecurity skills, foster teamwork, and encourage healthy competition. The team that solves the challenges first and captures the flags wins."
          imgSrc="assets/eventimages/Capturetheflag.jpg"
          image_qr="/images/event1_qr.jpg"
          event_id="E001"
        />
      ),
    },
    {
      category: "Electronics Club",
      title: "CIRCUWAVE",
      price: "300",
      src: "assets/eventimages/ciruwave (1).jpg",
      content: (
        <DummyContent
          title="CIRCUWAVE"
          price="300"
          description="Surf the waves of creativity and expertise in electronics engineering!"
          imgSrc="assets/eventimages/ciruwave (1).jpg"
          image_qr="/images/event2_qr.jpg"
          event_id="E002"
        />
      ),
    },
    {
      category: "Drone Club",
      title: "CLOUDCRAFT",
      price: "300",
      src: "assets/eventimages/cloudcraft.png",
      content: (
        <DummyContent
          title="CLOUDCRAFT"
          price="300"
          description="Design and simulate drones using MATLAB in this hands-on event. Participants will create drone models, develop control algorithms, and test performance in simulated environments. Showcase your skills in drone design and optimization to achieve the best performance and innovation."
          imgSrc="assets/eventimages/cloudcraft.png"
          image_qr="/images/event3_qr.jpg"
          event_id="E003"
        />
      ),
    },
    {
      category: "SRMIST",
      title: "Cosmic Connection",
      price: "500",
      src: "assets/eventimages/cosmicconnectionsideathon (1).jpg",
      content: (
        <DummyContent
          title="Cosmic Connection"
          price="500"
          description="Explore this exciting ideathon where participants tackle real-world challenges inspired by space exploration."
          imgSrc="assets/eventimages/cosmicconnectionsideathon (1).jpg"
          image_qr="/images/event4_qr.jpg"
          event_id="E004"
        />
      ),
    },
    {
      category: "AppDev Club",
      title: "DevStorm",
      price: "400",
      src: "assets/eventimages/DEVSTORM  (1).jpg",
      content: (
        <DummyContent
          title="DevStorm"
          price="400"
          description="DevStorm is a high-octane app development competition that challenges participants to turn their innovative ideas into fully functional apps."
          imgSrc="assets/eventimages/DEVSTORM  (1).jpg"
          image_qr="/images/event5_qr.jpg"
          event_id="E005"
        />
      ),
    },
    {
      category: "Innovation Club",
      title: "Ideanova",
      price: "400",
      src: "assets/eventimages/Ideanova.png",
      content: (
        <DummyContent
          title="Ideanova"
          price="400"
          description="Join us for an exciting Ideathon, where creativity meets innovation!"
          imgSrc="assets/eventimages/Ideanova.png"
          image_qr="/images/event5_qr.jpg"
          event_id="E005"
        />
      ),
    },
    {
      category: "SRMIST",
      title: "Pitch Perfect",
      price: "350",
      src: "assets/eventimages/pitchcperfect.jpg",
      content: (
        <DummyContent
          title="Pitch Perfect"
          price="350"
          description="The Paper Presentation offers participants an opportunity to present their research on cutting-edge technologies."
          imgSrc="assets/eventimages/pitchcperfect.jpg"
          image_qr="/images/event5_qr.jpg"
          event_id="E005"
        />
      ),
    },
    {
      category: "Robotics Club",
      title: "SUMO ROBO WAR",
      price: "300",
      src: "assets/eventimages/robo.png",
      content: (
        <DummyContent
          title="SUMO ROBO WAR"
          price="300"
          description="Participants build remote-controlled (RC) or autonomous cars that battle against each other in a designated arena."
          imgSrc="assets/eventimages/robo.png"
          image_qr="/images/event5_qr.jpg"
          event_id="E005"
        />
      ),
    },
    {
      category: "Data Science Club",
      title: "Stump the data",
      price: "250",
      src: "assets/eventimages/stumpthedata (2).jpg",
      content: (
        <DummyContent
          title="Stump the data"
          price="250"
          description="Are you ready to test your machine learning skills on a dataset filled with cricket insights?"
          imgSrc="assets/eventimages/stumpthedata (2).jpg"
          image_qr="/images/event5_qr.jpg"
          event_id="E005"
        />
      ),
    },
    {
      category: "SRMIST",
      title: "Shark Tank",
      price: "700",
      src: "assets/eventimages/shark tank edc.jpg",
      content: (
        <DummyContent
          title="Shark Tank"
          price="700"
          description="A deep dive into blockchain technologies and applications."
          imgSrc="assets/eventimages/shark tank edc.jpg"
          image_qr="/images/event5_qr.jpg"
          event_id="E005"
        />
      ),
    },
    {
      category: "Cyberanzen Club",
      title: "Capture the Flag",
      price: "300",
      src: "assets/workshopimages/quantum.png",
      content: (
        <DummyContent
          title="Capture the Flag"
          price="300"
          description="The Cyberanzen Club is excited to announce a thrilling Capture The Flag (CTF) event! Teams of 3 will engage in a race to solve various security challenges, including web exploitation, reverse engineering, cryptography, and system vulnerabilities. The event aims to enhance participants' cybersecurity skills, foster teamwork, and encourage healthy competition. The team that solves the challenges first and captures the flags wins."
          imgSrc="public\assets\workshopimages\quantum.png"
          image_qr="/images/event1_qr.jpg"
          event_id="E001"
        />
      ),
    },
    {
      category: "Cyberanzen Club",
      title: "Capture the Flag",
      price: "300",
      src: "assets/workshopimages/ml wrokshop.png",
      content: (
        <DummyContent
          title="Capture the Flag"
          price="300"
          description="The Cyberanzen Club is excited to announce a thrilling Capture The Flag (CTF) event! Teams of 3 will engage in a race to solve various security challenges, including web exploitation, reverse engineering, cryptography, and system vulnerabilities. The event aims to enhance participants' cybersecurity skills, foster teamwork, and encourage healthy competition. The team that solves the challenges first and captures the flags wins."
          imgSrc="public\assets\workshopimages\ml wrokshop.png"
          image_qr="/images/event1_qr.jpg"
          event_id="E001"
        />
      ),
    },
    {
      category: "Geek for geeks Workshop",
      title: "Capture the Flag",
      price: "300",
      src: "assets/workshopimages/geekfogeeeeks.jpeg",
      content: (
        <DummyContent
          title="Capture the Flag"
          price="300"
          description="The Cyberanzen Club is excited to announce a thrilling Capture The Flag (CTF) event! Teams of 3 will engage in a race to solve various security challenges, including web exploitation, reverse engineering, cryptography, and system vulnerabilities. The event aims to enhance participants' cybersecurity skills, foster teamwork, and encourage healthy competition. The team that solves the challenges first and captures the flags wins."
          imgSrc="public\assets\workshopimages\ml wrokshop.png"
          image_qr="/images/event1_qr.jpg"
          event_id="E001"
        />
      ),
    }
  ];
  
  // const data = [
  //   {
  //     category: "SRMIST",
  //     title: "Tech Innovation 2024",
  //     price: "500",
  //     src: "/images/event1.jpg",
  //     content: (
  //       <DummyContent
  //         title="Tech Innovation 2024"
  //         price="500"
  //         description="A competition for showcasing innovative tech ideas."
  //         imgSrc="/images/event1.jpg"
  //         image_qr="/images/event1_qr.jpg"
  //         event_id="E001"
  //       />
  //     )
  //   },
  //   {
  //     category: "SRMIST",
  //     title: "AI Workshop",
  //     price: "300",
  //     src: "/images/event2.jpg",
  //     content: (
  //       <DummyContent
  //         title="AI Workshop"
  //         price="300"
  //         description="Learn the basics of AI and machine learning."
  //         imgSrc="/images/event2.jpg"
  //         image_qr="/images/event2_qr.jpg"
  //         event_id="E002"
  //       />
  //     )
  //   },
  //   {
  //     category: "SRMIST",
  //     title: "Hackathon 2024",
  //     price: "1000",
  //     src: "/images/event3.jpg",
  //     content: (
  //       <DummyContent
  //         title="Hackathon 2024"
  //         price="1000"
  //         description="24-hour coding competition to solve real-world problems."
  //         imgSrc="/images/event3.jpg"
  //         image_qr="/images/event3_qr.jpg"
  //         event_id="E003"
  //       />
  //     )
  //   },
  //   {
  //     category: "SRMIST",
  //     title: "Robotics Expo",
  //     price: "1500",
  //     src: "/images/event4.jpg",
  //     content: (
  //       <DummyContent
  //         title="Robotics Expo"
  //         price="1500"
  //         description="Exhibition of cutting-edge robotics projects."
  //         imgSrc="/images/event4.jpg"
  //         image_qr="/images/event4_qr.jpg"
  //         event_id="E004"
  //       />
  //     )
  //   },
  //   {
  //     category: "SRMIST",
  //     title: "Blockchain Seminar",
  //     price: "700",
  //     src: "/images/event5.jpg",
  //     content: (
  //       <DummyContent
  //         title="Blockchain Seminar"
  //         price="700"
  //         description="A deep dive into blockchain technologies and applications."
  //         imgSrc="/images/event5.jpg"
  //         image_qr="/images/event5_qr.jpg"
  //         event_id="E005"
  //       />
  //     )
  //   },
  // ];
  // useEffect(() => {
  //   const fetchEvents = async () => {
  //     try {
        
  //       // const response = await axios.get(`${BACKEND_URL}/getallevents`);
  //       // const events = response.data.eventswithimageurls;
  
      
  //       // const formattedData = events.map((event: { event_name: string; event_price: string; event_image: string; event_description: string; event_qr: string; event_id: string; }) => ({
  //       //   category: "SRMIST",
  //       //   title: event.event_name,
  //       //   price: `${event.event_price}`, 
  //       //   src: event.event_image,
  //       //   content: (
  //       //     <DummyContent
  //       //       title={event.event_name}
  //       //       price={`${event.event_price}`}
  //       //       description={event.event_description}
  //       //       imgSrc={event.event_image}
  //       //       image_qr={event.event_qr}
  //       //       event_id={event.event_id}
  //       //     />
  //       //   )
  //       // }));
  
  //       // setData(formattedData);
        
  //     } catch (err) {
  //       console.error("Error fetching events:", err);
  //     }
  //   };
  
  //   fetchEvents();
  // }, []);
  
  
  
  const ref = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const springConfig = { stiffness: 300, damping: 30, bounce: 100 };

  
  const cards = data.map((card: any, index: number) => (
    <Card key={card.src} card={card} index={index} />
  ));

  const rotateX = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [15, 0]),
    springConfig
  );
  const opacity = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [0.2, 1]),
    springConfig
  );
  const rotateZ = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [20, 0]),
    springConfig
  );
  const translateY = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [-700, 100]),
    springConfig
  );
  return (
    <div
      ref={ref}
      className="  h-[30vh]  xs:h-[210vh] sm:h-[220vh] md:h-[310vh] lg:h-[310vh] xl:h-[240vh] py-40 overflow-hidden antialiased relative flex flex-col self-auto [perspective:1000px] [transform-style:preserve-3d]"

    >
      <Header />
      <motion.div
        style={{
          rotateX,
          rotateZ,
          translateY,
          opacity,
        }}
        className=""
      >
      
        <motion.div className="flex flex-row  mb-20 space-x-20 ">
          {
                <Carousel items={cards} />
                }
        </motion.div>
      </motion.div>
    </div>
  );
};

export const Header = () => {
    const words = 'Unleash Innovation, Ignite Collaboration and Showcase Your Tech Brilliance'
;
  return (
    <div className="max-w-7xl relative mx-auto py-20 md:py-40 px-4 w-full left-0 top-0">
      <img 
  src="assets\images\tsrm_logo.png" 
  alt="Top Left Image" 
  className="w-32 h-32 md:w-56 md:h-56 object-contain mr-4" 
/>

  <div className="flex items-start">
   
   

    <h1 className="text-3xl md:text-7xl font-bold dark:text-white">
      <Highlight className="text-black dark:text-white">
        TechSpectRuM
      </Highlight>
    </h1>
  </div>
      <p className="max-w-2xl text-base md:text-xl mt-8 dark:text-neutral-200">
      <TextGenerateEffect words={words}/>
      </p>
    </div>
  );
};

export const ProductCard = ({
  product,
  translate,
}: {
  product: {
    title: string;
    link: string;
    thumbnail: string;
  };
  translate: MotionValue<number>;
}) => {
  return (
    <motion.div
      style={{
        x: translate,
      }}
      whileHover={{
        y: -20,
      }}
      key={product.title}
      className="group/product h-96 w-[30rem] relative flex-shrink-0"
    >
      <Link
        to={product.link}
        className="block group-hover/product:shadow-2xl "
      >
        <img
          src={product.thumbnail}
          height="600"
          width="600"
          className="object-cover object-left-top absolute h-full w-full inset-0"
          alt={product.title}
        />
      </Link>
      <div className="absolute inset-0 h-full w-full opacity-0 group-hover/product:opacity-80 bg-black pointer-events-none"></div>
      <h2 className="absolute bottom-4 left-4 opacity-0 group-hover/product:opacity-100 text-white">
        {product.title}
      </h2>
    </motion.div>
  );
};






  export const Highlight = ({
    children,
    className,
  }: {
    children: React.ReactNode;
    className?: string;
  }) => {
    return (
      <motion.span
        initial={{
          backgroundSize: "0% 100%",
        }}
        animate={{
          backgroundSize: "100% 100%",
        }}
        transition={{
          duration: 2,
          ease: "linear",
          delay: 0.5,
        }}
        style={{
          backgroundRepeat: "no-repeat",
          backgroundPosition: "left center",
          display: "inline",
        }}
        className={cn(
          `relative inline-block pb-1   px-1 rounded-lg bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-800 dark:to-purple-800`,
          className
        )}
      >
        {children}
      </motion.span>
    );
  };
  export const TextGenerateEffect = ({
    words,
    className,
    filter = true,
    duration = 0.5,
  }: {
    words: string;
    className?: string;
    filter?: boolean;
    duration?: number;
  }) => {
    const [scope, animate] = useAnimate();
    const wordsArray = words.split(" ");
    useEffect(() => {
      animate(
        "span",
        {
          opacity: 1,
          filter: filter ? "blur(0px)" : "none",
        },
        {
          duration: duration ? duration : 1,
          delay: stagger(0.2),
        }
      );
    }, [scope.current]);
   
    const renderWords = () => {
      return (
        <motion.div ref={scope}>
          {wordsArray.map((word, idx) => {
            return (
              <motion.span
                key={word + idx}
                className="dark:text-white text-black opacity-0"
                style={{
                  filter: filter ? "blur(10px)" : "none",
                }}
              >
                {word}{" "}
              </motion.span>
            );
          })}
        </motion.div>
      );
    };
   
    return (
      <div className={cn("font-bold", className)}>
        <div className="mt-4">
          <div className=" dark:text-white text-black text-2xl leading-snug tracking-wide">
            {renderWords()}
          </div>
        </div>
      </div>
    );
  };
