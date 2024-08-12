'use client'

import HeroNavbar from '@/components/Partials/HeroNavbar'
import AppIcon from '@/components/Icon/AppIcon'
import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { overlayVariant } from '@/variants/navbar'

export default function HeroHeader() {
    const [isOpen, setIsOpen] = useState<boolean>(false)

    useEffect(() => {
        window.addEventListener('scroll', () => setIsOpen(false))

        return () => {
            window.removeEventListener('scroll', () => setIsOpen(false))
        }
    }, [isOpen])

    return (
        <>
            {/* Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        onClick={() => setIsOpen(!isOpen)}
                        variants={overlayVariant}
                        animate="enter"
                        exit="exit"
                        initial="initial"
                        className="fixed w-screen h-screen top-0 left-0 bg-black/20 backdrop-blur-sm z-30"
                    ></motion.div>
                )}
            </AnimatePresence>
            {/* End Overlay */}
            {/* Header */}
            <header className="relative items-center justify-between top-0 left-0 z-40 flex h-fit w-full lg:w-full bg-transparent">
                {/* Logo and Name */}
                <AppIcon className={isOpen ? 'blur-sm' : ''} />
                {/* End Logo and Name */}

                {/* Navbar */}
                <HeroNavbar isOpen={isOpen} setIsOpen={setIsOpen} />
                {/* End Navbar */}
            </header>
            {/* End Header */}
        </>
    )
}
