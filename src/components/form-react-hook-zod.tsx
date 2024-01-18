"use client";
import React from "react";
import { TZodForm, zodForm } from "@/types";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

export default function ZodForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<TZodForm>({
    resolver: zodResolver(zodForm),
  });

  async function onSubmit(data: TZodForm) {
    await new Promise((res) => setTimeout(res, 1000));
    reset();
    console.log(data);
  }
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="form-bg1 md:contact-md2 bg-green-midnight p-6 pb-24 md:px-32 lg:min-w-[50%] lg:px-6 lg:py-28 lg:pr-40"
    >
      <div className="mb-6 flex flex-col gap-y-2 lg:min-w-full lg:gap-y-5">
        <div className="flex flex-col">
          <input
            {...register("name")}
            className="w-full border-b-2 border-white px-2 py-2 text-fs-15 font-semibold leading-lh-25 lg:py-4"
            type="text"
            name="name"
            id="name"
            placeholder="Name"
          />
          {errors.name && (
            <p className="text-end text-fs-13 text-coral">
              {errors.name.message}
            </p>
          )}
        </div>
        <div className="flex flex-col">
          <input
            {...register("email")}
            className="w-full border-b-2 border-white px-2 py-2 text-fs-15 font-semibold leading-lh-25 lg:py-4"
            type="email"
            name="email"
            id="email"
            placeholder="Email Address"
          />
          {errors.email && (
            <p className="text-end text-fs-13 text-coral">
              {errors.email.message}
            </p>
          )}
        </div>
        <div className="flex flex-col">
          <input
            {...register("company")}
            className="w-full border-b-2 border-white px-2 py-2 text-fs-15 font-semibold leading-lh-25 lg:py-4"
            type="text"
            name="company"
            id="company"
            placeholder="Company Name"
          />
          {errors.company && (
            <p className="text-end text-fs-13 text-coral">
              {errors.company.message}
            </p>
          )}
        </div>
        <div className="flex flex-col">
          <input
            {...register("title")}
            className="w-full border-b-2 border-white px-2 py-2 text-fs-15 font-semibold leading-lh-25 lg:py-4"
            type="text"
            name="title"
            id="title"
            placeholder="Title"
          />
          {errors.title && (
            <p className="text-end text-fs-13 text-coral">
              {errors.title.message}
            </p>
          )}
        </div>
        <div className="flex flex-col">
          <input
            {...register("message")}
            className="w-full border-b-2 border-white px-2 pb-12 pt-2 text-fs-15 font-semibold leading-lh-25"
            name="message"
            id="message"
            placeholder="Message"
          />
          {errors.message && (
            <p className="text-end text-fs-13 text-coral">
              {errors.message.message}
            </p>
          )}
        </div>
      </div>
      <button
        className="text-fs-h3-18 rounded-full border-2 border-white bg-white px-8 py-2 font-semibold leading-lh-18 disabled:bg-slate-400"
        type="submit"
        disabled={isSubmitting}
      >
        submit
      </button>
    </form>
  );
}
