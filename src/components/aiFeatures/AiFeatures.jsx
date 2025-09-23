import Link from "next/link";
import Image from "next/image";
import EmblaCarousel from "../emblaCarousel/EmblaCarousel";

const AiFeatures = () => {
  return (
    <>
      <section className="AiFeatureSec bg-white relative py-8">
        <div className="view xl:py-4 lg:py-3">
          <div className="flex flex-col">
            <h2 className="md:w-10/12 w-full 2xl:text-5xl mx-auto xl:text-5xl lg:text-4xl md:text-3xl sm:text-2xl text-2xl font-bold text-[#393A8C] text-balance relative z-10 text-center md:pb-8 pb-4">
              AI Core Features of Our School ERP Software
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
                        alt="Instant Alerts Features  "
                        width={347}
                        height={234}
                        className="size-full rounded-lg mx-auto object-contain aspect-[347/234]"
                      />
                    </div>
                    <div className="w-full flex flex-col gap-y-3">
                      <h3 className="lg:text-xl md:text-lg text-base  font-semibold text-ellipsis text-[#55575B] line-clamp-3">
                        Instant Alerts Features
                      </h3>
                      <p className="text-xs  font-normal text-[#454444]  leading-5">
                        An intelligent engine that detects essential updates
                        (late attendance, unpaid fees, approaching exams, bus
                        alerts, or birthdays), evaluates class-to-student
                        records, and alerts the correct contacts in seconds.
                        Alerts are sent out on every channel: WhatsApp, SMS,
                        push notifications, and scheduled email alerts, so
                        everyone remains updated, always.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="embla__slide  shrink-0 px-2 basis-[80.80%] md:basis-[50%] lg:basis-[33.33%] ">
                  <div className="md:p-3 p-1 flex flex-col gap-y-6 bg-transparent">
                    <div className="relative">
                      <Image
                        src="/images/tableGenerator.webp"
                        alt="AI Timetable Generator "
                        width={347}
                        height={234}
                        className="size-full rounded-lg mx-auto object-contain aspect-[347/234]"
                      />
                    </div>
                    <div className="w-full flex flex-col gap-y-3">
                      <h3 className="lg:text-xl md:text-lg text-base  font-semibold text-ellipsis text-[#55575B] line-clamp-3">
                        AI Timetable Generator
                      </h3>
                      <p className="text-xs  font-normal text-[#454444]  leading-5">
                        A revolutionary AI system watches any changes
                        (attendance, fees, exams, bus, and holiday
                        notifications), checks teachers' schedules and classroom
                        setups, and assigns the best available teacher for any
                        subject. Notifications are immediate and sent out
                        through WhatsApp, SMS, push, or email, keeping all
                        staff, students, and parents informed and connected
                        instantly.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="embla__slide  shrink-0 px-2 basis-[80.80%] md:basis-[50%] lg:basis-[33.33%] ">
                  <div className="md:p-3 p-1 flex flex-col gap-y-6 bg-transparent">
                    <div className="relative">
                      <Image
                        src="/images/firstEverFace.webp"
                        alt="Face Recognition Visitor Report"
                        width={347}
                        height={234}
                        className="size-full rounded-lg mx-auto object-contain aspect-[347/234]"
                      />
                    </div>
                    <div className="w-full flex flex-col gap-y-3">
                      <h3 className="lg:text-xl md:text-lg text-base  font-semibold text-ellipsis text-[#55575B] line-clamp-3">
                        Face Recognition Visitor Report
                      </h3>
                      <p className="text-xs  font-normal text-[#454444]  leading-5">
                        For the first time, visitors are checked through a face
                        recognition module for child safety, and any
                        unrecognized entry is detected immediately, and strict
                        campus access logs are kept. Parents and school
                        administrators receive alerts instantly through
                        WhatsApp, SMS, push notifications, or email, completely
                        keeping you up-to-date and informed.
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
