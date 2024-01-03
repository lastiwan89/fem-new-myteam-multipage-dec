import GetStarted from "@/components/footer/get-started";
import { CEO, TEAMS } from "@/constant";
import Image from "next/image";
import React from "react";

export default function Home() {
  return (
    <main className="mx-auto max-w-2xl">
      {/* Hero */}
      <section className="home-hero-sm lg:home-hero flex flex-col items-center justify-center bg-green-midnight px-6 pb-52 pt-20 lg:flex-row lg:px-40">
        <div className="px-4 lg:pr-14">
          <h1 className="px-14 text-center text-fs-40 font-bold leading-lh-40 text-white md:w-[457px] md:text-fs-64 md:leading-lh-56 lg:w-full lg:text-start">
            Find the best <span className="text-coral">talent</span>
          </h1>
        </div>
        <div className="flex flex-col gap-10 md:w-[457px] lg:w-[550px]">
          <div className="hidden h-1 w-12 bg-blue-rapture lg:block"></div>
          <p className="mt-6 text-center text-fs-15 font-semibold leading-lh-28 text-white lg:text-start lg:text-fs-18 ">
            Finding the right people and building high performing teams can be
            hard. Most companies aren’t tapping into the abundance of global
            talent. We’re about to change that.
          </p>
        </div>
      </section>
      {/* Team Section */}
      <section className="custom-team-md bg-green-sacramento bg-no-repeat px-6 py-16 md:px-24 md:py-28 lg:flex lg:justify-center lg:gap-28">
        <div className="w-[240px] md:w-[445px]">
          <div className="h-1 w-12 bg-coral"></div>
          <h1 className="mt-8 text-fs-32 font-bold leading-lh-32 text-white">
            Build & manage distributed teams like no one else.
          </h1>
        </div>
        <div className="mt-12 flex flex-col md:items-start md:justify-start lg:mt-8">
          {TEAMS.map((team) => (
            <div
              className="flex flex-col items-center justify-center md:flex-row md:gap-6"
              key={team.key}
            >
              <div className="my-6 flex h-24 w-24 items-center">
                <Image
                  className="mt-12"
                  src={`${team.url}`}
                  alt={`${team.label} icon`}
                  width={72}
                  height={72}
                />
              </div>
              <div className="flex flex-col gap-4 md:mb-8 md:justify-center">
                <h3 className="text-center text-fs-18 font-bold leading-lh-28 text-coral md:text-start">
                  {team.label}
                </h3>
                <p className="text-center text-fs-15 font-semibold leading-lh-25 text-white md:text-start">
                  {team.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
      {/* CEO section */}
      <section className="custom-home-ceo1 px-6 py-40 md:px-24 md:pb-20 md:pt-28 lg:px-20">
        <div>
          <h3 className="mb-12 text-center text-fs-32 font-bold leading-lh-32 text-white lg:px-12 lg:text-fs-40 lg:leading-lh-40">
            Delivering real results for top companies. Some of our{" "}
            <span className="text-blue-rapture">success stories.</span>
          </h3>
        </div>
        <div className="lg:flex lg:gap-4">
          {CEO.map((item) => (
            <div
              className="flex flex-col items-center bg-quote bg-top bg-no-repeat py-9"
              key={item.key}
            >
              <p className="text-center text-fs-15 font-semibold leading-lh-25 text-white">
                {item.text}
              </p>
              <p className="mt-4 text-center text-fs-18 font-bold leading-lh-28 text-blue-rapture">
                {item.name}
              </p>
              <p className="text-center text-fs-13 font-medium italic leading-lh-18 text-white">
                {item.job}
              </p>
              <Image
                className="mb-4 mt-4 rounded-full border-2 border-blue-rapture"
                src={`${item.url}`}
                width={62}
                height={62}
                alt={`${item.name} avatar`}
              />
            </div>
          ))}
        </div>
      </section>
      <GetStarted />
    </main>
  );
}
