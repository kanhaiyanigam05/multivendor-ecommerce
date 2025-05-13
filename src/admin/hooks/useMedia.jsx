import { useState, useEffect } from "react";

const useMedia = () => {
  const [isOpen, setOpen] = useState(false);
  const [data, setData] = useState([]);
  const [layout, setLayout] = useState("grid");
  const [selectedMedia, setSelectedMedia] = useState({ multiple: false, data: null });

  // Example effect to fetch media data (replace with your API logic)
  useEffect(() => {
    const fetchMedia = async () => {
      try {
        const response = await fetch("/api/media"); // Replace with your API endpoint
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error("Failed to fetch media:", error);
      }
    };

    fetchMedia();
  }, []);

  return {
    isOpen,
    setOpen,
    data,
    setData,
    layout,
    setLayout,
    selectedMedia,
    setSelectedMedia,
  };
};

export default useMedia;