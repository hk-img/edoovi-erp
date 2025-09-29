"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  const [status, setStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = new FormData(e.target);

    const res = await fetch("/api/contact", {
      method: "POST",
      body: JSON.stringify({
        name: form.get("name"),
        mobile: form.get("mobile"),
      }),
    });

    const data = await res.json();
    setStatus(data.message);
    e.target.reset();
  };

  useEffect(() => {
    if (status) {
      alert(status);
      setStatus("");
    }
  }, [status]);
  return (
    <>
      <footer id="footer">
        <div className="w-full bg-gradient-to-t from-[#00398E] to-[#0176C5] flex flex-col">
          <div className="view">
            <div className="flex flex-wrap md:items-end justify-between">
              <div className="md:w-1/2 w-full relative md:pr-6 max-sm:order-last">
                <Image
                  src="/images/footerImage.webp"
                  alt="file icon"
                  width={549}
                  height={404}
                  className="size-full rounded-lg mx-auto object-contain aspect-[549/404]"
                />
              </div>
              <div className="md:w-1/2 w-full xl:py-12 lg:py-10 py-6">
                <div className="flex flex-col gap-y-4">
                  <h2 className="text-white lg:text-4xl md:text-3xl text-2xl text-center font-bold">
                    Want to Know More about Edoovi ERP? Our Representative just
                    a click away!
                  </h2>

                  <form
                    onSubmit={handleSubmit}
                    className="lg:w-6/12 md:w-8/12 w-full mx-auto flex flex-col gap-y-4"
                  >
                    <div className="rounded-2xl p-0.5 w-full text-white overflow-hidden bg-gradient-to-r from-[#004C9F] via-[#00D9FF] to-[#014A9E]">
                      <input
                        type="text"
                        name="name"
                        placeholder="Your Name"
                        required
                        className="bg-[#0B417A] outline-none w-full text-white text-sm font-semibold placeholder:text-white ps-5 py-3 h-14 rounded-2xl shadow-inner shadow-[#000000B2]"
                      />
                    </div>
                    <div className="rounded-2xl p-0.5 text-white w-full overflow-hidden bg-gradient-to-r from-[#004C9F] via-[#00D9FF] to-[#014A9E]">
                      <input
                        type="text"
                        name="mobile"
                        placeholder="Mobile Number"
                        required
                        className="bg-[#0B417A] outline-none w-full text-white text-sm font-semibold placeholder:text-white ps-5 py-3 h-14 rounded-2xl shadow-inner shadow-[#000000B2]"
                      />
                    </div>
                    <button
                      type="submit"
                      className="cursor-pointer rounded-2xl font-bold h-12 text-base text-white p-0.5 w-full bg-[#04D9FF] border-none outline-none items-center text-center"
                    >
                      Submit
                    </button>
                    {status && <p className="text-white">{status}</p>}
                  </form>
                  <div className="hidden md:flex md:flex-row justify-between pt-5">
                    <div className="md:w-1/2 w-full flex flex-col gap-y-3">
                      <div className="lg:text-3xl md:text-2xl text-xl font-bold text-[#04D9FF]">
                        Quick Links
                      </div>
                      <ul className="w-full flex flex-wrap justify-between gap-y-3">
                        <li className="w-1/2">
                          <Link
                            href="/"
                            className="text-sm font-semibold text-white"
                          >
                            Home
                          </Link>
                        </li>
                        <li className="w-1/2">
                          <Link
                            href="/about-us"
                            className="text-sm font-semibold text-white"
                          >
                            About Us
                          </Link>
                        </li>
                      </ul>
                    </div>
                    <div className="md:w-1/2 w-full flex flex-col gap-y-3 justify-center ">
                      <div className="lg:text-xl md:text-lg text-lg font-bold text-white text-balance">
                        Download India’s First
                        <span className="text-[#04D9FF]"> AI Powered</span>{" "}
                        School App
                      </div>
                      <div className="flex flex-row gap-3">
                        <Link href={""} className="w-full">
                          <Image
                            src="/images/googleStoreBlack.webp"
                            alt="play store"
                            width={137}
                            height={46}
                            className="size-full mx-auto object-contain aspect-[137/46]"
                          />
                        </Link>
                        <Link href={"#"} className="w-full">
                          <Image
                            src="/images/appStoreBlack.webp"
                            alt="app store"
                            width={137}
                            height={46}
                            className="size-full mx-auto object-contain aspect-[137/46]"
                          />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-[#192D58] h-8 hidden md:px-11 px-4 md:grid grid-cols-6 gap-24 items-center justify-center">
            <div className="h-0.5 bg-[#2F568E]"></div>
            <div className="h-0.5 bg-[#2F568E]"></div>
            <div className="h-0.5 bg-[#2F568E]"></div>
            <div className="h-0.5 bg-[#2F568E]"></div>
            <div className="h-0.5 bg-[#2F568E]"></div>
            <div className="h-0.5 bg-[#2F568E]"></div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
