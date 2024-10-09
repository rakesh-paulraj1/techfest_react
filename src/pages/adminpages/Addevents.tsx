import { useState } from 'react';

import axios from 'axios';
import { BACKEND_URL } from '../../config';
import { FileUpload } from "../../components/file-upload";









const Header = ({ title }: { title: string }) => (
  <div className="flex items-center justify-center bg-secondary px-4 py-2">
    <Heading title={title} />
  </div>
);

// Heading component for displaying the form title
const Heading = ({ title }: { title: string }) => (
  <div>
    <h2 className="text-xl font-bold tracking-tight text-primary sm:text-3xl">{title}</h2>
  </div>
);


export default function FormWithImageUpload() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [teamsize, setteamsize] = useState('');
  const [files, setFiles] = useState<File[]>([]);
  const [files1, setFiles1] = useState<File[]>([]);
  const handleFileUpload = (files: File[]) => {
    setFiles(files);
    console.log(files);
  };
  const handleFileUpload1 = (files1: File[]) => {
    setFiles1(files1);
    console.log(files1);
    console.log(files);

    
  };
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
   
    try {
      const formData = new FormData();
      formData.append('event_name', title);
      formData.append('event_description', description);
      formData.append('event_price', price);
      formData.append('event_teamsize',teamsize);
      formData.append('event_image',files[0]);
      formData.append('qr_image',files1[0]);
      console.log(formData);
      const response = await axios.post(`${BACKEND_URL}/admin/createevents`, formData, {
        withCredentials: true,
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      console.log( response);
      alert("Event created successfully");
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.log(error);
        alert("Error creating event: " + error.message);
      } else {
        alert("An unexpected error occurred");
      }
    }
  };


  return (
    <div className="flex justify-center items-center min-h-screen p-8 overflow-auto">
      <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-md">
        <Header title="Add New Events" />
        <form onSubmit={handleSubmit} className="mt-8 space-y-6">
          {/* Title Input */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Title</label>
            <input
              type="text"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Enter title"
              required
            />
          </div>

          {/* Description Input */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Description</label>
            <textarea
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Enter description"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Teamsize</label>
            <input
              type="number"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              value={teamsize}
              onChange={(e) => setteamsize(e.target.value)}
              placeholder="Enter price"
              required
            />
          </div>

          {/* Price Input */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Price</label>
            <input
              type="number"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              placeholder="Enter price"
              required
            />
          </div>
          

          {/* Image Upload Section */}
          <div>
          <h2>Event image</h2>
            <FileUpload onChange={handleFileUpload}  />
            <h2>QR image</h2>
            <FileUpload onChange={handleFileUpload1}  />
          </div>

          {/* Submit Button */}
          <div>
            <button
              type="submit"
              className="w-full flex justify-center rounded-md border border-transparent bg-blue-500 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
