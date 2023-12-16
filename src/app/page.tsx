import { CEO, TEAMS } from "@/constant";
import Image from "next/image";
import React from "react";

export default function Home() {
  return (
    <main>
      {/* Hero */}
      <section className="bg-green-midnight px-6 py-10 min-h-[440px] bg-home2 bg-no-repeat bg-bottom">
        <h3 className="text-center text-white font-bold text-fs-40 leading-lh-40 px-14">
          Find the best <span className="text-light-coral">talent</span>
        </h3>
        <p className="text-center text-white text-fs-15 font-semibold leading-lh-28 mt-6">
          Finding the right people and building high performing teams can be
          hard. Most companies aren’t tapping into the abundance of global
          talent. We’re about to change that.
        </p>
      </section>
      {/* Team Section */}
      <section className="bg-home3 bg-no-repeat bg-top-50p bg-green-sacramento px-6 py-16">
        <div className="w-[240px]">
          <div className="bg-light-coral h-1 w-12"></div>
          <h1 className="mt-8 text-white text-fs-32 leading-lh-32 font-bold">
            Build & manage distributed teams like no one else.
          </h1>
        </div>
        <div className="mt-12">
          {TEAMS.map((team) => (
            <div
              className="flex flex-col items-center justify-center"
              key={team.key}
            >
              <Image
                className="mt-12"
                src={`${team.url}`}
                alt={`${team.label} icon`}
                width={72}
                height={72}
              />
              <div>
                <h3 className="text-center text-light-coral text-fs-18 leading-lh-28 font-bold my-4">
                  {team.label}
                </h3>
                <p className="text-center text-white text-fs-15 leading-lh-25 font-semibold">
                  {team.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
      {/* CEO section */}
      <section className="px-6 py-40 custom-home-ceo1">
        <div>
          <h3 className="text-center text-white text-fs-32 leading-lh-32 font-bold mb-12">
            Delivering real results for top companies. Some of our{" "}
            <span className="text-blue-rapture">success stories.</span>
          </h3>
        </div>
        <div>
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
    </main>
  );
}
