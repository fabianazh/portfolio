import Chip from '@/components/Other/Chip'
import { urbanist, mona } from '@/app/fonts'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'

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
                variants={{
                    enter: (i: number) => ({
                        opacity: 1,
                        transition: { delay: 0.4 + i * 0.2 },
                    }),
                    initial: {
                        opacity: 0,
                    },
                }}
                custom={index}
                animate="enter"
                exit="exit"
                initial="initial"
                className={`h-full flex w-full flex-col gap-3 ${className}`}
            >
                {/* Thumbnail Container */}
                <Link
                    href={`/${project.id}`}
                    className={`w-full aspect-video lg:aspect-auto h-auto shrink-0 transition-all hover:-translate-y-1 group cursor-pointer ${thumbnailClassName}`}
                >
                    {/* Layer */}
                    <div className="w-full relative rounded-2xl h-full shadow-sm lg:shadow overflow-hidden transition-all">
                        {/* Image */}
                        <Image
                            src={`/img/projects/${project.thumbnail}`}
                            alt={project.name}
                            className="w-full h-full transition-all object-cover"
                            width={400}
                            height={300}
                        />
                        {/* End Image */}
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
                        className="flex w-full gap-1 items-center"
                    >
                        <span
                            className={`block text-lg lg:text-xl font-semibold ${urbanist.className}`}
                        >
                            {project.name}
                        </span>
                        <span
                            className={`block text-sm lg:text-sm font-semibold text-stone-500 ${urbanist.className}`}
                        >
                            /{project.year}
                        </span>
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
                        {project.tools.map((tech) => (
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
