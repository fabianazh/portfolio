import { NextRequest, NextResponse } from 'next/server'
import { projects } from '@/constants/model'

export async function GET(req: NextRequest) {
    try {
        return NextResponse.json({
            status: true,
            statusCode: 200,
            message: 'success',
            data: projects,
        })
    } catch (error) {
        return NextResponse.json({
            status: false,
            statusCode: 500,
            message: 'Terjadi kesalahan.',
        })
    }
}
