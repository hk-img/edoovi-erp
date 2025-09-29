import Image from "next/image";
import EmblaCarousel from "../../components/emblaCarousel/EmblaCarousel";
import AwardCarousel from "@/components/awardCarousel/AwardCarousel";
import TrustedLogo from "@/components/trustedLogo/TrustedLogo";
import Testimonial from "@/components/testimonial/Testimonial";

export const metadata = {
  title: "Our Solutions | Edoovi ERP – Smart School Management System",
  description: "Edoovi ERP offers complete AI-powered School ERP & Management Software solutions. Enjoy 1 Year Free access. Simplify education. Try free today!",

  robots: {
    index: false,
    follow: false,
  },
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_BASE_URL}/school-management-system`,
  },
  openGraph: {
    title: "Edoovi ERP Solutions",
    description:
      "Edoovi ERP offers complete School ERP & Management Software solutions. Enjoy 1 Year Free access to smart tools. Simplify education. Try free today!",
    siteName: "Edoovi ERP"
  },
};

const page = () => {
  return (
    <>
      <section className="heroSection  relative overflow-hidden lg:min-h-dvh max-md:!h-auto flex flex-col  bg-white md:pt-12 pt-8">
        <div className="view  xl:pt-4 lg:pt-3 pt-4 px-4 lg:px-6 xl:px-8">
          <div className="flex flex-col">
            <div className="w-full">
              <div className="lg:text-2xl md:text-xl text-lg text-[#454444] text-center font-semibold">
                Manage the School Operations with
              </div>
              <h1 className="w-full xl:text-5xl lg:text-4xl text-3xl pt-4 md:font-bold text-center font-semibold text-[#393A8C]  relative max-md:text-center">
                The Cutting-Edge School ERP System
              </h1>
            </div>
          </div>
        </div>
        <div className="w-full">
          <Image
            className="size-full object-cover aspect-[1265/496]"
            src="/images/schoolManagementHeroImg.webp"
            width={1265}
            height={496}
            alt="The Cutting-Edge School ERP System "
          />
        </div>
      </section>
      <section className="ImpactSolution relative  py-12 bg-[#F2FDFF]">
        <div className="view xl:py-4 lg:py-3 relative">
          <div className="flex flex-col">
            <div className="flex flex-wrap justify-between relative">
              <div className="md:w-1/2 w-full ">
                <div className="w-full flex flex-col gap-y-3 md:sticky md:top-0">
                  <h2 className="w-full  2xl:text-5xl xl:text-5xl max-sm:text-center lg:text-4xl md:text-3xl sm:text-2xl text-2xl font-bold text-[#393A8C] text-balance relative z-10  md:pb-8 pb-4">
                    Boost Your School Operations with AI-Driven Features
                  </h2>
                  <div className="w-full">
                    <Image
                      src="/images/markAttendance.webp"
                      alt="Boost Your School Operations with AI-Driven Features "
                      width={568}
                      height={431}
                      className="size-full mx-auto object-contain aspect-[568/431]"
                    />
                  </div>
                </div>
              </div>
              <div className="md:w-1/2 w-full">
                <ul className="w-full flex flex-col md:gap-8 gap-4">
                  <li className="md:p-6 py-6 px-4 flex flex-col gap-2 rounded-xl bg-white shadow-[0px_3.29px_11.77px_0px_#0000001F] group/growth">
                    <input
                      type="radio"
                      name="growth"
                      id="growth0"
                      className="hidden"
                      defaultChecked
                    />
                    <label
                      htmlFor="growth0"
                      className="flex items-center cursor-pointer gap-2 before:absolute before:-inset-4 relative"
                    >
                      <h3 className="grow flex items-center gap-x-3  md:text-2xl text-xl  font-bold text-[#272727]">
                        <span>
                          <Image
                            src="/images/fileRound.svg"
                            alt="file icon"
                            width={45}
                            height={45}
                            className="md:size-14 size-10 mx-auto object-contain aspect-square"
                          />
                        </span>
                        Monitoring Attendance
                      </h3>
                      <div className="shrink-0 relative  group-has-[:checked]/growth:rotate-180   duration-300">
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
                    <div className="lg:text-base text-sm font-normal text-[#595959] hidden group-has-[:checked]/growth:block">
                      <p>
                        Keep track of class attendance, create daily reports,
                        apply holiday logic, select sections randomly, and more
                        with our built-in intelligent tools.
                      </p>
                    </div>
                  </li>
                  <li className="md:p-6 py-6 px-4 flex flex-col gap-2 rounded-xl bg-white shadow-[0px_3.29px_11.77px_0px_#0000001F] group/growth">
                    <input
                      type="radio"
                      name="growth"
                      id="growth1"
                      className="hidden"
                      defaultChecked
                    />
                    <label
                      htmlFor="growth1"
                      className="flex items-center cursor-pointer gap-2 before:absolute before:-inset-4 relative"
                    >
                      <h3 className="grow flex items-center gap-x-3  md:text-2xl text-xl  font-bold text-[#272727]">
                        <span>
                          <Image
                            src="/images/fileRound.svg"
                            alt="file icon"
                            width={45}
                            height={45}
                            className="md:size-14 size-10 mx-auto object-contain aspect-square"
                          />
                        </span>
                        Enrollment Manager
                      </h3>
                      <div className="shrink-0 relative  group-has-[:checked]/growth:rotate-180   duration-300">
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
                    <div className="lg:text-base text-sm font-normal text-[#595959] hidden group-has-[:checked]/growth:block">
                      <p>
                        Smooth student registration, electronic form processing,
                        status tracking, and document storage for school
                        admissions.
                      </p>
                    </div>
                  </li>
                  <li className="md:p-6 py-6 px-4 flex flex-col gap-2 rounded-xl bg-white shadow-[0px_3.29px_11.77px_0px_#0000001F] group/growth">
                    <input
                      type="radio"
                      name="growth"
                      id="growth2"
                      className="hidden"
                      defaultChecked
                    />
                    <label
                      htmlFor="growth2"
                      className="flex items-center cursor-pointer gap-2 before:absolute before:-inset-4 relative"
                    >
                      <h3 className="grow flex items-center gap-x-3  md:text-2xl text-xl  font-bold text-[#272727]">
                        <span>
                          <Image
                            src="/images/fileRound.svg"
                            alt="file icon"
                            width={45}
                            height={45}
                            className="md:size-14 size-10 mx-auto object-contain aspect-square"
                          />
                        </span>
                        Activities & Holidays
                      </h3>
                      <div className="shrink-0 relative  group-has-[:checked]/growth:rotate-180   duration-300">
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
                    <div className="lg:text-base text-sm font-normal text-[#595959] hidden group-has-[:checked]/growth:block">
                      <p>
                        Organize events, schedule holidays, send automated
                        reminders, and manage school calendars in one place.
                      </p>
                    </div>
                  </li>
                  <li className="md:p-6 py-6 px-4 flex flex-col gap-2 rounded-xl bg-white shadow-[0px_3.29px_11.77px_0px_#0000001F] group/growth">
                    <input
                      type="radio"
                      name="growth"
                      id="growth3"
                      className="hidden"
                      defaultChecked
                    />
                    <label
                      htmlFor="growth3"
                      className="flex items-center cursor-pointer gap-2 before:absolute before:-inset-4 relative"
                    >
                      <h3
                        className="grow flex items-center gap-x-3 
                       md:text-2xl text-xl  font-bold text-[#272727]"
                      >
                        <span>
                          <Image
                            src="/images/fileRound.svg"
                            alt="file icon"
                            width={45}
                            height={45}
                            className="md:size-14 size-10 mx-auto object-contain aspect-square"
                          />
                        </span>
                        Feedback & Support
                      </h3>
                      <div className="shrink-0 relative  group-has-[:checked]/growth:rotate-180   duration-300">
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
                    <div className="lg:text-base text-sm font-normal text-[#595959] hidden group-has-[:checked]/growth:block">
                      <p>
                        Collect feedback from both parents and students, respond
                        quickly to concerns, and provide a foundation of open
                        communication in your school.
                      </p>
                    </div>
                  </li>
                  <li className="md:p-6 py-6 px-4 flex flex-col gap-2 rounded-xl bg-white shadow-[0px_3.29px_11.77px_0px_#0000001F] group/growth">
                    <input
                      type="radio"
                      name="growth"
                      id="growth3"
                      className="hidden"
                      defaultChecked
                    />
                    <label
                      htmlFor="growth3"
                      className="flex items-center cursor-pointer gap-2 before:absolute before:-inset-4 relative"
                    >
                      <h3
                        className="grow flex items-center gap-x-3 
                       md:text-2xl text-xl  font-bold text-[#272727]"
                      >
                        <span>
                          <Image
                            src="/images/fileRound.svg"
                            alt="file icon"
                            width={45}
                            height={45}
                            className="md:size-14 size-10 mx-auto object-contain aspect-square"
                          />
                        </span>
                        News & Updates Feed
                      </h3>
                      <div className="shrink-0 relative  group-has-[:checked]/growth:rotate-180   duration-300">
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
                    <div className="lg:text-base text-sm font-normal text-[#595959] hidden group-has-[:checked]/growth:block">
                      <p>
                        Update your school community with important
                        announcements, post news, and more in real time.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="CountSection relative overflow-hidden py-8">
        <Image
          src="/images/impactSolutionBg.webp"
          alt="Actual Impact of School ERP System "
          width="1200"
          height="400"
          className="size-full mx-auto absolute inset-0 -z-10 object-cover object-center"
        />
        <div className="view xl:py-4 lg:py-3">
          <div className="flex flex-col">
            <h2 className="w-full  2xl:text-5xl xl:text-5xl lg:text-4xl md:text-3xl sm:text-2xl text-2xl font-bold text-white text-balance relative z-10 text-center md:pb-8 pb-4">
              Actual Impact of School ERP System
            </h2>
            <div className="w-full pt-5">
              <div className="grid xl:grid-cols-4 md:grid-cols-4 grid-cols-2">
                <div className="w-full flex flex-col gap-y-2 md:p-8 p-6">
                  <h3 className="xl:text-6xl lg:text-5xl md:text-5xl text-4xl font-bold text-white">
                    50%
                  </h3>
                  <div className="lg:text-2xl md:xl text-lg text-white font-normal">
                    Less time spent on admin tasks
                  </div>
                </div>
                <div className="w-full flex flex-col gap-y-2 md:p-8 p-6">
                  <h3 className="xl:text-6xl lg:text-5xl md:text-5xl text-4xl font-bold text-white">
                    60%
                  </h3>
                  <div className="lg:text-2xl md:xl text-lg text-white font-normal">
                    Faster Fee collection efficiency
                  </div>
                </div>
                <div className="w-full flex flex-col gap-y-2 md:p-8 p-6">
                  <h3 className="xl:text-6xl lg:text-5xl md:text-5xl text-4xl font-bold text-white">
                    70%
                  </h3>
                  <div className="lg:text-2xl md:xl text-lg text-white font-normal">
                    Paperwork reduction
                  </div>
                </div>
                <div className="w-full flex flex-col gap-y-2 md:p-8 p-6">
                  <h3 className="xl:text-6xl lg:text-5xl md:text-5xl text-4xl font-bold text-white">
                    80%
                  </h3>
                  <div className="lg:text-2xl md:xl text-lg text-white font-normal">
                    Reduction in Report generation time
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="keyBenefits relative overflow-hidden py-8 bg-white">
        <div className="view xl:py-4 lg:py-3">
          <div className="flex flex-col">
            <h2 className="w-full 2xl:text-5xl xl:text-5xl lg:text-4xl md:text-3xl sm:text-2xl text-2xl font-bold text-[#393A8C] text-balance relative z-10 text-center md:pb-8 pb-4">
              Advantages of Edoovi ERP for Everybody
            </h2>
            <div className="w-full [&_.dot-nav]:md:hidden block">
              <EmblaCarousel
                options={{
                  align: "start",
                  loop: true,
                  showDots: true,
                }}
              >
                <div className="embla__slide shrink-0 px-1 basis-[88.88%] sm:basis-[60.60%] md:basis-[40.40%] lg:basis-[33.33%] ">
                  <div className="group/kb w-full flex flex-col overflow_hidden relative  rounded-2xl  bg-gradient-to-br from-[#FFFFFF] to-[#C0F0FF] hover:lg:from-[#2D86FF] hover:lg:to-[#39C0FFE3] h-full duration-300">
                    <div className="top-0 absolute right-0">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="65"
                        height="65"
                        viewBox="0 0 83 84"
                        fill="white"
                      >
                        <path
                          d="M22.25 0.000488281H82.9992V60.7204H52.6646C35.8671 60.7204 22.25 47.1033 22.25 30.3058V0.000488281Z"
                          fill="white"
                        />
                        <path
                          d="M22.25 22.4404C21.9859 4.48887 7.61356 0.00020001 0.459961 0H22.25V22.4404Z"
                          fill="white"
                        />
                        <path
                          d="M83 83.1602C82.7358 65.2082 68.3624 60.7207 61.209 60.7207H83V83.1602Z"
                          fill="white"
                        />
                      </svg>
                    </div>
                    <button className="absolute right-0 top-0 cursor-pointer md:size-12 size-10  bg-gradient-to-r from-[#DBE8FF] to-[#FFFFFF] group-hover/kb:lg:from-[#393A8C] group-hover/kb:lg:to-[#1A4E82] justify-center items-center flex  border-none outline-none rounded-full">
                      <svg
                        width="22"
                        height="22"
                        className="text-[#393A8C] group-hover/kb:lg:text-white md:size-5 size-4"
                        viewBox="0 0 22 22"
                        fill="currentColor"
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
                            fill="currentColor"
                          />
                        </mask>
                        <g mask="url(#mask0_19752_1700)">
                          <path
                            d="M14.9779 8.90188L6.02177 17.858C5.75771 18.1221 5.43496 18.2541 5.05354 18.2541C4.67211 18.2541 4.34937 18.1221 4.0853 17.858C3.82124 17.594 3.68921 17.2712 3.68921 16.8898C3.68921 16.5084 3.82124 16.1856 4.0853 15.9216L13.0415 6.96541H9.32256C8.94114 6.96541 8.61472 6.82972 8.34333 6.55832C8.07193 6.28692 7.93623 5.96051 7.93623 5.57908C7.93623 5.19766 8.07193 4.87125 8.34333 4.59985C8.61472 4.32845 8.94114 4.19275 9.32256 4.19275H16.3643C16.7457 4.19275 17.0721 4.32845 17.3435 4.59985C17.6149 4.87125 17.7506 5.19766 17.7506 5.57908V12.6208C17.7506 13.0022 17.6149 13.3286 17.3435 13.6C17.0721 13.8714 16.7457 14.0071 16.3643 14.0071C15.9828 14.0071 15.6564 13.8714 15.385 13.6C15.1136 13.3286 14.9779 13.0022 14.9779 12.6208V8.90188Z"
                            fill="currentColor"
                          />
                        </g>
                      </svg>
                    </button>
                    <div className="flex flex-col gapy-3 p-6 pb-0">
                      <div className="text-base font-normal text-[#363637] group-hover/kb:lg:text-white">
                        Key Benefits
                      </div>
                      <h3 className="md:text-3xl text-2xl font-bold mt-2  text-[#393A8C] group-hover/kb:lg:text-white">
                        <span className="text-[#0EAFF0]">For</span> Management
                      </h3>
                      <div className="w-full flex flex-row pt-3.5 justify-between items-end">
                        <div className="md:w-2/3 w-3/4 h-full grow">
                          <ul className="text-[#393A8C] group-hover/kb:lg:text-white list-disc list-inside text-xs font-normal flex flex-col gap-y-2">
                            <li className="">
                              Smart fee prediction and automated reminders
                            </li>
                            <li className="">
                              Notifications via WhatsApp, SMS, and app platform
                            </li>
                            <li className="">
                              Variety of payment options with UPI support
                            </li>
                            <li className="">
                              Seamless fee collection updates in ERP
                            </li>
                          </ul>
                        </div>
                        <div className="shrink-0  w-1/4 ">
                          <Image
                            src="/images/keyBenefitImg.webp"
                            alt="For Management"
                            width={84}
                            height={114}
                            className="size-full mx-auto object-contain aspect-[14/19]"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="embla__slide shrink-0 px-1 basis-[88.88%] sm:basis-[60.60%] md:basis-[40.40%] lg:basis-[33.33%] ">
                  <div className="group/kb w-full flex flex-col overflow_hidden relative  rounded-2xl  bg-gradient-to-br from-[#FFFFFF] to-[#C0F0FF] hover:lg:from-[#2D86FF] hover:lg:to-[#39C0FFE3] h-full duration-300">
                    <div className="top-0 absolute right-0">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="65"
                        height="65"
                        viewBox="0 0 83 84"
                        fill="white"
                      >
                        <path
                          d="M22.25 0.000488281H82.9992V60.7204H52.6646C35.8671 60.7204 22.25 47.1033 22.25 30.3058V0.000488281Z"
                          fill="white"
                        />
                        <path
                          d="M22.25 22.4404C21.9859 4.48887 7.61356 0.00020001 0.459961 0H22.25V22.4404Z"
                          fill="white"
                        />
                        <path
                          d="M83 83.1602C82.7358 65.2082 68.3624 60.7207 61.209 60.7207H83V83.1602Z"
                          fill="white"
                        />
                      </svg>
                      <button className="absolute right-0 top-0 cursor-pointer md:size-12 size-10  bg-gradient-to-r from-[#DBE8FF] to-[#FFFFFF] group-hover/kb:lg:from-[#393A8C] group-hover/kb:lg:to-[#1A4E82] justify-center items-center flex  border-none outline-none rounded-full">
                        <svg
                          width="22"
                          height="22"
                          className="text-[#393A8C] group-hover/kb:lg:text-white md:size-5 size-4"
                          viewBox="0 0 22 22"
                          fill="currentColor"
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
                              fill="currentColor"
                            />
                          </mask>
                          <g mask="url(#mask0_19752_1700)">
                            <path
                              d="M14.9779 8.90188L6.02177 17.858C5.75771 18.1221 5.43496 18.2541 5.05354 18.2541C4.67211 18.2541 4.34937 18.1221 4.0853 17.858C3.82124 17.594 3.68921 17.2712 3.68921 16.8898C3.68921 16.5084 3.82124 16.1856 4.0853 15.9216L13.0415 6.96541H9.32256C8.94114 6.96541 8.61472 6.82972 8.34333 6.55832C8.07193 6.28692 7.93623 5.96051 7.93623 5.57908C7.93623 5.19766 8.07193 4.87125 8.34333 4.59985C8.61472 4.32845 8.94114 4.19275 9.32256 4.19275H16.3643C16.7457 4.19275 17.0721 4.32845 17.3435 4.59985C17.6149 4.87125 17.7506 5.19766 17.7506 5.57908V12.6208C17.7506 13.0022 17.6149 13.3286 17.3435 13.6C17.0721 13.8714 16.7457 14.0071 16.3643 14.0071C15.9828 14.0071 15.6564 13.8714 15.385 13.6C15.1136 13.3286 14.9779 13.0022 14.9779 12.6208V8.90188Z"
                              fill="currentColor"
                            />
                          </g>
                        </svg>
                      </button>
                    </div>
                    <div className="flex flex-col gapy-3 p-6 pb-0">
                      <div className="text-base font-normal text-[#363637] group-hover/kb:lg:text-white">
                        Key Benefits
                      </div>
                      <h3 className="md:text-3xl text-2xl font-bold mt-2  text-[#393A8C] group-hover/kb:lg:text-white">
                        <span className="text-[#0EAFF0]">For</span> Teachers
                      </h3>
                      <div className="w-full flex flex-row pt-3.5 justify-between items-end">
                        <div className="md:w-2/3 w-3/4 h-full grow">
                          <ul className="text-[#393A8C] group-hover/kb:lg:text-white list-disc list-inside text-xs font-normal flex flex-col gap-y-2">
                            <li className="">
                              Real-time fee status prediction and alerts
                            </li>
                            <li className="">
                              Instantly share updates using WhatsApp, SMS, or
                              the app
                            </li>
                            <li className="">
                              Flexible UPI and card payment selection
                            </li>
                            <li className="">
                              Automated record updates for collections
                            </li>
                          </ul>
                        </div>
                        <div className="shrink-0  w-1/4 ">
                          <Image
                            src="/images/keyBenefitImg.webp"
                            alt="For teacher"
                            width={84}
                            height={114}
                            className="size-full mx-auto object-contain aspect-[14/19]"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="embla__slide shrink-0 px-1 basis-[88.88%] sm:basis-[60.60%] md:basis-[40.40%] lg:basis-[33.33%] ">
                  <div className="group/kb w-full flex flex-col overflow_hidden relative  rounded-2xl  bg-gradient-to-br from-[#FFFFFF] to-[#C0F0FF] hover:lg:from-[#2D86FF] hover:lg:to-[#39C0FFE3] h-full duration-300">
                    <div className="top-0 absolute right-0">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="65"
                        height="65"
                        viewBox="0 0 83 84"
                        fill="white"
                      >
                        <path
                          d="M22.25 0.000488281H82.9992V60.7204H52.6646C35.8671 60.7204 22.25 47.1033 22.25 30.3058V0.000488281Z"
                          fill="white"
                        />
                        <path
                          d="M22.25 22.4404C21.9859 4.48887 7.61356 0.00020001 0.459961 0H22.25V22.4404Z"
                          fill="white"
                        />
                        <path
                          d="M83 83.1602C82.7358 65.2082 68.3624 60.7207 61.209 60.7207H83V83.1602Z"
                          fill="white"
                        />
                      </svg>
                      <button className="absolute right-0 top-0 cursor-pointer md:size-12 size-10  bg-gradient-to-r from-[#DBE8FF] to-[#FFFFFF] group-hover/kb:lg:from-[#393A8C] group-hover/kb:lg:to-[#1A4E82] justify-center items-center flex  border-none outline-none rounded-full">
                        <svg
                          width="22"
                          height="22"
                          className="text-[#393A8C] group-hover/kb:lg:text-white md:size-5 size-4"
                          viewBox="0 0 22 22"
                          fill="currentColor"
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
                              fill="currentColor"
                            />
                          </mask>
                          <g mask="url(#mask0_19752_1700)">
                            <path
                              d="M14.9779 8.90188L6.02177 17.858C5.75771 18.1221 5.43496 18.2541 5.05354 18.2541C4.67211 18.2541 4.34937 18.1221 4.0853 17.858C3.82124 17.594 3.68921 17.2712 3.68921 16.8898C3.68921 16.5084 3.82124 16.1856 4.0853 15.9216L13.0415 6.96541H9.32256C8.94114 6.96541 8.61472 6.82972 8.34333 6.55832C8.07193 6.28692 7.93623 5.96051 7.93623 5.57908C7.93623 5.19766 8.07193 4.87125 8.34333 4.59985C8.61472 4.32845 8.94114 4.19275 9.32256 4.19275H16.3643C16.7457 4.19275 17.0721 4.32845 17.3435 4.59985C17.6149 4.87125 17.7506 5.19766 17.7506 5.57908V12.6208C17.7506 13.0022 17.6149 13.3286 17.3435 13.6C17.0721 13.8714 16.7457 14.0071 16.3643 14.0071C15.9828 14.0071 15.6564 13.8714 15.385 13.6C15.1136 13.3286 14.9779 13.0022 14.9779 12.6208V8.90188Z"
                              fill="currentColor"
                            />
                          </g>
                        </svg>
                      </button>
                    </div>
                    <div className="flex flex-col gapy-3 p-6 pb-0">
                      <div className="text-base font-normal text-[#363637] group-hover/kb:lg:text-white">
                        Key Benefits
                      </div>
                      <h3 className="md:text-3xl text-2xl font-bold mt-2  text-[#393A8C] group-hover/kb:lg:text-white">
                        <span className="text-[#0EAFF0]">For</span> Students
                      </h3>
                      <div className="w-full flex flex-row pt-3.5 justify-between items-end">
                        <div className="md:w-2/3 w-3/4 h-full grow">
                          <ul className="text-[#393A8C] group-hover/kb:lg:text-white list-disc list-inside text-xs font-normal flex flex-col gap-y-2">
                            <li className="">
                              Personalized fee reminders powered by AI
                            </li>
                            <li className="">
                              Direct notifications through WhatsApp, SMS, and
                              app
                            </li>
                            <li className="">
                              Multiple payment choices, including UPI
                            </li>
                            <li className="">
                              Instant update of payments in ERP system
                            </li>
                          </ul>
                        </div>
                        <div className="shrink-0  w-1/4 ">
                          <Image
                            src="/images/keyBenefitImg.webp"
                            alt="For Students"
                            width={84}
                            height={114}
                            className="size-full mx-auto object-contain aspect-[14/19]"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </EmblaCarousel>
            </div>
          </div>
        </div>
      </section>
      <section className="cta1Section w-full relative overflow-hidden bg-[#2D86FF] py-8">
        <div className="view  relative xl:py-4 py-4">
          <div className="flex flex-col w-full">
            <div className="flex flex-wrap justify-between items-end ">
              <div className="md:w-8/12 w-full">
                <h2 className="w-full 2xl:text-4xl xl:text-4xl lg:text-4xl text-3xl  font-semibold text-white text-balance relative z-10 pb-6">
                  <span className="font-normal">
                    Your vision is smart. Your decisions are sharp.
                  </span>
                  It’s time your school reflects the same intelligence with a
                  powerful, easy-to-use School ERP.
                </h2>
                <div className="w-full md:pt-6 pt-4">
                  <button
                    type="button"
                    className="cursor-pointer md:h-14 h-10 border-0 xl:text-base sm:text-sm text-xs text-center font-semibold  text-[#050505] inline-flex items-center justify-center md:px-10 px-6 py-3 gap-2 rounded-full bg-[#FFFFFF] duration-500 hover:bg-[#FFFFFF] group/btn"
                  >
                    Let’s Build Your{" "}
                    <span className="max-sm:hidden">
                      {" "}
                      School Smarter by Our School ERP
                    </span>
                    App
                    <div className="inline-flex  relative duration-300">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="18"
                        height="18"
                        viewBox="0 0 18 18"
                        className="text-[#050505] md:size-4 size-3"
                        fill="currentColor"
                      >
                        <path
                          d="M2 18C1.45 18 0.979167 17.8042 0.5875 17.4125C0.195833 17.0208 0 16.55 0 16V2C0 1.45 0.195833 0.979167 0.5875 0.5875C0.979167 0.195833 1.45 0 2 0H9V2H2V16H16V9H18V16C18 16.55 17.8042 17.0208 17.4125 17.4125C17.0208 17.8042 16.55 18 16 18H2ZM6.7 12.7L5.3 11.3L14.6 2H11V0H18V7H16V3.4L6.7 12.7Z"
                          fill="#050505"
                        ></path>
                      </svg>
                    </div>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="xl:w-1/5 lg:w-1/5 md:w-1/5  md:absolute md:right-0 md:bottom-0 w-full rounded-3xl flex items-center justify-center relative max-md:order-first  max-md:mx-auto">
          <Image
            className="size-full object-contain object-right-bottom aspect-[253/219]"
            src="/images/schoolManagmentCta1.webp"
            width={253}
            height={219}
            alt="Your vision is smart. Your decisions are sharp."
          />
        </div>
      </section>
      <section className="servicesSection w-full group/cs relative overflow-hidden bg-gradient-to-br from-[#0B2751] to-[#015E89E3] py-8">
        <div className="view  xl:py-4 lg:py-3">
          <div className="flex flex-col w-full">
            <h2 className="w-full  2xl:text-5xl xl:text-5xl lg:text-4xl md:text-3xl sm:text-2xl text-2xl font-bold text-white text-balance relative z-10 text-center md:pb-8 pb-4">
              AI-Powered School{" "}
              <span className="text-[#04D9FF]">ERP Modules </span>
            </h2>

            <div className="flex flex-col pt-5">
              <div className="lg:flex flex-wrap gap-y-6  items-stretch hidden">
                <div className="md:w-1/3 sm:w-1/2 w-full px-2.5">
                  <div className="w-full flex flex-col relative rounded-3xl p-6 gap-2.5 shadow-[0px_2px_8px_2px_#0000001A,0px_8px_8px_0px_#FFFFFF00_inset,-2px_-2px_0.5px_-2px_#FFFFFF_inset,2px_2px_0.5px_-2px_#FFFFFF_inset]  bg-white/10 backdrop-blur inner-shadow]">
                    <div className="w-full flex justify-center">
                      <Image
                        className="md:size-36 size-28  object-contain aspect-square"
                        src="/images/timeImage.webp"
                        width={115}
                        height={115}
                        alt="Timetable Manager"
                      />
                    </div>
                    <div className="xl:text-2xl lg:text-xl md:text-lg text-base font-semibold text-balance text-white">
                      Timetable Manager
                    </div>
                    <div className="text-xs font-normal text-balance text-white/80 grow">
                      Intelligent solution to monitor and administer critical
                      dates such as fees, assignments, examinations, and
                      attendance issues. It scans each student's calendar,
                      identifies critical actions, and sends immediate reminders
                      to all concerned via WhatsApp, SMS, app notifications, and
                      on-time email alerts so nothing crucial gets overlooked.
                    </div>
                  </div>
                </div>
                <div className="md:w-1/3 sm:w-1/2 w-full px-2.5">
                  <div className="w-full flex flex-col relative rounded-3xl p-6 gap-2.5 shadow-[0px_2px_8px_2px_#0000001A,0px_8px_8px_0px_#FFFFFF00_inset,-2px_-2px_0.5px_-2px_#FFFFFF_inset,2px_2px_0.5px_-2px_#FFFFFF_inset]  bg-white/10 backdrop-blur inner-shadow]">
                    <div className="w-full flex justify-center">
                      <Image
                        className="md:size-36 size-28  object-contain aspect-square"
                        src="/images/timeImage.webp"
                        width={115}
                        height={115}
                        alt="Exam & Result Manager"
                      />
                    </div>
                    <div className="xl:text-2xl lg:text-xl md:text-lg text-base font-semibold text-balance text-white">
                      Exam & Result Manager
                    </div>
                    <div className="text-xs font-normal text-balance text-white/80 grow">
                      A module built to track future exams, result releases, and
                      important study deadlines for each student. It
                      automatically scrutinizes each student's performance data
                      and delivers specific updates and result alerts on various
                      platforms—WhatsApp, SMS, app notifications, and email—to
                      keep them all aligned.
                    </div>
                  </div>
                </div>
                <div className="md:w-1/3 sm:w-1/2 w-full px-2.5">
                  <div className="w-full flex flex-col relative rounded-3xl p-6 gap-2.5 shadow-[0px_2px_8px_2px_#0000001A,0px_8px_8px_0px_#FFFFFF00_inset,-2px_-2px_0.5px_-2px_#FFFFFF_inset,2px_2px_0.5px_-2px_#FFFFFF_inset]  bg-white/10 backdrop-blur inner-shadow]">
                    <div className="w-full flex justify-center">
                      <Image
                        className="md:size-36 size-28  object-contain aspect-square"
                        src="/images/timeImage.webp"
                        width={115}
                        height={115}
                        alt="Attendance Manager"
                      />
                    </div>
                    <div className="xl:text-2xl lg:text-xl md:text-lg text-base font-semibold text-balance text-white">
                      Attendance Manager
                    </div>
                    <div className="text-xs font-normal text-balance text-white/80 grow">
                      A complete automation tool to manage day-to-day attendance
                      and promptly detect absences or difficulties for teachers
                      and students. It arranges the records of attendance,
                      pinpoints missing records, and provides updates on time
                      via WhatsApp, SMS, mobile app, and email campaigns,
                      ensuring all records remain updated and transparent.
                    </div>
                  </div>
                </div>
                <div className="md:w-1/3 sm:w-1/2 w-full px-2.5">
                  <div className="w-full flex flex-col relative rounded-3xl p-6 gap-2.5 shadow-[0px_2px_8px_2px_#0000001A,0px_8px_8px_0px_#FFFFFF00_inset,-2px_-2px_0.5px_-2px_#FFFFFF_inset,2px_2px_0.5px_-2px_#FFFFFF_inset]  bg-white/10 backdrop-blur inner-shadow]">
                    <div className="w-full flex justify-center">
                      <Image
                        className="md:size-36 size-28  object-contain aspect-square"
                        src="/images/timeImage.webp"
                        width={115}
                        height={115}
                        alt="Visitor Managerr"
                      />
                    </div>
                    <div className="xl:text-2xl lg:text-xl md:text-lg text-base font-semibold text-balance text-white">
                      Visitor Manager
                    </div>
                    <div className="text-xs font-normal text-balance text-white/80 grow">
                      A streamlined system that protects school entry by keeping
                      visitor records up-to-date and organizing appointments.
                      Each visitor interaction is tracked, and parents,
                      teachers, and admins get notified of visits via WhatsApp,
                      SMS, in-app notification, and emails, enhancing campus
                      security and openness.
                    </div>
                  </div>
                </div>
                <div className="md:w-1/3 sm:w-1/2 w-full px-2.5">
                  <div className="w-full flex flex-col relative rounded-3xl p-6 gap-2.5 shadow-[0px_2px_8px_2px_#0000001A,0px_8px_8px_0px_#FFFFFF00_inset,-2px_-2px_0.5px_-2px_#FFFFFF_inset,2px_2px_0.5px_-2px_#FFFFFF_inset]  bg-white/10 backdrop-blur inner-shadow]">
                    <div className="w-full flex justify-center">
                      <Image
                        className="md:size-36 size-28  object-contain aspect-square"
                        src="/images/timeImage.webp"
                        width={115}
                        height={115}
                        alt="Fees Manager"
                      />
                    </div>
                    <div className="xl:text-2xl lg:text-xl md:text-lg text-base font-semibold text-balance text-white">
                      Fees Manager
                    </div>
                    <div className="text-xs font-normal text-balance text-white/80 grow">
                      A special module for tracking fee payments, setting
                      reminder alerts on due dates, and transaction management.
                      It checks payment history, sends reminders, and verifies
                      receipts in real-time through WhatsApp, SMS, mobile app,
                      and email, keeping parents and students informed and
                      avoiding deadline misses.
                    </div>
                  </div>
                </div>
                <div className="md:w-1/3 sm:w-1/2 w-full px-2.5">
                  <div className="w-full flex flex-col relative rounded-3xl p-6 gap-2.5 shadow-[0px_2px_8px_2px_#0000001A,0px_8px_8px_0px_#FFFFFF00_inset,-2px_-2px_0.5px_-2px_#FFFFFF_inset,2px_2px_0.5px_-2px_#FFFFFF_inset]  bg-white/10 backdrop-blur inner-shadow]">
                    <div className="w-full flex justify-center">
                      <Image
                        className="md:size-36 size-28  object-contain aspect-square"
                        src="/images/timeImage.webp"
                        width={115}
                        height={115}
                        alt="Admission Manager"
                      />
                    </div>
                    <div className="xl:text-2xl lg:text-xl md:text-lg text-base font-semibold text-balance text-white">
                      Admission Manager
                    </div>
                    <div className="text-xs font-normal text-balance text-white/80 grow">
                      A streamlined system to monitor application submissions,
                      arrange interviews, and manage enrollment processes. It
                      follows each step, sends timely reminders on WhatsApp,
                      SMS, app, and email, and keeps parents and school admins
                      notified at each milestone, streamlining the admissions
                      process.
                    </div>
                  </div>
                </div>
              </div>
              <div className="lg:hidden block">
                <EmblaCarousel
                  className=""
                  options={{
                    align: "start",
                    loop: true,
                    showDots: true,
                  }}
                >
                  <div className="embla__slide shrink-0 px-2  basis-[100%] md:basis-[66.66%] lg:basis-[33.33%]">
                    <div className="w-full flex flex-col relative rounded-3xl p-6 gap-2.5 shadow-[0px_2px_8px_2px_#0000001A,0px_8px_8px_0px_#FFFFFF00_inset,-2px_-2px_0.5px_-2px_#FFFFFF_inset,2px_2px_0.5px_-2px_#FFFFFF_inset]  bg-white/10 backdrop-blur inner-shadow]">
                      <div className="w-full flex justify-center">
                        <Image
                          className="md:size-36 size-28  object-contain aspect-square"
                          src="/images/timeImage.webp"
                          width={115}
                          height={115}
                          alt="Time table Manager"
                        />
                      </div>
                      <div className="xl:text-2xl lg:text-xl md:text-lg text-base font-semibold text-balance text-white">
                        Time table Manager
                      </div>
                      <div className="text-xs font-normal text-balance text-white/80 grow">
                        Intelligent solution to monitor and administer critical
                        dates such as fees, assignments, examinations, and
                        attendance issues. It scans each student's calendar,
                        identifies critical actions, and sends immediate
                        reminders to all concerned via WhatsApp, SMS, app
                        notifications, and on-time email alerts so nothing
                        crucial gets overlooked.
                      </div>
                    </div>
                  </div>
                  <div className="embla__slide shrink-0 px-2  basis-[100%] md:basis-[66.66%] lg:basis-[33.33%]">
                    <div className="w-full flex flex-col relative rounded-3xl p-6 gap-2.5 shadow-[0px_2px_8px_2px_#0000001A,0px_8px_8px_0px_#FFFFFF00_inset,-2px_-2px_0.5px_-2px_#FFFFFF_inset,2px_2px_0.5px_-2px_#FFFFFF_inset]  bg-white/10 backdrop-blur inner-shadow]">
                      <div className="w-full flex justify-center">
                        <Image
                          className="md:size-36 size-28  object-contain aspect-square"
                          src="/images/timeImage.webp"
                          width={115}
                          height={115}
                          alt="Exam & Result Manager"
                        />
                      </div>
                      <div className="xl:text-2xl lg:text-xl md:text-lg text-base font-semibold text-balance text-white">
                        Exam & Result Manager
                      </div>
                      <div className="text-xs font-normal text-balance text-white/80 grow">
                        A module built to track future exams, result releases,
                        and important study deadlines for each student. It
                        automatically scrutinizes each student's performance
                        data and delivers specific updates and result alerts on
                        various platforms—WhatsApp, SMS, app notifications, and
                        email—to keep them all aligned.
                      </div>
                    </div>
                  </div>
                  <div className="embla__slide shrink-0 px-2  basis-[100%] md:basis-[66.66%] lg:basis-[33.33%]">
                    <div className="w-full flex flex-col relative rounded-3xl p-6 gap-2.5 shadow-[0px_2px_8px_2px_#0000001A,0px_8px_8px_0px_#FFFFFF00_inset,-2px_-2px_0.5px_-2px_#FFFFFF_inset,2px_2px_0.5px_-2px_#FFFFFF_inset]  bg-white/10 backdrop-blur inner-shadow]">
                      <div className="w-full flex justify-center">
                        <Image
                          className="md:size-36 size-28  object-contain aspect-square"
                          src="/images/timeImage.webp"
                          width={115}
                          height={115}
                          alt="Attendance Manager"
                        />
                      </div>
                      <div className="xl:text-2xl lg:text-xl md:text-lg text-base font-semibold text-balance text-white">
                        Attendance Manager
                      </div>
                      <div className="text-xs font-normal text-balance text-white/80 grow">
                        A complete automation tool to manage day-to-day
                        attendance and promptly detect absences or difficulties
                        for teachers and students. It arranges the records of
                        attendance, pinpoints missing records, and provides
                        updates on time via WhatsApp, SMS, mobile app, and email
                        campaigns, ensuring all records remain updated and
                        transparent.
                      </div>
                    </div>
                  </div>
                  <div className="embla__slide shrink-0 px-2  basis-[100%] md:basis-[66.66%] lg:basis-[33.33%]">
                    <div className="w-full flex flex-col relative rounded-3xl p-6 gap-2.5 shadow-[0px_2px_8px_2px_#0000001A,0px_8px_8px_0px_#FFFFFF00_inset,-2px_-2px_0.5px_-2px_#FFFFFF_inset,2px_2px_0.5px_-2px_#FFFFFF_inset]  bg-white/10 backdrop-blur inner-shadow]">
                      <div className="w-full flex justify-center">
                        <Image
                          className="md:size-36 size-28  object-contain aspect-square"
                          src="/images/timeImage.webp"
                          width={115}
                          height={115}
                          alt="Visitor Manager"
                        />
                      </div>
                      <div className="xl:text-2xl lg:text-xl md:text-lg text-base font-semibold text-balance text-white">
                        Visitor Manager
                      </div>
                      <div className="text-xs font-normal text-balance text-white/80 grow">
                        A streamlined system that protects school entry by
                        keeping visitor records up-to-date and organizing
                        appointments. Each visitor interaction is tracked, and
                        parents, teachers, and admins get notified of visits via
                        WhatsApp, SMS, in-app notification, and emails,
                        enhancing campus security and openness.
                      </div>
                    </div>
                  </div>
                  <div className="embla__slide shrink-0 px-2  basis-[100%] md:basis-[66.66%] lg:basis-[33.33%]">
                    <div className="w-full flex flex-col relative rounded-3xl p-6 gap-2.5 shadow-[0px_2px_8px_2px_#0000001A,0px_8px_8px_0px_#FFFFFF00_inset,-2px_-2px_0.5px_-2px_#FFFFFF_inset,2px_2px_0.5px_-2px_#FFFFFF_inset]  bg-white/10 backdrop-blur inner-shadow]">
                      <div className="w-full flex justify-center">
                        <Image
                          className="md:size-36 size-28  object-contain aspect-square"
                          src="/images/timeImage.webp"
                          width={115}
                          height={115}
                          alt="Fees Manager"
                        />
                      </div>
                      <div className="xl:text-2xl lg:text-xl md:text-lg text-base font-semibold text-balance text-white">
                        Fees Manager
                      </div>
                      <div className="text-xs font-normal text-balance text-white/80 grow">
                        A special module for tracking fee payments, setting
                        reminder alerts on due dates, and transaction
                        management. It checks payment history, sends reminders,
                        and verifies receipts in real-time through WhatsApp,
                        SMS, mobile app, and email, keeping parents and students
                        informed and avoiding deadline misses.
                      </div>
                    </div>
                  </div>
                  <div className="embla__slide shrink-0 px-2  basis-[100%] md:basis-[66.66%] lg:basis-[33.33%]">
                    <div className="w-full flex flex-col relative rounded-3xl p-6 gap-2.5 shadow-[0px_2px_8px_2px_#0000001A,0px_8px_8px_0px_#FFFFFF00_inset,-2px_-2px_0.5px_-2px_#FFFFFF_inset,2px_2px_0.5px_-2px_#FFFFFF_inset]  bg-white/10 backdrop-blur inner-shadow]">
                      <div className="w-full flex justify-center">
                        <Image
                          className="md:size-36 size-28  object-contain aspect-square"
                          src="/images/timeImage.webp"
                          width={115}
                          height={115}
                          alt="Admission Manager"
                        />
                      </div>
                      <div className="xl:text-2xl lg:text-xl md:text-lg text-base font-semibold text-balance text-white">
                        Admission Manager
                      </div>
                      <div className="text-xs font-normal text-balance text-white/80 grow">
                        A streamlined system to monitor application submissions,
                        arrange interviews, and manage enrollment processes. It
                        follows each step, sends timely reminders on WhatsApp,
                        SMS, app, and email, and keeps parents and school admins
                        notified at each milestone, streamlining the admissions
                        process.
                      </div>
                    </div>
                  </div>
                </EmblaCarousel>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="ourProductSection w-full group/cs relative overflow-hidden bg-[#6D55FD] md:pt-6 pt-4">
        <div className="view ">
          <div className="flex flex-col w-full">
            <div className="flex flex-col pt-5">
              <div className="w-full [&_.embla-btn]:absolute [&_.embla-btn]:bottom-8 [&_.embla-btn]:right-4 [&_.prev-btn>svg]:text-white [&_.next-btn>svg]:text-white">
                <EmblaCarousel
                  className=""
                  options={{
                    align: "start",
                    loop: true,
                    showButton: true,
                  }}
                >
                  <div className="embla__slide shrink-0 px-2 basis-[100%]">
                    <div className="flex flex-wrap w-full md:items-end gap-y-6">
                      <div className="md:w-1/2 w-full xl:py-8 lg:py-8 md:py-6 py-4">
                        <div className="w-full flex flex-col md:gap-y-5 gap-y-3 md:pb-10">
                          <div className="lg:text-2xl md:text-xl text-white font-semibold">
                            Our Product
                          </div>
                          <h2 className="xl:text-5xl lg:text-4xl md:text-3xl text-2xl  text-white font-bold">
                            Student & Parent App
                          </h2>
                          <div className="lg:w-10/12 lg:text-xl md:text-lg text-base font-semibold text-white">
                            Easy-to-use App for Parents to Track Progress
                            Effortlessly and Completely
                          </div>
                          <ul className="list-disc list-inside flex flex-col *:text-white *:text-sm gap-y-3">
                            <li>Notifications & Chat </li>
                            <li>Latest School Announcements </li>
                            <li>Real-Time Attendance </li>
                            <li>AI Timetable Manager </li>
                            <li>Feedback & Concerns </li>
                          </ul>
                          <div className="flex gap-3 pt-5">
                            <div>
                              <Image
                                src="/images/googlStore.webp"
                                alt="play store"
                                width={120}
                                height={40}
                                className="size-full mx-auto object-contain"
                              />
                            </div>
                            <div>
                              <Image
                                src="/images/appStore.webp"
                                alt="App store"
                                width={120}
                                height={40}
                                className="size-full mx-auto object-contain"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="md:w-1/2 w-full relative">
                        <Image
                          src="/images/studentApp.webp"
                          alt="Student & Parent App"
                          width={562}
                          height={382}
                          className="size-full mx-auto object-contain object-bottom aspect-[281/191]"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="embla__slide shrink-0 px-2 basis-[100%]">
                    <div className="flex flex-wrap w-full md:items-end gap-y-6">
                      <div className="md:w-1/2 w-full xl:py-8 lg:py-8 md:py-6 py-4">
                        <div className="w-full flex flex-col md:gap-y-5 gap-y-3 md:pb-10">
                          <div className="lg:text-2xl md:text-xl text-white font-semibold">
                            Our Product
                          </div>
                          <h2 className="xl:text-5xl lg:text-4xl md:text-3xl text-2xl  text-white font-bold">
                            School App
                          </h2>
                          <div className="lg:w-10/12 lg:text-xl md:text-lg text-base font-semibold text-white">
                            Easy-to-use App for Parents to Track Progress
                            Effortlessly and Completely
                          </div>
                          <ul className="list-disc list-inside flex flex-col *:text-white *:text-sm gap-y-3">
                            <li>Request Action Center </li>
                            <li>Event & Holiday Scheduler </li>
                            <li>Concern & Suggestion Box </li>
                            <li>Fees Management Monitor </li>
                            <li>Daily Attendance Tracking </li>
                          </ul>
                          <div className="flex gap-3 pt-5">
                            <div>
                              <Image
                                src="/images/googlStore.webp"
                                alt="play store"
                                width={120}
                                height={40}
                                className="size-full mx-auto object-contain"
                              />
                            </div>
                            <div>
                              <Image
                                src="/images/appStore.webp"
                                alt="App store"
                                width={120}
                                height={40}
                                className="size-full mx-auto object-contain"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="md:w-1/2 w-full relative">
                        <Image
                          src="/images/studentApp.webp"
                          alt="School App s"
                          width={562}
                          height={382}
                          className="size-full mx-auto object-contain object-bottom aspect-[281/191]"
                        />
                      </div>
                    </div>
                  </div>
                </EmblaCarousel>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="whyChooseSection relative overflow-hidden z-30 py-8">
        <Image
          src="/images/whyChooseBg.webp"
          alt="Easy Appointment Booking"
          fill
          className="size-full mx-auto absolute inset-0 -z-10 object-cover object-center"
        />
        <div className="view xl:py-4 lg:py-3 py-4 ">
          <div className="flex flex-col">
            <h2 className="md:w-10/12 w-full 2xl:text-5xl xl:text-5xl lg:text-4xl md:text-3xl sm:text-2xl text-2xl font-bold text-white text-balance relative z-10 text-center md:pb-12 pb-4 mx-auto">
              Why Choose Edoovi ERP Software for Your School
            </h2>
            {/* desktop view */}
            <div
              className="rounded-2xl md:p-10 p-8 shadow-[0_2px_8px_2px_rgba(0,0,0,0.1)] 
                 bg-white/10 backdrop-blur inner-shadow md:block hidden"
            >
              <div className="md:grid xl:grid-cols-3 md:grid-cols-3 items-center">
                <div className="flex flex-col gap-y-8">
                  <div className="w-full flex flex-col gap-y-2">
                    <div className="pb-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="42"
                        height="62"
                        viewBox="0 0 42 62"
                        fill="none"
                      >
                        <path
                          d="M6.25 61.25C4.7375 61.25 3.44271 60.7115 2.36563 59.6344C1.28854 58.5573 0.75 57.2625 0.75 55.75V6.25C0.75 4.7375 1.28854 3.44271 2.36563 2.36563C3.44271 1.28854 4.7375 0.75 6.25 0.75H33.75C35.2625 0.75 36.5573 1.28854 37.6344 2.36563C38.7115 3.44271 39.25 4.7375 39.25 6.25V14.775C40.075 15.0958 40.7396 15.6 41.2438 16.2875C41.7479 16.975 42 17.7542 42 18.625V24.125C42 24.9958 41.7479 25.775 41.2438 26.4625C40.7396 27.15 40.075 27.6542 39.25 27.975V55.75C39.25 57.2625 38.7115 58.5573 37.6344 59.6344C36.5573 60.7115 35.2625 61.25 33.75 61.25H6.25ZM6.25 55.75H33.75V6.25H6.25V55.75ZM14.5 53H25.5C26.2792 53 26.9323 52.7365 27.4594 52.2094C27.9865 51.6823 28.25 51.0292 28.25 50.25C28.25 49.4708 27.9865 48.8177 27.4594 48.2906C26.9323 47.7635 26.2792 47.5 25.5 47.5H14.5C13.7208 47.5 13.0677 47.7635 12.5406 48.2906C12.0135 48.8177 11.75 49.4708 11.75 50.25C11.75 51.0292 12.0135 51.6823 12.5406 52.2094C13.0677 52.7365 13.7208 53 14.5 53Z"
                          fill="white"
                        />
                      </svg>
                    </div>
                    <div className="md:text-2xl text-xl font-semibold text-white text-balanced">
                      AI-Powered Perspectives
                    </div>
                    <div className="md:text-sm text-xs text-white text-balanced">
                      To support data-driven decisions and increase the efficacy
                      of school management on a daily basis, use artificial
                      intelligence to produce actionable analytics, performance
                      trends, and comprehensive reports of progress.
                    </div>
                  </div>
                  <div className="w-full flex flex-col gap-y-2">
                    <div className="pb-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="42"
                        height="62"
                        viewBox="0 0 42 62"
                        fill="none"
                      >
                        <path
                          d="M6.25 61.25C4.7375 61.25 3.44271 60.7115 2.36563 59.6344C1.28854 58.5573 0.75 57.2625 0.75 55.75V6.25C0.75 4.7375 1.28854 3.44271 2.36563 2.36563C3.44271 1.28854 4.7375 0.75 6.25 0.75H33.75C35.2625 0.75 36.5573 1.28854 37.6344 2.36563C38.7115 3.44271 39.25 4.7375 39.25 6.25V14.775C40.075 15.0958 40.7396 15.6 41.2438 16.2875C41.7479 16.975 42 17.7542 42 18.625V24.125C42 24.9958 41.7479 25.775 41.2438 26.4625C40.7396 27.15 40.075 27.6542 39.25 27.975V55.75C39.25 57.2625 38.7115 58.5573 37.6344 59.6344C36.5573 60.7115 35.2625 61.25 33.75 61.25H6.25ZM6.25 55.75H33.75V6.25H6.25V55.75ZM14.5 53H25.5C26.2792 53 26.9323 52.7365 27.4594 52.2094C27.9865 51.6823 28.25 51.0292 28.25 50.25C28.25 49.4708 27.9865 48.8177 27.4594 48.2906C26.9323 47.7635 26.2792 47.5 25.5 47.5H14.5C13.7208 47.5 13.0677 47.7635 12.5406 48.2906C12.0135 48.8177 11.75 49.4708 11.75 50.25C11.75 51.0292 12.0135 51.6823 12.5406 52.2094C13.0677 52.7365 13.7208 53 14.5 53Z"
                          fill="white"
                        />
                      </svg>
                    </div>
                    <div className="md:text-2xl text-xl font-semibold text-white text-balanced">
                      Intelligent Alerts
                    </div>
                    <div className="md:text-sm text-xs text-white text-balanced">
                      Get timely, accurate AI-powered alerts for school updates,
                      attendance, or assessments so that teachers, parents, and
                      students can all stay informed and connected.
                    </div>
                  </div>
                </div>
                <div className="px-4">
                  <Image
                    src="/images/whyChooseRobotImg.webp"
                    alt="Why Choose Edoovi ERP Software for Your School "
                    width={332}
                    height={332}
                    className="size-full mx-auto aspect-square"
                  />
                </div>
                <div className="flex flex-col gap-y-8">
                  <div className="w-full flex flex-col gap-y-2">
                    <div className="pb-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="42"
                        height="62"
                        viewBox="0 0 42 62"
                        fill="none"
                      >
                        <path
                          d="M6.25 61.25C4.7375 61.25 3.44271 60.7115 2.36563 59.6344C1.28854 58.5573 0.75 57.2625 0.75 55.75V6.25C0.75 4.7375 1.28854 3.44271 2.36563 2.36563C3.44271 1.28854 4.7375 0.75 6.25 0.75H33.75C35.2625 0.75 36.5573 1.28854 37.6344 2.36563C38.7115 3.44271 39.25 4.7375 39.25 6.25V14.775C40.075 15.0958 40.7396 15.6 41.2438 16.2875C41.7479 16.975 42 17.7542 42 18.625V24.125C42 24.9958 41.7479 25.775 41.2438 26.4625C40.7396 27.15 40.075 27.6542 39.25 27.975V55.75C39.25 57.2625 38.7115 58.5573 37.6344 59.6344C36.5573 60.7115 35.2625 61.25 33.75 61.25H6.25ZM6.25 55.75H33.75V6.25H6.25V55.75ZM14.5 53H25.5C26.2792 53 26.9323 52.7365 27.4594 52.2094C27.9865 51.6823 28.25 51.0292 28.25 50.25C28.25 49.4708 27.9865 48.8177 27.4594 48.2906C26.9323 47.7635 26.2792 47.5 25.5 47.5H14.5C13.7208 47.5 13.0677 47.7635 12.5406 48.2906C12.0135 48.8177 11.75 49.4708 11.75 50.25C11.75 51.0292 12.0135 51.6823 12.5406 52.2094C13.0677 52.7365 13.7208 53 14.5 53Z"
                          fill="white"
                        />
                      </svg>
                    </div>
                    <div className="md:text-2xl text-xl font-semibold text-white text-balanced">
                      Connect, Smart Parent
                    </div>
                    <div className="md:text-sm text-xs text-white text-balanced">
                      Utilize cutting-edge AI to effectively link parents and
                      schools by tracking progress, giving parents personalized
                      communication options, and supporting their children's
                      development.
                    </div>
                  </div>
                  <div className="w-full flex flex-col gap-y-2">
                    <div className="pb-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="42"
                        height="62"
                        viewBox="0 0 42 62"
                        fill="none"
                      >
                        <path
                          d="M6.25 61.25C4.7375 61.25 3.44271 60.7115 2.36563 59.6344C1.28854 58.5573 0.75 57.2625 0.75 55.75V6.25C0.75 4.7375 1.28854 3.44271 2.36563 2.36563C3.44271 1.28854 4.7375 0.75 6.25 0.75H33.75C35.2625 0.75 36.5573 1.28854 37.6344 2.36563C38.7115 3.44271 39.25 4.7375 39.25 6.25V14.775C40.075 15.0958 40.7396 15.6 41.2438 16.2875C41.7479 16.975 42 17.7542 42 18.625V24.125C42 24.9958 41.7479 25.775 41.2438 26.4625C40.7396 27.15 40.075 27.6542 39.25 27.975V55.75C39.25 57.2625 38.7115 58.5573 37.6344 59.6344C36.5573 60.7115 35.2625 61.25 33.75 61.25H6.25ZM6.25 55.75H33.75V6.25H6.25V55.75ZM14.5 53H25.5C26.2792 53 26.9323 52.7365 27.4594 52.2094C27.9865 51.6823 28.25 51.0292 28.25 50.25C28.25 49.4708 27.9865 48.8177 27.4594 48.2906C26.9323 47.7635 26.2792 47.5 25.5 47.5H14.5C13.7208 47.5 13.0677 47.7635 12.5406 48.2906C12.0135 48.8177 11.75 49.4708 11.75 50.25C11.75 51.0292 12.0135 51.6823 12.5406 52.2094C13.0677 52.7365 13.7208 53 14.5 53Z"
                          fill="white"
                        />
                      </svg>
                    </div>
                    <div className="md:text-2xl text-xl font-semibold text-white text-balanced">
                      Complete Support 24/7
                    </div>
                    <div className="md:text-sm text-xs text-white text-balanced">
                      Use AI to provide parents, teachers, or staff with
                      continuous, responsive support at any time of the year,
                      including guidance, prompt question answers, and general
                      assistance.
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* mobile view */}
            <div className="mobileView md:hidden block">
              <div className="flex flex-col gap-y-6">
                <EmblaCarousel
                  options={{
                    align: "start",
                    loop: true,
                  }}
                >
                  <div className="embla__slide  shrink-0 px-2 basis-[85%] ">
                    <div
                      className="w-full flex flex-col gap-y-2 rounded-3xl py-8 px-4 shadow-[0px_2px_8px_2px_#0000001A,0px_8px_8px_0px_#FFFFFF00_inset,-2px_-2px_0.5px_-2px_#FFFFFF_inset,2px_2px_0.5px_-2px_#FFFFFF_inset] 
                 bg-white/10 backdrop-blur inner-shadow"
                    >
                      <div className="pb-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="49"
                          height="48"
                          viewBox="0 0 42 62"
                          fill="none"
                        >
                          <path
                            d="M6.25 61.25C4.7375 61.25 3.44271 60.7115 2.36563 59.6344C1.28854 58.5573 0.75 57.2625 0.75 55.75V6.25C0.75 4.7375 1.28854 3.44271 2.36563 2.36563C3.44271 1.28854 4.7375 0.75 6.25 0.75H33.75C35.2625 0.75 36.5573 1.28854 37.6344 2.36563C38.7115 3.44271 39.25 4.7375 39.25 6.25V14.775C40.075 15.0958 40.7396 15.6 41.2438 16.2875C41.7479 16.975 42 17.7542 42 18.625V24.125C42 24.9958 41.7479 25.775 41.2438 26.4625C40.7396 27.15 40.075 27.6542 39.25 27.975V55.75C39.25 57.2625 38.7115 58.5573 37.6344 59.6344C36.5573 60.7115 35.2625 61.25 33.75 61.25H6.25ZM6.25 55.75H33.75V6.25H6.25V55.75ZM14.5 53H25.5C26.2792 53 26.9323 52.7365 27.4594 52.2094C27.9865 51.6823 28.25 51.0292 28.25 50.25C28.25 49.4708 27.9865 48.8177 27.4594 48.2906C26.9323 47.7635 26.2792 47.5 25.5 47.5H14.5C13.7208 47.5 13.0677 47.7635 12.5406 48.2906C12.0135 48.8177 11.75 49.4708 11.75 50.25C11.75 51.0292 12.0135 51.6823 12.5406 52.2094C13.0677 52.7365 13.7208 53 14.5 53Z"
                            fill="white"
                          />
                        </svg>
                      </div>
                      <div className="text-xl font-semibold text-white text-balanced">
                        AI-Powered Perspectives
                      </div>
                      <div className=" text-xs text-white text-balanced">
                        To support data-driven decisions and increase the
                        efficacy of school management on a daily basis, use
                        artificial intelligence to produce actionable analytics,
                        performance trends, and comprehensive reports of
                        progress.
                      </div>
                    </div>
                  </div>
                  <div className="embla__slide  shrink-0 px-2 basis-[85%] ">
                    <div
                      className="w-full flex flex-col gap-y-2 rounded-3xl py-8 px-4 shadow-[0px_2px_8px_2px_#0000001A,0px_8px_8px_0px_#FFFFFF00_inset,-2px_-2px_0.5px_-2px_#FFFFFF_inset,2px_2px_0.5px_-2px_#FFFFFF_inset] 
                 bg-white/10 backdrop-blur inner-shadow"
                    >
                      <div className="pb-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="49"
                          height="48"
                          viewBox="0 0 42 62"
                          fill="none"
                        >
                          <path
                            d="M6.25 61.25C4.7375 61.25 3.44271 60.7115 2.36563 59.6344C1.28854 58.5573 0.75 57.2625 0.75 55.75V6.25C0.75 4.7375 1.28854 3.44271 2.36563 2.36563C3.44271 1.28854 4.7375 0.75 6.25 0.75H33.75C35.2625 0.75 36.5573 1.28854 37.6344 2.36563C38.7115 3.44271 39.25 4.7375 39.25 6.25V14.775C40.075 15.0958 40.7396 15.6 41.2438 16.2875C41.7479 16.975 42 17.7542 42 18.625V24.125C42 24.9958 41.7479 25.775 41.2438 26.4625C40.7396 27.15 40.075 27.6542 39.25 27.975V55.75C39.25 57.2625 38.7115 58.5573 37.6344 59.6344C36.5573 60.7115 35.2625 61.25 33.75 61.25H6.25ZM6.25 55.75H33.75V6.25H6.25V55.75ZM14.5 53H25.5C26.2792 53 26.9323 52.7365 27.4594 52.2094C27.9865 51.6823 28.25 51.0292 28.25 50.25C28.25 49.4708 27.9865 48.8177 27.4594 48.2906C26.9323 47.7635 26.2792 47.5 25.5 47.5H14.5C13.7208 47.5 13.0677 47.7635 12.5406 48.2906C12.0135 48.8177 11.75 49.4708 11.75 50.25C11.75 51.0292 12.0135 51.6823 12.5406 52.2094C13.0677 52.7365 13.7208 53 14.5 53Z"
                            fill="white"
                          />
                        </svg>
                      </div>
                      <div className="text-xl font-semibold text-white text-balanced">
                        Intelligent Alerts
                      </div>
                      <div className=" text-xs text-white text-balanced">
                        Get timely, accurate AI-powered alerts for school
                        updates, attendance, or assessments so that teachers,
                        parents, and students can all stay informed and
                        connected.
                      </div>
                    </div>
                  </div>
                  <div className="embla__slide  shrink-0 px-2 basis-[85%] ">
                    <div
                      className="w-full flex flex-col gap-y-2 rounded-3xl py-8 px-4 shadow-[0px_2px_8px_2px_#0000001A,0px_8px_8px_0px_#FFFFFF00_inset,-2px_-2px_0.5px_-2px_#FFFFFF_inset,2px_2px_0.5px_-2px_#FFFFFF_inset] 
                 bg-white/10 backdrop-blur inner-shadow"
                    >
                      <div className="pb-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="49"
                          height="48"
                          viewBox="0 0 42 62"
                          fill="none"
                        >
                          <path
                            d="M6.25 61.25C4.7375 61.25 3.44271 60.7115 2.36563 59.6344C1.28854 58.5573 0.75 57.2625 0.75 55.75V6.25C0.75 4.7375 1.28854 3.44271 2.36563 2.36563C3.44271 1.28854 4.7375 0.75 6.25 0.75H33.75C35.2625 0.75 36.5573 1.28854 37.6344 2.36563C38.7115 3.44271 39.25 4.7375 39.25 6.25V14.775C40.075 15.0958 40.7396 15.6 41.2438 16.2875C41.7479 16.975 42 17.7542 42 18.625V24.125C42 24.9958 41.7479 25.775 41.2438 26.4625C40.7396 27.15 40.075 27.6542 39.25 27.975V55.75C39.25 57.2625 38.7115 58.5573 37.6344 59.6344C36.5573 60.7115 35.2625 61.25 33.75 61.25H6.25ZM6.25 55.75H33.75V6.25H6.25V55.75ZM14.5 53H25.5C26.2792 53 26.9323 52.7365 27.4594 52.2094C27.9865 51.6823 28.25 51.0292 28.25 50.25C28.25 49.4708 27.9865 48.8177 27.4594 48.2906C26.9323 47.7635 26.2792 47.5 25.5 47.5H14.5C13.7208 47.5 13.0677 47.7635 12.5406 48.2906C12.0135 48.8177 11.75 49.4708 11.75 50.25C11.75 51.0292 12.0135 51.6823 12.5406 52.2094C13.0677 52.7365 13.7208 53 14.5 53Z"
                            fill="white"
                          />
                        </svg>
                      </div>
                      <div className="text-xl font-semibold text-white text-balanced">
                        Connect, Smart Parent
                      </div>
                      <div className=" text-xs text-white text-balanced">
                        Utilize cutting-edge AI to effectively link parents and
                        schools by tracking progress, giving parents
                        personalized communication options, and supporting their
                        children's development.
                      </div>
                    </div>
                  </div>
                  <div className="embla__slide  shrink-0 px-2 basis-[85%] ">
                    <div
                      className="w-full flex flex-col gap-y-2 rounded-3xl py-8 px-4 shadow-[0px_2px_8px_2px_#0000001A,0px_8px_8px_0px_#FFFFFF00_inset,-2px_-2px_0.5px_-2px_#FFFFFF_inset,2px_2px_0.5px_-2px_#FFFFFF_inset] 
                 bg-white/10 backdrop-blur inner-shadow"
                    >
                      <div className="pb-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="49"
                          height="48"
                          viewBox="0 0 42 62"
                          fill="none"
                        >
                          <path
                            d="M6.25 61.25C4.7375 61.25 3.44271 60.7115 2.36563 59.6344C1.28854 58.5573 0.75 57.2625 0.75 55.75V6.25C0.75 4.7375 1.28854 3.44271 2.36563 2.36563C3.44271 1.28854 4.7375 0.75 6.25 0.75H33.75C35.2625 0.75 36.5573 1.28854 37.6344 2.36563C38.7115 3.44271 39.25 4.7375 39.25 6.25V14.775C40.075 15.0958 40.7396 15.6 41.2438 16.2875C41.7479 16.975 42 17.7542 42 18.625V24.125C42 24.9958 41.7479 25.775 41.2438 26.4625C40.7396 27.15 40.075 27.6542 39.25 27.975V55.75C39.25 57.2625 38.7115 58.5573 37.6344 59.6344C36.5573 60.7115 35.2625 61.25 33.75 61.25H6.25ZM6.25 55.75H33.75V6.25H6.25V55.75ZM14.5 53H25.5C26.2792 53 26.9323 52.7365 27.4594 52.2094C27.9865 51.6823 28.25 51.0292 28.25 50.25C28.25 49.4708 27.9865 48.8177 27.4594 48.2906C26.9323 47.7635 26.2792 47.5 25.5 47.5H14.5C13.7208 47.5 13.0677 47.7635 12.5406 48.2906C12.0135 48.8177 11.75 49.4708 11.75 50.25C11.75 51.0292 12.0135 51.6823 12.5406 52.2094C13.0677 52.7365 13.7208 53 14.5 53Z"
                            fill="white"
                          />
                        </svg>
                      </div>
                      <div className="text-xl font-semibold text-white text-balanced">
                        Complete Support 24/7
                      </div>
                      <div className=" text-xs text-white text-balanced">
                        Use AI to provide parents, teachers, or staff with
                        continuous, responsive support at any time of the year,
                        including guidance, prompt question answers, and general
                        assistance.
                      </div>
                    </div>
                  </div>
                </EmblaCarousel>
                <div className="w-full">
                  <Image
                    src="/images/whyChooseRobotImg.webp"
                    alt="Why Choose Edvooi ERP Software As Your School Partner "
                    width={332}
                    height={332}
                    className="size-full mx-auto aspect-square"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <AwardCarousel />
      <TrustedLogo />
      <Testimonial />
      <section className="faq relative pt-8 bg-[#DDF7FF]">
        <div className="view relative max-sm:pb-4">
          <div className="flex flex-col">
            <div className="flex flex-wrap relative md:items-end justify-between">
              <div className="md:w-1/2 w-full md:sticky md:bottom-0">
                <div className="w-full flex flex-col gap-y-3">
                  <h2 className="w-full md:grow 2xl:text-5xl xl:text-5xl text-center lg:text-4xl md:text-3xl sm:text-2xl text-2xl font-bold text-[#272727] text-balance relative z-10  md:pb-8 pb-4">
                    Frequently Asked Questions
                  </h2>
                  <div className="w-1/2 mx-auto ">
                    <Image
                      src="/images/schoolManagementFaq.webp"
                      alt="Easy Appointment Booking"
                      width={284}
                      height={330}
                      className="size-full mx-auto object-contain aspect-[142/165]"
                    />
                  </div>
                </div>
              </div>
              <div className="md:w-1/2 w-full xl:py-4 lg:py-3">
                <ul className="w-full flex flex-col md:gap-8 gap-4 md:pb-8">
                  <li className="md:p-8 py-6 px-4 flex flex-col gap-2 rounded-xl bg-white shadow-[0px_3.29px_11.77px_0px_#0000001F] group/faq">
                    <input
                      type="radio"
                      name="faq"
                      id="faq0"
                      className="hidden"
                      defaultChecked
                    />
                    <label
                      htmlFor="faq0"
                      className="flex items-center cursor-pointer gap-2 before:absolute before:-inset-4 relative"
                    >
                      <h3 className="grow lg:text-base text-sm font-semibold text-[#454444]">
                        What modules are included in school ERP software?
                      </h3>
                      <div className="shrink-0 relative  group-has-[:checked]/faq:rotate-180   duration-300">
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
                    <div className="text-xs font-normal text-[#454444] hidden group-has-[:checked]/faq:block">
                      <p>
                        Our School ERP app includes various modules like fee
                        management, exam management, timetable scheduling,
                        transport management, and library management as well.
                      </p>
                    </div>
                  </li>
                  <li className="md:p-8 py-6 px-4 flex flex-col gap-2 rounded-xl bg-white shadow-[0px_3.29px_11.77px_0px_#0000001F] group/faq">
                    <input
                      type="radio"
                      name="faq"
                      id="faq1"
                      className="hidden"
                    />
                    <label
                      htmlFor="faq1"
                      className="flex items-center cursor-pointer gap-2 before:absolute before:-inset-4 relative"
                    >
                      <h3 className="grow lg:text-base text-sm font-semibold text-[#454444]">
                        Can IMG Global Infotech school ERP software integrate
                        with existing systems?
                      </h3>
                      <div className="shrink-0 relative  group-has-[:checked]/faq:rotate-180  duration-300">
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
                    <div className="text-xs font-normal text-[#454444] hidden group-has-[:checked]/faq:block">
                      <p>
                        Yes, our app is designed to integrate with any existing
                        system. It majorly includes biometric systems. SMS
                        gateways and accounting software as well.
                      </p>
                    </div>
                  </li>
                  <li className="md:p-8 py-6 px-4 flex flex-col gap-2 rounded-xl bg-white shadow-[0px_3.29px_11.77px_0px_#0000001F] group/faq">
                    <input
                      type="radio"
                      name="faq"
                      id="faq3"
                      className="hidden"
                    />
                    <label
                      htmlFor="faq3"
                      className="flex items-center cursor-pointer gap-2 before:absolute before:-inset-4 relative"
                    >
                      <h3 className="grow lg:text-base text-sm font-semibold text-[#454444]">
                        What are the advantages of using school ERP software?
                      </h3>
                      <div className="shrink-0 relative  group-has-[:checked]/faq:rotate-180  duration-300">
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
                    <div className="text-xs font-normal text-[#454444] hidden group-has-[:checked]/faq:block">
                      <p>
                        The advantages of using school ERP software are mainly
                        administration, which can streamline several operations.
                        It mainly includes enhanced communication, real-time
                        information access, enhanced academic performance
                        tracking, and efficient data management as well.
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

export default page;
