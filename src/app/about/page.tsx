import GetStarted from "@/components/footer/get-started";
import { CLIENT, DIRECTORS } from "@/constant";
import Image from "next/image";
import React from "react";

export default function About() {
  return (
    <main>
      <section className="flex flex-col items-center bg-green-midnight about-hero md:about-hero-md pt-20 pb-28 px-6 bg-about1 bg-no-repeat bg-bottom-r-50">
        <h1 className="text-center text-white text-fs-40 leading-lh-40 md:text-fs-64 md:leading-lh-56 font-bold mb-4 md:mb-6">
          About
        </h1>
        <p className="text-center text-white font-semibold text-fs-15 leading-lh-28  md:max-w-[457px]">
          We help companies build dynamic teams made up of top global talent.
          Using our network of passionate professionals we drive innovation and
          deliver incredible outcomes. Talented, diverse teams shape the best
          products and experiences. We’ll bring those teams to you.
        </p>
      </section>
      {/* directors */}
      <section className="custom-about-dir1 px-6 py-28 md:custom-dir-md bg-green-jungle w-full flex flex-col items-center">
        <h3 className="text-center text-white text-fs-32 leading-lh-32 font-bold mb-12">
          Meet the directors
        </h3>
        <div className="md:flex md:flex-wrap md:gap-6 md:justify-center">
          {DIRECTORS.map((item) => {
            let quotes = item.quotes;
            if (!quotes) {
              return (
                <div
                  className="relative w-[327px] h-[253px] flex flex-col items-center py-8 bg-green-sacramento mb-14"
                  key={item.key}
                >
                  <Image
                    className="border-2 rounded-full border-blue-rapture"
                    src={`${item.url}`}
                    width={96}
                    height={96}
                    alt={`${item.name} avatar`}
                  />
                  <p className="text-center text-blue-rapture text-fs-18 leading-lh-28 font-bold mt-2">
                    {item.name}
                  </p>
                  <p className="italic text-white text-fs-15 leading-lh-25 font-medium mb-6">
                    {item.job}
                  </p>
                  <div className="bg-light-coral cursor-pointer hover:bg-blue-rapture  hover:-rotate-45 p-5 rounded-full absolute -bottom-7">
                    <svg
                      className=" fill-green-sacramento rotate-45"
                      xmlns="http://www.w3.org/2000/svg"
                      width="17"
                      height="17"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M15.01.368l2.122 2.122-6.01 6.01 6.01 6.01-2.122 2.122L9 10.622l-6.01 6.01L.868 14.51 6.88 8.5.87 2.49 2.988.368 9 6.38 15.01.37z"
                      />
                    </svg>
                  </div>
                </div>
              );
            } else {
              return (
                <div
                  className="relative w-[327px] h-[253px] flex flex-col items-center py-8 px-11 bg-green-sacramento"
                  key={item.key}
                >
                  <p className="text-center text-blue-rapture text-fs-18 leading-lh-28 font-bold mb-2">
                    {item.name}
                  </p>
                  <p className="text-center text-white text-fs-15 leading-lh-25 font-semibold">
                    {item.quotes}
                  </p>
                  <div className="flex gap-6 my-6">
                    <Image
                      src={`${item.socialIcon?.twitter}`}
                      width={20}
                      height={20}
                      alt="twitter icon"
                    />
                    <Image
                      src={`${item.socialIcon?.linkdln}`}
                      width={20}
                      height={20}
                      alt="linkdln icon"
                    />
                  </div>
                  <div className="bg-blue-rapture p-5 rounded-full absolute -bottom-7 hover:bg-light-coral hover:-rotate-45 cursor-pointer">
                    <svg
                      className=" fill-green-sacramento"
                      xmlns="http://www.w3.org/2000/svg"
                      width="17"
                      height="17"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M15.01.368l2.122 2.122-6.01 6.01 6.01 6.01-2.122 2.122L9 10.622l-6.01 6.01L.868 14.51 6.88 8.5.87 2.49 2.988.368 9 6.38 15.01.37z"
                      />
                    </svg>
                  </div>
                </div>
              );
            }
          })}
        </div>
      </section>
      {/* clients sections */}
      <section className="bg-green-sacramento about-bg3 md:about-bg3-md px-6 md:px-9 py-24 flex flex-col items-center">
        <h3 className="text-center text-fs-32 leading-lh-32 font-bold text-white">
          Some of our clients
        </h3>
        <div className="flex flex-col md:flex-row items-center gap-14 mt-16">
          {CLIENT.map((item) => (
            <div key={item.key}>
              <Image
                className="max-w-100% h-auto"
                src={`${item.url}`}
                alt={`${item.label} icon`}
                width={140}
                height={24}
              />
            </div>
          ))}
        </div>
      </section>
      <GetStarted />
    </main>
  );
}
