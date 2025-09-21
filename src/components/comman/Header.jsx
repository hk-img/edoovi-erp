import React from "react";
import Link from "next/link";
import Image from "next/image";
import EdooviLogo from "../../../public/images/edooviLogo.webp";

const Header = () => {
  return (
    <>
      <header className="bg-white shadow-[0px_4px_4px_0px_#0000001F]  sticky top-0 z-50">
        <nav className="container mx-auto flex items-center justify-between xl:py-4 lg:py-3 py-4 px-4 lg:px-6 xl:px-8">
          {/* <!-- Mobile Menu Icon --> */}
          <div className="flex lg:hidden ">
            <label
              for="sideToggle"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="12"
                viewBox="0 0 18 12"
                fill="none"
              >
                <path
                  d="M0 12V10H12V12H0ZM0 7V5H18V7H0ZM0 2V0H18V2H0Z"
                  fill="#1C1B1F"
                />
              </svg>
            </label>
          </div>

          {/* <!-- Logo --> */}
          <div className="lg:flex hidden">
            <Link href="" className="-m-1.5 p-1.5">
              <Image
                className="xl:h-14 xl:w-52 lg:w-44 w-32 lg:h-10 h-8  object-contain aspect-[200/56]"
                fetchPriority="low"
                loading="lazy"
                src={EdooviLogo}
                width="200"
                height="56"
                alt="edoovi erp logo"
                title="edoovi erp logo"
              />
            </Link>
          </div>

          {/* <!-- Menu --> */}
          <div className="flex lg:flex-col lg:gap-x-8 xl:gap-y-7 gap-y-4  mr-0 lg:items-end items-center gap-x-2">
            <div className="flex gap-5 items-center">
              <div className="hidden lg:flex lg:gap-x-6 ml-auto mr-0">
                {/* <!-- Example Dropdown --> */}
                <div className="group/dd">
                  <Link
                    href=""
                    className="xl:text-base lg:text-base text-sm font-medium leading-6 text-[#1C1B1F] duration-200 capitalize hover:lg:text-black"
                    aria-expanded="false"
                  >
                    Home
                  </Link>
                </div>
                <div className="relative group/dd">
                  <Link
                    href={""}
                    className="xl:text-base lg:text-base text-sm font-medium leading-6 text-[#1C1B1F] duration-200 capitalize hover:lg:text-black"
                    aria-expanded="false"
                  >
                    Our Solutions
                  </Link>
                  {/* <!-- Dropdown --> */}
                  <div className="absolute left-0 max-w-fit lg:top-[40px] border-t-4 border-[#fff] z-10 overflow-hidden bg-[#00BBF5] rounded-lg p-8 backdrop-blur-lg transition ease-out duration-200 opacity-0 group-hover/dd:opacity-100 origin-top [transform:rotateX(90deg)] group-hover/dd:[transform:rotateX(0deg))]">
                    <div className="group/db  xl:gap-y-6 lg:gap-y-4 gap-y-5 relative flex flex-col items-center justify-start">
                      <Link
                        href=""
                        className="block text-sm font-medium duration-200 text-white"
                      >
                        About Us
                        <span className="absolute inset-0 z-[1]"></span>
                      </Link>
                      <Link
                        href=""
                        className="block text-sm font-medium duration-200 text-white"
                      >
                        About Us
                        <span className="absolute inset-0 z-[1]"></span>
                      </Link>
                      <Link
                        href=""
                        className="block text-sm font-medium duration-200 text-white"
                      >
                        About Us
                        <span className="absolute inset-0 z-[1]"></span>
                      </Link>
                      <Link
                        href=""
                        className="block text-sm font-medium duration-200 text-white"
                      >
                        About Us
                        <span className="absolute inset-0 z-[1]"></span>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="group/dd">
                  <Link
                    href=""
                    className="xl:text-base lg:text-base text-sm font-medium leading-6 text-[#1C1B1F] duration-200 capitalize hover:lg:text-black"
                    aria-expanded="false"
                  >
                    About Us
                  </Link>
                </div>
                <div className="group/dd">
                  <Link
                    href=""
                    className="xl:text-base lg:text-base text-sm font-medium leading-6 text-[#1C1B1F] duration-200 capitalize hover:lg:text-black"
                    aria-expanded="false"
                  >
                    Blogs
                  </Link>
                </div>
                <div className="group/dd">
                  <Link
                    href=""
                    className="xl:text-base lg:text-base text-sm font-medium leading-6 text-[#1C1B1F] duration-200 capitalize hover:lg:text-black"
                    aria-expanded="false"
                  >
                    Clients
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* buttons */}
          <div className="flex items-center justify-end gap-3">
            <button
              type="button"
              className="cursor-pointer rounded-full bg-[#00BBF5] text-sm text-white h-9 lg:flex hidden items-center justify-center px-4 py-2 hover:bg-[#25b7e3] font-semibold duration-300"
            >
              Download Brochure
            </button>
            <button
              type="button"
              className="cursor-pointer rounded-full bg-[#393A8C] text-sm text-white h-9 flex items-center justify-center px-4 py-2 hover:bg-[#4748a3] font-semibold duration-300"
            >
              Request Demo
            </button>
          </div>
        </nav>
      </header>
      <input
        type="checkbox"
        class="peer/sideToggle hidden"
        name="sideToggle"
        id="sideToggle"
      />
      <label
        for="sideToggle"
        class="fixed inset-0 -z-[1011] backdrop-blur-xl bg-sky-950/70 peer-checked/sideToggle:z-[1010] peer-checked/sideToggle:opacity-100 opacity-0 duration-100"
      ></label>
      <div class="fixed flex flex-col h-screen inset-y-0 right-0 z-[1011] w-full overflow-y-auto bg-white  py-6 sm:max-w-sm peer-checked/sideToggle:translate-x-0 peer-checked/sideToggle:opacity-100 translate-x-full opacity-0 duration-300">
        <div class="flex items-center justify-between border-b border-[#a9a9a9] px-6 pb-6">
          <Link href={"#s"} class="-ml-1.5">
            <Image
              className="w-44 h-auto  object-contain aspect-[]"
              fetchPriority="low"
              loading="lazy"
              src={EdooviLogo}
              width="200"
              height="56"
              alt="edoovi erp logo"
              title="edoovi erp logo"
            />
          </Link>
          <label
            htmlFor="sideToggle"
            class="-m-2.5 rounded-md p-2.5 text-[#000]"
          >
            <svg
              stroke="currentColor"
              fill="currentColor"
              stroke-width="0"
              viewBox="0 0 512 512"
              height="30px"
              width="30px"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="m289.94 256 95-95A24 24 0 0 0 351 127l-95 95-95-95a24 24 0 0 0-34 34l95 95-95 95a24 24 0 1 0 34 34l95-95 95 95a24 24 0 0 0 34-34z"></path>
            </svg>
          </label>
        </div>
      </div>
    </>
  );
};

export default Header;
