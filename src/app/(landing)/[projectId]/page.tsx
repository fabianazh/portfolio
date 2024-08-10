import { urbanist } from '@/app/fonts'
import { projects } from '@/constants/model'
import Image from 'next/image'
import Link from 'next/link'

export async function generateStaticParams() {
    // const posts = await fetch('https://.../posts').then((res) => res.json())

    return projects.map((project: Project) => ({
        projectId: project.id,
    }))
}

export default function ProjectDetailPage({
    params,
}: {
    params: { projectId: string }
}) {
    const { projectId } = params

    const project = projects.find((project) => project.id === projectId)
    return (
        <>
            <section className="w-full h-fit flex px-6 lg:px-16 py-4 lg:py-10">
                <Link href={'/'} className="font-medium lg:text-lg">
                    Back to home
                </Link>
            </section>
            <section className="w-full px-6 lg:px-16 mb-16 flex flex-col gap-4 lg:gap-6 h-auto">
                <Image
                    src={`/img/projects/${project?.src}`}
                    alt={`${project?.name}`}
                    width={900}
                    height={500}
                    className="w-full h-fit border"
                />
                <div className="w-full flex flex-col lg:flex-row h-auto justify-between gap-8 lg:gap-12">
                    <div className="w-full lg:w-4/12 h-fit">
                        <span
                            className={`font-semibold text-3xl lg:text-4xl ${urbanist.className}`}
                        >
                            {project?.name}
                        </span>
                    </div>
                    <div className="w-full flex flex-col lg:w-8/12 shrink-0">
                        <span className="font-medium text-xs lg:text-sm">
                            {project?.desc}
                        </span>
                        <span className="font-medium text-xs lg:text-sm">
                            {project?.desc}
                        </span>
                    </div>
                </div>
            </section>
        </>
    )
}
