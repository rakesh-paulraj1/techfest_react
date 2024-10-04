import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios'; // Import axios
import { BACKEND_URL } from '../config';
const Login = () => {
  const [isExistingUser, setIsExistingUser] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const navigate = useNavigate();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData.name,formData.password);
    if (isExistingUser) {
      try {
        // Call backend API to log in the user
        const response = await axios.post(`${BACKEND_URL}/adminlogin`, {
          name:formData.name,
          password: formData.password,
        }, {
          withCredentials: true, 
        });
        console.log(formData.name,formData.password);

        const userRole = 'admin';

        if (userRole === 'admin') {
          console.log('Redirecting to admin dashboard...');
          navigate('/admindashboard');
        } else {
          console.log('Logging in as a regular user...');
          navigate('/dashboard');
        }
      } catch (error) {
        console.error('Login failed:', error.response?.data || error.message);
      }
    } else {
      if (formData.password === formData.confirmPassword) {
        try {
          const response = await axios.post(`${BACKEND_URL}/signup`, {
            name: formData.name,
            email: formData.email,
            password: formData.password,
          });
          
          console.log('Registration successful:', response.data);
          setIsExistingUser(true); // Switch to login form after successful registration
        } catch (error) {
          console.error('Registration failed:', error.response?.data || error.message);
        }
      } else {
        console.error('Passwords do not match');
      }
    }
  };

  const handleToggleExistingUser = () => {
    setIsExistingUser(true);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-black relative overflow-hidden">
      <div className="absolute inset-0 z-0 flex flex-wrap justify-center items-center pointer-events-none">
        {[...Array(5)].map((_, index) => (
          <svg
            key={index}
            className="floating-mail-icon"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="48"
            height="48"
          >
            <path
              fill="currentColor"
              d="M12 13l6-6H6l6 6zm0 2l-6-6v8l6 6 6-6v-8l-6 6z"
            />
          </svg>
        ))}
      </div>
      <div className="bg-gradient-to-br from-gray-900 to-black bg-opacity-80 backdrop-filter backdrop-blur-lg rounded-lg p-8 shadow-lg space-y-6 w-full max-w-md z-10">
        <h2 className="text-center text-3xl font-extrabold text-white">
          {isExistingUser ? 'Login' : 'Create Account'}
        </h2>
        <form className="space-y-6" onSubmit={handleFormSubmit}>
          {!isExistingUser && (
             <div>
             <label htmlFor="email" className="sr-only">
               Email address
             </label>
             <input
               type="email"
               name="email"
               id="email"
               value={formData.email}
               onChange={handleInputChange}
               placeholder="Email address"
               className="block w-full px-4 py-2 border border-gray-700 bg-gray-800 text-white rounded-md shadow-sm placeholder-gray-400 focus:ring-2 focus:ring-indigo-500"
               required
             />
           </div>

          )}
                     <div>
              <label htmlFor="name" className="sr-only">
                Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="Full Name"
                className="block w-full px-4 py-2 border border-gray-700 bg-gray-800 text-white rounded-md shadow-sm placeholder-gray-400 focus:ring-2 focus:ring-indigo-500"
                required
              />
            </div>
          <div>
            <label htmlFor="password" className="sr-only">
              Password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              value={formData.password}
              onChange={handleInputChange}
              placeholder="Password"
              className="block w-full px-4 py-2 border border-gray-700 bg-gray-800 text-white rounded-md shadow-sm placeholder-gray-400 focus:ring-2 focus:ring-indigo-500"
              required
            />
          </div>
          {!isExistingUser && (
            <div>
              <label htmlFor="confirmPassword" className="sr-only">
                Confirm Password
              </label>
              <input
                type="password"
                name="confirmPassword"
                id="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleInputChange}
                placeholder="Confirm Password"
                className="block w-full px-4 py-2 border border-gray-700 bg-gray-800 text-white rounded-md shadow-sm placeholder-gray-400 focus:ring-2 focus:ring-indigo-500"
                required
              />
            </div>
          )}
          <button
            type="submit"
            className="w-full py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            {isExistingUser ? 'Login' : 'Sign Up'}
          </button>
        </form>
        <div className="text-sm text-center text-gray-400">
          {isExistingUser ? (
            <span>
              New here?{' '}
              <button
                onClick={() => setIsExistingUser(false)}
                className="font-medium text-indigo-300 hover:text-indigo-500"
              >
                Create an account
              </button>
            </span>
          ) : (
            <span>
              Already have an account?{' '}
              <button
                onClick={handleToggleExistingUser}
                className="font-medium text-indigo-300 hover:text-indigo-500"
              >
                Login
              </button>
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default Login;
