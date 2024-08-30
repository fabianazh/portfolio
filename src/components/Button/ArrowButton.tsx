import Link from 'next/link'
import ArrowIcon from '@/components/Icon/ArrowIcon'

export default function ArrowButton({
    direction = 'right',
    children,
    href,
}: {
    direction?: 'left' | 'right'
    href: string
    children: React.ReactNode
}) {
    return (
        <Link
            href={`${href}`}
            className="text-xs lg:text-sm flex gap-2 font-semibold items-center w-fit"
        >
            {direction === 'left' ? (
                <>
                    <ArrowIcon className="rotate-180 w-5 h-fit" />
                    <span>{children}</span>
                </>
            ) : (
                <>
                    <span>{children}</span>
                    <ArrowIcon />
                </>
            )}
        </Link>
    )
}
