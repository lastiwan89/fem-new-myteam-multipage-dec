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
        <div className="mobile-nav-bg fixed right-0 top-0 z-40 flex h-screen w-3/4 translate-x-4 flex-col  items-start justify-start gap-8 overflow-x-hidden  overflow-y-hidden bg-blue-police px-12 py-28 transition-transform duration-300">
          <svg
            className="absolute right-10 top-12"
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
          <Link
            className="text-fs-h3-18 rounded-full border-2 border-white px-8 py-2 font-semibold leading-lh-18 text-white hover:bg-white hover:text-green-midnight"
            href={`/contact`}
          >
            contact us
          </Link>
        </div>
      )}
    </div>
  );
}
