import { projects } from '@/constants/model'
import ScrollButton from '@/components/Button/ScrollButton'
import ProjectDetail from '@/components/Section/Project/ProjectDetail'

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
            <ScrollButton />
            <ProjectDetail projectId={projectId} />
        </>
    )
}
