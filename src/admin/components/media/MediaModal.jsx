import React, { useEffect, useState } from "react";
import dayjs from "dayjs";
import useFetch from "@/admin/hooks/useFetch";
import { sortByColumn } from "@/utils/utilities";
import Loader from "../Loader";
import Input from "../Input";
import Dropdown from "../Dropdown";
import Checkbox from "../Checkbox";
import DropZone from "../DropZone";
import MediaItem from "./MediaItem";

const MediaModal = ({ isOpen, setOpen, data, setData, layout, setLayout, selectedMedia, setSelectedMedia, ...props }) => {
    const [showDetail, setShowDetail] = useState(null);
    const [search, setSearch] = useState("");
    const {data: mediaData, loading} = useFetch(`/admin/media`);
    useEffect(() => {
        setData(mediaData);
    }, [mediaData]);
    console.log(data);
    // const [] = useState();

    // Filter when search changes
    useEffect(() => {
      if (search.trim()) {
        const filtered = mediaData?.filter(item => 
          (item.file?.toLowerCase().includes(search.toLowerCase()) ||
          item.alt?.toLowerCase().includes(search.toLowerCase()))
        );
        setData(filtered);
      } else {
        setData(mediaData || []);
      }
    }, [search, mediaData]);
    const handleNext = () => {
      const currentIndex = data?.findIndex(item => item.id === showDetail.id);
      if (currentIndex < data.length - 1) {
        setShowDetail(data[currentIndex + 1]);
      }
    };

    const handlePrev = () => {
      const currentIndex = data?.findIndex(item => item.id === showDetail.id);
      if (currentIndex > 0) {
        setShowDetail(data[currentIndex - 1]);
      }
    };
    const handleSort = (column, order = "asc") => {
      setData(sortByColumn(data, column, order));
    };
    console.log(selectedMedia.multiple, 'selectedMedia.multiple');
    
  return (<>
    <div className={`${isOpen ? '' : 'hidden '}overflow-y-auto fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 w-full max-w-[60%]`}>
      <div className="relative p-4 w-full max-h-full">
        {/* <!-- Modal content --> */}
        <div className="relative bg-white rounded-lg shadow-sm">
          {/* <!-- Modal header --> */}
          <div className="flex items-center justify-between px-4 py-1 md:p-5 border-b rounded-t border-gray-200 bg-gray-100 h-[53px]">
            <h3 className="text-sm font-semibold text-[#303030]">Select image</h3>
            <button data-modal-hide="large-modal1" type="button" onClick={() => setOpen(false)}
              className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-600 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center"
            >
              <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
              </svg>
              <span className="sr-only">Close modal</span>
            </button>
          </div>
          {/* <!-- Modal body --> */}
          <div className={`p-4 md:p-5 space-y-4 relative main-modal-body-1 w-full ${showDetail ? '!w-[calc(100%-16rem)]' : 'w-full'}`}>
            {loading && <Loader /> }
            <div className="modal-body-header flex justify-between items-center w-[100%]">
              <div className="max-w-full">
                <Input prefix={'fa fa-search'} placeholder={'Search files'} value={search} onChange={(e) => setSearch(e.target.value)} />
                {/* <!-- No results message (Hidden by default) --> */}
                <p id="noResults" className="hidden text-red-500 text-sm mt-2">
                  No results found
                </p>
              </div>
              <div className="right-side-button flex gap-3 items-center">
                <Dropdown btnText={<><i className="fa fa-exchange mr-1 rotate-90"></i>Sort</>}
                    btnClass={'text-[#303030] add-image-button bg-[transparent] hover:bg-[#3030303] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center'}
                    itemsWrapperClass={'z-20 bg-white divide-y divide-gray-100 rounded-lg shadow-sm max-w-[250px] w-[250px]'}
                >
                    <ul className="py-3 px-3 text-[11px] text-gray-700 dark:text-gray-200 w-[100%] flex flex-col gap-2">
                      <li><Checkbox id={'newest'} type="radio" name={'sort'} label={'Date added (newest first)'} onChange={() => handleSort('created_at', 'desc')} /></li>
                      <li><Checkbox id={'oldest'} type="radio" name={'sort'} label={'Date added (oldest first)'} onChange={() => handleSort('created_at', 'asc')} /></li>
                      <li><Checkbox id={'smallest'} type="radio" name={'sort'} label={'File size (smallest first)'} onChange={() => handleSort('size', 'asc')} /></li>
                      <li><Checkbox id={'largest'} type="radio" name={'sort'} label={'File size (largest first)'} onChange={() => handleSort('size', 'desc')} /></li>
                    </ul>
                </Dropdown>
                <Dropdown
                    btnText={
                        <>
                            <span id="selectedIcon" className="w-4 h-4 mr-1">
                                <i className={`fa ${layout === 'grid' ? 'fa-th-large' : 'fa-th-list'}`}></i>
                            </span>
                            <i className="fa fa-chevron-down w-2.5 h-2.5 ms-3"></i>
                        </>
                    }
                    btnClass={'text-[#303030] add-image-button bg-[transparent] hover:bg-[#3030303] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center'}
                    itemsWrapperClass={"z-10 bg-white divide-y divide-gray-100 rounded-lg shadow-sm w-[130px]"}
                >
                    <ul className="py-3 px-3 text-[11px] text-gray-700 dark:text-gray-200 w-[100%] flex flex-col gap-2">
                        <li className="text-[13px] font-[500] text-[#303030] flex cursor-pointer">
                            <button className="flex cursor-pointer" onClick={() => setLayout('grid')}>
                                <span className="w-4 h-4 mr-1"><i className="fa fa-th-large"></i></span> Grid View
                            </button>
                        </li>
                        <li className="text-[13px] font-[500] text-[#303030] flex cursor-pointer">
                            <button className="flex cursor-pointer" onClick={() => setLayout('list')}>
                                <span className="w-4 h-4 mr-1"><i className="fa fa-list"></i></span> List View
                            </button>
                        </li>
                    </ul>
                </Dropdown>
              </div>
            </div>
            <div className="main-modal-body w-[100%]">
              <div className="main-upper-buttons"></div>
              <div className="main-image-uploader mt-2">
              <DropZone onChange={(files) => {console.log("file", files); setData((prevData) => [...files, ...prevData]);}} />

                {/* <!-- List and Grid View --> */}
                <div className="mt-4">
                  <div id="preview" className="flex flex-wrap gap-[20px]"></div>
                </div>
                {/* <!-- List and Grid View --> */}
                {/* <!-- Container to store all uploaded images --> */}

                {/* <!-- Container to store all uploaded images --> */}
                <div id="imageGalleryContainer" className="mt-4 flex flex-wrap gap-3 border-t pt-4 overflow-y-auto max-h-[400px]">
                  {/* <!-- Dummy Gallery Images --> */}
                  {data && data.length > 0 ? 
                    data.map((item, index) => 
                    <MediaItem key={index} showDetail={() => setShowDetail(item)} item={item} layout={layout} selectedMedia={selectedMedia} setSelectedMedia={setSelectedMedia} />
                    ) : ''}
                </div>

                {/* <!-- Container to store all uploaded images --> */}
              </div>
            </div>
          </div>

          {/* <!-- Sidebar Image View --> */}
          {showDetail && (
            <div className="absolute top-0 right-0 z-50 h-[100%] inset-y-0 w-64 bg-white p-4 sidenave_aleade shadow-lg">
            <button className="text-gray-600 hover:text-gray-900" onClick={() => setShowDetail(null)}>X</button>

            <div id="sidebarSlider" className="relative mt-4 w-56 h-56 bg-gray-100 rounded-lg">
              <button onClick={handlePrev}
                type="button"
                id="prevSidebarImage"
                className="absolute z-10 left-0 top-1/2 transform -translate-y-1/2 bg-white p-1 shadow-md prevSidebarImage"
              >
                <i className="fa fa-arrow-circle-o-left text-blue-600"></i>
              </button>

              <button onClick={handlePrev}
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
              <button onClick={handleNext}
                type="button"
                id="nextSidebarImage"
                className="absolute z-10 right-0 top-1/2 transform -translate-y-1/2 bg-white p-1 shadow-md nextSidebarImage"
              >
                <i className="fa fa-arrow-circle-o-right text-blue-600"></i>
              </button>
              <button onClick={handleNext}
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
                <span className="text-gray-700 font-thin text-xs">{showDetail.alt}</span>
              </p>
              <p>
                <strong>Size: </strong>
                <span className="text-gray-700 font-thin text-xs">{`${showDetail.size} KB`}</span>
              </p>
              <p>
                <strong>Upload Time: </strong>
                <span className="text-gray-700 font-thin text-xs">{dayjs(showDetail.created_at).format('MMMM D, YYYY h:mm A')}</span>
              </p>
            </div>
          </div>
          )}
          {/* <!-- Sidebar Image View --> */}
          {/* <!-- Modal footer --> */}
          <div className="flex items-center p-4 md:p-5 border-t border-gray-200 rounded-b dark:border-gray-600 justify-end gap-2">
            <button className="py-2.5 px-5  text-sm font-medium text-[#303030] focus:outline-none bg-white rounded-lg border border-[#00000036] hover:bg-gray-100 hover:text-[#303030] focus:z-10 focus:ring-4 focus:ring-gray-100" type="button" onClick={() => {setOpen(false); setSelectedMedia({...selectedMedia, data: []})}}>
              Cancel
            </button>
            <button className={`text-white bg-[#303030] hover:bg-[#303030] focus:ring-4 focus:outline-none focus:ring-[#303030] font-medium rounded-lg text-sm px-5 py-2.5 text-center product_gallery ${selectedMedia.multiple ? !Array.isArray(selectedMedia.data) && selectedMedia.data?.length <= 0 : selectedMedia.data === null ? 'opacity-50 !cursor-not-allowed' : 'cursor-pointer'}`}
              disabled={selectedMedia.multiple ? !Array.isArray(selectedMedia.data) && selectedMedia.data?.length <= 0 : selectedMedia.data === null} type="button" onClick={() => setOpen(false)}>
              Done
            </button>
          </div>
        </div>
        {/* <!-- Modal content --> */}
      </div>
    </div>
  </>);
};

export default MediaModal;
