import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard'; // Import the Dashboard component
import Login from './pages/login'; // Import the Login component
import Event from './pages/event'; // Import the Event component (if needed)

function App() {
  return (
    <div>
      {/* Wrap the application with BrowserRouter to enable routing */}
      <BrowserRouter>
        <Routes>
          {/* Define the route for the Dashboard */}
          <Route path="/" element={<Dashboard />} />

          {/* Define the route for the Login page */}
          <Route path="/login" element={<Login />} />

          {/* Define the route for the Event page */}
          <Route path="/event" element={<Event />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
