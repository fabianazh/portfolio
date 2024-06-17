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
                className={`bg-black grid place-items-center transition-colors duration-300 text-white gap-2.5 grid-flow-col pr-2 pl-5 py-2 rounded-full group ${className}`}
                target={target}
            >
                {children}
            </Link>
        </>
    )
}
