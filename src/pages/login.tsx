import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [isExistingUser, setIsExistingUser] = useState(false); // Toggle between login and registration forms
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

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Logic for form submission (login or sign-up)
    if (isExistingUser) {
      // Simulate checking credentials and fetching user role
      const userRole = getUserRole(formData.email, formData.password); // Example function

      if (userRole === 'admin') {
        console.log('Redirecting to admin dashboard...');
        navigate('/admindashboard'); // Redirect to admin dashboard
      } else {
        console.log('Logging in as regular user...');
        navigate('/dashboard'); // Redirect to regular user dashboard
      }
    } else {
      if (formData.password === formData.confirmPassword) {
        console.log('Registering:', formData);
        // Handle registration logic
      } else {
        console.error('Passwords do not match');
      }
    }
  };

  // Dummy function to simulate getting user role based on credentials
  const getUserRole = (email: string, password: string) => {
    // Example: You could replace this with an actual API call
    if (email === 'admin@gmail.com' && password === 'adminpass') {
      return 'admin';
    }
    return 'user';
  };

  const handleToggleExistingUser = () => {
    setIsExistingUser(true);
    
    // Optional: Assuming the formData has been filled in with email and password at this point
    const userRole = getUserRole(formData.email, formData.password);
    
    if (userRole === 'admin') {
      navigate('/admindashboard');
    }
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
          )}
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
