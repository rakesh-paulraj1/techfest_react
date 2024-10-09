"use client";
import React, {
  useEffect,
  useRef,
  useState,
  createContext,
  useContext,
} from "react";
import {
  IconArrowNarrowLeft,
  IconArrowNarrowRight,
  IconX,
} from "@tabler/icons-react";
import { cn } from "../lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import { useOutsideClick } from "./use-outside-click";
import { TextGenerateEffect } from "./text-generate-effect"; // Import your TextGenerateEffect component
import { BackgroundBeamsWithCollision } from "../components/background-beams-with-collision";


interface CarouselProps {
  items: JSX.Element[];
  initialScroll?: number;
}

type Card = {
  src: string;
  title: string;
  category: string;
  content: React.ReactNode;
};

export const CarouselContext = createContext<{
  onCardClose: (index: number) => void;
  currentIndex: number;
}>({
  onCardClose: () => {},
  currentIndex: 0,
});

export const Carousel = ({ items, initialScroll = 0 }: CarouselProps) => {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (carouselRef.current) {
      carouselRef.current.scrollLeft = initialScroll;
      checkScrollability();
    }
  }, [initialScroll]);

  const checkScrollability = () => {
    if (carouselRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth);
    }
  };

  const scrollLeft = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: -300, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: 300, behavior: "smooth" });
    }
  };

  const handleCardClose = (index: number) => {
    if (carouselRef.current) {
      const cardWidth = isMobile() ? 230 : 384; // (md:w-96)
      const gap = isMobile() ? 4 : 8;
      const scrollPosition = (cardWidth + gap) * (index + 1);
      carouselRef.current.scrollTo({
        left: scrollPosition,
        behavior: "smooth",
      });
      setCurrentIndex(index);
    }
  };

  const isMobile = () => {
    return window && window.innerWidth < 768;
  };

  const words = `TechSpectRuM’24 is a two-day technology-focused event hosted by SRM Institute of
Science and Technology, Tiruchirappalli, on October 24th and 25th, 2024. The event is
designed to bring together over 10,000 tech enthusiasts, students, and professionals
from across the country.`;

  return (
    <CarouselContext.Provider
      value={{ onCardClose: handleCardClose, currentIndex }}
    >
      <div className="relative w-full">
        {/* Adding the TextGenerateEffectDemo above the cards with a negative margin */}
        <TextGenerateEffect words={words} className="mt-[5px] mx-12 mx-10" /> {/* Adjust the value as needed */}

        <div
          className="flex w-full overflow-x-scroll overscroll-x-auto py-10 md:py-20 scroll-smooth [scrollbar-width:none]"
          ref={carouselRef}
          onScroll={checkScrollability}
        >
          <div
            className={cn(
              "absolute right-0 z-[1000] h-auto w-[5%] overflow-hidden bg-gradient-to-l"
            )}
          ></div>

          <div
            className={cn(
              "flex flex-row justify-start gap-4 pl-4",
              "max-w-7xl mx-auto"
            )}
          >
            {items.map((item, index) => (
              <motion.div
                key={"card" + index}
                initial={{
                  opacity: 0,
                  y: 20,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                  transition: {
                    duration: 0.5,
                    delay: 0.2 * index,
                    ease: "easeOut",
                    once: true,
                  },
                }}
                className="last:pr-[5%] md:last:pr-[33%] rounded-3xl"
              >
                {item}
              </motion.div>
            ))}
          </div>
        </div>

        <div className="flex justify-end gap-2 mr-10">
          <button
            className="relative z-40 h-10 w-10 rounded-full bg-gray-100 flex items-center justify-center disabled:opacity-50"
            onClick={scrollLeft}
            disabled={!canScrollLeft}
          >
            <IconArrowNarrowLeft className="h-6 w-6 text-gray-500" />
          </button>
          <button
            className="relative z-40 h-50 w-10 rounded-full bg-gray-100 flex items-center justify-center disabled:opacity-50"
            onClick={scrollRight}
            disabled={!canScrollRight}
          >
            <IconArrowNarrowRight className="h-6 w-6 text-gray-500" />
          </button>
        </div>

        {/* Adding the new container below the cards */}
        <div
          style={{ height: "700px" }}
          className="mt-5 px-4 py-6 bg-black dark:bg-black rounded-lg text-center"
        >
          <BackgroundBeamsWithCollision>
      <h2 className="text-2xl relative z-20 md:text-4xl lg:text-7xl  text-center text-black dark:text-white font-sans tracking-tight">
      Explore the colors of creativity and tech at {" "}
        <div className="relative mx-auto inline-block w-max [filter:drop-shadow(0px_1px_3px_rgba(27,_37,_80,_0.14))]">
          <div className="font-bold absolute left-0 top-[1px] bg-clip-text bg-no-repeat text-transparent bg-gradient-to-r py-4 from-purple-500 via-violet-500 to-pink-500 [text-shadow:0_0_rgba(0,0,0,0.1)]">
            <span className="">TechSpectRuM</span>
          </div>
          <div className="font-bold relative bg-clip-text text-transparent bg-no-repeat bg-gradient-to-r from-purple-500 via-violet-500 to-pink-500 py-4">
            <span className="">TechSpectRuM</span>
          </div>
        </div>
      </h2>
    </BackgroundBeamsWithCollision>

    {/* <div className=" mx-auto w-full max-w-[1410px] h-[300px] translate-y-45 rounded-md flex items-center justify-center">
 <div className="bg-black mt-9 sm:py-10 translate-y-0 ">
      <div className="mx-auto max-w-7xl mt-18 px-5 lg:px-8 ">
      <h2 className="text-1xl relative z-20 md:text-4xl lg:text-5xl  text-center text-black dark:text-white font-sans tracking-tight">
      Our {}
        <div className="relative mx-auto inline-block w-max [filter:drop-shadow(0px_1px_3px_rgba(27,_37,_80,_0.14))]">
          <div className="font-bold absolute left-0 top-[1px] bg-clip-text bg-no-repeat text-transparent bg-gradient-to-r py-4 from-purple-500 via-violet-500 to-pink-500 [text-shadow:0_0_rgba(0,0,0,0.1)]">
            <span className="">Sponsors</span>
          </div>
          <div className="font-bold relative bg-clip-text text-transparent bg-no-repeat bg-gradient-to-r from-purple-500 via-violet-500 to-pink-500 py-4">
            <span className="">Sponsors</span>
          </div>
        </div>
      </h2>
        <div className="mx-auto  grid grid-cols-2 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-x-14 gap-y-12 items-center justify-center">
        

          <img
          
            alt="Transistor"
            src="src\assets\sponsorslogo\download__2_-removebg-preview.png"
            width={158}
            height={48}
            className="col-span-2 max-h-28 w-full object-contain lg:col-span-1"
          />
          <img
            alt="Reform"
            src="src\assets\sponsorslogo\download-removebg-preview.png"
            width={158}
            height={48}
            className="col-span-2 max-h-28 w-full object-contain lg:col-span-1"
          />
          <img
            alt="Tuple"
            src="src\assets\sponsorslogo\WhatsApp_Image_2024-10-09_at_10.12.34_93d956a4-removebg-preview.png"
            width={158}
            height={48}
            className="col-span-2 max-h-28 w-full object-contain lg:col-span-1"
          />
          <img
            alt="SavvyCal"
            src="src\assets\sponsorslogo\White_and_Brown_Elegant_Simple_Boba_Drink_Logo_20240627_113859_0001-removebg-preview.png"
            width={158}
            height={48}
            className="col-span-2 max-h-28 w-full object-contain sm:col-start-2 lg:col-span-1"
          />
          
        </div>
      </div>
    </div>
</div> */}
        </div>
      </div>
    </CarouselContext.Provider>
  );
};

