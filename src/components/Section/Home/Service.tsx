'use client'

import { inter, mona } from '@/app/fonts'
import ServiceCard from '@/components/Card/ServiceCard'
import { useEffect, useState } from 'react'
import { services } from '@/constants/component'
import { AnimatePresence } from 'framer-motion'
import { disableScroll, enableScroll } from '@/libs/utils/controllScroll'
import { useLocale } from '@/contexts/LocaleContext'
import localize from '@/libs/utils/localize'
import ServiceModal from '@/components/Modal/ServiceModal'

const text = {
    title: {
        en: 'Services',
        id: 'Layanan',
    },
    desc: {
        en: 'Discover the range of services I offer to help bring your projects to life.',
        id: 'Temukan berbagai layanan yang saya tawarkan untuk membantu mewujudkan proyek Anda.',
    },
}

export default function Service() {
    const [cardActive, setCardActive] = useState<number>(0)
    const [modal, setModal] = useState<{
        isOpen: boolean
        data: Service | null
    }>({ isOpen: false, data: null })

    const { locale } = useLocale()

    useEffect(() => {
        modal.isOpen === true ? disableScroll() : enableScroll()
    }, [modal])

    return (
        <>
            {/* Service Section */}
            <section
                id="services"
                className="w-full h-auto bg-stone-100 flex flex-col lg:flex-row lg:justify-between gap-8 lg:gap-10 lg:pt-14 pb-20 mb-14 px-4 lg:px-20 z-0"
            >
                {/* Left Content */}
                <div className="w-full lg:w-3/12 shrink-0 flex flex-col gap-1">
                    {/* Heading Service */}
                    <h2
                        className={`text-xl lg:text-2xl font-medium text-start ${inter.className}`}
                    >
                        {localize(text.title, locale)}
                    </h2>
                    {/* End Heading Service */}
                    {/* Desc Service */}
                    <span
                        className={`text-xs lg:text-sm font-medium text-stone-500 ${mona.className}`}
                    >
                        {localize(text.desc, locale)}
                    </span>
                    {/* End Desc Service */}
                </div>
                {/* End Left Content */}
                {/* Right Content */}
                <div className="w-full lg:w-9/12 grid lg:grid-cols-2 h-auto gap-6 z-10">
                    {services.map((service: Service, index: number) => (
                        <ServiceCard
                            key={index}
                            index={index}
                            service={service}
                            isActive={cardActive === index}
                            setActive={setCardActive}
                            setModal={setModal}
                        />
                    ))}
                </div>
                {/* End Right Content */}
                {/* Modal */}
                <AnimatePresence>
                    {modal.isOpen === true && (
                        <ServiceModal setModal={setModal} modal={modal} />
                    )}
                </AnimatePresence>
                {/* End Modal */}
            </section>
            {/* End Service Section */}
        </>
    )
}
