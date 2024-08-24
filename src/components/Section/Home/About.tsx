'use client'

import { mona, inter } from '@/app/fonts'
import AnimatedNumber from '@/components/Other/AnimateNumber'
import { motion } from 'framer-motion'
import TextReveal from '@/components/Other/TextReveal'

export default function About() {
    return (
        <>
            {/* About Section */}
            <section
                id="about"
                className="w-full h-auto flex flex-col lg:flex-row lg:justify-between gap-6 py-8 lg:py-16 lg:gap-10 pb-16 lg:pb-24 px-4 lg:px-20 z-0"
            >
                {/* Left Content */}
                <div className="w-full lg:w-3/12 shrink-0 flex flex-col gap-1">
                    {/* Heading About */}
                    <h2
                        className={`text-xl lg:text-2xl font-medium text-start ${inter.className}`}
                    >
                        About Me
                    </h2>
                    {/* End Heading About */}
                </div>
                {/* End Left Content */}
                {/* Right Content */}
                <div className="w-full lg:w-9/12 flex h-auto flex-col gap-2 lg:gap-4 z-10">
                    <TextReveal
                        text="I am passionate about web development, with a strong interest in both front-end and back-end technologies. I'm committed to continuous learning and staying updated with industry trends."
                        className={`text-sm lg:text-lg font-medium text-black ${mona.className}`}
                    />
                    <div className="w-full grid grid-rows-2 lg:grid-rows-1 lg:grid-cols-2 gap-2 lg:gap-4">
                        <TextReveal
                            text="I graduated with a degree in Software Engineering, where I developed strong skills in design and problem-solving. My education provided a solid foundation in both technical and creative aspects of development."
                            className={`text-sm lg:text-sm font-medium text-stone-500 ${mona.className}`}
                            index={0.8}
                        />
                        <TextReveal
                            text="My background in software engineering allows me to approach projects with a well-rounded perspective. I focus on finding efficient solutions that balance technical precision with creativity."
                            className={`text-sm lg:text-sm font-medium text-stone-500 ${mona.className}`}
                            index={1.8}
                        />
                    </div>
                    <div className="w-full flex items-center gap-16 py-1 lg:py-4">
                        <div className="w-fit flex flex-col">
                            <span
                                className={`text-3xl lg:text-4xl font-medium text-black ${inter.className}`}
                            >
                                <AnimatedNumber number={2} />
                                <motion.span
                                    initial={{
                                        opacity: 0,
                                    }}
                                    whileInView={{
                                        opacity: 1,
                                        transition: {
                                            delay: 0.8,
                                            transition: 0.8,
                                        },
                                    }}
                                    viewport={{
                                        amount: 'some',
                                        once: true,
                                    }}
                                >
                                    +
                                </motion.span>
                            </span>
                            <span className="text-sm lg:text-base block text-stone-500">
                                years in web development
                            </span>
                        </div>
                        <div className="w-fit flex flex-col">
                            <span
                                className={`text-3xl lg:text-4xl font-medium text-black ${inter.className}`}
                            >
                                <AnimatedNumber number={10} />
                                <motion.span
                                    initial={{
                                        opacity: 0,
                                    }}
                                    whileInView={{
                                        opacity: 1,
                                        transition: {
                                            delay: 0.8,
                                            transition: 0.8,
                                        },
                                    }}
                                    viewport={{
                                        amount: 'some',
                                        once: true,
                                    }}
                                >
                                    +
                                </motion.span>
                            </span>
                            <span className="text-sm lg:text-base block text-stone-500">
                                completed projects
                            </span>
                        </div>
                    </div>
                </div>
                {/* End Right Content */}
            </section>
            {/* End About Section */}
        </>
    )
}
