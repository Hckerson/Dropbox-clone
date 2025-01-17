'use server'
import bcrypt from 'bcryptjs'
import { State } from '../lib/definitions';
import { LoginSchema } from '../lib/definitions';
import { createSession } from '../lib/session';
import { redirect } from 'next/navigation';
import { neon } from '@neondatabase/serverless';
const sql = neon(`${process.env.DATABASE_URL}`)
import 'dotenv/config'


export async function login(prevState: State = {}, formData: FormData) {
  console.log(prevState)
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

  const {email, password} = validatedFields.data
  try {
    const response = await sql(`
      SELECT * FROM users
      WHERE email = $1`, [email])
      console.log(response)
    if (response.length === 0 ){
      return {
        message : 'User not found'
      }
    }
    const storedPassword = response[0].password
    const isValid = await bcrypt.compare(password, storedPassword)
    const userid = response[0].id
    console.log(isValid)
    if (!isValid){
      return {
        message : 'Invalid Password'
      }
    }
    await createSession(userid)
    /** redirect('/home') */
  } catch (error) {
    console.log(error)
    return {
      message : 'Login error, Failed to validate user'
    }
  }
}
