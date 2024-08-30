export default function DeviceViewContainer({
    type,
    url,
    className,
}: {
    type: 'mobile' | 'tablet' | 'desktop'
    url: string
    className?: string
}) {
    let containerClassName: string
    let title: string
    let desc: string

    switch (type) {
        case 'desktop':
            containerClassName = 'w-full'
            title = 'Desktop'
            desc = '>1200px'
            break
        case 'tablet':
            containerClassName = 'w-[55%]'
            title = 'Tablet'
            desc = '480px - 1200px'
            break

        default:
            containerClassName = 'w-[45%]'
            title = 'Mobile'
            desc = '320px - 480px'
            break
    }

    return (
        <div
            className={`w-full bg-stone-50 flex gap-2 lg:gap-4 rounded-xl border border-stone-200 h-56 p-6 ${containerClassName} ${className}`}
        >
            <div className="w-fit shrink-0 h-fit flex flex-col">
                <span className="font-semibold">{title}</span>
                <span className="font-medium text-stone-500 text-xs">
                    {desc}
                </span>
            </div>
        </div>
    )
}
