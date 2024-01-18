import { title } from "process";
import { string, z } from "zod";

export type Form = {
  name: string;
  email: string;
  company: string;
  title: string;
  message: string;
};

export type ValidForm = {
  name: string;
  email: string;
  company: string;
  title: string;
  message: string;
};

export const zodForm = z.object({
  name: z.string().min(1, "name required"),
  email: z.string().email({ message: "you must enter valid email address" }),
  company: z.string().min(1, "company required"),
  title: z.string().min(1, "title required"),
  message: z.string().min(20, "message must be at least 20 character"),
});

export type TZodForm = z.infer<typeof zodForm>;
