import React from "react";
import useEmblaCarousel from "embla-carousel-react";
import Link from "next/link";
import Image from "next/image";
import EmblaCarousel from "../emblaCarousel/EmblaCarousel";
import WhyChooseBg from "../../../public/images/whyChooseBg.webp";
import WhychooseRobot from "../../../public/images/whyChooseRobotImg.webp";
import GraphImage from "../../../public/images/graphImage.webp";
import DolorImg from "../../../public/images/dolorImg.webp";

const Result = () => {
  return (
    <>
      <section class="resultSec bg-[#190F4E] relative py-8">
        <div className="container mx-auto ">
          <div className="flex flex-col">
            <h2 class="md:w-8/12 w-full 2xl:text-4xl mx-auto xl:text-4xl lg:text-3xl md:text-3xl sm:text-2xl text-2xl font-bold text-white text-balance relative z-10 text-center md:pb-8 pb-4">
              How Our{" "}
              <span className="text-[#04D9FF]"> AI-First School ERP </span>{" "}
              Driven Incredible Results
            </h2>
            <div class="flex flex-row md:items-end">
              <div class="md:w-1/3 md:block hidden">
                <div className="w-full">
                  <Image
                    loading="lazy"
                    fetchPriority="low"
                    src={GraphImage}
                    alt="file icon"
                    title="file icon"
                    width={387}
                    height={464}
                    class="size-full mx-auto object-contain"
                  />
                </div>
              </div>
              <div class="flex md:w-2/3 w-full flex-col md:sticky md:bottom-0 xl:py-4 lg:py-3 py-4 px-4 lg:px-6 xl:px-8 relative">
                <EmblaCarousel
                  options={{
                    align: "start",
                    loop: true,
                  }}
                >
                  <div className="embla__slide  shrink-0 px-2 basis-[100%] lg:basis-[50%] ">
                    <div class="flex flex-col p-6 relative  rounded-2xl  bg-gradient-to-r from-[#0EAFF0] to-[#0EAFF0]  h-full">
                      <div class="absolute top-0 flex justify-center items-center right-0 w-16 h-16 rounded-bl-3xl bg-[#190F4E]">
                        <div class="top-0 absolute -left-5">
                          <svg
                            width="23"
                            height="23"
                            viewBox="0 0 23 23"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M22.25 22.4404C21.9859 4.48887 7.61356 0.000200272 0.459961 0H22.25V22.4404Z"
                              fill="#190F4E"
                            />
                          </svg>
                        </div>
                        <button
                          type="button"
                          class="cursor-pointer size-10 bg-gradient-to-r from-[#DBE8FF] to-[#FFFFFF] justify-center items-center flex  rounded-full"
                        >
                          <svg
                            width="22"
                            height="22"
                            viewBox="0 0 22 22"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <mask
                              id="mask0_19752_1700"
                              style={{ maskType: "alpha" }}
                              maskUnits="userSpaceOnUse"
                              x="0"
                              y="0"
                              width="22"
                              height="22"
                            >
                              <rect
                                x="0.345703"
                                y="0.517822"
                                width="21.1251"
                                height="21.1251"
                                fill="#D9D9D9"
                              />
                            </mask>
                            <g mask="url(#mask0_19752_1700)">
                              <path
                                d="M14.9779 8.90188L6.02177 17.858C5.75771 18.1221 5.43496 18.2541 5.05354 18.2541C4.67211 18.2541 4.34937 18.1221 4.0853 17.858C3.82124 17.594 3.68921 17.2712 3.68921 16.8898C3.68921 16.5084 3.82124 16.1856 4.0853 15.9216L13.0415 6.96541H9.32256C8.94114 6.96541 8.61472 6.82972 8.34333 6.55832C8.07193 6.28692 7.93623 5.96051 7.93623 5.57908C7.93623 5.19766 8.07193 4.87125 8.34333 4.59985C8.61472 4.32845 8.94114 4.19275 9.32256 4.19275H16.3643C16.7457 4.19275 17.0721 4.32845 17.3435 4.59985C17.6149 4.87125 17.7506 5.19766 17.7506 5.57908V12.6208C17.7506 13.0022 17.6149 13.3286 17.3435 13.6C17.0721 13.8714 16.7457 14.0071 16.3643 14.0071C15.9828 14.0071 15.6564 13.8714 15.385 13.6C15.1136 13.3286 14.9779 13.0022 14.9779 12.6208V8.90188Z"
                                fill="#393A8C"
                              />
                            </g>
                          </svg>
                        </button>
                        <div class="absolute -bottom-[23px] right-0 ">
                          <svg
                            width="22"
                            height="24"
                            viewBox="0 0 22 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M22 23.1603C21.7358 5.20836 7.36242 0.720825 0.208984 0.720825H22V23.1603Z"
                              fill="#190F4E"
                            />
                          </svg>
                        </div>
                      </div>
                      <div class="flex flex-col ">
                        <div class="text-base font-normal text-white pe-3">
                          From Reminders to Receipts
                        </div>
                        <h3 class="w-10/12  md:text-xl text-lg font-bold  text-white">
                          Our AI Fee Collection Keeps Schools Paid & Parents
                          Happy
                        </h3>
                        <div class="flex flex-row pt-3.5 justify-between">
                          <ul class="text-white text-xs pl-3 font-normal space-y-2 ">
                            <li class="list-disc ">
                              Receive Reminders to Pay Fees
                            </li>
                            <li class="list-disc ">
                              Send alerts on Whatsapp, sms & in app
                            </li>
                            <li class="list-disc ">
                              Multiple UPI & payment options
                            </li>
                            <li class="list-disc ">
                              Collection auto update in ERP
                            </li>
                          </ul>
                          <div class="">
                            <Image
                              loading="lazy"
                              fetchPriority="low"
                              src={DolorImg}
                              alt="file icon"
                              title="file icon"
                              width={112}
                              height={112}
                              class="md:size-28 size-24 mx-auto object-contain"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="embla__slide  shrink-0 px-2 basis-[100%] lg:basis-[50%] ">
                    <div class="flex flex-col p-6 relative  rounded-2xl  bg-gradient-to-r from-[#FFFFFF] to-[#C0F0FF]  h-full">
                      <div class="absolute top-0 flex justify-center items-center right-0 w-16 h-16 rounded-bl-3xl bg-[#190F4E]">
                        <div class="top-0 absolute -left-5">
                          <svg
                            width="23"
                            height="23"
                            viewBox="0 0 23 23"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M22.25 22.4404C21.9859 4.48887 7.61356 0.000200272 0.459961 0H22.25V22.4404Z"
                              fill="#190F4E"
                            />
                          </svg>
                        </div>

                        <button
                          type="button"
                          class="cursor-pointer size-10 bg-gradient-to-r from-[#DBE8FF] to-[#FFFFFF] justify-center items-center flex  rounded-full"
                        >
                          <svg
                            width="22"
                            height="22"
                            viewBox="0 0 22 22"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <mask
                              id="mask0_19752_1700"
                              style={{ maskType: "alpha" }}
                              maskUnits="userSpaceOnUse"
                              x="0"
                              y="0"
                              width="22"
                              height="22"
                            >
                              <rect
                                x="0.345703"
                                y="0.517822"
                                width="21.1251"
                                height="21.1251"
                                fill="#D9D9D9"
                              />
                            </mask>
                            <g mask="url(#mask0_19752_1700)">
                              <path
                                d="M14.9779 8.90188L6.02177 17.858C5.75771 18.1221 5.43496 18.2541 5.05354 18.2541C4.67211 18.2541 4.34937 18.1221 4.0853 17.858C3.82124 17.594 3.68921 17.2712 3.68921 16.8898C3.68921 16.5084 3.82124 16.1856 4.0853 15.9216L13.0415 6.96541H9.32256C8.94114 6.96541 8.61472 6.82972 8.34333 6.55832C8.07193 6.28692 7.93623 5.96051 7.93623 5.57908C7.93623 5.19766 8.07193 4.87125 8.34333 4.59985C8.61472 4.32845 8.94114 4.19275 9.32256 4.19275H16.3643C16.7457 4.19275 17.0721 4.32845 17.3435 4.59985C17.6149 4.87125 17.7506 5.19766 17.7506 5.57908V12.6208C17.7506 13.0022 17.6149 13.3286 17.3435 13.6C17.0721 13.8714 16.7457 14.0071 16.3643 14.0071C15.9828 14.0071 15.6564 13.8714 15.385 13.6C15.1136 13.3286 14.9779 13.0022 14.9779 12.6208V8.90188Z"
                                fill="#393A8C"
                              />
                            </g>
                          </svg>
                        </button>
                        <div class="absolute -bottom-[23px] right-0 ">
                          <svg
                            width="22"
                            height="24"
                            viewBox="0 0 22 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M22 23.1603C21.7358 5.20836 7.36242 0.720825 0.208984 0.720825H22V23.1603Z"
                              fill="#190F4E"
                            />
                          </svg>
                        </div>
                      </div>
                      <div class="flex flex-col">
                        <div class="text-base font-normal text-[#363637] pe-3">
                          From Reminders to Receipts
                        </div>
                        <h3 class="w-10/12 md:text-xl text-lg font-bold  text-[#393A8C]">
                          <span className="text-[#0EAFF0]">AI-Powered</span>{" "}
                          Exam Module do all in intelligent way
                        </h3>
                        <div class="flex flex-row pt-3.5 justify-between">
                          <ul class="text-[#190F4E] text-xs pl-3 font-normal space-y-2 ">
                            <li class="list-disc ">
                              Receive Reminders to Pay Fees
                            </li>
                            <li class="list-disc ">
                              Send alerts on Whatsapp, sms & in app
                            </li>
                            <li class="list-disc ">
                              Multiple UPI & payment options
                            </li>
                            <li class="list-disc ">
                              Collection auto update in ERP
                            </li>
                          </ul>
                          <div class="">
                            <Image
                              loading="lazy"
                              fetchPriority="low"
                              src={DolorImg}
                              alt="file icon"
                              title="file icon"
                              width={112}
                              height={112}
                              class="md:size-28 size-24 mx-auto object-contain"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </EmblaCarousel>

                <div class="w-full md:flex hidden p-6 flex-col relative rounded-2xl bg-gradient-to-l from-[#190F4E] to-[#393A8C] ">
                  <div class="absolute top-0 flex justify-center items-center right-0 w-16 h-16 rounded-bl-3xl bg-[#190F4E]">
                    <div class="top-0 absolute -left-5">
                      <svg
                        width="23"
                        height="23"
                        viewBox="0 0 23 23"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M22.25 22.4404C21.9859 4.48887 7.61356 0.000200272 0.459961 0H22.25V22.4404Z"
                          fill="#190F4E"
                        />
                      </svg>
                    </div>

                    <button class="cursor-pointer size-10 bg-gradient-to-r from-[#DBE8FF] to-[#FFFFFF] border-none outline-none justify-center items-center flex  rounded-full">
                      <svg
                        width="22"
                        height="22"
                        viewBox="0 0 22 22"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <mask
                          id="mask0_19752_1700"
                          style={{ maskType: "alpha" }}
                          maskUnits="userSpaceOnUse"
                          x="0"
                          y="0"
                          width="22"
                          height="22"
                        >
                          <rect
                            x="0.345703"
                            y="0.517822"
                            width="21.1251"
                            height="21.1251"
                            fill="#D9D9D9"
                          />
                        </mask>
                        <g mask="url(#mask0_19752_1700)">
                          <path
                            d="M14.9779 8.90188L6.02177 17.858C5.75771 18.1221 5.43496 18.2541 5.05354 18.2541C4.67211 18.2541 4.34937 18.1221 4.0853 17.858C3.82124 17.594 3.68921 17.2712 3.68921 16.8898C3.68921 16.5084 3.82124 16.1856 4.0853 15.9216L13.0415 6.96541H9.32256C8.94114 6.96541 8.61472 6.82972 8.34333 6.55832C8.07193 6.28692 7.93623 5.96051 7.93623 5.57908C7.93623 5.19766 8.07193 4.87125 8.34333 4.59985C8.61472 4.32845 8.94114 4.19275 9.32256 4.19275H16.3643C16.7457 4.19275 17.0721 4.32845 17.3435 4.59985C17.6149 4.87125 17.7506 5.19766 17.7506 5.57908V12.6208C17.7506 13.0022 17.6149 13.3286 17.3435 13.6C17.0721 13.8714 16.7457 14.0071 16.3643 14.0071C15.9828 14.0071 15.6564 13.8714 15.385 13.6C15.1136 13.3286 14.9779 13.0022 14.9779 12.6208V8.90188Z"
                            fill="#393A8C"
                          />
                        </g>
                      </svg>
                    </button>
                    <div class="absolute -bottom-[23px] right-0 ">
                      <svg
                        width="22"
                        height="24"
                        viewBox="0 0 22 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M22 23.1603C21.7358 5.20836 7.36242 0.720825 0.208984 0.720825H22V23.1603Z"
                          fill="#190F4E"
                        />
                      </svg>
                    </div>
                  </div>
                  <div class="flex justify-center items-center mb-2 gap-5 ">
                    <div class="w-1/3 flex flex-col">
                      <div class="text-sm font-normal text-white">
                        From Reminders to Receipts
                      </div>
                      <h3 class="md:text-xl text-lg font-bold  text-white">
                        <span class="text-[#0EAFF0]">AI-Powered</span> Admission
                        Assistant
                      </h3>
                    </div>
                    <div class="w-2/3 flex flex-row justify-between items-center pe-10">
                      <ul class="text-white text-xs pl-3 font-normal leading-6">
                        <li class="list-disc ">
                          Receive Reminders to Pay Fees
                        </li>
                        <li class="list-disc ">
                          Send alerts on Whatsapp, sms & in app
                        </li>
                        <li class="list-disc ">
                          Multiple UPI & payment options
                        </li>
                        <li class="list-disc ">
                          Collection auto update in ERP
                        </li>
                      </ul>
                      <div class="">
                        <Image
                          loading="lazy"
                          fetchPriority="low"
                          src={DolorImg}
                          alt="file icon"
                          title="file icon"
                          width={131}
                          height={162}
                          class="md:size-36 size-28 mx-auto object-contain"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="md:w-8/12 w-full bg-gradient-to-r md:mt-0 mt-3 py-2 from-[#1D4695] to-[#190F4E] ">
          <span class="lg:text-3xl md:text-2xl text-lg pl-11 font-normal text-white">
            RESULTS AFTER AI MAGIC
          </span>
        </div>
      </section>
    </>
  );
};

export default Result;
