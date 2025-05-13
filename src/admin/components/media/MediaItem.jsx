import React from "react";
import Checkbox from "../Checkbox";

const MediaItem = ({showDetail, item, layout, selectedMedia, setSelectedMedia}) => {
    const handleChange = (e) => {
      const id = Number(e.target.value);
    
      setSelectedMedia(prev => {
        
        if (prev.multiple) {
          const prevData = Array.isArray(prev.data) ? prev.data : [];
          const isSelected = prevData.includes(id);
          const updatedData = isSelected
            ? prevData.filter(item => item !== id)
            : [...prevData, id];
    
          return { ...prev, data: updatedData };
        } else {
          return { ...prev, data: id };
        }
      });
    };
    
    
    return (layout === "grid" ? (
      <label htmlFor={item.id} className="gallery-item flex items-center gap-3 p-2 w-24 h-24 rounded-md bg-gray-100 relative">
        <Checkbox checked={selectedMedia.multiple ? Array.isArray(selectedMedia.data) && selectedMedia.data.includes(item.id) : selectedMedia.data === item.id}
          onChange={handleChange} type={selectedMedia.multiple ? "checkbox" : "radio"} id={item.id} value={item.id}
          name={'media'} wrapperClass={'absolute top-2 z-10 left-2 w-4 h-4'} />
        <img src={item.full_path} alt={item.alt} title={item.alt} className="absolute inset-0 m-auto z-1 max-w-full max-h-full rounded-md shadow-md object-contain object-center" />
        <button onClick={showDetail} data-image="{{ asset($item->name) }}" data-size="{{ $item->size }}" data-name="{{ $item->name }}" data-date="{{ $item->created_at }}"
          className="absolute z-10 view-icon already_added bg-white p-1 rounded-full shadow-md cursor-pointer ml-auto bottom-2 right-2">
          <i className="fa fa-eye"></i>
        </button>
      </label>
    ) : (
      <div className="gallery-item flex items-center gap-3 p-2 w-24 h-24 rounded-md bg-gray-100 relative">
        <Checkbox checked={selectedMedia.multiple ? Array.isArray(selectedMedia.data) && selectedMedia.data.includes(item.id) : selectedMedia.data === item.id}
          onChange={handleChange} type={selectedMedia.multiple ? "checkbox" : "radio"} id={item.id} value={item.id}
          name={'media'} wrapperClass={'absolute top-2 z-10 left-2 w-4 h-4'} />
        <img src={item.full_path} alt={item.alt} title={item.alt} className="absolute inset-0 m-auto z-1 max-w-full max-h-full rounded-md shadow-md object-contain object-center" />
        <button onClick={showDetail} data-image="{{ asset($item->name) }}" data-size="{{ $item->size }}" data-name="{{ $item->name }}" data-date="{{ $item->created_at }}"
          className="absolute z-10 view-icon already_added bg-white p-1 rounded-full shadow-md cursor-pointer ml-auto bottom-2 right-2">
          <i className="fa fa-eye"></i>
        </button>
      </div>
    ));
};

export default MediaItem;
