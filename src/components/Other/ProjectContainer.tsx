import { FaArrowUp } from 'react-icons/fa'
import PrimaryButton from '@/components/Button/PrimaryButton'
import SecondaryButton from '@/components/Button/SecondaryButton'
import Chip from '@/components/Other/Chip'
import { urbanist } from '@/app/fonts'
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
            <div className={`h-full flex justify-end gap-6 ${className}`}>
                {children}
            </div>
            {/* End Container */}
        </>
    )
}

export function Description({
    title,
    desc,
    projectLink,
    githubLink,
    className,
}: {
    title: string
    desc: string
    projectLink: string
    githubLink: string
    className?: string
}) {
    return (
        <>
            {/* Description Container */}
            <div
                className={`flex flex-col h-auto pb-10 gap-1 justify-center ${className}`}
            >
                <span
                    className={`block text-4xl font-bold ${urbanist.className}`}
                >
                    {title}
                </span>
                <span className={`block text- font-semibold mb-3`}>{desc}</span>

                <div className="w-full items-center h-auto flex flex-row gap-7">
                    <PrimaryButton
                        href={projectLink}
                        className="gap-2.5 grid-flow-col px-5 py-2 text-sm"
                        target="_blank"
                    >
                        Visit the project
                        <span className="inline-block text-xs">
                            <FaArrowUp className="rotate-45 group-hover:rotate-90 transition-transform duration-400" />
                        </span>
                    </PrimaryButton>
                    <SecondaryButton
                        href={githubLink}
                        className="pb-[2px] text-sm"
                    >
                        See on Github
                    </SecondaryButton>
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
                className={`h-auto shrink-0 transition-all group cursor-pointer ${className}`}
            >
                {/* Layer */}
                <div className="w-full relative h-full shadow-md overflow-hidden transition-all">
                    {/* Image */}
                    <Image
                        src={imgPath}
                        alt={title}
                        className="w-full h-full transition-all"
                        fill={true}
                    />
                    {/* End Image */}
                    <div className="absolute flex flex-col gap-1 z-50 p-6 pt-20 left-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent w-full h-fit opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                        <span className="font-medium block text-white text-lg translate-y-0 group-hover:-translate-y-1 duration-700 transition-transform">
                            {title}
                        </span>
                        <div className="flex flex-row gap-1.5 w-full h-auto translate-y-0 group-hover:-translate-y-1 duration-700 transition-transform">
                            {techStack.map((tech) => (
                                <Chip key={tech}>{tech}</Chip>
                            ))}
                        </div>
                    </div>
                </div>
                {/* End Layer */}
            </div>
            {/* End Image Container */}
        </>
    )
}

ProjectContainer.Description = Description
ProjectContainer.Thumbnail = Thumbnail
