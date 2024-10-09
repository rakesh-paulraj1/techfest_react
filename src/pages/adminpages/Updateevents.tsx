import { useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { BACKEND_URL } from '../../config';
import { FileUpload } from "../../components/file-upload";


const Header = ({ title }: { title: string }) => (
  <div className="flex items-center justify-center bg-secondary px-4 py-2">
    <Heading title={title} />
  </div>
);


const Heading = ({ title }: { title: string }) => (
  <div>
    <h2 className="text-xl font-bold tracking-tight text-primary sm:text-3xl">{title}</h2>
  </div>
);

export default function FormWithImageUpdate() {
  const { eventId } = useParams();
  const [files1, setFiles1] = useState<File[]>([]);

  console.log(eventId);

  

  const handleFileUpload1 = (files1: File[]) => {
    setFiles1(files1);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const formData = new FormData();
    
      formData.append('qr_image', files1[0]);

      const response = await axios.put(`${BACKEND_URL}/admin/updateevent`, formData, { // Use PUT for updating
        withCredentials: true,
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      console.log(response);
      alert("Event updated successfully");
    } catch (error) {
      console.error("Error updating event:", error);
      alert("Error updating event: " + error);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen p-8 overflow-auto">
      <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-md">
        <Header title="Update Event" />
        <form onSubmit={handleSubmit} className="mt-8 space-y-6">
         <div>
            <h2>QR Image</h2>
            <FileUpload onChange={handleFileUpload1} />
          </div>

          <div>
            <button
              type="submit"
              className="w-full flex justify-center rounded-md border border-transparent bg-blue-500 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
              Update
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
