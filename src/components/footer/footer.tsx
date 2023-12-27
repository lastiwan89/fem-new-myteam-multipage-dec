import React from "react";
import Logo from "../navbar/logo";
import Link from "next/link";
import { ADDRESS, SOCIAL_ICONS } from "@/constant";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="mx-auto flex max-w-2xl flex-col bg-green-sacramento px-14 py-16 lg:flex-row lg:justify-between lg:py-12">
      <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between lg:justify-between">
        <div className="flex flex-col items-center gap-6 md:items-start md:justify-between md:gap-14 lg:gap-10">
          <Logo />
          <div className="flex gap-6">
            <Link
              className="text-fs-18 font-semibold leading-lh-28 text-white hover:text-light-coral"
              href="/"
            >
              home
            </Link>
            <Link
              className="text-fs-18 font-semibold leading-lh-28 text-white hover:text-light-coral"
              href="/about"
            >
              about
            </Link>
          </div>
        </div>
        <div className="mb-10 mt-6 flex flex-col items-center md:items-end lg:mb-0 lg:mt-0 lg:items-start lg:gap-1">
          {ADDRESS.map((item) => (
            <p
              className="text-fs-15 font-semibold leading-lh-25 text-white opacity-60"
              key={item.key}
            >
              {item.label}
            </p>
          ))}
        </div>
      </div>
      <div className="flex flex-col md:flex-row md:items-center md:justify-between lg:flex-col lg:items-end lg:justify-between">
        <div className="my-4 flex items-center justify-center gap-5 lg:my-0">
          {SOCIAL_ICONS.map((item) => (
            <Image
              className="cursor-pointer text-white hover:text-light-coral"
              key={item.key}
              src={`${item.url}`}
              width={24}
              height={24}
              alt={`${item.label}`}
            />
          ))}
        </div>
        <p className="text-center text-fs-15 font-semibold leading-lh-25 text-white opacity-60 md:text-end">
          Copyright 2023. All Rights Reserved
        </p>
      </div>
    </footer>
  );
}
