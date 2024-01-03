import React from "react";
import Button from "../button";

export default function GetStarted() {
  return (
    <main className="get-started flex flex-col items-center bg-coral p-20 pb-24 md:flex-row md:justify-around md:px-12 md:py-20 lg:px-32 lg:py-16">
      <h1 className="my-6 text-center text-fs-32 font-bold leading-lh-32 text-green-sacramento">
        Ready to get started?
      </h1>
      <div>
        <Button type="footer-cta" />
      </div>
    </main>
  );
}
