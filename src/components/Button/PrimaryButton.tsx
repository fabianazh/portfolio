import Link from 'next/link'

export default function PrimaryButton({
    href,
    children,
    className,
    target,
    icon,
}: {
    href: string
    children: React.ReactNode
    className?: string
    target?: '_blank' | '_parent' | '_top' | '_self'
    icon: React.ReactNode
}) {
    return (
        <>
            <Link
                href={href}
                className={`bg-black grid place-items-center transition-colors duration-300 text-white gap-2.5 grid-flow-col pr-2 pl-5 py-2 rounded-full group ${className}`}
                target={target}
            >
                {children}
                <div className="text-sm rounded-full grid place-items-center bg-Gray-200 text-black w-7 aspect-square shrink-0 scale-[.3] group-hover:scale-100 transition-transform">
                    {icon}
                </div>
            </Link>
        </>
    )
}
