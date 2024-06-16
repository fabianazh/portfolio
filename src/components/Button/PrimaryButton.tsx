import Link from 'next/link'

export default function PrimaryButton({
    href,
    children,
    className,
    target,
}: {
    href: string
    children: React.ReactNode
    className?: string
    target?: '_blank' | '_parent' | '_top' | '_self'
}) {
    return (
        <>
            <Link
                href={href}
                className={`bg-black grid place-items-center hover:bg-stone-800 transition-colors duration-300 text-white group rounded ${className}`}
                target={target}
            >
                {children}
            </Link>
        </>
    )
}
