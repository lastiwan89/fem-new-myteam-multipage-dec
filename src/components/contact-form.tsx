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
      className="bg-green-midnight p-6 pb-24 form-bg1"
    >
      <div className="flex flex-col gap-y-2 mb-6">
        <input
          className="bg-green-midnight px-2 py-2 border-b-2 border-white"
          type="text"
          name="name"
          id="name"
          placeholder="Name"
          onChange={handleChange}
          value={formData.name}
        />
        <input
          className="bg-green-midnight px-2 py-2 border-b-2 border-white"
          type="email"
          name="email"
          id="email"
          placeholder="Email Address"
          onChange={handleChange}
          value={formData.email}
        />
        <input
          className="bg-green-midnight px-2 py-2 border-b-2 border-white"
          type="text"
          name="company"
          id="company"
          placeholder="Company Name"
          onChange={handleChange}
          value={formData.company}
        />
        <input
          className="bg-green-midnight px-2 py-2 border-b-2 border-white"
          type="text"
          name="title"
          id="title"
          placeholder="Title"
          onChange={handleChange}
          value={formData.title}
        />
        <input
          className="bg-green-midnight px-2 pt-2 pb-12 border-b-2 border-white"
          name="message"
          id="message"
          placeholder="Message"
          onChange={handleChange}
          value={formData.message}
        />
      </div>
      <button
        className="border-2 border-white bg-white text-fs-h3-18 font-semibold leading-lh-18 px-8 py-2 rounded-full"
        type="submit"
      >
        submit
      </button>
    </form>
  );
}
