import Link from "next/link";
import Image from "next/image";
import EmblaCarousel from "../emblaCarousel/EmblaCarousel";

const WhyChoose = () => {
  return (
    <>
      <section className="whyChooseSection relative overflow-hidden z-30 py-8">
        <Image
          src="/images/whyChooseBg.webp"
          alt="Easy Appointment Booking"
          fill
          className="size-full mx-auto absolute inset-0 -z-10 object-cover object-center"
        />
        <div className="view xl:py-4 lg:py-3 py-4 ">
          <div className="flex flex-col">
            <h2 className="w-full 2xl:text-5xl xl:text-5xl lg:text-4xl md:text-3xl sm:text-2xl text-2xl font-bold text-white text-balance relative z-10 text-center md:pb-12 pb-4">
              Why choose edoovi as your school partner?
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
                      Event & Holiday Generator
                    </div>
                    <div className="md:text-sm text-xs text-white text-balanced">
                      Monitor Collected and pending fees with custom date range
                      selection, Admin also send reminders to student who did
                      not paid their fees on time
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
                      Event & Holiday Generator
                    </div>
                    <div className="md:text-sm text-xs text-white text-balanced">
                      Monitor Collected and pending fees with custom date range
                      selection, Admin also send reminders to student who did
                      not paid their fees on time
                    </div>
                  </div>
                </div>
                <div className="px-4">
                  <Image
                    src="/images/whyChooseRobotImg.webp"
                    alt="Why choose edoovi as your school partner?"
                    width={392}
                    height={392}
                    className="size-full mx-auto aspect-auto"
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
                      Event & Holiday Generator
                    </div>
                    <div className="md:text-sm text-xs text-white text-balanced">
                      Monitor Collected and pending fees with custom date range
                      selection, Admin also send reminders to student who did
                      not paid their fees on time
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
                      Event & Holiday Generator
                    </div>
                    <div className="md:text-sm text-xs text-white text-balanced">
                      Monitor Collected and pending fees with custom date range
                      selection, Admin also send reminders to student who did
                      not paid their fees on time
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
                        Event & Holiday Generator
                      </div>
                      <div className=" text-xs text-white text-balanced">
                        Monitor Collected and pending fees with custom date
                        range selection, Admin also send reminders to student
                        who did not paid their fees on time
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
                        Event & Holiday Generator
                      </div>
                      <div className=" text-xs text-white text-balanced">
                        Monitor Collected and pending fees with custom date
                        range selection, Admin also send reminders to student
                        who did not paid their fees on time
                      </div>
                    </div>
                  </div>
                </EmblaCarousel>
                <div className="w-full">
                  <Image
                    src="/images/whyChooseRobotImg.webp"
                    alt="Why choose edoovi as your school partner?"
                    width={392}
                    height={392}
                    className="size-full mx-auto aspect-auto"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default WhyChoose;
