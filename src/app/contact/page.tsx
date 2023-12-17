import ContactForm from "@/components/contact-form";
import { TEAMS } from "@/constant";
import Image from "next/image";

export default function Contact() {
  return (
    <main>
      <section className="bg-green-midnight p-6">
        <div className="py-10">
          <h1 className="text-center text-white text-fs-40 leading-lh-40 font-bold">
            Contact
          </h1>
          <h3 className="text-center text-light-coral text-fs-32 leading-lh-48 font-bold mt-4">
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
      <section>
        <ContactForm />
      </section>
    </main>
  );
}
