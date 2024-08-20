import { mona } from '@/app/fonts'
import PrimaryButton from '@/components/Button/PrimaryButton'

export default function ServiceCard({
    service,
    isActive,
    setActive,
    index,
}: {
    service: { title: string; desc: string; href: string }
    isActive: boolean
    setActive: (index: number) => void
    index: number
}) {
    return (
        <>
            {/* Service Card */}
            <div
                onMouseOver={() => setActive(index)}
                className={`w-full transition-all duration-500 flex flex-col h-fit shrink-0 gap-4 lg:gap-5 p-3 lg:p-5 pb-4 lg:pb-5 rounded-xl shadow-sm ${
                    isActive ? 'bg-stone-200' : 'bg-[#fafafa]'
                }`}
            >
                {/* Head */}
                <div className={`w-full flex flex-col ${mona.className}`}>
                    {/* Heading */}
                    <span className={`block text-base lg:text-lg font-medium`}>
                        {service.title}
                    </span>
                    {/* End Heading */}
                    {/* Desc */}
                    <span
                        className={`block text-xs lg:text-sm font-normal text-stone-500`}
                    >
                        {service.desc}
                    </span>
                    {/* End Desc */}
                </div>
                {/* End Head */}
                {/* Button */}
                <PrimaryButton
                    href={service.href}
                    className={`inline-block w-fit text-xs lg:text-sm font-medium ${
                        isActive
                            ? 'bg-black text-white'
                            : 'bg-stone-200 text-black'
                    }`}
                >
                    Order
                </PrimaryButton>
                {/* Button */}
            </div>
            {/* End Service Card */}
        </>
    )
}
