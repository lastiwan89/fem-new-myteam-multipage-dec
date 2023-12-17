import React from "react";
import Logo from "../navbar/logo";
import Link from "next/link";
import { ADDRESS, SOCIAL_ICONS } from "@/constant";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-green-sacramento py-16 px-14">
      <div className="flex flex-col gap-6 items-center">
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
      <div className="flex flex-col items-center mt-6 mb-10">
        {ADDRESS.map((item) => (
          <p
            className="text-white opacity-60 text-fs-15 leading-lh-25 font-semibold"
            key={item.key}
          >
            {item.label}
          </p>
        ))}
      </div>
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
      <p className="text-white text-center text-fs-15 leading-lh-25 font-semibold opacity-60">
        Copyright 2020. All Rights Reserved
      </p>
    </footer>
  );
}
