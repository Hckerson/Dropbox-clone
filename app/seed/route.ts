import { neon } from '@neondatabase/serverless';
import { users } from "../lib/placeholder-data";

const sql = neon(`${process.env.DATABASE_URL}`, {
  fetchOptions: {
    timeout: 10000, 
  },
});
import "dotenv/config"
async function seedUsers() {
  await sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
  await sql`
    CREATE TABLE IF NOT EXISTS users (
      id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
      name VARCHAR(255) NOT NULL,
      email TEXT NOT NULL UNIQUE,
      password TEXT NOT NULL
    );
  `;
  await Promise.all(
    users.map(async(user)=>{
      await sql(`INSERT INTO users (id, name, email, password)
      VALUES ($1, $2, $3, $4)`, [user.id, user.name, user.email, user.password])
    })
  )
}

export async function GET() {
  try {
    await sql`BEGIN`;
    await seedUsers();
    await sql`COMMIT`;

    return Response.json({ message: 'Database seeded successfully' });
  } catch (error) {
    await sql`ROLLBACK`;
    return Response.json({ error }, { status: 500 });
  }
}