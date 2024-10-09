import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { cn } from '../../lib/utils';
import {
  IconArrowLeft,
  IconPlus,
  IconUsers,
  IconTrash,
  IconFileExport,
  IconFileExcel,
} from "@tabler/icons-react";

import { Sidebar, SidebarBody, SidebarLink } from '../../components/Sidebar';
import AddEvents from './AddEvents'; 
import RemoveEvents from './RemoveEvents'; 
import axios from 'axios';
import { BACKEND_URL } from '../../config';
import jsPDF from 'jspdf'; 
import 'jspdf-autotable'; 
import * as XLSX from 'xlsx'; 

const generateRandomData = (numEntries) => {
  const sampleData = [];
  const eventNames = ['Event A', 'Event B', 'Event C', 'Event D', 'Event E'];
  const statuses = ['verified', 'pending', 'rejected'];

  for (let i = 1; i <= numEntries; i++) {
    sampleData.push({
      User: {
        email: `student${i}@example.com`,
        username: `studentuser${i}`,
      },
      Event: {
        event_name: eventNames[Math.floor(Math.random() * eventNames.length)],
      },
      transaction_id: `TXN${Math.floor(Math.random() * 1000000)}`,
      upi_id: `upi-${Math.floor(Math.random() * 1000)}@bank`,
      event_teamsize: Math.floor(Math.random() * 10) + 1,
      verification_status: statuses[Math.floor(Math.random() * statuses.length)],
    });
  }
  return sampleData;
};

