import ContactForm from "@/components/contact-form";
import { TEAMS } from "@/constant";
import Image from "next/image";

export default function Contact() {
  return (
    <main className="lg:flex lg:justify-between max-w-2xl mx-auto">
      <section className="bg-green-midnight lg:min-w-[50%] p-6 lg:p-0 md:px-32 md:contact-md1 lg:pl-40 lg:py-28">
        <div className="py-10 md:py-8 lg:py-0">
          <h1 className="text-center text-white text-fs-40 lg:text-fs-64 lg:leading-lh-100 lg:text-start leading-lh-40 font-bold md:text-fs-64 md:leading-lh-56">
            Contact
          </h1>
          <h3 className="text-center lg:text-start text-light-coral text-fs-32 leading-lh-48 font-bold mt-4">
            Ask us about
          </h3>
        </div>
        <div>
          {TEAMS.map((item) => (
            <div
              className="flex justify-start items-center gap-6 my-6"
              key={item.key}
            >
              <Image
                src={`${item.url}`}
                width={72}
                height={72}
                alt={`${item.label}`}
              />
              <p className="text-white text-fs-18 leading-lh-28 font-bold">
                {item.contactUsText}
              </p>
            </div>
          ))}
        </div>
      </section>
      {/* form */}
      <ContactForm />
    </main>
  );
}
