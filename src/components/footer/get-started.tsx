import React from "react";
import Button from "../button";

export default function GetStarted() {
  return (
    <main className="p-20 pb-24 md:px-12 md:py-20 bg-light-coral flex flex-col md:flex-row md:justify-around items-center get-contact">
      <h1 className="text-center text-green-sacramento text-fs-32 leading-lh-32 font-bold my-6">
        Ready to get started?
      </h1>
      <div>
        <Button type="footer-cta" />
      </div>
    </main>
  );
}
