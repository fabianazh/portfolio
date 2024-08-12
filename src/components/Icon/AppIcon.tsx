import Link from 'next/link'
import Image from 'next/image'
import { mona, inter } from '@/app/fonts'

export default function AppIcon({
    className,
    nameOnly = false,
}: {
    className?: string
    nameOnly?: boolean
}) {
    return (
        <>
            <div
                className={`flex gap-3 z-0 transition-all duration-[0.9s] lg:gap-4 items-center relative text-black w-fit h-fit ${className} ${inter.className}`}
            >
                <div
                    className={`h-9 w-9 z-0 bg-stone-200 items-start aspect-square shrink-0 rounded-full overflow-hidden ${
                        nameOnly ? 'hidden' : 'flex'
                    }`}
                >
                    <Image
                        src={'/img/f/f3.png'}
                        alt="Fabian Azhar"
                        width={100}
                        height={100}
                        className="object-cover w-full h-full z-0"
                        draggable={false}
                    />
                </div>
                <div className="flex flex-grow flex-col h-fit w-fit justify-between">
                    <Link
                        href={'https://fabianazh.vercel.app'}
                        className={`text-sm lg:text-sm text-black w-fit h-fit inline-block font-semibold group ${mona.className}`}
                    >
                        Fabian Azhar
                    </Link>
                    <span
                        className={`text-xs lg:text-xs w-fit h-fit inline-block font-medium group text-stone-500 ${
                            nameOnly ? 'hidden' : 'flex'
                        }`}
                    >
                        Full stack developer
                    </span>
                </div>
            </div>
        </>
    )
}
