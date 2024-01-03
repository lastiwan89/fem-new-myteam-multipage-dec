"use client";

import { Form, ValidForm } from "@/types";
import React, { useState } from "react";

const initialLogin: Form = {
  name: "",
  email: "",
  company: "",
  title: "",
  message: "",
};

const initialFormValid: ValidForm = {
  name: "",
  email: "",
  company: "",
  title: "",
  message: "",
};

export default function ContactForm() {
  const [formData, setFormData] = useState<Form>(initialLogin);
  const [isValid, setIsValid] = useState<ValidForm>(initialFormValid);

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;
    setFormData((prevState) => {
      return {
        ...prevState,
        [name]: value,
      };
    });
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    const regex: RegExp = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
    e.preventDefault();
    const isError: ValidForm = initialFormValid;
    if (!formData.name.trim()) {
      isError.name = "name is required";
    }
    if (!formData.email.trim()) {
      isError.email = "email is required";
    } else if (!regex.test(formData.email)) {
      isError.email = "email is not valid!";
    }
    if (!formData.company.trim()) {
      isError.company = "company is required";
    }
    if (!formData.title.trim()) {
      isError.title = "title is required";
    }
    if (!formData.message.trim()) {
      isError.message = "message is required";
    }
    setIsValid(isError);
    console.log(formData);
    setFormData(initialLogin);
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="form-bg1 md:contact-md2 bg-green-midnight p-6 pb-24 md:px-32 lg:min-w-[50%] lg:px-6 lg:py-28 lg:pr-40"
    >
      <div className="mb-6 flex flex-col gap-y-2 lg:min-w-full lg:gap-y-5">
        <div className="flex flex-col">
          <input
            className="w-full border-b-2 border-white px-2 py-2 text-fs-15 font-semibold leading-lh-25 lg:py-4"
            type="text"
            name="name"
            id="name"
            placeholder="Name"
            onChange={handleChange}
            value={formData.name}
          />
          {isValid.name && (
            <p className="text-end text-fs-13 text-coral">{isValid.name}</p>
          )}
        </div>
        <div className="flex flex-col">
          <input
            className="w-full border-b-2 border-white px-2 py-2 text-fs-15 font-semibold leading-lh-25 lg:py-4"
            type="email"
            name="email"
            id="email"
            placeholder="Email Address"
            onChange={handleChange}
            value={formData.email}
          />
          {isValid.email && (
            <p className="text-end text-fs-13 text-coral">{isValid.email}</p>
          )}
        </div>
        <div className="flex flex-col">
          <input
            className="w-full border-b-2 border-white px-2 py-2 text-fs-15 font-semibold leading-lh-25 lg:py-4"
            type="text"
            name="company"
            id="company"
            placeholder="Company Name"
            onChange={handleChange}
            value={formData.company}
          />
          {isValid.company && (
            <p className="text-end text-fs-13 text-coral">{isValid.company}</p>
          )}
        </div>
        <div className="flex flex-col">
          <input
            className="w-full border-b-2 border-white px-2 py-2 text-fs-15 font-semibold leading-lh-25 lg:py-4"
            type="text"
            name="title"
            id="title"
            placeholder="Title"
            onChange={handleChange}
            value={formData.title}
          />
          {isValid.title && (
            <p className="text-end text-fs-13 text-coral">{isValid.title}</p>
          )}
        </div>
        <div className="flex flex-col">
          <input
            className="w-full border-b-2 border-white px-2 pb-12 pt-2 text-fs-15 font-semibold leading-lh-25"
            name="message"
            id="message"
            placeholder="Message"
            onChange={handleChange}
            value={formData.message}
          />
          {isValid.message && (
            <p className="text-end text-fs-13 text-coral">{isValid.message}</p>
          )}
        </div>
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
