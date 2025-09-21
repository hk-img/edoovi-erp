import React from "react";
import Link from "next/link";
import Image from "next/image";
import ISInterNationalSchoolLogo from "../../../public/images/ISInterNationalSchoolLogo.webp";
import InternationalIndianSchoolLogo from "../../../public/images/internationalIndianSchoolLogo.webp";
import CenturationInternationalSchoolo from "../../../public/images/centurationInternationalSchool.webp";
import VedicGroupLogo from "../../../public/images/vedicGroupLogo.webp";
import KimjhiRamdasLogo from "../../../public/images/kimjhiRamdasLogo.webp";
import SalmiyaIndianModalSchoolLogo from "../../../public/images/salmiyaIndianModalSchoolLogo.webp";
import NavrachanaInternationalLogo from "../../../public/images/navrachanaInternationalLogo.webp";
import ShantiSchoolLogo from "../../../public/images/shantiSchoolLogo.webp";
import NirmlaSchoolLogo from "../../../public/images/nirmlaSchoolLogo.webp";
import LPSavniLogo from "../../../public/images/LPSavniLogo.webp";

const TrustedLogo = () => {
  return (
    <>
      <section className="trustedLogoSec relative overflow-hidden bg-white py-8">
        <div className="container mx-auto xl:py-4 lg:py-3 py-4 px-4 lg:px-6 xl:px-8">
          <div className="flex flex-col">
            <h2 class="w-full  2xl:text-4xl xl:text-4xl lg:text-3xl md:text-3xl sm:text-2xl text-2xl font-bold text-[#272727] text-balance relative z-10 text-center md:pb-8 pb-4">
              Trusted by <span className="text-[#0EAFF0]">1500+</span> Schools
            </h2>
            <div className="w-full">
              <div className="grid xl:grid-cols-5 lg:grid-cols-5 md:grid-cols-4 grid-cols-3 md:gap-y-10 gap-y-6">
                <div className="logo1 md:p-4 p-3">
                  <Image
                    loading="lazy"
                    fetchPriority="low"
                    src={NirmlaSchoolLogo}
                    alt="international school"
                    title="international school"
                    width={200}
                    height={63}
                    class="xl:max-w-44 lg:max-w-40 max-w-32 mx-auto object-contain"
                  />
                </div>
                <div className="logo1 md:p-4 p-3">
                  <Image
                    loading="lazy"
                    fetchPriority="low"
                    src={LPSavniLogo}
                    alt="international school"
                    title="international school"
                    width={200}
                    height={63}
                    class="xl:max-w-44 lg:max-w-40 max-w-32 mx-auto object-contain"
                  />
                </div>
                <div className="logo1 md:p-4 p-3">
                  <Image
                    loading="lazy"
                    fetchPriority="low"
                    src={ShantiSchoolLogo}
                    alt="international school"
                    title="international school"
                    width={200}
                    height={63}
                    class="  mx-auto object-contain"
                  />
                </div>
                <div className="logo1 md:p-4 p-3">
                  <Image
                    loading="lazy"
                    fetchPriority="low"
                    src={NavrachanaInternationalLogo}
                    alt="international school"
                    title="international school"
                    width={200}
                    height={63}
                    class="  mx-auto object-contain"
                  />
                </div>
                <div className="logo1 md:p-4 p-3">
                  <Image
                    loading="lazy"
                    fetchPriority="low"
                    src={SalmiyaIndianModalSchoolLogo}
                    alt="international school"
                    title="international school"
                    width={200}
                    height={63}
                    class="  mx-auto object-contain"
                  />
                </div>
                <div className="logo1 md:p-4 p-3">
                  <Image
                    loading="lazy"
                    fetchPriority="low"
                    src={KimjhiRamdasLogo}
                    alt="international school"
                    title="international school"
                    width={200}
                    height={63}
                    class="  mx-auto object-contain"
                  />
                </div>
                <div className="logo1 md:p-4 p-3">
                  <Image
                    loading="lazy"
                    fetchPriority="low"
                    src={VedicGroupLogo}
                    alt="international school"
                    title="international school"
                    width={200}
                    height={63}
                    class="  mx-auto object-contain"
                  />
                </div>
                <div className="logo1 md:p-4 p-3">
                  <Image
                    loading="lazy"
                    fetchPriority="low"
                    src={CenturationInternationalSchoolo}
                    alt="international school"
                    title="international school"
                    width={200}
                    height={63}
                    class="  mx-auto object-contain"
                  />
                </div>
                <div className="logo1 md:p-4 p-3">
                  <Image
                    loading="lazy"
                    fetchPriority="low"
                    src={InternationalIndianSchoolLogo}
                    alt="international school"
                    title="international school"
                    width={200}
                    height={63}
                    class="  mx-auto object-contain"
                  />
                </div>
                <div className="logo1 md:p-4 p-3">
                  <Image
                    loading="lazy"
                    fetchPriority="low"
                    src={ISInterNationalSchoolLogo}
                    alt="international school"
                    title="international school"
                    width={200}
                    height={63}
                    class="  mx-auto object-contain"
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
