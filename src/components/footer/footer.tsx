import React from "react";
import Logo from "../navbar/logo";
import Link from "next/link";
import { ADDRESS, SOCIAL_ICONS } from "@/constant";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-green-sacramento py-16 px-14 flex flex-col">
      <div className="flex flex-col md:flex-row md:items-start md:justify-between">
        <div className="flex flex-col gap-6 md:gap-14 items-center md:items-start md:justify-between">
          <Logo />
          <div className="flex gap-6">
            <Link className="text-white" href="/">
              home
            </Link>
            <Link className="text-white" href="/about">
              about
            </Link>
          </div>
        </div>
        <div className="flex flex-col items-center mt-6 mb-10 md:items-end">
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
      <div className="flex flex-col md:flex-row md:justify-between md:items-center">
        <div className="flex gap-5 items-center justify-center my-4">
          {SOCIAL_ICONS.map((item) => (
            <Image
              key={item.key}
              src={`${item.url}`}
              width={24}
              height={24}
              alt={`${item.label}`}
            />
          ))}
        </div>
        <p className="text-white text-center md:text-end text-fs-15 leading-lh-25 font-semibold opacity-60">
          Copyright 2020. All Rights Reserved
        </p>
      </div>
    </footer>
  );
}
