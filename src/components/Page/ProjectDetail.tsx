'use client'

import SecondaryButton from '@/components/Button/SecondaryButton'
import ArrowButton from '@/components/Button/ArrowButton'
import { AnimatePresence } from 'framer-motion'
import projectServices from '@/services/project'
import Thumbnail from '@/components/Section/Project/Thumbnail'
import Description from '@/components/Section/Project/Description'
import AdaptiveView from '@/components/Section/Project/AdaptiveView'

export default function ProjectDetail({ projectId }: { projectId: string }) {
    let nextProject: Project | null | undefined
    let prevProject: Project | null | undefined

    const project: Project | null | undefined =
        projectServices.getProjectDetail(projectId)

    const projects: Project[] | null = projectServices.getAllProjects()

    if (project) {
        nextProject = projects?.find((item: Project) =>
            projects.length === project?.index
                ? item.index === 1
                : item.index > project?.index
        )
        prevProject = projects?.find((item: Project) =>
            project?.index === 1
                ? item.index === projects.length
                : item.index === project?.index - 1
        )
    }

    return (
        <>
            <section className="w-full h-fit flex justify-between items-center px-4 lg:px-12 py-6 lg:py-10 mb-12 lg:mb-16">
                <SecondaryButton
                    href={'/'}
                    className="font-semibold text-base lg:text-lg"
                >
                    Back to home
                </SecondaryButton>
                <AnimatePresence>
                    {project && (
                        <ArrowButton href={`/${nextProject?.id}`}>
                            Next project
                        </ArrowButton>
                    )}
                </AnimatePresence>
            </section>

            <AnimatePresence>
                {project && (
                    <>
                        <Thumbnail project={project} />
                        <Description project={project} />
                        <AdaptiveView project={project} />
                        <section className="w-full flex justify-between gap-6 h-fit px-4 lg:px-16 py-4 lg:py-8 mb-3">
                            <ArrowButton
                                direction="left"
                                href={`/${prevProject?.id}`}
                            >
                                Previous project
                            </ArrowButton>
                            <ArrowButton href={`/${nextProject?.id}`}>
                                Next project
                            </ArrowButton>
                        </section>
                    </>
                )}
            </AnimatePresence>
        </>
    )
}