const StudentList = () => {
  const navigate = useNavigate();
  const [students, setStudents] = useState([]);

  useEffect(() => {
    const role = localStorage.getItem('role');
    if (role !== 'admin') {
      navigate('/');
    }
    
    // Generate 100+ sample student data
    const sampleStudents = generateRandomData(100);
    setStudents(sampleStudents);
  }, [navigate]);

  const [currentView, setCurrentView] = useState('students');
  const [isConfirmOpen, setIsConfirmOpen] = useState(false);
  const [eventid, seteventid] = useState('verified');
  const [userToRemove, setUserToRemove] = useState(0);

  const handleViewChange = (view) => {
    setCurrentView(view);
  };

  const handleStatusChange = (userId, newStatus, event_id) => {
    axios.post(`${BACKEND_URL}/admin/updateuserstatus`, {
      user_id: userId,
      event_verification: newStatus,
      event_id: event_id,
    }, {
      withCredentials: true
    }).then(() => {
      window.location.reload(); 
    }).catch((error) => {
      console.error('Error updating user status:', error);
    });
  };

  const exportToPDF = () => {
    const doc = new jsPDF();
    
    doc.text('Student List', 14, 10);
    const tableColumn = ['Email', 'Username', 'Event Name', 'Transaction ID', 'UPI ID', 'Team Size', 'Verification'];
    const tableRows = [];

    students.forEach(entry => {
      const studentData = [
        entry.User.email,
        entry.User.username,
        entry.Event.event_name,
        entry.transaction_id,
        entry.upi_id,
        entry.event_teamsize,
        entry.verification_status
      ];
      tableRows.push(studentData);
    });

    doc.autoTable({
      head: [tableColumn],
      body: tableRows,
      startY: 20,
    });

    doc.save('student_list.pdf');
  };

  const exportToExcel = () => {
    const ws = XLSX.utils.json_to_sheet(students.map(entry => ({
      Email: entry.User.email,
      Username: entry.User.username,
      'Event Name': entry.Event.event_name,
      'Transaction ID': entry.transaction_id,
      'UPI ID': entry.upi_id,
      'Team Size': entry.event_teamsize,
      'Verification': entry.verification_status,
    })));

    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Student List');

    XLSX.writeFile(wb, 'student_list.xlsx');
  };

  const links = [
    {
      label: "Students",
      icon: <IconUsers className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />,
      onClick: () => handleViewChange('students'),
    },
    {
      label: "Add Events",
      icon: <IconPlus className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />,
      onClick: () => handleViewChange('addEvents'),
    },
    {
      label: "Remove Events",
      icon: <IconTrash className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />,
      onClick: () => handleViewChange('removeEvents'),
    },
    {
      label: "Logout",
      icon: <IconArrowLeft className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />,
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

  const getBoxStyles = (status) => {
    switch (status) {
      case 'verified':
        return 'bg-green-100 text-green-700';
      case 'pending':
        return 'bg-yellow-100 text-yellow-700';
      case 'rejected':
        return 'bg-red-100 text-red-700';
      default:
        return 'bg-gray-100 text-gray-700';
    }
  };

  return (
    <div
      className={cn(
        "rounded-md flex flex-col md:flex-row w-full flex-1 max-w-[120rem] mx-auto border border-neutral-200 dark:border-neutral-700 overflow-hidden",
        "h-screen"
      )}
    >
      <Sidebar animate={false}>
        <SidebarBody className="flex flex-col justify-between gap-10 h-full">
          <div className="flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
            <div className="mt-8 flex flex-col gap-2">
              {links.map((link, idx) => (
                <SidebarLink
                  key={idx}
                  link={{
                    ...link,
                    href: "#",
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
              <div className="relative">
                <button
                  className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 flex items-center"
                  onClick={(e) => {
                    e.currentTarget.nextElementSibling.classList.toggle('hidden');
                  }}
                >
                  <IconFileExport className="h-5 w-5 mr-2" />
                  Export
                </button>
                <div className="absolute right-0 hidden bg-white border border-gray-300 rounded shadow-lg mt-1">
                  <button
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    onClick={exportToPDF}
                  >
                    Export as PDF
                  </button>
                  <button
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    onClick={exportToExcel}
                  >
                    Export as Excel
                  </button>
                </div>
              </div>
            </div>

            <div className="overflow-y-auto h-full">
              <table className="min-w-full bg-white border border-gray-300 dark:border-neutral-700">
                <thead>
                  <tr className="bg-black text-white">
                    <th className="py-3 px-6 text-left">Email</th>
                    <th className="py-3 px-6 text-left">Username</th>
                    <th className="py-3 px-6 text-left">Event Name</th>
                    <th className="py-3 px-6 text-left">Transaction ID</th>
                    <th className="py-3 px-6 text-left">UPI ID</th>
                    <th className="py-3 px-6 text-left">Team Size</th>
                    <th className="py-3 px-6 text-left">Verification</th>
                  </tr>
                </thead>
                <tbody>
                  {students.map((entry, index) => (
                    <tr key={index} className="hover:bg-gray-100 dark:hover:bg-neutral-600">
                      <td className="py-3 px-6 border-b border-gray-300 dark:border-neutral-700">{entry.User.email}</td>
                      <td className="py-3 px-6 border-b border-gray-300 dark:border-neutral-700">{entry.User.username}</td>
                      <td className="py-3 px-6 border-b border-gray-300 dark:border-neutral-700">{entry.Event.event_name}</td>
                      <td className="py-3 px-6 border-b border-gray-300 dark:border-neutral-700">{entry.transaction_id}</td>
                      <td className="py-3 px-6 border-b border-gray-300 dark:border-neutral-700">{entry.upi_id}</td>
                      <td className="py-3 px-6 border-b border-gray-300 dark:border-neutral-700">{entry.event_teamsize}</td>
                      <td className="py-3 px-6 border-b border-gray-300 dark:border-neutral-700">
                        <span className={`p-2 rounded ${getBoxStyles(entry.verification_status)}`}>
                          {entry.verification_status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </>
        )}

        {currentView === 'addEvents' && <AddEvents />}
        {currentView === 'removeEvents' && <RemoveEvents />}
      </div>
    </div>
  );
};

export default StudentList;
