import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'
import { ratelimit } from '@/libs/utils/ratelimit'

export async function POST(request: NextRequest) {
    const ip = request.headers.get('x-forwarded-for') ?? 'anonymous'

    const { success } = await ratelimit.limit(ip)

    if (!success) {
        return NextResponse.json(
            {
                status: 'error',
                message: 'Too many requests. Please try again later.',
            },
            { status: 429 },
        )
    }

    const { email, name, message } = await request.json()

    if (!email || !name || !message) {
        return NextResponse.json(
            { status: 'error', message: 'Invalid input' },
            { status: 400 },
        )
    }

    const transport = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.MY_EMAIL,
            pass: process.env.MY_PASSWORD,
        },
    })

    try {
        await transport.sendMail({
            from: process.env.MY_EMAIL,
            to: process.env.MY_EMAIL,
            subject: `Message from ${name} (${email})`,
            text: message,
        })

        return NextResponse.json({
            status: 'success',
            message: 'Email sent successfully!',
        })
    } catch (err) {
        return NextResponse.json(
            {
                status: 'error',
                message: 'Email failed to send!',
            },
            { status: 500 },
        )
    }
}
