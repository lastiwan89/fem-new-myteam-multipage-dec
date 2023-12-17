"use client";
import Logo from "./logo";
import NavLink from "./navlink";
import Button from "../button";
import { useState } from "react";
import Hamburger from "./hamburger";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  function handleClick() {
    setIsOpen((prev) => !prev);
  }
  return (
    <nav className="flex justify-between items-center bg-green-midnight px-6 py-10">
      <div className="flex items-center gap-12">
        <Logo />
        <NavLink />
      </div>
      <Button type="nav-cta" />
      <Hamburger isOpen={isOpen} handleClick={handleClick} />
    </nav>
  );
}
