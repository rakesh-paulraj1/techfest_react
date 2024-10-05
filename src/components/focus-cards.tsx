"use client";
import React, { useState } from "react";
import { cn } from "../lib/utils"; // Ensure you have a utility for class name management

type CardProps = {
  title: string;
  src: string;
};

export const Card = React.memo(
  ({
    card,
    index,
    hovered,
    setHovered,
  }: {
    card: CardProps;
    index: number;
    hovered: number | null;
    setHovered: React.Dispatch<React.SetStateAction<number | null>>;
  }) => (
    <div
      onMouseEnter={() => setHovered(index)}
      onMouseLeave={() => setHovered(null)}
      className={cn(
        "rounded-lg relative bg-gray-200 dark:bg-gray-800 overflow-hidden h-60 md:h-96 transition-all duration-300 ease-out shadow-lg transform translate-y-6", 
        // Cards slightly moved downward with translate-y
        hovered !== null && hovered !== index && "blur-sm scale-95"
      )}
    >
      <img
        src={card.src}
        alt={card.title}
        className="object-cover absolute inset-0 w-full h-full transition-transform duration-300 ease-in-out transform hover:scale-105"
      />
      <div
        className={cn(
          "absolute inset-0 bg-black/70 flex items-end py-4 px-4 transition-opacity duration-300",
          hovered === index ? "opacity-100" : "opacity-0"
        )}
      >
        <div className="text-lg md:text-xl font-semibold text-white bg-clip-text text-transparent bg-gradient-to-b from-gray-300 to-gray-100">
          {card.title}
        </div>
      </div>
    </div>
  )
);

Card.displayName = "Card";

type FocusCardsProps = {
  cards: CardProps[];
  className?: string; // Accept className as a prop for custom styles
};

export function FocusCards({ cards, className }: FocusCardsProps) {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <div
      className={cn(
        "container mx-auto px-1 py-20 bg-black rounded-lg h-130 translate-y-57 " // Increased the height of the container
      )}
    >
      {/* Increased container height */}
      <div className={cn("grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8 max-w-full", className)}>
        {cards.map((card, index) => (
          <Card
            key={index} // Use a unique key based on the index
            card={card}
            index={index}
            hovered={hovered}
            setHovered={setHovered}
          />
        ))}
      </div>
    </div>
  );
}
