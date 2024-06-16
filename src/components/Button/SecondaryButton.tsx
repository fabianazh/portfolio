import Link from 'next/link'

export default function SecondaryButton({
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
                className={`relative w-fit inline-block pb-0.5 font-medium group ${className}`}
                target={target}
            >
                {children}
                <div className="absolute w-full h-0.5 scale-x-0 bottom-0 left-0 bg-black origin-bottom-right transition-transform duration-300 -out group-hover:scale-x-100 group-hover:origin-bottom-left" />
            </Link>
        </>
    )
}
