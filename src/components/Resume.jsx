import React from "react";
import { FiDownload } from "react-icons/fi";

const ResumeDownloadButton = ({ resumePath, resumeName }) => {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = resumePath;
    link.download = resumeName;
    link.style.display = "none";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    // Optional: User feedback (using a state variable for better UX)
    // You could use a library like react-toastify for nicer notifications
    // or simply change the button text with a state update.
    console.log("Downloading resume..."); // Or use a state variable to update the button text
  };

  return (
    <button
      onClick={handleDownload}
      // Tailwind classes
    >
      <div className=" flex gap-5 items-center rounded-full border-gray-700 border-2 p-2">
        <FiDownload className=" h-5 w-5 " />
        <p className=" text-sm ">Download Resume</p>
      </div>
    </button>
  );
};

// Example usage in your component:

export default ResumeDownloadButton;
