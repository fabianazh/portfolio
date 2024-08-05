import Link from 'next/link'

export default function AppIcon({ className }: { className?: string }) {
    return (
        <>
            <Link
                href={'https://fabianazh.vercel.app'}
                className={`text-sm lg:text-base relative text-black w-fit h-fit inline-block pb-[1px] font-medium group ${className}`}
            >
                Fabianazh
                <div className="absolute w-full h-[2px] scale-x-0 bottom-0 left-0 bg-stone-600 origin-bottom-right transition-transform duration-300 group-hover:scale-x-100 group-hover:origin-bottom-left" />
            </Link>
        </>
    )
}
