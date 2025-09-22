import Link from "next/link";
import Image from "next/image";

const TrustedLogo = () => {
  return (
    <>
      <section className="trustedLogoSec relative overflow-hidden bg-white py-8">
        <div className="view xl:py-4 lg:py-3 py-4">
          <div className="flex flex-col">
            <h2 className="w-full 2xl:text-5xl xl:text-5xl lg:text-4xl md:text-3xl sm:text-2xl text-2xl font-bold text-[#272727] text-balance relative z-10 text-center md:pb-8 pb-4">
              Trusted by <span className="text-[#0EAFF0]">1500+</span> Schools
            </h2>
            <div className="w-full">
              <div className="grid xl:grid-cols-5 lg:grid-cols-5 md:grid-cols-4 grid-cols-3 md:gap-y-10 gap-y-6">
                <div className="logo1 md:p-4 p-3">
                  <Image
                    src="/images/nirmlaSchoolLogo.webp"
                    alt="nirmla school logo"
                    width={175}
                    height={63}
                    className="xl:max-w-44 lg:max-w-40 md:max-w-36 max-w-24 mx-auto object-contain"
                  />
                </div>
                <div className="logo1 md:p-4 p-3">
                  <Image
                    src="/images/LPSavniLogo.webp"
                    alt="LPS avni logo"
                    width={175}
                    height={63}
                    className="xl:max-w-44 lg:max-w-40 md:max-w-36 max-w-24 mx-auto object-contain"
                  />
                </div>
                <div className="logo1 md:p-4 p-3">
                  <Image
                    src="/images/shantiSchoolLogo.webp"
                    alt="shanti school logo"
                    width={175}
                    height={63}
                    className="xl:max-w-44 lg:max-w-40 md:max-w-36 max-w-24 mx-auto object-contain"
                  />
                </div>
                <div className="logo1 md:p-4 p-3">
                  <Image
                    src="/images/navrachanaInternationalLogo.webp"
                    alt="navrachana international logo"
                    width={175}
                    height={63}
                    className="xl:max-w-44 lg:max-w-40 md:max-w-36 max-w-24 mx-auto object-contain"
                  />
                </div>
                <div className="logo1 md:p-4 p-3">
                  <Image
                    src="/images/salmiyaIndianModalSchoolLogo.webp"
                    alt="salmiya indian modal schoolLogo"
                    width={175}
                    height={63}
                    className="xl:max-w-44 lg:max-w-40 md:max-w-36 max-w-24 mx-auto object-contain"
                  />
                </div>
                <div className="logo1 md:p-4 p-3">
                  <Image
                    src="/images/kimjhiRamdasLogo.webp"
                    alt="kimjhi ramdas logo"
                    width={175}
                    height={63}
                    className="xl:max-w-44 lg:max-w-40 md:max-w-36 max-w-24 mx-auto object-contain"
                  />
                </div>
                <div className="logo1 md:p-4 p-3">
                  <Image
                    src="/images/vedicGroupLogo.webp"
                    alt="vedic group logo"
                    width={175}
                    height={63}
                    className="xl:max-w-44 lg:max-w-40 md:max-w-36 max-w-24 mx-auto object-contain"
                  />
                </div>
                <div className="logo1 md:p-4 p-3">
                  <Image
                    src="/images/centurationInternationalSchool.webp"
                    alt="centuration international school"
                    width={175}
                    height={63}
                    className="xl:max-w-44 lg:max-w-40 md:max-w-36 max-w-24 mx-auto object-contain"
                  />
                </div>
                <div className="logo1 md:p-4 p-3">
                  <Image
                    src="/images/internationalIndianSchoolLogo.webp"
                    alt="international indian school logo"
                    width={175}
                    height={63}
                    className="xl:max-w-44 lg:max-w-40 md:max-w-36 max-w-24 mx-auto object-contain"
                  />
                </div>
                <div className="logo1 md:p-4 p-3">
                  <Image
                    src="/images/ISInterNationalSchoolLogo.webp"
                    alt="IS inter national schoolLogo"
                    width={175}
                    height={63}
                    className="xl:max-w-44 lg:max-w-40 md:max-w-36 max-w-24 mx-auto object-contain"
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

export default TrustedLogo;
