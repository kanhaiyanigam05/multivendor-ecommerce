"use client";
import React, { useEffect, useState } from "react";


const Media = ({ variant= null, label = null, labelClass = null, id = null, className = null, wrapperClass = null, error = null, multiple = false, value = null, onChange = () => {},
    setOpen, data, selectedMedia, setSelectedMedia, ...props }) => {
    useEffect(() => {
      if(data) {
        setSelectedMedia({...selectedMedia, multiple, data: value});
      }
    }, [selectedMedia.multiple, data]);
    useEffect(() => {
      onChange(selectedMedia.data);
    }, [selectedMedia.data]);
    const [dragIndex, setDragIndex] = useState(null);
    const handleDragStart = (index) => {
      setDragIndex(index);
    };
    
    const handleDragEnter = (index) => {
      if (dragIndex === null || dragIndex === index) return;
    
      const updatedImages = [...selectedMedia.data];
      const draggedItem = updatedImages[dragIndex];
      updatedImages.splice(dragIndex, 1);
      updatedImages.splice(index, 0, draggedItem);
    
      setDragIndex(index);
      setSelectedMedia(prev => ({ ...prev, data: updatedImages }));
    };
    
    
    const handleDragEnd = () => {
      setDragIndex(null);
    };
    console.log(selectedMedia.data, "selectedMedia.data");
    console.log(data, 'datadatadatadatadatadata');
    
  return (<>
    {variant === "simple" ? (
      value ? (
        <div className={className}>
          <img alt="product" className={`w-full h-full object-contain rounded-lg`} onClick={() => setOpen(true)}
            src={data.find(item => item.id === selectedMedia.data)?.full_path}
          />
        </div>
      ) : (
        <div onClick={() => setOpen(true)} className={`${className} rounded-lg bg-gray-50 hover:bg-gray-200 border border-dashed border-gray-400 flex items-center justify-center`}>
          <i className="fa fa-image text-blue-500"></i>
        </div>
      )
    ) : (
    <div className={`space-y-6 font-[sans-serif] max-w-[100%] w-full ${wrapperClass}`}>
      <div className="flex items-start justify-center w-full flex-col">
        {label && <label htmlFor={id} className={`text-[13px] text-[#303030] font-500 mb-1 ${labelClass}`}>{label}</label>}
        {selectedMedia.data && selectedMedia.data.length > 0 ? (
          <div className="grid grid-cols-4 gap-2 append-images ui-sortable">
            {Array.isArray(selectedMedia.data) && selectedMedia.data.map((id, i) => {
              const item = data.find(item => item.id === id);
              
              return (
                <div className={`relative group aspect-square bg-gray-50 hover:bg-gray-100 rounded-lg border border-gray-400${i === 0 ? " col-span-2 row-span-2" : ""}
                  ${dragIndex === i ? "cursor-grabbing" : "cursor-grab"}`}
                  key={i} draggable onDragStart={() => handleDragStart(i)} onDragEnter={() => handleDragEnter(i)} onDragEnd={handleDragEnd} >
                  <img src={item.full_path} alt="Image" className="w-full h-full object-contain rounded-lg shadow" draggable="false" />
                  <button className="remove-image absolute top-2 right-2 w-8 h-8 bg-red-500 text-white p-1 rounded-lg shadow opacity-100 group-hover:opacity-100 transition"
                    type="button" onClick={() => setSelectedMedia(prev => ({...prev, data: prev.data.filter(item => item !== id)}))}>
                    <i className="fa fa-trash"></i>
                  </button>
                </div>
              )
            })}
            {multiple && (
              <div className="relative cursor-pointer group cursor-drag aspect-square text-xs bg-gray-50 hover:bg-gray-100 rounded-lg border-dashed border border-gray-500 flex items-center justify-center" onClick={() => setOpen(true)}>
                <i className="fa fa-plus font-thin text-gray-500"></i>
              </div>
            )}

            {/* <!-- Repeat for other images with aspect-square and object-contain --> */}

          </div>
        ) : (
          <button className={`image-upload-modal border border-dashed border-[#303030] px-5 py-8 rounded-md w-[100%] ${className}`}
            onClick={() => setOpen(true)} type="button" {...props}>
            <div className="image-upload-sec flex flex-col items-center justify-center gap-2">
              <span className="text-[12px] text-[#303030] font-[600] add-image-button px-2 py-1 rounded-md">
                Add Image
              </span>
              <small className="text-[#474747] font-[400]">
                or drop an image to upload
              </small>
            </div>
          </button>
        )}
        {error && (
          <span className="text-red-800 text-[13px] font-500">
            <i className="fa fa-exclamation-circle me-2"></i>{Array.isArray(error) ? error[0] : error}
          </span>
        )}
      </div>
    </div>
    )}
  </>);
};

export default Media;