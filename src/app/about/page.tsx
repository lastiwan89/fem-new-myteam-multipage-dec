import GetStarted from "@/components/footer/get-started";
import { CLIENT, DIRECTORS } from "@/constant";
import Image from "next/image";
import React from "react";

export default function About() {
  return (
    <main className="mx-auto max-w-2xl">
      <section className="about-hero md:about-hero-md bg-bottom-r-50 flex flex-col items-center bg-green-midnight bg-about1 bg-no-repeat px-6 pb-28 pt-20 lg:flex-row lg:justify-center">
        <div className="px-40 lg:min-w-[50%] lg:items-end">
          <h1 className="mb-4 text-center text-fs-40 font-bold leading-lh-40 text-white md:mb-6 md:text-fs-64 md:leading-lh-56 lg:text-end">
            About
          </h1>
        </div>
        <div className="flex flex-col gap-8 lg:min-w-[50%]">
          <div className="hidden h-1 w-12 bg-light-coral lg:block"></div>
          <p className="text-center text-fs-15 font-semibold leading-lh-28 text-white md:max-w-[457px]  lg:w-full lg:text-start">
            We help companies build dynamic teams made up of top global talent.
            Using our network of passionate professionals we drive innovation
            and deliver incredible outcomes. Talented, diverse teams shape the
            best products and experiences. We’ll bring those teams to you.
          </p>{" "}
        </div>
      </section>
      {/* directors */}
      <section className="custom-about-dir1 md:custom-dir-md  flex w-full flex-col items-center bg-green-jungle px-6 py-28">
        <h3 className="mb-12 text-center text-fs-32 font-bold leading-lh-32 text-white lg:text-fs-48 lg:leading-lh-48">
          Meet the directors
        </h3>
        <div className="md:flex md:flex-wrap md:justify-center md:gap-6 2xl:px-20 3xl:px-40">
          {DIRECTORS.map((item) => {
            let quotes = item.quotes;
            if (!quotes) {
              return (
                <div
                  className="relative mb-14 flex h-[253px] w-[327px] flex-col items-center bg-green-sacramento py-8"
                  key={item.key}
                >
                  <Image
                    className="rounded-full border-2 border-blue-rapture"
                    src={`${item.url}`}
                    width={96}
                    height={96}
                    alt={`${item.name} avatar`}
                  />
                  <p className="mt-2 text-center text-fs-18 font-bold leading-lh-28 text-blue-rapture">
                    {item.name}
                  </p>
                  <p className="mb-6 text-fs-15 font-medium italic leading-lh-25 text-white">
                    {item.job}
                  </p>
                  <div className="absolute -bottom-7 cursor-pointer  rounded-full bg-light-coral p-5 hover:-rotate-45 hover:bg-blue-rapture">
                    <svg
                      className=" rotate-45 fill-green-sacramento"
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
                  className="relative flex h-[253px] w-[327px] flex-col items-center bg-green-sacramento px-11 py-8"
                  key={item.key}
                >
                  <p className="mb-2 text-center text-fs-18 font-bold leading-lh-28 text-blue-rapture">
                    {item.name}
                  </p>
                  <p className="text-center text-fs-15 font-semibold leading-lh-25 text-white">
                    {item.quotes}
                  </p>
                  <div className="my-6 flex gap-6">
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
                  <div className="absolute -bottom-7 cursor-pointer rounded-full bg-blue-rapture p-5 hover:-rotate-45 hover:bg-light-coral">
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
      <section className="about-bg3 md:about-bg3-md flex flex-col items-center bg-green-sacramento px-6 py-24 md:px-9">
        <h3 className="text-center text-fs-32 font-bold leading-lh-32 text-white">
          Some of our clients
        </h3>
        <div className="mt-16 flex flex-col items-center gap-14 md:flex-row">
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
