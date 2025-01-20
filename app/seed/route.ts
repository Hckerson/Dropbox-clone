import { neon } from "@neondatabase/serverless";
import { users } from "../lib/placeholder-data";

const sql = neon(`${process.env.DATABASE_URL}`, {
  fetchOptions: {
    timeout: 10000,
  },
});
import "dotenv/config";
// async function seedUsers() {
//   // const check = await sql`SELECT * FROM users`
//   // console.log(check)
//   // await sql(`DELETE FROM users WHERE email = $1`,['user@nextmail.com'])
//   await sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
//   await sql`
//     CREATE TABLE IF NOT EXISTS users (
//       id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
//       name VARCHAR(255) NOT NULL,
//       email TEXT NOT NULL UNIQUE,
//       password TEXT NOT NULL
//     );
//   `;
//   await Promise.all(
//     users.map(async (user) => {
//       await sql(
//         `INSERT INTO users (id, name, email, password)
//       VALUES ($1, $2, $3, $4)`,
//         [user.id, user.name, user.email, user.password]
//       );
//     })
//   );
// }

async function seedSession() {
  const check = await sql(`SELECT * FROM sessions`)
  console.log(check)
  await sql(`
    CREATE TABLE IF NOT EXISTS sessions (
    id SERIAL PRIMARY KEY,
    user_id VARCHAR(255) NOT NULL,
    expires_at TIMESTAMP WITH TIME ZONE NOT NULL
    )`);
}

export async function GET() {
  try {
    await sql`BEGIN`;
    // await seedUsers();
    await seedSession()
    await sql`COMMIT`;

    return Response.json({ message: "Database seeded successfully" });
  } catch (error) {
    await sql`ROLLBACK`;
    return Response.json({ error }, { status: 500 });
  }
}
