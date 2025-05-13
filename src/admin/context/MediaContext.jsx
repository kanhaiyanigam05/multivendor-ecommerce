"use client";
import React, { createContext, useContext, useEffect, useState } from "react";
import dayjs from "dayjs";
import Input from "../components/Input";
import Dropdown from "../components/Dropdown";
import DropZone from "../components/DropZone";
import Checkbox from "../components/Checkbox";
import useFetch from "../hooks/useFetch";
import { sortByColumn } from "@/utils/utilities";
import Loader from "../components/Loader";

const MediaContext = createContext();

export const MediaProvider = ({ children }) => {
  const [isOpen, setOpen] = useState(false);
  const [data, setData] = useState([]);
  const [layout, setLayout] = useState("grid");
  const [selectedMedia, setSelectedMedia] = useState({
    multiple: false,
    data: null,
  });
  return (
    <MediaContext.Provider
      value={{
        isOpen,
        setOpen,
        data,
        setData,
        layout,
        setLayout,
        selectedMedia,
        setSelectedMedia,
      }}
    >
      {children}
    </MediaContext.Provider>
  );
};

export const useMedia = () => {
  const context = useContext(MediaContext);
  if (!context) {
    throw new Error("useMedia must be used within a MediaProvider");
  }
  return context;
};

