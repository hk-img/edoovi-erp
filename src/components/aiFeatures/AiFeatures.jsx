import Link from "next/link";
import Image from "next/image";
import EmblaCarousel from "../emblaCarousel/EmblaCarousel";

const AiFeatures = () => {
  return (
    <>
      <section className="AiFeatureSec bg-white relative py-8">
        <div className="view xl:py-4 lg:py-3">
          <div className="flex flex-col">
            <h2 className="md:w-10/12 w-full 2xl:text-4xl mx-auto xl:text-4xl lg:text-3xl md:text-3xl sm:text-2xl text-2xl font-bold text-[#393A8C] text-balance relative z-10 text-center md:pb-8 pb-4">
              Never Before AI- Features that make Our School ERP Stand Out
            </h2>
            <div className="w-full flex  flex-col">
              <EmblaCarousel
                options={{
                  align: "start",
                  loop: true,
                  showDots: true,
                }}
              >
                <div className="embla__slide  shrink-0 px-2 basis-[80.80%] md:basis-[50%] lg:basis-[33.33%] ">
                  <div className="md:p-3 p-1 flex flex-col gap-y-6 bg-transparent">
                    <div className="relative">
                      <Image
                        src="/images/smartAlerts.webp"
                        alt="Smart alerts for low attendance, fees, exam schedules, and school circulars."
                        width={346}
                        height={234}
                        className="size-full rounded-lg mx-auto object-contain"
                      />
                    </div>
                    <div className="w-full flex flex-col gap-y-3">
                      <h3 className="lg:text-xl md:text-lg text-base  font-semibold text-ellipsis text-[#55575B] line-clamp-3">
                        Smart alerts for low attendance, fees, exam schedules,
                        and school circulars.
                      </h3>
                      <p className="text-xs  font-normal text-[#454444]  leading-5">
                        An intelligent system that automatically detects
                        important events (like fees due, homework deadlines,
                        exams, attendance issues, transport updates, or
                        birthdays), analyzes class and individual student data,
                        and sends timely reminders to the right people. It
                        supports multiple channels—WhatsApp, SMS, push
                        notifications, and emaimanual follow-ups, and ensure
                        parents, students, and teachers never miss critical
                        updates.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="embla__slide  shrink-0 px-2 basis-[80.80%] md:basis-[50%] lg:basis-[33.33%] ">
                  <div className="md:p-3 p-1 flex flex-col gap-y-6 bg-transparent">
                    <div className="relative">
                      <Image
                        src="/images/tableGenerator.webp"
                        alt="First Ever AI Powered Time table Generator with auto teacher assign"
                        width={346}
                        height={234}
                        className="size-full rounded-lg mx-auto object-contain"
                      />
                    </div>
                    <div className="w-full flex flex-col gap-y-3">
                      <h3 className="lg:text-xl md:text-lg text-base  font-semibold text-ellipsis text-[#55575B] line-clamp-3">
                        First Ever AI Powered Time table Generator with auto
                        teacher assign
                      </h3>
                      <p className="text-xs  font-normal text-[#454444]  leading-5">
                        An intelligent system that automatically detects
                        important events (like fees due, homework deadlines,
                        exams, attendance issues, transport updates, or
                        birthdays), analyzes class and individual student data,
                        and sends timely reminders to the right people. It
                        supports multiple channels—WhatsApp, SMS, push
                        notifications, and emaimanual follow-ups, and ensure
                        parents, students, and teachers never miss critical
                        updates.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="embla__slide  shrink-0 px-2 basis-[80.80%] md:basis-[50%] lg:basis-[33.33%] ">
                  <div className="md:p-3 p-1 flex flex-col gap-y-6 bg-transparent">
                    <div className="relative">
                      <Image
                        src="/images/firstEverFace.webp"
                        alt="First Ever Face Recognized Visitor Module for Child
                        safety"
                        width={346}
                        height={234}
                        className="size-full rounded-lg mx-auto object-contain"
                      />
                    </div>
                    <div className="w-full flex flex-col gap-y-3">
                      <h3 className="lg:text-xl md:text-lg text-base  font-semibold text-ellipsis text-[#55575B] line-clamp-3">
                        First Ever Face Recognized Visitor Module for Child
                        safety
                      </h3>
                      <p className="text-xs  font-normal text-[#454444]  leading-5">
                        An intelligent system that automatically detects
                        important events (like fees due, homework deadlines,
                        exams, attendance issues, transport updates, or
                        birthdays), analyzes class and individual student data,
                        and sends timely reminders to the right people. It
                        supports multiple channels—WhatsApp, SMS, push
                        notifications, and emaimanual follow-ups, and ensure
                        parents, students, and teachers never miss critical
                        updates.
                      </p>
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

export default AiFeatures;
