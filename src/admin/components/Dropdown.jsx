import React, { useEffect, useRef, useState } from "react";

const Dropdown = ({btnClass = null, btnText = null, children, wrapperClass = null, itemsWrapperClass = null, variant = null, ...props}) => {
    const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Close the dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const toggleDropdown = (e) => {
    e.stopPropagation();
    setIsOpen(!isOpen)
  };
  console.log('Hello');
  
  return (
    <div className={`relative ${wrapperClass}`} ref={dropdownRef}>
      {/* Button to toggle dropdown */}
      <button type="button" onClick={toggleDropdown} className={btnClass} {...props}>{btnText}</button>
      {/* Dropdown menu */}
      {isOpen && (<div className={`absolute left-0 ${itemsWrapperClass}`}>{children}</div>)}
    </div>
  );
};

export default Dropdown;
