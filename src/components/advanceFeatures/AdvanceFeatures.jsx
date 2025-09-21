import React from "react";
import useEmblaCarousel from "embla-carousel-react";
import Link from "next/link";
import Image from "next/image";
import EmblaCarousel from "../emblaCarousel/EmblaCarousel";
import SchoolRealTimeAttendance from "../../../public/images/schoolRealTimeAttendance.webp";

const AdvanceFeatures = () => {
  return (
    <>
      <section className="keySection group/key w-full relative bg-white py-8">
        <div className="container mx-auto xl:py-4 lg:py-3 py-4 px-4 lg:px-6 xl:px-8">
          <div className="flex flex-col">
            <h2 class="w-full  2xl:text-4xl xl:text-4xl lg:text-3xl md:text-3xl sm:text-2xl text-2xl font-bold text-[#393A8C] text-balance relative z-10 text-center md:pb-12 pb-4">
              AI -Powered Advanced Features of Edoovi App
            </h2>
            <div class="w-full max-sm:px-4 flex items-center justify-center ">
              <div class="inline-flex items-center justify-center gap-1 rounded-full bg-white shadow-[0px_3px_34px_0px_#0000001F]">
                <label
                  htmlFor="panel1"
                  class="md:py-4 py-3 lg:px-12 md:px-10 sm:px-6 px-3 rounded-full xl:text-xl lg:text-lg md:text-base sm:text-sm text-xs font-semibold text-[#454444] cursor-pointer group-has-[#panel1:checked]/key:bg-[#2D86FF]  group-has-[#panel1:checked]/key:text-white"
                >
                  <h3>
                    School<span class="max-sm:hidden">App</span>
                  </h3>
                </label>
                <label
                  htmlFor="panel2"
                  class="md:py-4 py-3 lg:px-12 md:px-10 sm:px-6 px-3 rounded-full xl:text-xl lg:text-lg md:text-base sm:text-sm text-xs font-semibold text-[#454444] cursor-pointer group-has-[#panel2:checked]/key:bg-[#2D86FF]  group-has-[#panel2:checked]/key:text-white"
                >
                  <h3>
                    Student Parent <span class="max-sm:hidden">App</span>
                  </h3>
                </label>
              </div>
            </div>
            <div class="w-full items-start has-[#panel1:checked]:flex hidden md:pt-16 pt-8">
              <input
                type="radio"
                name="panel"
                id="panel1"
                class="hidden"
                defaultChecked
              />
              {/* desktop view */}
              <div className="md:grid xl:grid-cols-3 md:grid-cols-3 hidden">
                <div className="md:flex hidden flex-col gap-y-12 ">
                  <div className="group w-full userPanel1">
                    <label
                      htmlFor="userPanel1"
                      class="md:!w-full cursor-pointer h-full max-md:!flex max-md:!flex-col "
                    >
                      <input
                        type="radio"
                        name="userPanel"
                        id="userPanel1"
                        class="hidden"
                        defaultChecked
                      />
                      <div class="flex flex-row  group-has-[:checked]:md:flex-col gap-3">
                        <span className="size-16 shrink-0 flex justify-center items-center bg-white group-has-[:checked]:md:bg-[#2D86FF] shadow-md rounded-xl p-2">
                          <svg
                            className="text-[#393A8C] group-has-[:checked]:md:text-white"
                            xmlns="http://www.w3.org/2000/svg"
                            width="30"
                            height="28"
                            viewBox="0 0 30 28"
                            fill="none"
                          >
                            <path
                              d="M0.667969 27.3333L7.33464 8.66667L19.3346 20.6667L0.667969 27.3333ZM5.06797 22.9333L14.468 19.6L8.4013 13.5333L5.06797 22.9333ZM17.4013 14.7333L16.0013 13.3333L23.468 5.86667C24.1791 5.15556 25.0346 4.8 26.0346 4.8C27.0346 4.8 27.8902 5.15556 28.6013 5.86667L29.4013 6.66667L28.0013 8.06667L27.2013 7.26667C26.8902 6.95556 26.5013 6.8 26.0346 6.8C25.568 6.8 25.1791 6.95556 24.868 7.26667L17.4013 14.7333ZM12.068 9.4L10.668 8L11.468 7.2C11.7791 6.88889 11.9346 6.51111 11.9346 6.06667C11.9346 5.62222 11.7791 5.24444 11.468 4.93333L10.6013 4.06667L12.0013 2.66667L12.868 3.53333C13.5791 4.24444 13.9346 5.08889 13.9346 6.06667C13.9346 7.04445 13.5791 7.88889 12.868 8.6L12.068 9.4ZM14.7346 12.0667L13.3346 10.6667L18.1346 5.86667C18.4457 5.55556 18.6013 5.16667 18.6013 4.7C18.6013 4.23333 18.4457 3.84444 18.1346 3.53333L16.0013 1.4L17.4013 0L19.5346 2.13333C20.2457 2.84444 20.6013 3.7 20.6013 4.7C20.6013 5.7 20.2457 6.55556 19.5346 7.26667L14.7346 12.0667ZM20.068 17.4L18.668 16L20.8013 13.8667C21.5124 13.1556 22.368 12.8 23.368 12.8C24.368 12.8 25.2235 13.1556 25.9346 13.8667L28.068 16L26.668 17.4L24.5346 15.2667C24.2235 14.9556 23.8346 14.8 23.368 14.8C22.9013 14.8 22.5124 14.9556 22.2013 15.2667L20.068 17.4Z"
                              fill="currentColor"
                            />
                          </svg>
                        </span>
                        <div className="flex flex-col gap-2">
                          <div class="group-has-[:checked]:md:text-3xl xl:text-2xl lg:text-xl text-lg font-semibold text-[#393A8C] group-has-[:checked]:md:text-[#2D86FF]">
                            Event & Holiday Generator
                          </div>
                          <div className="lg:text-base text-sm text-[#363637] group-has-[:checked]:md:block hidden">
                            Monitor Collected and pending fees with custom date
                            range selection, Admin also send reminders to
                            student who did not paid their fees on time
                          </div>
                        </div>
                      </div>
                    </label>
                  </div>
                  <div className="group w-full userPanel2">
                    <label
                      htmlFor="userPanel2"
                      class="md:!w-full cursor-pointer h-full max-md:!flex max-md:!flex-col "
                    >
                      <input
                        type="radio"
                        name="userPanel"
                        id="userPanel2"
                        class="hidden"
                      />
                      <div class="flex flex-row  group-has-[:checked]:md:flex-col gap-3">
                        <span className="size-16 shrink-0 flex justify-center items-center bg-white group-has-[:checked]:md:bg-[#2D86FF] shadow-md rounded-xl p-2">
                          <svg
                            className="text-[#393A8C] group-has-[:checked]:md:text-white"
                            xmlns="http://www.w3.org/2000/svg"
                            width="30"
                            height="28"
                            viewBox="0 0 30 28"
                            fill="none"
                          >
                            <path
                              d="M0.667969 27.3333L7.33464 8.66667L19.3346 20.6667L0.667969 27.3333ZM5.06797 22.9333L14.468 19.6L8.4013 13.5333L5.06797 22.9333ZM17.4013 14.7333L16.0013 13.3333L23.468 5.86667C24.1791 5.15556 25.0346 4.8 26.0346 4.8C27.0346 4.8 27.8902 5.15556 28.6013 5.86667L29.4013 6.66667L28.0013 8.06667L27.2013 7.26667C26.8902 6.95556 26.5013 6.8 26.0346 6.8C25.568 6.8 25.1791 6.95556 24.868 7.26667L17.4013 14.7333ZM12.068 9.4L10.668 8L11.468 7.2C11.7791 6.88889 11.9346 6.51111 11.9346 6.06667C11.9346 5.62222 11.7791 5.24444 11.468 4.93333L10.6013 4.06667L12.0013 2.66667L12.868 3.53333C13.5791 4.24444 13.9346 5.08889 13.9346 6.06667C13.9346 7.04445 13.5791 7.88889 12.868 8.6L12.068 9.4ZM14.7346 12.0667L13.3346 10.6667L18.1346 5.86667C18.4457 5.55556 18.6013 5.16667 18.6013 4.7C18.6013 4.23333 18.4457 3.84444 18.1346 3.53333L16.0013 1.4L17.4013 0L19.5346 2.13333C20.2457 2.84444 20.6013 3.7 20.6013 4.7C20.6013 5.7 20.2457 6.55556 19.5346 7.26667L14.7346 12.0667ZM20.068 17.4L18.668 16L20.8013 13.8667C21.5124 13.1556 22.368 12.8 23.368 12.8C24.368 12.8 25.2235 13.1556 25.9346 13.8667L28.068 16L26.668 17.4L24.5346 15.2667C24.2235 14.9556 23.8346 14.8 23.368 14.8C22.9013 14.8 22.5124 14.9556 22.2013 15.2667L20.068 17.4Z"
                              fill="currentColor"
                            />
                          </svg>
                        </span>
                        <div className="flex flex-col gap-2">
                          <div class="group-has-[:checked]:md:text-3xl xl:text-2xl lg:text-xl text-lg font-semibold text-[#393A8C] group-has-[:checked]:md:text-[#2D86FF]">
                            Event & Holiday Generator
                          </div>
                          <div className="lg:text-base text-sm text-[#363637] group-has-[:checked]:md:block hidden">
                            Monitor Collected and pending fees with custom date
                            range selection, Admin also send reminders to
                            student who did not paid their fees on time
                          </div>
                        </div>
                      </div>
                    </label>
                  </div>
                  <div className="group w-full userPanel3">
                    <label
                      htmlFor="userPanel3"
                      class="md:!w-full cursor-pointer h-full max-md:!flex max-md:!flex-col "
                    >
                      <input
                        type="radio"
                        name="userPanel"
                        id="userPanel3"
                        class="hidden"
                      />
                      <div class="flex flex-row  group-has-[:checked]:md:flex-col gap-3">
                        <span className="size-16 shrink-0 flex justify-center items-center bg-white group-has-[:checked]:md:bg-[#2D86FF] shadow-md rounded-xl p-2">
                          <svg
                            className="text-[#393A8C] group-has-[:checked]:md:text-white"
                            xmlns="http://www.w3.org/2000/svg"
                            width="30"
                            height="28"
                            viewBox="0 0 30 28"
                            fill="none"
                          >
                            <path
                              d="M0.667969 27.3333L7.33464 8.66667L19.3346 20.6667L0.667969 27.3333ZM5.06797 22.9333L14.468 19.6L8.4013 13.5333L5.06797 22.9333ZM17.4013 14.7333L16.0013 13.3333L23.468 5.86667C24.1791 5.15556 25.0346 4.8 26.0346 4.8C27.0346 4.8 27.8902 5.15556 28.6013 5.86667L29.4013 6.66667L28.0013 8.06667L27.2013 7.26667C26.8902 6.95556 26.5013 6.8 26.0346 6.8C25.568 6.8 25.1791 6.95556 24.868 7.26667L17.4013 14.7333ZM12.068 9.4L10.668 8L11.468 7.2C11.7791 6.88889 11.9346 6.51111 11.9346 6.06667C11.9346 5.62222 11.7791 5.24444 11.468 4.93333L10.6013 4.06667L12.0013 2.66667L12.868 3.53333C13.5791 4.24444 13.9346 5.08889 13.9346 6.06667C13.9346 7.04445 13.5791 7.88889 12.868 8.6L12.068 9.4ZM14.7346 12.0667L13.3346 10.6667L18.1346 5.86667C18.4457 5.55556 18.6013 5.16667 18.6013 4.7C18.6013 4.23333 18.4457 3.84444 18.1346 3.53333L16.0013 1.4L17.4013 0L19.5346 2.13333C20.2457 2.84444 20.6013 3.7 20.6013 4.7C20.6013 5.7 20.2457 6.55556 19.5346 7.26667L14.7346 12.0667ZM20.068 17.4L18.668 16L20.8013 13.8667C21.5124 13.1556 22.368 12.8 23.368 12.8C24.368 12.8 25.2235 13.1556 25.9346 13.8667L28.068 16L26.668 17.4L24.5346 15.2667C24.2235 14.9556 23.8346 14.8 23.368 14.8C22.9013 14.8 22.5124 14.9556 22.2013 15.2667L20.068 17.4Z"
                              fill="currentColor"
                            />
                          </svg>
                        </span>
                        <div className="flex flex-col gap-2">
                          <div class="group-has-[:checked]:md:text-3xl xl:text-2xl lg:text-xl text-lg font-semibold text-[#393A8C] group-has-[:checked]:md:text-[#2D86FF]">
                            Event & Holiday Generator
                          </div>
                          <div className="lg:text-base text-sm text-[#363637] group-has-[:checked]:md:block hidden">
                            Monitor Collected and pending fees with custom date
                            range selection, Admin also send reminders to
                            student who did not paid their fees on time
                          </div>
                        </div>
                      </div>
                    </label>
                  </div>
                  <div className="group w-full userPanel4">
                    <label
                      htmlFor="userPanel4"
                      class="md:!w-full cursor-pointer h-full max-md:!flex max-md:!flex-col "
                    >
                      <input
                        type="radio"
                        name="userPanel"
                        id="userPanel4"
                        class="hidden"
                      />
                      <div class="flex flex-row  group-has-[:checked]:md:flex-col gap-3">
                        <span className="size-16 shrink-0 flex justify-center items-center bg-white group-has-[:checked]:md:bg-[#2D86FF] shadow-md rounded-xl p-2">
                          <svg
                            className="text-[#393A8C] group-has-[:checked]:md:text-white"
                            xmlns="http://www.w3.org/2000/svg"
                            width="30"
                            height="28"
                            viewBox="0 0 30 28"
                            fill="none"
                          >
                            <path
                              d="M0.667969 27.3333L7.33464 8.66667L19.3346 20.6667L0.667969 27.3333ZM5.06797 22.9333L14.468 19.6L8.4013 13.5333L5.06797 22.9333ZM17.4013 14.7333L16.0013 13.3333L23.468 5.86667C24.1791 5.15556 25.0346 4.8 26.0346 4.8C27.0346 4.8 27.8902 5.15556 28.6013 5.86667L29.4013 6.66667L28.0013 8.06667L27.2013 7.26667C26.8902 6.95556 26.5013 6.8 26.0346 6.8C25.568 6.8 25.1791 6.95556 24.868 7.26667L17.4013 14.7333ZM12.068 9.4L10.668 8L11.468 7.2C11.7791 6.88889 11.9346 6.51111 11.9346 6.06667C11.9346 5.62222 11.7791 5.24444 11.468 4.93333L10.6013 4.06667L12.0013 2.66667L12.868 3.53333C13.5791 4.24444 13.9346 5.08889 13.9346 6.06667C13.9346 7.04445 13.5791 7.88889 12.868 8.6L12.068 9.4ZM14.7346 12.0667L13.3346 10.6667L18.1346 5.86667C18.4457 5.55556 18.6013 5.16667 18.6013 4.7C18.6013 4.23333 18.4457 3.84444 18.1346 3.53333L16.0013 1.4L17.4013 0L19.5346 2.13333C20.2457 2.84444 20.6013 3.7 20.6013 4.7C20.6013 5.7 20.2457 6.55556 19.5346 7.26667L14.7346 12.0667ZM20.068 17.4L18.668 16L20.8013 13.8667C21.5124 13.1556 22.368 12.8 23.368 12.8C24.368 12.8 25.2235 13.1556 25.9346 13.8667L28.068 16L26.668 17.4L24.5346 15.2667C24.2235 14.9556 23.8346 14.8 23.368 14.8C22.9013 14.8 22.5124 14.9556 22.2013 15.2667L20.068 17.4Z"
                              fill="currentColor"
                            />
                          </svg>
                        </span>
                        <div className="flex flex-col gap-2">
                          <div class="group-has-[:checked]:md:text-3xl xl:text-2xl lg:text-xl text-lg font-semibold text-[#393A8C] group-has-[:checked]:md:text-[#2D86FF]">
                            Event & Holiday Generator
                          </div>
                          <div className="lg:text-base text-sm text-[#363637] group-has-[:checked]:md:block hidden">
                            Monitor Collected and pending fees with custom date
                            range selection, Admin also send reminders to
                            student who did not paid their fees on time
                          </div>
                        </div>
                      </div>
                    </label>
                  </div>
                </div>
                <div className="key-images md:flex hidden">
                  <Image
                    loading="lazy"
                    fetchPriority="low"
                    src={SchoolRealTimeAttendance}
                    alt="Easy Appointment Booking"
                    title="Easy Appointment Booking"
                    width={375}
                    height={374}
                    class="w-full mx-auto xl:max-w-72 max-w-64  hidden group-has-[#userPanel1:checked]/key:md:block"
                  />
                  <Image
                    loading="lazy"
                    fetchPriority="low"
                    src={SchoolRealTimeAttendance}
                    alt="Easy Appointment Booking"
                    title="Easy Appointment Booking"
                    width={375}
                    height={374}
                    class="w-full mx-auto xl:max-w-72 max-w-64  hidden group-has-[#userPanel2:checked]/key:md:block"
                  />
                  <Image
                    loading="lazy"
                    fetchPriority="low"
                    src={SchoolRealTimeAttendance}
                    alt="Easy Appointment Booking"
                    title="Easy Appointment Booking"
                    width={375}
                    height={374}
                    class="w-full mx-auto xl:max-w-72 max-w-64  hidden group-has-[#userPanel3:checked]/key:md:block"
                  />
                  <Image
                    loading="lazy"
                    fetchPriority="low"
                    src={SchoolRealTimeAttendance}
                    alt="Easy Appointment Booking"
                    title="Easy Appointment Booking"
                    width={375}
                    height={374}
                    class="w-full mx-auto xl:max-w-72 max-w-64  hidden group-has-[#userPanel4:checked]/key:md:block"
                  />
                  <Image
                    loading="lazy"
                    fetchPriority="low"
                    src={SchoolRealTimeAttendance}
                    alt="Easy Appointment Booking"
                    title="Easy Appointment Booking"
                    width={375}
                    height={374}
                    class="w-full mx-auto xl:max-w-72 max-w-64  hidden group-has-[#userPanel5:checked]/key:md:block"
                  />
                  <Image
                    loading="lazy"
                    fetchPriority="low"
                    src={SchoolRealTimeAttendance}
                    alt="Easy Appointment Booking"
                    title="Easy Appointment Booking"
                    width={375}
                    height={374}
                    class="w-full mx-auto xl:max-w-72 max-w-64  hidden group-has-[#userPanel6:checked]/key:md:block"
                  />
                  <Image
                    loading="lazy"
                    fetchPriority="low"
                    src={SchoolRealTimeAttendance}
                    alt="Easy Appointment Booking"
                    title="Easy Appointment Booking"
                    width={375}
                    height={374}
                    class="w-full mx-auto xl:max-w-72 max-w-64  hidden group-has-[#userPanel7:checked]/key:md:block"
                  />
                  <Image
                    loading="lazy"
                    fetchPriority="low"
                    src={SchoolRealTimeAttendance}
                    alt="Easy Appointment Booking"
                    title="Easy Appointment Booking"
                    width={375}
                    height={374}
                    class="w-full mx-auto xl:max-w-72 max-w-64  hidden group-has-[#userPanel8:checked]/key:md:block"
                  />
                </div>
                <div className="md:flex hidden flex-col gap-y-12">
                  <div className="group w-full userPanel5">
                    <label
                      htmlFor="userPanel5"
                      class="md:!w-full cursor-pointer h-full max-md:!flex max-md:!flex-col "
                    >
                      <input
                        type="radio"
                        name="userPanel"
                        id="userPanel5"
                        class="hidden"
                      />
                      <div class="flex flex-row  group-has-[:checked]:md:flex-col gap-3">
                        <span className="size-16 shrink-0 flex justify-center items-center bg-white group-has-[:checked]:md:bg-[#2D86FF] shadow-md rounded-xl p-2">
                          <svg
                            className="text-[#393A8C] group-has-[:checked]:md:text-white"
                            xmlns="http://www.w3.org/2000/svg"
                            width="30"
                            height="28"
                            viewBox="0 0 30 28"
                            fill="none"
                          >
                            <path
                              d="M0.667969 27.3333L7.33464 8.66667L19.3346 20.6667L0.667969 27.3333ZM5.06797 22.9333L14.468 19.6L8.4013 13.5333L5.06797 22.9333ZM17.4013 14.7333L16.0013 13.3333L23.468 5.86667C24.1791 5.15556 25.0346 4.8 26.0346 4.8C27.0346 4.8 27.8902 5.15556 28.6013 5.86667L29.4013 6.66667L28.0013 8.06667L27.2013 7.26667C26.8902 6.95556 26.5013 6.8 26.0346 6.8C25.568 6.8 25.1791 6.95556 24.868 7.26667L17.4013 14.7333ZM12.068 9.4L10.668 8L11.468 7.2C11.7791 6.88889 11.9346 6.51111 11.9346 6.06667C11.9346 5.62222 11.7791 5.24444 11.468 4.93333L10.6013 4.06667L12.0013 2.66667L12.868 3.53333C13.5791 4.24444 13.9346 5.08889 13.9346 6.06667C13.9346 7.04445 13.5791 7.88889 12.868 8.6L12.068 9.4ZM14.7346 12.0667L13.3346 10.6667L18.1346 5.86667C18.4457 5.55556 18.6013 5.16667 18.6013 4.7C18.6013 4.23333 18.4457 3.84444 18.1346 3.53333L16.0013 1.4L17.4013 0L19.5346 2.13333C20.2457 2.84444 20.6013 3.7 20.6013 4.7C20.6013 5.7 20.2457 6.55556 19.5346 7.26667L14.7346 12.0667ZM20.068 17.4L18.668 16L20.8013 13.8667C21.5124 13.1556 22.368 12.8 23.368 12.8C24.368 12.8 25.2235 13.1556 25.9346 13.8667L28.068 16L26.668 17.4L24.5346 15.2667C24.2235 14.9556 23.8346 14.8 23.368 14.8C22.9013 14.8 22.5124 14.9556 22.2013 15.2667L20.068 17.4Z"
                              fill="currentColor"
                            />
                          </svg>
                        </span>
                        <div className="flex flex-col gap-2">
                          <div class="group-has-[:checked]:md:text-3xl xl:text-2xl lg:text-xl text-lg font-semibold text-[#393A8C] group-has-[:checked]:md:text-[#2D86FF]">
                            Event & Holiday Generator
                          </div>
                          <div className="lg:text-base text-sm text-[#363637] group-has-[:checked]:md:block hidden">
                            Monitor Collected and pending fees with custom date
                            range selection, Admin also send reminders to
                            student who did not paid their fees on time
                          </div>
                        </div>
                      </div>
                    </label>
                  </div>
                  <div className="group w-full userPanel6">
                    <label
                      htmlFor="userPanel6"
                      class="md:!w-full cursor-pointer h-full max-md:!flex max-md:!flex-col "
                    >
                      <input
                        type="radio"
                        name="userPanel"
                        id="userPanel6"
                        class="hidden"
                      />
                      <div class="flex flex-row  group-has-[:checked]:md:flex-col gap-3">
                        <span className="size-16 shrink-0 flex justify-center items-center bg-white group-has-[:checked]:md:bg-[#2D86FF] shadow-md rounded-xl p-2">
                          <svg
                            className="text-[#393A8C] group-has-[:checked]:md:text-white"
                            xmlns="http://www.w3.org/2000/svg"
                            width="30"
                            height="28"
                            viewBox="0 0 30 28"
                            fill="none"
                          >
                            <path
                              d="M0.667969 27.3333L7.33464 8.66667L19.3346 20.6667L0.667969 27.3333ZM5.06797 22.9333L14.468 19.6L8.4013 13.5333L5.06797 22.9333ZM17.4013 14.7333L16.0013 13.3333L23.468 5.86667C24.1791 5.15556 25.0346 4.8 26.0346 4.8C27.0346 4.8 27.8902 5.15556 28.6013 5.86667L29.4013 6.66667L28.0013 8.06667L27.2013 7.26667C26.8902 6.95556 26.5013 6.8 26.0346 6.8C25.568 6.8 25.1791 6.95556 24.868 7.26667L17.4013 14.7333ZM12.068 9.4L10.668 8L11.468 7.2C11.7791 6.88889 11.9346 6.51111 11.9346 6.06667C11.9346 5.62222 11.7791 5.24444 11.468 4.93333L10.6013 4.06667L12.0013 2.66667L12.868 3.53333C13.5791 4.24444 13.9346 5.08889 13.9346 6.06667C13.9346 7.04445 13.5791 7.88889 12.868 8.6L12.068 9.4ZM14.7346 12.0667L13.3346 10.6667L18.1346 5.86667C18.4457 5.55556 18.6013 5.16667 18.6013 4.7C18.6013 4.23333 18.4457 3.84444 18.1346 3.53333L16.0013 1.4L17.4013 0L19.5346 2.13333C20.2457 2.84444 20.6013 3.7 20.6013 4.7C20.6013 5.7 20.2457 6.55556 19.5346 7.26667L14.7346 12.0667ZM20.068 17.4L18.668 16L20.8013 13.8667C21.5124 13.1556 22.368 12.8 23.368 12.8C24.368 12.8 25.2235 13.1556 25.9346 13.8667L28.068 16L26.668 17.4L24.5346 15.2667C24.2235 14.9556 23.8346 14.8 23.368 14.8C22.9013 14.8 22.5124 14.9556 22.2013 15.2667L20.068 17.4Z"
                              fill="currentColor"
                            />
                          </svg>
                        </span>
                        <div className="flex flex-col gap-2">
                          <div class="group-has-[:checked]:md:text-3xl xl:text-2xl lg:text-xl text-lg font-semibold text-[#393A8C] group-has-[:checked]:md:text-[#2D86FF]">
                            Event & Holiday Generator
                          </div>
                          <div className="lg:text-base text-sm text-[#363637] group-has-[:checked]:md:block hidden">
                            Monitor Collected and pending fees with custom date
                            range selection, Admin also send reminders to
                            student who did not paid their fees on time
                          </div>
                        </div>
                      </div>
                    </label>
                  </div>
                  <div className="group w-full userPanel7">
                    <label
                      htmlFor="userPanel7"
                      class="md:!w-full cursor-pointer h-full max-md:!flex max-md:!flex-col "
                    >
                      <input
                        type="radio"
                        name="userPanel"
                        id="userPanel7"
                        class="hidden"
                      />
                      <div class="flex flex-row  group-has-[:checked]:md:flex-col gap-3">
                        <span className="size-16 shrink-0 flex justify-center items-center bg-white group-has-[:checked]:md:bg-[#2D86FF] shadow-md rounded-xl p-2">
                          <svg
                            className="text-[#393A8C] group-has-[:checked]:md:text-white"
                            xmlns="http://www.w3.org/2000/svg"
                            width="30"
                            height="28"
                            viewBox="0 0 30 28"
                            fill="none"
                          >
                            <path
                              d="M0.667969 27.3333L7.33464 8.66667L19.3346 20.6667L0.667969 27.3333ZM5.06797 22.9333L14.468 19.6L8.4013 13.5333L5.06797 22.9333ZM17.4013 14.7333L16.0013 13.3333L23.468 5.86667C24.1791 5.15556 25.0346 4.8 26.0346 4.8C27.0346 4.8 27.8902 5.15556 28.6013 5.86667L29.4013 6.66667L28.0013 8.06667L27.2013 7.26667C26.8902 6.95556 26.5013 6.8 26.0346 6.8C25.568 6.8 25.1791 6.95556 24.868 7.26667L17.4013 14.7333ZM12.068 9.4L10.668 8L11.468 7.2C11.7791 6.88889 11.9346 6.51111 11.9346 6.06667C11.9346 5.62222 11.7791 5.24444 11.468 4.93333L10.6013 4.06667L12.0013 2.66667L12.868 3.53333C13.5791 4.24444 13.9346 5.08889 13.9346 6.06667C13.9346 7.04445 13.5791 7.88889 12.868 8.6L12.068 9.4ZM14.7346 12.0667L13.3346 10.6667L18.1346 5.86667C18.4457 5.55556 18.6013 5.16667 18.6013 4.7C18.6013 4.23333 18.4457 3.84444 18.1346 3.53333L16.0013 1.4L17.4013 0L19.5346 2.13333C20.2457 2.84444 20.6013 3.7 20.6013 4.7C20.6013 5.7 20.2457 6.55556 19.5346 7.26667L14.7346 12.0667ZM20.068 17.4L18.668 16L20.8013 13.8667C21.5124 13.1556 22.368 12.8 23.368 12.8C24.368 12.8 25.2235 13.1556 25.9346 13.8667L28.068 16L26.668 17.4L24.5346 15.2667C24.2235 14.9556 23.8346 14.8 23.368 14.8C22.9013 14.8 22.5124 14.9556 22.2013 15.2667L20.068 17.4Z"
                              fill="currentColor"
                            />
                          </svg>
                        </span>
                        <div className="flex flex-col gap-2">
                          <div class="group-has-[:checked]:md:text-3xl xl:text-2xl lg:text-xl text-lg font-semibold text-[#393A8C] group-has-[:checked]:md:text-[#2D86FF]">
                            Event & Holiday Generator
                          </div>
                          <div className="lg:text-base text-sm text-[#363637] group-has-[:checked]:md:block hidden">
                            Monitor Collected and pending fees with custom date
                            range selection, Admin also send reminders to
                            student who did not paid their fees on time
                          </div>
                        </div>
                      </div>
                    </label>
                  </div>
                  <div className="group w-full userPanel8">
                    <label
                      htmlFor="userPanel8"
                      class="md:!w-full cursor-pointer h-full max-md:!flex max-md:!flex-col "
                    >
                      <input
                        type="radio"
                        name="userPanel"
                        id="userPanel8"
                        class="hidden"
                      />
                      <div class="flex flex-row  group-has-[:checked]:md:flex-col gap-3">
                        <span className="size-16 shrink-0 flex justify-center items-center bg-white group-has-[:checked]:md:bg-[#2D86FF] shadow-md rounded-xl p-2">
                          <svg
                            className="text-[#393A8C] group-has-[:checked]:md:text-white"
                            xmlns="http://www.w3.org/2000/svg"
                            width="30"
                            height="28"
                            viewBox="0 0 30 28"
                            fill="none"
                          >
                            <path
                              d="M0.667969 27.3333L7.33464 8.66667L19.3346 20.6667L0.667969 27.3333ZM5.06797 22.9333L14.468 19.6L8.4013 13.5333L5.06797 22.9333ZM17.4013 14.7333L16.0013 13.3333L23.468 5.86667C24.1791 5.15556 25.0346 4.8 26.0346 4.8C27.0346 4.8 27.8902 5.15556 28.6013 5.86667L29.4013 6.66667L28.0013 8.06667L27.2013 7.26667C26.8902 6.95556 26.5013 6.8 26.0346 6.8C25.568 6.8 25.1791 6.95556 24.868 7.26667L17.4013 14.7333ZM12.068 9.4L10.668 8L11.468 7.2C11.7791 6.88889 11.9346 6.51111 11.9346 6.06667C11.9346 5.62222 11.7791 5.24444 11.468 4.93333L10.6013 4.06667L12.0013 2.66667L12.868 3.53333C13.5791 4.24444 13.9346 5.08889 13.9346 6.06667C13.9346 7.04445 13.5791 7.88889 12.868 8.6L12.068 9.4ZM14.7346 12.0667L13.3346 10.6667L18.1346 5.86667C18.4457 5.55556 18.6013 5.16667 18.6013 4.7C18.6013 4.23333 18.4457 3.84444 18.1346 3.53333L16.0013 1.4L17.4013 0L19.5346 2.13333C20.2457 2.84444 20.6013 3.7 20.6013 4.7C20.6013 5.7 20.2457 6.55556 19.5346 7.26667L14.7346 12.0667ZM20.068 17.4L18.668 16L20.8013 13.8667C21.5124 13.1556 22.368 12.8 23.368 12.8C24.368 12.8 25.2235 13.1556 25.9346 13.8667L28.068 16L26.668 17.4L24.5346 15.2667C24.2235 14.9556 23.8346 14.8 23.368 14.8C22.9013 14.8 22.5124 14.9556 22.2013 15.2667L20.068 17.4Z"
                              fill="currentColor"
                            />
                          </svg>
                        </span>
                        <div className="flex flex-col gap-2">
                          <div class="group-has-[:checked]:md:text-3xl xl:text-2xl lg:text-xl text-lg font-semibold text-[#393A8C] group-has-[:checked]:md:text-[#2D86FF]">
                            Event & Holiday Generator
                          </div>
                          <div className="lg:text-base text-sm text-[#363637] group-has-[:checked]:md:block hidden">
                            Monitor Collected and pending fees with custom date
                            range selection, Admin also send reminders to
                            student who did not paid their fees on time
                          </div>
                        </div>
                      </div>
                    </label>
                  </div>
                </div>
              </div>
              {/* mobile view */}
              <div className="mobileView md:hidden block">
                <EmblaCarousel
                  options={{
                    align: "start",
                    loop: true,
                  }}
                >
                  <div className="embla__slide text-white shrink-0 px-2 basis-[100%] ">
                    <div className="flex flex-col gap-y-3">
                      <div className="size-full">
                        <Image
                          loading="lazy"
                          fetchPriority="low"
                          src={SchoolRealTimeAttendance}
                          alt="Easy Appointment Booking"
                          title="Easy Appointment Booking"
                          width={375}
                          height={374}
                          class="size-full mx-auto max-w-64"
                        />
                      </div>
                      <div className="flex flex-col justify-center gap-2">
                        <div class="text-xl font-semibold text-[#2D86FF] text-center">
                          Event & Holiday Generator
                        </div>
                        <div className="text-xs text-[#363637] text-center">
                          Monitor Collected and pending fees with custom date
                          range selection, Admin also send reminders to student
                          who did not paid their fees on time
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="embla__slide text-white shrink-0 px-2 basis-[100%] ">
                    <div className="flex flex-col gap-y-3">
                      <div className="size-full">
                        <Image
                          loading="lazy"
                          fetchPriority="low"
                          src={SchoolRealTimeAttendance}
                          alt="Easy Appointment Booking"
                          title="Easy Appointment Booking"
                          width={375}
                          height={374}
                          class="size-full mx-auto max-w-64"
                        />
                      </div>
                      <div className="flex flex-col justify-center gap-2">
                        <div class="text-xl font-semibold text-[#2D86FF] text-center">
                          Event & Holiday Generator
                        </div>
                        <div className="text-xs text-[#363637] text-center">
                          Monitor Collected and pending fees with custom date
                          range selection, Admin also send reminders to student
                          who did not paid their fees on time
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="embla__slide text-white shrink-0 px-2 basis-[100%] ">
                    <div className="flex flex-col gap-y-3">
                      <div className="size-full">
                        <Image
                          loading="lazy"
                          fetchPriority="low"
                          src={SchoolRealTimeAttendance}
                          alt="Easy Appointment Booking"
                          title="Easy Appointment Booking"
                          width={375}
                          height={374}
                          class="size-full mx-auto max-w-64"
                        />
                      </div>
                      <div className="flex flex-col justify-center gap-2">
                        <div class="text-xl font-semibold text-[#2D86FF] text-center">
                          Event & Holiday Generator
                        </div>
                        <div className="text-xs text-[#363637] text-center">
                          Monitor Collected and pending fees with custom date
                          range selection, Admin also send reminders to student
                          who did not paid their fees on time
                        </div>
                      </div>
                    </div>
                  </div>
                </EmblaCarousel>
              </div>
            </div>
            <div class="w-full items-start has-[#panel2:checked]:flex hidden pt-16">
              <input type="radio" name="panel" id="panel2" class="hidden" />

              {/* desktop view */}
              <div className="md:grid xl:grid-cols-3 md:grid-cols-3">
                <div className="md:flex hidden flex-col gap-y-12 ">
                  <div className="group w-full studentPanel1">
                    <label
                      htmlFor="studentPanel1"
                      class="md:!w-full cursor-pointer h-full max-md:!flex max-md:!flex-col "
                    >
                      <input
                        type="radio"
                        name="studentPanel"
                        id="studentPanel1"
                        class="hidden"
                        defaultChecked
                      />
                      <div class="flex flex-row  group-has-[:checked]:md:flex-col gap-3">
                        <span className="size-16 shrink-0 flex justify-center items-center bg-white group-has-[:checked]:md:bg-[#6148FA] shadow-md rounded-xl p-2">
                          <svg
                            className="text-[#393A8C] group-has-[:checked]:md:text-white"
                            xmlns="http://www.w3.org/2000/svg"
                            width="30"
                            height="28"
                            viewBox="0 0 30 28"
                            fill="none"
                          >
                            <path
                              d="M0.667969 27.3333L7.33464 8.66667L19.3346 20.6667L0.667969 27.3333ZM5.06797 22.9333L14.468 19.6L8.4013 13.5333L5.06797 22.9333ZM17.4013 14.7333L16.0013 13.3333L23.468 5.86667C24.1791 5.15556 25.0346 4.8 26.0346 4.8C27.0346 4.8 27.8902 5.15556 28.6013 5.86667L29.4013 6.66667L28.0013 8.06667L27.2013 7.26667C26.8902 6.95556 26.5013 6.8 26.0346 6.8C25.568 6.8 25.1791 6.95556 24.868 7.26667L17.4013 14.7333ZM12.068 9.4L10.668 8L11.468 7.2C11.7791 6.88889 11.9346 6.51111 11.9346 6.06667C11.9346 5.62222 11.7791 5.24444 11.468 4.93333L10.6013 4.06667L12.0013 2.66667L12.868 3.53333C13.5791 4.24444 13.9346 5.08889 13.9346 6.06667C13.9346 7.04445 13.5791 7.88889 12.868 8.6L12.068 9.4ZM14.7346 12.0667L13.3346 10.6667L18.1346 5.86667C18.4457 5.55556 18.6013 5.16667 18.6013 4.7C18.6013 4.23333 18.4457 3.84444 18.1346 3.53333L16.0013 1.4L17.4013 0L19.5346 2.13333C20.2457 2.84444 20.6013 3.7 20.6013 4.7C20.6013 5.7 20.2457 6.55556 19.5346 7.26667L14.7346 12.0667ZM20.068 17.4L18.668 16L20.8013 13.8667C21.5124 13.1556 22.368 12.8 23.368 12.8C24.368 12.8 25.2235 13.1556 25.9346 13.8667L28.068 16L26.668 17.4L24.5346 15.2667C24.2235 14.9556 23.8346 14.8 23.368 14.8C22.9013 14.8 22.5124 14.9556 22.2013 15.2667L20.068 17.4Z"
                              fill="currentColor"
                            />
                          </svg>
                        </span>
                        <div className="flex flex-col gap-2">
                          <div class="group-has-[:checked]:md:text-3xl xl:text-2xl lg:text-xl text-lg font-semibold text-[#393A8C] group-has-[:checked]:md:text-[#6148FA]">
                            Event & Holiday Generator
                          </div>
                          <div className="lg:text-base text-sm text-[#363637] group-has-[:checked]:md:block hidden">
                            Monitor Collected and pending fees with custom date
                            range selection, Admin also send reminders to
                            student who did not paid their fees on time
                          </div>
                        </div>
                      </div>
                    </label>
                  </div>
                  <div className="group w-full studentPanel2">
                    <label
                      htmlFor="studentPanel2"
                      class="md:!w-full cursor-pointer h-full max-md:!flex max-md:!flex-col "
                    >
                      <input
                        type="radio"
                        name="studentPanel"
                        id="studentPanel2"
                        class="hidden"
                      />
                      <div class="flex flex-row  group-has-[:checked]:md:flex-col gap-3">
                        <span className="size-16 shrink-0 flex justify-center items-center bg-white group-has-[:checked]:md:bg-[#6148FA] shadow-md rounded-xl p-2">
                          <svg
                            className="text-[#393A8C] group-has-[:checked]:md:text-white"
                            xmlns="http://www.w3.org/2000/svg"
                            width="30"
                            height="28"
                            viewBox="0 0 30 28"
                            fill="none"
                          >
                            <path
                              d="M0.667969 27.3333L7.33464 8.66667L19.3346 20.6667L0.667969 27.3333ZM5.06797 22.9333L14.468 19.6L8.4013 13.5333L5.06797 22.9333ZM17.4013 14.7333L16.0013 13.3333L23.468 5.86667C24.1791 5.15556 25.0346 4.8 26.0346 4.8C27.0346 4.8 27.8902 5.15556 28.6013 5.86667L29.4013 6.66667L28.0013 8.06667L27.2013 7.26667C26.8902 6.95556 26.5013 6.8 26.0346 6.8C25.568 6.8 25.1791 6.95556 24.868 7.26667L17.4013 14.7333ZM12.068 9.4L10.668 8L11.468 7.2C11.7791 6.88889 11.9346 6.51111 11.9346 6.06667C11.9346 5.62222 11.7791 5.24444 11.468 4.93333L10.6013 4.06667L12.0013 2.66667L12.868 3.53333C13.5791 4.24444 13.9346 5.08889 13.9346 6.06667C13.9346 7.04445 13.5791 7.88889 12.868 8.6L12.068 9.4ZM14.7346 12.0667L13.3346 10.6667L18.1346 5.86667C18.4457 5.55556 18.6013 5.16667 18.6013 4.7C18.6013 4.23333 18.4457 3.84444 18.1346 3.53333L16.0013 1.4L17.4013 0L19.5346 2.13333C20.2457 2.84444 20.6013 3.7 20.6013 4.7C20.6013 5.7 20.2457 6.55556 19.5346 7.26667L14.7346 12.0667ZM20.068 17.4L18.668 16L20.8013 13.8667C21.5124 13.1556 22.368 12.8 23.368 12.8C24.368 12.8 25.2235 13.1556 25.9346 13.8667L28.068 16L26.668 17.4L24.5346 15.2667C24.2235 14.9556 23.8346 14.8 23.368 14.8C22.9013 14.8 22.5124 14.9556 22.2013 15.2667L20.068 17.4Z"
                              fill="currentColor"
                            />
                          </svg>
                        </span>
                        <div className="flex flex-col gap-2">
                          <div class="group-has-[:checked]:md:text-3xl xl:text-2xl lg:text-xl text-lg font-semibold text-[#393A8C] group-has-[:checked]:md:text-[#6148FA]">
                            Event & Holiday Generator
                          </div>
                          <div className="lg:text-base text-sm text-[#363637] group-has-[:checked]:md:block hidden">
                            Monitor Collected and pending fees with custom date
                            range selection, Admin also send reminders to
                            student who did not paid their fees on time
                          </div>
                        </div>
                      </div>
                    </label>
                  </div>
                  <div className="group w-full studentPanel3">
                    <label
                      htmlFor="studentPanel3"
                      class="md:!w-full cursor-pointer h-full max-md:!flex max-md:!flex-col "
                    >
                      <input
                        type="radio"
                        name="studentPanel"
                        id="studentPanel3"
                        class="hidden"
                      />
                      <div class="flex flex-row  group-has-[:checked]:md:flex-col gap-3">
                        <span className="size-16 shrink-0 flex justify-center items-center bg-white group-has-[:checked]:md:bg-[#6148FA] shadow-md rounded-xl p-2">
                          <svg
                            className="text-[#393A8C] group-has-[:checked]:md:text-white"
                            xmlns="http://www.w3.org/2000/svg"
                            width="30"
                            height="28"
                            viewBox="0 0 30 28"
                            fill="none"
                          >
                            <path
                              d="M0.667969 27.3333L7.33464 8.66667L19.3346 20.6667L0.667969 27.3333ZM5.06797 22.9333L14.468 19.6L8.4013 13.5333L5.06797 22.9333ZM17.4013 14.7333L16.0013 13.3333L23.468 5.86667C24.1791 5.15556 25.0346 4.8 26.0346 4.8C27.0346 4.8 27.8902 5.15556 28.6013 5.86667L29.4013 6.66667L28.0013 8.06667L27.2013 7.26667C26.8902 6.95556 26.5013 6.8 26.0346 6.8C25.568 6.8 25.1791 6.95556 24.868 7.26667L17.4013 14.7333ZM12.068 9.4L10.668 8L11.468 7.2C11.7791 6.88889 11.9346 6.51111 11.9346 6.06667C11.9346 5.62222 11.7791 5.24444 11.468 4.93333L10.6013 4.06667L12.0013 2.66667L12.868 3.53333C13.5791 4.24444 13.9346 5.08889 13.9346 6.06667C13.9346 7.04445 13.5791 7.88889 12.868 8.6L12.068 9.4ZM14.7346 12.0667L13.3346 10.6667L18.1346 5.86667C18.4457 5.55556 18.6013 5.16667 18.6013 4.7C18.6013 4.23333 18.4457 3.84444 18.1346 3.53333L16.0013 1.4L17.4013 0L19.5346 2.13333C20.2457 2.84444 20.6013 3.7 20.6013 4.7C20.6013 5.7 20.2457 6.55556 19.5346 7.26667L14.7346 12.0667ZM20.068 17.4L18.668 16L20.8013 13.8667C21.5124 13.1556 22.368 12.8 23.368 12.8C24.368 12.8 25.2235 13.1556 25.9346 13.8667L28.068 16L26.668 17.4L24.5346 15.2667C24.2235 14.9556 23.8346 14.8 23.368 14.8C22.9013 14.8 22.5124 14.9556 22.2013 15.2667L20.068 17.4Z"
                              fill="currentColor"
                            />
                          </svg>
                        </span>
                        <div className="flex flex-col gap-2">
                          <div class="group-has-[:checked]:md:text-3xl xl:text-2xl lg:text-xl text-lg font-semibold text-[#393A8C] group-has-[:checked]:md:text-[#6148FA]">
                            Event & Holiday Generator
                          </div>
                          <div className="lg:text-base text-sm text-[#363637] group-has-[:checked]:md:block hidden">
                            Monitor Collected and pending fees with custom date
                            range selection, Admin also send reminders to
                            student who did not paid their fees on time
                          </div>
                        </div>
                      </div>
                    </label>
                  </div>
                  <div className="group w-full studentPanel4">
                    <label
                      htmlFor="studentPanel4"
                      class="md:!w-full cursor-pointer h-full max-md:!flex max-md:!flex-col "
                    >
                      <input
                        type="radio"
                        name="studentPanel"
                        id="studentPanel4"
                        class="hidden"
                      />
                      <div class="flex flex-row  group-has-[:checked]:md:flex-col gap-3">
                        <span className="size-16 shrink-0 flex justify-center items-center bg-white group-has-[:checked]:md:bg-[#6148FA] shadow-md rounded-xl p-2">
                          <svg
                            className="text-[#393A8C] group-has-[:checked]:md:text-white"
                            xmlns="http://www.w3.org/2000/svg"
                            width="30"
                            height="28"
                            viewBox="0 0 30 28"
                            fill="none"
                          >
                            <path
                              d="M0.667969 27.3333L7.33464 8.66667L19.3346 20.6667L0.667969 27.3333ZM5.06797 22.9333L14.468 19.6L8.4013 13.5333L5.06797 22.9333ZM17.4013 14.7333L16.0013 13.3333L23.468 5.86667C24.1791 5.15556 25.0346 4.8 26.0346 4.8C27.0346 4.8 27.8902 5.15556 28.6013 5.86667L29.4013 6.66667L28.0013 8.06667L27.2013 7.26667C26.8902 6.95556 26.5013 6.8 26.0346 6.8C25.568 6.8 25.1791 6.95556 24.868 7.26667L17.4013 14.7333ZM12.068 9.4L10.668 8L11.468 7.2C11.7791 6.88889 11.9346 6.51111 11.9346 6.06667C11.9346 5.62222 11.7791 5.24444 11.468 4.93333L10.6013 4.06667L12.0013 2.66667L12.868 3.53333C13.5791 4.24444 13.9346 5.08889 13.9346 6.06667C13.9346 7.04445 13.5791 7.88889 12.868 8.6L12.068 9.4ZM14.7346 12.0667L13.3346 10.6667L18.1346 5.86667C18.4457 5.55556 18.6013 5.16667 18.6013 4.7C18.6013 4.23333 18.4457 3.84444 18.1346 3.53333L16.0013 1.4L17.4013 0L19.5346 2.13333C20.2457 2.84444 20.6013 3.7 20.6013 4.7C20.6013 5.7 20.2457 6.55556 19.5346 7.26667L14.7346 12.0667ZM20.068 17.4L18.668 16L20.8013 13.8667C21.5124 13.1556 22.368 12.8 23.368 12.8C24.368 12.8 25.2235 13.1556 25.9346 13.8667L28.068 16L26.668 17.4L24.5346 15.2667C24.2235 14.9556 23.8346 14.8 23.368 14.8C22.9013 14.8 22.5124 14.9556 22.2013 15.2667L20.068 17.4Z"
                              fill="currentColor"
                            />
                          </svg>
                        </span>
                        <div className="flex flex-col gap-2">
                          <div class="group-has-[:checked]:md:text-3xl xl:text-2xl lg:text-xl text-lg font-semibold text-[#393A8C] group-has-[:checked]:md:text-[#6148FA]">
                            Event & Holiday Generator
                          </div>
                          <div className="lg:text-base text-sm text-[#363637] group-has-[:checked]:md:block hidden">
                            Monitor Collected and pending fees with custom date
                            range selection, Admin also send reminders to
                            student who did not paid their fees on time
                          </div>
                        </div>
                      </div>
                    </label>
                  </div>
                </div>
                <div className="key-images md:flex hidden">
                  <Image
                    loading="lazy"
                    fetchPriority="low"
                    src={SchoolRealTimeAttendance}
                    alt="Easy Appointment Booking"
                    title="Easy Appointment Booking"
                    width={375}
                    height={374}
                    class="w-full mx-auto xl:max-w-72 max-w-64  hidden group-has-[#studentPanel1:checked]/key:md:block"
                  />
                  <Image
                    loading="lazy"
                    fetchPriority="low"
                    src={SchoolRealTimeAttendance}
                    alt="Easy Appointment Booking"
                    title="Easy Appointment Booking"
                    width={375}
                    height={374}
                    class="w-full mx-auto xl:max-w-72 max-w-64  hidden group-has-[#studentPanel2:checked]/key:md:block"
                  />
                  <Image
                    loading="lazy"
                    fetchPriority="low"
                    src={SchoolRealTimeAttendance}
                    alt="Easy Appointment Booking"
                    title="Easy Appointment Booking"
                    width={375}
                    height={374}
                    class="w-full mx-auto xl:max-w-72 max-w-64  hidden group-has-[#studentPanel3:checked]/key:md:block"
                  />
                  <Image
                    loading="lazy"
                    fetchPriority="low"
                    src={SchoolRealTimeAttendance}
                    alt="Easy Appointment Booking"
                    title="Easy Appointment Booking"
                    width={375}
                    height={374}
                    class="w-full mx-auto xl:max-w-72 max-w-64  hidden group-has-[#studentPanel4:checked]/key:md:block"
                  />
                  <Image
                    loading="lazy"
                    fetchPriority="low"
                    src={SchoolRealTimeAttendance}
                    alt="Easy Appointment Booking"
                    title="Easy Appointment Booking"
                    width={375}
                    height={374}
                    class="w-full mx-auto xl:max-w-72 max-w-64  hidden group-has-[#studentPanel5:checked]/key:md:block"
                  />
                  <Image
                    loading="lazy"
                    fetchPriority="low"
                    src={SchoolRealTimeAttendance}
                    alt="Easy Appointment Booking"
                    title="Easy Appointment Booking"
                    width={375}
                    height={374}
                    class="w-full mx-auto xl:max-w-72 max-w-64  hidden group-has-[#studentPanel6:checked]/key:md:block"
                  />
                  <Image
                    loading="lazy"
                    fetchPriority="low"
                    src={SchoolRealTimeAttendance}
                    alt="Easy Appointment Booking"
                    title="Easy Appointment Booking"
                    width={375}
                    height={374}
                    class="w-full mx-auto xl:max-w-72 max-w-64  hidden group-has-[#studentPanel7:checked]/key:md:block"
                  />
                  <Image
                    loading="lazy"
                    fetchPriority="low"
                    src={SchoolRealTimeAttendance}
                    alt="Easy Appointment Booking"
                    title="Easy Appointment Booking"
                    width={375}
                    height={374}
                    class="w-full mx-auto xl:max-w-72 max-w-64  hidden group-has-[#studentPanel8:checked]/key:md:block"
                  />
                </div>
                <div className="md:flex hidden flex-col gap-y-12">
                  <div className="group w-full studentPanel5">
                    <label
                      htmlFor="studentPanel5"
                      class="md:!w-full cursor-pointer h-full max-md:!flex max-md:!flex-col "
                    >
                      <input
                        type="radio"
                        name="studentPanel"
                        id="studentPanel5"
                        class="hidden"
                      />
                      <div class="flex flex-row  group-has-[:checked]:md:flex-col gap-3">
                        <span className="size-16 shrink-0 flex justify-center items-center bg-white group-has-[:checked]:md:bg-[#6148FA] shadow-md rounded-xl p-2">
                          <svg
                            className="text-[#393A8C] group-has-[:checked]:md:text-white"
                            xmlns="http://www.w3.org/2000/svg"
                            width="30"
                            height="28"
                            viewBox="0 0 30 28"
                            fill="none"
                          >
                            <path
                              d="M0.667969 27.3333L7.33464 8.66667L19.3346 20.6667L0.667969 27.3333ZM5.06797 22.9333L14.468 19.6L8.4013 13.5333L5.06797 22.9333ZM17.4013 14.7333L16.0013 13.3333L23.468 5.86667C24.1791 5.15556 25.0346 4.8 26.0346 4.8C27.0346 4.8 27.8902 5.15556 28.6013 5.86667L29.4013 6.66667L28.0013 8.06667L27.2013 7.26667C26.8902 6.95556 26.5013 6.8 26.0346 6.8C25.568 6.8 25.1791 6.95556 24.868 7.26667L17.4013 14.7333ZM12.068 9.4L10.668 8L11.468 7.2C11.7791 6.88889 11.9346 6.51111 11.9346 6.06667C11.9346 5.62222 11.7791 5.24444 11.468 4.93333L10.6013 4.06667L12.0013 2.66667L12.868 3.53333C13.5791 4.24444 13.9346 5.08889 13.9346 6.06667C13.9346 7.04445 13.5791 7.88889 12.868 8.6L12.068 9.4ZM14.7346 12.0667L13.3346 10.6667L18.1346 5.86667C18.4457 5.55556 18.6013 5.16667 18.6013 4.7C18.6013 4.23333 18.4457 3.84444 18.1346 3.53333L16.0013 1.4L17.4013 0L19.5346 2.13333C20.2457 2.84444 20.6013 3.7 20.6013 4.7C20.6013 5.7 20.2457 6.55556 19.5346 7.26667L14.7346 12.0667ZM20.068 17.4L18.668 16L20.8013 13.8667C21.5124 13.1556 22.368 12.8 23.368 12.8C24.368 12.8 25.2235 13.1556 25.9346 13.8667L28.068 16L26.668 17.4L24.5346 15.2667C24.2235 14.9556 23.8346 14.8 23.368 14.8C22.9013 14.8 22.5124 14.9556 22.2013 15.2667L20.068 17.4Z"
                              fill="currentColor"
                            />
                          </svg>
                        </span>
                        <div className="flex flex-col gap-2">
                          <div class="group-has-[:checked]:md:text-3xl xl:text-2xl lg:text-xl text-lg font-semibold text-[#393A8C] group-has-[:checked]:md:text-[#6148FA]">
                            Event & Holiday Generator
                          </div>
                          <div className="lg:text-base text-sm text-[#363637] group-has-[:checked]:md:block hidden">
                            Monitor Collected and pending fees with custom date
                            range selection, Admin also send reminders to
                            student who did not paid their fees on time
                          </div>
                        </div>
                      </div>
                    </label>
                  </div>
                  <div className="group w-full studentPanel6">
                    <label
                      htmlFor="studentPanel6"
                      class="md:!w-full cursor-pointer h-full max-md:!flex max-md:!flex-col "
                    >
                      <input
                        type="radio"
                        name="studentPanel"
                        id="studentPanel6"
                        class="hidden"
                      />
                      <div class="flex flex-row  group-has-[:checked]:md:flex-col gap-3">
                        <span className="size-16 shrink-0 flex justify-center items-center bg-white group-has-[:checked]:md:bg-[#6148FA] shadow-md rounded-xl p-2">
                          <svg
                            className="text-[#393A8C] group-has-[:checked]:md:text-white"
                            xmlns="http://www.w3.org/2000/svg"
                            width="30"
                            height="28"
                            viewBox="0 0 30 28"
                            fill="none"
                          >
                            <path
                              d="M0.667969 27.3333L7.33464 8.66667L19.3346 20.6667L0.667969 27.3333ZM5.06797 22.9333L14.468 19.6L8.4013 13.5333L5.06797 22.9333ZM17.4013 14.7333L16.0013 13.3333L23.468 5.86667C24.1791 5.15556 25.0346 4.8 26.0346 4.8C27.0346 4.8 27.8902 5.15556 28.6013 5.86667L29.4013 6.66667L28.0013 8.06667L27.2013 7.26667C26.8902 6.95556 26.5013 6.8 26.0346 6.8C25.568 6.8 25.1791 6.95556 24.868 7.26667L17.4013 14.7333ZM12.068 9.4L10.668 8L11.468 7.2C11.7791 6.88889 11.9346 6.51111 11.9346 6.06667C11.9346 5.62222 11.7791 5.24444 11.468 4.93333L10.6013 4.06667L12.0013 2.66667L12.868 3.53333C13.5791 4.24444 13.9346 5.08889 13.9346 6.06667C13.9346 7.04445 13.5791 7.88889 12.868 8.6L12.068 9.4ZM14.7346 12.0667L13.3346 10.6667L18.1346 5.86667C18.4457 5.55556 18.6013 5.16667 18.6013 4.7C18.6013 4.23333 18.4457 3.84444 18.1346 3.53333L16.0013 1.4L17.4013 0L19.5346 2.13333C20.2457 2.84444 20.6013 3.7 20.6013 4.7C20.6013 5.7 20.2457 6.55556 19.5346 7.26667L14.7346 12.0667ZM20.068 17.4L18.668 16L20.8013 13.8667C21.5124 13.1556 22.368 12.8 23.368 12.8C24.368 12.8 25.2235 13.1556 25.9346 13.8667L28.068 16L26.668 17.4L24.5346 15.2667C24.2235 14.9556 23.8346 14.8 23.368 14.8C22.9013 14.8 22.5124 14.9556 22.2013 15.2667L20.068 17.4Z"
                              fill="currentColor"
                            />
                          </svg>
                        </span>
                        <div className="flex flex-col gap-2">
                          <div class="group-has-[:checked]:md:text-3xl xl:text-2xl lg:text-xl text-lg font-semibold text-[#393A8C] group-has-[:checked]:md:text-[#6148FA]">
                            Event & Holiday Generator
                          </div>
                          <div className="lg:text-base text-sm text-[#363637] group-has-[:checked]:md:block hidden">
                            Monitor Collected and pending fees with custom date
                            range selection, Admin also send reminders to
                            student who did not paid their fees on time
                          </div>
                        </div>
                      </div>
                    </label>
                  </div>
                  <div className="group w-full studentPanel7">
                    <label
                      htmlFor="studentPanel7"
                      class="md:!w-full cursor-pointer h-full max-md:!flex max-md:!flex-col "
                    >
                      <input
                        type="radio"
                        name="studentPanel"
                        id="studentPanel7"
                        class="hidden"
                      />
                      <div class="flex flex-row  group-has-[:checked]:md:flex-col gap-3">
                        <span className="size-16 shrink-0 flex justify-center items-center bg-white group-has-[:checked]:md:bg-[#6148FA] shadow-md rounded-xl p-2">
                          <svg
                            className="text-[#393A8C] group-has-[:checked]:md:text-white"
                            xmlns="http://www.w3.org/2000/svg"
                            width="30"
                            height="28"
                            viewBox="0 0 30 28"
                            fill="none"
                          >
                            <path
                              d="M0.667969 27.3333L7.33464 8.66667L19.3346 20.6667L0.667969 27.3333ZM5.06797 22.9333L14.468 19.6L8.4013 13.5333L5.06797 22.9333ZM17.4013 14.7333L16.0013 13.3333L23.468 5.86667C24.1791 5.15556 25.0346 4.8 26.0346 4.8C27.0346 4.8 27.8902 5.15556 28.6013 5.86667L29.4013 6.66667L28.0013 8.06667L27.2013 7.26667C26.8902 6.95556 26.5013 6.8 26.0346 6.8C25.568 6.8 25.1791 6.95556 24.868 7.26667L17.4013 14.7333ZM12.068 9.4L10.668 8L11.468 7.2C11.7791 6.88889 11.9346 6.51111 11.9346 6.06667C11.9346 5.62222 11.7791 5.24444 11.468 4.93333L10.6013 4.06667L12.0013 2.66667L12.868 3.53333C13.5791 4.24444 13.9346 5.08889 13.9346 6.06667C13.9346 7.04445 13.5791 7.88889 12.868 8.6L12.068 9.4ZM14.7346 12.0667L13.3346 10.6667L18.1346 5.86667C18.4457 5.55556 18.6013 5.16667 18.6013 4.7C18.6013 4.23333 18.4457 3.84444 18.1346 3.53333L16.0013 1.4L17.4013 0L19.5346 2.13333C20.2457 2.84444 20.6013 3.7 20.6013 4.7C20.6013 5.7 20.2457 6.55556 19.5346 7.26667L14.7346 12.0667ZM20.068 17.4L18.668 16L20.8013 13.8667C21.5124 13.1556 22.368 12.8 23.368 12.8C24.368 12.8 25.2235 13.1556 25.9346 13.8667L28.068 16L26.668 17.4L24.5346 15.2667C24.2235 14.9556 23.8346 14.8 23.368 14.8C22.9013 14.8 22.5124 14.9556 22.2013 15.2667L20.068 17.4Z"
                              fill="currentColor"
                            />
                          </svg>
                        </span>
                        <div className="flex flex-col gap-2">
                          <div class="group-has-[:checked]:md:text-3xl xl:text-2xl lg:text-xl text-lg font-semibold text-[#393A8C] group-has-[:checked]:md:text-[#6148FA]">
                            Event & Holiday Generator
                          </div>
                          <div className="lg:text-base text-sm text-[#363637] group-has-[:checked]:md:block hidden">
                            Monitor Collected and pending fees with custom date
                            range selection, Admin also send reminders to
                            student who did not paid their fees on time
                          </div>
                        </div>
                      </div>
                    </label>
                  </div>
                  <div className="group w-full studentPanel8">
                    <label
                      htmlFor="studentPanel8"
                      class="md:!w-full cursor-pointer h-full max-md:!flex max-md:!flex-col "
                    >
                      <input
                        type="radio"
                        name="studentPanel"
                        id="studentPanel8"
                        class="hidden"
                      />
                      <div class="flex flex-row  group-has-[:checked]:md:flex-col gap-3">
                        <span className="size-16 shrink-0 flex justify-center items-center bg-white group-has-[:checked]:md:bg-[#6148FA] shadow-md rounded-xl p-2">
                          <svg
                            className="text-[#393A8C] group-has-[:checked]:md:text-white"
                            xmlns="http://www.w3.org/2000/svg"
                            width="30"
                            height="28"
                            viewBox="0 0 30 28"
                            fill="none"
                          >
                            <path
                              d="M0.667969 27.3333L7.33464 8.66667L19.3346 20.6667L0.667969 27.3333ZM5.06797 22.9333L14.468 19.6L8.4013 13.5333L5.06797 22.9333ZM17.4013 14.7333L16.0013 13.3333L23.468 5.86667C24.1791 5.15556 25.0346 4.8 26.0346 4.8C27.0346 4.8 27.8902 5.15556 28.6013 5.86667L29.4013 6.66667L28.0013 8.06667L27.2013 7.26667C26.8902 6.95556 26.5013 6.8 26.0346 6.8C25.568 6.8 25.1791 6.95556 24.868 7.26667L17.4013 14.7333ZM12.068 9.4L10.668 8L11.468 7.2C11.7791 6.88889 11.9346 6.51111 11.9346 6.06667C11.9346 5.62222 11.7791 5.24444 11.468 4.93333L10.6013 4.06667L12.0013 2.66667L12.868 3.53333C13.5791 4.24444 13.9346 5.08889 13.9346 6.06667C13.9346 7.04445 13.5791 7.88889 12.868 8.6L12.068 9.4ZM14.7346 12.0667L13.3346 10.6667L18.1346 5.86667C18.4457 5.55556 18.6013 5.16667 18.6013 4.7C18.6013 4.23333 18.4457 3.84444 18.1346 3.53333L16.0013 1.4L17.4013 0L19.5346 2.13333C20.2457 2.84444 20.6013 3.7 20.6013 4.7C20.6013 5.7 20.2457 6.55556 19.5346 7.26667L14.7346 12.0667ZM20.068 17.4L18.668 16L20.8013 13.8667C21.5124 13.1556 22.368 12.8 23.368 12.8C24.368 12.8 25.2235 13.1556 25.9346 13.8667L28.068 16L26.668 17.4L24.5346 15.2667C24.2235 14.9556 23.8346 14.8 23.368 14.8C22.9013 14.8 22.5124 14.9556 22.2013 15.2667L20.068 17.4Z"
                              fill="currentColor"
                            />
                          </svg>
                        </span>
                        <div className="flex flex-col gap-2">
                          <div class="group-has-[:checked]:md:text-3xl xl:text-2xl lg:text-xl text-lg font-semibold text-[#393A8C] group-has-[:checked]:md:text-[#6148FA]">
                            Event & Holiday Generator
                          </div>
                          <div className="lg:text-base text-sm text-[#363637] group-has-[:checked]:md:block hidden">
                            Monitor Collected and pending fees with custom date
                            range selection, Admin also send reminders to
                            student who did not paid their fees on time
                          </div>
                        </div>
                      </div>
                    </label>
                  </div>
                </div>
              </div>
              {/* mobile view */}
              <div className="mobileView md:hidden block">
                <EmblaCarousel
                  options={{
                    align: "start",
                    loop: true,
                  }}
                >
                  <div className="embla__slide text-white shrink-0 px-2 basis-[100%] ">
                    <div className="flex flex-col gap-y-3">
                      <div className="size-full">
                        <Image
                          loading="lazy"
                          fetchPriority="low"
                          src={SchoolRealTimeAttendance}
                          alt="Easy Appointment Booking"
                          title="Easy Appointment Booking"
                          width={375}
                          height={374}
                          class="size-full mx-auto max-w-64"
                        />
                      </div>
                      <div className="flex flex-col justify-center gap-2">
                        <div class="text-xl font-semibold text-[#2D86FF] text-center">
                          Event & Holiday Generator
                        </div>
                        <div className="text-xs text-[#363637] text-center">
                          Monitor Collected and pending fees with custom date
                          range selection, Admin also send reminders to student
                          who did not paid their fees on time
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="embla__slide text-white shrink-0 px-2 basis-[100%] ">
                    <div className="flex flex-col gap-y-3">
                      <div className="size-full">
                        <Image
                          loading="lazy"
                          fetchPriority="low"
                          src={SchoolRealTimeAttendance}
                          alt="Easy Appointment Booking"
                          title="Easy Appointment Booking"
                          width={375}
                          height={374}
                          class="size-full mx-auto max-w-64"
                        />
                      </div>
                      <div className="flex flex-col justify-center gap-2">
                        <div class="text-xl font-semibold text-[#2D86FF] text-center">
                          Event & Holiday Generator
                        </div>
                        <div className="text-xs text-[#363637] text-center">
                          Monitor Collected and pending fees with custom date
                          range selection, Admin also send reminders to student
                          who did not paid their fees on time
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="embla__slide text-white shrink-0 px-2 basis-[100%] ">
                    <div className="flex flex-col gap-y-3">
                      <div className="size-full">
                        <Image
                          loading="lazy"
                          fetchPriority="low"
                          src={SchoolRealTimeAttendance}
                          alt="Easy Appointment Booking"
                          title="Easy Appointment Booking"
                          width={375}
                          height={374}
                          class="size-full mx-auto max-w-64"
                        />
                      </div>
                      <div className="flex flex-col justify-center gap-2">
                        <div class="text-xl font-semibold text-[#2D86FF] text-center">
                          Event & Holiday Generator
                        </div>
                        <div className="text-xs text-[#363637] text-center">
                          Monitor Collected and pending fees with custom date
                          range selection, Admin also send reminders to student
                          who did not paid their fees on time
                        </div>
                      </div>
                    </div>
                  </div>
                </EmblaCarousel>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AdvanceFeatures;
