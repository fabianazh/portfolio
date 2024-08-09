import { dmSans, inter } from '@/app/fonts'
import { LinkPreview } from '@/components/Other/LinkPreview'
import Image from 'next/image'

export default function SkillContainer({
    title,
    stacks,
}: {
    title: string
    stacks: {
        name: string
        src: string
        url: string
    }[]
}) {
    return (
        <>
            {/* Skill Container */}
            <div className="w-full flex flex-col h-fit shrink-0 gap-3 lg:gap-3.5 bg-[#fbfbfb] p-4 lg:p-6 pb-6 lg:pb-6 rounded-md shadow-sm">
                {/* Heading */}
                <span className={`block text-sm lg:text-sm font-medium`}>
                    {title}
                </span>
                {/* End Heading */}
                {/* Content */}
                <div className="w-full flex flex-wrap gap-3">
                    {stacks.map((stack, index) => (
                        <LinkPreview key={index} url={stack.url}>
                            <div className="group bg-stone-100/50 hover:bg-stone-200/80 rounded-md border shrink-0 w-fit h-fit px-3 py-1.5 flex items-center gap-1.5 duration-300 transition-colors">
                                <Image
                                    src={`/img/icon/${stack.src}.png`}
                                    alt={stack.name}
                                    draggable={'false'}
                                    width={64}
                                    height={64}
                                    className={`cursor-pointer w-fit h-3 lg:h-4`}
                                />
                                <span
                                    className={`text-xs lg:text-xs font-medium text-black`}
                                >
                                    {stack.name}
                                </span>
                            </div>
                        </LinkPreview>
                    ))}
                </div>
                {/* Content */}
            </div>
            {/* End Skill Container */}
        </>
    )
}
