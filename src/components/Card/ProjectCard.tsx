import Chip from '@/components/Other/Chip'
import { urbanist, mona } from '@/app/fonts'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import ArrowIcon from '@/components/Icon/ArrowIcon'
import { IoArrowUp } from 'react-icons/io5'

export default function ProjectCard({
    project,
    className,
    thumbnailClassName,
    descClassName,
    index,
}: {
    project: Project
    className?: string
    thumbnailClassName?: string
    descClassName?: string
    index: number
}) {
    return (
        <>
            {/* Container */}
            <motion.div
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
                className={`h-full flex w-full flex-col gap-3 ${className}`}
            >
                {/* Thumbnail Container */}
                <Link
                    href={`/${project.id}`}
                    className={`w-full h-auto shrink-0 transition-all group cursor-pointer ${thumbnailClassName}`}
                >
                    {/* Layer */}
                    <div className="w-full relative rounded-xl lg:rounded-2xl h-full z-0 shadow-sm lg:shadow overflow-hidden transition-all hover:-translate-y-0.5">
                        {/* Image */}
                        <Image
                            src={`${project.thumbnail}`}
                            alt={project.name}
                            className="w-full h-full object-cover z-0"
                            width={400}
                            height={300}
                            draggable={false}
                        />
                        {/* End Image */}

                        {/* Overlay */}
                        <div className="absolute flex items-center gap-1 w-fit h-fit bottom-3.5 right-3.5 z-10 bg-stone-100 shadow rounded-full px-3 py-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <span className="text-xs font-medium">
                                View Detail
                            </span>{' '}
                            <ArrowIcon className="w-3.5 h-fit" />
                        </div>
                        {/* End Overlay */}
                    </div>
                    {/* End Layer */}
                </Link>
                {/* End Thumbnail Container */}
                {/* Description Container */}
                <div
                    className={`flex flex-col h-auto lg:gap-1 justify-center ${descClassName}`}
                >
                    {/* Title */}
                    <Link
                        href={`/${project.id}`}
                        className="relative flex w-fit gap-1 items-center group overflow-hidden"
                    >
                        <span
                            className={`block text-lg lg:text-xl font-semibold ${urbanist.className}`}
                        >
                            {project.name}
                        </span>
                        <span
                            className={`block text-sm lg:text-sm font-semibold text-stone-500 inline-block group-hover:-translate-y-12 group-hover:opacity-0 transition-all duration-300 ${urbanist.className}`}
                        >
                            /{project.year}
                        </span>
                        <IoArrowUp className="rotate-45 text-stone-700 absolute translate-y-12 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 right-1" />
                    </Link>
                    {/* End Title */}
                    {/* Desc */}
                    <span
                        className={`text-sm block font-normal lg:font-medium mb-3 ${mona.className}`}
                    >
                        {project.shortDesc}
                    </span>
                    {/* End Desc */}
                    <div className="flex flex-row gap-2 w-full h-auto">
                        {project.tools.map((tech: string) => (
                            <Chip
                                key={tech}
                                className="text-black bg-stone-100 border"
                            >
                                {tech}
                            </Chip>
                        ))}
                    </div>
                </div>
                {/* End Description Container */}
            </motion.div>
            {/* End Container */}
        </>
    )
}
