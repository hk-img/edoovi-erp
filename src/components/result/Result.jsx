import Link from "next/link";
import Image from "next/image";
import EmblaCarousel from "../emblaCarousel/EmblaCarousel";

const Result = () => {
  return (
    <>
      <section className="resultSec bg-[#190F4E] relative py-8">
        <div className="view">
          <div className="flex flex-col">
            <h2 className="md:w-8/12 w-full 2xl:text-4xl mx-auto xl:text-4xl lg:text-3xl md:text-3xl sm:text-2xl text-2xl font-bold text-white text-balance relative z-10 text-center md:pb-8 pb-4">
              How Our{" "}
              <span className="text-[#04D9FF]"> AI-First School ERP </span>{" "}
              Driven Incredible Results
            </h2>
            <div className="flex flex-row md:items-end">
              <div className="md:w-1/3 md:block hidden">
                <div className="w-full">
                  <Image
                    src="/images/graphImage.webp"
                    alt="How Our AI-First School ERP Driven Incredible Results"
                    width={400}
                    height={479}
                    className="size-full mx-auto object-contain aspect-[400/479]"
                  />
                </div>
              </div>
              <div className="flex md:w-2/3 w-full flex-col md:sticky md:bottom-0 xl:py-4 lg:py-3 py-4 lg:ps-8 md:ps-6 relative">
                <EmblaCarousel
                  options={{
                    align: "start",
                    loop: true,
                  }}
                >
                  <div className="embla__slide  shrink-0 px-2 basis-[100%] lg:basis-[50%] ">
                    <div className="flex flex-col p-6 relative  rounded-2xl  bg-gradient-to-r from-[#0EAFF0] to-[#0EAFF0]  h-full">
                      <div className="top-0 absolute right-0">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="70"
                          height="70"
                          viewBox="0 0 83 84"
                          fill="none"
                        >
                          <path
                            d="M22.25 0.000488281H82.9992V60.7204H52.6646C35.8671 60.7204 22.25 47.1033 22.25 30.3058V0.000488281Z"
                            fill="#190F4E"
                          />
                          <path
                            d="M22.25 22.4404C21.9859 4.48887 7.61356 0.00020001 0.459961 0H22.25V22.4404Z"
                            fill="#190F4E"
                          />
                          <path
                            d="M83 83.1602C82.7358 65.2082 68.3624 60.7207 61.209 60.7207H83V83.1602Z"
                            fill="#190F4E"
                          />
                        </svg>
                      </div>
                      <button
                        type="button"
                        className="absolute right-0 top-0 cursor-pointer md:size-12 size-8 bg-gradient-to-r from-[#DBE8FF] to-[#FFFFFF] justify-center items-center flex  rounded-full"
                      >
                        <svg
                          width="20"
                          height="20"
                          className="md:size-5 size-3"
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
                      <div className="flex flex-col ">
                        <div className="text-base font-normal text-white pe-3">
                          From Reminders to Receipts
                        </div>
                        <h3 className="w-10/12 lg:text-2xl md:text-xl text-lg font-bold text-white mt-2">
                          Our AI Fee Collection Keeps Schools Paid & Parents
                          Happy
                        </h3>
                        <div className="flex flex-row pt-3.5 justify-between">
                          <ul className="text-white text-xs pl-3 font-normal space-y-2 ">
                            <li className="list-disc ">
                              Receive Reminders to Pay Fees
                            </li>
                            <li className="list-disc ">
                              Send alerts on Whatsapp, sms & in app
                            </li>
                            <li className="list-disc ">
                              Multiple UPI & payment options
                            </li>
                            <li className="list-disc ">
                              Collection auto update in ERP
                            </li>
                          </ul>
                          <div className="">
                            <Image
                              src="/images/dolorImg.webp"
                              alt="dollar image"
                              width={101}
                              height={112}
                              className="md:size-28 size-24 mx-auto object-contain aspect-[101/112]"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="embla__slide  shrink-0 px-2 basis-[100%] lg:basis-[50%] ">
                    <div className="flex flex-col p-6 relative  rounded-2xl  bg-gradient-to-r from-[#FFFFFF] to-[#C0F0FF]  h-full">
                      <div className="top-0 absolute right-0">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="70"
                          height="70"
                          viewBox="0 0 83 84"
                          fill="none"
                        >
                          <path
                            d="M22.25 0.000488281H82.9992V60.7204H52.6646C35.8671 60.7204 22.25 47.1033 22.25 30.3058V0.000488281Z"
                            fill="#190F4E"
                          />
                          <path
                            d="M22.25 22.4404C21.9859 4.48887 7.61356 0.00020001 0.459961 0H22.25V22.4404Z"
                            fill="#190F4E"
                          />
                          <path
                            d="M83 83.1602C82.7358 65.2082 68.3624 60.7207 61.209 60.7207H83V83.1602Z"
                            fill="#190F4E"
                          />
                        </svg>
                      </div>
                      <button
                        type="button"
                        className="absolute right-0 top-0 cursor-pointer md:size-12 size-8 bg-gradient-to-r from-[#DBE8FF] to-[#FFFFFF] justify-center items-center flex  rounded-full"
                      >
                        <svg
                          width="20"
                          height="20"
                          className="md:size-5 size-3"
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
                      <div className="flex flex-col">
                        <div className="text-base font-normal text-[#363637] pe-3">
                          From Reminders to Receipts
                        </div>
                        <h3 className="w-10/12 lg:text-2xl md:text-xl text-lg font-bold text-[#393A8C] mt-2">
                          <span className="text-[#0EAFF0]">AI-Powered</span>{" "}
                          Exam Module do all in intelligent way
                        </h3>
                        <div className="flex flex-row pt-3.5 justify-between">
                          <ul className="text-[#190F4E] text-xs pl-3 font-normal space-y-2 ">
                            <li className="list-disc ">
                              Receive Reminders to Pay Fees
                            </li>
                            <li className="list-disc ">
                              Send alerts on Whatsapp, sms & in app
                            </li>
                            <li className="list-disc ">
                              Multiple UPI & payment options
                            </li>
                            <li className="list-disc ">
                              Collection auto update in ERP
                            </li>
                          </ul>
                          <div className="">
                            <Image
                              src="/images/dolorImg.webp"
                              alt="dollar image"
                              width={101}
                              height={112}
                              className="md:size-28 size-24 mx-auto object-contain aspect-[101/112]"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </EmblaCarousel>

                <div className="w-full mt-5 md:flex hidden p-6 flex-col relative rounded-2xl bg-gradient-to-bl from-[#190F4E] to-[#393A8C] ">
                  <div className="top-0 absolute right-0">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="70"
                      height="70"
                      viewBox="0 0 83 84"
                      fill="none"
                    >
                      <path
                        d="M22.25 0.000488281H82.9992V60.7204H52.6646C35.8671 60.7204 22.25 47.1033 22.25 30.3058V0.000488281Z"
                        fill="#190F4E"
                      />
                      <path
                        d="M22.25 22.4404C21.9859 4.48887 7.61356 0.00020001 0.459961 0H22.25V22.4404Z"
                        fill="#190F4E"
                      />
                      <path
                        d="M83 83.1602C82.7358 65.2082 68.3624 60.7207 61.209 60.7207H83V83.1602Z"
                        fill="#190F4E"
                      />
                    </svg>
                  </div>
                  <button
                    type="button"
                    className="absolute right-0 top-0 cursor-pointer md:size-12 size-8 bg-gradient-to-r from-[#DBE8FF] to-[#FFFFFF] justify-center items-center flex  rounded-full"
                  >
                    <svg
                      width="20"
                      height="20"
                      className="md:size-5 size-3"
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
                  <div className="flex justify-center items-center mb-2 gap-5 ">
                    <div className="w-1/3 flex flex-col">
                      <div className="md:text-base text-sm font-normal text-white">
                        Boost Enrollment with
                      </div>
                      <h3 className="lg:text-2xl md:text-xl text-lg font-bold  text-white mt-2">
                        <span className="text-[#0EAFF0]">AI-Powered</span>{" "}
                        Admission Assistant
                      </h3>
                    </div>
                    <div className="w-2/3 flex flex-row justify-between items-center pe-10">
                      <ul className="text-white text-xs pl-3 font-normal flex flex-col gap-y-4 list-disc">
                        <li>Receive Reminders to Pay Fees</li>
                        <li>Send alerts on Whatsapp, sms & in app</li>
                        <li>Multiple UPI & payment options</li>
                        <li>Collection auto update in ERP</li>
                      </ul>
                      <div className="">
                        <Image
                          src="/images/dolorImg.webp"
                          alt="dollar image"
                          width={141}
                          height={141}
                          className="md:size-36 size-28 mx-auto object-contain aspect-auto"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="md:w-8/12 w-full bg-gradient-to-r md:mt-0 mt-3 py-2 from-[#1D4695] to-[#190F4E] ">
          <span className="lg:text-3xl md:text-2xl text-lg pl-11 font-normal text-white">
            RESULTS AFTER AI MAGIC
          </span>
        </div>
        <div className="arrowSec pt-8">
          <div className="view xl:py-4 lg:py-3 py-4 px-4 lg:px-6 xl:px-8">
            <div className="grid xl:grid-cols-4 lg:grid-cols-4 md:grid-cols-2 grid-cols-2 gap-y-6">
              <div className="flex items-end gap-4">
                <div className="lg:w-24 md:w-20 w-14 relative overflow-hidden shrink-0">
                  {/* <!-- Arrow SVG --> */}
                  <svg
                    width="91"
                    height="144"
                    viewBox="0 0 91 144"
                    className="size-full relative z-10"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0_arrow)">
                      <path
                        d="M91 144H66.998L67.4102 143.99C71.5003 143.783 74.7796 140.502 74.9873 136.412L74.998 136V73.5303H82.5146L82.8105 73.5254C88.9734 73.311 92.6225 66.422 89.2305 61.1826L51.9795 3.65138C48.8266 -1.21715 41.7017 -1.2171 38.5488 3.65138L1.29785 61.1826L1.1416 61.4336C-1.97811 66.6395 1.65227 73.3148 7.71777 73.5254L8.0127 73.5303H13.998V136L14.0088 136.412C14.2165 140.502 17.4964 143.783 21.5869 143.99L21.998 144H0V1.07981e-05H91V144Z"
                        fill="#190f4e"
                      ></path>
                      <mask id="path-2-inside-1_arrow" fill="white">
                        <path d="M38.5487 3.65179C41.7015 -1.21727 48.8266 -1.21726 51.9794 3.65179L89.2304 61.183C92.6766 66.5057 88.8563 73.5303 82.5155 73.5307H74.9999V136C74.9997 140.419 71.4181 144 66.9999 144H21.9999C17.5817 144 14.0001 140.419 13.9999 136V73.5307H8.01358C1.67249 73.5307 -2.14855 66.5058 1.29776 61.183L38.5487 3.65179Z"></path>
                      </mask>
                      <path
                        d="M38.5487 3.65179L35.1912 1.47769L35.1911 1.47776L38.5487 3.65179ZM51.9794 3.65179L55.337 1.47776L55.337 1.47768L51.9794 3.65179ZM89.2304 61.183L92.588 59.0091L92.588 59.009L89.2304 61.183ZM82.5155 73.5307V77.5307H82.5158L82.5155 73.5307ZM74.9999 73.5307V69.5307H70.9999V73.5307H74.9999ZM74.9999 136L78.9999 136.001V136H74.9999ZM21.9999 144L21.9999 148H21.9999V144ZM13.9999 136H9.99991V136.001L13.9999 136ZM13.9999 73.5307H17.9999V69.5307H13.9999V73.5307ZM1.29776 61.183L-2.05986 59.009L-2.0599 59.0091L1.29776 61.183ZM38.5487 3.65179L41.9063 5.82589C43.4827 3.39138 47.0454 3.39136 48.6218 5.8259L51.9794 3.65179L55.337 1.47768C50.6077 -5.82588 39.9204 -5.82592 35.1912 1.47769L38.5487 3.65179ZM51.9794 3.65179L48.6218 5.82582L85.8728 63.3571L89.2304 61.183L92.588 59.009L55.337 1.47776L51.9794 3.65179ZM89.2304 61.183L85.8727 63.357C87.5957 66.0182 85.6858 69.5305 82.5153 69.5307L82.5155 73.5307L82.5158 77.5307C92.0268 77.5302 97.7575 66.9931 92.588 59.0091L89.2304 61.183ZM82.5155 73.5307V69.5307H74.9999V73.5307V77.5307H82.5155V73.5307ZM74.9999 73.5307H70.9999V136H74.9999H78.9999V73.5307H74.9999ZM74.9999 136L70.9999 136C70.9998 138.21 69.2088 140 66.9999 140V144V148C73.6274 148 78.9997 142.628 78.9999 136.001L74.9999 136ZM66.9999 144V140H21.9999V144V148H66.9999V144ZM21.9999 144L21.9999 140C19.791 140 18 138.21 17.9999 136L13.9999 136L9.99991 136.001C10.0001 142.628 15.3725 148 21.9999 148L21.9999 144ZM13.9999 136H17.9999V73.5307H13.9999H9.99991V136H13.9999ZM13.9999 73.5307V69.5307H8.01358V73.5307V77.5307H13.9999V73.5307ZM8.01358 73.5307V69.5307C4.84246 69.5307 2.93258 66.0179 4.65541 63.357L1.29776 61.183L-2.0599 59.0091C-7.22968 66.9937 -1.49747 77.5307 8.01358 77.5307V73.5307ZM1.29776 61.183L4.65538 63.3571L41.9064 5.82582L38.5487 3.65179L35.1911 1.47776L-2.05986 59.009L1.29776 61.183Z"
                        fill="#3D7FD8"
                        mask="url(#path-2-inside-1_arrow)"
                      ></path>
                    </g>
                    <defs>
                      <clipPath id="clip0_arrow">
                        <rect width="91" height="144" fill="white"></rect>
                      </clipPath>
                    </defs>
                  </svg>

                  {/* <!-- Wave Container (71% height) --> */}
                  <div className="overflow-hidden absolute inset-0.5 z-0 flex items-end">
                    <div className="flex w-full h-[71%] bg-[#2D86FF] relative mt-5">
                      <svg
                        width="1024"
                        height="94"
                        viewBox="0 0 1024 94"
                        fill="none"
                        className="h-5 w-auto shrink-0 -translate-y-5 -mx-[0.7px]"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g clipPath="url(#clip0_wave1)">
                          <path
                            d="M1024 52.259C1024 52.259 916.437 -1.86688 806.415 48.9824C752.172 74.0524 711.972 91.0646 668.507 93.6554H645.275C606.764 91.3895 563.668 77.8157 505.239 48.9824C366.329 -19.5664 320.544 -13.0063 204.062 48.9824C87.5809 110.971 6.10352e-05 52.259 6.10352e-05 52.259V93.6554H645.275C653.181 94.1206 660.894 94.1092 668.507 93.6554H1024V52.259Z"
                            fill="#A0C8FF"
                          ></path>
                          <path
                            d="M217.585 49.3136C107.563 -1.55102 0 52.5912 0 52.5912V94H1024V52.5912C1024 52.5912 936.419 111.321 819.938 49.3136C703.456 -12.6938 670.579 -17.471 518.761 49.3136C366.944 116.098 327.606 100.178 217.585 49.3136Z"
                            fill="#2D86FF"
                          ></path>
                        </g>
                        <defs>
                          <clipPath id="clip0_wave1">
                            <rect width="1024" height="94" fill="white"></rect>
                          </clipPath>
                        </defs>
                      </svg>
                      {/* <!-- Duplicate for seamless pattern --> */}
                      <svg
                        width="1024"
                        height="94"
                        viewBox="0 0 1024 94"
                        fill="none"
                        className="h-5 w-auto shrink-0 -translate-y-5 -mx-[0.7px]"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g clipPath="url(#clip0_wave2)">
                          <path
                            d="M1024 52.259C1024 52.259 916.437 -1.86688 806.415 48.9824C752.172 74.0524 711.972 91.0646 668.507 93.6554H645.275C606.764 91.3895 563.668 77.8157 505.239 48.9824C366.329 -19.5664 320.544 -13.0063 204.062 48.9824C87.5809 110.971 6.10352e-05 52.259 6.10352e-05 52.259V93.6554H645.275C653.181 94.1206 660.894 94.1092 668.507 93.6554H1024V52.259Z"
                            fill="#A0C8FF"
                          ></path>
                          <path
                            d="M217.585 49.3136C107.563 -1.55102 0 52.5912 0 52.5912V94H1024V52.5912C1024 52.5912 936.419 111.321 819.938 49.3136C703.456 -12.6938 670.579 -17.471 518.761 49.3136C366.944 116.098 327.606 100.178 217.585 49.3136Z"
                            fill="#2D86FF"
                          ></path>
                        </g>
                        <defs>
                          <clipPath id="clip0_wave2">
                            <rect width="1024" height="94" fill="white"></rect>
                          </clipPath>
                        </defs>
                      </svg>
                    </div>
                  </div>
                </div>

                <div className="inline-flex flex-col">
                  <div className="lg:text-5xl md:text-3xl text-2xl italic font-bold text-white">
                    71%
                  </div>
                  <div className="lg:text-xl md:text-lg sm:text-sm text-xs italic md:font-bold font-semibold text-white text-balance">
                    Increase in Patient Appointment
                  </div>
                </div>
              </div>
              <div className="flex items-end gap-4">
                <div className="lg:w-24 md:w-20 w-14 relative overflow-hidden shrink-0">
                  {/* <!-- Arrow SVG --> */}
                  <svg
                    width="91"
                    height="144"
                    viewBox="0 0 91 144"
                    className="size-full relative z-10"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0_arrow)">
                      <path
                        d="M91 144H66.998L67.4102 143.99C71.5003 143.783 74.7796 140.502 74.9873 136.412L74.998 136V73.5303H82.5146L82.8105 73.5254C88.9734 73.311 92.6225 66.422 89.2305 61.1826L51.9795 3.65138C48.8266 -1.21715 41.7017 -1.2171 38.5488 3.65138L1.29785 61.1826L1.1416 61.4336C-1.97811 66.6395 1.65227 73.3148 7.71777 73.5254L8.0127 73.5303H13.998V136L14.0088 136.412C14.2165 140.502 17.4964 143.783 21.5869 143.99L21.998 144H0V1.07981e-05H91V144Z"
                        fill="#190f4e"
                      ></path>
                      <mask id="path-2-inside-1_arrow" fill="white">
                        <path d="M38.5487 3.65179C41.7015 -1.21727 48.8266 -1.21726 51.9794 3.65179L89.2304 61.183C92.6766 66.5057 88.8563 73.5303 82.5155 73.5307H74.9999V136C74.9997 140.419 71.4181 144 66.9999 144H21.9999C17.5817 144 14.0001 140.419 13.9999 136V73.5307H8.01358C1.67249 73.5307 -2.14855 66.5058 1.29776 61.183L38.5487 3.65179Z"></path>
                      </mask>
                      <path
                        d="M38.5487 3.65179L35.1912 1.47769L35.1911 1.47776L38.5487 3.65179ZM51.9794 3.65179L55.337 1.47776L55.337 1.47768L51.9794 3.65179ZM89.2304 61.183L92.588 59.0091L92.588 59.009L89.2304 61.183ZM82.5155 73.5307V77.5307H82.5158L82.5155 73.5307ZM74.9999 73.5307V69.5307H70.9999V73.5307H74.9999ZM74.9999 136L78.9999 136.001V136H74.9999ZM21.9999 144L21.9999 148H21.9999V144ZM13.9999 136H9.99991V136.001L13.9999 136ZM13.9999 73.5307H17.9999V69.5307H13.9999V73.5307ZM1.29776 61.183L-2.05986 59.009L-2.0599 59.0091L1.29776 61.183ZM38.5487 3.65179L41.9063 5.82589C43.4827 3.39138 47.0454 3.39136 48.6218 5.8259L51.9794 3.65179L55.337 1.47768C50.6077 -5.82588 39.9204 -5.82592 35.1912 1.47769L38.5487 3.65179ZM51.9794 3.65179L48.6218 5.82582L85.8728 63.3571L89.2304 61.183L92.588 59.009L55.337 1.47776L51.9794 3.65179ZM89.2304 61.183L85.8727 63.357C87.5957 66.0182 85.6858 69.5305 82.5153 69.5307L82.5155 73.5307L82.5158 77.5307C92.0268 77.5302 97.7575 66.9931 92.588 59.0091L89.2304 61.183ZM82.5155 73.5307V69.5307H74.9999V73.5307V77.5307H82.5155V73.5307ZM74.9999 73.5307H70.9999V136H74.9999H78.9999V73.5307H74.9999ZM74.9999 136L70.9999 136C70.9998 138.21 69.2088 140 66.9999 140V144V148C73.6274 148 78.9997 142.628 78.9999 136.001L74.9999 136ZM66.9999 144V140H21.9999V144V148H66.9999V144ZM21.9999 144L21.9999 140C19.791 140 18 138.21 17.9999 136L13.9999 136L9.99991 136.001C10.0001 142.628 15.3725 148 21.9999 148L21.9999 144ZM13.9999 136H17.9999V73.5307H13.9999H9.99991V136H13.9999ZM13.9999 73.5307V69.5307H8.01358V73.5307V77.5307H13.9999V73.5307ZM8.01358 73.5307V69.5307C4.84246 69.5307 2.93258 66.0179 4.65541 63.357L1.29776 61.183L-2.0599 59.0091C-7.22968 66.9937 -1.49747 77.5307 8.01358 77.5307V73.5307ZM1.29776 61.183L4.65538 63.3571L41.9064 5.82582L38.5487 3.65179L35.1911 1.47776L-2.05986 59.009L1.29776 61.183Z"
                        fill="#3D7FD8"
                        mask="url(#path-2-inside-1_arrow)"
                      ></path>
                    </g>
                    <defs>
                      <clipPath id="clip0_arrow">
                        <rect width="91" height="144" fill="white"></rect>
                      </clipPath>
                    </defs>
                  </svg>

                  {/* <!-- Wave Container (71% height) --> */}
                  <div className="overflow-hidden absolute inset-0.5 z-0 flex items-end">
                    <div className="flex w-full h-[71%] bg-[#2D86FF] relative mt-5">
                      <svg
                        width="1024"
                        height="94"
                        viewBox="0 0 1024 94"
                        fill="none"
                        className="h-5 w-auto shrink-0 -translate-y-5 -mx-[0.7px]"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g clipPath="url(#clip0_wave1)">
                          <path
                            d="M1024 52.259C1024 52.259 916.437 -1.86688 806.415 48.9824C752.172 74.0524 711.972 91.0646 668.507 93.6554H645.275C606.764 91.3895 563.668 77.8157 505.239 48.9824C366.329 -19.5664 320.544 -13.0063 204.062 48.9824C87.5809 110.971 6.10352e-05 52.259 6.10352e-05 52.259V93.6554H645.275C653.181 94.1206 660.894 94.1092 668.507 93.6554H1024V52.259Z"
                            fill="#A0C8FF"
                          ></path>
                          <path
                            d="M217.585 49.3136C107.563 -1.55102 0 52.5912 0 52.5912V94H1024V52.5912C1024 52.5912 936.419 111.321 819.938 49.3136C703.456 -12.6938 670.579 -17.471 518.761 49.3136C366.944 116.098 327.606 100.178 217.585 49.3136Z"
                            fill="#2D86FF"
                          ></path>
                        </g>
                        <defs>
                          <clipPath id="clip0_wave1">
                            <rect width="1024" height="94" fill="white"></rect>
                          </clipPath>
                        </defs>
                      </svg>
                      {/* <!-- Duplicate for seamless pattern --> */}
                      <svg
                        width="1024"
                        height="94"
                        viewBox="0 0 1024 94"
                        fill="none"
                        className="h-5 w-auto shrink-0 -translate-y-5 -mx-[0.7px]"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g clipPath="url(#clip0_wave2)">
                          <path
                            d="M1024 52.259C1024 52.259 916.437 -1.86688 806.415 48.9824C752.172 74.0524 711.972 91.0646 668.507 93.6554H645.275C606.764 91.3895 563.668 77.8157 505.239 48.9824C366.329 -19.5664 320.544 -13.0063 204.062 48.9824C87.5809 110.971 6.10352e-05 52.259 6.10352e-05 52.259V93.6554H645.275C653.181 94.1206 660.894 94.1092 668.507 93.6554H1024V52.259Z"
                            fill="#A0C8FF"
                          ></path>
                          <path
                            d="M217.585 49.3136C107.563 -1.55102 0 52.5912 0 52.5912V94H1024V52.5912C1024 52.5912 936.419 111.321 819.938 49.3136C703.456 -12.6938 670.579 -17.471 518.761 49.3136C366.944 116.098 327.606 100.178 217.585 49.3136Z"
                            fill="#2D86FF"
                          ></path>
                        </g>
                        <defs>
                          <clipPath id="clip0_wave2">
                            <rect width="1024" height="94" fill="white"></rect>
                          </clipPath>
                        </defs>
                      </svg>
                    </div>
                  </div>
                </div>

                <div className="inline-flex flex-col">
                  <div className="lg:text-5xl md:text-3xl text-2xl italic font-bold text-white">
                    71%
                  </div>
                  <div className="lg:text-xl md:text-lg sm:text-sm text-xs italic md:font-bold font-semibold text-white text-balance">
                    Increase in Patient Appointment
                  </div>
                </div>
              </div>
              <div className="flex items-end gap-4">
                <div className="lg:w-24 md:w-20 w-14 relative overflow-hidden shrink-0">
                  {/* <!-- Arrow SVG --> */}
                  <svg
                    width="91"
                    height="144"
                    viewBox="0 0 91 144"
                    className="size-full relative z-10"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0_arrow)">
                      <path
                        d="M91 144H66.998L67.4102 143.99C71.5003 143.783 74.7796 140.502 74.9873 136.412L74.998 136V73.5303H82.5146L82.8105 73.5254C88.9734 73.311 92.6225 66.422 89.2305 61.1826L51.9795 3.65138C48.8266 -1.21715 41.7017 -1.2171 38.5488 3.65138L1.29785 61.1826L1.1416 61.4336C-1.97811 66.6395 1.65227 73.3148 7.71777 73.5254L8.0127 73.5303H13.998V136L14.0088 136.412C14.2165 140.502 17.4964 143.783 21.5869 143.99L21.998 144H0V1.07981e-05H91V144Z"
                        fill="#190f4e"
                      ></path>
                      <mask id="path-2-inside-1_arrow" fill="white">
                        <path d="M38.5487 3.65179C41.7015 -1.21727 48.8266 -1.21726 51.9794 3.65179L89.2304 61.183C92.6766 66.5057 88.8563 73.5303 82.5155 73.5307H74.9999V136C74.9997 140.419 71.4181 144 66.9999 144H21.9999C17.5817 144 14.0001 140.419 13.9999 136V73.5307H8.01358C1.67249 73.5307 -2.14855 66.5058 1.29776 61.183L38.5487 3.65179Z"></path>
                      </mask>
                      <path
                        d="M38.5487 3.65179L35.1912 1.47769L35.1911 1.47776L38.5487 3.65179ZM51.9794 3.65179L55.337 1.47776L55.337 1.47768L51.9794 3.65179ZM89.2304 61.183L92.588 59.0091L92.588 59.009L89.2304 61.183ZM82.5155 73.5307V77.5307H82.5158L82.5155 73.5307ZM74.9999 73.5307V69.5307H70.9999V73.5307H74.9999ZM74.9999 136L78.9999 136.001V136H74.9999ZM21.9999 144L21.9999 148H21.9999V144ZM13.9999 136H9.99991V136.001L13.9999 136ZM13.9999 73.5307H17.9999V69.5307H13.9999V73.5307ZM1.29776 61.183L-2.05986 59.009L-2.0599 59.0091L1.29776 61.183ZM38.5487 3.65179L41.9063 5.82589C43.4827 3.39138 47.0454 3.39136 48.6218 5.8259L51.9794 3.65179L55.337 1.47768C50.6077 -5.82588 39.9204 -5.82592 35.1912 1.47769L38.5487 3.65179ZM51.9794 3.65179L48.6218 5.82582L85.8728 63.3571L89.2304 61.183L92.588 59.009L55.337 1.47776L51.9794 3.65179ZM89.2304 61.183L85.8727 63.357C87.5957 66.0182 85.6858 69.5305 82.5153 69.5307L82.5155 73.5307L82.5158 77.5307C92.0268 77.5302 97.7575 66.9931 92.588 59.0091L89.2304 61.183ZM82.5155 73.5307V69.5307H74.9999V73.5307V77.5307H82.5155V73.5307ZM74.9999 73.5307H70.9999V136H74.9999H78.9999V73.5307H74.9999ZM74.9999 136L70.9999 136C70.9998 138.21 69.2088 140 66.9999 140V144V148C73.6274 148 78.9997 142.628 78.9999 136.001L74.9999 136ZM66.9999 144V140H21.9999V144V148H66.9999V144ZM21.9999 144L21.9999 140C19.791 140 18 138.21 17.9999 136L13.9999 136L9.99991 136.001C10.0001 142.628 15.3725 148 21.9999 148L21.9999 144ZM13.9999 136H17.9999V73.5307H13.9999H9.99991V136H13.9999ZM13.9999 73.5307V69.5307H8.01358V73.5307V77.5307H13.9999V73.5307ZM8.01358 73.5307V69.5307C4.84246 69.5307 2.93258 66.0179 4.65541 63.357L1.29776 61.183L-2.0599 59.0091C-7.22968 66.9937 -1.49747 77.5307 8.01358 77.5307V73.5307ZM1.29776 61.183L4.65538 63.3571L41.9064 5.82582L38.5487 3.65179L35.1911 1.47776L-2.05986 59.009L1.29776 61.183Z"
                        fill="#3D7FD8"
                        mask="url(#path-2-inside-1_arrow)"
                      ></path>
                    </g>
                    <defs>
                      <clipPath id="clip0_arrow">
                        <rect width="91" height="144" fill="white"></rect>
                      </clipPath>
                    </defs>
                  </svg>

                  {/* <!-- Wave Container (71% height) --> */}
                  <div className="overflow-hidden absolute inset-0.5 z-0 flex items-end">
                    <div className="flex w-full h-[71%] bg-[#2D86FF] relative mt-5">
                      <svg
                        width="1024"
                        height="94"
                        viewBox="0 0 1024 94"
                        fill="none"
                        className="h-5 w-auto shrink-0 -translate-y-5 -mx-[0.7px]"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g clipPath="url(#clip0_wave1)">
                          <path
                            d="M1024 52.259C1024 52.259 916.437 -1.86688 806.415 48.9824C752.172 74.0524 711.972 91.0646 668.507 93.6554H645.275C606.764 91.3895 563.668 77.8157 505.239 48.9824C366.329 -19.5664 320.544 -13.0063 204.062 48.9824C87.5809 110.971 6.10352e-05 52.259 6.10352e-05 52.259V93.6554H645.275C653.181 94.1206 660.894 94.1092 668.507 93.6554H1024V52.259Z"
                            fill="#A0C8FF"
                          ></path>
                          <path
                            d="M217.585 49.3136C107.563 -1.55102 0 52.5912 0 52.5912V94H1024V52.5912C1024 52.5912 936.419 111.321 819.938 49.3136C703.456 -12.6938 670.579 -17.471 518.761 49.3136C366.944 116.098 327.606 100.178 217.585 49.3136Z"
                            fill="#2D86FF"
                          ></path>
                        </g>
                        <defs>
                          <clipPath id="clip0_wave1">
                            <rect width="1024" height="94" fill="white"></rect>
                          </clipPath>
                        </defs>
                      </svg>
                      {/* <!-- Duplicate for seamless pattern --> */}
                      <svg
                        width="1024"
                        height="94"
                        viewBox="0 0 1024 94"
                        fill="none"
                        className="h-5 w-auto shrink-0 -translate-y-5 -mx-[0.7px]"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g clipPath="url(#clip0_wave2)">
                          <path
                            d="M1024 52.259C1024 52.259 916.437 -1.86688 806.415 48.9824C752.172 74.0524 711.972 91.0646 668.507 93.6554H645.275C606.764 91.3895 563.668 77.8157 505.239 48.9824C366.329 -19.5664 320.544 -13.0063 204.062 48.9824C87.5809 110.971 6.10352e-05 52.259 6.10352e-05 52.259V93.6554H645.275C653.181 94.1206 660.894 94.1092 668.507 93.6554H1024V52.259Z"
                            fill="#A0C8FF"
                          ></path>
                          <path
                            d="M217.585 49.3136C107.563 -1.55102 0 52.5912 0 52.5912V94H1024V52.5912C1024 52.5912 936.419 111.321 819.938 49.3136C703.456 -12.6938 670.579 -17.471 518.761 49.3136C366.944 116.098 327.606 100.178 217.585 49.3136Z"
                            fill="#2D86FF"
                          ></path>
                        </g>
                        <defs>
                          <clipPath id="clip0_wave2">
                            <rect width="1024" height="94" fill="white"></rect>
                          </clipPath>
                        </defs>
                      </svg>
                    </div>
                  </div>
                </div>

                <div className="inline-flex flex-col">
                  <div className="lg:text-5xl md:text-3xl text-2xl italic font-bold text-white">
                    71%
                  </div>
                  <div className="lg:text-xl md:text-lg sm:text-sm text-xs italic md:font-bold font-semibold text-white text-balance">
                    Increase in Patient Appointment
                  </div>
                </div>
              </div>
              <div className="flex items-end gap-4">
                <div className="lg:w-24 md:w-20 w-14 relative overflow-hidden shrink-0">
                  {/* <!-- Arrow SVG --> */}
                  <svg
                    width="91"
                    height="144"
                    viewBox="0 0 91 144"
                    className="size-full relative z-10"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0_arrow)">
                      <path
                        d="M91 144H66.998L67.4102 143.99C71.5003 143.783 74.7796 140.502 74.9873 136.412L74.998 136V73.5303H82.5146L82.8105 73.5254C88.9734 73.311 92.6225 66.422 89.2305 61.1826L51.9795 3.65138C48.8266 -1.21715 41.7017 -1.2171 38.5488 3.65138L1.29785 61.1826L1.1416 61.4336C-1.97811 66.6395 1.65227 73.3148 7.71777 73.5254L8.0127 73.5303H13.998V136L14.0088 136.412C14.2165 140.502 17.4964 143.783 21.5869 143.99L21.998 144H0V1.07981e-05H91V144Z"
                        fill="#190f4e"
                      ></path>
                      <mask id="path-2-inside-1_arrow" fill="white">
                        <path d="M38.5487 3.65179C41.7015 -1.21727 48.8266 -1.21726 51.9794 3.65179L89.2304 61.183C92.6766 66.5057 88.8563 73.5303 82.5155 73.5307H74.9999V136C74.9997 140.419 71.4181 144 66.9999 144H21.9999C17.5817 144 14.0001 140.419 13.9999 136V73.5307H8.01358C1.67249 73.5307 -2.14855 66.5058 1.29776 61.183L38.5487 3.65179Z"></path>
                      </mask>
                      <path
                        d="M38.5487 3.65179L35.1912 1.47769L35.1911 1.47776L38.5487 3.65179ZM51.9794 3.65179L55.337 1.47776L55.337 1.47768L51.9794 3.65179ZM89.2304 61.183L92.588 59.0091L92.588 59.009L89.2304 61.183ZM82.5155 73.5307V77.5307H82.5158L82.5155 73.5307ZM74.9999 73.5307V69.5307H70.9999V73.5307H74.9999ZM74.9999 136L78.9999 136.001V136H74.9999ZM21.9999 144L21.9999 148H21.9999V144ZM13.9999 136H9.99991V136.001L13.9999 136ZM13.9999 73.5307H17.9999V69.5307H13.9999V73.5307ZM1.29776 61.183L-2.05986 59.009L-2.0599 59.0091L1.29776 61.183ZM38.5487 3.65179L41.9063 5.82589C43.4827 3.39138 47.0454 3.39136 48.6218 5.8259L51.9794 3.65179L55.337 1.47768C50.6077 -5.82588 39.9204 -5.82592 35.1912 1.47769L38.5487 3.65179ZM51.9794 3.65179L48.6218 5.82582L85.8728 63.3571L89.2304 61.183L92.588 59.009L55.337 1.47776L51.9794 3.65179ZM89.2304 61.183L85.8727 63.357C87.5957 66.0182 85.6858 69.5305 82.5153 69.5307L82.5155 73.5307L82.5158 77.5307C92.0268 77.5302 97.7575 66.9931 92.588 59.0091L89.2304 61.183ZM82.5155 73.5307V69.5307H74.9999V73.5307V77.5307H82.5155V73.5307ZM74.9999 73.5307H70.9999V136H74.9999H78.9999V73.5307H74.9999ZM74.9999 136L70.9999 136C70.9998 138.21 69.2088 140 66.9999 140V144V148C73.6274 148 78.9997 142.628 78.9999 136.001L74.9999 136ZM66.9999 144V140H21.9999V144V148H66.9999V144ZM21.9999 144L21.9999 140C19.791 140 18 138.21 17.9999 136L13.9999 136L9.99991 136.001C10.0001 142.628 15.3725 148 21.9999 148L21.9999 144ZM13.9999 136H17.9999V73.5307H13.9999H9.99991V136H13.9999ZM13.9999 73.5307V69.5307H8.01358V73.5307V77.5307H13.9999V73.5307ZM8.01358 73.5307V69.5307C4.84246 69.5307 2.93258 66.0179 4.65541 63.357L1.29776 61.183L-2.0599 59.0091C-7.22968 66.9937 -1.49747 77.5307 8.01358 77.5307V73.5307ZM1.29776 61.183L4.65538 63.3571L41.9064 5.82582L38.5487 3.65179L35.1911 1.47776L-2.05986 59.009L1.29776 61.183Z"
                        fill="#3D7FD8"
                        mask="url(#path-2-inside-1_arrow)"
                      ></path>
                    </g>
                    <defs>
                      <clipPath id="clip0_arrow">
                        <rect width="91" height="144" fill="white"></rect>
                      </clipPath>
                    </defs>
                  </svg>

                  {/* <!-- Wave Container (71% height) --> */}
                  <div className="overflow-hidden absolute inset-0.5 z-0 flex items-end">
                    <div className="flex w-full h-[71%] bg-[#2D86FF] relative mt-5">
                      <svg
                        width="1024"
                        height="94"
                        viewBox="0 0 1024 94"
                        fill="none"
                        className="h-5 w-auto shrink-0 -translate-y-5 -mx-[0.7px]"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g clipPath="url(#clip0_wave1)">
                          <path
                            d="M1024 52.259C1024 52.259 916.437 -1.86688 806.415 48.9824C752.172 74.0524 711.972 91.0646 668.507 93.6554H645.275C606.764 91.3895 563.668 77.8157 505.239 48.9824C366.329 -19.5664 320.544 -13.0063 204.062 48.9824C87.5809 110.971 6.10352e-05 52.259 6.10352e-05 52.259V93.6554H645.275C653.181 94.1206 660.894 94.1092 668.507 93.6554H1024V52.259Z"
                            fill="#A0C8FF"
                          ></path>
                          <path
                            d="M217.585 49.3136C107.563 -1.55102 0 52.5912 0 52.5912V94H1024V52.5912C1024 52.5912 936.419 111.321 819.938 49.3136C703.456 -12.6938 670.579 -17.471 518.761 49.3136C366.944 116.098 327.606 100.178 217.585 49.3136Z"
                            fill="#2D86FF"
                          ></path>
                        </g>
                        <defs>
                          <clipPath id="clip0_wave1">
                            <rect width="1024" height="94" fill="white"></rect>
                          </clipPath>
                        </defs>
                      </svg>
                      {/* <!-- Duplicate for seamless pattern --> */}
                      <svg
                        width="1024"
                        height="94"
                        viewBox="0 0 1024 94"
                        fill="none"
                        className="h-5 w-auto shrink-0 -translate-y-5 -mx-[0.7px]"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g clipPath="url(#clip0_wave2)">
                          <path
                            d="M1024 52.259C1024 52.259 916.437 -1.86688 806.415 48.9824C752.172 74.0524 711.972 91.0646 668.507 93.6554H645.275C606.764 91.3895 563.668 77.8157 505.239 48.9824C366.329 -19.5664 320.544 -13.0063 204.062 48.9824C87.5809 110.971 6.10352e-05 52.259 6.10352e-05 52.259V93.6554H645.275C653.181 94.1206 660.894 94.1092 668.507 93.6554H1024V52.259Z"
                            fill="#A0C8FF"
                          ></path>
                          <path
                            d="M217.585 49.3136C107.563 -1.55102 0 52.5912 0 52.5912V94H1024V52.5912C1024 52.5912 936.419 111.321 819.938 49.3136C703.456 -12.6938 670.579 -17.471 518.761 49.3136C366.944 116.098 327.606 100.178 217.585 49.3136Z"
                            fill="#2D86FF"
                          ></path>
                        </g>
                        <defs>
                          <clipPath id="clip0_wave2">
                            <rect width="1024" height="94" fill="white"></rect>
                          </clipPath>
                        </defs>
                      </svg>
                    </div>
                  </div>
                </div>

                <div className="inline-flex flex-col">
                  <div className="lg:text-5xl md:text-3xl text-2xl italic font-bold text-white">
                    71%
                  </div>
                  <div className="lg:text-xl md:text-lg sm:text-sm text-xs italic md:font-bold font-semibold text-white text-balance">
                    Increase in Patient Appointment
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Result;
