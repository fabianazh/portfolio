'use client'

import PrimaryButton from '@/components/Button/PrimaryButton'
import SecondaryButton from '@/components/Button/SecondaryButton'
import { FaArrowRight } from 'react-icons/fa'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import { urbanist } from '@/app/fonts'
import Link from 'next/link'
import { projects } from '@/constants/model'

export default function ProjectDetail({ projectId }: { projectId: string }) {
    let nextProject: Project | null | undefined

    const project = projects.find(
        (project: Project) => project.id === projectId
    )

    if (project) {
        nextProject = projects.find((nextProject: Project) =>
            projects.length === project?.index
                ? nextProject.index === 1
                : nextProject.index > project?.index
        )
    }

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
            <section className="w-full flex flex-col gap-3 lg:gap-6 py-0.5 h-auto">
                <div className="w-full px-4 lg:px-12 relative flex h-auto justify-between lg:gap-12 items-end">
                    <span
                        className={`font-semibold text-4xl lg:text-6xl ${urbanist.className}`}
                    >
                        {project?.name}
                    </span>
                    <span className="font-medium text-2xl lg:text-4xl">
                        /{project?.year}
                    </span>
                </div>
                <AnimatePresence>
                    {project !== null && (
                        <>
                            <div className="w-full h-fit relative overflow-hidden">
                                <motion.div
                                    variants={{
                                        initial: {
                                            rotate: '-3deg',
                                            y: '0%',
                                        },
                                        enter: {
                                            y: '-100%',
                                            rotate: '0deg',
                                            transition: {
                                                y: {
                                                    duration: 0.5,
                                                },
                                                rotate: {
                                                    delay: 0.3,
                                                    duration: 0.6,
                                                    ease: [0.4, 0, 0.2, 1],
                                                },
                                            },
                                        },
                                    }}
                                    animate="enter"
                                    initial="initial"
                                    className="absolute w-[200vw] h-2/3 -left-1/2 bg-Gray-200"
                                ></motion.div>
                                <Image
                                    src={`${project?.thumbnail}`}
                                    alt={`${project?.name}`}
                                    width={900}
                                    height={500}
                                    className="w-full h-fit"
                                />
                            </div>

                            <div className="w-full flex flex-col gap-8 py-8 lg:py-16 px-4 lg:px-60">
                                <div className="w-full flex flex-col">
                                    <span className="text-lg lg:text-3xl font-medium">
                                        {project?.desc}
                                    </span>
                                </div>
                                <div className="w-full flex flex-col">
                                    {projectData.map((data, index) => (
                                        <div
                                            key={index}
                                            className="w-full border-b border-stone-300 font-medium text-stone-500 flex gap-7 lg:gap-4 py-4 text-sm lg:text-base"
                                        >
                                            <span className="block w-3/12 shrink-0">
                                                {data.title}
                                            </span>
                                            <span>{data.content}</span>
                                        </div>
                                    ))}
                                </div>
                                <div className="w-full flex flex-col lg:flex-row items-center gap-4 lg:gap-8 py-0 lg:py-4">
                                    <PrimaryButton
                                        href={`${project?.projectLink}`}
                                        className="text-xs lg:text-sm"
                                    >
                                        View website
                                    </PrimaryButton>
                                    <SecondaryButton
                                        href={`${project?.githubLink}`}
                                        className="text-xs lg:text-sm"
                                    >
                                        See on github
                                    </SecondaryButton>
                                </div>
                            </div>
                            <div className="w-full h-fit py-4 mb-8 lg:mb-12">
                                <Image
                                    src={`${project?.thumbnail}`}
                                    alt={`${project?.name}`}
                                    width={900}
                                    height={500}
                                    className="w-full h-fit"
                                />
                            </div>
                        </>
                    )}
                </AnimatePresence>

                <div className="w-full flex justify-end h-fit px-4 lg:px-12 py-4 lg:py-8">
                    <Link
                        href={`/${nextProject?.id}`}
                        className="flex gap-2 font-semibold items-center"
                    >
                        Next project <FaArrowRight />
                    </Link>
                </div>
            </section>
        </>
    )
}
