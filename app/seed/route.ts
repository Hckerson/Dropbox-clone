import { neon } from "@neondatabase/serverless";
import { users } from "../lib/placeholder-data";

const sql = neon(`${process.env.DATABASE_URL}`, {
  fetchOptions: {
    timeout: 10000,
  },
});
import "dotenv/config";
async function seedUsers() {
  await sql(`DROP TABLE IF EXISTS users CASCADE`)
  await sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
  await sql`
    CREATE TABLE IF NOT EXISTS users (
      id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
      name VARCHAR(255) NOT NULL,
      email TEXT NOT NULL UNIQUE,
      password TEXT NOT NULL
    );
  `;
}

async function seedSession() {
  await sql(`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`);
  await sql(`
    CREATE TABLE IF NOT EXISTS sessions (
    id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    user_id VARCHAR(255) NOT NULL,
    expires_at TIMESTAMP WITH TIME ZONE NOT NULL
    )`);
}

export async function GET() {
  try {
    await sql`BEGIN`;
    await seedUsers();
    await seedSession()
    await sql`COMMIT`;

    return Response.json({ message: "Database seeded successfully" });
  } catch (error) {
    await sql`ROLLBACK`;
    return Response.json({ error }, { status: 500 });
  }
}
