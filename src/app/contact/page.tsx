import ContactForm from "@/components/contact-form";
import { TEAMS } from "@/constant";
import Image from "next/image";
import { Suspense } from "react";

export default function Contact() {
  return (
    <main className="mx-auto max-w-2xl lg:flex lg:justify-between">
      <section className="md:contact-md1 bg-green-midnight p-6 md:px-32 lg:min-w-[50%] lg:p-0 lg:py-28 lg:pl-40">
        <div className="py-10 md:py-8 lg:py-0">
          <h1 className="text-center text-fs-40 font-bold leading-lh-40 text-white md:text-fs-64 md:leading-lh-56 lg:text-start lg:text-fs-64 lg:leading-lh-100">
            Contact
          </h1>
          <h3 className="mt-4 text-center text-fs-32 font-bold leading-lh-48 text-coral lg:text-start">
            Ask us about
          </h3>
        </div>
        <div>
          {TEAMS.map((item) => (
            <div
              className="my-6 flex items-center justify-start gap-6"
              key={item.key}
            >
              <Image
                src={`${item.url}`}
                width={72}
                height={72}
                alt={`${item.label}`}
              />
              <p className="text-fs-18 font-bold leading-lh-28 text-white">
                {item.contactUsText}
              </p>
            </div>
          ))}
        </div>
      </section>
      {/* form */}
      <Suspense>
        <ContactForm />
      </Suspense>
    </main>
  );
}
