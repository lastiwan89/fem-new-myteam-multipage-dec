import GetStarted from "@/components/footer/get-started";
import { CEO, TEAMS } from "@/constant";
import Image from "next/image";
import React from "react";

export default function Home() {
  return (
    <main>
      {/* Hero */}
      <section className="bg-green-midnight px-6 pt-20 pb-52 home-hero-sm lg:home-hero flex flex-col lg:flex-row lg:justify-center items-center lg:px-40">
        <div className="pr-14">
          <h1 className="text-center lg:text-start text-white font-bold text-fs-40 leading-lh-40 md:text-fs-64 md:leading-lh-56 md:w-[457px] lg:w-full px-14">
            Find the best <span className="text-light-coral">talent</span>
          </h1>
        </div>
        <div className="md:w-[457px] lg:w-[550px] flex flex-col gap-10">
          <div className="hidden lg:block bg-blue-rapture h-1 w-12"></div>
          <p className="text-center lg:text-start text-white text-fs-15 lg:text-fs-18 font-semibold leading-lh-28 mt-6 ">
            Finding the right people and building high performing teams can be
            hard. Most companies aren’t tapping into the abundance of global
            talent. We’re about to change that.
          </p>
        </div>
      </section>
      {/* Team Section */}
      <section className="bg-no-repeat custom-team-md bg-green-sacramento px-6 py-16 md:px-24 md:py-28 lg:flex lg:justify-center lg:gap-28">
        <div className="w-[240px] md:w-[445px]">
          <div className="bg-light-coral h-1 w-12"></div>
          <h1 className="mt-8 text-white text-fs-32 leading-lh-32 font-bold">
            Build & manage distributed teams like no one else.
          </h1>
        </div>
        <div className="mt-12 lg:mt-8 flex flex-col md:justify-start md:items-start">
          {TEAMS.map((team) => (
            <div
              className="flex flex-col md:flex-row md:gap-6 items-center justify-center"
              key={team.key}
            >
              <div className="h-24 w-24 flex items-center my-6">
                <Image
                  className="mt-12"
                  src={`${team.url}`}
                  alt={`${team.label} icon`}
                  width={72}
                  height={72}
                />
              </div>
              <div className="flex flex-col gap-4 md:mb-8 md:justify-center">
                <h3 className="text-center md:text-start text-light-coral text-fs-18 leading-lh-28 font-bold">
                  {team.label}
                </h3>
                <p className="text-center md:text-start text-white text-fs-15 leading-lh-25 font-semibold">
                  {team.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
      {/* CEO section */}
      <section className="px-6 py-40 md:px-24 lg:px-20 md:pt-28 md:pb-20 custom-home-ceo1">
        <div>
          <h3 className="text-center text-white text-fs-32 leading-lh-32 lg:text-fs-40 lg:leading-lh-40 font-bold mb-12 lg:px-12">
            Delivering real results for top companies. Some of our{" "}
            <span className="text-blue-rapture">success stories.</span>
          </h3>
        </div>
        <div className="lg:flex lg:gap-4">
          {CEO.map((item) => (
            <div
              className="flex flex-col items-center py-9 bg-quote bg-no-repeat bg-top"
              key={item.key}
            >
              <p className="text-center text-white text-fs-15 leading-lh-25 font-semibold">
                {item.text}
              </p>
              <p className="text-center text-blue-rapture mt-4 text-fs-18 leading-lh-28 font-bold">
                {item.name}
              </p>
              <p className="text-center text-white italic font-medium text-fs-13 leading-lh-18">
                {item.job}
              </p>
              <Image
                className="rounded-full border-2 border-blue-rapture mt-4 mb-4"
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
