import Link from 'next/link'

export default function CircleButton({
    href,
    children,
    className,
}: {
    href: string
    children: React.ReactNode
    className?: string
}) {
    return (
        <Link
            href={href}
            className={`aspect-square shadow hover:translate-y-0.5 grid place-items-center w-8 shrink-0 rounded-full bg-transparent border-2 border-black transition-all hover:bg-stone-300 duration-300 text-lg ${className}`}
        >
            {children}
        </Link>
    )
}
