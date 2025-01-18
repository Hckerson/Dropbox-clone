import { z } from "zod";

export type Plan = {
  id: string;
  name: string;
  plus: number;
  essential: number;
  business: number;
  businessPlus: number;
};

export type Faqs = {
  id: number;
  topic: string;
  baby: string;
  alt: string;
  src: string;
  link: string;
};

export type Saying = {
  id: number;
  src: string;
  body: string;
  link: string;
  name: string;
  role: string;
};

export type Collections = {
  id: number;
  src: string;
  body: string;
  name: string;
  role: string;
  link: string;
};

export type Collabs = {
  id: number;
  topic: string;
  body: string;
  src: string;
};

export type EveryV3 = {
  id: number;
  src: string;
  head: string;
  body: string;
  bg: string;
};

export type EveryV4 = {
  id: number;
  src: string;
  head: string;
  body: string;
};




export type State = {
  errors?: {
    email?: string[];
    password?: string[];
  };
  message?: string | null;
};


export const LoginSchema = z.object({
  email: z
    .string({ required_error: "Email is required" })
    .email({ message: "Invalid email address" })
    .trim(),
  password: z
    .string({ required_error: "Password is required" })
    .min(6, { message: "Passwrod must be at least 6 characters long" })
    .regex(/[a-zA-Z]/, { message: "Contain at least one letter" })
    .regex(/[0-9]/, { message: "Password must contain at least one number" })
    .regex(/[^a-zA-Z0-9]/, {
      message: "Password must contain at least one special character",
    })
    .trim(),
});