import { motion } from 'framer-motion'
import { inter, mona } from '@/app/fonts'
import PrimaryButton from '@/components/Button/PrimaryButton'
import SecondaryButton from '@/components/Button/SecondaryButton'
import TextReveal from '@/components/Other/TextReveal'

export default function Description({ project }: { project: Project }) {
    const projectData = [
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
            {/* Description */}
            <section className="w-full h-auto flex flex-col lg:flex-row lg:justify-between gap-4 lg:gap-8 lg:gap-6 lg:pt-14 py-10 py-20 lg:mb-6 px-4 lg:px-20 z-0">
                {/* Left Content */}
                <div className="w-full lg:w-3/12 shrink-0 flex flex-col gap-1">
                    {/* Heading Service */}
                    <h2
                        className={`text-xl lg:text-xl font-medium text-start ${inter.className}`}
                    >
                        About the project
                    </h2>
                    {/* End Heading Service */}
                </div>
                {/* End Left Content */}
                {/* Right Content */}
                <div className="w-full lg:w-9/12 gap-1.5 lg:gap-3 flex flex-col">
                    {/* Description */}
                    <TextReveal
                        className={`text-base font-medium ${mona.className}`}
                        text={`${project?.desc}`}
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
                                    {data.title}
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
                            <PrimaryButton
                                href={`${project?.projectLink}`}
                                className="text-xs lg:text-sm bg-black text-white"
                                as="link"
                            >
                                View website
                            </PrimaryButton>
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
                            <SecondaryButton
                                href={`${project?.githubLink}`}
                                className="text-xs lg:text-sm"
                            >
                                See on github
                            </SecondaryButton>
                        </motion.div>
                    </div>
                    {/* End Buttons */}
                </div>
                {/* End Right Content */}
            </section>
            {/* Description */}
        </>
    )
}
