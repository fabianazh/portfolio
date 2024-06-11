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
                className={`border-b-2 border-black font-medium ${className}`}
                target={target}
            >
                {children}
            </Link>
        </>
    )
}
