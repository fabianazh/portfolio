export default function Chip({
    children,
    className = 'text-white bg-white/30',
}: {
    children: React.ReactNode
    className?: string
}) {
    return (
        <>
            <div
                className={`text-[0.575rem] lg:text-xs font-medium rounded block w-auto h-auto py-0.5 px-2 ${className}`}
            >
                {children}
            </div>
        </>
    )
}
