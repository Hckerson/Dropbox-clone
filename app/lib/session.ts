import 'server-only'
import { cookies } from 'next/headers'
import { SignJWT, jwtVerify } from 'jose'
import { neon } from '@neondatabase/serverless'
import { redirect } from 'next/navigation'
const secretKey = process.env.SESSION_SECRET
const encodedKey = new TextEncoder().encode(secretKey)
const sql = neon(`${process.env.DATABASE_URL}`)
const cookieStore = await cookies()
export async function encrypt(payload : any) {
    return new SignJWT(payload)
    .setProtectedHeader({alg : 'HS256'})
    .setIssuedAt()
    .setExpirationTime('1d')
    .sign(encodedKey)
}   

export async function decrypt(session: string | undefined = '') {
    try {
        const {payload} = await jwtVerify(session, encodedKey, {algorithms : ['HS256']})
        return payload
    } catch (error) {
        console.error('Failed to verify session')
    }
}

// export async function createSession(userId:string) {
//     const expiresAt = new Date(Date.now() +  1 * 24 * 60 * 60 * 1000)
//     const session = await encrypt({userId, expiresAt})
//     cookieStore.set('session', session, {
//         httpOnly : true,
//         secure : true,
//         expires : expiresAt,
//         sameSite : 'lax',
//         path : '/'
//     })
// }

/*secure database session storage
*/ 
export async function createSession(userId : string){
    const expiresAt = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000)
    const data = await sql(`
        INSERT INTO sessions (user_id, expires_at)
        VALUES ($1, $2) RETURNING * `, [userId, expiresAt])

    const sessionId = data[0].user_id
    const session = await encrypt({sessionId, expiresAt} )
    const cookieStore = await cookies()
    cookieStore.set('session', session, {
      httpOnly: true,
      secure: true,
      expires: expiresAt,
      sameSite: 'lax',
      path: '/',
    })
    
}
export async function updateSession() {
    const session = (await cookies()).get('session')?.value
    const payload  = await decrypt(session)
    if (!session || !payload){
        return null
    }
    const expires = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000)
 
    const cookieStore = await cookies()
    cookieStore.set('session', session, {
      httpOnly: true,
      secure: true,
      expires: expires,
      sameSite: 'lax',
      path: '/',
    })
}

export async function deleteSession() {
    const cookieStore = await cookies()
    cookieStore.delete('session')
}

export async function logOut() {
    deleteSession()
    redirect('/login')
}