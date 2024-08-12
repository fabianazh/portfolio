import Link from 'next/link'
import { FaArrowUp } from 'react-icons/fa'

export default function PrimaryButton({
    href,
    children,
    className,
    target,
    icon = (
        <FaArrowUp className="rotate-45 opacity-0 group-hover:opacity-100" />
    ),
}: {
    href: string
    children: React.ReactNode
    className?: string
    target?: '_blank' | '_parent' | '_top' | '_self'
    icon?: React.ReactNode
}) {
    return (
        <>
            <Link
                href={href}
                className={`bg-black grid min-h-10 place-items-center transition-colors duration-300 text-white gap-3 grid-flow-col pr-1 pl-5 py-1 rounded-full group ${className}`}
                target={target}
            >
                {children}
                <div className="text-sm rounded-full grid place-items-center bg-Gray-200 text-black h-full aspect-square shrink-0 scale-[.2] group-hover:scale-100 transition-transform">
                    {icon}
                </div>
            </Link>
        </>
    )
}
