import React, { useEffect } from 'react';

const Navbar: React.FC = () => {
  useEffect(() => {
    let i = 1;
    const stop = 4;

    const intervalId = setInterval(() => {
      if (i > stop) {
        clearInterval(intervalId);
        return;
      }
      const element = document.getElementById(`len${i}`);
      if (element) {
        element.classList.add('animate-bounce');
      }
      i++;
    }, 500);

    return () => clearInterval(intervalId); // Clean up on component unmount
  }, []);

  return (
    <div className="container mx-auto">
      <nav className="flex justify-between items-center p-4 bg-black text-white">
        <ul className="flex space-x-8">
          <li><a id="len1" className="hover:transform hover:-translate-y-1 transition-transform" href="#">Home</a></li>
          <li><a id="len2" className="hover:transform hover:-translate-y-1 transition-transform" href="#">About</a></li>
          <li><a id="len3" className="hover:transform hover:-translate-y-1 transition-transform" href="#">Portfolio</a></li>
          <li><a id="len4" className="hover:transform hover:-translate-y-1 transition-transform" href="#">Contact</a></li>
        </ul>
      </nav>
      <div id="what-the-hell-is-this">
        <div className="page-title">
         
        </div>
      </div>
    </div>
  );
};

export default Navbar;
