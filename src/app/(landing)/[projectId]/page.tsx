import { projects } from '@/constants/model'
import ScrollButton from '@/components/Button/ScrollButton'
import SecondaryButton from '@/components/Button/SecondaryButton'
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
            <section className="w-full h-fit flex px-4 lg:px-12 py-6 lg:py-10 mb-12 lg:mb-16">
                <SecondaryButton
                    href={'/'}
                    className="font-semibold text-base lg:text-lg"
                >
                    Back to home
                </SecondaryButton>
            </section>
            <ProjectDetail projectId={projectId} />
        </>
    )
}
