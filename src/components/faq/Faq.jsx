"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import FaqImage from "../../../public/images/faqImage.webp";
const Faq = () => {
  return (
    <>
      <section className="awardsSection relative overflow-hidden py-8 bg-[#DDF7FF]">
        <div className="container mx-auto xl:py-4 lg:py-3 py-4 px-4 lg:px-6 xl:px-8">
          <div className="flex flex-col">
            <div className="flex flex-wrap justify-between">
              <div className="md:w-1/2 w-full">
                <div className="w-full flex flex-col gap-y-3">
                  <h2 class="w-full  2xl:text-4xl xl:text-4xl max-sm:text-center lg:text-3xl md:text-3xl sm:text-2xl text-2xl font-bold text-[#272727] text-balance relative z-10  md:pb-8 pb-4">
                    Frequently Asked Questions
                  </h2>
                  <div className="w-full">
                    <Image
                      loading="lazy"
                      fetchPriority="low"
                      src={FaqImage}
                      alt="Easy Appointment Booking"
                      title="Easy Appointment Booking"
                      width={599}
                      height={463}
                      class="size-full mx-auto object-contain"
                    />
                  </div>
                </div>
              </div>
              <div className="md:w-1/2 w-full">
                <ul className="w-full flex flex-col md:gap-8 gap-4">
                  <li class="md:p-8 py-6 px-4 flex flex-col gap-2 rounded-xl bg-white shadow-[0px_3.29px_11.77px_0px_#0000001F] group/faq">
                    <input
                      type="radio"
                      name="faq"
                      id="faq0"
                      class="hidden"
                      defaultChecked
                    />
                    <label
                      for="faq0"
                      class="flex items-center cursor-pointer gap-2 before:absolute before:-inset-4 relative"
                    >
                      <h3 class="grow lg:text-base text-sm font-semibold text-[#454444]">
                        How Much Does It Cost To Create a Doctor On-Demand App?
                      </h3>
                      <div class="shrink-0 relative  group-has-[:checked]/faq:rotate-180   duration-300">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="12"
                          height="8"
                          viewBox="0 0 12 8"
                          fill="none"
                        >
                          <path
                            d="M6 4.6L1.4 0L0 1.4L6 7.4L12 1.4L10.6 0L6 4.6Z"
                            fill="#1C1B1F"
                          />
                        </svg>
                      </div>
                    </label>
                    <div class="text-xs font-normal text-[#454444] hidden group-has-[:checked]/faq:block">
                      <p>
                        Depending on the platform, doctor appointment app
                        development company hourly, and its features, the cost
                        can greatly vary; however, most often, the cost usually
                        is between $15000 and $49000+. Your further
                        specifications will add to the cost while also
                        increasing the quality and scalability of your service
                      </p>
                    </div>
                  </li>
                  <li class="md:p-8 py-6 px-4 flex flex-col gap-2 rounded-xl bg-white shadow-[0px_3.29px_11.77px_0px_#0000001F] group/faq">
                    <input type="radio" name="faq" id="faq1" class="hidden" />
                    <label
                      for="faq1"
                      class="flex items-center cursor-pointer gap-2 before:absolute before:-inset-4 relative"
                    >
                      <h3 class="grow lg:text-base text-sm font-semibold text-[#454444]">
                        How Much Does It Cost To Create a Doctor On-Demand App?
                      </h3>
                      <div class="shrink-0 relative  group-has-[:checked]/faq:rotate-180  duration-300">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="12"
                          height="8"
                          viewBox="0 0 12 8"
                          fill="none"
                        >
                          <path
                            d="M6 4.6L1.4 0L0 1.4L6 7.4L12 1.4L10.6 0L6 4.6Z"
                            fill="#1C1B1F"
                          />
                        </svg>
                      </div>
                    </label>
                    <div class="text-xs font-normal text-[#454444] hidden group-has-[:checked]/faq:block">
                      <p>
                        Depending on the platform, doctor appointment app
                        development company hourly, and its features, the cost
                        can greatly vary; however, most often, the cost usually
                        is between $15000 and $49000+. Your further
                        specifications will add to the cost while also
                        increasing the quality and scalability of your service
                      </p>
                    </div>
                  </li>
                  <li class="md:p-8 py-6 px-4 flex flex-col gap-2 rounded-xl bg-white shadow-[0px_3.29px_11.77px_0px_#0000001F] group/faq">
                    <input type="radio" name="faq" id="faq3" class="hidden" />
                    <label
                      for="faq3"
                      class="flex items-center cursor-pointer gap-2 before:absolute before:-inset-4 relative"
                    >
                      <h3 class="grow lg:text-base text-sm font-semibold text-[#454444]">
                        How Much Does It Cost To Create a Doctor On-Demand App?
                      </h3>
                      <div class="shrink-0 relative  group-has-[:checked]/faq:rotate-180  duration-300">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="12"
                          height="8"
                          viewBox="0 0 12 8"
                          fill="none"
                        >
                          <path
                            d="M6 4.6L1.4 0L0 1.4L6 7.4L12 1.4L10.6 0L6 4.6Z"
                            fill="#1C1B1F"
                          />
                        </svg>
                      </div>
                    </label>
                    <div class="text-xs font-normal text-[#454444] hidden group-has-[:checked]/faq:block">
                      <p>
                        Depending on the platform, doctor appointment app
                        development company hourly, and its features, the cost
                        can greatly vary; however, most often, the cost usually
                        is between $15000 and $49000+. Your further
                        specifications will add to the cost while also
                        increasing the quality and scalability of your service
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Faq;
