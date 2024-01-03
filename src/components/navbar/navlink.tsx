import React from "react";
import Link from "next/link";

export default function NavLink() {
  return (
    <ul className="hidden md:flex md:gap-10">
      <Link
        className="hover:text-coral text-fs-18 font-semibold leading-lh-28 text-white"
        href="/"
      >
        home
      </Link>
      <Link
        className="hover:text-coral text-fs-18 font-semibold leading-lh-28 text-white"
        href="/about"
      >
        about
      </Link>
    </ul>
  );
}
