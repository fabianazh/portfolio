import { NextRequest, NextResponse } from 'next/server'
import { projects } from '@/constants/model'

export async function GET(
    req: NextRequest,
    { params }: { params: { projectId: string } }
) {
    const { projectId } = params
    try {
        const project = projects.find((project) => project.id === projectId)
        return NextResponse.json({
            status: true,
            statusCode: 200,
            message: 'success',
            data: project,
        })
    } catch (error) {
        return NextResponse.json({
            status: false,
            statusCode: 500,
            message: 'Terjadi kesalahan.',
        })
    }
}
