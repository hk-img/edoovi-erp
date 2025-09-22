import Link from "next/link";
import Image from "next/image";
import EmblaCarousel from "../../components/emblaCarousel/EmblaCarousel";
import WhyChoose from "@/components/whyChoose/WhyChoose";
import AwardCarousel from "@/components/awardCarousel/AwardCarousel";
import TrustedLogo from "@/components/trustedLogo/TrustedLogo";
import Testimonial from "@/components/testimonial/Testimonial";

const page = () => {
  return (
    <>
      <section className="heroSection  relative overflow-hidden lg:min-h-dvh max-md:!h-auto flex flex-col  bg-white md:pt-12 pt-8">
        <div className="view  xl:pt-4 lg:pt-3 pt-4 px-4 lg:px-6 xl:px-8">
          <div className="flex flex-col">
            <div className="w-full">
              <div className="lg:text-2xl md:text-xl text-lg text-[#454444] text-center font-semibold">
                Manage school On the go
              </div>
              <h1 className="w-full xl:text-5xl lg:text-4xl text-3xl pt-4 md:font-bold text-center font-semibold text-[#393A8C]  relative max-md:text-center">
                The Next Gen School ERP
              </h1>
            </div>
          </div>
        </div>
        <div className="w-full">
          <Image
            className="size-full object-cover"
            src="/images/schoolManagementHeroImg.webp"
            width={500}
            height={477}
            alt="The Next Gen School ERP"
          />
        </div>
      </section>
      <section className="ImpactSolution relative  py-12 bg-[#F2FDFF]">
        <div className="view xl:py-4 lg:py-3 relative">
          <div className="flex flex-col">
            <div className="flex flex-wrap justify-between relative">
              <div className="md:w-1/2 w-full ">
                <div className="w-full flex flex-col gap-y-3 md:sticky md:top-0">
                  <h2 className="w-full  2xl:text-4xl xl:text-4xl max-sm:text-center lg:text-3xl md:text-3xl sm:text-2xl text-2xl font-bold text-[#393A8C] text-balance relative z-10  md:pb-8 pb-4">
                    Fuel Your School Growth with Advanced AI Features
                  </h2>
                  <div className="w-full">
                    <Image
                      src="/images/markAttendance.webp"
                      alt="Easy Appointment Booking"
                      width={704}
                      height={533}
                      className="size-full mx-auto object-contain"
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
                        <span className>
                          <Image
                            src="/images/fileRound.svg"
                            alt="file icon"
                            width={54}
                            height={54}
                            className="md:size-14 size-10 mx-auto object-contain"
                          />
                        </span>
                        Mark Attendance
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
                        Depending on the platform, doctor appointment app
                        development company hourly, and its features, the cost
                        can greatly vary; however, most often, the cost usually
                        is between $15000 and $49000+. Your further
                        specifications will add to the cost while also
                        increasing the quality and scalability of your service
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
                        <span className>
                          <Image
                            src="/images/fileRound.svg"
                            alt="file icon"
                            width={54}
                            height={54}
                            className="md:size-14 size-10 mx-auto object-contain"
                          />
                        </span>
                        Admission Manager
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
                        Depending on the platform, doctor appointment app
                        development company hourly, and its features, the cost
                        can greatly vary; however, most often, the cost usually
                        is between $15000 and $49000+. Your further
                        specifications will add to the cost while also
                        increasing the quality and scalability of your service
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
                        <span className>
                          <Image
                            src="/images/fileRound.svg"
                            alt="file icon"
                            width={54}
                            height={54}
                            className="md:size-14 size-10 mx-auto object-contain"
                          />
                        </span>
                        Mark Attendance
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
                        Depending on the platform, doctor appointment app
                        development company hourly, and its features, the cost
                        can greatly vary; however, most often, the cost usually
                        is between $15000 and $49000+. Your further
                        specifications will add to the cost while also
                        increasing the quality and scalability of your service
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
                        <span className>
                          <Image
                            src="/images/fileRound.svg"
                            alt="file icon"
                            width={54}
                            height={54}
                            className="md:size-14 size-10 mx-auto object-contain"
                          />
                        </span>
                        Mark Attendance
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
      <section className="CountSection relative overflow-hidden py-8">
        <Image
          src="/images/impactSolutionBg.webp"
          alt="Real Impact of Our School ERP"
          width="1200"
          height="400"
          className="size-full mx-auto absolute inset-0 -z-10 object-cover object-center"
        />
        <div className="view xl:py-4 lg:py-3">
          <div className="flex flex-col">
            <h2 className="w-full  2xl:text-4xl xl:text-4xl lg:text-3xl md:text-3xl sm:text-2xl text-2xl font-bold text-white text-balance relative z-10 text-center md:pb-8 pb-4">
              Real Impact of Our School ERP
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
                    50%
                  </h3>
                  <div className="lg:text-2xl md:xl text-lg text-white font-normal">
                    Less time spent on admin tasks
                  </div>
                </div>
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
                    50%
                  </h3>
                  <div className="lg:text-2xl md:xl text-lg text-white font-normal">
                    Less time spent on admin tasks
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
            <h2 className="w-full  2xl:text-4xl xl:text-4xl lg:text-3xl md:text-3xl sm:text-2xl text-2xl font-bold text-[#393A8C] text-balance relative z-10 text-center md:pb-8 pb-4">
              Key Benefits of Edoovi ERP For Everyone
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
                        width="70"
                        height="70"
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
                              AI Predict and send alert for due fees
                            </li>
                            <li className="">
                              Send alerts on Whatsapp, sms & in app
                            </li>
                            <li className="">Multiple UPI & payment options</li>
                            <li className="">Collection auto update in ERP</li>
                          </ul>
                        </div>
                        <div className="shrink-0  w-1/4 ">
                          <Image
                            src="/images/keyBenefitImg.webp"
                            alt="AI Predict and send alert for due fees"
                            width={381}
                            height={254}
                            className="size-full mx-auto object-contain"
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
                        width="70"
                        height="70"
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
                        <span className="text-[#0EAFF0]">For</span> Management
                      </h3>
                      <div className="w-full flex flex-row pt-3.5 justify-between items-end">
                        <div className="md:w-2/3 w-3/4 h-full grow">
                          <ul className="text-[#393A8C] group-hover/kb:lg:text-white list-disc list-inside text-xs font-normal flex flex-col gap-y-2">
                            <li className="">
                              AI Predict and send alert for due fees
                            </li>
                            <li className="">
                              Send alerts on Whatsapp, sms & in app
                            </li>
                            <li className="">Multiple UPI & payment options</li>
                            <li className="">Collection auto update in ERP</li>
                          </ul>
                        </div>
                        <div className="shrink-0  w-1/4 ">
                          <Image
                            src="/images/keyBenefitImg.webp"
                            alt="AI Predict and send alert for due fees"
                            width={381}
                            height={254}
                            className="size-full mx-auto object-contain"
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
                        width="70"
                        height="70"
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
                        <span className="text-[#0EAFF0]">For</span> Management
                      </h3>
                      <div className="w-full flex flex-row pt-3.5 justify-between items-end">
                        <div className="md:w-2/3 w-3/4 h-full grow">
                          <ul className="text-[#393A8C] group-hover/kb:lg:text-white list-disc list-inside text-xs font-normal flex flex-col gap-y-2">
                            <li className="">
                              AI Predict and send alert for due fees
                            </li>
                            <li className="">
                              Send alerts on Whatsapp, sms & in app
                            </li>
                            <li className="">Multiple UPI & payment options</li>
                            <li className="">Collection auto update in ERP</li>
                          </ul>
                        </div>
                        <div className="shrink-0  w-1/4 ">
                          <Image
                            src="/images/keyBenefitImg.webp"
                            alt="AI Predict and send alert for due fees"
                            width={381}
                            height={254}
                            className="size-full mx-auto object-contain"
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
                <h2 className="w-full 2xl:text-4xl xl:text-3xl lg:text-xl text-2xl md:leading-10 font-semibold text-white text-balance relative z-10 pb-6">
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
                    Let’s Start{" "}
                    <span className="max-sm:hidden">
                      {" "}
                      to make your school smart
                    </span>
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
            className="size-full object-contain object-right-bottom"
            src="/images/schoolManagmentCta1.webp"
            width={463}
            height={401}
            alt="Your vision is smart. Your decisions are sharp."
          />
        </div>
      </section>
      <section className="servicesSection w-full group/cs relative overflow-hidden bg-gradient-to-br from-[#0B2751] to-[#015E89E3] py-8">
        <div className="view  xl:py-4 lg:py-3">
          <div className="flex flex-col w-full">
            <h2 className="w-full  2xl:text-4xl xl:text-4xl lg:text-3xl md:text-3xl sm:text-2xl text-2xl font-bold text-white text-balance relative z-10 text-center md:pb-8 pb-4">
              Our Every Module is{" "}
              <span className="text-[#04D9FF]">AI-Powered</span>
            </h2>

            <div className="flex flex-col pt-5">
              <div className="lg:flex flex-wrap gap-y-6  items-stretch hidden">
                <div className="md:w-1/3 sm:w-1/2 w-full px-2.5">
                  <div className="w-full flex flex-col relative rounded-3xl p-6 gap-2.5 shadow-[0px_2px_8px_2px_#0000001A,0px_8px_8px_0px_#FFFFFF00_inset,-2px_-2px_0.5px_-2px_#FFFFFF_inset,2px_2px_0.5px_-2px_#FFFFFF_inset]  bg-white/10 backdrop-blur inner-shadow]">
                    <div className="w-full flex justify-center">
                      <Image
                        className="md:size-36 size-28  object-contain"
                        src="/images/timeImage.webp"
                        width={141}
                        height={141}
                        alt="Time table Manager"
                      />
                    </div>
                    <div className="xl:text-2xl lg:text-xl md:text-lg text-base font-semibold text-balance text-white">
                      Time table Manager
                    </div>
                    <div className="text-xs font-normal text-balance text-white/80 grow">
                      An intelligent system that automatically detects important
                      events (like fees due, homework deadlines, exams,
                      attendance issues, transport updates, or birthdays),
                      analyzes class and individual student data, and sends
                      timely reminders to the right people. It supports multiple
                      channels—WhatsApp, SMS, push notifications, and emaimanual
                      follow-ups, and ensure parents, students, and teachers
                      never miss critical updates.
                    </div>
                  </div>
                </div>
                <div className="md:w-1/3 sm:w-1/2 w-full px-2.5">
                  <div className="w-full flex flex-col relative rounded-3xl p-6 gap-2.5 shadow-[0px_2px_8px_2px_#0000001A,0px_8px_8px_0px_#FFFFFF00_inset,-2px_-2px_0.5px_-2px_#FFFFFF_inset,2px_2px_0.5px_-2px_#FFFFFF_inset]  bg-white/10 backdrop-blur inner-shadow]">
                    <div className="w-full flex justify-center">
                      <Image
                        className="md:size-36 size-28  object-contain"
                        src="/images/timeImage.webp"
                        width={141}
                        height={141}
                        alt="Time table Manager"
                      />
                    </div>
                    <div className="xl:text-2xl lg:text-xl md:text-lg text-base font-semibold text-balance text-white">
                      Time table Manager
                    </div>
                    <div className="text-xs font-normal text-balance text-white/80 grow">
                      An intelligent system that automatically detects important
                      events (like fees due, homework deadlines, exams,
                      attendance issues, transport updates, or birthdays),
                      analyzes class and individual student data, and sends
                      timely reminders to the right people. It supports multiple
                      channels—WhatsApp, SMS, push notifications, and emaimanual
                      follow-ups, and ensure parents, students, and teachers
                      never miss critical updates.
                    </div>
                  </div>
                </div>
                <div className="md:w-1/3 sm:w-1/2 w-full px-2.5">
                  <div className="w-full flex flex-col relative rounded-3xl p-6 gap-2.5 shadow-[0px_2px_8px_2px_#0000001A,0px_8px_8px_0px_#FFFFFF00_inset,-2px_-2px_0.5px_-2px_#FFFFFF_inset,2px_2px_0.5px_-2px_#FFFFFF_inset]  bg-white/10 backdrop-blur inner-shadow]">
                    <div className="w-full flex justify-center">
                      <Image
                        className="md:size-36 size-28  object-contain"
                        src="/images/timeImage.webp"
                        width={141}
                        height={141}
                        alt="Time table Manager"
                      />
                    </div>
                    <div className="xl:text-2xl lg:text-xl md:text-lg text-base font-semibold text-balance text-white">
                      Exam & Result Manager
                    </div>
                    <div className="text-xs font-normal text-balance text-white/80 grow">
                      An intelligent system that automatically detects important
                      events (like fees due, homework deadlines, exams,
                      attendance issues, transport updates, or birthdays),
                      analyzes class and individual student data, and sends
                      timely reminders to the right people. It supports multiple
                      channels—WhatsApp, SMS, push notifications, and emaimanual
                      follow-ups, and ensure parents, students, and teachers
                      never miss critical updates.
                    </div>
                  </div>
                </div>
                <div className="md:w-1/3 sm:w-1/2 w-full px-2.5">
                  <div className="w-full flex flex-col relative rounded-3xl p-6 gap-2.5 shadow-[0px_2px_8px_2px_#0000001A,0px_8px_8px_0px_#FFFFFF00_inset,-2px_-2px_0.5px_-2px_#FFFFFF_inset,2px_2px_0.5px_-2px_#FFFFFF_inset]  bg-white/10 backdrop-blur inner-shadow]">
                    <div className="w-full flex justify-center">
                      <Image
                        className="md:size-36 size-28  object-contain"
                        src="/images/timeImage.webp"
                        width={141}
                        height={141}
                        alt="Time table Manager"
                      />
                    </div>
                    <div className="xl:text-2xl lg:text-xl md:text-lg text-base font-semibold text-balance text-white">
                      Attendance Manager
                    </div>
                    <div className="text-xs font-normal text-balance text-white/80 grow">
                      An intelligent system that automatically detects important
                      events (like fees due, homework deadlines, exams,
                      attendance issues, transport updates, or birthdays),
                      analyzes class and individual student data, and sends
                      timely reminders to the right people. It supports multiple
                      channels—WhatsApp, SMS, push notifications, and emaimanual
                      follow-ups, and ensure parents, students, and teachers
                      never miss critical updates.
                    </div>
                  </div>
                </div>
                <div className="md:w-1/3 sm:w-1/2 w-full px-2.5">
                  <div className="w-full flex flex-col relative rounded-3xl p-6 gap-2.5 shadow-[0px_2px_8px_2px_#0000001A,0px_8px_8px_0px_#FFFFFF00_inset,-2px_-2px_0.5px_-2px_#FFFFFF_inset,2px_2px_0.5px_-2px_#FFFFFF_inset]  bg-white/10 backdrop-blur inner-shadow]">
                    <div className="w-full flex justify-center">
                      <Image
                        className="md:size-36 size-28  object-contain"
                        src="/images/timeImage.webp"
                        width={141}
                        height={141}
                        alt="Time table Manager"
                      />
                    </div>
                    <div className="xl:text-2xl lg:text-xl md:text-lg text-base font-semibold text-balance text-white">
                      Visitor Manager
                    </div>
                    <div className="text-xs font-normal text-balance text-white/80 grow">
                      An intelligent system that automatically detects important
                      events (like fees due, homework deadlines, exams,
                      attendance issues, transport updates, or birthdays),
                      analyzes class and individual student data, and sends
                      timely reminders to the right people. It supports multiple
                      channels—WhatsApp, SMS, push notifications, and emaimanual
                      follow-ups, and ensure parents, students, and teachers
                      never miss critical updates.
                    </div>
                  </div>
                </div>
                <div className="md:w-1/3 sm:w-1/2 w-full px-2.5">
                  <div className="w-full flex flex-col relative rounded-3xl p-6 gap-2.5 shadow-[0px_2px_8px_2px_#0000001A,0px_8px_8px_0px_#FFFFFF00_inset,-2px_-2px_0.5px_-2px_#FFFFFF_inset,2px_2px_0.5px_-2px_#FFFFFF_inset]  bg-white/10 backdrop-blur inner-shadow]">
                    <div className="w-full flex justify-center">
                      <Image
                        className="md:size-36 size-28  object-contain"
                        src="/images/timeImage.webp"
                        width={141}
                        height={141}
                        alt="Time table Manager"
                      />
                    </div>
                    <div className="xl:text-2xl lg:text-xl md:text-lg text-base font-semibold text-balance text-white">
                      Fees Manager
                    </div>
                    <div className="text-xs font-normal text-balance text-white/80 grow">
                      An intelligent system that automatically detects important
                      events (like fees due, homework deadlines, exams,
                      attendance issues, transport updates, or birthdays),
                      analyzes class and individual student data, and sends
                      timely reminders to the right people. It supports multiple
                      channels—WhatsApp, SMS, push notifications, and emaimanual
                      follow-ups, and ensure parents, students, and teachers
                      never miss critical updates.
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
                          className="md:size-36 size-28  object-contain"
                          src="/images/timeImage.webp"
                          width={141}
                          height={141}
                          alt="Time table Manager"
                        />
                      </div>
                      <div className="xl:text-2xl lg:text-xl md:text-lg text-base font-semibold text-balance text-white">
                        Time table Manager
                      </div>
                      <div className="text-xs font-normal text-balance text-white/80 grow">
                        An intelligent system that automatically detects
                        important events (like fees due, homework deadlines,
                        exams, attendance issues, transport updates, or
                        birthdays), analyzes class and individual student data,
                        and sends timely reminders to the right people. It
                        supports multiple channels—WhatsApp, SMS, push
                        notifications, and emaimanual follow-ups, and ensure
                        parents, students, and teachers never miss critical
                        updates.
                      </div>
                    </div>
                  </div>
                  <div className="embla__slide shrink-0 px-2  basis-[100%] md:basis-[66.66%] lg:basis-[33.33%]">
                    <div className="w-full flex flex-col relative rounded-3xl p-6 gap-2.5 shadow-[0px_2px_8px_2px_#0000001A,0px_8px_8px_0px_#FFFFFF00_inset,-2px_-2px_0.5px_-2px_#FFFFFF_inset,2px_2px_0.5px_-2px_#FFFFFF_inset]  bg-white/10 backdrop-blur inner-shadow]">
                      <div className="w-full flex justify-center">
                        <Image
                          className="md:size-36 size-28  object-contain"
                          src="/images/timeImage.webp"
                          width={141}
                          height={141}
                          alt="Time table Manager"
                        />
                      </div>
                      <div className="xl:text-2xl lg:text-xl md:text-lg text-base font-semibold text-balance text-white">
                        Time table Manager
                      </div>
                      <div className="text-xs font-normal text-balance text-white/80 grow">
                        An intelligent system that automatically detects
                        important events (like fees due, homework deadlines,
                        exams, attendance issues, transport updates, or
                        birthdays), analyzes class and individual student data,
                        and sends timely reminders to the right people. It
                        supports multiple channels—WhatsApp, SMS, push
                        notifications, and emaimanual follow-ups, and ensure
                        parents, students, and teachers never miss critical
                        updates.
                      </div>
                    </div>
                  </div>
                  <div className="embla__slide shrink-0 px-2  basis-[100%] md:basis-[66.66%] lg:basis-[33.33%]">
                    <div className="w-full flex flex-col relative rounded-3xl p-6 gap-2.5 shadow-[0px_2px_8px_2px_#0000001A,0px_8px_8px_0px_#FFFFFF00_inset,-2px_-2px_0.5px_-2px_#FFFFFF_inset,2px_2px_0.5px_-2px_#FFFFFF_inset]  bg-white/10 backdrop-blur inner-shadow]">
                      <div className="w-full flex justify-center">
                        <Image
                          className="md:size-36 size-28  object-contain"
                          src="/images/timeImage.webp"
                          width={141}
                          height={141}
                          alt="Time table Manager"
                        />
                      </div>
                      <div className="xl:text-2xl lg:text-xl md:text-lg text-base font-semibold text-balance text-white">
                        Time table Manager
                      </div>
                      <div className="text-xs font-normal text-balance text-white/80 grow">
                        An intelligent system that automatically detects
                        important events (like fees due, homework deadlines,
                        exams, attendance issues, transport updates, or
                        birthdays), analyzes class and individual student data,
                        and sends timely reminders to the right people. It
                        supports multiple channels—WhatsApp, SMS, push
                        notifications, and emaimanual follow-ups, and ensure
                        parents, students, and teachers never miss critical
                        updates.
                      </div>
                    </div>
                  </div>
                </EmblaCarousel>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="ourProductSection w-full group/cs relative overflow-hidden bg-[#6D55FD] md:py-8 pt-8">
        <div className="view ">
          <div className="flex flex-col w-full">
            <div className="flex flex-col pt-5">
              <div className="w-full [&_.prev-btn>svg]:text-white [&_.next-btn>svg]:text-white">
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
                      <div className="md:w-1/2 w-full xl:py-4 lg:py-3">
                        <div className="w-full flex flex-col gap-y-5">
                          <div className="lg:text-2xl md:text-xl text-white font-semibold">
                            Our Product
                          </div>
                          <h2 className="xl:text-5xl lg:text-4xl md:text-3xl text-2xl  text-white font-bold">
                            Student & Parent App
                          </h2>
                          <div className="lg:text-xl md:text-lg text-base font-semibold text-white">
                            User Friendly App for Parents for Seamless &
                            Comprehensive Progress Tracking
                          </div>
                          <ul className="list-disc list-inside flex flex-col *:text-white *:text-sm gap-y-3">
                            <li>Daily Attendance Tracking</li>
                            <li>Regular Updates through News & Circulars</li>
                            <li>Personalized Communication</li>
                            <li>Feedback & Concern</li>
                            <li>Homework, Syllabus & Exam Module</li>
                            <li>Complete Performance Analysis</li>
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
                          width={599}
                          height={463}
                          className="size-full mx-auto object-contain  object-bottom"
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
      <WhyChoose />
      <AwardCarousel />
      <TrustedLogo />
      <Testimonial />
      <section className="faq relative pt-8 bg-[#DDF7FF]">
        <div className="view relative max-sm:pb-4">
          <div className="flex flex-col">
            <div className="flex flex-wrap relative md:items-end justify-between">
              <div className="md:w-1/2 w-full md:sticky md:bottom-0">
                <div className="w-full flex flex-col gap-y-3">
                  <h2 className="w-full md:grow 2xl:text-4xl xl:text-4xl text-center lg:text-3xl md:text-3xl sm:text-2xl text-2xl font-bold text-[#272727] text-balance relative z-10  md:pb-8 pb-4">
                    Frequently Asked Questions
                  </h2>
                  <div className="w-1/2 mx-auto ">
                    <Image
                      src="/images/schoolManagementFaq.webp"
                      alt="Easy Appointment Booking"
                      width={396}
                      height={467}
                      className="size-full mx-auto object-contain"
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
                        How Much Does It Cost To Create a Doctor On-Demand App?
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
                        Depending on the platform, doctor appointment app
                        development company hourly, and its features, the cost
                        can greatly vary; however, most often, the cost usually
                        is between $15000 and $49000+. Your further
                        specifications will add to the cost while also
                        increasing the quality and scalability of your service
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
                        How Much Does It Cost To Create a Doctor On-Demand App?
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
                        Depending on the platform, doctor appointment app
                        development company hourly, and its features, the cost
                        can greatly vary; however, most often, the cost usually
                        is between $15000 and $49000+. Your further
                        specifications will add to the cost while also
                        increasing the quality and scalability of your service
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
                        How Much Does It Cost To Create a Doctor On-Demand App?
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

export default page;
