'use client'

import { inter, mona } from '@/app/fonts'
import ProjectCard from '@/components/Card/ProjectCard'
import { projects } from '@/constants/model'
import { useCallback, useMemo, useRef, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import Link from 'next/link'
import ArrowIcon from '@/components/Icon/ArrowIcon'

export default function Projects() {
    const projectRef = useRef<HTMLDivElement | null>(null)
    const otherProjectRef = useRef<HTMLDivElement | null>(null)
    const highlightedProjectsRef = useRef<HTMLDivElement | null>(null)
    const [activeProject, setActiveProject] = useState<number | null>(null)

    const highlightedProjects = useMemo(
        () =>
            projects.filter(
                (project: Project) => project.isHighlighted === true
            ),
        [projects]
    )

    const otherProjects = useMemo(
        () =>
            projects.filter(
                (project: Project) => project.isHighlighted === false
            ),
        [projects]
    )

    const handleMouseOver = useCallback((index: number) => {
        setActiveProject(index)
    }, [])

    return (
        <>
            {/* Project Section */}
            <section
                id="projects"
                ref={projectRef}
                className="relative w-full h-auto flex flex-col lg:flex-row lg:justify-between gap-8 lg:gap-10 py-9 lg:py-16 px-4 lg:px-20 overflow-hidden"
            >
                {/* Left Content */}
                <div className="w-full lg:w-3/12 shrink-0 flex flex-col gap-1">
                    {/* Heading Project */}
                    <h2
                        className={`text-xl lg:text-2xl font-medium text-start ${inter.className}`}
                    >
                        Projects
                    </h2>
                    {/* End Heading Project */}
                    {/* Desc Project */}
                    <span
                        className={`text-xs lg:text-sm font-medium text-stone-500 ${mona.className}`}
                    >
                        Explore the projects I&apos;ve worked on, showcasing my
                        expertise across various technologies and frameworks.
                    </span>
                    {/* End Desc Project */}
                </div>
                {/* End Left Content */}
                {/* Right Content */}
                <div className="w-full lg:w-10/12 flex h-auto flex-col gap-16 lg:gap-24">
                    <motion.div
                        ref={highlightedProjectsRef}
                        className="w-full grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-x-6 lg:gap-y-14 place-items-start z-10"
                    >
                        {highlightedProjects.map(
                            (project: Project, index: number) => (
                                <ProjectCard
                                    key={project.id}
                                    project={project}
                                    index={index}
                                />
                            )
                        )}
                    </motion.div>
                    <div
                        ref={otherProjectRef}
                        className="relative overflow-hidden flex w-full h-auto gap-4 lg:gap-4 flex-col z-0"
                    >
                        <div className="w-full items-center flex gap-2.5">
                            <span className="font-medium">Other Projects</span>
                            <div className="font-medium bg-stone-200 px-3 py-0.5 text-xs rounded-full grid place-items-center">
                                {otherProjects.length}
                            </div>
                        </div>
                        <div
                            onMouseLeave={() => setActiveProject(null)}
                            className="flex flex-col w-full z-0"
                        >
                            {otherProjects.map(
                                (project: Project, index: number) => (
                                    <motion.div
                                        key={project.id}
                                        initial={{
                                            opacity: 0,
                                        }}
                                        whileInView={{
                                            opacity: 1,
                                            transition: {
                                                delay: 0.4 + index * 0.2,
                                            },
                                        }}
                                        viewport={{
                                            amount: 'some',
                                            once: true,
                                        }}
                                        className="relative w-full h-fit border-stone-400 last:border-0 pb-4 last:pb-0 lg:last:pb-3 pt-4 lg:pt-3 border-b overflow-hidden group cursor-pointer"
                                        onMouseOver={() =>
                                            handleMouseOver(index)
                                        }
                                    >
                                        <Link
                                            href={`/${project.id}`}
                                            className="relative w-full flex gap-4"
                                        >
                                            <span className="text-sm font-medium text-stone-600 w-4/12 lg:w-2/12 shrink-0 lg:shrink-none group-hover:text-black transition-colors">
                                                {project.name}
                                            </span>
                                            <div className="w-8/12 lg:w-10/12 flex flex-col lg:flex-row gap-3 lg:gap-2 lg:justify-between group-hover:-translate-y-12 group-hover:opacity-0 transition-all duration-300">
                                                <span className="text-sm font-medium text-stone-600 w-full lg:w-6/12 shrink-0">
                                                    {project.shortDesc}
                                                </span>
                                                <span className="text-xs lg:text-sm font-medium text-stone-600 w-full lg:w-fit gap-2">
                                                    {project.tools.map(
                                                        (
                                                            tech: string,
                                                            index: number
                                                        ) =>
                                                            `${tech}${
                                                                index + 1 !==
                                                                project.tools
                                                                    .length
                                                                    ? ', '
                                                                    : '.'
                                                            }`
                                                    )}
                                                </span>
                                                <div className="w-fit inline-block text-sm font-medium text-stone-400">
                                                    <span className="inline-block lg:hidden">
                                                        20
                                                    </span>
                                                    <span className="hidden lg:inline-block">
                                                        /
                                                    </span>
                                                    {project.year}
                                                </div>
                                            </div>
                                            <div className="absolute right-0 shrink-0 flex items-center gap-3 translate-y-12 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transiton-all duration-300">
                                                <span className="text-sm font-semibold text-stone-600">
                                                    View Detail
                                                </span>
                                                <ArrowIcon />
                                            </div>
                                        </Link>
                                    </motion.div>
                                )
                            )}
                        </div>
                    </div>
                </div>
                {/* End Right Content */}
            </section>
            {/* End Project Section */}
        </>
    )
}
