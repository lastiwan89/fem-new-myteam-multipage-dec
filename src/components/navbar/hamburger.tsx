"use client";
import Link from "next/link";
import Button from "../button";

export default function Hamburger({
  isOpen,
  handleClick,
}: {
  isOpen: boolean;
  handleClick: (e: any) => void;
}) {
  return (
    <div className="md:hidden" onClick={handleClick}>
      {!isOpen ? (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="17">
          <g fill="#FFF" fill-rule="evenodd">
            <path d="M0 0h20v3H0zM0 7h20v3H0zM0 14h20v3H0z" />
          </g>
        </svg>
      ) : (
        <div className="mobile-nav-bg flex flex-col w-80 gap-8 px-12 py-28 fixed top-0 right-0  overflow-y-hidden overflow-x-hidden transition-transform translate-x-4  duration-300 items-start justify-start h-screen bg-blue-police z-40">
          <svg
            className="absolute top-12 right-9"
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="17"
          >
            <path
              fill="#FFF"
              fill-rule="evenodd"
              d="M15.01.368l2.122 2.122-6.01 6.01 6.01 6.01-2.122 2.122L9 10.622l-6.01 6.01L.868 14.51 6.88 8.5.87 2.49 2.988.368 9 6.38 15.01.37z"
            />
          </svg>
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
          <Link
            className="border-2 text-fs-h3-18 font-semibold leading-lh-18 px-8 py-2 rounded-full border-white text-white hover:bg-white hover:text-green-midnight"
            href={`/contact`}
          >
            contact us
          </Link>
        </div>
      )}
    </div>
  );
}
