"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import ThemeToggler from "./ThemeToggler";
import menuData from "./menuData";

const Header = () => {
  const [navigationOpen, setNavigationOpen] = useState(false);
  const [dropdownToggler, setDropdownToggler] = useState(false);
  const [stickyMenu, setStickyMenu] = useState(false);

  const pathUrl = usePathname();
 console.log(pathUrl);
 const isHomePage = pathUrl === "/";
  // Sticky menu
  const handleStickyMenu = () => {
    if (window.scrollY >= 80) {
      setStickyMenu(true);
    } else {
      setStickyMenu(false);
    }
  };
  const closeNavigation = () => {
    setNavigationOpen(false);
  };
  useEffect(() => {
    window.addEventListener("scroll", handleStickyMenu);
  });
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const updateMedia = () => {
      setIsDesktop(window.innerWidth >= 768); // 768px and above for desktop
    };
    updateMedia();
    window.addEventListener("resize", updateMedia);
    return () => window.removeEventListener("resize", updateMedia);
  }, []);
  return (
    <header
    className={` left-0 top-5 z-99999 md:pt-6 w-full ${
      stickyMenu
        ? "bg-white !py-4 shadow transition duration-100 dark:bg-black"
        : ""
    } ${isHomePage ? "md:absolute my-1" : "mt-2"}`}
  >
      {/* <div className="relative mx-auto max-w-[89%]  border-t border-b border-white border-solid items-center justify-between px-4 md:px-8 xl:flex 2xl:px-0"> */}
       <div className={`relative mx-auto md:max-w-[89%]  border-t border-b  border-solid items-center justify-between px-4 md:px-8 xl:flex 2xl:px-0 

      ${isHomePage && isDesktop ? "border-white" : "border-[#000000]"}` }
  >
        <div className="flex w-full items-center justify-between xl:w-1/4">
          <a href="/" onClick={closeNavigation} >
            <Image
              // src="/1 1.png"
              src={
                 isHomePage && isDesktop ? "/1 1.png" : "/logo.png"
              }
              alt="logo"
              width={50.03}
              height={30}
              className="md:m-0 m-1.5"
            />
            
          </a>

          {/* <!-- Hamburger Toggle BTN --> */}
          <button
            aria-label="hamburger Toggler"
            className="block xl:hidden"
            onClick={() => setNavigationOpen(!navigationOpen)}
          >
            <span className="relative block h-5.5 w-5.5 cursor-pointer">
              <span className="absolute right-0 block h-full w-full">
                <span
                  className={`relative left-0 top-0 my-1 block h-0.5 rounded-sm bg-black delay-[0] duration-200 ease-in-out dark:bg-white ${
                    !navigationOpen ? "!w-full delay-300" : "w-0"
                  }`}
                ></span>
                <span
                  className={`relative left-0 top-0 my-1 block h-0.5 rounded-sm bg-black delay-150 duration-200 ease-in-out dark:bg-white ${
                    !navigationOpen ? "delay-400 !w-full" : "w-0"
                  }`}
                ></span>
                <span
                  className={`relative left-0 top-0 my-1 block h-0.5 rounded-sm bg-black delay-200 duration-200 ease-in-out dark:bg-white ${
                    !navigationOpen ? "!w-full delay-500" : "w-0"
                  }`}
                ></span>
              </span>
              <span className="du-block absolute right-0 h-full w-full rotate-45">
                <span
                  className={`absolute left-2.5 top-0 block h-full w-0.5 rounded-sm bg-black delay-300 duration-200 ease-in-out dark:bg-white ${
                    !navigationOpen ? "!h-0 delay-[0]" : "h-full"
                  }`}
                ></span>
                <span
                  className={`delay-400 absolute left-0 top-2.5 block h-0.5 w-full rounded-sm bg-black duration-200 ease-in-out dark:bg-white ${
                    !navigationOpen ? "!h-0 delay-200" : "h-0.5"
                  }`}
                ></span>
              </span>
            </span>
          </button>
          {/* <!-- Hamburger Toggle BTN --> */}
        </div>

        {/* Nav Menu Start   */}
        <div
          className={`invisible h-0 w-full  items-center justify-between xl:visible xl:flex xl:h-auto xl:w-full ${
            navigationOpen &&
            "navbar !visible mt-4 h-auto max-h-[400px] rounded-md bg-white p-7.5 shadow-solid-5 dark:bg-blacksection xl:h-auto xl:p-0 xl:shadow-none xl:dark:bg-transparent"
          } ${isDesktop  ? "" : "absolute left-0 z-[999]"}`}
        >
          <nav>
          <ul
  className={`flex flex-col gap-5 xl:flex-row xl:items-center xl:gap-10 ${
    isHomePage ? "md:text-white text-[#000000]" : "text-[#000000]  "
  } `}
>
              {menuData.map((menuItem, key) => (
               <li 
               key={key} 
               className={`${menuItem.submenu ? "group relative " : ""} ${pathUrl === menuItem.path ? "border-b-4 border-solid !border-b-4 !border-solid border-[#A1CF5F] !border-[#A1CF5F]" : ""}`}
             >
                  {menuItem.submenu ? (
                    <>
                      <button
                        onClick={() => setDropdownToggler(!dropdownToggler)}
                        className="flex cursor-pointer items-center justify-between gap-3 hover:text-primary"
                      >
                        {menuItem.title}
                        <span>
                          <svg
                            className="h-3 w-3 cursor-pointer fill: white fill-waterloo"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 512 512"
                          >
                            <path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z" />
                          </svg>
                        </span>
                      </button>

                      <ul
                        className={`dropdown ${dropdownToggler ? "flex z-99999" : ""}`}
                      >
                        {menuItem.submenu.map((item, key) => (
                          <li key={key} className="text-[#000000] ">
                            <Link href={item.path || "#"} onClick={closeNavigation}>{item.title}</Link>
                          </li>
                        ))}
                      </ul>
                    </>
                  ) : (
                    <Link
                      href={`${menuItem.path}`}
                      className={
                        pathUrl === menuItem.path
                          ? " "
                          : ""
                      } onClick={closeNavigation}
                    >
                      {menuItem.title}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex md:gap-[10px] md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
          <div className="px-4  md:flex md:items-center md:justify-between">
            <div className="md:flex mt-4 sm:justify-center md:mt-0 space-x-5 rtl:space-x-reverse  hidden ">
              <a href="#" className={` text-gray-400 hover:text-gray-900 dark:hover:text-white  border border-black rounded-[52px] px-[13px] py-[9px] ${isHomePage ? "border-white" : "border-black"} `} onClick={closeNavigation}>
              {/* <img src="/24.png" className="" alt="Flowbite Logo" /> */}
                <span className="sr-only">Facebook page</span>
                <svg width="10" height="18" viewBox="0 0 10 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8.78609 9.33674H6.20974V17.5634H2.39045V9.33674H0.573242V6.11862H2.39045V4.03562C2.39045 2.54554 3.10239 0.212891 6.24514 0.212891L9.07716 0.224593V3.34909H7.02395C6.68568 3.34909 6.21368 3.51682 6.21368 4.22676V6.12252H9.12436L8.79003 9.34064L8.78609 9.33674Z" fill={
    isHomePage ? "white" : "#000000"
  } />
</svg>

              </a>

              {/* LinkedIn Icon */}
              <a href="#" className={`text-blue-700 hover:text-blue-900 border   !ml-[5px] rounded-[52px] px-[10px] py-[9px] ${isHomePage ? "border-white" : "border-black"}` } onClick={closeNavigation}>
              <svg width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M16.0087 9.34546V14.9586H12.7283V9.71993C12.7283 8.40538 12.2563 7.5082 11.0645 7.5082C10.1559 7.5082 9.61704 8.11282 9.38104 8.69793C9.2945 8.90857 9.2709 9.19723 9.2709 9.48979V14.9586H5.98655C5.98655 14.9586 6.02981 6.08833 5.98655 5.16776H9.2709V6.55642C9.2709 6.55642 9.25517 6.57983 9.2473 6.58763H9.2709V6.55642C9.70751 5.88939 10.4863 4.93761 12.2288 4.93761C14.3882 4.93761 16.0087 6.33798 16.0087 9.34156V9.34546ZM0.892853 14.9586H4.17327V5.16776H0.892853V14.9586ZM4.27161 1.84822C4.27161 2.7727 3.51639 3.52554 2.58026 3.52554C1.64412 3.52554 0.888916 2.7766 0.888916 1.84822C0.888916 0.919842 1.64412 0.170898 2.58026 0.170898C3.51639 0.170898 4.27161 0.919842 4.27161 1.84822Z" fill={
    isHomePage ? "white" : "#000000"
  }/>
</svg>

              </a>

              <a href="#" className={`text-pink-500 hover:text-pink-700 border  !ml-[5px] rounded-[52px] px-[10px] py-[9px]  ${isHomePage ? "border-white" : "border-black"}` }  onClick={closeNavigation}>
              <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="17" height="16" viewBox="0 0 56.7 56.7" fill={
    isHomePage ? "white " : "#000000"
  }>
  <g>
    <path d="M28.2,16.7c-7,0-12.8,5.7-12.8,12.8s5.7,12.8,12.8,12.8S41,36.5,41,29.5S35.2,16.7,28.2,16.7z M28.2,37.7
      c-4.5,0-8.2-3.7-8.2-8.2s3.7-8.2,8.2-8.2s8.2,3.7,8.2,8.2S32.7,37.7,28.2,37.7z"/>
    <circle cx="41.5" cy="16.4" r="2.9"/>
    <path d="M49,8.9c-2.6-2.7-6.3-4.1-10.5-4.1H17.9c-8.7,0-14.5,5.8-14.5,14.5v20.5c0,4.3,1.4,8,4.2,10.7c2.7,2.6,6.3,3.9,10.4,3.9
      h20.4c4.3,0,7.9-1.4,10.5-3.9c2.7-2.6,4.1-6.3,4.1-10.6V19.3C53,15.1,51.6,11.5,49,8.9z M48.6,39.9c0,3.1-1.1,5.6-2.9,7.3
      s-4.3,2.6-7.3,2.6H18c-3,0-5.5-0.9-7.3-2.6C8.9,45.4,8,42.9,8,39.8V19.3c0-3,0.9-5.5,2.7-7.3c1.7-1.7,4.3-2.6,7.3-2.6h20.6
      c3,0,5.5,0.9,7.3,2.7c1.7,1.8,2.7,4.3,2.7,7.2V39.9L48.6,39.9z"/>
  </g>
</svg>





              </a>
            </div>
          </div>
         {pathUrl === '/book' ? <button type="button" className= "text-[#000000] border-black  border border-solid   bg-[#A1CF5F]  font-medium rounded-lg text-sm m-[14px] px-2 text-center ">
         <a href="/book"> Book</a>  
          </button>

          :
<button type="button" className={ isHomePage ? "md:text-white text-black md:border-white border-black  border border-solid  bg-white-700   font-medium rounded-lg text-sm m-[14px] px-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" :  "text-[#000000] border-black  border border-solid    focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm m-[14px] px-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" }>
<a href="/book"> Book</a>
          </button>
}

{pathUrl === '/book' ?  <button type="button" className=" md:text-black text-black bg-[white] m-[13px] border border-solid border-black  focus:ring-4  font-medium rounded-lg text-sm px-4 py-2 text-center dark:focus:ring-[#A1CF5F]/70">
            Donate Now
          </button>

          :
 <button type="button" className="  m-[13px] text-[#000000] bg-[#A1CF5F]  focus:ring-4 focus:outline-none focus:ring-[#A1CF5F]/50 font-medium rounded-lg text-sm px-4 py-2 text-center ">
            Donate Now
          </button>
}

         
          </div>
        </div>
      </div>
    </header>
  );
};

// w-full delay-300

export default Header;
