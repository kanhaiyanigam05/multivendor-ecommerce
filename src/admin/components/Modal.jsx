import React from "react";

const Modal = ({ children, show, onHide, title = "Modal Title" }) => {
  return (
    <div className={`${show ? "block" : "hidden"} fixed inset-0 p-4 flex flex-wrap justify-center items-center w-full h-full z-[1000] before:fixed before:inset-0 before:w-full before:h-full before:bg-[rgba(0,0,0,0.5)] overflow-auto`} onClick={(e) => {e.target === e.currentTarget && onHide()}}>
      <div className="relative p-4 w-full max-w-2xl max-h-full">
        {/* <!-- Modal content --> */}
        <div className="relative bg-white rounded-lg shadow-sm">
          {/* <!-- Modal header --> */}
          <div className="flex items-center justify-between px-4 py-1 md:p-5 border-b rounded-t-lg border-gray-200 bg-[#f3f3f3] h-[53px]">
            <h3 className="text-sm font-semibold text-[#303030]">{title}</h3>
            <button onClick={onHide}
              type="button"
              className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-600 rounded-lg text-sm w-6 h-6 ms-auto inline-flex justify-center items-center"
              data-modal-hide="static-modal"
            >
              <svg
                className="w-2.5 h-2.5"
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
          {children}
        </div>
      </div>
    </div>
  );
};

export default Modal;
