'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

export default function DeviceCard({
    type,
    index = 0,
    url,
    className,
}: {
    type: 'mobile' | 'tablet' | 'desktop'
    index: number
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
        <motion.div
            initial={{
                opacity: 0,
            }}
            whileInView={{
                opacity: 1,
                transition: {
                    delay: 0.4 + index * 0.25,
                },
            }}
            viewport={{
                amount: 'some',
                once: true,
            }}
            className={`w-full bg-stone-50 flex flex-col lg:flex-row rounded-xl border border-stone-200 h-fit p-6 ${containerClassName} ${className}`}
        >
            <div className="w-fit shrink-0 h-fit flex flex-col">
                <span className="font-semibold">{title}</span>
                <span className="font-medium text-stone-500 text-xs">
                    {desc}
                </span>
            </div>
            <div className="w-full h-fit flex justify-center lg:justify-start">
                <Image
                    alt={`Home Page`}
                    width={300}
                    height={450}
                    src={`${url}`}
                    draggable={false}
                    className="w-fit h-fit object-cover border rounded-xl"
                />
            </div>
        </motion.div>
    )
}
