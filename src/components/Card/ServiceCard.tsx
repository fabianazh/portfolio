import { mona } from '@/app/fonts'
import PrimaryButton from '@/components/Button/PrimaryButton'
import { motion } from 'framer-motion'

export default function ServiceCard({
    service,
    isActive,
    setActive,
    index,
    setModal,
}: {
    service: Service
    isActive: boolean
    setActive: (index: number) => void
    index: number
    setModal: (e: { isOpen: boolean; data: Service }) => void
}) {
    return (
        <>
            {/* Service Card */}
            <motion.div
                initial={{
                    opacity: 0,
                }}
                whileInView={{
                    opacity: 1,
                    transition: {
                        delay: 0.4 + index * 0.35,
                    },
                }}
                viewport={{
                    amount: 'some',
                    once: true,
                }}
                onMouseOver={() => setActive(index)}
                onClick={() => setModal({ isOpen: true, data: service })}
                className={`w-full transition-colors cursor-pointer duration-500 flex flex-col h-fit shrink-0 gap-6 lg:gap-6 p-4 lg:p-5 pb-5 lg:pb-5 rounded-xl shadow-sm z-0 ${
                    isActive ? 'bg-stone-200' : 'bg-[#fafafa]'
                }`}
            >
                {/* Head */}
                <div
                    className={`w-full flex flex-col gap-0.5 z-0 ${mona.className}`}
                >
                    {/* Heading */}
                    <span className={`block text-base text-lg font-medium`}>
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
                    className={`inline-block w-fit text-xs lg:text-sm font-medium z-[1] group ${
                        isActive
                            ? 'bg-black text-white'
                            : 'bg-stone-200 text-black'
                    }`}
                    as="link"
                >
                    Order
                </PrimaryButton>
                {/* End Button */}
            </motion.div>
            {/* End Service Card */}
        </>
    )
}
