import { db } from "@vercel/postgres";
import { plans } from "../lib/placeholder-data";

const client = await db.connect();

async function seedPlans() {
  await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;

  await client.sql`
    CREATE TABLE IF NOT EXISTS plans (
      id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
      name VARCHAR(255) NOT NULL,
      essential DOUBLE PRECISION NOT NULL,
      business DOUBLE PRECISION NOT NULL,
      plus DOUBLE PRECISION NOT NULL
    );
  `;

  const insertedPlans = await Promise.all(
    plans.map(async (plan) => {
      return await client.sql`
        INSERT INTO plans (id, name, essential, business, plus)
        VALUES (${plan.id}, ${plan.name}, ${plan.essential}, ${plan.business}, ${plan.plus})
        ON CONFLICT (id) DO NOTHING;
      `;
    })
  );

  return insertedPlans;
}


export async function GET() {
  try {
    await client.sql`BEGIN`;
    await seedPlans()
    await client.sql`COMMIT`;
    return Response.json({message : 'Data seeded successfully'})
  } catch (error) {
    await client.sql`ROLLBACK`;
    return Response.json({error}, {status : 500})
  }
}