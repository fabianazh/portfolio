'use client'

import { inter } from '@/app/fonts'
import ServiceCard from '@/components/Card/ServiceCard'
import { useEffect, useState } from 'react'
import { services } from '@/constants/component'
import { AnimatePresence, motion } from 'framer-motion'
import { disableScroll, enableScroll } from '@/utils/controllScroll'
import { FiX } from 'react-icons/fi'
import PrimaryButton from '@/components/Button/PrimaryButton'
import {
    perspectiveVariant,
    perspectiveItemVariant,
    overlayVariant,
} from '@/constants/variants'

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
                                    variants={overlayVariant}
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
                                            scale: 0.95,
                                        },
                                        enter: {
                                            opacity: 1,
                                            scale: 1,
                                            transition: {
                                                delay: 0.3,
                                                duration: 0.2,
                                            },
                                        },
                                        exit: {
                                            opacity: 0,
                                            scale: 0.95,
                                            transition: {
                                                duration: 0.2,
                                            },
                                        },
                                    }}
                                    animate="enter"
                                    exit="exit"
                                    initial="initial"
                                    className="w-auto min-w-56 lg:min-w-72 min-h-40 lg:min-h-56 bg-white z-10 shadow-sm rounded-2xl h-auto p-6 lg:p-8 pt-5 lg:pt-7 flex flex-row-reverse gap-6"
                                >
                                    {/* Close Button */}
                                    <div
                                        onClick={() =>
                                            setModal({
                                                isOpen: false,
                                                data: null,
                                            })
                                        }
                                        className="w-fit h-fit z-0 cursor-pointer translate-y-1 translate-x-1"
                                    >
                                        <FiX className="text-lg lg:text-xl" />
                                    </div>
                                    {/* End Close Button */}
                                    {/* Content */}
                                    <div className="w-fit flex flex-col shrink-0 gap-3">
                                        {/* Title */}
                                        <h4
                                            className={`text-xl lg:text-2xl font-semibold`}
                                        >
                                            {modal?.data?.title}
                                        </h4>
                                        {/* End Title */}
                                        {/* Project List */}
                                        <ul className="w-full flex flex-col list-none px-1">
                                            {modal?.data?.projects.map(
                                                (
                                                    item: string,
                                                    index: number
                                                ) => (
                                                    <motion.li
                                                        variants={
                                                            perspectiveItemVariant
                                                        }
                                                        custom={index}
                                                        initial="initial"
                                                        animate="enter"
                                                        exit="exit"
                                                        key={index}
                                                        className="text-sm font-normal flex items-center text-stone-700"
                                                    >
                                                        <span className="inline-block w-1 h-1 mr-2 rounded-full bg-black"></span>
                                                        {item}
                                                    </motion.li>
                                                )
                                            )}
                                        </ul>
                                        {/* End Project List */}
                                        {/* Button */}
                                        <PrimaryButton
                                            href={modal?.data?.href}
                                            className={`inline-block w-fit text-xs font-medium bg-black text-white mt-3 lg:mt-5`}
                                            as="link"
                                        >
                                            Order
                                        </PrimaryButton>
                                        {/* End Button */}
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
