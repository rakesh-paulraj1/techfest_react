import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard'; // Import the Dashboard component
import Login from './pages/login'; // Import the Login component
import Event from './pages/event'; // Import the Event component (if needed)
import Student from './pages/adminpages/student';
import AddEvents from './pages/adminpages/AddEvents';
import RemoveEvents from './pages/adminpages/RemoveEvents'; 



function App() {
  return (
    <div>
      {/* Wrap the application with BrowserRouter to enable routing */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/login" element={<Login />} />
          <Route path="/event" element={<Event />} />
          <Route path="admindashboard" element ={<Student/>}/>
          <Route path="addevents" element={<AddEvents />} /> 
          <Route path="/removeevents"  element={<RemoveEvents />} /> 
          
          
          
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
