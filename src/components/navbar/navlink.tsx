import React from "react";
import Link from "next/link";

export default function NavLink() {
  return (
    <ul className="hidden md:flex md:gap-10">
      <Link
        className="text-fs-18 font-semibold leading-lh-28 text-white hover:text-coral"
        href="/"
      >
        home
      </Link>
      <Link
        className="text-fs-18 font-semibold leading-lh-28 text-white hover:text-coral"
        href="/about"
      >
        about
      </Link>
    </ul>
  );
}
