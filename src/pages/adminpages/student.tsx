import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { cn } from '../../lib/utils';
import {
  IconArrowLeft,
  IconPlus,
  IconUsers,
  IconTrash,
} from "@tabler/icons-react";
import { Sidebar, SidebarBody, SidebarLink } from '../../components/Sidebar';
import AddEvents from './AddEvents'; // Import your AddEvents component
import RemoveEvents from './RemoveEvents'; // Import your RemoveEvents component
import Login from './pages/login'; // Import the Login component

const StudentList = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Clear any user authentication details (if applicable)
    localStorage.removeItem('token'); // Example: removing a token
    console.log("Logged out!");

    // Redirect to the login page
    navigate('/login');
  };

  // State to manage student data
  const [students, setStudents] = useState([
    { name: 'John Doe', email: 'john@example.com', event: 'Tech Talk', amountPaid: 100 },
    { name: 'Jane Smith', email: 'jane@example.com', event: 'Workshop', amountPaid: 150 },
  ]);

  // State to manage the current view
  const [currentView, setCurrentView] = useState('students'); // 'students', 'addEvents', or 'removeEvents'

  // State for the add user popup
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [newUser, setNewUser] = useState({ name: '', email: '', password: '' });

  // State for the confirmation dialog
  const [isConfirmOpen, setIsConfirmOpen] = useState(false);
  const [userToRemove, setUserToRemove] = useState(null);

  // Function to switch views
  const handleViewChange = (view) => {
    setCurrentView(view);
  };

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewUser((prev) => ({ ...prev, [name]: value }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Add the new user to the students array
    setStudents((prev) => [
      ...prev,
      { name: newUser.name, email: newUser.email, event: 'New Event', amountPaid: 0 },
    ]);
    // Close the popup and reset form
    setIsPopupOpen(false);
    setNewUser({ name: '', email: '', password: '' }); // Reset the form
  };

  // Function to handle user removal
  const handleRemoveUser = () => {
    setStudents((prev) => prev.filter((_, index) => index !== userToRemove));
    setIsConfirmOpen(false); // Close confirmation dialog
    setUserToRemove(null); // Reset user to remove
  };

  // Sidebar links
  const links = [
    {
      label: "Students",
      icon: (
        <IconUsers className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
      ),
      onClick: () => handleViewChange('students'), // Switch to students view
    },
    {
      label: "Add Events",
      icon: (
        <IconPlus className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
      ),
      onClick: () => handleViewChange('addEvents'), // Switch to add events view
    },
    {
      label: "Remove Events",
      icon: (
        <IconTrash className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
      ),
      onClick: () => handleViewChange('removeEvents'), // Switch to remove events view
    },
    {
      label: "Logout",
      icon: (
        <IconArrowLeft className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
      ),
      onClick: () => {
        // Perform any necessary logout actions here (like clearing user session)
        navigate('/login'); // Navigate to login page
      },
    },
  ];

  return (

    
    <div
      className={cn(
        "rounded-md flex flex-col md:flex-row w-full flex-1 max-w-[120rem] mx-auto border border-neutral-200 dark:border-neutral-700 overflow-hidden",
        "h-screen"
      )}
    >
      {/* Sidebar */}
      <Sidebar animate={false}>
        <SidebarBody className="flex flex-col justify-between gap-10 h-full">
          <div className="flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
            <div className="mt-8 flex flex-col gap-2">
              {links.map((link, idx) => (
                <SidebarLink
                  key={idx}
                  link={{
                    ...link,
                    href: "#", // Dummy href since we are using onClick for navigation
                  }}
                  onClick={link.onClick}
                />
              ))}
            </div>
          </div>
        </SidebarBody>
      </Sidebar>

      {/* Main Content */}
      <div className="flex-1 p-8">
        {currentView === 'students' && (
          <>
            <div className="flex justify-between items-center mb-4">
              <h1 className="text-2xl font-bold">Student List</h1>
              <button
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                onClick={() => setIsPopupOpen(true)} // Open the popup
              >
                Add User
              </button>
            </div>

            {/* Table */}
            <table className="min-w-full bg-white border border-neutral-200 dark:bg-neutral-800 dark:border-neutral-700">
              <thead>
                <tr>
                  <th className="px-6 py-3 text-left font-medium text-gray-700 dark:text-gray-300">Name</th>
                  <th className="px-6 py-3 text-left font-medium text-gray-700 dark:text-gray-300">Email</th>
                  <th className="px-6 py-3 text-left font-medium text-gray-700 dark:text-gray-300">Event</th>
                  <th className="px-6 py-3 text-left font-medium text-gray-700 dark:text-gray-300">Amount Paid</th>
                  <th className="px-6 py-3 text-left font-medium text-gray-700 dark:text-gray-300">Actions</th>
                </tr>
              </thead>
              <tbody>
                {students.map((student, index) => (
                  <tr key={index} className="border-t border-neutral-200 dark:border-neutral-700">
                    <td className="px-6 py-3 text-gray-900 dark:text-gray-200">{student.name}</td>
                    <td className="px-6 py-3 text-gray-900 dark:text-gray-200">{student.email}</td>
                    <td className="px-6 py-3 text-gray-900 dark:text-gray-200">{student.event}</td>
                    <td className="px-6 py-3 text-gray-900 dark:text-gray-200">${student.amountPaid}</td>
                    <td className="px-6 py-3">
                      <button
                        className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                        onClick={() => {
                          setUserToRemove(index);
                          setIsConfirmOpen(true); // Open confirmation dialog
                        }}
                      >
                        Remove
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </>
        )}
        
        {currentView === 'addEvents' && <AddEvents />}
        
        {currentView === 'removeEvents' && <RemoveEvents />} {/* Render RemoveEvents component */}

        {/* Add User Popup */}
        {isPopupOpen && (
          <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-30 backdrop-blur-md transition-opacity duration-300 ease-in-out">
            <div className="bg-white rounded-lg shadow-lg p-6 max-w-md w-full transform transition-transform duration-300 ease-in-out scale-95 opacity-100">
              <h2 className="text-2xl font-bold mb-4 text-gray-800">Add User</h2>
              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <label className="block text-gray-700 font-medium">Name</label>
                  <input
                    type="text"
                    name="name"
                    value={newUser.name}
                    onChange={handleInputChange}
                    className="border border-gray-300 rounded-md p-2 w-full focus:ring-2 focus:ring-blue-400 focus:border-transparent transition duration-200"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700 font-medium">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={newUser.email}
                    onChange={handleInputChange}
                    className="border border-gray-300 rounded-md p-2 w-full focus:ring-2 focus:ring-blue-400 focus:border-transparent transition duration-200"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700 font-medium">Password</label>
                  <input
                    type="password"
                    name="password"
                    value={newUser.password}
                    onChange={handleInputChange}
                    className="border border-gray-300 rounded-md p-2 w-full focus:ring-2 focus:ring-blue-400 focus:border-transparent transition duration-200"
                    required
                  />
                </div>
                <div className="flex justify-end">
                  <button
                    type="button"
                    className="text-gray-500 hover:text-gray-700 mr-2"
                    onClick={() => setIsPopupOpen(false)} // Close the popup
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                  >
                    Add User
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}

        {/* Remove User Confirmation Dialog */}
        {isConfirmOpen && (
          <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-30 backdrop-blur-md transition-opacity duration-300 ease-in-out">
            <div className="bg-white rounded-lg shadow-lg p-6 max-w-md w-full transform transition-transform duration-300 ease-in-out scale-95 opacity-100">
              <h2 className="text-lg font-bold mb-4 text-gray-800">Confirm Removal</h2>
              <p className="mb-4">Are you sure you want to remove this user?</p>
              <div className="flex justify-end">
                <button
                  type="button"
                  className="text-gray-500 hover:text-gray-700 mr-2"
                  onClick={() => setIsConfirmOpen(false)} // Close confirmation dialog
                >
                  Cancel
                </button>
                <button
                  className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
                  onClick={handleRemoveUser} // Handle user removal
                >
                  Remove User
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
    
  );
};

export default StudentList;
