import Link from "next/link";
import Image from "next/image";
import EmblaCarousel from "../emblaCarousel/EmblaCarousel";

const AdvanceFeatures = () => {
  return (
    <>
      <section className="keySection group/key w-full relative bg-white py-8">
        <div className="view xl:py-4 lg:py-3 py-4">
          <div className="flex flex-col">
            <h2 className="w-full  2xl:text-5xl xl:text-5xl lg:text-4xl md:text-3xl sm:text-2xl text-2xl font-bold text-[#393A8C] text-balance relative z-10 text-center md:pb-12 pb-4">
              AI -Powered Advanced Features of Edoovi App
            </h2>
            <div className="w-full max-sm:px-4 flex items-center justify-center ">
              <div className="inline-flex items-center justify-center gap-1 rounded-full bg-white shadow-[0px_3px_34px_0px_#0000001F]">
                <label
                  htmlFor="panel1"
                  className="md:py-4 py-3 lg:px-12 md:px-10 sm:px-6 px-3 rounded-full xl:text-xl lg:text-lg md:text-base sm:text-sm text-xs font-semibold text-[#454444] cursor-pointer group-has-[#panel1:checked]/key:bg-[#2D86FF]  group-has-[#panel1:checked]/key:text-white"
                >
                  <h3>
                    School<span className="max-sm:hidden">App</span>
                  </h3>
                </label>
                <label
                  htmlFor="panel2"
                  className="md:py-4 py-3 lg:px-12 md:px-10 sm:px-6 px-3 rounded-full xl:text-xl lg:text-lg md:text-base sm:text-sm text-xs font-semibold text-[#454444] cursor-pointer group-has-[#panel2:checked]/key:bg-[#2D86FF]  group-has-[#panel2:checked]/key:text-white"
                >
                  <h3>
                    Student Parent <span className="max-sm:hidden">App</span>
                  </h3>
                </label>
              </div>
            </div>
            <div className="w-full items-start has-[#panel1:checked]:flex hidden md:pt-16 pt-8">
              <input
                type="radio"
                name="panel"
                id="panel1"
                className="hidden"
                defaultChecked
              />
              {/* desktop view */}
              <div className="md:grid xl:grid-cols-3 md:grid-cols-3 hidden">
                <div className="md:flex hidden flex-col gap-y-12 ">
                  <div className="group w-full userPanel1">
                    <label
                      htmlFor="userPanel1"
                      className="md:!w-full cursor-pointer h-full max-md:!flex max-md:!flex-col "
                    >
                      <input
                        type="radio"
                        name="userPanel"
                        id="userPanel1"
                        className="hidden"
                        defaultChecked
                      />
                      <div className="flex flex-row items-center group-has-[:checked]:md:flex-col group-has-[:checked]:md:items-start gap-3">
                        <span className="size-16 shrink-0 flex justify-center items-center bg-white group-has-[:checked]:md:bg-[#2D86FF] shadow-md rounded-xl p-2">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="22"
                            height="22"
                            className="text-[#393A8C] group-has-[:checked]:md:text-white"
                            viewBox="0 0 28 28"
                            fill="currentColor"
                          >
                            <path
                              d="M15.7013 21.3334H18.9013V21.2334L13.4013 15.4001L13.4346 15.3001H13.768C14.968 15.3001 15.9624 14.9334 16.7513 14.2001C17.5402 13.4667 18.0235 12.6112 18.2013 11.6334H19.5346V10.0667H18.168C18.1013 9.73341 17.9846 9.41675 17.818 9.11675C17.6513 8.81675 17.4457 8.5223 17.2013 8.23341H19.5346V6.66675H8.46797V8.56675H13.668C14.2457 8.56675 14.718 8.71119 15.0846 9.00008C15.4513 9.28897 15.7013 9.64453 15.8346 10.0667H8.46797V11.6334H15.868C15.7346 12.0779 15.4791 12.4612 15.1013 12.7834C14.7235 13.1056 14.2124 13.2667 13.568 13.2667H10.2346V15.4001L15.7013 21.3334ZM14.0013 27.3334C12.1569 27.3334 10.4235 26.9834 8.8013 26.2834C7.17908 25.5834 5.76797 24.6334 4.56797 23.4334C3.36797 22.2334 2.41797 20.8223 1.71797 19.2001C1.01797 17.5779 0.667969 15.8445 0.667969 14.0001C0.667969 12.1556 1.01797 10.4223 1.71797 8.80008C2.41797 7.17786 3.36797 5.76675 4.56797 4.56675C5.76797 3.36675 7.17908 2.41675 8.8013 1.71675C10.4235 1.01675 12.1569 0.666748 14.0013 0.666748C15.8457 0.666748 17.5791 1.01675 19.2013 1.71675C20.8235 2.41675 22.2346 3.36675 23.4346 4.56675C24.6346 5.76675 25.5846 7.17786 26.2846 8.80008C26.9846 10.4223 27.3346 12.1556 27.3346 14.0001C27.3346 15.8445 26.9846 17.5779 26.2846 19.2001C25.5846 20.8223 24.6346 22.2334 23.4346 23.4334C22.2346 24.6334 20.8235 25.5834 19.2013 26.2834C17.5791 26.9834 15.8457 27.3334 14.0013 27.3334ZM14.0013 24.6667C16.9791 24.6667 19.5013 23.6334 21.568 21.5667C23.6346 19.5001 24.668 16.9779 24.668 14.0001C24.668 11.0223 23.6346 8.50008 21.568 6.43341C19.5013 4.36675 16.9791 3.33341 14.0013 3.33341C11.0235 3.33341 8.5013 4.36675 6.43464 6.43341C4.36797 8.50008 3.33464 11.0223 3.33464 14.0001C3.33464 16.9779 4.36797 19.5001 6.43464 21.5667C8.5013 23.6334 11.0235 24.6667 14.0013 24.6667Z"
                              fill="currentColor"
                            />
                          </svg>
                        </span>
                        <div className="flex flex-col gap-2">
                          <div className="group-has-[:checked]:md:text-4xl xl:text-3xl lg:text-2xl text-lg font-semibold text-[#393A8C] group-has-[:checked]:md:text-[#2D86FF]">
                            Fees Management Monitor
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
                      className="md:!w-full cursor-pointer h-full max-md:!flex max-md:!flex-col "
                    >
                      <input
                        type="radio"
                        name="userPanel"
                        id="userPanel2"
                        className="hidden"
                      />
                      <div className="flex flex-row items-center group-has-[:checked]:md:flex-col group-has-[:checked]:md:items-start gap-3">
                        <span className="size-16 shrink-0 flex justify-center items-center bg-white group-has-[:checked]:md:bg-[#2D86FF] shadow-md rounded-xl p-2">
                          <svg
                            className="text-[#393A8C] group-has-[:checked]:md:text-white"
                            xmlns="http://www.w3.org/2000/svg"
                            width="22"
                            height="22"
                            viewBox="0 0 30 28"
                            fill="currentColor"
                          >
                            <path
                              d="M0.667969 27.3333L7.33464 8.66667L19.3346 20.6667L0.667969 27.3333ZM5.06797 22.9333L14.468 19.6L8.4013 13.5333L5.06797 22.9333ZM17.4013 14.7333L16.0013 13.3333L23.468 5.86667C24.1791 5.15556 25.0346 4.8 26.0346 4.8C27.0346 4.8 27.8902 5.15556 28.6013 5.86667L29.4013 6.66667L28.0013 8.06667L27.2013 7.26667C26.8902 6.95556 26.5013 6.8 26.0346 6.8C25.568 6.8 25.1791 6.95556 24.868 7.26667L17.4013 14.7333ZM12.068 9.4L10.668 8L11.468 7.2C11.7791 6.88889 11.9346 6.51111 11.9346 6.06667C11.9346 5.62222 11.7791 5.24444 11.468 4.93333L10.6013 4.06667L12.0013 2.66667L12.868 3.53333C13.5791 4.24444 13.9346 5.08889 13.9346 6.06667C13.9346 7.04445 13.5791 7.88889 12.868 8.6L12.068 9.4ZM14.7346 12.0667L13.3346 10.6667L18.1346 5.86667C18.4457 5.55556 18.6013 5.16667 18.6013 4.7C18.6013 4.23333 18.4457 3.84444 18.1346 3.53333L16.0013 1.4L17.4013 0L19.5346 2.13333C20.2457 2.84444 20.6013 3.7 20.6013 4.7C20.6013 5.7 20.2457 6.55556 19.5346 7.26667L14.7346 12.0667ZM20.068 17.4L18.668 16L20.8013 13.8667C21.5124 13.1556 22.368 12.8 23.368 12.8C24.368 12.8 25.2235 13.1556 25.9346 13.8667L28.068 16L26.668 17.4L24.5346 15.2667C24.2235 14.9556 23.8346 14.8 23.368 14.8C22.9013 14.8 22.5124 14.9556 22.2013 15.2667L20.068 17.4Z"
                              fill="currentColor"
                            />
                          </svg>
                        </span>
                        <div className="flex flex-col gap-2">
                          <div className="group-has-[:checked]:md:text-4xl xl:text-3xl lg:text-2xl text-lg font-semibold text-[#393A8C] group-has-[:checked]:md:text-[#2D86FF]">
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
                      className="md:!w-full cursor-pointer h-full max-md:!flex max-md:!flex-col "
                    >
                      <input
                        type="radio"
                        name="userPanel"
                        id="userPanel3"
                        className="hidden"
                      />
                      <div className="flex flex-row items-center group-has-[:checked]:md:flex-col group-has-[:checked]:md:items-start gap-3">
                        <span className="size-16 shrink-0 flex justify-center items-center bg-white group-has-[:checked]:md:bg-[#2D86FF] shadow-md rounded-xl p-2">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="text-[#393A8C] group-has-[:checked]:md:text-white"
                            width="22"
                            height="22"
                            viewBox="0 0 28 28"
                            fill="currentColor"
                          >
                            <path
                              d="M13.6013 22.0001C11.468 21.889 9.66797 21.0667 8.2013 19.5334C6.73464 18.0001 6.0013 16.1556 6.0013 14.0001C6.0013 11.7779 6.77908 9.88897 8.33464 8.33342C9.89019 6.77786 11.7791 6.00008 14.0013 6.00008C16.1569 6.00008 18.0013 6.73342 19.5346 8.20008C21.068 9.66675 21.8902 11.4667 22.0013 13.6001L19.2013 12.7667C18.9124 11.5667 18.2902 10.5834 17.3346 9.81675C16.3791 9.05008 15.268 8.66675 14.0013 8.66675C12.5346 8.66675 11.2791 9.18897 10.2346 10.2334C9.19019 11.2779 8.66797 12.5334 8.66797 14.0001C8.66797 15.2667 9.0513 16.3779 9.81797 17.3334C10.5846 18.289 11.568 18.9112 12.768 19.2001L13.6013 22.0001ZM15.2013 27.2668C15.0013 27.3112 14.8013 27.3334 14.6013 27.3334H14.0013C12.1569 27.3334 10.4235 26.9834 8.8013 26.2834C7.17908 25.5834 5.76797 24.6334 4.56797 23.4334C3.36797 22.2334 2.41797 20.8223 1.71797 19.2001C1.01797 17.5779 0.667969 15.8445 0.667969 14.0001C0.667969 12.1556 1.01797 10.4223 1.71797 8.80008C2.41797 7.17786 3.36797 5.76675 4.56797 4.56675C5.76797 3.36675 7.17908 2.41675 8.8013 1.71675C10.4235 1.01675 12.1569 0.666748 14.0013 0.666748C15.8457 0.666748 17.5791 1.01675 19.2013 1.71675C20.8235 2.41675 22.2346 3.36675 23.4346 4.56675C24.6346 5.76675 25.5846 7.17786 26.2846 8.80008C26.9846 10.4223 27.3346 12.1556 27.3346 14.0001V14.6001C27.3346 14.8001 27.3124 15.0001 27.268 15.2001L24.668 14.4001V14.0001C24.668 11.0223 23.6346 8.50008 21.568 6.43342C19.5013 4.36675 16.9791 3.33341 14.0013 3.33341C11.0235 3.33341 8.5013 4.36675 6.43464 6.43342C4.36797 8.50008 3.33464 11.0223 3.33464 14.0001C3.33464 16.9779 4.36797 19.5001 6.43464 21.5667C8.5013 23.6334 11.0235 24.6667 14.0013 24.6667H14.4013L15.2013 27.2668ZM25.368 28.0001L19.668 22.3001L18.0013 27.3334L14.0013 14.0001L27.3346 18.0001L22.3013 19.6667L28.0013 25.3667L25.368 28.0001Z"
                              fill="currentColor"
                            />
                          </svg>
                        </span>
                        <div className="flex flex-col gap-2">
                          <div className="group-has-[:checked]:md:text-4xl xl:text-3xl lg:text-2xl text-lg font-semibold text-[#393A8C] group-has-[:checked]:md:text-[#2D86FF]">
                            Quick Actions on Requests
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
                      className="md:!w-full cursor-pointer h-full max-md:!flex max-md:!flex-col "
                    >
                      <input
                        type="radio"
                        name="userPanel"
                        id="userPanel4"
                        className="hidden"
                      />
                      <div className="flex flex-row items-center group-has-[:checked]:md:flex-col group-has-[:checked]:md:items-start gap-3">
                        <span className="size-16 shrink-0 flex justify-center items-center bg-white group-has-[:checked]:md:bg-[#2D86FF] shadow-md rounded-xl p-2">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="text-[#393A8C] group-has-[:checked]:md:text-white"
                            width="22"
                            height="22"
                            viewBox="0 0 28 28"
                            fill="currentColor"
                          >
                            <path
                              d="M14.0013 18.0001C14.3791 18.0001 14.6957 17.8723 14.9513 17.6167C15.2069 17.3612 15.3346 17.0445 15.3346 16.6667C15.3346 16.289 15.2069 15.9723 14.9513 15.7167C14.6957 15.4612 14.3791 15.3334 14.0013 15.3334C13.6235 15.3334 13.3069 15.4612 13.0513 15.7167C12.7957 15.9723 12.668 16.289 12.668 16.6667C12.668 17.0445 12.7957 17.3612 13.0513 17.6167C13.3069 17.8723 13.6235 18.0001 14.0013 18.0001ZM12.668 12.6667H15.3346V4.66675H12.668V12.6667ZM0.667969 27.3334V3.33341C0.667969 2.60008 0.92908 1.9723 1.4513 1.45008C1.97352 0.927859 2.6013 0.666748 3.33464 0.666748H24.668C25.4013 0.666748 26.0291 0.927859 26.5513 1.45008C27.0735 1.9723 27.3346 2.60008 27.3346 3.33341V19.3334C27.3346 20.0667 27.0735 20.6945 26.5513 21.2167C26.0291 21.739 25.4013 22.0001 24.668 22.0001H6.0013L0.667969 27.3334ZM4.86797 19.3334H24.668V3.33341H3.33464V20.8334L4.86797 19.3334Z"
                              fill="currentColor"
                            />
                          </svg>
                        </span>
                        <div className="flex flex-col gap-2">
                          <div className="group-has-[:checked]:md:text-4xl xl:text-3xl lg:text-2xl text-lg font-semibold text-[#393A8C] group-has-[:checked]:md:text-[#2D86FF]">
                            Concern & Feedback
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
                    src="/images/schoolFees.webp"
                    alt="Fees Management Monitor"
                    width={375}
                    height={374}
                    className="w-full mx-auto xl:max-w-72 max-w-64  hidden group-has-[#userPanel1:checked]/key:md:block"
                  />
                  <Image
                    src="/images/schoolEvent.webp"
                    alt="Event & Holiday Generator"
                    width={375}
                    height={374}
                    className="w-full mx-auto xl:max-w-72 max-w-64  hidden group-has-[#userPanel2:checked]/key:md:block"
                  />
                  <Image
                    src="/images/schoolQuickActions.webp"
                    alt="Quick Actions on Requests"
                    width={375}
                    height={374}
                    className="w-full mx-auto xl:max-w-72 max-w-64  hidden group-has-[#userPanel3:checked]/key:md:block"
                  />
                  <Image
                    src="/images/schoolConcern.webp"
                    alt="Concern & Feedback"
                    width={375}
                    height={374}
                    className="w-full mx-auto xl:max-w-72 max-w-64  hidden group-has-[#userPanel4:checked]/key:md:block"
                  />
                  <Image
                    src="/images/schoolNotification.webp"
                    alt="Notifications & Communication"
                    width={375}
                    height={374}
                    className="w-full mx-auto xl:max-w-72 max-w-64  hidden group-has-[#userPanel5:checked]/key:md:block"
                  />
                  <Image
                    src="/images/schoolRealTimeAttendance.webp"
                    alt="Real Time Attendance Monitoring"
                    width={375}
                    height={374}
                    className="w-full mx-auto xl:max-w-72 max-w-64  hidden group-has-[#userPanel6:checked]/key:md:block"
                  />
                  <Image
                    src="/images/schoolNews.webp"
                    alt="News, Circular & Announcements"
                    width={375}
                    height={374}
                    className="w-full mx-auto xl:max-w-72 max-w-64  hidden group-has-[#userPanel7:checked]/key:md:block"
                  />
                  <Image
                    src="/images/schoolTimetable.webp"
                    alt="First Ever AI Powered Time Table Management"
                    width={375}
                    height={374}
                    className="w-full mx-auto xl:max-w-72 max-w-64  hidden group-has-[#userPanel8:checked]/key:md:block"
                  />
                </div>
                <div className="md:flex hidden flex-col gap-y-12">
                  <div className="group w-full userPanel5">
                    <label
                      htmlFor="userPanel5"
                      className="md:!w-full cursor-pointer h-full max-md:!flex max-md:!flex-col "
                    >
                      <input
                        type="radio"
                        name="userPanel"
                        id="userPanel5"
                        className="hidden"
                      />
                      <div className="flex flex-row items-center group-has-[:checked]:md:flex-col group-has-[:checked]:md:items-start gap-3">
                        <span className="size-16 shrink-0 flex justify-center items-center bg-white group-has-[:checked]:md:bg-[#2D86FF] shadow-md rounded-xl p-2">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="text-[#393A8C] group-has-[:checked]:md:text-white"
                            width="22"
                            height="22"
                            viewBox="0 0 23 28"
                            fill="currentColor"
                          >
                            <path
                              d="M10.9987 27.3334C10.2654 27.3334 9.63759 27.0723 9.11536 26.5501C8.59314 26.0279 8.33203 25.4001 8.33203 24.6667H13.6654C13.6654 25.4001 13.4043 26.0279 12.882 26.5501C12.3598 27.0723 11.732 27.3334 10.9987 27.3334ZM0.332031 23.3334V20.6667H2.9987V11.3334C2.9987 9.48897 3.55425 7.85008 4.66536 6.41675C5.77648 4.98341 7.22092 4.04453 8.9987 3.60008V2.66675C8.9987 2.11119 9.19314 1.63897 9.58203 1.25008C9.97092 0.861192 10.4431 0.666748 10.9987 0.666748C11.5543 0.666748 12.0265 0.861192 12.4154 1.25008C12.8043 1.63897 12.9987 2.11119 12.9987 2.66675V3.10008C12.7543 3.58897 12.5765 4.08897 12.4654 4.60008C12.3543 5.11119 12.3098 5.63341 12.332 6.16675C12.1098 6.1223 11.8931 6.08341 11.682 6.05008C11.4709 6.01675 11.2431 6.00008 10.9987 6.00008C9.53203 6.00008 8.27648 6.5223 7.23203 7.56675C6.18759 8.61119 5.66536 9.86675 5.66536 11.3334V20.6667H16.332V12.1001C16.732 12.2779 17.1598 12.4167 17.6154 12.5167C18.0709 12.6167 18.532 12.6667 18.9987 12.6667V20.6667H21.6654V23.3334H0.332031ZM18.9987 10.0001C17.8876 10.0001 16.9431 9.61119 16.1654 8.83341C15.3876 8.05564 14.9987 7.11119 14.9987 6.00008C14.9987 4.88897 15.3876 3.94453 16.1654 3.16675C16.9431 2.38897 17.8876 2.00008 18.9987 2.00008C20.1098 2.00008 21.0543 2.38897 21.832 3.16675C22.6098 3.94453 22.9987 4.88897 22.9987 6.00008C22.9987 7.11119 22.6098 8.05564 21.832 8.83341C21.0543 9.61119 20.1098 10.0001 18.9987 10.0001Z"
                              fill="currentColor"
                            />
                          </svg>
                        </span>
                        <div className="flex flex-col gap-2">
                          <div className="group-has-[:checked]:md:text-4xl xl:text-3xl lg:text-2xl text-lg font-semibold text-[#393A8C] group-has-[:checked]:md:text-[#2D86FF]">
                            Notifications & Communication
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
                      className="md:!w-full cursor-pointer h-full max-md:!flex max-md:!flex-col "
                    >
                      <input
                        type="radio"
                        name="userPanel"
                        id="userPanel6"
                        className="hidden"
                      />
                      <div className="flex flex-row items-center group-has-[:checked]:md:flex-col group-has-[:checked]:md:items-start gap-3">
                        <span className="size-16 shrink-0 flex justify-center items-center bg-white group-has-[:checked]:md:bg-[#2D86FF] shadow-md rounded-xl p-2">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="text-[#393A8C] group-has-[:checked]:md:text-white"
                            width="22"
                            height="22"
                            viewBox="0 0 27 28"
                            fill="currentColor"
                          >
                            <path
                              d="M2.66667 27.3334C1.93333 27.3334 1.30556 27.0723 0.783333 26.5501C0.261111 26.0279 0 25.4001 0 24.6667V6.00008C0 5.26675 0.261111 4.63897 0.783333 4.11675C1.30556 3.59453 1.93333 3.33341 2.66667 3.33341H4V0.666748H6.66667V3.33341H17.3333V0.666748H20V3.33341H21.3333C22.0667 3.33341 22.6944 3.59453 23.2167 4.11675C23.7389 4.63897 24 5.26675 24 6.00008V12.6667H21.3333V11.3334H2.66667V24.6667H12V27.3334H2.66667ZM2.66667 8.66675H21.3333V6.00008H2.66667V8.66675ZM14.6667 27.3334V23.2334L22.0333 15.9001C22.2333 15.7001 22.4556 15.5556 22.7 15.4667C22.9444 15.3779 23.1889 15.3334 23.4333 15.3334C23.7 15.3334 23.9556 15.3834 24.2 15.4834C24.4444 15.5834 24.6667 15.7334 24.8667 15.9334L26.1 17.1667C26.2778 17.3667 26.4167 17.589 26.5167 17.8334C26.6167 18.0779 26.6667 18.3223 26.6667 18.5667C26.6667 18.8112 26.6222 19.0612 26.5333 19.3167C26.4444 19.5723 26.3 19.8001 26.1 20.0001L18.7667 27.3334H14.6667ZM16.6667 25.3334H17.9333L21.9667 21.2667L21.3667 20.6334L20.7333 20.0334L16.6667 24.0667V25.3334ZM21.3667 20.6334L20.7333 20.0334L21.9667 21.2667L21.3667 20.6334Z"
                              fill="currentColor"
                            />
                          </svg>
                        </span>
                        <div className="flex flex-col gap-2">
                          <div className="group-has-[:checked]:md:text-4xl xl:text-3xl lg:text-2xl text-lg font-semibold text-[#393A8C] group-has-[:checked]:md:text-[#2D86FF]">
                            Real Time Attendance Monitoring
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
                      className="md:!w-full cursor-pointer h-full max-md:!flex max-md:!flex-col "
                    >
                      <input
                        type="radio"
                        name="userPanel"
                        id="userPanel7"
                        className="hidden"
                      />
                      <div className="flex flex-row items-center group-has-[:checked]:md:flex-col group-has-[:checked]:md:items-start gap-3">
                        <span className="size-16 shrink-0 flex justify-center items-center bg-white group-has-[:checked]:md:bg-[#2D86FF] shadow-md rounded-xl p-2">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="22"
                            height="22"
                            className="text-[#393A8C] group-has-[:checked]:md:text-white"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                          >
                            <path
                              d="M2.66667 24C1.93333 24 1.30556 23.7389 0.783333 23.2167C0.261111 22.6944 0 22.0667 0 21.3333V2.66667C0 1.93333 0.261111 1.30556 0.783333 0.783333C1.30556 0.261111 1.93333 0 2.66667 0H17.3333L24 6.66667V21.3333C24 22.0667 23.7389 22.6944 23.2167 23.2167C22.6944 23.7389 22.0667 24 21.3333 24H2.66667ZM2.66667 21.3333H21.3333V8H16V2.66667H2.66667V21.3333ZM5.33333 18.6667H18.6667V16H5.33333V18.6667ZM5.33333 8H12V5.33333H5.33333V8ZM5.33333 13.3333H18.6667V10.6667H5.33333V13.3333Z"
                              fill="currentColor"
                            />
                          </svg>
                        </span>
                        <div className="flex flex-col gap-2">
                          <div className="group-has-[:checked]:md:text-4xl xl:text-3xl lg:text-2xl text-lg font-semibold text-[#393A8C] group-has-[:checked]:md:text-[#2D86FF]">
                            News, Circular & Announcements
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
                      className="md:!w-full cursor-pointer h-full max-md:!flex max-md:!flex-col "
                    >
                      <input
                        type="radio"
                        name="userPanel"
                        id="userPanel8"
                        className="hidden"
                      />
                      <div className="flex flex-row items-center group-has-[:checked]:md:flex-col group-has-[:checked]:md:items-start gap-3">
                        <span className="size-16 shrink-0 flex justify-center items-center bg-white group-has-[:checked]:md:bg-[#2D86FF] shadow-md rounded-xl p-2">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="22"
                            height="22"
                            className="text-[#393A8C] group-has-[:checked]:md:text-white"
                            viewBox="0 0 29 27"
                            fill="currentColor"
                          >
                            <path
                              d="M12.668 26.9999C11.0013 26.9999 9.44019 26.6888 7.98464 26.0666C6.52908 25.4444 5.25686 24.5888 4.16797 23.4999C3.07908 22.411 2.22352 21.1388 1.6013 19.6833C0.97908 18.2277 0.667969 16.6666 0.667969 14.9999C0.667969 13.3333 0.97908 11.7721 1.6013 10.3166C2.22352 8.86103 3.07908 7.58881 4.16797 6.49992C5.25686 5.41103 6.52908 4.55547 7.98464 3.93325C9.44019 3.31103 11.0013 2.99992 12.668 2.99992C13.1346 2.99992 13.5846 3.0277 14.018 3.08325C14.4513 3.13881 14.8902 3.22214 15.3346 3.33325V6.06659C14.8902 5.93325 14.4513 5.83325 14.018 5.76659C13.5846 5.69992 13.1346 5.66658 12.668 5.66658C10.0457 5.66658 7.83464 6.56659 6.03464 8.36658C4.23464 10.1666 3.33464 12.3777 3.33464 14.9999C3.33464 17.6221 4.23464 19.8333 6.03464 21.6333C7.83464 23.4333 10.0457 24.3333 12.668 24.3333C15.2902 24.3333 17.5013 23.4333 19.3013 21.6333C21.1013 19.8333 22.0013 17.6221 22.0013 14.9999C22.0013 14.7555 21.9902 14.5333 21.968 14.3333C21.9457 14.1333 21.9124 13.911 21.868 13.6666H24.6013C24.6457 13.911 24.668 14.1333 24.668 14.3333V14.9999C24.668 16.6666 24.3569 18.2277 23.7346 19.6833C23.1124 21.1388 22.2569 22.411 21.168 23.4999C20.0791 24.5888 18.8069 25.4444 17.3513 26.0666C15.8957 26.6888 14.3346 26.9999 12.668 26.9999ZM16.4013 20.5999L11.3346 15.5333V8.33325H14.0013V14.4666L18.268 18.7333L16.4013 20.5999ZM22.0013 10.9999V6.99992H18.0013V4.33325H22.0013V0.333252H24.668V4.33325H28.668V6.99992H24.668V10.9999H22.0013Z"
                              fill="currentColor"
                            />
                          </svg>
                        </span>
                        <div className="flex flex-col gap-2">
                          <div className="group-has-[:checked]:md:text-4xl xl:text-3xl lg:text-2xl text-lg font-semibold text-[#393A8C] group-has-[:checked]:md:text-[#2D86FF]">
                            First Ever AI Powered Time Table Management
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
              <div className="mobileView md:hidden block w-full">
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
                          src="/images/schoolFees.webp"
                          alt="Fees Management Monitor"
                          width={375}
                          height={374}
                          className="size-full mx-auto max-w-64"
                        />
                      </div>
                      <div className="w-full flex flex-col justify-center gap-2">
                        <div className="text-xl font-semibold text-[#2D86FF] text-center">
                          Fees Management Monitor
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
                          src="/images/schoolEvent.webp"
                          alt="Event & Holiday Generator"
                          width={375}
                          height={374}
                          className="size-full mx-auto max-w-64"
                        />
                      </div>
                      <div className="flex flex-col justify-center gap-2">
                        <div className="text-xl font-semibold text-[#2D86FF] text-center">
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
                          src="/images/schoolQuickActions.webp"
                          alt="Quick Actions on Requests"
                          width={375}
                          height={374}
                          className="size-full mx-auto max-w-64"
                        />
                      </div>
                      <div className="flex flex-col justify-center gap-2">
                        <div className="text-xl font-semibold text-[#2D86FF] text-center">
                          Quick Actions on Requests
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
                          src="/images/schoolConcern.webp"
                          alt="Concern & Feedback"
                          width={375}
                          height={374}
                          className="size-full mx-auto max-w-64"
                        />
                      </div>
                      <div className="flex flex-col justify-center gap-2">
                        <div className="text-xl font-semibold text-[#2D86FF] text-center">
                          Concern & Feedback
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
                          src="/images/schoolNotification.webp"
                          alt="Notifications & Communication"
                          width={375}
                          height={374}
                          className="size-full mx-auto max-w-64"
                        />
                      </div>
                      <div className="flex flex-col justify-center gap-2">
                        <div className="text-xl font-semibold text-[#2D86FF] text-center">
                          Notifications & Communication
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
                          src="/images/schoolRealTimeAttendance.webp"
                          alt="Real Time Attendance Monitoring"
                          width={375}
                          height={374}
                          className="size-full mx-auto max-w-64"
                        />
                      </div>
                      <div className="flex flex-col justify-center gap-2">
                        <div className="text-xl font-semibold text-[#2D86FF] text-center">
                          Real Time Attendance Monitoring
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
                          src="/images/schoolNews.webp"
                          alt="News, Circular & Announcements"
                          width={375}
                          height={374}
                          className="size-full mx-auto max-w-64"
                        />
                      </div>
                      <div className="flex flex-col justify-center gap-2">
                        <div className="text-xl font-semibold text-[#2D86FF] text-center">
                          News, Circular & Announcements
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
                          src="/images/schoolTimetable.webp"
                          alt="First Ever AI Powered Time Table Management"
                          width={375}
                          height={374}
                          className="size-full mx-auto max-w-64"
                        />
                      </div>
                      <div className="flex flex-col justify-center gap-2">
                        <div className="text-xl font-semibold text-[#2D86FF] text-center">
                          First Ever AI Powered Time Table Management
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
            <div className="w-full items-start has-[#panel2:checked]:flex hidden pt-16">
              <input type="radio" name="panel" id="panel2" className="hidden" />

              {/* desktop view */}
              <div className="md:grid xl:grid-cols-3 md:grid-cols-3">
                <div className="md:flex hidden flex-col gap-y-12 ">
                  <div className="group w-full studentPanel1">
                    <label
                      htmlFor="studentPanel1"
                      className="md:!w-full cursor-pointer h-full max-md:!flex max-md:!flex-col "
                    >
                      <input
                        type="radio"
                        name="studentPanel"
                        id="studentPanel1"
                        className="hidden"
                        defaultChecked
                      />
                      <div className="flex flex-row items-center group-has-[:checked]:md:flex-col group-has-[:checked]:md:items-start gap-3">
                        <span className="size-16 shrink-0 flex justify-center items-center bg-white group-has-[:checked]:md:bg-[#6148FA] shadow-md rounded-xl p-2">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="22"
                            height="22"
                            className="text-[#393A8C] group-has-[:checked]:md:text-white"
                            viewBox="0 0 32 32"
                            fill="currentColor"
                          >
                            <mask
                              id="mask0_20150_1180"
                              style={{ maskType: "alpha" }}
                              maskUnits="userSpaceOnUse"
                              x="0"
                              y="0"
                              width="32"
                              height="32"
                            >
                              <rect
                                width="32"
                                height="32"
                                fill="currentColor"
                              />
                            </mask>
                            <g mask="url(#mask0_20150_1180)">
                              <path
                                d="M7.99984 18.6667H18.6665V16.0001H7.99984V18.6667ZM7.99984 14.6667H23.9998V12.0001H7.99984V14.6667ZM7.99984 10.6667H23.9998V8.00008H7.99984V10.6667ZM2.6665 29.3334V5.33341C2.6665 4.60008 2.92762 3.9723 3.44984 3.45008C3.97206 2.92786 4.59984 2.66675 5.33317 2.66675H26.6665C27.3998 2.66675 28.0276 2.92786 28.5498 3.45008C29.0721 3.9723 29.3332 4.60008 29.3332 5.33341V21.3334C29.3332 22.0667 29.0721 22.6945 28.5498 23.2167C28.0276 23.739 27.3998 24.0001 26.6665 24.0001H7.99984L2.6665 29.3334ZM6.8665 21.3334H26.6665V5.33341H5.33317V22.8334L6.8665 21.3334Z"
                                fill="currentColor"
                              />
                            </g>
                          </svg>
                        </span>
                        <div className="flex flex-col gap-2">
                          <div className="group-has-[:checked]:md:text-4xl xl:text-3xl lg:text-2xl text-lg font-semibold text-[#393A8C] group-has-[:checked]:md:text-[#6148FA]">
                            Real Time Updates
                          </div>
                          <div className="lg:text-base text-sm text-[#363637] group-has-[:checked]:md:block hidden">
                            Instant notifications for attendance, homework, exam
                            results, and school events.
                          </div>
                        </div>
                      </div>
                    </label>
                  </div>
                  <div className="group w-full studentPanel2">
                    <label
                      htmlFor="studentPanel2"
                      className="md:!w-full cursor-pointer h-full max-md:!flex max-md:!flex-col "
                    >
                      <input
                        type="radio"
                        name="studentPanel"
                        id="studentPanel2"
                        className="hidden"
                      />
                      <div className="flex flex-row items-center group-has-[:checked]:md:flex-col group-has-[:checked]:md:items-start gap-3">
                        <span className="size-16 shrink-0 flex justify-center items-center bg-white group-has-[:checked]:md:bg-[#6148FA] shadow-md rounded-xl p-2">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="22"
                            height="22"
                            className="text-[#393A8C] group-has-[:checked]:md:text-white"
                            viewBox="0 0 28 28"
                            fill="currentColor"
                          >
                            <path
                              d="M13.9998 21.3334C15.5109 21.3334 16.8832 20.9056 18.1165 20.0501C19.3498 19.1945 20.2443 18.0667 20.7998 16.6667H7.19984C7.75539 18.0667 8.64984 19.1945 9.88317 20.0501C11.1165 20.9056 12.4887 21.3334 13.9998 21.3334ZM8.39984 12.6667L9.8665 11.2667L11.2665 12.6667L12.6665 11.2667L9.8665 8.40008L6.99984 11.2667L8.39984 12.6667ZM16.7332 12.6667L18.1332 11.2667L19.5998 12.6667L20.9998 11.2667L18.1332 8.40008L15.3332 11.2667L16.7332 12.6667ZM13.9998 27.3334C12.1554 27.3334 10.4221 26.9834 8.79984 26.2834C7.17761 25.5834 5.7665 24.6334 4.5665 23.4334C3.3665 22.2334 2.4165 20.8223 1.7165 19.2001C1.0165 17.5779 0.666504 15.8445 0.666504 14.0001C0.666504 12.1556 1.0165 10.4223 1.7165 8.80008C2.4165 7.17786 3.3665 5.76675 4.5665 4.56675C5.7665 3.36675 7.17761 2.41675 8.79984 1.71675C10.4221 1.01675 12.1554 0.666748 13.9998 0.666748C15.8443 0.666748 17.5776 1.01675 19.1998 1.71675C20.8221 2.41675 22.2332 3.36675 23.4332 4.56675C24.6332 5.76675 25.5832 7.17786 26.2832 8.80008C26.9832 10.4223 27.3332 12.1556 27.3332 14.0001C27.3332 15.8445 26.9832 17.5779 26.2832 19.2001C25.5832 20.8223 24.6332 22.2334 23.4332 23.4334C22.2332 24.6334 20.8221 25.5834 19.1998 26.2834C17.5776 26.9834 15.8443 27.3334 13.9998 27.3334ZM13.9998 24.6667C16.9776 24.6667 19.4998 23.6334 21.5665 21.5667C23.6332 19.5001 24.6665 16.9779 24.6665 14.0001C24.6665 11.0223 23.6332 8.50008 21.5665 6.43341C19.4998 4.36675 16.9776 3.33341 13.9998 3.33341C11.0221 3.33341 8.49984 4.36675 6.43317 6.43341C4.3665 8.50008 3.33317 11.0223 3.33317 14.0001C3.33317 16.9779 4.3665 19.5001 6.43317 21.5667C8.49984 23.6334 11.0221 24.6667 13.9998 24.6667Z"
                              fill="currentColor"
                            />
                          </svg>
                        </span>
                        <div className="flex flex-col gap-2">
                          <div className="group-has-[:checked]:md:text-4xl xl:text-3xl lg:text-2xl text-lg font-semibold text-[#393A8C] group-has-[:checked]:md:text-[#6148FA]">
                            AI- Powered Behavior Insight
                          </div>
                          <div className="lg:text-base text-sm text-[#363637] group-has-[:checked]:md:block hidden">
                            Instant notifications for attendance, homework, exam
                            results, and school events.
                          </div>
                        </div>
                      </div>
                    </label>
                  </div>
                  <div className="group w-full studentPanel3">
                    <label
                      htmlFor="studentPanel3"
                      className="md:!w-full cursor-pointer h-full max-md:!flex max-md:!flex-col "
                    >
                      <input
                        type="radio"
                        name="studentPanel"
                        id="studentPanel3"
                        className="hidden"
                      />
                      <div className="flex flex-row items-center group-has-[:checked]:md:flex-col group-has-[:checked]:md:items-start gap-3">
                        <span className="size-16 shrink-0 flex justify-center items-center bg-white group-has-[:checked]:md:bg-[#6148FA] shadow-md rounded-xl p-2">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="22"
                            height="22"
                            className="text-[#393A8C] group-has-[:checked]:md:text-white"
                            viewBox="0 0 28 28"
                            fill="currentColor"
                          >
                            <path
                              d="M13.6013 22.0001C11.468 21.889 9.66797 21.0667 8.2013 19.5334C6.73464 18.0001 6.0013 16.1556 6.0013 14.0001C6.0013 11.7779 6.77908 9.88897 8.33464 8.33342C9.89019 6.77786 11.7791 6.00008 14.0013 6.00008C16.1569 6.00008 18.0013 6.73342 19.5346 8.20008C21.068 9.66675 21.8902 11.4667 22.0013 13.6001L19.2013 12.7667C18.9124 11.5667 18.2902 10.5834 17.3346 9.81675C16.3791 9.05008 15.268 8.66675 14.0013 8.66675C12.5346 8.66675 11.2791 9.18897 10.2346 10.2334C9.19019 11.2779 8.66797 12.5334 8.66797 14.0001C8.66797 15.2667 9.0513 16.3779 9.81797 17.3334C10.5846 18.289 11.568 18.9112 12.768 19.2001L13.6013 22.0001ZM15.2013 27.2668C15.0013 27.3112 14.8013 27.3334 14.6013 27.3334H14.0013C12.1569 27.3334 10.4235 26.9834 8.8013 26.2834C7.17908 25.5834 5.76797 24.6334 4.56797 23.4334C3.36797 22.2334 2.41797 20.8223 1.71797 19.2001C1.01797 17.5779 0.667969 15.8445 0.667969 14.0001C0.667969 12.1556 1.01797 10.4223 1.71797 8.80008C2.41797 7.17786 3.36797 5.76675 4.56797 4.56675C5.76797 3.36675 7.17908 2.41675 8.8013 1.71675C10.4235 1.01675 12.1569 0.666748 14.0013 0.666748C15.8457 0.666748 17.5791 1.01675 19.2013 1.71675C20.8235 2.41675 22.2346 3.36675 23.4346 4.56675C24.6346 5.76675 25.5846 7.17786 26.2846 8.80008C26.9846 10.4223 27.3346 12.1556 27.3346 14.0001V14.6001C27.3346 14.8001 27.3124 15.0001 27.268 15.2001L24.668 14.4001V14.0001C24.668 11.0223 23.6346 8.50008 21.568 6.43342C19.5013 4.36675 16.9791 3.33341 14.0013 3.33341C11.0235 3.33341 8.5013 4.36675 6.43464 6.43342C4.36797 8.50008 3.33464 11.0223 3.33464 14.0001C3.33464 16.9779 4.36797 19.5001 6.43464 21.5667C8.5013 23.6334 11.0235 24.6667 14.0013 24.6667H14.4013L15.2013 27.2668ZM25.368 28.0001L19.668 22.3001L18.0013 27.3334L14.0013 14.0001L27.3346 18.0001L22.3013 19.6667L28.0013 25.3667L25.368 28.0001Z"
                              fill="currentColor"
                            />
                          </svg>
                        </span>
                        <div className="flex flex-col gap-2">
                          <div className="group-has-[:checked]:md:text-4xl xl:text-3xl lg:text-2xl text-lg font-semibold text-[#393A8C] group-has-[:checked]:md:text-[#6148FA]">
                            AI-Powered Attendance
                          </div>
                          <div className="lg:text-base text-sm text-[#363637] group-has-[:checked]:md:block hidden">
                            Instant notifications for attendance, homework, exam
                            results, and school events.
                          </div>
                        </div>
                      </div>
                    </label>
                  </div>
                </div>
                <div className="key-images md:flex hidden">
                  <Image
                    src="/images/studentRealTimeUpdate.webp"
                    alt="Real Time Updates"
                    width={375}
                    height={374}
                    className="w-full mx-auto xl:max-w-72 max-w-64  hidden group-has-[#studentPanel1:checked]/key:md:block"
                  />
                  <Image
                    src="/images/studentBehavior.webp"
                    alt="AI- Powered Behavior Insight"
                    width={375}
                    height={374}
                    className="w-full mx-auto xl:max-w-72 max-w-64  hidden group-has-[#studentPanel2:checked]/key:md:block"
                  />
                  <Image
                    src="/images/studentAttendance.webp"
                    alt="AI-Powered Attendance"
                    width={375}
                    height={374}
                    className="w-full mx-auto xl:max-w-72 max-w-64  hidden group-has-[#studentPanel3:checked]/key:md:block"
                  />
                  <Image
                    src="/images/studentProgress.webp"
                    alt="Smart Progress Reports"
                    width={375}
                    height={374}
                    className="w-full mx-auto xl:max-w-72 max-w-64  hidden group-has-[#studentPanel4:checked]/key:md:block"
                  />
                  <Image
                    src="/images/studentInsights.webp"
                    alt="Realtime Insights"
                    width={375}
                    height={374}
                    className="w-full mx-auto xl:max-w-72 max-w-64  hidden group-has-[#studentPanel5:checked]/key:md:block"
                  />
                  <Image
                    src="/images/studentFees.webp"
                    alt="Fees Reminder"
                    width={375}
                    height={374}
                    className="w-full mx-auto xl:max-w-72 max-w-64  hidden group-has-[#studentPanel6:checked]/key:md:block"
                  />
                </div>
                <div className="md:flex hidden flex-col gap-y-12">
                  <div className="group w-full studentPanel4">
                    <label
                      htmlFor="studentPanel4"
                      className="md:!w-full cursor-pointer h-full max-md:!flex max-md:!flex-col "
                    >
                      <input
                        type="radio"
                        name="studentPanel"
                        id="studentPanel4"
                        className="hidden"
                      />
                      <div className="flex flex-row items-center group-has-[:checked]:md:flex-col group-has-[:checked]:md:items-start gap-3">
                        <span className="size-16 shrink-0 flex justify-center items-center bg-white group-has-[:checked]:md:bg-[#6148FA] shadow-md rounded-xl p-2">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="22"
                            height="22"
                            className="text-[#393A8C] group-has-[:checked]:md:text-white"
                            viewBox="0 0 26 25"
                            fill="currentColor"
                          >
                            <path
                              d="M0.733398 25L9.3334 13H16.0667L26.0001 1.40003V25H0.733398ZM3.06673 17.2334L0.933398 15.7L6.66673 7.6667H13.4001L19.6667 0.366699L21.6667 2.10003L14.6001 10.3334H8.00007L3.06673 17.2334ZM5.9334 22.3334H23.3334V8.60003L17.2667 15.6667H10.6667L5.9334 22.3334Z"
                              fill="currentColor"
                            />
                          </svg>
                        </span>
                        <div className="flex flex-col gap-2">
                          <div className="group-has-[:checked]:md:text-4xl xl:text-3xl lg:text-2xl text-lg font-semibold text-[#393A8C] group-has-[:checked]:md:text-[#6148FA]">
                            Smart Progress Reports
                          </div>
                          <div className="lg:text-base text-sm text-[#363637] group-has-[:checked]:md:block hidden">
                            Instant notifications for attendance, homework, exam
                            results, and school events.
                          </div>
                        </div>
                      </div>
                    </label>
                  </div>
                  <div className="group w-full studentPanel5">
                    <label
                      htmlFor="studentPanel5"
                      className="md:!w-full cursor-pointer h-full max-md:!flex max-md:!flex-col "
                    >
                      <input
                        type="radio"
                        name="studentPanel"
                        id="studentPanel5"
                        className="hidden"
                      />
                      <div className="flex flex-row items-center group-has-[:checked]:md:flex-col group-has-[:checked]:md:items-start gap-3">
                        <span className="size-16 shrink-0 flex justify-center items-center bg-white group-has-[:checked]:md:bg-[#6148FA] shadow-md rounded-xl p-2">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="22"
                            height="22"
                            className="text-[#393A8C] group-has-[:checked]:md:text-white"
                            viewBox="0 0 30 27"
                            fill="currentColor"
                          >
                            <path
                              d="M9.66647 15.6666C10.0443 15.6666 10.3609 15.5389 10.6165 15.2833C10.872 15.0277 10.9998 14.7111 10.9998 14.3333C10.9998 13.9555 10.872 13.6389 10.6165 13.3833C10.3609 13.1277 10.0443 13 9.66647 13C9.28869 13 8.97203 13.1277 8.71647 13.3833C8.46092 13.6389 8.33314 13.9555 8.33314 14.3333C8.33314 14.7111 8.46092 15.0277 8.71647 15.2833C8.97203 15.5389 9.28869 15.6666 9.66647 15.6666ZM14.9998 15.6666C15.3776 15.6666 15.6943 15.5389 15.9498 15.2833C16.2054 15.0277 16.3331 14.7111 16.3331 14.3333C16.3331 13.9555 16.2054 13.6389 15.9498 13.3833C15.6943 13.1277 15.3776 13 14.9998 13C14.622 13 14.3054 13.1277 14.0498 13.3833C13.7943 13.6389 13.6665 13.9555 13.6665 14.3333C13.6665 14.7111 13.7943 15.0277 14.0498 15.2833C14.3054 15.5389 14.622 15.6666 14.9998 15.6666ZM20.3331 15.6666C20.7109 15.6666 21.0276 15.5389 21.2831 15.2833C21.5387 15.0277 21.6665 14.7111 21.6665 14.3333C21.6665 13.9555 21.5387 13.6389 21.2831 13.3833C21.0276 13.1277 20.7109 13 20.3331 13C19.9554 13 19.6387 13.1277 19.3831 13.3833C19.1276 13.6389 18.9998 13.9555 18.9998 14.3333C18.9998 14.7111 19.1276 15.0277 19.3831 15.2833C19.6387 15.5389 19.9554 15.6666 20.3331 15.6666ZM14.9998 26.3333C13.3331 26.3333 11.772 26.0166 10.3165 25.3833C8.86092 24.75 7.59425 23.8944 6.51647 22.8166C5.43869 21.7389 4.58314 20.4722 3.94981 19.0166C3.31647 17.5611 2.9998 16 2.9998 14.3333C2.9998 12.6666 3.31647 11.1055 3.94981 9.64997C4.58314 8.19441 5.43869 6.92774 6.51647 5.84997C7.59425 4.77219 8.86092 3.91663 10.3165 3.2833C11.772 2.64997 13.3331 2.3333 14.9998 2.3333C16.6665 2.3333 18.2276 2.64997 19.6831 3.2833C21.1387 3.91663 22.4054 4.77219 23.4831 5.84997C24.5609 6.92774 25.4165 8.19441 26.0498 9.64997C26.6831 11.1055 26.9998 12.6666 26.9998 14.3333C26.9998 16 26.6831 17.5611 26.0498 19.0166C25.4165 20.4722 24.5609 21.7389 23.4831 22.8166C22.4054 23.8944 21.1387 24.75 19.6831 25.3833C18.2276 26.0166 16.6665 26.3333 14.9998 26.3333ZM6.46647 0.133301L8.33314 1.99997L2.66647 7.66663L0.799805 5.79997L6.46647 0.133301ZM23.5331 0.133301L29.1998 5.79997L27.3331 7.66663L21.6665 1.99997L23.5331 0.133301ZM14.9998 23.6666C17.5998 23.6666 19.8054 22.7611 21.6165 20.95C23.4276 19.1389 24.3331 16.9333 24.3331 14.3333C24.3331 11.7333 23.4276 9.52774 21.6165 7.71663C19.8054 5.90552 17.5998 4.99997 14.9998 4.99997C12.3998 4.99997 10.1943 5.90552 8.38314 7.71663C6.57203 9.52774 5.66647 11.7333 5.66647 14.3333C5.66647 16.9333 6.57203 19.1389 8.38314 20.95C10.1943 22.7611 12.3998 23.6666 14.9998 23.6666Z"
                              fill="currentColor"
                            />
                          </svg>
                        </span>
                        <div className="flex flex-col gap-2">
                          <div className="group-has-[:checked]:md:text-4xl xl:text-3xl lg:text-2xl text-lg font-semibold text-[#393A8C] group-has-[:checked]:md:text-[#6148FA]">
                            Realtime Insights
                          </div>
                          <div className="lg:text-base text-sm text-[#363637] group-has-[:checked]:md:block hidden">
                            Instant notifications for attendance, homework, exam
                            results, and school events.
                          </div>
                        </div>
                      </div>
                    </label>
                  </div>
                  <div className="group w-full studentPanel6">
                    <label
                      htmlFor="studentPanel6"
                      className="md:!w-full cursor-pointer h-full max-md:!flex max-md:!flex-col "
                    >
                      <input
                        type="radio"
                        name="studentPanel"
                        id="studentPanel6"
                        className="hidden"
                      />
                      <div className="flex flex-row items-center group-has-[:checked]:md:flex-col group-has-[:checked]:md:items-start gap-3">
                        <span className="size-16 shrink-0 flex justify-center items-center bg-white group-has-[:checked]:md:bg-[#6148FA] shadow-md rounded-xl p-2">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="22"
                            height="22"
                            className="text-[#393A8C] group-has-[:checked]:md:text-white"
                            viewBox="0 0 23 28"
                            fill="currentColor"
                          >
                            <path
                              d="M10.9987 27.3334C10.2654 27.3334 9.63759 27.0723 9.11536 26.5501C8.59314 26.0279 8.33203 25.4001 8.33203 24.6667H13.6654C13.6654 25.4001 13.4043 26.0279 12.882 26.5501C12.3598 27.0723 11.732 27.3334 10.9987 27.3334ZM0.332031 23.3334V20.6667H2.9987V11.3334C2.9987 9.48897 3.55425 7.85008 4.66536 6.41675C5.77648 4.98341 7.22092 4.04453 8.9987 3.60008V2.66675C8.9987 2.11119 9.19314 1.63897 9.58203 1.25008C9.97092 0.861192 10.4431 0.666748 10.9987 0.666748C11.5543 0.666748 12.0265 0.861192 12.4154 1.25008C12.8043 1.63897 12.9987 2.11119 12.9987 2.66675V3.10008C12.7543 3.58897 12.5765 4.08897 12.4654 4.60008C12.3543 5.11119 12.3098 5.63341 12.332 6.16675C12.1098 6.1223 11.8931 6.08341 11.682 6.05008C11.4709 6.01675 11.2431 6.00008 10.9987 6.00008C9.53203 6.00008 8.27648 6.5223 7.23203 7.56675C6.18759 8.61119 5.66536 9.86675 5.66536 11.3334V20.6667H16.332V12.1001C16.732 12.2779 17.1598 12.4167 17.6154 12.5167C18.0709 12.6167 18.532 12.6667 18.9987 12.6667V20.6667H21.6654V23.3334H0.332031ZM18.9987 10.0001C17.8876 10.0001 16.9431 9.61119 16.1654 8.83341C15.3876 8.05564 14.9987 7.11119 14.9987 6.00008C14.9987 4.88897 15.3876 3.94453 16.1654 3.16675C16.9431 2.38897 17.8876 2.00008 18.9987 2.00008C20.1098 2.00008 21.0543 2.38897 21.832 3.16675C22.6098 3.94453 22.9987 4.88897 22.9987 6.00008C22.9987 7.11119 22.6098 8.05564 21.832 8.83341C21.0543 9.61119 20.1098 10.0001 18.9987 10.0001Z"
                              fill="currentColor"
                            />
                          </svg>
                        </span>
                        <div className="flex flex-col gap-2">
                          <div className="group-has-[:checked]:md:text-4xl xl:text-3xl lg:text-2xl text-lg font-semibold text-[#393A8C] group-has-[:checked]:md:text-[#6148FA]">
                            Fees Reminder
                          </div>
                          <div className="lg:text-base text-sm text-[#363637] group-has-[:checked]:md:block hidden">
                            Instant notifications for attendance, homework, exam
                            results, and school events.
                          </div>
                        </div>
                      </div>
                    </label>
                  </div>
                </div>
              </div>
              {/* mobile view */}
              <div className="mobileView md:hidden block w-full">
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
                          src="/images/studentRealTimeUpdate.webp"
                          alt="Real Time Updates"
                          width={375}
                          height={374}
                          className="size-full mx-auto max-w-64"
                        />
                      </div>
                      <div className="flex flex-col justify-center gap-2">
                        <div className="text-xl font-semibold text-[#6148FA] text-center">
                          Real Time Updates
                        </div>
                        <div className="text-xs text-[#363637] text-center">
                          Instant notifications for attendance, homework, exam
                          results, and school events.
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="embla__slide text-white shrink-0 px-2 basis-[100%] ">
                    <div className="flex flex-col gap-y-3">
                      <div className="size-full">
                        <Image
                          src="/images/studentBehavior.webp"
                          alt="AI- Powered Behavior Insight"
                          width={375}
                          height={374}
                          className="size-full mx-auto max-w-64"
                        />
                      </div>
                      <div className="flex flex-col justify-center gap-2">
                        <div className="text-xl font-semibold text-[#6148FA] text-center">
                          AI- Powered Behavior Insight
                        </div>
                        <div className="text-xs text-[#363637] text-center">
                          Instant notifications for attendance, homework, exam
                          results, and school events.
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="embla__slide text-white shrink-0 px-2 basis-[100%] ">
                    <div className="flex flex-col gap-y-3">
                      <div className="size-full">
                        <Image
                          src="/images/studentAttendance.webp"
                          alt="AI-Powered Attendance"
                          width={375}
                          height={374}
                          className="size-full mx-auto max-w-64"
                        />
                      </div>
                      <div className="flex flex-col justify-center gap-2">
                        <div className="text-xl font-semibold text-[#6148FA] text-center">
                          AI-Powered Attendance
                        </div>
                        <div className="text-xs text-[#363637] text-center">
                          Instant notifications for attendance, homework, exam
                          results, and school events.
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="embla__slide text-white shrink-0 px-2 basis-[100%] ">
                    <div className="flex flex-col gap-y-3">
                      <div className="size-full">
                        <Image
                          src="/images/studentProgress.webp"
                          alt="Smart Progress Reports"
                          width={375}
                          height={374}
                          className="size-full mx-auto max-w-64"
                        />
                      </div>
                      <div className="flex flex-col justify-center gap-2">
                        <div className="text-xl font-semibold text-[#6148FA] text-center">
                          Smart Progress Reports
                        </div>
                        <div className="text-xs text-[#363637] text-center">
                          Instant notifications for attendance, homework, exam
                          results, and school events.
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="embla__slide text-white shrink-0 px-2 basis-[100%] ">
                    <div className="flex flex-col gap-y-3">
                      <div className="size-full">
                        <Image
                          src="/images/studentInsights.webp"
                          alt="Realtime Insights"
                          width={375}
                          height={374}
                          className="size-full mx-auto max-w-64"
                        />
                      </div>
                      <div className="flex flex-col justify-center gap-2">
                        <div className="text-xl font-semibold text-[#6148FA] text-center">
                          Realtime Insights
                        </div>
                        <div className="text-xs text-[#363637] text-center">
                          Instant notifications for attendance, homework, exam
                          results, and school events.
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="embla__slide text-white shrink-0 px-2 basis-[100%] ">
                    <div className="flex flex-col gap-y-3">
                      <div className="size-full">
                        <Image
                          src="/images/studentFees.webp"
                          alt="Fees Reminder"
                          width={375}
                          height={374}
                          className="size-full mx-auto max-w-64"
                        />
                      </div>
                      <div className="flex flex-col justify-center gap-2">
                        <div className="text-xl font-semibold text-[#6148FA] text-center">
                          Fees Reminder
                        </div>
                        <div className="text-xs text-[#363637] text-center">
                          Instant notifications for attendance, homework, exam
                          results, and school events.
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
