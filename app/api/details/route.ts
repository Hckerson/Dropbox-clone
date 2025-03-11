import { cookies } from "next/headers";
import { decrypt } from "@/app/lib/session";
import { NextResponse } from "next/server";
import "dotenv/config";
export async function GET() {
  const cookie = (await cookies()).get("session")?.value;
  const session = cookie ? await decrypt(cookie) : null;
  const userId = session?.user_id;
  if (!userId)
    return NextResponse.json({ error: "unauthorized" }, { status: 401 });
  try {
    const firstname = session?.firstname;
    const lastname = session?.lastname;
    const data = {
      first : firstname,
      last : lastname
    }
    return NextResponse.json(data);
  } catch (error) {
    console.error("Failed to get client details", error);
    return NextResponse.json(
      { error: "Failed to connect to database" },
      { status: 500 }
    );
  }
}
