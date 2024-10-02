import { useState, useEffect } from 'react';
import { AvatarIcon } from '@radix-ui/react-icons';
import { CameraIcon } from 'lucide-react';
import { Accept, useDropzone } from 'react-dropzone';

// Type definition for FileUpload props
type TFileUploadProps = {
  onChange: (value: File[]) => void;
  value: File[];
};

// FileUpload component for handling image input
const FileUpload = ({ onChange, value }: TFileUploadProps) => {
  const MAX_SIZE = 1 * 1024 * 1024; // 1 MB
  const acceptedFormats = ['image/jpeg', 'image/png', 'image/gif']; // Supported formats

  const { getRootProps, getInputProps } = useDropzone({
    accept: acceptedFormats.reduce((acc, format) => {
      acc[format] = []; // Adding empty array for each format
      return acc;
    }, {} as Accept),
    onDrop: (acceptedFiles: File[], rejectedFiles: File[]) => {
      console.log('files acceptedFiles=>', acceptedFiles);
      console.log('files rejectedFiles=>', rejectedFiles);
      
      // Filter accepted files by size
      const validFiles = acceptedFiles.filter(file => file.size <= MAX_SIZE);
      if (validFiles.length) {
        onUpdateFile(validFiles);
      } else {
        alert('File size exceeds 1 MB or unsupported format. Please try again.');
      }
    },
  });

  const onUpdateFile = (newFiles: File[]) => {
    onChange(newFiles);
  };

  return (
    <div className="flex items-center justify-center">
      <div className="relative h-36 w-36 overflow-hidden rounded-full bg-gray-200 shadow-2xl">
        <div {...getRootProps({ className: 'dropzone cursor-pointer' })}>
          <input {...getInputProps()} />
          {value && !!value.length ? (
            <ImagePreview file={value[0]} />
          ) : (
            <AvatarIcon className="h-36 w-36 text-gray-100" />
          )}

          <p className="absolute -bottom-5 left-1/2 flex w-full -translate-x-1/2 -translate-y-1/2 transform flex-col items-center justify-center bg-gray-300 bg-opacity-50 py-1 text-xs font-normal text-muted-foreground">
            <CameraIcon className="h-4 w-4 text-muted-foreground" />
            Add Image 
          </p>
        </div>
      </div>
    </div>
  );
};

// Component to preview the uploaded image
const ImagePreview = ({ file }: { file: File }) => {
  const [objectUrl, setObjectUrl] = useState<string | null>(null);

  useEffect(() => {
    const url = URL.createObjectURL(file);
    setObjectUrl(url);

    // Clean up the object URL when the component unmounts
    return () => {
      URL.revokeObjectURL(url);
    };
  }, [file]);

  return objectUrl ? (
    <img
      src={objectUrl}
      alt="Preview"
      className="absolute h-full w-full rounded-full object-cover"
    />
  ) : null;
};

// Header component with title
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

// Main FormWithImageUpload component
export default function FormWithImageUpload() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [files, setFiles] = useState<File[]>([]);

  const handleFileChange = (newFiles: File[]) => {
    setFiles(newFiles);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({
      title,
      description,
      price,
      files,
    });
    // Further submit handling logic can be added here
  };

  return (
    <div className="flex justify-center p-8">
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
            <FileUpload onChange={handleFileChange} value={files} />
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
