import Link from "next/link";
import Image from "next/image";
import EmblaCarousel from "../emblaCarousel/EmblaCarousel";

const LatestInsight = () => {
  return (
    <>
      <section className="Blog bg-[#39C0FFE3] relative py-8">
        <div className="view mx-auto xl:py-4 lg:py-3 py-4 md:!pr-0">
          <div className="flex flex-col">
            <h2 className="md:w-8/12 w-full 2xl:text-5xl mx-auto xl:text-5xl lg:text-4xl md:text-3xl sm:text-2xl text-2xl font-bold text-white text-balance relative z-10 text-center md:pb-8 pb-4">
              Latest Insights
            </h2>
            <div className="w-full">
              <EmblaCarousel
                options={{
                  align: "start",
                  loop: true,
                }}
              >
                <div className="embla__slide  shrink-0 px-2 basis-[80.80%] md:basis-[33.33%] lg:basis-[28.28%] ">
                  <div className="rounded-4xl  p-5 flex flex-col gap-y-6 bg-white">
                    <div className="relative">
                      <Image
                        src="/images/insightGirl.webp"
                        alt="How Can School ERP Software Streamline Administrative
                        Tasks"
                        width={112}
                        height={112}
                        className="size-full mx-auto object-contain"
                      />

                      <div className="absolute right-5 bottom-1 ">
                        <button className="group cursor-pointer size-10 rounded-full bg-white border flex items-center justify-center border-[#454444] hover:bg-[#39C0FFE3] hover:border-white duration-300">
                          <span>
                            <svg
                              width="16"
                              height="16"
                              className="group-hover:text-white text-[#454444]"
                              viewBox="0 0 16 16"
                              fill="currentColor"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <mask
                                id="mask0_19752_2149"
                                style={{ maskType: "alpha" }}
                                maskUnits="userSpaceOnUse"
                                x="0"
                                y="0"
                                width="16"
                                height="16"
                              >
                                <rect
                                  x="0.5"
                                  y="0.5"
                                  width="15"
                                  height="15"
                                  fill="currentColor"
                                  stroke="currentColor"
                                />
                              </mask>
                              <g mask="url(#mask0_19752_2149)">
                                <path
                                  d="M11.4424 3.83301V9.5H11.1143V4.38867L10.2598 5.24707L2.91211 12.624L2.68848 12.3994L10.0391 5.01953L10.8887 4.16602H5.80273V3.83301H11.4424Z"
                                  fill="currentColor"
                                  stroke="currentColor"
                                />
                              </g>
                            </svg>
                          </span>
                        </button>
                      </div>
                    </div>
                    <div className="w-full flex flex-col">
                      <h3 className="md:text-base text-sm font-semibold text-ellipsis text-[#454444] line-clamp-3">
                        How Can School ERP Software Streamline Administrative
                        Tasks
                      </h3>
                      <p className="text-xs md:block hidden font-normal text-[#454444] mt-1.5 leading-5">
                        Curious about creating a dating app like Grindr? Here,
                        we break down the essential features, development costs,
                      </p>
                      <div className="w-full flex mt-3.5 justify-between">
                        <div className="flex flex-row items-center gap-2">
                          <div className="w-10 h-10 rounded-full overflow-hidden ">
                            <Image
                              src="/images/mm.webp"
                              alt="How Can School ERP Software Streamline Administrative
                        Tasks"
                              width={40}
                              height={40}
                              className="size-10 mx-auto object-contain"
                            />
                          </div>
                          <div className="flex flex-col gap-1">
                            <span className="text-xs font-normal text-[#454444]">
                              Written By
                            </span>
                            <span className="text-xs font-semibold text-[#454444]">
                              Mohit Mittal
                            </span>
                          </div>
                        </div>
                        <div className="flex  flex-col gap-1">
                          <span className="text-xs md:block hidden font-normal text-[#454444]">
                            Written on
                          </span>
                          <span className="text-xs font-semibold text-[#454444]">
                            22 Jul 2025
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="embla__slide  shrink-0 px-2 basis-[80.80%] md:basis-[33.33%] lg:basis-[28.28%] ">
                  <div className="rounded-4xl  p-5 flex flex-col gap-y-6 bg-white">
                    <div className="relative">
                      <Image
                        src="/images/insightGirl.webp"
                        alt="How Can School ERP Software Streamline Administrative
                        Tasks"
                        width={112}
                        height={112}
                        className="size-full mx-auto object-contain"
                      />

                      <div className="absolute right-5 bottom-1 ">
                        <button className="group cursor-pointer size-10 rounded-full bg-white border flex items-center justify-center border-[#454444] hover:bg-[#39C0FFE3] hover:border-white duration-300">
                          <span>
                            <svg
                              width="16"
                              height="16"
                              className="group-hover:text-white text-[#454444]"
                              viewBox="0 0 16 16"
                              fill="currentColor"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <mask
                                id="mask0_19752_2149"
                                style={{ maskType: "alpha" }}
                                maskUnits="userSpaceOnUse"
                                x="0"
                                y="0"
                                width="16"
                                height="16"
                              >
                                <rect
                                  x="0.5"
                                  y="0.5"
                                  width="15"
                                  height="15"
                                  fill="currentColor"
                                  stroke="currentColor"
                                />
                              </mask>
                              <g mask="url(#mask0_19752_2149)">
                                <path
                                  d="M11.4424 3.83301V9.5H11.1143V4.38867L10.2598 5.24707L2.91211 12.624L2.68848 12.3994L10.0391 5.01953L10.8887 4.16602H5.80273V3.83301H11.4424Z"
                                  fill="currentColor"
                                  stroke="currentColor"
                                />
                              </g>
                            </svg>
                          </span>
                        </button>
                      </div>
                    </div>
                    <div className="fw-full lex flex-col">
                      <h3 className="md:text-base text-sm font-semibold text-ellipsis text-[#454444] line-clamp-3">
                        How Can School ERP Software Streamline Administrative
                        Tasks
                      </h3>
                      <p className="text-xs md:block hidden font-normal text-[#454444] mt-1.5 leading-5">
                        Curious about creating a dating app like Grindr? Here,
                        we break down the essential features, development costs,
                      </p>
                      <div className="w-full flex mt-3.5 justify-between">
                        <div className="flex flex-row items-center gap-2">
                          <div className="w-10 h-10 rounded-full overflow-hidden ">
                            <Image
                              src="/images/mm.webp"
                              alt="How Can School ERP Software Streamline Administrative
                        Tasks"
                              width={40}
                              height={40}
                              className="size-10 mx-auto object-contain"
                            />
                          </div>
                          <div className="flex flex-col gap-1">
                            <span className="text-xs font-normal text-[#454444]">
                              Written By
                            </span>
                            <span className="text-xs font-semibold text-[#454444]">
                              Mohit Mittal
                            </span>
                          </div>
                        </div>
                        <div className="flex  flex-col gap-1">
                          <span className="text-xs md:block hidden font-normal text-[#454444]">
                            Written on
                          </span>
                          <span className="text-xs font-semibold text-[#454444]">
                            22 Jul 2025
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="embla__slide  shrink-0 px-2 basis-[80.80%] md:basis-[33.33%] lg:basis-[28.28%] ">
                  <div className="rounded-4xl  p-5 flex flex-col gap-y-6 bg-white">
                    <div className="relative">
                      <Image
                        src="/images/insightGirl.webp"
                        alt="How Can School ERP Software Streamline Administrative
                        Tasks"
                        width={112}
                        height={112}
                        className="size-full mx-auto object-contain"
                      />

                      <div className="absolute right-5 bottom-1 ">
                        <button className="group cursor-pointer size-10 rounded-full bg-white border flex items-center justify-center border-[#454444] hover:bg-[#39C0FFE3] hover:border-white duration-300">
                          <span>
                            <svg
                              width="16"
                              height="16"
                              className="group-hover:text-white text-[#454444]"
                              viewBox="0 0 16 16"
                              fill="currentColor"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <mask
                                id="mask0_19752_2149"
                                style={{ maskType: "alpha" }}
                                maskUnits="userSpaceOnUse"
                                x="0"
                                y="0"
                                width="16"
                                height="16"
                              >
                                <rect
                                  x="0.5"
                                  y="0.5"
                                  width="15"
                                  height="15"
                                  fill="currentColor"
                                  stroke="currentColor"
                                />
                              </mask>
                              <g mask="url(#mask0_19752_2149)">
                                <path
                                  d="M11.4424 3.83301V9.5H11.1143V4.38867L10.2598 5.24707L2.91211 12.624L2.68848 12.3994L10.0391 5.01953L10.8887 4.16602H5.80273V3.83301H11.4424Z"
                                  fill="currentColor"
                                  stroke="currentColor"
                                />
                              </g>
                            </svg>
                          </span>
                        </button>
                      </div>
                    </div>
                    <div className="w-full flex flex-col">
                      <h3 className="md:text-base text-sm font-semibold text-ellipsis text-[#454444] line-clamp-3">
                        How Can School ERP Software Streamline Administrative
                        Tasks
                      </h3>
                      <p className="text-xs md:block hidden font-normal text-[#454444] mt-1.5 leading-5">
                        Curious about creating a dating app like Grindr? Here,
                        we break down the essential features, development costs,
                      </p>
                      <div className="w-full flex mt-3.5 justify-between">
                        <div className="flex flex-row items-center gap-2">
                          <div className="w-10 h-10 rounded-full overflow-hidden ">
                            <Image
                              src="/images/mm.webp"
                              alt="How Can School ERP Software Streamline Administrative
                        Tasks"
                              width={40}
                              height={40}
                              className="size-10 mx-auto object-contain"
                            />
                          </div>
                          <div className="flex flex-col gap-1">
                            <span className="text-xs font-normal text-[#454444]">
                              Written By
                            </span>
                            <span className="text-xs font-semibold text-[#454444]">
                              Mohit Mittal
                            </span>
                          </div>
                        </div>
                        <div className="flex  flex-col gap-1">
                          <span className="text-xs md:block hidden font-normal text-[#454444]">
                            Written on
                          </span>
                          <span className="text-xs font-semibold text-[#454444]">
                            22 Jul 2025
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="embla__slide  shrink-0 px-2 basis-[80.80%] md:basis-[33.33%] lg:basis-[28.28%] ">
                  <div className="rounded-4xl  p-5 flex flex-col gap-y-6 bg-white">
                    <div className="relative">
                      <Image
                        src="/images/insightGirl.webp"
                        alt="How Can School ERP Software Streamline Administrative
                        Tasks"
                        width={112}
                        height={112}
                        className="size-full mx-auto object-contain"
                      />

                      <div className="absolute right-5 bottom-1 ">
                        <button className="group cursor-pointer size-10 rounded-full bg-white border flex items-center justify-center border-[#454444] hover:bg-[#39C0FFE3] hover:border-white duration-300">
                          <span>
                            <svg
                              width="16"
                              height="16"
                              className="group-hover:text-white text-[#454444]"
                              viewBox="0 0 16 16"
                              fill="currentColor"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <mask
                                id="mask0_19752_2149"
                                style={{ maskType: "alpha" }}
                                maskUnits="userSpaceOnUse"
                                x="0"
                                y="0"
                                width="16"
                                height="16"
                              >
                                <rect
                                  x="0.5"
                                  y="0.5"
                                  width="15"
                                  height="15"
                                  fill="currentColor"
                                  stroke="currentColor"
                                />
                              </mask>
                              <g mask="url(#mask0_19752_2149)">
                                <path
                                  d="M11.4424 3.83301V9.5H11.1143V4.38867L10.2598 5.24707L2.91211 12.624L2.68848 12.3994L10.0391 5.01953L10.8887 4.16602H5.80273V3.83301H11.4424Z"
                                  fill="currentColor"
                                  stroke="currentColor"
                                />
                              </g>
                            </svg>
                          </span>
                        </button>
                      </div>
                    </div>
                    <div className="w-full flex flex-col">
                      <h3 className="md:text-base text-sm font-semibold text-ellipsis text-[#454444] line-clamp-3">
                        How Can School ERP Software Streamline Administrative
                        Tasks
                      </h3>
                      <p className="text-xs md:block hidden font-normal text-[#454444] mt-1.5 leading-5">
                        Curious about creating a dating app like Grindr? Here,
                        we break down the essential features, development costs,
                      </p>
                      <div className="w-full flex mt-3.5 justify-between">
                        <div className="flex flex-row items-center gap-2">
                          <div className="w-10 h-10 rounded-full overflow-hidden ">
                            <Image
                              src="/images/mm.webp"
                              alt="How Can School ERP Software Streamline Administrative
                        Tasks"
                              width={40}
                              height={40}
                              className="size-10 mx-auto object-contain"
                            />
                          </div>
                          <div className="flex flex-col gap-1">
                            <span className="text-xs font-normal text-[#454444]">
                              Written By
                            </span>
                            <span className="text-xs font-semibold text-[#454444]">
                              Mohit Mittal
                            </span>
                          </div>
                        </div>
                        <div className="flex flex-col gap-1">
                          <span className="text-xs md:block hidden font-normal text-[#454444]">
                            Written on
                          </span>
                          <span className="text-xs font-semibold text-[#454444]">
                            22 Jul 2025
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="embla__slide  shrink-0 px-2 basis-[80.80%] md:basis-[33.33%] lg:basis-[28.28%] ">
                  <div className="rounded-4xl  p-5 flex flex-col gap-y-6 bg-white">
                    <div className="relative">
                      <Image
                        src="/images/insightGirl.webp"
                        alt="How Can School ERP Software Streamline Administrative
                        Tasks"
                        width={112}
                        height={112}
                        className="size-full mx-auto object-contain"
                      />

                      <div className="absolute right-5 bottom-1 ">
                        <button className="group cursor-pointer size-10 rounded-full bg-white border flex items-center justify-center border-[#454444] hover:bg-[#39C0FFE3] hover:border-white duration-300">
                          <span>
                            <svg
                              width="16"
                              height="16"
                              className="group-hover:text-white text-[#454444]"
                              viewBox="0 0 16 16"
                              fill="currentColor"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <mask
                                id="mask0_19752_2149"
                                style={{ maskType: "alpha" }}
                                maskUnits="userSpaceOnUse"
                                x="0"
                                y="0"
                                width="16"
                                height="16"
                              >
                                <rect
                                  x="0.5"
                                  y="0.5"
                                  width="15"
                                  height="15"
                                  fill="currentColor"
                                  stroke="currentColor"
                                />
                              </mask>
                              <g mask="url(#mask0_19752_2149)">
                                <path
                                  d="M11.4424 3.83301V9.5H11.1143V4.38867L10.2598 5.24707L2.91211 12.624L2.68848 12.3994L10.0391 5.01953L10.8887 4.16602H5.80273V3.83301H11.4424Z"
                                  fill="currentColor"
                                  stroke="currentColor"
                                />
                              </g>
                            </svg>
                          </span>
                        </button>
                      </div>
                    </div>
                    <div className="w-full flex flex-col">
                      <h3 className="md:text-base text-sm font-semibold text-ellipsis text-[#454444] line-clamp-3">
                        How Can School ERP Software Streamline Administrative
                        Tasks
                      </h3>
                      <p className="text-xs md:block hidden font-normal text-[#454444] mt-1.5 leading-5">
                        Curious about creating a dating app like Grindr? Here,
                        we break down the essential features, development costs,
                      </p>
                      <div className="w-full flex mt-3.5 justify-between">
                        <div className="flex flex-row items-center gap-2">
                          <div className="w-10 h-10 rounded-full overflow-hidden ">
                            <Image
                              src="/images/mm.webp"
                              alt="How Can School ERP Software Streamline Administrative
                        Tasks"
                              width={40}
                              height={40}
                              className="size-10 mx-auto object-contain"
                            />
                          </div>
                          <div className="flex flex-col gap-1">
                            <span className="text-xs font-normal text-[#454444]">
                              Written By
                            </span>
                            <span className="text-xs font-semibold text-[#454444]">
                              Mohit Mittal
                            </span>
                          </div>
                        </div>
                        <div className="flex flex-col gap-1">
                          <span className="text-xs md:block hidden font-normal text-[#454444]">
                            Written on
                          </span>
                          <span className="text-xs font-semibold text-[#454444]">
                            22 Jul 2025
                          </span>
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
    </>
  );
};

export default LatestInsight;
