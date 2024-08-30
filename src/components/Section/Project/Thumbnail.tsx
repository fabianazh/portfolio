import { urbanist } from '@/app/fonts'
import Image from 'next/image'
import { motion } from 'framer-motion'

export default function Thumbnail({ project }: { project: Project }) {
    return (
        <>
            <section className="w-full flex flex-col gap-3 lg:gap-8">
                {/* Title */}
                <div className="w-full px-4 lg:px-12 relative flex h-auto justify-between lg:gap-12 items-end">
                    <motion.span
                        initial={{
                            opacity: 0,
                            y: '10px',
                        }}
                        whileInView={{
                            y: '0px',
                            opacity: 1,
                            transition: {
                                delay: 0.3,
                                duration: 0.5,
                            },
                        }}
                        viewport={{
                            amount: 'some',
                            once: true,
                        }}
                        className={`font-semibold text-4xl lg:text-6xl ${urbanist.className}`}
                    >
                        {project?.name}
                    </motion.span>
                    <motion.span
                        initial={{
                            opacity: 0,
                            y: '10px',
                        }}
                        whileInView={{
                            y: '0px',
                            opacity: 1,
                            transition: {
                                delay: 0.35,
                                duration: 0.6,
                            },
                        }}
                        viewport={{
                            amount: 'some',
                            once: true,
                        }}
                        className="font-medium text-2xl lg:text-4xl"
                    >
                        /{project?.year}
                    </motion.span>
                </div>
                {/* End Title */}
                {/* Thumbnail */}
                <div className="w-full mx-auto h-fit relative overflow-hidden z-0">
                    {/* Thumbnail Overlay */}
                    <motion.div
                        initial={{
                            rotate: '-3deg',
                            y: '-30%',
                        }}
                        whileInView={{
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
                        }}
                        viewport={{
                            amount: 'some',
                            once: true,
                        }}
                        className="absolute w-[200vw] h-full -left-1/2 bg-Gray-200 z-10"
                    ></motion.div>
                    {/* End Thumbnail Overlay */}
                    {/* Thumbnail Image */}
                    <motion.div
                        initial={{
                            opacity: 0.3,
                        }}
                        whileInView={{
                            opacity: 1,
                            transition: {
                                duration: 0.7,
                            },
                        }}
                        viewport={{
                            amount: 'some',
                            once: true,
                        }}
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
                    {/* End Thumbnail Image */}
                </div>
                {/* End Thumbnail */}
            </section>
        </>
    )
}
