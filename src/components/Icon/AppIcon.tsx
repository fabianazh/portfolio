import Link from 'next/link'
import Image from 'next/image'
import { mona, mori } from '@/app/fonts'

export default function AppIcon({ className }: { className?: string }) {
    return (
        <>
            <div
                className={`flex gap-3 lg:gap-4 items-center relative text-black w-fit h-fit ${className} ${mori.className}`}
            >
                <div className="flex h-9 w-9 z-0 bg-stone-200 items-start aspect-square shrink-0 rounded-full overflow-hidden">
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
                        className={`text-xs lg:text-xs w-fit h-fit inline-block font-medium group text-stone-500`}
                    >
                        Full stack developer
                    </span>
                </div>
            </div>
        </>
    )
}
