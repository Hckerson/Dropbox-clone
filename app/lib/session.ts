import "server-only";
import { cookies } from "next/headers";
import { JWTPayload, SignJWT, jwtVerify } from "jose";
import { neon } from "@neondatabase/serverless";
import { redirect } from "next/navigation";
const secretKey = process.env.SESSION_SECRET;
const encodedKey = new TextEncoder().encode(secretKey);
const sql = neon(`${process.env.DATABASE_URL}`);

if (!secretKey) {
  throw new Error("SESSION KEY NOT DEFINED");
}
export async function encrypt(payload: JWTPayload | undefined) {
  return new SignJWT(payload)
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setExpirationTime("2d")
    .sign(encodedKey);
}

export async function decrypt(session: string | undefined = "") {
  try {
    const { payload } = await jwtVerify(session, encodedKey, {
      algorithms: ["HS256"],
      clockTolerance: 15,
    });
    const result = await sql(
      `SELECT * FROM sessions WHERE id = $1 AND expires_at > NOW()`,
      [payload.sessionId]
    );
    if (result.length === 0) {
      return { error: "INVALID_SESSION" };
    }
    return payload;
  } catch (error) {
    console.error("Failed to verify session", error);
    if (error instanceof Error && error.message.includes("fetch failed")) {
      return { error: "DATABASE_ERROR" };
    }
    return { error: "INVALID_SESSION" };
  }
}

export async function createSession(userId: string) {
  const expiresAt = new Date(Date.now() + 2 * 24 * 60 * 60 * 1000);
  const data = await sql(
    `
        INSERT INTO sessions(user_id, expires_at)
        VALUES ($1, $2) RETURNING *`,
    [userId, expiresAt]
  );
  const details = await sql(`SELECT role, firstname, lastname FROM users WHERE id = $1`, [userId]);
  const {role, firstname, lastname} = details[0];
  const { id: sessionId, user_id, } = data[0];
  const session = await encrypt({ sessionId, user_id, role, expiresAt, firstname, lastname });
  const cookieStore = await cookies();
  cookieStore.set("session", session, {
    httpOnly: true,
    secure: false,
    expires: expiresAt,
    sameSite: "lax",
    path: "/",
  });
}

export async function updateSession() {
  const session = (await cookies()).get("session")?.value;
  const payload = await decrypt(session);
  if (!session || !payload) {
    console.error("Session is invalid or expired");
    return null;
  }
  const expires = new Date(Date.now() + 2 * 24 * 60 * 60 * 1000);
  const newSession = await encrypt({
    sessionId: payload.sessionId,
    user_id: payload.user_id,
    role: payload.role,
    expiresAt: expires,
    firstname : payload.firstname,
    lastname : payload.lastname
  });
  await sql(`UPDATE sessions SET expires_at = $1 WHERE id = $2`, [
    expires,
    payload.sessionId,
  ]);
  const cookieStore = await cookies();
  cookieStore.set("session", newSession, {
    httpOnly: true,
    secure: false,
    expires: expires,
    sameSite: "lax",
    path: "/",
  });
}

export async function deleteSession() {
  const cookieStore = await cookies();
  const session = cookieStore.get("session")?.value;
  const payload = await decrypt(session);
  if (!session || !payload) {
    console.error("Session is invalid or expired");
    return;
  }
  await sql("DELETE FROM sessions WHERE id = $1", [payload?.sessionId]);
  cookieStore.delete("session");
}

export async function logOut() {
  await deleteSession();
  redirect("/login");
}
