import { neon } from "@neondatabase/serverless";
const sql = neon(`${process.env.DATABASE_URL}`);
export const validateEmail = async (name: string) => {
  const data = await sql(
    `
    SELECT * FROM users 
    WHERE name = $1`,
    [name]
  );
  console.log(data)
};
