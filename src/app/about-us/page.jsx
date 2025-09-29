import Image from "next/image";
import TrustedLogo from "@/components/trustedLogo/TrustedLogo";
import Testimonial from "@/components/testimonial/Testimonial";

export const metadata = {
  title: "About Us | Leading School ERP & Management Software Provider",
  description: "Edoovi ERP is a leading name in School ERP & School Management Software. Discover our vision, values & innovation. Join us in shaping digital education.",

  robots: {
    index: false,
    follow: false,
  },
};

const page = () => {
  return (
    <>
      <section className="heroSection  relative overflow-hidden  max-md:!h-auto flex flex-col  bg-[#E5F8FC] md:pt-12 pt-8">
        <div className="view">
          <div className="flex flex-wrap justify-between ">
            <div className="md:w-6/12 w-full mx-auto xl:py-4 lg:py-3 py-4">
              <div className="flex flex-col gap-y-4">
                <h1 className="w-full xl:text-5xl lg:text-5xl md:text-4xl text-3xl pt-4 md:font-bold  max-sm:text-center font-semibold text-[#393A8C] relative ">
                  Stepping Ahead into Future with Extensive Edoovi ERP Solutions
                </h1>
                <div className="flex items-center gap-4 text-lg text-[#272727] font-semibold">
                  <span>School</span>
                  <span className="text-[#272727]">|</span>
                  <span>ERP</span>
                  <span className="text-[#272727]">|</span>
                  <span>Parent App</span>
                </div>
              </div>
            </div>
            <div className="md:w-5/12 w-full">
              <Image
                className="size-full object-contain aspect-[79/72]"
                src="/images/aboutHero.webp"
                width={474}
                height={432}
                alt=" Building Brighter Futures With Innovative EDOOVI ERP Solutions"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="ourJourney bg-white relative py-8">
        <div className="view xl:py-4 lg:py-3 py-4">
          <div className="flex flex-col">
            <div className="flex flex-wrap justify-between">
              <div className="md:w-1/2 w-full flex flex-col gap-y-6 md:pr-6">
                <div className="flex flex-col gap-y-3">
                  <h2 className="w-full 2xl:text-5xl xl:text-5xl lg:text-4xl md:text-3xl sm:text-2xl text-2xl font-bold text-[#393A8C] text-balance relative z-10 ">
                    Our Journey
                  </h2>
                  <p className="md:text-base text-sm font-normal text-[#595959]  text-balance">
                    Introduced in 2020, Edoovi offers a comprehensive cloud
                    management solution designed for use in global educational
                    institutions.
                  </p>
                </div>
                <div className="w-full md:pr-14">
                  <Image
                    src="/images/journey.webp"
                    alt="Our Journey"
                    width={549}
                    height={671}
                    className="size-full mx-auto object-contain aspect-[9/11]"
                  />
                </div>
              </div>
              <div className="md:w-1/2 w-full ">
                <div className="flex flex-row">
                  <div className="flex flex-col relative">
                    <div className="group/jj flex flex-row mt- md:items-end items-center1 gap-5 ">
                      <div className="justify-center items-center flex flex-col gap-2">
                        <div className="w-1.5 h-11 bg-[#DCDCDC] group-hover/jj:bg-[#0EAFF0]"></div>
                        <div className="w-16 h-16 flex items-center font-bold justify-center text-[#272727] cursor-pointer rounded-full bg-white border-[#DCDCDC] border-4 group-hover/jj:text-white group-hover/jj:border-[#39C0FFE3]  group-hover/jj:bg-[#0EAFF0] duration-300">
                          2020
                        </div>
                      </div>
                      <div className="flex justify-center items-center">
                        <p className="text-base font-semibold text-[#595959] leading-7">
                          Released the first version of our EDOOVI SOFTWARE,
                          with a focus on providing an all-in-one solution for
                          school management tasks that incorporates advanced
                          student tracking, attendance, and reporting features.
                        </p>
                      </div>
                    </div>
                    <div className="group/jj flex flex-row mt- md:items-end items-center1 gap-5 ">
                      <div className="justify-center items-center flex flex-col gap-2">
                        <div className="w-1.5 h-11 bg-[#DCDCDC] group-hover/jj:bg-[#0EAFF0]"></div>
                        <div className="w-16 h-16 flex items-center font-bold justify-center text-[#272727] cursor-pointer rounded-full bg-white border-[#DCDCDC] border-4 group-hover/jj:text-white group-hover/jj:border-[#39C0FFE3]  group-hover/jj:bg-[#0EAFF0]">
                          2021
                        </div>
                      </div>
                      <div className="flex justify-center items-center">
                        <p className="text-base font-semibold text-[#595959] leading-7">
                          Implemented real-time communication features, allowing
                          for real-time updates for students, parents, and
                          teachers.
                        </p>
                      </div>
                    </div>
                    <div className="group/jj flex flex-row mt-1 md:items-end items-center gap-5 ">
                      <div className=" justify-center items-center flex flex-col gap-2">
                        <div className="w-1.5 h-11 bg-[#DCDCDC] group-hover/jj:bg-[#0EAFF0]"></div>
                        <div className="w-16 h-16 flex items-center font-bold justify-center text-[#272727] cursor-pointer rounded-full bg-white border-[#DCDCDC] border-4 group-hover/jj:text-white group-hover/jj:border-[#39C0FFE3]  group-hover/jj:bg-[#0EAFF0]">
                          2022
                        </div>
                      </div>
                      <div className="flex justify-center items-center">
                        <p className="text-base font-semibold text-[#595959] leading-7">
                          Created multiple additional modules to help schools
                          customize the EDOOVI ERP software uniquely and
                          distinctively to their needs to help do more to
                          automate their school operations.
                        </p>
                      </div>
                    </div>
                    <div className="group/jj flex flex-row mt-1 md:items-end items-center gap-5 ">
                      <div className=" justify-center items-center flex flex-col gap-2">
                        <div className="w-1.5 h-11 bg-[#DCDCDC] group-hover/jj:bg-[#0EAFF0]"></div>
                        <div className="w-16 h-16 flex items-center font-bold justify-center text-[#272727] cursor-pointer rounded-full bg-white border-[#DCDCDC] border-4 group-hover/jj:text-white group-hover/jj:border-[#39C0FFE3]  group-hover/jj:bg-[#0EAFF0]">
                          2023
                        </div>
                      </div>
                      <div className="flex justify-center items-center">
                        <p className="text-base font-semibold text-[#595959] leading-7">
                          More practical modules were added, allowing schools to
                          customize the EDOOVI ERP software to meet their
                          particular requirements and increase operational
                          automation.
                        </p>
                      </div>
                    </div>
                    <div className="group/jj flex flex-row mt-1 md:items-end items-center gap-5 ">
                      <div className=" justify-center items-center flex flex-col gap-2">
                        <div className="w-1.5 h-11 bg-[#DCDCDC] group-hover/jj:bg-[#0EAFF0]"></div>
                        <div className="w-16 h-16 flex items-center font-bold justify-center text-[#272727] cursor-pointer rounded-full bg-white border-[#DCDCDC] border-4 group-hover/jj:text-white group-hover/jj:border-[#39C0FFE3]  group-hover/jj:bg-[#0EAFF0]">
                          2024
                        </div>
                      </div>
                      <div className="flex justify-center items-center">
                        <p className="text-base font-semibold text-[#595959] leading-7">
                          Prior to the pandemic, EDOOVI was used by 100+ schools
                          to more efficiently manage the admissions, onboarding,
                          registration, timetabling, academics, learning,
                          payment, transportation, and library functions.
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
          width={1265}
          height={348}
          className="size-full mx-auto absolute inset-0 -z-10 object-cover object-center aspect-[1265/348]"
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
                      Our goal is to provide schools around the world with
                      affordable and sensible ERP solutions. Our goal is to give
                      schools the best ERP software possible so they can improve
                      and streamline their daily operations.
                    </div>
                  </div>
                </div>
                <div className="md:w-4/12 w-full">
                  <Image
                    src="/images/aboutMission.webp"
                    alt=" Our Mission"
                    width={379}
                    height={307}
                    className="w-full mx-auto object-contain object-center aspect-[379/307]"
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
                    width="474"
                    height="467"
                    className="w-full mx-auto object-contain object-center aspect-[474/467]"
                  />
                </div>
                <div className="md:w-6/12 w-full mx-auto xl:py-4 lg:py-3 py-4">
                  <div className="flex flex-col gap-y-3">
                    <h2 className="w-full 2xl:text-5xl xl:text-5xl lg:text-4xl md:text-3xl sm:text-2xl text-2xl font-bold text-[#272727] text-balance relative z-10 ">
                      Our Vision
                    </h2>
                    <div className="w-full font-semibold text-[#595959] md:text-base text-sm txt-balance">
                      Enable educational services in a dynamic setting to give
                      teachers and students better opportunities for ongoing
                      development."
                    </div>
                    <div className="space-y-8 pt-3">
                      <div className="flex gap-3">
                        <div className="w-2 bg-[#39C0FFE3] rounded-lg"></div>
                        <p className="text-[#595959] md:text-base text-sm leading-relaxed">
                          In order to make school management not only simpler
                          but also more intelligent, we want to build a robust
                          network of schools that can engage and communicate
                          with one another via a common platform.
                        </p>
                      </div>
                      <div className="flex gap-3">
                        <div className="w-2 bg-[#393A8C] rounded-lg"></div>
                        <p className="text-[#595959] md:text-base text-sm leading-relaxed">
                          Build on your five years of experience to provide
                          dependable solutions that satisfy changing educational
                          needs while also constantly improving and
                          adapting.Encourage the transition to tech-driven,
                          paperless, and efficient education management.
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
                      width={284}
                      height={330}
                      className="size-full mx-auto object-contain aspect-[142/165]"
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
                        How Do I Get Support for Technical Issues with edoovi
                        ERP?
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
                        Contact our support staff by email or the in-app help
                        center if you're having technical problems or have
                        questions about edoovi ERP. We aim for prompt resolution
                        and place a high priority on user satisfaction. Our
                        staff is on hand 24/7 to help with troubleshooting and
                        provide advice on system features.
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
                        What Is the Usual Response Time After I Contact Support?
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
                        You can anticipate hearing back from our team within a
                        day after submitting a request or question. We recognize
                        how critical it is to address your concerns as soon as
                        possible. To guarantee that your operations are
                        disrupted as little as possible, high-priority issues
                        are addressed right away.
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
                        How Is My Feedback Handled by edoovi ERP?
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
                        We appreciate every comment and recommendation from our
                        users since it aids in the development and enhancement
                        of Kanoovi ERP. After feedback is received, our product
                        team reviews it and uses it to inform future updates, if
                        applicable.
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
