'use client'

import { inter } from '@/app/fonts'
import ServiceCard from '@/components/Card/ServiceCard'
import { useEffect, useState } from 'react'
import { services } from '@/constants/component'
import { AnimatePresence, motion } from 'framer-motion'
import { disableScroll, enableScroll } from '@/utils/controllScroll'

export default function Service() {
    const [cardActive, setCardActive] = useState<number>(0)
    const [modal, setModal] = useState<{
        isOpen: boolean
        data: Service | null
    }>({ isOpen: false, data: null })

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
                        Services
                    </h2>
                    {/* End Heading Service */}
                </div>
                {/* End Left Content */}
                {/* Right Content */}
                <div className="w-full lg:w-9/12 grid lg:grid-cols-2 h-auto gap-6 z-10">
                    {services.map(
                        (
                            service: {
                                title: string
                                desc: string
                                href: string
                            },
                            index: number
                        ) => (
                            <ServiceCard
                                key={index}
                                index={index}
                                service={service}
                                isActive={cardActive === index}
                                setActive={setCardActive}
                                setModal={setModal}
                            />
                        )
                    )}
                </div>
                {/* End Right Content */}
                {/* Modal */}
                <AnimatePresence>
                    {modal.isOpen === true && (
                        <motion.div className="w-screen h-screen fixed top-0 left-0 bg-transparent z-[90]">
                            {/* Modal Container */}
                            <div className="w-full h-full relative flex justify-center items-center z-0">
                                {/* Overlay */}
                                <motion.div
                                    onClick={() =>
                                        setModal({
                                            isOpen: false,
                                            data: null,
                                        })
                                    }
                                    variants={{
                                        initial: {
                                            opacity: 0,
                                        },
                                        enter: {
                                            opacity: 1,
                                            transition: {
                                                duration: 0.3,
                                            },
                                        },
                                        exit: {
                                            opacity: 0,
                                            transition: {
                                                delay: 0.3,
                                                duration: 0.3,
                                            },
                                        },
                                    }}
                                    animate="enter"
                                    exit="exit"
                                    initial="initial"
                                    className="absolute w-full h-full bg-transparent backdrop-blur z-0"
                                ></motion.div>
                                {/* End Overlay */}
                                {/* Modal */}
                                <motion.div
                                    variants={{
                                        initial: {
                                            opacity: 0,
                                        },
                                        enter: {
                                            opacity: 1,
                                            transition: {
                                                delay: 0.3,
                                                duration: 0.4,
                                            },
                                        },
                                        exit: {
                                            opacity: 0,
                                            transition: {
                                                duration: 0.3,
                                            },
                                        },
                                    }}
                                    animate="enter"
                                    exit="exit"
                                    initial="initial"
                                    className="w-auto bg-white z-10 shadow-sm rounded-2xl h-auto p-3 lg:p-6 pb-4 lg:pb-8 flex flex-col"
                                >
                                    {/* Close Button */}
                                    <div
                                        onClick={() =>
                                            setModal({
                                                isOpen: false,
                                                data: null,
                                            })
                                        }
                                        className="flex justify-end w-full h-fit z-0 cursor-pointer"
                                    >
                                        X
                                    </div>
                                    {/* End Close Button */}
                                    {/* Content */}
                                    <div className="w-fit min-w-56 lg:min-w-80 min-h-40 lg:min-h-56 flex flex-col gap-1">
                                        <h4
                                            className={`text-lg lg:text-xl font-semibold`}
                                        >
                                            {modal?.data?.title}
                                        </h4>
                                    </div>
                                    {/* End Content */}
                                </motion.div>
                                {/* End Modal */}
                            </div>
                            {/* End Modal Container */}
                        </motion.div>
                    )}
                </AnimatePresence>
                {/* End Modal */}
            </section>
            {/* End Service Section */}
        </>
    )
}
