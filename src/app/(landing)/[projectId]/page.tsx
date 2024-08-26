import ScrollButton from '@/components/Button/ScrollButton'
import ProjectDetail from '@/components/Section/Project/ProjectDetail'
import projectServices from '@/services/project'

export async function generateStaticParams() {
    // const posts = await fetch('https://.../posts').then((res) => res.json())
    const projects = projectServices.getAllProjects()

    return projects.map((project: Project) => ({
        projectId: project.id,
    }))
}

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
                openGraph: {
                    title: 'Project not found.',
                    description:
                        'The project you are looking for may have been removed or is no longer available. Please check other projects in the portfolio.',
                    images: [],
                },
            }
        }
        return {
            title: `${project?.name} | Fabian Azhar's Projects`,
            description: project?.desc,
            openGraph: {
                title: `${project.name} | Fabian Azhar's Projects`,
                description: project.desc,
                images: project.photos
                    ? [project.thumbnail, ...project.photos]
                    : [project.thumbnail],
            },
            structuredData: {
                '@context': 'https://schema.org',
                '@type': 'CreativeWork',
                name: project?.name,
                description: project?.desc,
                image: project?.thumbnail,
                url: `${process.env.NEXT_PUBLIC_BASE_URL}/${projectId}`,
                datePublished: project?.created_at,
                author: {
                    '@type': 'Person',
                    name: 'Fabian Azhar',
                },
            },
        }
    } catch (error) {
        return {
            title: 'Project not found.',
            description:
                'The project you are looking for may have been removed or is no longer available. Please check other projects in the portfolio.',
            openGraph: {
                title: 'Project not found.',
                description:
                    'The project you are looking for may have been removed or is no longer available. Please check other projects in the portfolio.',
                images: [],
            },
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
