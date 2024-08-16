import Link from 'next/link'
import Image from 'next/image'
import { mona, inter } from '@/app/fonts'

export default function AppIcon({
    className,
    nameOnly = false,
    size = 'sm',
}: {
    className?: string
    nameOnly?: boolean
    size?: 'sm' | 'lg'
}) {
    return (
        <>
            <div
                className={`flex gap-3 z-0 transition-all duration-[0.9s] lg:gap-4 items-center relative text-black w-fit h-fit ${className} ${inter.className}`}
            >
                <div
                    className={`h-9 w-9 z-0 bg-stone-200 items-start aspect-square shrink-0 rounded-full overflow-hidden ${
                        nameOnly ? 'hidden' : 'flex'
                    } ${size === 'sm' ? 'h-9 w-9' : 'h-10 w-10'}`}
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
                <div
                    className={`flex flex-grow flex-col h-fit w-fit ${
                        size === 'sm' ? 'justify-between' : 'justify-start'
                    }`}
                >
                    <Link
                        href={'https://fabianazh.vercel.app'}
                        className={`text-black w-fit h-fit inline-block font-semibold group ${
                            mona.className
                        } ${size === 'sm' ? 'text-sm' : 'text-base'}`}
                    >
                        Fabian Azhar
                    </Link>
                    <span
                        className={`w-fit h-fit inline-block font-medium group text-stone-500 ${
                            nameOnly ? 'hidden' : 'flex'
                        } ${size === 'sm' ? 'text-xs' : 'text-sm'}`}
                    >
                        Full stack developer
                    </span>
                </div>
            </div>
        </>
    )
}
