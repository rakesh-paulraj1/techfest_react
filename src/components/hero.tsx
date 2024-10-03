"use client";
import React from "react";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  MotionValue,stagger, useAnimate
} from "framer-motion";
import { useEffect } from "react";
import { Card,
 } from "./apple-cards-carousel";
import { Link } from 'react-router-dom';
import { cn } from "../lib/utils";
import { Carousel } from "./apple-cards-carousel";
import { data } from "../pages/Dashboard";
export const HeroParallax = () => {
  
 
  const ref = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const springConfig = { stiffness: 300, damping: 30, bounce: 100 };

  
  const cards = data.map((card, index) => (
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
    useTransform(scrollYProgress, [0, 0.2], [-700, 500]),
    springConfig
  );
  return (
    <div
      ref={ref}
      className="h-[300vh] py-40 overflow-hidden  antialiased relative flex flex-col self-auto [perspective:1000px] [transform-style:preserve-3d]"
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
    const words = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'
;
  return (
    <div className="max-w-7xl relative mx-auto py-20 md:py-40 px-4 w-full  left-0 top-0">
      <h1 className="text-2xl md:text-7xl font-bold dark:text-white">
      <Highlight className="text-black dark:text-white">
         TechSpectrum
        </Highlight>
          
        
      </h1>
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