// ... (rest of your Card component remains unchanged)


// ... (rest of your Card component remains unchanged)

export const Card = ({
  card,
  index,
  layout = false,
}: {
  card: Card;
  index: number;
  layout?: boolean;
}) => {
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const { onCardClose } = useContext(CarouselContext);

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        handleClose();
      }
    }

    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open]);

  useOutsideClick(containerRef, () => handleClose());

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    onCardClose(index);
  };

  return (
    <>
      <AnimatePresence>
        {open && (
          <div className="fixed inset-0 h-screen z-50 overflow-y-auto ">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="bg-black/80 backdrop-blur-lg h-full w-full fixed inset-0  overflow-y-auto max-h-[600px]"
            />
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              ref={containerRef}
              layoutId={layout ? `card-${card.title}` : undefined}
              className="max-w-5xl mx-auto bg-white dark:bg-neutral-900 h-fit z-[60] my-10 p-4 md:p-10 rounded-3xl font-sans relative overflow-y-auto max-h-[600px]" // Added overflow and max-height
            >
              <button
                className="sticky top-4 h-8 w-8 right-0 ml-auto bg-black dark:bg-white rounded-full flex items-center justify-center"
                onClick={handleClose}
              >
                <IconX className="h-6 w-6 text-neutral-100 dark:text-neutral-900" />
              </button>
              <motion.p
                layoutId={layout ? `category-${card.title}` : undefined}
                className="text-base font-medium text-black dark:text-white"
              >
                {card.category}
              </motion.p>
              <motion.p
                layoutId={layout ? `title-${card.title}` : undefined}
                className="text-2xl md:text-5xl font-semibold text-neutral-700 mt-4 dark:text-white"
              >
                {card.title}
              </motion.p>
              {/* Scrollable content section */}
              <div className="py-10 overflow-y-auto max-h-[400px]"> {/* This makes the content scrollable */}
                {card.content}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
      <motion.button
        layoutId={layout ? `card-${card.title}` : undefined}
        onClick={()=>{window.location.href = '/events';}}
        className="rounded-3xl bg-gray-100 dark:bg-neutral-900 h-80 w-56 md:h-[40rem] md:w-96 overflow-hidden flex flex-col items-start justify-start relative z-10"
      >
        <div className="absolute h-full top-0 inset-x-0 bg-gradient-to-b from-black/50 via-transparent to-transparent z-30 pointer-events-none" />
        <div className="relative h-full">
          <img
            src={card.src}
            alt={card.title}
            className="object-cover w-full h-full rounded-3xl"
          />
        </div>
        <p className="absolute bottom-5 left-5 text-white z-40">{card.title}</p>
      </motion.button>
    </>
  );
};

