'use client'

import SecondaryButton from '@/components/Button/SecondaryButton'
import ArrowButton from '@/components/Button/ArrowButton'
import { AnimatePresence } from 'framer-motion'
import projectServices from '@/services/project'
import Thumbnail from '@/components/Section/Project/Thumbnail'
import Description from '@/components/Section/Project/Description'
import AdaptiveView from '@/components/Section/Project/AdaptiveView'
import { useLocale } from '@/contexts/LocaleContext'
import localize from '@/libs/utils/localize'

const text = {
    homeButton: {
        en: 'Back to home',
        id: 'Kembali ke beranda',
    },
    nextProjectButton: {
        en: 'Next project',
        id: 'Projek selanjutnya',
    },
    previousProjectButton: {
        en: 'Previous project',
        id: 'Projek sebelumnya',
    },
}

export default function ProjectDetail({ projectId }: { projectId: string }) {
    let nextProject: Project | null | undefined
    let prevProject: Project | null | undefined

    const { locale } = useLocale()

    const project: Project | null | undefined =
        projectServices.getProjectDetail(projectId)

    const projects: Project[] | null = projectServices.getAllProjects()

    if (project && projects && projects.length > 0) {
        const currentIndex = project.index

        nextProject = projects.find(
            (item) => item.index === (currentIndex % projects.length) + 1
        )

        prevProject = projects.find(
            (item) =>
                item.index ===
                ((currentIndex - 2 + projects.length) % projects.length) + 1
        )
    }

    return (
        <>
            <section className="w-full h-fit flex justify-between items-center px-4 lg:px-12 py-6 lg:py-10 mb-12 lg:mb-16">
                <SecondaryButton
                    href={'/'}
                    className="font-semibold text-base lg:text-lg"
                >
                    {localize(text.homeButton, locale)}
                </SecondaryButton>
                <AnimatePresence>
                    {project && (
                        <ArrowButton href={`/${nextProject?.id}`}>
                            {localize(text.nextProjectButton, locale)}
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
                                {localize(text.previousProjectButton, locale)}
                            </ArrowButton>
                            <ArrowButton href={`/${nextProject?.id}`}>
                                {localize(text.nextProjectButton, locale)}
                            </ArrowButton>
                        </section>
                    </>
                )}
            </AnimatePresence>
        </>
    )
}
