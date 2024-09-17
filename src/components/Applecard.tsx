const AppleCard = ({ title, description, image }: { title: string; description: string; image: string }) => {
    return (
      <div className="flex flex-col items-center p-4 shadow-lg rounded-lg bg-white dark:bg-gray-800">
        <img src={image} alt={title} className="w-20 h-20 object-contain mb-4" />
        <h3 className="text-lg font-semibold dark:text-white">{title}</h3>
        <p className="text-sm text-gray-600 dark:text-gray-300">{description}</p>
      </div>
    );
  };
  
  export default AppleCard;
  