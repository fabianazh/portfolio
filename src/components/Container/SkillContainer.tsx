import { mona, urbanist } from '@/app/fonts'
import { LinkPreview } from '@/components/Other/LinkPreview'
import Image from 'next/image'

export default function SkillContainer({
    title,
    desc,
    stack,
}: {
    title: string
    desc: string
    stack: {
        name: string
        url: string
        isSquare: boolean
    }[]
}) {
    return (
        <>
            <div className="w-full flex flex-col h-fit shrink-0 border p-6 lg:p-6 pb-8 rounded-xl bg-stone-100 gap-4 lg:gap-6">
                <div className="w-full flex flex-col gap-1">
                    <span
                        className={`block text-xl lg:text-2xl font-bold ${urbanist.className}`}
                    >
                        {title}
                    </span>
                    <span
                        className={`text-sm lg:text-base font-medium text-stone-700 ${mona.className}`}
                    >
                        {desc}
                    </span>
                </div>
                <div className="w-full grid grid-cols-4 md:grid-cols-8 lg:grid-cols-9 gap-[1.1rem]">
                    {stack.map((icon, index) => (
                        <LinkPreview key={index} url={icon.url}>
                            <div className="group bg-stone-200/90 rounded aspect-square shrink-0 grid place-items-center w-full overflow-hidden shadow">
                                <Image
                                    src={`/img/icon/${icon.name}.png`}
                                    alt={icon.name}
                                    draggable={'false'}
                                    width={64}
                                    height={64}
                                    className={`grayscale-0 transition-all duration-200 cursor-pointer w-10`}
                                />
                            </div>
                        </LinkPreview>
                    ))}
                </div>
            </div>
        </>
    )
}
