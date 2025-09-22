import Link from "next/link";
import Image from "next/image";
import EmblaCarousel from "../emblaCarousel/EmblaCarousel";

const Testimonial = () => {
  return (
    <>
      <section className="testimonial relative overflow-hidden bg-[#EBFAFF] py-8 z-30">
        <div className="view relative z-30 xl:py-4 lg:py-3 py-4">
          <div className="flex flex-col">
            <div className="w-full">
              <div className="flex flex-wrap justify-between">
                <div className="md:w-1/4 w-full">
                  <div className="w-full flex flex-col gap-y-3">
                    <Image
                      src="/images/styleSchoolLogo.webp"
                      alt="testimonial school logo"
                      width={224}
                      height={141}
                      className="lg:max-w-56 md:max-w-48 max-w-44 h-auto mx-auto object-contain "
                    />
                    <h2 className="w-full 2xl:text-5xl xl:text-5xl lg:text-4xl md:text-3xl sm:text-2xl text-2xl font-bold text-[#272727] text-balance relative z-10 text-center md:pb-8 pb-4">
                      Testimonial
                    </h2>
                  </div>
                </div>
                <div className="md:w-3/4 w-full md:ps-12">
                  <EmblaCarousel
                    options={{
                      align: "start",
                      loop: true,
                      showButton: true,
                    }}
                  >
                    <div className="embla__slide shrink-0 px-2  basis-[80.80%] md:basis-[65.65%] lg:basis-[50%]">
                      <div className="bg-white rounded-2xl md:p-6 p-4 flex flex-col items-center gap-3 h-full">
                        <div className="w-full flex items-center justify-start gap-3">
                          <span className="shrink-0">
                            <Image
                              src="/images/DrRajniAvasthiImg.webp"
                              alt="rajni awasthi logo"
                              width={56}
                              height={56}
                              className="md:size-14 size-10 rounded-full mx-auto object-contain "
                            />
                          </span>
                          <div className="flex flex-col gap-y-1">
                            <h3 className="md:text-xl text-lg font-semibold text-[#4E4E4E] text-balance">
                              Dr. Rajni Awasthi
                            </h3>
                            <div className="md:text-sm text-xs font-semibold text-[#4E4E4E] text-balance">
                              Chairman - SVM Group of Education
                            </div>
                          </div>
                        </div>
                        <div className="w-full text-xs font-medium text-[#4E4E4E] md:leading-6 ">
                          Edoovi School management software has been a game
                          changer allowing me to manage all my six school from a
                          single admin. The user experience is ultimate and so
                          easy to use.
                        </div>
                        <div className="w-full pt-3 flex justify-end">
                          <button
                            type="button"
                            className="group/btn cursor-pointer md:text-base text-sm text-[#393A8C] font-bold flex items-center gap-2 border-0 bg-transparent p-0 duration-300"
                          >
                            <span>Read More</span>
                            <div className="inline-flex items-center justify-center shrink-0  size-7 rounded-full bg-[#00BBF5] group-hover/btn:lg:scale-110 relative duration-300">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="text-white"
                                width="8"
                                height="8"
                                viewBox="0 0 10 10"
                                fill="currentColor"
                              >
                                <path
                                  d="M8.25163 2.6602L1.16663 9.7452C1.04746 9.86436 0.895798 9.92395 0.711631 9.92395C0.527464 9.92395 0.375798 9.86436 0.256631 9.7452C0.137464 9.62603 0.0778809 9.47436 0.0778809 9.2902C0.0778809 9.10603 0.137464 8.95436 0.256631 8.8352L7.34163 1.7502H3.70163C3.51746 1.7502 3.36309 1.6879 3.23851 1.56332C3.11392 1.43874 3.05163 1.28436 3.05163 1.1002C3.05163 0.916029 3.11392 0.761654 3.23851 0.63707C3.36309 0.512487 3.51746 0.450195 3.70163 0.450195H8.90163C9.0858 0.450195 9.24017 0.512487 9.36476 0.63707C9.48934 0.761654 9.55163 0.916029 9.55163 1.1002V6.3002C9.55163 6.48436 9.48934 6.63874 9.36476 6.76332C9.24017 6.8879 9.0858 6.9502 8.90163 6.9502C8.71746 6.9502 8.56309 6.8879 8.43851 6.76332C8.31392 6.63874 8.25163 6.48436 8.25163 6.3002V2.6602Z"
                                  fill="white"
                                />
                              </svg>
                            </div>
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="embla__slide shrink-0 px-2  basis-[80.80%] md:basis-[65.65%] lg:basis-[50%]">
                      <div className="bg-white rounded-2xl md:p-6 p-4 flex flex-col items-center gap-3 h-full">
                        <div className="w-full flex items-center justify-start gap-3">
                          <span className="shrink-0">
                            <Image
                              src="/images/DrRajniAvasthiImg.webp"
                              alt="rajni awasthi logo"
                              width={56}
                              height={56}
                              className="md:size-14 size-10 rounded-full mx-auto object-contain "
                            />
                          </span>
                          <div className="flex flex-col gap-y-1">
                            <h3 className="md:text-xl text-lg font-semibold text-[#4E4E4E] text-balance">
                              Dr. Rajni Awasthi
                            </h3>
                            <div className="md:text-sm text-xs font-semibold text-[#4E4E4E] text-balance">
                              Chairman - SVM Group of Education
                            </div>
                          </div>
                        </div>
                        <div className="w-full text-xs font-medium text-[#4E4E4E] md:leading-6 ">
                          Edoovi School management software has been a game
                          changer allowing me to manage all my six school from a
                          single admin. The user experience is ultimate and so
                          easy to use.
                        </div>
                        <div className="w-full pt-3 flex justify-end">
                          <button
                            type="button"
                            className="group/btn cursor-pointer md:text-base text-sm text-[#393A8C] font-bold flex items-center gap-2 border-0 bg-transparent p-0 duration-300"
                          >
                            <span>Read More</span>
                            <div className="inline-flex items-center justify-center shrink-0  size-7 rounded-full bg-[#00BBF5] group-hover/btn:lg:scale-110 relative duration-300">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="text-white"
                                width="8"
                                height="8"
                                viewBox="0 0 10 10"
                                fill="currentColor"
                              >
                                <path
                                  d="M8.25163 2.6602L1.16663 9.7452C1.04746 9.86436 0.895798 9.92395 0.711631 9.92395C0.527464 9.92395 0.375798 9.86436 0.256631 9.7452C0.137464 9.62603 0.0778809 9.47436 0.0778809 9.2902C0.0778809 9.10603 0.137464 8.95436 0.256631 8.8352L7.34163 1.7502H3.70163C3.51746 1.7502 3.36309 1.6879 3.23851 1.56332C3.11392 1.43874 3.05163 1.28436 3.05163 1.1002C3.05163 0.916029 3.11392 0.761654 3.23851 0.63707C3.36309 0.512487 3.51746 0.450195 3.70163 0.450195H8.90163C9.0858 0.450195 9.24017 0.512487 9.36476 0.63707C9.48934 0.761654 9.55163 0.916029 9.55163 1.1002V6.3002C9.55163 6.48436 9.48934 6.63874 9.36476 6.76332C9.24017 6.8879 9.0858 6.9502 8.90163 6.9502C8.71746 6.9502 8.56309 6.8879 8.43851 6.76332C8.31392 6.63874 8.25163 6.48436 8.25163 6.3002V2.6602Z"
                                  fill="white"
                                />
                              </svg>
                            </div>
                          </button>
                        </div>
                      </div>
                    </div>
                  </EmblaCarousel>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute bottom-0 left-8 -z-10">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="124"
              height="124"
              viewBox="0 0 124 124"
              fill="none"
            >
              <g opacity="0.3">
                <circle
                  cx="5.62214"
                  cy="5.62214"
                  r="5.62214"
                  fill="#39C0FF"
                  fillOpacity="0.89"
                />
                <circle
                  cx="5.62214"
                  cy="33.7325"
                  r="5.62214"
                  fill="#39C0FF"
                  fillOpacity="0.89"
                />
                <circle
                  cx="5.62214"
                  cy="61.8438"
                  r="5.62214"
                  fill="#39C0FF"
                  fillOpacity="0.89"
                />
                <circle
                  cx="5.62214"
                  cy="89.9542"
                  r="5.62214"
                  fill="#39C0FF"
                  fillOpacity="0.89"
                />
                <circle
                  cx="5.62214"
                  cy="118.065"
                  r="5.62214"
                  fill="#39C0FF"
                  fillOpacity="0.89"
                />
                <circle
                  cx="33.7335"
                  cy="33.7325"
                  r="5.62214"
                  fill="#39C0FF"
                  fillOpacity="0.89"
                />
                <circle
                  cx="33.7335"
                  cy="61.8438"
                  r="5.62214"
                  fill="#39C0FF"
                  fillOpacity="0.89"
                />
                <circle
                  cx="33.7335"
                  cy="89.9542"
                  r="5.62214"
                  fill="#39C0FF"
                  fillOpacity="0.89"
                />
                <circle
                  cx="33.7335"
                  cy="118.065"
                  r="5.62214"
                  fill="#39C0FF"
                  fillOpacity="0.89"
                />
                <circle
                  cx="61.8448"
                  cy="61.8428"
                  r="5.62214"
                  fill="#39C0FF"
                  fillOpacity="0.89"
                />
                <circle
                  cx="61.8448"
                  cy="89.9542"
                  r="5.62214"
                  fill="#39C0FF"
                  fillOpacity="0.89"
                />
                <circle
                  cx="61.8448"
                  cy="118.065"
                  r="5.62214"
                  fill="#39C0FF"
                  fillOpacity="0.89"
                />
                <circle
                  cx="89.9542"
                  cy="89.9542"
                  r="5.62214"
                  fill="#39C0FF"
                  fillOpacity="0.89"
                />
                <circle
                  cx="89.9542"
                  cy="118.065"
                  r="5.62214"
                  fill="#39C0FF"
                  fillOpacity="0.89"
                />
                <circle
                  cx="118.064"
                  cy="118.065"
                  r="5.62214"
                  fill="#39C0FF"
                  fillOpacity="0.89"
                />
              </g>
            </svg>
          </div>
        </div>
      </section>
    </>
  );
};

export default Testimonial;
