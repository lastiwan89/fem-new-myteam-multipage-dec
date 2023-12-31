"use client";

import React, { useState } from "react";

interface Form {
  name: string;
  email: string;
  company: string;
  title: string;
  message: string;
}

const initialLogin: Form = {
  name: "",
  email: "",
  company: "",
  title: "",
  message: "",
};

export default function ContactForm() {
  const [formData, setFormData] = useState<Form>(initialLogin);

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    console.log(formData);
    setFormData(initialLogin);
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="form-bg1 md:contact-md2 bg-green-midnight p-6 pb-24 md:px-32 lg:min-w-[50%] lg:px-6 lg:py-28 lg:pr-40"
    >
      <div className="mb-6 flex flex-col gap-y-2 lg:min-w-full lg:gap-y-5">
        <input
          className="w-full border-b-2 border-white px-2 py-2 text-fs-15 font-semibold leading-lh-25 lg:py-4"
          type="text"
          name="name"
          id="name"
          placeholder="Name"
          onChange={handleChange}
          value={formData.name}
        />
        <input
          className="w-full border-b-2 border-white px-2 py-2 text-fs-15 font-semibold leading-lh-25 lg:py-4"
          type="email"
          name="email"
          id="email"
          placeholder="Email Address"
          onChange={handleChange}
          value={formData.email}
        />
        <input
          className="w-full border-b-2 border-white px-2 py-2 text-fs-15 font-semibold leading-lh-25 lg:py-4"
          type="text"
          name="company"
          id="company"
          placeholder="Company Name"
          onChange={handleChange}
          value={formData.company}
        />
        <input
          className="w-full border-b-2 border-white px-2 py-2 text-fs-15 font-semibold leading-lh-25 lg:py-4"
          type="text"
          name="title"
          id="title"
          placeholder="Title"
          onChange={handleChange}
          value={formData.title}
        />
        <input
          className="w-full border-b-2 border-white px-2 pb-12 pt-2 text-fs-15 font-semibold leading-lh-25"
          name="message"
          id="message"
          placeholder="Message"
          onChange={handleChange}
          value={formData.message}
        />
      </div>
      <button
        className="text-fs-h3-18 rounded-full border-2 border-white bg-white px-8 py-2 font-semibold leading-lh-18"
        type="submit"
      >
        submit
      </button>
    </form>
  );
}
