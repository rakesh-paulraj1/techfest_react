// @ts-nocheck
import  { useEffect, useState } from 'react';

export const Typewriter = ({ text, speed = 100 }) => {
  const [displayedText, setDisplayedText] = useState('');

  useEffect(() => {
    let index = 0;
    setDisplayedText(''); // Reset displayed text when new text is passed

    const typeNextCharacter = () => {
      if (index < text.length) {
        setDisplayedText((prev) => prev + text.charAt(index));
        index++;
        setTimeout(typeNextCharacter, speed);
      } else {
        
        setTimeout(() => {
          index = 0;
          setDisplayedText(''); 
          typeNextCharacter(); 
        }, 1000); 
      }
    };

    const timeoutId = setTimeout(typeNextCharacter, speed);

    // Cleanup function to clear the timeout
    return () => {
      clearTimeout(timeoutId);
    };
  }, [text, speed]);

  return (
    <p className="text-gray-500 whitespace-pre-wrap">{displayedText}</p>
  );
};

export default Typewriter;
