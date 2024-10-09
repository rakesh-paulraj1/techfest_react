import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard'; // Import the Dashboard component
import Login from './pages/login'; // Import the Login component
import Event from './pages/event'; // Import the Event component (if needed)
import Student from './pages/adminpages/student';
import AddEvents from './pages/adminpages/AddEvents';
import RemoveEvents from './pages/adminpages/RemoveEvents';
import Userprofile from './pages/userprofile';
import FormWithImageUpdate from './pages/adminpages/Updateevents';


function App() {
  return (
    <div>
      
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/login" element={<Login />} />
          <Route path="/events" element={<Event />} />
          <Route path="/admindashboard" element={<Student />} />
          <Route path="/addevents" element={<AddEvents />} />
          <Route path="/removeevents" element={<RemoveEvents />} />
          <Route path="/userprofile" element={<Userprofile/>} />
          <Route path="/updateevent/:eventId" element={<FormWithImageUpdate />} />

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
