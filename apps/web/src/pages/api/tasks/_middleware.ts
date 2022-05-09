import type { NextApiRequest } from 'next'
import { getToken } from "next-auth/jwt"
import { NextResponse } from "next/server"

export async function middleware(req: NextApiRequest) {
    const session = await getToken({ req, secret: process.env.JWT_SECRET })
    const url = req.url as string

    if (!session) return NextResponse.redirect("/login")

    if (url.includes("/login") && session) return NextResponse.redirect("/")

    return NextResponse.next()
}