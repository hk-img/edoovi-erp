"use client";
import Link from "next/link";
import Image from "next/image";

const Header = () => {
  return (
    <>
      <header className="bg-white shadow-[0px_4px_4px_0px_#0000001F]  sticky top-0 z-50">
        <nav className="view flex items-center justify-between xl:py-4 py-3">
          {/* <!-- Mobile Menu Icon --> */}
          <div className="flex lg:hidden ">
            <label
              htmlFor="sideToggle"
              className="cursor-pointer -m-2.5 inline-flex items-center justify-center rounded-md p-2.5"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="14"
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
            <Link href="/" className="-m-1.5 p-1.5">
              <Image
                className="xl:h-14 xl:w-52 lg:w-44 w-32 lg:h-10 h-8  object-contain aspect-[26/7]"
                src="/images/edooviLogo.webp"
                width="208"
                height="56"
                alt="edoovi erp logo"
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
                    href="/"
                    className="xl:text-lg lg:text-lg md:text-base text-sm font-medium leading-6 text-[#1C1B1F] duration-200 capitalize hover:lg:text-black"
                    aria-expanded="false"
                  >
                    Home
                  </Link>
                </div>
                <div className="relative group/dd">
                  <Link
                    href={"/school-management-system"}
                    className="xl:text-lg lg:text-lg md:text-base text-sm font-medium leading-6 text-[#1C1B1F] duration-200 capitalize hover:lg:text-black"
                    aria-expanded="false"
                  >
                    Our Solutions
                  </Link>
                  {/* <!-- Dropdown --> */}
                  {/* <div className="absolute left-0 mt-3 lg:mt-4 w-56 md:w-64 border-t-4 border-white z-20 bg-[#00BBF5] rounded-lg p-6 backdrop-blur-lg transition ease-out duration-300 opacity-0 group-hover/dd:opacity-100 origin-top [transform:rotateX(90deg)] group-hover/dd:[transform:rotateX(0deg)]">
                    <div className="flex flex-col gap-4">
                      {[
                        "About Us",
                        "Our Services",
                        "Case Studies",
                        "Contact Support",
                      ].map((item, idx) => (
                        <Link
                          key={idx}
                          href=""
                          className="flex items-center gap-2 text-sm font-medium text-white hover:text-gray-100 transition-colors"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-2.5 h-2.5 fill-current"
                            viewBox="0 0 8 8"
                          >
                            <circle cx="4" cy="4" r="4" />
                          </svg>
                          {item}
                        </Link>
                      ))}
                    </div>
                  </div> */}
                </div>
                <div className="group/dd">
                  <Link
                    href="/about"
                    className="xl:text-lg lg:text-lg md:text-base text-sm font-medium leading-6 text-[#1C1B1F] duration-200 capitalize hover:lg:text-black"
                    aria-expanded="false"
                  >
                    About Us
                  </Link>
                </div>
                <div className="group/dd relative flex flex-col gap-y-3">
                  <Link
                    href=""
                    className="xl:text-lg lg:text-lg md:text-base text-sm font-medium leading-6 text-[#1C1B1F] duration-200 capitalize hover:lg:text-black"
                    aria-expanded="false"
                  >
                    Blogs
                  </Link>
                  {/* Tooltip */}
                  <span
                    className="absolute top-full left-1/2 -translate-x-1/2 mt-1  whitespace-nowrap 
                   bg-black text-white  px-3 py-1.5 text-xs rounded opacity-0 group-hover/dd:opacity-100 
                   transition duration-300"
                  >
                    Coming Soon
                  </span>
                </div>

                <div className="group/dd relative flex flex-col gap-y-3">
                  <Link
                    href=""
                    className="xl:text-lg lg:text-lg md:text-base text-sm font-medium leading-6 text-[#1C1B1F] duration-200 capitalize hover:lg:text-black"
                    aria-expanded="false"
                  >
                    Clients
                  </Link>
                  {/* Tooltip */}
                  <span
                    className="absolute top-full left-1/2 -translate-x-1/2 mt-1  whitespace-nowrap 
                   bg-black text-white  px-3 py-1.5 text-xs rounded opacity-0 group-hover/dd:opacity-100 
                   transition duration-300"
                  >
                    Coming Soon
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* buttons */}
          <div className="flex items-center justify-end gap-3">
            <Link
              href="/EddoviErpBrochure.pdf"
              download
              target="_blank"
              rel="noopener noreferrer"
              className="cursor-pointer rounded-full bg-[#00BBF5] text-sm text-white h-10 lg:flex hidden items-center justify-center px-6 py-2 hover:bg-[#25b7e3] font-semibold duration-300"
            >
              Download Brochure
            </Link>
            <button
              type="button"
              onClick={() =>
                document
                  .getElementById("footer")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="cursor-pointer rounded-full bg-[#393A8C] text-sm text-white h-10 flex items-center justify-center px-6 py-2 hover:bg-[#4748a3] font-semibold duration-300"
            >
              Contact us
            </button>
          </div>
        </nav>
      </header>
      <input
        type="checkbox"
        className="peer/sideToggle hidden"
        name="sideToggle"
        id="sideToggle"
      />
      <label
        htmlFor="sideToggle"
        className="fixed inset-0 -z-[1011] backdrop-blur-xl bg-sky-950/70 peer-checked/sideToggle:z-[1010] peer-checked/sideToggle:opacity-100 opacity-0 duration-100"
      ></label>
      <div className="fixed flex flex-col h-screen inset-y-0 right-0 z-[1011] w-full overflow-y-auto bg-white  py-6 sm:max-w-sm peer-checked/sideToggle:translate-x-0 peer-checked/sideToggle:opacity-100 translate-x-full opacity-0 duration-300">
        <div className="flex items-center justify-between border-b border-[#a9a9a9] px-6 pb-6">
          <Link href={"/"} className="-ml-1.5">
            <Image
              className="w-44 h-auto  object-contain aspect-[88/19]"
              src="/images/edooviLogo.webp"
              width={176}
              height={38}
              alt="edoovi erp logo"
            />
          </Link>

          {/* close button */}
          <label
            htmlFor="sideToggle"
            className="-m-2.5 rounded-md p-2.5 text-[#000] cursor-pointer"
          >
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 512 512"
              height="30px"
              width="30px"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="m289.94 256 95-95A24 24 0 0 0 351 127l-95 95-95-95a24 24 0 0 0-34 34l95 95-95 95a24 24 0 1 0 34 34l95-95 95 95a24 24 0 0 0 34-34z"></path>
            </svg>
          </label>
        </div>
        <div className="mt-6 flow-root flex-fill overflow-auto -mr-4 pr-4">
          <div className="-my-6 divide-y divide-gray-500/10">
            <div className="space-y-2 py-6">
              <div className="flex flex-col gap-5 items-center">
                <div className="flex flex-col w-full gap-y-5 p-5">
                  <div className="relative flex flex-col gap-y-3">
                    <Link
                      href={"#"}
                      className="flex items-center justify-between gap-x-0.5 lg:text-base text-lg font-semibold text-[#454444]"
                    >
                      Home
                    </Link>
                  </div>
                  <div className="relative flex flex-col gap-y-3">
                    <Link
                      href={"/school-management-system"}
                      className="flex items-center justify-between gap-x-0.5 lg:text-base text-lg font-semibold text-[#454444]"
                    >
                      Our Solutions
                    </Link>
                  </div>

                  <div className="relative flex flex-col gap-y-3">
                    <Link
                      href="/about"
                      className="flex items-center justify-between gap-x-0.5 lg:text-base text-lg font-semibold text-[#454444]"
                    >
                      About Us
                    </Link>
                  </div>
                  <div className="relative flex flex-col gap-y-3">
                    <Link
                      href={"#"}
                      className="flex items-center justify-between gap-x-0.5 lg:text-base text-lg font-semibold text-[#454444]"
                    >
                      Blogs
                    </Link>
                  </div>
                  <div className="relative flex flex-col gap-y-3">
                    <Link
                      href={"#"}
                      className="flex items-center justify-between gap-x-0.5 lg:text-base text-lg font-semibold text-[#454444]"
                    >
                      Clients
                    </Link>
                  </div>
                  <div className="relative w-full mt-3">
                    <Link
                      href="/EddoviErpBrochure.pdf"
                      download
                      target="_blank"
                      rel="noopener noreferrer"
                      className="cursor-pointer rounded-full bg-[#00BBF5] text-sm text-white h-10 flex  items-center justify-center px-6 py-2 hover:bg-[#25b7e3] font-semibold duration-300"
                    >
                      Download Brochure
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
