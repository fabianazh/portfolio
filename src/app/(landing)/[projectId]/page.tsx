import { projects } from '@/constants/model'

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
    return (
        <>
            <div>{projectId}</div>
        </>
    )
}
