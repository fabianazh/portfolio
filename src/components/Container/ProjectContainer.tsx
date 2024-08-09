import { FaArrowUp } from 'react-icons/fa'
import PrimaryButton from '@/components/Button/PrimaryButton'
import SecondaryButton from '@/components/Button/SecondaryButton'
import Chip from '@/components/Other/Chip'
import { urbanist, mona } from '@/app/fonts'
import Image from 'next/image'

export default function ProjectContainer({
    children,
    className,
}: {
    children: React.ReactNode
    className?: string
}) {
    return (
        <>
            {/* Container */}
            <div className={`h-full flex w-full flex-col gap-3 ${className}`}>
                {children}
            </div>
            {/* End Container */}
        </>
    )
}

export function Description({
    title,
    year,
    desc,
    projectLink,
    githubLink,
    className,
    techStack,
}: {
    title: string
    year: string
    desc: string
    projectLink: string
    githubLink: string
    className?: string
    techStack: string[]
}) {
    return (
        <>
            {/* Description Container */}
            <div
                className={`flex flex-col h-auto lg:gap-1 justify-center ${className}`}
            >
                {/* Title */}
                <div className="flex w-full gap-1 items-center">
                    <span
                        className={`block text-base lg:text-xl font-semibold ${urbanist.className}`}
                    >
                        {title}
                    </span>
                    <span
                        className={`block text-sm lg:text-sm font-semibold text-stone-500 ${urbanist.className}`}
                    >
                        /{year}
                    </span>
                </div>
                {/* End Title */}
                {/* Desc */}
                <span
                    className={`text-sm block font-normal lg:font-medium mb-3 ${mona.className}`}
                >
                    {desc}
                </span>
                {/* End Desc */}
                <div className="flex flex-row gap-2 w-full h-auto">
                    {techStack.map((tech) => (
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
        </>
    )
}

export function Thumbnail({
    title,
    imgPath,
    className,
    techStack,
}: {
    title: string
    imgPath: string
    className?: string
    techStack: string[]
}) {
    return (
        <>
            {/* Image Container */}
            <div
                className={`w-full aspect-video lg:aspect-auto h-auto shrink-0 transition-all hover:-translate-y-1 group cursor-pointer ${className}`}
            >
                {/* Layer */}
                <div className="w-full relative rounded-xl h-full shadow-sm lg:shadow overflow-hidden transition-all">
                    {/* Image */}
                    <Image
                        src={imgPath}
                        alt={title}
                        className="w-full h-full transition-all object-cover"
                        width={400}
                        height={300}
                    />
                    {/* End Image */}
                </div>
                {/* End Layer */}
            </div>
            {/* End Image Container */}
        </>
    )
}

ProjectContainer.Description = Description
ProjectContainer.Thumbnail = Thumbnail
