import Image from 'next/image'

export default function DeviceCard({
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
            containerClassName = 'w-full gap-4 lg:gap-20'
            title = 'Desktop'
            desc = '>1200px'
            break
        case 'tablet':
            containerClassName = 'w-[55%] gap-4 lg:gap-6'
            title = 'Tablet'
            desc = '480px - 1200px'
            break

        default:
            containerClassName = 'w-[45%] gap-4 lg:gap-6'
            title = 'Mobile'
            desc = '320px - 480px'
            break
    }

    return (
        <div
            className={`w-full bg-stone-50 flex flex-col lg:flex-row rounded-xl border border-stone-200 h-fit p-6 ${containerClassName} ${className}`}
        >
            <div className="w-fit shrink-0 h-fit flex flex-col">
                <span className="font-semibold">{title}</span>
                <span className="font-medium text-stone-500 text-xs">
                    {desc}
                </span>
            </div>
            <div className="w-fit h-fit border overflow-hidden rounded-xl">
                <Image
                    alt={`Home Page`}
                    width={300}
                    height={450}
                    src={`${url}`}
                    draggable={false}
                    className="w-full h-fit object-cover"
                />
            </div>
        </div>
    )
}
