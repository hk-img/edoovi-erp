import Link from "next/link";
import Image from "next/image";
import EmblaCarousel from "../emblaCarousel/EmblaCarousel";

const AwardCarousel = () => {
  return (
    <>
      <section className="awardsSection relative overflow-hidden py-8">
        <Image
          src="/images/awardsBgIMg.webp"
          alt="Easy Appointment Booking"
          fill
          className="size-full mx-auto absolute inset-0 -z-10 object-cover object-center"
        />
        <div className="view xl:py-4 lg:py-3 py-4">
          <div className="flex flex-col">
            <h2 className="w-full 2xl:text-5xl xl:text-5xl lg:text-4xl md:text-3xl sm:text-2xl text-2xl font-bold text-white text-balance relative z-10 text-center md:pb-8 pb-4">
              Awards & Recognizations
            </h2>
            <div className="w-full">
              <div className="flex flex-col gap-y-6">
                <EmblaCarousel
                  options={{
                    align: "start",
                    loop: true,
                  }}
                >
                  <div className="embla__slide shrink-0 px-2  basis-[70.70%] sm:basis-[66.66%] md:basis-[40.40%] lg:basis-[33.33%]">
                    <div className="bg-white rounded-2xl p-6 flex items-center gap-3">
                      <div className="shrink-0">
                        <Image
                          src="/images/goodFirmsLogo.webp"
                          alt="goodfirms logo"
                          width={62}
                          height={62}
                          className="lg:size-20 md:size-16 size-14 mx-auto aspect-square"
                        />
                      </div>
                      <div className="flex flex-col gap-1">
                        <div className="lg:text-2xl md:text-xl text-lg font-semibold text-[#4E4E4E]">
                          Good Firms
                        </div>
                        <div className="md:text-base text-sm font-semibold text-[#4E4E4E]">
                          487 Reviews
                        </div>
                        <div className="flex items-center gap-1">
                          <span className="text-[#4E4E4E] font-bold md:text-base text-sm">
                            4.8
                          </span>
                          <ul className="flex gap-1 items-center">
                            <li>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="18"
                                height="17"
                                viewBox="0 0 18 17"
                                fill="none"
                              >
                                <path
                                  d="M9 0L12.0153 4.84974L17.5595 6.21885L13.8789 10.5853L14.2901 16.2812L9 14.13L3.70993 16.2812L4.12108 10.5853L0.440492 6.21885L5.98466 4.84974L9 0Z"
                                  fill="#F65916"
                                />
                              </svg>
                            </li>
                            <li>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="18"
                                height="17"
                                viewBox="0 0 18 17"
                                fill="none"
                              >
                                <path
                                  d="M9 0L12.0153 4.84974L17.5595 6.21885L13.8789 10.5853L14.2901 16.2812L9 14.13L3.70993 16.2812L4.12108 10.5853L0.440492 6.21885L5.98466 4.84974L9 0Z"
                                  fill="#F65916"
                                />
                              </svg>
                            </li>
                            <li>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="18"
                                height="17"
                                viewBox="0 0 18 17"
                                fill="none"
                              >
                                <path
                                  d="M9 0L12.0153 4.84974L17.5595 6.21885L13.8789 10.5853L14.2901 16.2812L9 14.13L3.70993 16.2812L4.12108 10.5853L0.440492 6.21885L5.98466 4.84974L9 0Z"
                                  fill="#F65916"
                                />
                              </svg>
                            </li>
                            <li>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="18"
                                height="17"
                                viewBox="0 0 18 17"
                                fill="none"
                              >
                                <path
                                  d="M9 0L12.0153 4.84974L17.5595 6.21885L13.8789 10.5853L14.2901 16.2812L9 14.13L3.70993 16.2812L4.12108 10.5853L0.440492 6.21885L5.98466 4.84974L9 0Z"
                                  fill="#F65916"
                                />
                              </svg>
                            </li>
                            <li>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="18"
                                height="17"
                                viewBox="0 0 18 17"
                                fill="none"
                              >
                                <path
                                  d="M9 0L12.0153 4.84974L17.5595 6.21885L13.8789 10.5853L14.2901 16.2812L9 14.13L3.70993 16.2812L4.12108 10.5853L0.440492 6.21885L5.98466 4.84974L9 0Z"
                                  fill="#F65916"
                                />
                              </svg>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="embla__slide shrink-0 px-2 basis-[70.70%] sm:basis-[66.66%] md:basis-[40.40%] lg:basis-[33.33%]">
                    <div className="bg-white rounded-2xl p-6 flex items-center gap-3">
                      <div className="shrink-0">
                        <Image
                          src="/images/G2Logo.webp"
                          alt="g2 logo"
                          width={62}
                          height={62}
                          className="lg:size-20 md:size-16 size-14 mx-auto aspect-square"
                        />
                      </div>
                      <div className="flex flex-col gap-1">
                        <div className="lg:text-2xl md:text-xl text-lg font-semibold text-[#4E4E4E]">
                          G2
                        </div>
                        <div className="md:text-base text-sm font-semibold text-[#4E4E4E]">
                          487 Reviews
                        </div>
                        <div className="flex items-center gap-1">
                          <span className="text-[#4E4E4E] font-bold md:text-base text-sm">
                            4.8
                          </span>
                          <ul className="flex gap-1 items-center">
                            <li>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="18"
                                height="17"
                                viewBox="0 0 18 17"
                                fill="none"
                              >
                                <path
                                  d="M9 0L12.0153 4.84974L17.5595 6.21885L13.8789 10.5853L14.2901 16.2812L9 14.13L3.70993 16.2812L4.12108 10.5853L0.440492 6.21885L5.98466 4.84974L9 0Z"
                                  fill="#F65916"
                                />
                              </svg>
                            </li>
                            <li>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="18"
                                height="17"
                                viewBox="0 0 18 17"
                                fill="none"
                              >
                                <path
                                  d="M9 0L12.0153 4.84974L17.5595 6.21885L13.8789 10.5853L14.2901 16.2812L9 14.13L3.70993 16.2812L4.12108 10.5853L0.440492 6.21885L5.98466 4.84974L9 0Z"
                                  fill="#F65916"
                                />
                              </svg>
                            </li>
                            <li>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="18"
                                height="17"
                                viewBox="0 0 18 17"
                                fill="none"
                              >
                                <path
                                  d="M9 0L12.0153 4.84974L17.5595 6.21885L13.8789 10.5853L14.2901 16.2812L9 14.13L3.70993 16.2812L4.12108 10.5853L0.440492 6.21885L5.98466 4.84974L9 0Z"
                                  fill="#F65916"
                                />
                              </svg>
                            </li>
                            <li>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="18"
                                height="17"
                                viewBox="0 0 18 17"
                                fill="none"
                              >
                                <path
                                  d="M9 0L12.0153 4.84974L17.5595 6.21885L13.8789 10.5853L14.2901 16.2812L9 14.13L3.70993 16.2812L4.12108 10.5853L0.440492 6.21885L5.98466 4.84974L9 0Z"
                                  fill="#F65916"
                                />
                              </svg>
                            </li>
                            <li>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="18"
                                height="17"
                                viewBox="0 0 18 17"
                                fill="none"
                              >
                                <path
                                  d="M9 0L12.0153 4.84974L17.5595 6.21885L13.8789 10.5853L14.2901 16.2812L9 14.13L3.70993 16.2812L4.12108 10.5853L0.440492 6.21885L5.98466 4.84974L9 0Z"
                                  fill="#F65916"
                                />
                              </svg>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="embla__slide shrink-0 px-2 basis-[70.70%] sm:basis-[66.66%] md:basis-[40.40%] lg:basis-[33.33%]">
                    <div className="bg-white rounded-2xl p-6 flex items-center gap-3">
                      <div className="shrink-0">
                        <Image
                          src="/images/techJockeyLogo.webp"
                          alt="tech joykey logo"
                          width={62}
                          height={62}
                          className="lg:size-20 md:size-16 size-14 mx-auto aspect-square"
                        />
                      </div>
                      <div className="flex flex-col gap-1">
                        <div className="lg:text-2xl md:text-xl text-lg font-semibold text-[#4E4E4E]">
                          Tech Jockey
                        </div>
                        <div className="md:text-base text-sm font-semibold text-[#4E4E4E]">
                          487 Reviews
                        </div>
                        <div className="flex items-center gap-1">
                          <span className="text-[#4E4E4E] font-bold md:text-base text-sm">
                            4.8
                          </span>
                          <ul className="flex gap-1 items-center">
                            <li>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="18"
                                height="17"
                                viewBox="0 0 18 17"
                                fill="none"
                              >
                                <path
                                  d="M9 0L12.0153 4.84974L17.5595 6.21885L13.8789 10.5853L14.2901 16.2812L9 14.13L3.70993 16.2812L4.12108 10.5853L0.440492 6.21885L5.98466 4.84974L9 0Z"
                                  fill="#F65916"
                                />
                              </svg>
                            </li>
                            <li>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="18"
                                height="17"
                                viewBox="0 0 18 17"
                                fill="none"
                              >
                                <path
                                  d="M9 0L12.0153 4.84974L17.5595 6.21885L13.8789 10.5853L14.2901 16.2812L9 14.13L3.70993 16.2812L4.12108 10.5853L0.440492 6.21885L5.98466 4.84974L9 0Z"
                                  fill="#F65916"
                                />
                              </svg>
                            </li>
                            <li>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="18"
                                height="17"
                                viewBox="0 0 18 17"
                                fill="none"
                              >
                                <path
                                  d="M9 0L12.0153 4.84974L17.5595 6.21885L13.8789 10.5853L14.2901 16.2812L9 14.13L3.70993 16.2812L4.12108 10.5853L0.440492 6.21885L5.98466 4.84974L9 0Z"
                                  fill="#F65916"
                                />
                              </svg>
                            </li>
                            <li>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="18"
                                height="17"
                                viewBox="0 0 18 17"
                                fill="none"
                              >
                                <path
                                  d="M9 0L12.0153 4.84974L17.5595 6.21885L13.8789 10.5853L14.2901 16.2812L9 14.13L3.70993 16.2812L4.12108 10.5853L0.440492 6.21885L5.98466 4.84974L9 0Z"
                                  fill="#F65916"
                                />
                              </svg>
                            </li>
                            <li>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="18"
                                height="17"
                                viewBox="0 0 18 17"
                                fill="none"
                              >
                                <path
                                  d="M9 0L12.0153 4.84974L17.5595 6.21885L13.8789 10.5853L14.2901 16.2812L9 14.13L3.70993 16.2812L4.12108 10.5853L0.440492 6.21885L5.98466 4.84974L9 0Z"
                                  fill="#F65916"
                                />
                              </svg>
                            </li>
                          </ul>
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

export default AwardCarousel;
