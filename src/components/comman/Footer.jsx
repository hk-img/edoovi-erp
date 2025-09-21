import React from "react";
import Link from "next/link";
import Image from "next/image";
import FooterSideImg from "../../../public/images/footerImage.webp";
import AppStoreBlack from "../../../public/images/appStoreBlack.webp";
import GoogleStoreBlack from "../../../public/images/googleStoreBlack.webp";

const Footer = () => {
  return (
    <>
      <footer>
        <div className="w-full bg-gradient-to-t from-[#00398E] to-[#0176C5] flex flex-col">
          <div className="container mx-auto px-4 lg:px-6 xl:px-8">
            <div className="flex flex-wrap md:items-end justify-between">
              <div className="md:w-1/2 w-full relative md:pr-6 max-sm:order-last">
                <Image
                  loading="lazy"
                  fetchPriority="low"
                  src={FooterSideImg}
                  alt="file icon"
                  title="file icon"
                  width={381}
                  height={254}
                  className="size-full rounded-lg mx-auto object-contain"
                />
              </div>
              <div className="md:w-1/2 w-full xl:py-12 lg:py-10 py-6">
                <div className="flex flex-col gap-y-4">
                  <h2 className="text-white lg:text-3xl md:text-2xl text-xl text-center font-bold">
                    Want to Know More about Edoovi ERP? Our Representative just
                    a click away!
                  </h2>

                  <form
                    action=""
                    className="lg:w-6/12 md:w-8/12 w-full mx-auto flex flex-col gap-y-4"
                  >
                    <div className="rounded-2xl p-0.5 w-full  text-white overflow-hidden bg-gradient-to-r  from-[#004C9F] via-[#00D9FF] to-[#014A9E]">
                      <input
                        type="text"
                        placeholder="Your Name"
                        className="bg-[#0B417A] outline-none w-full text-white text-sm font-semibold placeholder:text-white ps-5 py-3 h-14 rounded-2xl shadow-inner shadow-[#000000B2] "
                      />
                    </div>
                    <div className="rounded-2xl p-0.5 text-white w-full  overflow-hidden bg-gradient-to-r  from-[#004C9F] via-[#00D9FF] to-[#014A9E]">
                      <input
                        type="text"
                        placeholder="Mobile Number"
                        className="bg-[#0B417A] outline-none w-full text-white text-sm font-semibold placeholder:text-white ps-5 py-3 h-14 rounded-2xl shadow-inner shadow-[#000000B2] "
                      />
                    </div>
                    <button className="cursor-pointer rounded-2xl font-bold h-12 text-base text-white p-0.5  w-full  bg-[#04D9FF] border-none outline-none items-center text-center">
                      Submit
                    </button>
                  </form>
                  <div className="hidden md:flex md:flex-row justify-between pt-5">
                    <div className="md:w-1/2 w-full flex flex-col gap-y-3">
                      <div className="lg:text-3xl md:text-2xl text-xl font-bold text-[#04D9FF]">
                        Quick Links
                      </div>
                      <ul className="w-full flex flex-wrap justify-between">
                        <li className="w-1/2">
                          <Link
                            href={"#"}
                            className="text-sm font-semibold text-white"
                          >
                            Home
                          </Link>
                        </li>
                        <li className="w-1/2">
                          <Link
                            href={"#"}
                            className="text-sm font-semibold text-white"
                          >
                            about
                          </Link>
                        </li>
                        <li className="w-1/2">
                          {" "}
                          <Link
                            href={"#"}
                            className="text-sm font-semibold text-white"
                          >
                            Contact Us
                          </Link>
                        </li>
                        <li className="w-1/2">
                          <Link
                            href={"#"}
                            className="text-sm font-semibold text-white"
                          >
                            Privacy Policy
                          </Link>
                        </li>
                      </ul>
                    </div>
                    <div className="md:w-1/2 w-full flex flex-col gap-y-3 justify-center ">
                      <div className="lg:text-xl md:text-lg text-lg font-bold text-white text-balance">
                        Download India’s First
                        <span className="text-[#04D9FF]">AI Powered</span>{" "}
                        School App
                      </div>
                      <div className="flex flex-row gap-3">
                        <div className="w-full">
                          <Image
                            loading="lazy"
                            fetchPriority="low"
                            src={GoogleStoreBlack}
                            alt="file icon"
                            title="file icon"
                            width={102}
                            height={30}
                            className="size-full mx-auto object-contain"
                          />
                        </div>
                        <div className="w-full">
                          <Image
                            loading="lazy"
                            fetchPriority="low"
                            src={GoogleStoreBlack}
                            alt="file icon"
                            title="file icon"
                            width={248}
                            height={40}
                            className="size-full mx-auto object-contain"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-[#192D58] h-8 hidden md:px-11 px-4 md:grid grid-cols-6 gap-24 items-center justify-center">
            <div className="h-0.5 bg-[#2F568E]"></div>
            <div className="h-0.5 bg-[#2F568E]"></div>
            <div className="h-0.5 bg-[#2F568E]"></div>
            <div className="h-0.5 bg-[#2F568E]"></div>
            <div className="h-0.5 bg-[#2F568E]"></div>
            <div className="h-0.5 bg-[#2F568E]"></div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
