import ScrollButton from '@/components/Button/ScrollButton'
import ProjectDetail from '@/components/Section/Project/ProjectDetail'
import projectServices from '@/services/project'

export async function generateMetadata({
    params,
}: {
    params: {
        projectId: string
    }
}) {
    const { projectId } = params
    try {
        const project: Project | undefined | null =
            projectServices.getProjectDetail(projectId)

        if (project === undefined) {
            return {
                title: 'Project not found.',
                description:
                    'The project you are looking for may have been removed or is no longer available. Please check other projects in the portfolio.',
            }
        }
        return {
            title: `${project?.name} | Fabian Azhar's Portfolio`,
            description: project?.desc,
            images: [project?.thumbnail, project?.photos],
        }
    } catch (error) {
        return {
            title: 'Project not found.',
            description:
                'The project you are looking for may have been removed or is no longer available. Please check other projects in the portfolio.',
        }
    }
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
            <main>
                <ProjectDetail projectId={projectId} />
            </main>
        </>
    )
}
