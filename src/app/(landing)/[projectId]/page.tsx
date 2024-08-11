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

    const projectData = [
        {
            title: 'Client',
            content: project?.client,
        },
        {
            title: 'Year',
            content: `20${project?.year}`,
        },
        {
            title: 'Role',
            content: project?.role,
        },
        {
            title: 'Collaborators',
            content: project?.collaborators.map(
                (collaborator: string) => collaborator
            ),
        },
        {
            title: 'Tools',
            content: project?.tools.map((tool: string, index: number) =>
                index + 1 == project.tools?.length ? `${tool}.` : `${tool}, `
            ),
        },
    ]

    return (
        <>
            <section className="w-full h-fit flex px-6 lg:px-12 py-6 lg:py-10">
                <Link href={'/'} className="font-medium lg:text-lg">
                    Back to home
                </Link>
            </section>
            <section className="w-full flex flex-col gap-3 lg:gap-6 py-0.5 h-auto">
                <div className="w-full px-6 lg:px-12 relative flex h-auto justify-between lg:gap-12 items-end">
                    <span
                        className={`font-semibold text-4xl lg:text-6xl ${urbanist.className}`}
                    >
                        {project?.name}
                    </span>
                    <span className="font-medium text-2xl lg:text-4xl">
                        /{project?.year}
                    </span>
                </div>
                <div className="w-full h-fit">
                    <Image
                        src={`/img/projects/${project?.thumbnail}`}
                        alt={`${project?.name}`}
                        width={900}
                        height={500}
                        className="w-full h-fit"
                    />
                </div>
                <div className="w-full flex flex-col gap-8 py-8 lg:py-16 px-6 lg:px-60">
                    <div className="w-full flex flex-col">
                        <span className="text-lg lg:text-2xl font-medium">
                            {project?.desc}
                        </span>
                    </div>
                    <div className="w-full flex flex-col">
                        {projectData.map((data, index) => (
                            <div
                                key={index}
                                className="w-full border-b border-stone-300 font-medium  text-stone-500 flex gap-4 py-4 text-base lg:text-base"
                            >
                                <span className="block w-3/12 shrink-0">
                                    {data.title}
                                </span>
                                <span>{data.content}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}
