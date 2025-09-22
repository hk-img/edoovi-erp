import Link from "next/link";
import Image from "next/image";
import TrustedLogo from "@/components/trustedLogo/TrustedLogo";
import Testimonial from "@/components/testimonial/Testimonial";

const page = () => {
  return (
    <>
      <section className="heroSection  relative overflow-hidden  max-md:!h-auto flex flex-col  bg-[#E5F8FC] md:pt-12 pt-8">
        <div className="view">
          <div className="flex flex-wrap justify-between ">
            <div className="md:w-6/12 w-full mx-auto xl:py-4 lg:py-3 py-4">
              <div className="flex flex-col gap-y-4">
                <h1 className="w-full xl:text-5xl lg:text-5xl md:text-4xl text-3xl pt-4 md:font-bold  max-sm:text-center font-semibold text-[#393A8C] relative ">
                  Building Brighter Futures With Innovative EDOOVI ERP Solutions
                </h1>
                <div className="flex items-center gap-4 text-lg text-[#272727] font-semibold">
                  <span>School App</span>
                  <span className="text-[#272727]">|</span>
                  <span>ERP</span>
                  <span className="text-[#272727]">|</span>
                  <span>Parent App</span>
                </div>
              </div>
            </div>
            <div className="md:w-5/12 w-full">
              <Image
                className="size-full object-contain"
                src="/images/aboutHero.webp"
                width={1200}
                height={477}
                alt=" Building Brighter Futures With Innovative EDOOVI ERP Solutions"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="ourJourney bg-white relative py-8">
        <div className="view xl:py-4 lg:py-3 py-4">
          <div className="flex flex-col">
            <h2 className="w-full 2xl:text-4xl mx-auto xl:text-4xl lg:text-3xl md:text-3xl sm:text-2xl text-2xl font-bold text-white text-balance relative z-10 text-center md:pb-8 pb-4">
              Latest Insights
            </h2>
            <div className="flex flex-wrap justify-between">
              <div className="md:w-1/2 w-full flex flex-col gap-y-6 md:pr-6">
                <div className="flex flex-col">
                  <h2 className="w-full 2xl:text-5xl xl:text-5xl lg:text-4xl md:text-3xl sm:text-2xl text-2xl font-bold text-[#393A8C] text-balance relative z-10 ">
                    Our Journey
                  </h2>
                  <p className="md:text-base text-sm font-normal text-[#595959] leading-7 text-balance">
                    Launched in 2020, Edoovi provides an end-to-end cloud
                    management solution for schools worldwide.
                  </p>
                </div>
                <div className="w-full">
                  <Image
                    src="/images/journey.webp"
                    alt="Our Journey"
                    width={381}
                    height={254}
                    className="size-full mx-auto object-contain"
                  />
                </div>
              </div>
              <div className="md:w-1/2 w-full ">
                <div className="flex flex-row">
                  <div className="flex flex-col relative">
                    <div className="group flex flex-row mt-1 gap-5 ">
                      <div className=" justify-center items-center flex flex-col gap-2">
                        <input
                          type="radio"
                          name="tab"
                          id="tab1"
                          className="hidden peer  "
                        />
                        <label
                          htmlFor="tab1"
                          className="w-1.5 h-11 bg-[#DCDCDC] group-has-[:checked]:bg-[#0EAFF0]"
                        ></label>
                        <label
                          htmlFor="tab1"
                          className="w-16 h-16 flex items-center font-bold justify-center text-[#272727] cursor-pointer rounded-full bg-white border-[#DCDCDC] border-4 group-has-[:checked]:text-white group-has-[:checked]:border-[#39C0FFE3]  group-has-[:checked]:bg-[#0EAFF0]"
                        >
                          2018
                        </label>
                      </div>
                      <div className="flex justify-center items-center">
                        <p className="text-base font-semibold text-[#595959] leading-7">
                          Launched the first version of our EDOOVI SOFTWARE,
                          with a focus on simplifying school management tasks
                          that includes advanced student tracking, attendance
                          management, and reporting tools.
                        </p>
                      </div>
                    </div>
                    <div className="group flex flex-row mt-1 gap-5 ">
                      <div className=" justify-center items-center flex flex-col gap-2">
                        <input
                          type="radio"
                          name="tab"
                          id="tab2"
                          className="hidden peer  "
                        />
                        <label
                          htmlFor="tab2"
                          className="w-1.5 h-11 bg-[#DCDCDC] group-has-[:checked]:bg-[#0EAFF0]"
                        ></label>
                        <label
                          htmlFor="tab2"
                          className="w-16 h-16 flex items-center font-bold justify-center text-[#272727] cursor-pointer rounded-full bg-white border-[#DCDCDC] border-4 group-has-[:checked]:text-white group-has-[:checked]:border-[#39C0FFE3]  group-has-[:checked]:bg-[#0EAFF0]"
                        >
                          2021
                        </label>
                      </div>
                      <div className="flex justify-center items-center">
                        <p className="text-base font-semibold text-[#595959] leading-7">
                          Integrated real-time communication systems, allowing
                          instant updates for students, parents, and teachers.
                        </p>
                      </div>
                    </div>
                    <div className="group flex flex-row mt-1 gap-5 ">
                      <div className=" justify-center items-center flex flex-col gap-2">
                        <input
                          type="radio"
                          name="tab"
                          id="tab3"
                          className="hidden peer  "
                        />
                        <label
                          htmlFor="tab3"
                          className="w-1.5 h-11 bg-[#DCDCDC] group-has-[:checked]:bg-[#0EAFF0]"
                        ></label>
                        <label
                          htmlFor="tab3"
                          className="w-16 h-16 flex items-center font-bold justify-center text-[#272727] cursor-pointer rounded-full bg-white border-[#DCDCDC] border-4 group-has-[:checked]:text-white group-has-[:checked]:border-[#39C0FFE3]  group-has-[:checked]:bg-[#0EAFF0]"
                        >
                          2022
                        </label>
                      </div>
                      <div className="flex justify-center items-center">
                        <p className="text-base font-semibold text-[#595959] leading-7">
                          Our ERP software also helps build strong communication
                          with teachers, students, parents, candidates, and
                          alumni.
                        </p>
                      </div>
                    </div>
                    <div className="group flex flex-row mt-1 gap-5 ">
                      <div className=" justify-center items-center flex flex-col gap-2">
                        <input
                          type="radio"
                          name="tab"
                          id="tab4"
                          className="hidden peer  "
                        />
                        <label
                          htmlFor="tab4"
                          className="w-1.5 h-11 bg-[#DCDCDC] group-has-[:checked]:bg-[#0EAFF0]"
                        ></label>
                        <label
                          htmlFor="tab4"
                          className="w-16 h-16 flex items-center font-bold justify-center text-[#272727] cursor-pointer rounded-full bg-white border-[#DCDCDC] border-4 group-has-[:checked]:text-white group-has-[:checked]:border-[#39C0FFE3]  group-has-[:checked]:bg-[#0EAFF0]"
                        >
                          2023
                        </label>
                      </div>
                      <div className="flex justify-center items-center">
                        <p className="text-base font-semibold text-[#595959] leading-7">
                          Introduced more useful modules, enabling schools to
                          tailor the EDOOVI ERP software to their unique needs
                          that helps schools to automate their operations more.
                        </p>
                      </div>
                    </div>
                    <div className="group flex flex-row mt-1 gap-5 ">
                      <div className=" justify-center items-center flex flex-col gap-2">
                        <input
                          type="radio"
                          name="tab"
                          id="tab5"
                          className="hidden peer  "
                        />
                        <label
                          htmlFor="tab5"
                          className="w-1.5 h-11 bg-[#DCDCDC] group-has-[:checked]:bg-[#0EAFF0]"
                        ></label>
                        <label
                          htmlFor="tab5"
                          className="w-16 h-16 flex items-center font-bold justify-center text-[#272727] cursor-pointer rounded-full bg-white border-[#DCDCDC] border-4 group-has-[:checked]:text-white group-has-[:checked]:border-[#39C0FFE3]  group-has-[:checked]:bg-[#0EAFF0]"
                        >
                          2024
                        </label>
                      </div>
                      <div className="flex justify-center items-center">
                        <p className="text-base font-semibold text-[#595959] leading-7">
                          Since its launch, 100+ schools have been using this
                          software to manage admissions, registration,
                          timetabling, academic, learning, payments,
                          transportation, and library operations effectively.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="mission relative overflow-hidden ">
        <Image
          src="/images/impactSolutionBg.webp"
          alt="Easy Appointment Booking"
          width={400}
          height={525}
          className="size-full mx-auto absolute inset-0 -z-10 object-cover object-center"
        />
        <div className="view xl:py-4 lg:py-3 py-4">
          <div className="flex flex-col">
            <div className="w-full pt-5">
              <div className="w-full flex flex-wrap items-center justify-between">
                <div className="md:w-6/12 w-full">
                  <div className="flex flex-col gap-y-3">
                    <h2 className="w-full 2xl:text-5xl xl:text-5xl lg:text-4xl md:text-3xl sm:text-2xl text-2xl font-bold text-white text-balance relative z-10 ">
                      Our Mission
                    </h2>
                    <div className="w-full text-white md:text-base text-sm txt-balance">
                      Our Mission is to deliver cost-effective and reasonable
                      ERP solutions for schools worldwide. With maximum
                      attention, we aim to provide an outstanding ERP software
                      to schools for enhancing and streamlining their day-to-day
                      tasks.
                    </div>
                  </div>
                </div>
                <div className="md:w-4/12 w-full">
                  <Image
                    src="/images/aboutMission.webp"
                    alt=" Our Mission"
                    width={803}
                    height={650}
                    className="w-full mx-auto object-contain object-center"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="vision relative overflow-hidden bg-[#EFFDFF]">
        <div className="view">
          <div className="flex flex-col">
            <div className="w-full pt-5">
              <div className="w-full flex flex-wrap items-center justify-between">
                <div className="md:w-5/12 w-full max-sm:px-4 max-sm:order-last">
                  <Image
                    src="/images/aboutVision.webp"
                    alt=" Our Vision"
                    width="700"
                    height="600"
                    className="w-full mx-auto object-contain object-center"
                  />
                </div>
                <div className="md:w-6/12 w-full mx-auto xl:py-4 lg:py-3 py-4">
                  <div className="flex flex-col gap-y-3">
                    <h2 className="w-full 2xl:text-5xl xl:text-5xl lg:text-4xl md:text-3xl sm:text-2xl text-2xl font-bold text-[#272727] text-balance relative z-10 ">
                      Our Vision
                    </h2>
                    <div className="w-full font-semibold text-[#595959] md:text-base text-sm txt-balance">
                      Our Mission is to deliver cost-effective and reasonable
                      ERP solutions for schools worldwide. With maximum
                      attention, we aim to provide an outstanding ERP software
                      to schools for enhancing and streamlining their day-to-day
                      tasks.
                    </div>
                    <div className="space-y-8 pt-3">
                      <div className="flex gap-3">
                        <div className="w-2 bg-[#39C0FFE3] rounded-lg"></div>
                        <p className="text-[#595959] md:text-base text-sm leading-relaxed">
                          Our goal is to establish a strong chain of schools
                          that can interact and communicate through a single
                          platform, where educators, administrators, students,
                          and parents connect seamlessly — making school
                          management not just easier, but smarter.
                        </p>
                      </div>
                      <div className="flex gap-3">
                        <div className="w-1 bg-[#393A8C] rounded-lg"></div>
                        <p className="text-[#595959] md:text-base text-sm leading-relaxed">
                          Build on 5 years of experience to continuously
                          improve, adapt, and offer reliable solutions that meet
                          evolving educational needs. Drive the shift towards
                          paperless, efficient, and tech-driven education
                          management.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <TrustedLogo />
      <Testimonial />
      <section className="faq relative pt-8 bg-[#DDF7FF]">
        <div className="view relative">
          <div className="flex flex-col">
            <div className="flex flex-wrap relative md:items-end justify-between">
              <div className="md:w-1/2 w-full md:sticky md:bottom-0">
                <div className="w-full flex flex-col gap-y-3">
                  <h2 className="w-full md:grow 2xl:text-4xl xl:text-4xl text-center lg:text-3xl md:text-3xl sm:text-2xl text-2xl font-bold text-[#272727] text-balance relative z-10  md:pb-8 pb-4">
                    Frequently Asked Questions
                  </h2>
                  <div className="w-1/2 mx-auto">
                    <Image
                      loading="lazy"
                      fetchPriority="low"
                      src="/images/schoolManagementFaq.webp"
                      alt="Easy Appointment Booking"
                      width={396}
                      height={467}
                      className="size-full mx-auto object-contain"
                    />
                  </div>
                </div>
              </div>
              <div className="md:w-1/2 w-full xl:py-4 lg:py-3 py-4">
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
