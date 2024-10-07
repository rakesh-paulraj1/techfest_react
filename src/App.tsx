import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard'; // Import the Dashboard component
import Login from './pages/login'; // Import the Login component
import Event from './pages/event'; // Import the Event component (if needed)
import Student from './pages/adminpages/student';
import AddEvents from './pages/adminpages/AddEvents';
import RemoveEvents from './pages/adminpages/RemoveEvents';
import Event1 from './pages/Events/event1'; // Import Event1 component
import Event2 from './pages/Events/event2'; // Import Event2 component
import Event3 from './pages/Events/event3'; 
import Event4 from './pages/Events/event4'; 
import Event5 from './pages/Events/event5'; 
import Event6 from './pages/Events/event6'; 
import Event7 from './pages/Events/event7'; 
import Event8 from './pages/Events/event8'; 
import Event9 from './pages/Events/event9'; 
import Event10 from './pages/Events/event10'; 
import Event11 from './pages/Events/event11'; 
import Event12 from './pages/Events/event12'; 

function App() {
  return (
    <div>
      {/* Wrap the application with BrowserRouter to enable routing */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/login" element={<Login />} />
          <Route path="/events" element={<Event />} />
          <Route path="/admindashboard" element={<Student />} />
          <Route path="/addevents" element={<AddEvents />} />
          <Route path="/removeevents" element={<RemoveEvents />} />
          <Route path="/event1" element={<Event1 />} /> {/* Route for Event 1 */}
          <Route path="/event2" element={<Event2 />} />
          <Route path="/event3" element={<Event3 />} />
          <Route path="/event4" element={<Event4 />} />
          <Route path="/event5" element={<Event5 />} />
          <Route path="/event6" element={<Event6 />} />
          <Route path="/event7" element={<Event7 />} />
          <Route path="/event8" element={<Event8 />} />
          <Route path="/event9" element={<Event9 />} />
          <Route path="/event10" element={<Event10 />} />
          <Route path="/event11" element={<Event11 />} />
          <Route path="/event12" element={<Event12 />} />

          
          {/* Add more routes for additional events as needed */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
