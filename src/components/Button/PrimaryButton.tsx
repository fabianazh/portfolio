import Link from 'next/link'
import { IoChevronForward } from 'react-icons/io5'

export default function PrimaryButton({
    href,
    children,
    className = 'bg-black text-white',
    target,
    icon = <IoChevronForward />,
    as = 'link',
    type,
}: {
    href?: string
    children: React.ReactNode
    className?: string
    target?: '_blank' | '_parent' | '_top' | '_self'
    icon?: React.ReactNode
    as: 'button' | 'link'
    type?: 'button' | 'submit' | 'reset'
}) {
    if (as === 'button') {
        return (
            <button
                type={type}
                className={`grid place-items-center transition-colors duration-500 gap-1 grid-flow-col px-5 py-1.5 rounded-full group ${className}`}
            >
                {children} {icon}
            </button>
        )
    }

    return (
        <>
            <Link
                href={`${href}`}
                className={`grid place-items-center transition-colors duration-500 gap-1 grid-flow-col px-5 py-1.5 rounded-full group ${className}`}
                target={target}
            >
                {children} {icon}
            </Link>
        </>
    )
}
