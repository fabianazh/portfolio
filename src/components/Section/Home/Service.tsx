'use client'

import { inter } from '@/app/fonts'
import ServiceCard from '@/components/Card/ServiceCard'
import { useState } from 'react'
import { services } from '@/constants/component'

export default function Service() {
    const [cardActive, setCardActive] = useState<number>(0)

    return (
        <>
            {/* Service Section */}
            <section
                id="services"
                className="w-full h-auto bg-stone-100 flex flex-col lg:flex-row lg:justify-between gap-8 lg:gap-10 pt-14 pb-20 mb-14 px-4 lg:px-20 z-0"
            >
                {/* Left Content */}
                <div className="w-full lg:w-3/12 shrink-0 flex flex-col gap-1">
                    {/* Heading Service */}
                    <h2
                        className={`text-xl lg:text-2xl font-medium text-start ${inter.className}`}
                    >
                        Services
                    </h2>
                    {/* End Heading Service */}
                </div>
                {/* End Left Content */}
                {/* Right Content */}
                <div className="w-full lg:w-9/12 grid lg:grid-cols-2 h-auto gap-6 z-10">
                    {services.map((service: any, index: number) => (
                        <ServiceCard
                            key={index}
                            index={index}
                            service={service}
                            isActive={cardActive === index}
                            setActive={setCardActive}
                            // stacks={languagesAndFrameworksStack}
                        />
                    ))}
                </div>
                {/* End Right Content */}
            </section>
            {/* End Service Section */}
        </>
    )
}
