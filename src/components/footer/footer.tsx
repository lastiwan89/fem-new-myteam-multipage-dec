import React from "react";
import Logo from "../navbar/logo";
import Link from "next/link";
import { ADDRESS, SOCIAL_ICONS } from "@/constant";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="max-w-2xl mx-auto bg-green-sacramento py-16 lg:py-12 px-14 flex flex-col lg:flex-row lg:justify-between">
      <div className="flex flex-col md:flex-row md:items-start md:justify-between lg:justify-between gap-10">
        <div className="flex flex-col gap-6 lg:gap-10 md:gap-14 items-center md:items-start md:justify-between">
          <Logo />
          <div className="flex gap-6">
            <Link
              className="text-white text-fs-18 leading-lh-28 font-semibold hover:text-light-coral"
              href="/"
            >
              home
            </Link>
            <Link
              className="text-white text-fs-18 leading-lh-28 font-semibold hover:text-light-coral"
              href="/about"
            >
              about
            </Link>
          </div>
        </div>
        <div className="flex flex-col items-center mt-6 mb-10 md:items-end lg:items-start lg:mb-0 lg:mt-0 lg:gap-1">
          {ADDRESS.map((item) => (
            <p
              className="text-white opacity-60 text-fs-15 leading-lh-25 font-semibold"
              key={item.key}
            >
              {item.label}
            </p>
          ))}
        </div>
      </div>
      <div className="flex flex-col md:flex-row lg:flex-col lg:items-end lg:justify-between md:justify-between md:items-center">
        <div className="flex gap-5 items-center justify-center my-4 lg:my-0">
          {SOCIAL_ICONS.map((item) => (
            <Image
              className="text-white hover:text-light-coral cursor-pointer"
              key={item.key}
              src={`${item.url}`}
              width={24}
              height={24}
              alt={`${item.label}`}
            />
          ))}
        </div>
        <p className="text-white text-center md:text-end text-fs-15 leading-lh-25 font-semibold opacity-60">
          Copyright &copy; 2023. MoriChan DEV.
        </p>
      </div>
    </footer>
  );
}
