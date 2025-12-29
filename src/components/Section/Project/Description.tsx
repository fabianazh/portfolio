'use client'

import { motion } from 'framer-motion'
import { inter, mona } from '@/app/fonts'
import PrimaryButton from '@/components/Button/PrimaryButton'
import SecondaryButton from '@/components/Button/SecondaryButton'
import TextReveal from '@/components/Other/TextReveal'
import { useLocale } from '@/contexts/LocaleContext'
import localize from '@/libs/utils/localize'
import { useEffect, useState } from 'react'
import { disableScroll, enableScroll } from '@/libs/utils/controllScroll'
import NotAvailableModal from '@/components/Modal/NotAvailableModal'
import { AnimatePresence } from 'framer-motion'
import { IoChevronForward } from 'react-icons/io5'

const text = {
    title: {
        en: 'About the project',
        id: 'Tentang projek',
    },
    webButton: {
        en: 'View website',
        id: 'Lihat website',
    },
    githubButton: {
        en: 'See on github',
        id: 'Lihat di github',
    },
    webNotAvailable: {
        title: {
            en: 'Sorry, Website is not available',
            id: 'Maaf, Website tidak tersedia',
        },
        desc: {
            en: 'This project is currently not available on the web',
            id: 'Projek ini sedang tidak tersedia di web',
        },
    },
    githubNotAvailable: {
        title: {
            en: 'Sorry, GitHub repository is not available',
            id: 'Maaf, repositori GitHub tidak tersedia',
        },
        desc: {
            en: 'The GitHub repository for this project is currently not available.',
            id: 'Repositori GitHub untuk projek ini saat ini tidak tersedia.',
        },
    },
}

export default function Description({ project }: { project: Project }) {
    const [modal, setModal] = useState<{
        isOpen: boolean
        data: {
            title: { en: string; id: string }
            desc: { en: string; id: string }
        } | null
    }>({ isOpen: false, data: null })

    const { locale } = useLocale()

    useEffect(() => {
        modal.isOpen === true ? disableScroll() : enableScroll()
    }, [modal])

    const projectData = [
        {
            title: { en: 'Year', id: 'Tahun' },
            content: `20${project?.year}`,
        },
        {
            title: { en: 'Role', id: 'Peran' },
            content: project?.role,
        },
        {
            title: { en: 'Collaborators', id: 'Kolaborator' },
            content: project?.collaborators.map(
                (collaborator: string) => collaborator
            ),
        },
        {
            title: { en: 'Tools', id: 'Alat' },
            content: project?.tools.map((tool: string, index: number) =>
                index + 1 == project.tools?.length ? `${tool}.` : `${tool}, `
            ),
        },
    ]

    return (
        <>
            {/* Description */}
            <section className="w-full h-auto flex flex-col lg:flex-row lg:justify-between gap-4 lg:gap-8 lg:gap-6 lg:pt-14 py-10 py-20 lg:mb-6 px-4 lg:px-20 z-0">
                {/* Left Content */}
                <div className="w-full lg:w-3/12 shrink-0 flex flex-col gap-1">
                    {/* Heading Service */}
                    <h2
                        className={`text-xl lg:text-xl font-medium text-start ${inter.className}`}
                    >
                        {localize(text.title, locale)}
                    </h2>
                    {/* End Heading Service */}
                </div>
                {/* End Left Content */}
                {/* Right Content */}
                <div className="w-full lg:w-9/12 gap-6 lg:gap-3 flex flex-col">
                    {/* Description */}
                    <TextReveal
                        className={`text-base font-medium ${mona.className}`}
                        text={`${localize(project?.desc, locale)}`}
                    />
                    {/* End Description */}
                    {/* Data Container */}
                    <div className="w-full flex flex-col lg:flex-row lg:gap-6 lg:justify-between">
                        {projectData.map((data, index: number) => (
                            <motion.div
                                key={index}
                                initial={{
                                    opacity: 0,
                                }}
                                whileInView={{
                                    opacity: 1,
                                    transition: {
                                        delay: 0.4 + index * 0.5,
                                    },
                                }}
                                viewport={{
                                    amount: 'some',
                                    once: true,
                                }}
                                className="w-full flex flex-col flex py-4 border-b-2 lg:border-none"
                            >
                                <span
                                    className={
                                        'text-base w-3/12 shrink-0 font-medium lg:font-semibold'
                                    }
                                >
                                    {localize(data.title, locale)}
                                </span>
                                <span
                                    className={`text-sm font-medium text-stone-500 ${mona.className}`}
                                >
                                    {data.content}
                                </span>
                            </motion.div>
                        ))}
                    </div>
                    {/* End Data Container */}
                    {/* Buttons */}
                    <div className="w-full flex flex-col lg:flex-row items-center gap-4 lg:gap-8 py-8 lg:py-2">
                        <motion.div
                            initial={{
                                opacity: 0,
                            }}
                            whileInView={{
                                opacity: 1,
                                transition: {
                                    delay: 0.5 + 0 * 0.1,
                                },
                            }}
                            viewport={{
                                amount: 'some',
                                once: true,
                            }}
                            className="w-fit h-fit inline-block"
                        >
                            {project?.projectLink !== '#' ? (
                                <PrimaryButton
                                    href={`${project?.projectLink}`}
                                    className="text-xs lg:text-sm bg-black text-white"
                                    as="link"
                                >
                                    {localize(text.webButton, locale)}
                                </PrimaryButton>
                            ) : (
                                <button
                                    onClick={() =>
                                        setModal({
                                            isOpen: true,
                                            data: { ...text.webNotAvailable },
                                        })
                                    }
                                    className={`grid place-items-center transition-colors duration-500 gap-1 grid-flow-col px-5 py-1.5 rounded-full group hover:opacity-80 bg-black text-white text-xs lg:text-sm cursor-pointer`}
                                >
                                    {localize(text.githubButton, locale)}
                                    <IoChevronForward
                                        className={`group-hover:translate-x-0.5 transition-transform duration-300`}
                                    />
                                </button>
                            )}
                        </motion.div>
                        <motion.div
                            initial={{
                                opacity: 0,
                            }}
                            whileInView={{
                                opacity: 1,
                                transition: {
                                    delay: 0.5 + 1 * 0.1,
                                },
                            }}
                            viewport={{
                                amount: 'some',
                                once: true,
                            }}
                            className="w-fit h-fit inline-block"
                        >
                            {project?.githubLink !== '#' ? (
                                <SecondaryButton
                                    href={`${project?.githubLink}`}
                                    className="text-xs lg:text-sm"
                                >
                                    {localize(text.githubButton, locale)}
                                </SecondaryButton>
                            ) : (
                                <button
                                    onClick={() =>
                                        setModal({
                                            isOpen: true,
                                            data: {
                                                ...text.githubNotAvailable,
                                            },
                                        })
                                    }
                                    className={`relative w-fit inline-block font-medium group text-xs lg:text-sm cursor-pointer`}
                                >
                                    {localize(text.githubButton, locale)}
                                    <div className="absolute w-full h-[2px] scale-x-0 bottom-0 left-0 bg-stone-600 origin-bottom-right transition-transform duration-300 group-hover:scale-x-100 group-hover:origin-bottom-left" />
                                </button>
                            )}
                        </motion.div>
                    </div>
                    {/* End Buttons */}
                </div>
                {/* End Right Content */}
                {/* Modal */}
                <AnimatePresence>
                    {modal.isOpen === true && (
                        <NotAvailableModal setModal={setModal} modal={modal} />
                    )}
                </AnimatePresence>
                {/* End Modal */}
            </section>
            {/* Description */}
        </>
    )
}
