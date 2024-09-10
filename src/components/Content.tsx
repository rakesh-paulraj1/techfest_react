import React, { useEffect } from 'react';

type EventProps = {
id:number
  title: string;
  date: string;
  description: string;
};

const eventsData: EventProps[] = [
  { id: 1, title: "Tech Talk", date: "2024-09-20", description: "An insightful talk on the latest in tech." },
  { id: 2, title: "AI Workshop", date: "2024-10-05", description: "Hands-on workshop on AI technologies." },
  { id: 3, title: "Networking Event", date: "2024-11-15", description: "Network with industry professionals." }
];

const EventCard: React.FC<EventProps> = ({ title, date, description }) => {
  return (
    <div className="bg-opacity-10 bg-white border border-gray-600 rounded-lg p-4 w-64 shadow-lg hover:bg-opacity-20 hover:scale-105 transition-transform">
      <h3 className="text-xl font-bold">{title}</h3>
      <p className="text-gray-400 text-sm">{date}</p>
      <p className="text-white text-sm">{description}</p>
    </div>
  );
};

const Content: React.FC = () => {
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const heroTitle = document.querySelector('.hero-section h1') as HTMLElement;
      const upcomingEvents = document.querySelector('#upcoming-events') as HTMLElement;
      const previousEvents = document.querySelector('#previous-events') as HTMLElement;

      if (heroTitle) {
        const scale = Math.max(1, 1 + scrollY / 300);
        heroTitle.style.transform = `scale(${scale})`;
      }

      if (upcomingEvents) {
        const upcomingOffset = upcomingEvents.getBoundingClientRect().top;
        const opacity = Math.min(1, (scrollY + window.innerHeight - upcomingOffset) / 300);
        upcomingEvents.style.opacity = `${opacity}`;
      }

      if (previousEvents) {
        const parallax = scrollY * 0.5;
        previousEvents.style.transform = `translateY(${parallax}px)`;
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="App">
      <main className="bg-gradient-to-b from-gray-800 to-black min-h-screen pb-12">
        <section id="home" className="hero-section flex justify-center items-center h-screen text-white">
          <h1 className="text-6xl font-bold text-white transition-transform">Tech Spectrum</h1>
        </section>
        <section id="upcoming-events" className="events-section py-16 px-4 text-white">
          <h2 className="text-4xl mb-8">Upcoming Events</h2>
          <div className="flex flex-wrap justify-center gap-4">
            {eventsData.map(event => (
              <EventCard
                    key={event.id}
                    title={event.title}
                    date={event.date}
                    description={event.description} id={event.id}              />
            ))}
          </div>
        </section>
        <section id="previous-events" className="events-section py-16 px-4 text-white">
          <h2 className="text-4xl mb-8">Previous Events</h2>
          <div className="flex flex-wrap justify-center gap-4">
          </div>
        </section>
      </main>
    </div>
  );
};

export default Content;
