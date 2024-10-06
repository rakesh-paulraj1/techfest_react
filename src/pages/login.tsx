import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios'; // Import axios
import { BACKEND_URL } from '../config';

const StudentRegistration: React.FC = () => {
  const [isLogin, setIsLogin] = useState(false); // State to toggle between login and registration
  const [formData, setFormData] = useState({
    username: '', // Added username field
    college: '',
    regNo: '',
    email: '',
    phone: '',
    year: '',
    gender: '',
    password: '',
  });

  const [error, setError] = useState(''); // State for error message
  const navigate = useNavigate();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setError(''); // Clear error on input change
  };

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);

    try {
      const endpoint = isLogin ? '/student-login' : '/student-registration';
      const response = await axios.post(`${BACKEND_URL}${endpoint}`, formData);

      console.log('Operation successful:', response.data);
      navigate('/dashboard'); // Redirect to dashboard after successful registration or login
    } catch (error) {
      console.error('Operation failed:', error.response?.data || error.message);
      setError('Operation failed. Please try again.'); // Set error message
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-black relative overflow-hidden">
      <div className="bg-gradient-to-br from-gray-900 to-black bg-opacity-80 backdrop-filter backdrop-blur-lg rounded-lg p-8 shadow-lg space-y-6 w-full max-w-md z-10">
        <h2 className="text-center text-3xl font-extrabold text-white">
          {isLogin ? 'Login' : 'Student Registration'}
        </h2>
        {error && <div className="text-red-500 text-center">{error}</div>} {/* Display error message */}
        <form className="space-y-6" onSubmit={handleFormSubmit}>
          {/* Username field visible in both login and registration modes */}
          <div>
            <label htmlFor="username" className="sr-only">Username</label>
            <input
              type="text"
              name="username"
              id="username"
              value={formData.username}
              onChange={handleInputChange}
              placeholder="Username"
              className="block w-full px-4 py-2 border border-gray-700 bg-transparent text-white rounded-md shadow-sm placeholder-gray-400 focus:ring-2 focus:ring-indigo-500"
              required
            />
          </div>
          {!isLogin && ( // Show registration fields when in registration mode
            <>
              <div>
                <label htmlFor="college" className="sr-only">College</label>
                <input
                  type="text"
                  name="college"
                  id="college"
                  value={formData.college}
                  onChange={handleInputChange}
                  placeholder="College"
                  className="block w-full px-4 py-2 border border-gray-700 bg-transparent text-white rounded-md shadow-sm placeholder-gray-400 focus:ring-2 focus:ring-indigo-500"
                  required
                />
              </div>
              <div>
                <label htmlFor="regNo" className="sr-only">Registration Number</label>
                <input
                  type="text"
                  name="regNo"
                  id="regNo"
                  value={formData.regNo}
                  onChange={handleInputChange}
                  placeholder="Registration Number"
                  className="block w-full px-4 py-2 border border-gray-700 bg-transparent text-white rounded-md shadow-sm placeholder-gray-400 focus:ring-2 focus:ring-indigo-500"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="sr-only">Email address</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Email address"
                  className="block w-full px-4 py-2 border border-gray-700 bg-transparent text-white rounded-md shadow-sm placeholder-gray-400 focus:ring-2 focus:ring-indigo-500"
                  required
                />
              </div>
              <div>
                <label htmlFor="phone" className="sr-only">Phone Number</label>
                <input
                  type="tel"
                  name="phone"
                  id="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder="Phone Number"
                  className="block w-full px-4 py-2 border border-gray-700 bg-transparent text-white rounded-md shadow-sm placeholder-gray-400 focus:ring-2 focus:ring-indigo-500"
                  required
                />
              </div>
              <div>
                <label htmlFor="year" className="sr-only">Year</label>
                <select
                  name="year"
                  id="year"
                  value={formData.year}
                  onChange={handleInputChange}
                  className="block w-full px-4 py-2 border border-black bg-transparent text-white rounded-md placeholder-gray-400 focus:ring-2 focus:ring-indigo-500"
                  required
                >
                  <option value="">Select Year</option>
                  <option value="1st Year">1st Year</option>
                  <option value="2nd Year">2nd Year</option>
                  <option value="3rd Year">3rd Year</option>
                  <option value="4th Year">4th Year</option>
                </select>
              </div>
              <div>
                <label htmlFor="gender" className="sr-only">Gender</label>
                <select
                  name="gender"
                  id="gender"
                  value={formData.gender}
                  onChange={handleInputChange}
                  className="block w-full px-4 py-2 border border-black bg-transparent text-white rounded-md placeholder-gray-400 focus:ring-2 focus:ring-indigo-500"
                  required
                >
                  <option value="">Select Gender</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Other">Other</option>
                </select>
              </div>
            </>
          )}
          <div>
            <label htmlFor="password" className="sr-only">Password</label>
            <input
              type="password"
              name="password"
              id="password"
              value={formData.password}
              onChange={handleInputChange}
              placeholder="Password"
              className="block w-full px-4 py-2 border border-gray-700 bg-transparent text-white rounded-md shadow-sm placeholder-gray-400 focus:ring-2 focus:ring-indigo-500"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            {isLogin ? 'Login' : 'Register'}
          </button>
        </form>
        <div className="text-center">
          <p className="text-gray-400">
            {isLogin ? 'Don’t have an account?' : 'Already have an account?'}
            <button
              type="button"
              className="text-indigo-500 hover:underline"
              onClick={() => setIsLogin(!isLogin)} // Toggle between login and registration
            >
              {isLogin ? 'Register' : 'Login'}
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default StudentRegistration;
