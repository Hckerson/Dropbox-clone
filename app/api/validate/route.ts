import { NextResponse } from "next/server";
import { neon } from '@neondatabase/serverless';

const sql = neon(`${process.env.DATABASE_URL}`, {
  fetchOptions: {
    timeout: 10000, 
  },
});
import "dotenv/config"

export async function POST(request: Request) {
  const body = await request.json();
  const email = body.email;
  try {
    const response = await sql(
      ` 
      SELECT * FROM users
       WHERE email = $1`,
      [email]
    );
    if (response.length === 0) {
      return NextResponse.json({
        error: "Invalid email",
        status: 400,
        success: false,
      });
    }
    return NextResponse.json({
      success: true,
      message: `Email ${email} validated!`,
    });
  } catch (error) {
    console.log(error);
  }
}
