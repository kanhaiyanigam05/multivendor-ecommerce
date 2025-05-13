import React from "react";
import FullscreenOverlay from "./FullscreenOverlay";
import "./Loader.css";

const Loader = () => {
  return (
    <>
      <FullscreenOverlay />
      <div className="absolute w-full h-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-[99] bg-gray-200 opacity-80">
        <div className="w-full h-full flex items-center justify-center">
          <div className="loader"></div>
        </div>
      </div>
    </>
  );
};

export default Loader;