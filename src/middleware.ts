import { NextResponse } from 'next/server'

export function middleware(req: Request) {
    const res = NextResponse.next()

    res.headers.set('Access-Control-Allow-Origin', '*')
    res.headers.set(
        'Access-Control-Allow-Methods',
        'GET, POST, PUT, DELETE, OPTIONS'
    )
    res.headers.set(
        'Access-Control-Allow-Headers',
        'Content-Type, Authorization, Expires, Cache-Control'
    )

    if (req.method === 'OPTIONS') {
        return new NextResponse(null, { headers: res.headers })
    }

    return res
}

export const config = {
    matcher: '/api/:path*',
}
