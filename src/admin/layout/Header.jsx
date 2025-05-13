import React from "react";

const Header = ({ toggleSidebar }) => {
  return (
    <header
            className="flex shadow-md py-4 px-4 sm:px-10 bg-[#1a1a1a] font-[sans-serif] min-h-[56px] h-[56px] tracking-wide relative z-[999] items-center">
            <div className="flex flex-wrap items-center justify-between w-full">

                {/* <!-- Logo --> */}
                <a href="javascript:void(0)" className="hidden sm:block">
                    <img src="{{ asset('adminhtml/images/icl-logo.webp') }}" alt="logo" className="w-36" />
                </a>
                <a href="javascript:void(0)" className="sm:hidden">
                    <img src="{{ asset('adminhtml/images/icl-logo.webp') }}" alt="logo" className="w-9" />
                </a>

                {/* <!-- Navigation --> */}
                <div id="collapseMenu" className="hidden lg:flex items-center space-x-6 navigation-search-bar">
                    <div
                        className="relative flex items-center w-[648px] max-w-full h-[36px] bg-[#303030] px-3 py-2 rounded-lg border-[1.2px] border-[#525252] focus-within:border-[#525252] focus-within:bg-[#303030] transition-all">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 192.904 192.904" width="16px"
                            className="cursor-pointer fill-gray-400">
                            <path
                                d="M190.707 180.101l-47.078-47.077c11.702-14.072 18.752-32.142 18.752-51.831C162.381 36.423 125.959 0 81.191 0 36.422 0 0 36.423 0 81.193c0 44.767 36.422 81.187 81.191 81.187 19.688 0 37.759-7.049 51.831-18.751l47.079 47.078a7.474 7.474 0 005.303 2.197 7.498 7.498 0 005.303-12.803zM15 81.193C15 44.694 44.693 15 81.191 15c36.497 0 66.189 29.694 66.189 66.193 0 36.496-29.692 66.187-66.189 66.187C44.693 147.38 15 117.689 15 81.193z">
                            </path>
                        </svg>
                        <input type="text" placeholder="Search"
                            className="w-full text-[12px] bg-transparent rounded outline-none px-2 text-[#b5b5b5] text-[13px]" />
                        <div className="flex items-center gap-2">
                            <button type="button"
                                className="openModalBtn text-[11px] font-medium text-[#E3E3E3] bg-[#303030] px-1 py-[5px] rounded-md hover:bg-[#303030] border-[1.2px] border-[#525252]">
                                CTRL
                            </button>

                            <button type="button"
                                className="openModalBtn text-[11px] font-medium text-[#E3E3E3] bg-[#303030] px-2 py-[5px] rounded-md hover:bg-[#303030] border-[1.2px] border-[#525252]">
                                K
                            </button>
                        </div>


                    </div>
                </div>

                {/* <!-- Icons Section --> */}
                <div className="flex items-center space-x-4">
                    {/* <!-- Toggle Button --> */}
                    <button type="button" id="toggleButton"
                        className="px-[6px] py-[6px] flex items-center justify-center rounded-md text-white border-none outline-none bg-transparent hover:bg-[#303030] focus-outline-none focus-border-[#525252] transition-all focus-within:shadow-[0px_2px_5px_-1px_rgba(50,50,93,0.25),0px_1px_3px_-1px_rgba(0,0,0,0.3)]">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18px" className="cursor-pointer fill-[#fff]"
                            viewBox="0 0 512 512">
                            <path
                                d="M337.711 241.3a16 16 0 0 0-11.461 3.988c-18.739 16.561-43.688 25.682-70.25 25.682s-51.511-9.121-70.25-25.683a16.007 16.007 0 0 0-11.461-3.988c-78.926 4.274-140.752 63.672-140.752 135.224v107.152C33.537 499.293 46.9 512 63.332 512h385.336c16.429 0 29.8-12.707 29.8-28.325V376.523c-.005-71.552-61.831-130.95-140.757-135.223zM446.463 480H65.537V376.523c0-52.739 45.359-96.888 104.351-102.8C193.75 292.63 224.055 302.97 256 302.97s62.25-10.34 86.112-29.245c58.992 5.91 104.351 50.059 104.351 102.8zM256 234.375a117.188 117.188 0 1 0-117.188-117.187A117.32 117.32 0 0 0 256 234.375zM256 32a85.188 85.188 0 1 1-85.188 85.188A85.284 85.284 0 0 1 256 32z">
                            </path>
                        </svg>
                    </button>
                    {/* <!-- Notifications --> */}
                    <div className="relative font-[sans-serif] w-max mx-auto">
                        <button type="button" id="notificationsToggle"
                            className="px-[6px] py-[6px] flex items-center justify-center rounded-md text-white border-none outline-none bg-transparent hover:bg-[#303030] focus-outline-none focus-border-[#525252] transition-all focus-within:shadow-[0px_2px_5px_-1px_rgba(50,50,93,0.25),0px_1px_3px_-1px_rgba(0,0,0,0.3)]">
                            <svg xmlns="http://www.w3.org/2000/svg" width="18px" className="cursor-pointer fill-[#fff]"
                                viewBox="0 0 371.263 371.263">
                                <path
                                    d="M305.402 234.794v-70.54c0-52.396-33.533-98.085-79.702-115.151.539-2.695.838-5.449.838-8.204C226.539 18.324 208.215 0 185.64 0s-40.899 18.324-40.899 40.899c0 2.695.299 5.389.778 7.964-15.868 5.629-30.539 14.551-43.054 26.647-23.593 22.755-36.587 53.354-36.587 86.169v73.115c0 2.575-2.096 4.731-4.731 4.731-22.096 0-40.959 16.647-42.995 37.845-1.138 11.797 2.755 23.533 10.719 32.276 7.904 8.683 19.222 13.713 31.018 13.713h72.217c2.994 26.887 25.869 47.905 53.534 47.905s50.54-21.018 53.534-47.905h72.217c11.797 0 23.114-5.03 31.018-13.713 7.904-8.743 11.797-20.479 10.719-32.276-2.036-21.198-20.958-37.845-42.995-37.845a4.704 4.704 0 0 1-4.731-4.731zM185.64 23.952c9.341 0 16.946 7.605 16.946 16.946 0 .778-.12 1.497-.24 2.275-4.072-.599-8.204-1.018-12.336-1.138-7.126-.24-14.132.24-21.078 1.198-.12-.778-.24-1.497-.24-2.275.002-9.401 7.607-17.006 16.948-17.006zm0 323.358c-14.431 0-26.527-10.3-29.342-23.952h58.683c-2.813 13.653-14.909 23.952-29.341 23.952zm143.655-67.665c.479 5.15-1.138 10.12-4.551 13.892-3.533 3.773-8.204 5.868-13.353 5.868H59.89c-5.15 0-9.82-2.096-13.294-5.868-3.473-3.772-5.09-8.743-4.611-13.892.838-9.042 9.282-16.168 19.162-16.168 15.809 0 28.683-12.874 28.683-28.683v-73.115c0-26.228 10.419-50.719 29.282-68.923 18.024-17.425 41.498-26.887 66.528-26.887 1.198 0 2.335 0 3.533.06 50.839 1.796 92.277 45.929 92.277 98.325v70.54c0 15.809 12.874 28.683 28.683 28.683 9.88 0 18.264 7.126 19.162 16.168z"
                                    data-original="#000000"></path>
                            </svg>
                        </button>
                        <div id="notificationsMenu"
                            className='absolute hidden right-0 shadow-lg bg-white py-4 z-[1000] min-w-full rounded-lg w-[410px] max-h-[500px] overflow-auto mt-2'>
                            <div className="flex items-center justify-between px-4 mb-4">
                                <p className="text-xs text-blue-600 cursor-pointer">Clear all</p>
                                <p className="text-xs text-blue-600 cursor-pointer">Mark as read</p>
                            </div>

                            {/* <ul className="divide-y">
                                <li className='p-4 flex items-center hover:bg-gray-50 cursor-pointer'>
                                    <img src="https://readymadeui.com/profile_2.webp"
                                        className="w-12 h-12 rounded-full shrink-0" />

                                    <div className="ml-6">
                                        <h3 className="text-[12px] text-[#333] font-semibold">Your have a new message from Yin
                                        </h3>
                                        <p className="text-xs text-gray-500 mt-2">Hello there, check this new items in from
                                            the your may interested from
                                            the motion school.</p>
                                        <p className="text-xs text-blue-600 leading-3 mt-2">10 minutes ago</p>
                                    </div>
                                </li>

                                <li className='p-4 flex items-center hover:bg-gray-50 cursor-pointer'>
                                    <img src="https://readymadeui.com/team-2.webp"
                                        className="w-12 h-12 rounded-full shrink-0" />

                                    <div className="ml-6">
                                        <h3 className="text-[12px] text-[#333] font-semibold">Your have a new message from Haper
                                        </h3>
                                        <p className="text-xs text-gray-500 mt-2">Hello there, check this new items in from
                                            the your may interested from
                                            the motion school.</p>
                                        <p className="text-xs text-blue-600 leading-3 mt-2">2 hours ago</p>
                                    </div>
                                </li>

                                <li className='p-4 flex items-center hover:bg-gray-50 cursor-pointer'>
                                    <img src="https://readymadeui.com/team-3.webp"
                                        className="w-12 h-12 rounded-full shrink-0" />

                                    <div className="ml-6">
                                        <h3 className="text-[12px] text-[#333] font-semibold">Your have a new message from San
                                        </h3>
                                        <p className="text-xs text-gray-500 mt-2">Hello there, check this new items in from
                                            the your may interested from
                                            the motion school.</p>
                                        <p className="text-xs text-blue-600 leading-3 mt-2">1 day ago</p>
                                    </div>
                                </li>

                                <li className='p-4 flex items-center hover:bg-gray-50 cursor-pointer'>
                                    <img src="https://readymadeui.com/team-4.webp"
                                        className="w-12 h-12 rounded-full shrink-0" />

                                    <div className="ml-6">
                                        <h3 className="text-[12px] text-[#333] font-semibold">Your have a new message from Seeba
                                        </h3>
                                        <p className="text-xs text-gray-500 mt-2">Hello there, check this new items in from
                                            the your may interested from
                                            the motion school.</p>
                                        <p className="text-xs text-blue-600 leading-3 mt-2">30 minutes ago</p>
                                    </div>
                                </li>
                            </ul> */}
                            <p className="text-xs px-4 mt-6 mb-4 inline-block text-blue-600 cursor-pointer">View all
                                Notifications</p>
                        </div>
                    </div>
                    {/* <!-- Account --> */}
                    <div className="relative font-[sans-serif] w-max mx-auto">
                        <button type="button" id="accountToggle"
                            className="px-[6px] py-[6px] text-[12px] flex items-center justify-center rounded-md text-white border-none outline-none bg-transparent hover:bg-[#303030] focus-outline-none focus-border-[#525252] transition-all focus-within:shadow-[0px_2px_5px_-1px_rgba(50,50,93,0.25),0px_1px_3px_-1px_rgba(0,0,0,0.3)]">
                            {/* <img src="https://readymadeui.com/profile_6.webp" className="w-7 h-7 mr-3 rounded-full shrink-0"> */}
                            <span className=" bg-[#25e82be1] mx-1 py-1 px-1 text-[11px] rounded-md text-[#000]">MS</span>
                            My Store
                            {/* <svg xmlns="http://www.w3.org/2000/svg" className="w-3 fill-gray-400 inline ml-3" viewBox="0 0 24 24">
                                <path fillRule="evenodd"
                                    d="M11.99997 18.1669a2.38 2.38 0 0 1-1.68266-.69733l-9.52-9.52a2.38 2.38 0 1 1 3.36532-3.36532l7.83734 7.83734 7.83734-7.83734a2.38 2.38 0 1 1 3.36532 3.36532l-9.52 9.52a2.38 2.38 0 0 1-1.68266.69734z"
                                    clipRule="evenodd" data-original="#000000" />
                            </svg> */}
                        </button>

                        <ul id="accountMenu"
                            className=" absolute right-0 hidden shadow-lg bg-white py-2 z-[1000] min-w-full w-max rounded-lg max-h-96 overflow-auto">
                            <li
                                className="py-2.5 px-5 flex items-center hover:bg-gray-100 text-[#333] text-[12px] cursor-pointer">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-4 h-4 mr-3"
                                    viewBox="0 0 512 512">
                                    <path
                                        d="M337.711 241.3a16 16 0 0 0-11.461 3.988c-18.739 16.561-43.688 25.682-70.25 25.682s-51.511-9.121-70.25-25.683a16.007 16.007 0 0 0-11.461-3.988c-78.926 4.274-140.752 63.672-140.752 135.224v107.152C33.537 499.293 46.9 512 63.332 512h385.336c16.429 0 29.8-12.707 29.8-28.325V376.523c-.005-71.552-61.831-130.95-140.757-135.223zM446.463 480H65.537V376.523c0-52.739 45.359-96.888 104.351-102.8C193.75 292.63 224.055 302.97 256 302.97s62.25-10.34 86.112-29.245c58.992 5.91 104.351 50.059 104.351 102.8zM256 234.375a117.188 117.188 0 1 0-117.188-117.187A117.32 117.32 0 0 0 256 234.375zM256 32a85.188 85.188 0 1 1-85.188 85.188A85.284 85.284 0 0 1 256 32z"
                                        data-original="#000000"></path>
                                </svg>
                                View profile
                            </li>
                            <li
                                className="py-2.5 px-5 flex items-center hover:bg-gray-100 text-[#333] text-[12px] cursor-pointer">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-4 h-4 mr-3"
                                    viewBox="0 0 512 512">
                                    <path
                                        d="M197.332 170.668h-160C16.746 170.668 0 153.922 0 133.332v-96C0 16.746 16.746 0 37.332 0h160c20.59 0 37.336 16.746 37.336 37.332v96c0 20.59-16.746 37.336-37.336 37.336zM37.332 32A5.336 5.336 0 0 0 32 37.332v96a5.337 5.337 0 0 0 5.332 5.336h160a5.338 5.338 0 0 0 5.336-5.336v-96A5.337 5.337 0 0 0 197.332 32zm160 480h-160C16.746 512 0 495.254 0 474.668v-224c0-20.59 16.746-37.336 37.332-37.336h160c20.59 0 37.336 16.746 37.336 37.336v224c0 20.586-16.746 37.332-37.336 37.332zm-160-266.668A5.337 5.337 0 0 0 32 250.668v224A5.336 5.336 0 0 0 37.332 480h160a5.337 5.337 0 0 0 5.336-5.332v-224a5.338 5.338 0 0 0-5.336-5.336z"
                                        data-original="#000000"></path>
                                </svg>
                                Dashboard
                            </li>
                            <li
                                className="py-2.5 px-5 flex items-center hover:bg-gray-100 text-[#333] text-[12px] cursor-pointer">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-4 h-4 mr-3"
                                    viewBox="0 0 6.35 6.35">
                                    <path
                                        d="M3.172.53a.265.266 0 0 0-.262.268v2.127a.265.266 0 0 0 .53 0V.798A.265.266 0 0 0 3.172.53zm1.544.532a.265.266 0 0 0-.026 0 .265.266 0 0 0-.147.47c.459.391.749.973.749 1.626 0 1.18-.944 2.131-2.116 2.131A2.12 2.12 0 0 1 1.06 3.16c0-.65.286-1.228.74-1.62a.265.266 0 1 0-.344-.404A2.667 2.667 0 0 0 .53 3.158a2.66 2.66 0 0 0 2.647 2.663 2.657 2.657 0 0 0 2.645-2.663c0-.812-.363-1.542-.936-2.03a.265.266 0 0 0-.17-.066z"
                                        data-original="#000000"></path>
                                </svg>
                                Logout
                            </li>
                        </ul>
                    </div>

                    {/* <!-- Mobile Menu Button --> */}
                    <button id="toggleOpen" className="lg:hidden">
                        <svg className="w-7 h-7" fill="#fff" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd"
                                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                                clipRule="evenodd"></path>
                        </svg>
                    </button>
                </div>
            </div>
        </header>
  );
};

export default Header;
