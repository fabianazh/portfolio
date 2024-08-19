'use client'

import React from 'react'
import PrimaryButton from '@/components/Button/PrimaryButton'
import SecondaryButton from '@/components/Button/SecondaryButton'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import { urbanist } from '@/app/fonts'
import Link from 'next/link'
import { projects } from '@/constants/model'
import ArrowIcon from '@/components/Icon/ArrowIcon'

export default function ProjectDetail({ projectId }: { projectId: string }) {
    let nextProject: Project | null | undefined
    let prevProject: Project | null | undefined

    const project = projects.find(
        (project: Project) => project.id === projectId
    )

    if (project) {
        nextProject = projects.find((item: Project) =>
            projects.length === project?.index
                ? item.index === 1
                : item.index > project?.index
        )
        prevProject = projects.find((item: Project) =>
            project?.index === 1
                ? item.index === projects.length
                : item.index === project?.index - 1
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
            <section className="w-full h-fit flex justify-between items-center px-4 lg:px-12 py-6 lg:py-10 mb-12 lg:mb-16">
                <SecondaryButton
                    href={'/'}
                    className="font-semibold text-base lg:text-lg"
                >
                    Back to home
                </SecondaryButton>
                <Link
                    href={`/${nextProject?.id}`}
                    className="text-xs lg:text-sm flex gap-2 font-semibold items-center"
                >
                    <span>Next project</span>
                    <ArrowIcon />
                </Link>
            </section>
            <section className="w-full flex flex-col gap-3 lg:gap-8 py-0.5 h-auto">
                <div className="w-full px-4 lg:px-12 relative flex h-auto justify-between lg:gap-12 items-end">
                    <motion.span
                        variants={{
                            initial: {
                                opacity: 0,
                                y: '10px',
                            },
                            enter: {
                                y: '0px',
                                opacity: 1,
                                transition: {
                                    delay: 0.3,
                                    duration: 0.5,
                                },
                            },
                        }}
                        animate="enter"
                        initial="initial"
                        className={`font-semibold text-4xl lg:text-6xl ${urbanist.className}`}
                    >
                        {project?.name}
                    </motion.span>
                    <motion.span
                        variants={{
                            initial: {
                                opacity: 0,
                                y: '10px',
                            },
                            enter: {
                                y: '0px',
                                opacity: 1,
                                transition: {
                                    delay: 0.35,
                                    duration: 0.6,
                                },
                            },
                        }}
                        animate="enter"
                        initial="initial"
                        className="font-medium text-2xl lg:text-4xl"
                    >
                        /{project?.year}
                    </motion.span>
                </div>
                <AnimatePresence>
                    {project !== null && (
                        <>
                            <div className="w-full h-fit relative overflow-hidden z-0">
                                <motion.div
                                    variants={{
                                        initial: {
                                            rotate: '-3deg',
                                            y: '-30%',
                                        },
                                        enter: {
                                            y: '-100%',
                                            rotate: '0deg',
                                            transition: {
                                                y: {
                                                    duration: 0.7,
                                                },
                                                rotate: {
                                                    delay: 0.4,
                                                    duration: 0.6,
                                                },
                                            },
                                        },
                                    }}
                                    animate="enter"
                                    initial="initial"
                                    className="absolute w-[200vw] h-full -left-1/2 bg-Gray-200 z-10"
                                ></motion.div>
                                <motion.div
                                    variants={{
                                        initial: {
                                            opacity: 0.3,
                                        },
                                        enter: {
                                            opacity: 1,
                                            transition: {
                                                duration: 0.7,
                                            },
                                        },
                                    }}
                                    animate="enter"
                                    initial="initial"
                                    className="w-full fit z-0"
                                >
                                    <Image
                                        src={`${project?.thumbnail}`}
                                        alt={`${project?.name}`}
                                        width={900}
                                        height={500}
                                        className="w-full h-fit"
                                    />
                                </motion.div>
                            </div>

                            <div className="w-full flex flex-col gap-8 py-8 lg:py-16 px-4 lg:px-60">
                                <div className="w-full flex flex-col">
                                    <motion.span
                                        variants={{
                                            initial: {
                                                opacity: 0,
                                                y: '6px',
                                            },
                                            enter: {
                                                y: '0px',
                                                opacity: 1,
                                                transition: {
                                                    delay: 0.3,
                                                    duration: 0.5,
                                                },
                                            },
                                        }}
                                        animate="enter"
                                        initial="initial"
                                        className="text-lg lg:text-3xl font-medium"
                                    >
                                        {project?.desc}
                                    </motion.span>
                                </div>
                                <div className="w-full flex flex-col">
                                    {projectData.map((data, index: number) => (
                                        <motion.div
                                            key={index}
                                            variants={{
                                                initial: {
                                                    opacity: 0,
                                                },
                                                enter: (index: number) => ({
                                                    opacity: 1,
                                                    transition: {
                                                        delay:
                                                            0.4 + index * 0.1,
                                                    },
                                                }),
                                            }}
                                            custom={index}
                                            animate="enter"
                                            initial="initial"
                                            className="w-full border-b border-stone-300 font-medium text-stone-500 flex gap-7 lg:gap-4 py-4 text-sm lg:text-base"
                                        >
                                            <span className="block w-3/12 shrink-0">
                                                {data.title}
                                            </span>
                                            <span>{data.content}</span>
                                        </motion.div>
                                    ))}
                                </div>
                                <motion.div
                                    variants={{
                                        initial: {
                                            opacity: 0,
                                        },
                                        enter: {
                                            opacity: 1,
                                            transition: {
                                                delay: 0.5 + 7 * 0.1,
                                            },
                                        },
                                    }}
                                    animate="enter"
                                    initial="initial"
                                    className="w-full flex flex-col lg:flex-row items-center gap-4 lg:gap-8 py-0 lg:py-4"
                                >
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
                                </motion.div>
                            </div>
                            <div className="w-full h-fit relative overflow-hidden z-0 py-4 mb-4 lg:mb-8">
                                <motion.div
                                    variants={{
                                        initial: {
                                            rotate: '-3deg',
                                            y: '-30%',
                                        },
                                        enter: {
                                            y: '-100%',
                                            rotate: '0deg',
                                            transition: {
                                                y: {
                                                    duration: 0.7,
                                                },
                                                rotate: {
                                                    delay: 0.4,
                                                    duration: 0.6,
                                                },
                                            },
                                        },
                                    }}
                                    animate="enter"
                                    initial="initial"
                                    className="absolute w-[200vw] h-full -left-1/2 bg-Gray-200 z-10"
                                ></motion.div>
                                <motion.div
                                    variants={{
                                        initial: {
                                            opacity: 0.3,
                                        },
                                        enter: {
                                            opacity: 1,
                                            transition: {
                                                duration: 0.7,
                                            },
                                        },
                                    }}
                                    animate="enter"
                                    initial="initial"
                                    className="w-full fit z-0"
                                >
                                    <Image
                                        src={`${project?.thumbnail}`}
                                        alt={`${project?.name}`}
                                        width={900}
                                        height={500}
                                        className="w-full h-fit"
                                    />
                                </motion.div>
                            </div>
                        </>
                    )}
                </AnimatePresence>
            </section>

            <section className="w-full flex justify-between gap-6 h-fit px-4 lg:px-16 py-4 lg:py-8 mb-3">
                <Link
                    href={`/${prevProject?.id}`}
                    className="text-xs lg:text-sm flex gap-2 font-semibold items-center w-fit"
                >
                    <ArrowIcon className="rotate-180" />
                    <span>Previous project</span>
                </Link>
                <Link
                    href={`/${nextProject?.id}`}
                    className="text-xs lg:text-sm flex gap-2 font-semibold items-center w-fit"
                >
                    <span>Next project</span>
                    <ArrowIcon />
                </Link>
            </section>
        </>
    )
}
