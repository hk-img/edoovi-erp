import React from "react";
import Image from "next/image";
import heroBannerImg from "../../../public/images/HeroImg.webp";
import RobotImg from "../../../public/images/robotImg.webp";

const HeroBanner = () => {
  return (
    <>
      <section class="heroSection  relative overflow-hidden lg:min-h-dvh max-md:!h-auto flex flex-col max-md:pb-6 bg-white">
        <div class="container mx-auto xl:py-4 lg:py-3 py-4 px-4 lg:px-6 xl:px-8">
          <div className="flex flex-wrap  justify-between">
            <div class="xl:w-6/12 lg:w-1/2 md:w-5/12 sm:w-full w-full flex flex-col ">
              <div className="flex gap-3 max-md:justify-center items-center relative lg:-bottom-10">
                <div className="text-[#454444] max-md:text-center  xl:text-2xl lg:text-xl md:text-lg sm:text-base text-base font-semibold">
                  Manage school On the go
                </div>
                <Image
                  className="lg:w-36 lg:h-40 w-28 h-32  object-contain object-center lg:block hidden"
                  fetchPriority="low"
                  loading="lazy"
                  src={RobotImg}
                  width="144"
                  height="160"
                  alt=""
                  title=""
                />
              </div>
              <h1 class="w-full xl:text-5xl lg:text-4xl text-3xl xl:leading-14 lg:leading-14 md:leading-10  max-sm:pt-3 md:font-bold max-sm:text-center font-semibold text-[#393A8C]  relative max-md:text-center">
                <span className="block">
                  360<span className="text-[#00BBF5]">°</span>School
                </span>
                Management Solution with Power of
                <span className="text-[#00BBF5]"> AI</span>
              </h1>
              <div class="w-full xl:text-base md:text-sm text-sm font-normal text-[#393A8C] md:pt-4 pt-2 pb-6 max-md:text-center">
                An Affordable
                <span className="font-semibold"> All-in-one ERP</span> for
                <span className="font-semibold">
                  {" "}
                  Schools, Teachers & Students
                </span>
              </div>
              <div class="w-full flex md:justify-start justify-center pt-3">
                <button
                  type="button"
                  class="cursor-pointer md:h-14 h-10 border-0 xl:text-base sm:text-sm text-xs text-center md:font-semibold font-medium text-white inline-flex items-center justify-center md:px-8 px-6 py-3 gap-2 rounded-full bg-[#4B71FD] duration-500 hover:bg-[#5d7ef5] group/btn"
                >
                  <span>View Demo</span>
                  <div class="inline-flex  relative duration-300">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="md:size-5 size-4"
                      width="18"
                      height="18"
                      viewBox="0 0 18 18"
                      fill="none"
                    >
                      <path
                        d="M2 18C1.45 18 0.979167 17.8042 0.5875 17.4125C0.195833 17.0208 0 16.55 0 16V2C0 1.45 0.195833 0.979167 0.5875 0.5875C0.979167 0.195833 1.45 0 2 0H9V2H2V16H16V9H18V16C18 16.55 17.8042 17.0208 17.4125 17.4125C17.0208 17.8042 16.55 18 16 18H2ZM6.7 12.7L5.3 11.3L14.6 2H11V0H18V7H16V3.4L6.7 12.7Z"
                        fill="white"
                      />
                    </svg>
                  </div>
                </button>
              </div>
            </div>
            <div class="xl:w-5/12 lg:w-1/2 md:w-7/12 sm:w-full w-full flex flex-col relative md:order-last order-first">
              <Image
                className="size-full object-contain object-center"
                fetchPriority="low"
                loading="lazy"
                src={heroBannerImg}
                width="200"
                height="56"
                alt=""
                title=""
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroBanner;
