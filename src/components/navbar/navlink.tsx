import React from "react";
import Link from "next/link";

export default function NavLink() {
  return (
    <ul className="hidden md:flex md:gap-10">
      <Link
        className="text-white hover:text-light-coral text-fs-18 leading-lh-28 font-semibold"
        href="/"
      >
        home
      </Link>
      <Link
        className="text-white hover:text-light-coral text-fs-18 leading-lh-28 font-semibold"
        href="/about"
      >
        about
      </Link>
    </ul>
  );
}
