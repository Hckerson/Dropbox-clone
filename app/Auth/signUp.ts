"use server";
import bcrypt from "bcryptjs";
import { State } from "../lib/definitions";
import { LoginSchema } from "../lib/definitions";
import { neon } from "@neondatabase/serverless";
import { createSession } from "../lib/session";
const sql = neon(`${process.env.DATABASE_URL}`);
import "dotenv/config";

export async function signUp(state: State = {}, formData: FormData) {
  console.log(state);
  const validatedFields = LoginSchema.safeParse({
    email: formData.get("email"),
    password: formData.get("password"),
  });
  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: "",
    };
  }
  const { email, password } = validatedFields.data;
  const hashedPassword = await bcrypt.hash(password, 10);
  try {
    const response = await sql(
      `
    SELECT * FROM users 
    WHERE email = $1`,
      [email]
    );

    if (response.length == 0) {
      const name = email.includes("@") ? email.split("@")[0] : "";
      const detais = await sql(
        `
        INSERT INTO users (name, email, password)
        VALUES ($1, $2, $3) RETURNING *`,
        [name, email, hashedPassword]
      );
      const id = detais[0].id;
      await createSession(id);
      /** redirect('/home') */
    } else {
      return {
        message: "Email already exists, Login instead",
      };
    }
  } catch (error) {
    console.log(error);
    return {
      message: "Login error, Failed to create user",
    };
  }
}