export const Media = ({
  variant = null,
  label = null,
  labelClass = null,
  id = null,
  className = null,
  wrapperClass = null,
  mediaWrapperClass = null,
  error = null,
  multiple = false,
  value = null,
  onChange = () => {},
  ...props
}) => {
  const {
    isOpen,
    setOpen,
    data,
    setData,
    layout,
    setLayout,
    selectedMedia,
    setSelectedMedia,
  } = useMedia();
  useEffect(() => {
    if (data) {
      setSelectedMedia({ ...selectedMedia, multiple, data: value });
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
    setSelectedMedia((prev) => ({ ...prev, data: updatedImages }));
  };

  const handleDragEnd = () => {
    setDragIndex(null);
  };

  return (
    <>
      {variant === "simple" ? (
        value ? (
          <div className={className}>
            <img
              alt="product"
              className={`w-full h-full object-contain rounded-lg`}
              onClick={() => setOpen(true)}
              src={
                data.find((item) => item.id === selectedMedia.data)?.full_path
              }
            />
          </div>
        ) : (
          <div
            onClick={() => setOpen(true)}
            className={`${className} rounded-lg bg-gray-50 hover:bg-gray-200 border border-dashed border-gray-400 flex items-center justify-center`}
          >
            <i className="fa fa-image text-blue-500"></i>
          </div>
        )
      ) : (
        <div
          className={`space-y-6 font-[sans-serif] max-w-[100%] w-full ${wrapperClass}`}
        >
          <div className="flex items-start justify-center w-full flex-col">
            {label && (
              <label
                htmlFor={id}
                className={`text-[13px] text-[#303030] font-500 mb-1 ${labelClass}`}
              >
                {label}
              </label>
            )}
            {selectedMedia.data ? (
              <div className="grid grid-cols-4 gap-2 append-images ui-sortable">
                {Array.isArray(selectedMedia.data)
                  ? selectedMedia.data.map((id, i) => {
                      const item = data.find((item) => item.id === id);

                      return (
                        <div
                          className={`relative group aspect-square bg-gray-50 hover:bg-gray-100 rounded-lg border border-gray-400 ${mediaWrapperClass}${
                            i === 0 ? "col-span-2 row-span-2" : ""
                          } ${
                            dragIndex === i ? "cursor-grabbing" : "cursor-grab"
                          }`}
                          key={i}
                          draggable
                          onDragStart={() => handleDragStart(i)}
                          onDragEnter={() => handleDragEnter(i)}
                          onDragEnd={handleDragEnd}
                        >
                          <img
                            src={item?.full_path}
                            alt="Image"
                            className="w-full h-full object-contain rounded-lg shadow"
                            draggable="false"
                          />
                          <button
                            className="remove-image absolute top-2 right-2 w-8 h-8 bg-red-500 text-white p-1 rounded-lg shadow opacity-100 group-hover:opacity-100 transition"
                            type="button"
                            onClick={() =>
                              setSelectedMedia((prev) => ({
                                ...prev,
                                data: prev.data.filter(
                                  (itemId) => itemId !== id
                                ),
                              }))
                            }
                          >
                            <i className="fa fa-trash"></i>
                          </button>
                        </div>
                      );
                    })
                  : (() => {
                      const item = data.find(
                        (item) => item.id === selectedMedia.data
                      );

                      return (
                        <div className={`relative group aspect-square bg-gray-50 hover:bg-gray-100 rounded-lg border border-gray-400 ${mediaWrapperClass} col-span-2 row-span-2`}>
                          <img
                            src={item?.full_path}
                            alt="Image"
                            className="w-full h-full object-contain rounded-lg shadow"
                          />
                          <button
                            className="remove-image absolute top-2 right-2 w-8 h-8 bg-red-500 text-white p-1 rounded-lg shadow opacity-100 group-hover:opacity-100 transition"
                            type="button"
                            onClick={() =>
                              setSelectedMedia((prev) => ({
                                ...prev,
                                data: null,
                              }))
                            }
                          >
                            <i className="fa fa-trash"></i>
                          </button>
                        </div>
                      );
                    })()}

                {multiple && (
                  <div
                    className="relative cursor-pointer group cursor-drag aspect-square text-xs bg-gray-50 hover:bg-gray-100 rounded-lg border-dashed border border-gray-500 flex items-center justify-center"
                    onClick={() => setOpen(true)}
                  >
                    <i className="fa fa-plus font-thin text-gray-500"></i>
                  </div>
                )}

                {/* <!-- Repeat for other images with aspect-square and object-contain --> */}
              </div>
            ) : (
              <button
                className={`image-upload-modal border border-dashed border-[#303030] px-5 py-8 rounded-md w-[100%] ${className}`}
                onClick={() => setOpen(true)}
                type="button"
                {...props}
              >
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
                <i className="fa fa-exclamation-circle me-2"></i>
                {Array.isArray(error) ? error[0] : error}
              </span>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export const MediaModal = ({ ...props }) => {
  const [showDetail, setShowDetail] = useState(null);
  const [search, setSearch] = useState("");
  const {
    isOpen,
    setOpen,
    data,
    setData,
    layout,
    setLayout,
    selectedMedia,
    setSelectedMedia,
  } = useMedia();
  const { data: mediaData, loading } = useFetch(`/admin/media`);
  useEffect(() => {
    setData(mediaData);
  }, [mediaData]);
  // Filter when search changes
  useEffect(() => {
    if (search.trim()) {
      const filtered = mediaData?.filter(
        (item) =>
          item.file?.toLowerCase().includes(search.toLowerCase()) ||
          item.alt?.toLowerCase().includes(search.toLowerCase())
      );
      setData(filtered);
    } else {
      setData(mediaData || []);
    }
  }, [search, mediaData]);
  const handleNext = () => {
    const currentIndex = data?.findIndex((item) => item.id === showDetail.id);
    if (currentIndex < data.length - 1) {
      setShowDetail(data[currentIndex + 1]);
    }
  };

  const handlePrev = () => {
    const currentIndex = data?.findIndex((item) => item.id === showDetail.id);
    if (currentIndex > 0) {
      setShowDetail(data[currentIndex - 1]);
    }
  };
  const handleSort = (column, order = "asc") => {
    setData(sortByColumn(data, column, order));
  };

  return (
    <>
      <div
        className={`${
          isOpen ? "" : "hidden "
        }overflow-y-auto fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 w-full max-w-[60%]`}
      >
        <div className="relative p-4 w-full max-h-full">
          {/* <!-- Modal content --> */}
          <div className="relative bg-white rounded-lg shadow-sm">
            {/* <!-- Modal header --> */}
            <div className="flex items-center justify-between px-4 py-1 md:p-5 border-b rounded-t border-gray-200 bg-gray-100 h-[53px]">
              <h3 className="text-sm font-semibold text-[#303030]">
                Select image
              </h3>
              <button
                data-modal-hide="large-modal1"
                type="button"
                onClick={() => setOpen(false)}
                className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-600 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center"
              >
                <svg
                  className="w-3 h-3"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 14"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                  />
                </svg>
                <span className="sr-only">Close modal</span>
              </button>
            </div>
            {/* <!-- Modal body --> */}
            <div
              className={`p-4 md:p-5 space-y-4 relative main-modal-body-1 w-full ${
                showDetail ? "!w-[calc(100%-16rem)]" : "w-full"
              }`}
            >
              {loading && <Loader />}
              <div className="modal-body-header flex justify-between items-center w-[100%]">
                <div className="max-w-full">
                  <Input
                    prefix={"fa fa-search"}
                    placeholder={"Search files"}
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                  />
                  {/* <!-- No results message (Hidden by default) --> */}
                  <p
                    id="noResults"
                    className="hidden text-red-500 text-sm mt-2"
                  >
                    No results found
                  </p>
                </div>
                <div className="right-side-button flex gap-3 items-center">
                  <Dropdown
                    btnText={
                      <>
                        <i className="fa fa-exchange mr-1 rotate-90"></i>Sort
                      </>
                    }
                    btnClass={
                      "text-[#303030] add-image-button bg-[transparent] hover:bg-[#3030303] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center"
                    }
                    itemsWrapperClass={
                      "z-20 bg-white divide-y divide-gray-100 rounded-lg shadow-sm max-w-[250px] w-[250px]"
                    }
                  >
                    <ul className="py-3 px-3 text-[11px] text-gray-700 dark:text-gray-200 w-[100%] flex flex-col gap-2">
                      <li>
                        <Checkbox
                          id={"newest"}
                          type="radio"
                          name={"sort"}
                          label={"Date added (newest first)"}
                          onChange={() => handleSort("created_at", "desc")}
                        />
                      </li>
                      <li>
                        <Checkbox
                          id={"oldest"}
                          type="radio"
                          name={"sort"}
                          label={"Date added (oldest first)"}
                          onChange={() => handleSort("created_at", "asc")}
                        />
                      </li>
                      <li>
                        <Checkbox
                          id={"smallest"}
                          type="radio"
                          name={"sort"}
                          label={"File size (smallest first)"}
                          onChange={() => handleSort("size", "asc")}
                        />
                      </li>
                      <li>
                        <Checkbox
                          id={"largest"}
                          type="radio"
                          name={"sort"}
                          label={"File size (largest first)"}
                          onChange={() => handleSort("size", "desc")}
                        />
                      </li>
                    </ul>
                  </Dropdown>
                  <Dropdown
                    btnText={
                      <>
                        <span id="selectedIcon" className="w-4 h-4 mr-1">
                          <i
                            className={`fa ${
                              layout === "grid" ? "fa-th-large" : "fa-th-list"
                            }`}
                          ></i>
                        </span>
                        <i className="fa fa-chevron-down w-2.5 h-2.5 ms-3"></i>
                      </>
                    }
                    btnClass={
                      "text-[#303030] add-image-button bg-[transparent] hover:bg-[#3030303] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center"
                    }
                    itemsWrapperClass={
                      "z-10 bg-white divide-y divide-gray-100 rounded-lg shadow-sm w-[130px]"
                    }
                  >
                    <ul className="py-3 px-3 text-[11px] text-gray-700 dark:text-gray-200 w-[100%] flex flex-col gap-2">
                      <li className="text-[13px] font-[500] text-[#303030] flex cursor-pointer">
                        <button
                          className="flex cursor-pointer"
                          onClick={() => setLayout("grid")}
                        >
                          <span className="w-4 h-4 mr-1">
                            <i className="fa fa-th-large"></i>
                          </span>{" "}
                          Grid View
                        </button>
                      </li>
                      <li className="text-[13px] font-[500] text-[#303030] flex cursor-pointer">
                        <button
                          className="flex cursor-pointer"
                          onClick={() => setLayout("list")}
                        >
                          <span className="w-4 h-4 mr-1">
                            <i className="fa fa-list"></i>
                          </span>{" "}
                          List View
                        </button>
                      </li>
                    </ul>
                  </Dropdown>
                </div>
              </div>
              <div className="main-modal-body w-[100%]">
                <div className="main-upper-buttons"></div>
                <div className="main-image-uploader mt-2">
                  <DropZone
                    onChange={(files) =>
                      setData((prevData) => [...files, ...prevData])
                    }
                  />

                  {/* <!-- List and Grid View --> */}
                  <div className="mt-4">
                    <div
                      id="preview"
                      className="flex flex-wrap gap-[20px]"
                    ></div>
                  </div>
                  {/* <!-- List and Grid View --> */}
                  {/* <!-- Container to store all uploaded images --> */}

                  {/* <!-- Container to store all uploaded images --> */}
                  <div
                    id="imageGalleryContainer"
                    className="mt-4 flex flex-wrap gap-3 border-t pt-4 overflow-y-auto max-h-[400px]"
                  >
                    {/* <!-- Dummy Gallery Images --> */}
                    {data && data.length > 0
                      ? data.map((item, index) => (
                          <MediaItem
                            key={index}
                            showDetail={() => setShowDetail(item)}
                            item={item}
                          />
                        ))
                      : ""}
                  </div>

                  {/* <!-- Container to store all uploaded images --> */}
                </div>
              </div>
            </div>

            {/* <!-- Sidebar Image View --> */}
            {showDetail && (
              <div className="absolute top-0 right-0 z-50 h-[100%] inset-y-0 w-64 bg-white p-4 sidenave_aleade shadow-lg">
                <button
                  className="text-gray-600 hover:text-gray-900"
                  onClick={() => setShowDetail(null)}
                >
                  X
                </button>

                <div
                  id="sidebarSlider"
                  className="relative mt-4 w-56 h-56 bg-gray-100 rounded-lg"
                >
                  <button
                    onClick={handlePrev}
                    type="button"
                    id="prevSidebarImage"
                    className="absolute z-10 left-0 top-1/2 transform -translate-y-1/2 bg-white p-1 shadow-md prevSidebarImage"
                  >
                    <i className="fa fa-arrow-circle-o-left text-blue-600"></i>
                  </button>

                  <button
                    onClick={handlePrev}
                    type="button"
                    id="prevSidebarImage"
                    className="absolute z-10 left-0 top-1/2 transform -translate-y-1/2 bg-white p-1 shadow-md prevSidebarImage hidden"
                  >
                    <i className="fa fa-arrow-circle-o-left text-blue-600"></i>
                  </button>
                  <img
                    id="sidebarSliderImage"
                    className="absolute z-1 inset-0 m-auto max-w-full max-h-full shadow-md object-contain object-center"
                    src={showDetail.full_path}
                  />
                  <button
                    onClick={handleNext}
                    type="button"
                    id="nextSidebarImage"
                    className="absolute z-10 right-0 top-1/2 transform -translate-y-1/2 bg-white p-1 shadow-md nextSidebarImage"
                  >
                    <i className="fa fa-arrow-circle-o-right text-blue-600"></i>
                  </button>
                  <button
                    onClick={handleNext}
                    type="button"
                    id="nextSidebarImage"
                    className="absolute z-10 right-0 top-1/2 transform -translate-y-1/2 bg-white p-1 shadow-md nextSidebarImage hidden"
                  >
                    <i className="fa fa-arrow-circle-o-right text-blue-600"></i>
                  </button>
                </div>

                <div id="imageDetails" className="image-details mt-2">
                  <p>
                    <strong>Image Name: </strong>
                    <span className="text-gray-700 font-thin text-xs">
                      {showDetail.alt}
                    </span>
                  </p>
                  <p>
                    <strong>Size: </strong>
                    <span className="text-gray-700 font-thin text-xs">{`${showDetail.size} KB`}</span>
                  </p>
                  <p>
                    <strong>Upload Time: </strong>
                    <span className="text-gray-700 font-thin text-xs">
                      {dayjs(showDetail.created_at).format(
                        "MMMM D, YYYY h:mm A"
                      )}
                    </span>
                  </p>
                </div>
              </div>
            )}
            {/* <!-- Sidebar Image View --> */}
            {/* <!-- Modal footer --> */}
            <div className="flex items-center p-4 md:p-5 border-t border-gray-200 rounded-b dark:border-gray-600 justify-end gap-2">
              <button
                className="py-2.5 px-5  text-sm font-medium text-[#303030] focus:outline-none bg-white rounded-lg border border-[#00000036] hover:bg-gray-100 hover:text-[#303030] focus:z-10 focus:ring-4 focus:ring-gray-100"
                type="button"
                onClick={() => {
                  setOpen(false);
                  setSelectedMedia({ ...selectedMedia, data: [] });
                }}
              >
                Cancel
              </button>
              <button
                className={`text-white bg-[#303030] hover:bg-[#303030] focus:ring-4 focus:outline-none focus:ring-[#303030] font-medium rounded-lg text-sm px-5 py-2.5 text-center product_gallery ${
                  selectedMedia.multiple
                    ? !Array.isArray(selectedMedia.data) &&
                      selectedMedia.data?.length <= 0
                    : selectedMedia.data === null
                    ? "opacity-50 !cursor-not-allowed"
                    : "cursor-pointer"
                }`}
                disabled={
                  selectedMedia.multiple
                    ? !Array.isArray(selectedMedia.data) &&
                      selectedMedia.data?.length <= 0
                    : selectedMedia.data === null
                }
                type="button"
                onClick={() => setOpen(false)}
              >
                Done
              </button>
            </div>
          </div>
          {/* <!-- Modal content --> */}
        </div>
      </div>
    </>
  );
};

export const MediaItem = ({ showDetail, item }) => {
  const { layout, selectedMedia, setSelectedMedia } = useMedia();
  const handleChange = (e) => {
    const id = Number(e.target.value);

    setSelectedMedia((prev) => {
      if (prev.multiple) {
        const prevData = Array.isArray(prev.data) ? prev.data : [];
        const isSelected = prevData.includes(id);
        const updatedData = isSelected
          ? prevData.filter((item) => item !== id)
          : [...prevData, id];

        return { ...prev, data: updatedData };
      } else {
        return { ...prev, data: id };
      }
    });
  };

  return layout === "grid" ? (
    <label
      htmlFor={item.id}
      className="gallery-item flex items-center gap-3 p-2 w-24 h-24 rounded-md bg-gray-100 relative"
    >
      <Checkbox
        checked={
          selectedMedia.multiple
            ? Array.isArray(selectedMedia.data) &&
              selectedMedia.data.includes(item.id)
            : selectedMedia.data === item.id
        }
        onChange={handleChange}
        type={selectedMedia.multiple ? "checkbox" : "radio"}
        id={item.id}
        value={item.id}
        name={"media"}
        wrapperClass={"absolute top-2 z-10 left-2 w-4 h-4"}
      />
      <img
        src={item.full_path}
        alt={item.alt}
        title={item.alt}
        className="absolute inset-0 m-auto z-1 max-w-full max-h-full rounded-md shadow-md object-contain object-center"
      />
      <button
        onClick={showDetail}
        data-image="{{ asset($item->name) }}"
        data-size="{{ $item->size }}"
        data-name="{{ $item->name }}"
        data-date="{{ $item->created_at }}"
        className="absolute z-10 view-icon already_added bg-white p-1 rounded-full shadow-md cursor-pointer ml-auto bottom-2 right-2"
      >
        <i className="fa fa-eye"></i>
      </button>
    </label>
  ) : (
    <div className="gallery-item flex items-center gap-3 p-2 w-24 h-24 rounded-md bg-gray-100 relative">
      <Checkbox
        checked={
          selectedMedia.multiple
            ? Array.isArray(selectedMedia.data) &&
              selectedMedia.data.includes(item.id)
            : selectedMedia.data === item.id
        }
        onChange={handleChange}
        type={selectedMedia.multiple ? "checkbox" : "radio"}
        id={item.id}
        value={item.id}
        name={"media"}
        wrapperClass={"absolute top-2 z-10 left-2 w-4 h-4"}
      />
      <img
        src={item.full_path}
        alt={item.alt}
        title={item.alt}
        className="absolute inset-0 m-auto z-1 max-w-full max-h-full rounded-md shadow-md object-contain object-center"
      />
      <button
        onClick={showDetail}
        data-image="{{ asset($item->name) }}"
        data-size="{{ $item->size }}"
        data-name="{{ $item->name }}"
        data-date="{{ $item->created_at }}"
        className="absolute z-10 view-icon already_added bg-white p-1 rounded-full shadow-md cursor-pointer ml-auto bottom-2 right-2"
      >
        <i className="fa fa-eye"></i>
      </button>
    </div>
  );
};
