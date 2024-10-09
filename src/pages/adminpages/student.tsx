import React, { useEffect, useState } from 'react';
import { redirect, useNavigate } from 'react-router-dom';
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
import axios from 'axios';
import { BACKEND_URL } from '../../config';
import Updateevents from './Updateevents';
const StudentList = () => {
  const navigate = useNavigate();
  const [students, setStudents] = useState([]); // Initialize with an empty array

  useEffect(() => {
    const role = localStorage.getItem('role');
    if (role !== 'admin') {
      navigate('/');
    }
    const response =axios.get(`${BACKEND_URL}/admin/getallregistrations`, {
      withCredentials: true
    }).then((response) => {
      console.log(response);
      setStudents(response.data.admin);
    });
  }, [navigate]);
  // State to manage student data
  
 
  

 
  const [currentView, setCurrentView] = useState('students');


  


 
  const [isConfirmOpen, setIsConfirmOpen] = useState(false);
  const [eventid, seteventid] = useState('verified');
  const [userToRemove, setUserToRemove] = useState(0);

  // Function to switch views
  const handleViewChange = (view) => {
    setCurrentView(view);
  };

  // Handle form input changes
 

  
  const handleStatusChange = (userId, newStatus,event_id) => {
    // Implement your logic to update the user's status in the database
    // For example, you can make an API call to update the user's status
    // Replace the following code with your actual API call
   const updateevent= axios.post(`${BACKEND_URL}/admin/updateuserstatus`, {
      user_id: userId,
      event_verification: newStatus,
      event_id:event_id,
    }, {
      withCredentials: true
    }).then((response) => {
      console.log(response.data);
      window.location.reload(); 
    }).catch((error) => {
      console.error('Error updating user status:', error);
    });
  };

 
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
        axios.post(`${BACKEND_URL}/adminlogout`, {}, {
          withCredentials: true
        }).then(() => {
          localStorage.removeItem('role');
          window.location.href = '/login';
        }).catch((error) => {
          console.error('Logout failed:', error);
        });
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

    
      <div className="flex-1 p-8">
        {currentView === 'students' && (
          <>
            <div className="flex justify-between items-center mb-4">
              <h1 className="text-2xl font-bold">Student List</h1>
             
            </div>

            {/* Table */}
            <table className="min-w-full bg-white dark:bg-neutral-800 border border-gray-300 dark:border-neutral-700">
        <thead>
          <tr className="bg-gray-200 dark:bg-neutral-700 text-gray-700 dark:text-white">
            <th className="py-3 px-6 text-left">Email</th>
            <th className="py-3 px-6 text-left">Username</th>
            <th className="py-3 px-6 text-left">Event Name</th>
            <th className="py-3 px-6 text-left">Transaction ID</th>
            <th className="py-3 px-6 text-left">UPI ID</th>
            <th className="py-3 px-6 text-left">Team size</th>
            <th className="py-3 px-6 text-left">Verification</th>
          </tr>
        </thead>
        <tbody>
          {students.map((entry, index) => (
            <tr
              key={index}
              className="border-t border-neutral-200 dark:border-neutral-700"
            >
              <td className="px-6 py-3 text-gray-900 dark:text-gray-200">{entry.User.email}</td>
              <td className="px-6 py-3 text-gray-900 dark:text-gray-200">{entry.User.username}</td>
              <td className="px-6 py-3 text-gray-900 dark:text-gray-200">{entry.Event.event_name}</td>
              <td className="px-6 py-3 text-gray-900 dark:text-gray-200">{entry.transaction_id}</td>
              <td className="px-6 py-3 text-gray-900 dark:text-gray-200">{entry.upi_id}</td>
              <td className="px-6 py-3 text-gray-900 dark:text-gray-200">{entry.event_teamsize}</td>
              <td className="px-6 py-3">
              <button
  className={`px-3 py-1 rounded ${
    entry.verification_status === 'verified'
      ? 'bg-green-500 text-white hover:bg-green-600 cursor-default'
      : entry.verification_status === 'pending'
      ? 'bg-gray-500 text-white hover:bg-gray-600 cursor-pointer'
      : '' // No need for a style for 'rejected' since it's not being used
  }`}
  onClick={() => {
    if (entry.verification_status === 'pending') {
      setUserToRemove(entry.user_id);
      console.log(userToRemove);
      seteventid(entry.event_id);
      setIsConfirmOpen(true); 
    }

  }}
  disabled={entry.verification_status !== 'pending'} 
>
  {entry.verification_status === 'verified'
    ? 'Verified':'Pending'
    

  }
</button>

              </td>
            </tr>
          ))}
        </tbody>
      </table>
          </>
        )}
        
        {currentView === 'addEvents' &&  <div className="h-[calc(100vh-2rem)] overflow-y-auto p-4"> 
        <AddEvents />
      </div>}
        
        {currentView === 'removeEvents' && <RemoveEvents />} 
      
        

{isConfirmOpen && (
  <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-30 backdrop-blur-md transition-opacity duration-300 ease-in-out">
    <div className="bg-white rounded-lg shadow-lg p-6 max-w-md w-full transform transition-transform duration-300 ease-in-out scale-95 opacity-100">
      <h2 className="text-lg font-bold mb-4 text-gray-800">Change User Status</h2>
      <p className="mb-4">Please select an action for this user:</p>
      <div className="flex justify-end">
        <button
          type="button"
          className="text-gray-500 hover:text-gray-700 mr-2"
          onClick={() => setIsConfirmOpen(false)} // Close confirmation dialog
        >
          Cancel
        </button>
        <button
          className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 mr-2"
          onClick={() => {
            handleStatusChange(userToRemove, 'verified',eventid); 
            setIsConfirmOpen(false);
          }}
        >
          Verify
        </button>
        
      </div>
    </div>
  </div>
)}
    </div>
    </div>
    )};


export default StudentList;
