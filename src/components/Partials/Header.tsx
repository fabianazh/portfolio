'use client'

import Navbar from '@/components/Partials/Navbar'
import AppIcon from '@/components/Icon/AppIcon'
import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { overlayVariant } from '@/variants/navbar'
import { disableScroll, enableScroll } from '@/utils/controllScroll'
import NavButton from '@/components/Partials/NavButton'

export default function Header() {
    const [isOpen, setIsOpen] = useState<boolean>(false)
    const [isScrolled, setIsScrolled] = useState<boolean>(false)

    const handleScroll = () => {
        const scrollPosition = window.scrollY
        const viewportHeight = window.innerHeight

        const threshold = viewportHeight / 2

        if (scrollPosition > threshold) {
            setIsScrolled(true)
        } else {
            setIsScrolled(false)
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll)
        handleScroll()

        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])

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
            {/* Navbar */}
            <Navbar isOpen={isOpen} setIsOpen={setIsOpen} />
            {/* Navbar */}
            {/* Header */}
            <header
                className={`w-full h-fit bg-transparent fixed top-0 left-0 w-full z-20 px-0 lg:px-16 transition-all duration-300 ${
                    isScrolled
                        ? 'translate-y-0 lg:translate-y-3 opacity-100'
                        : '-translate-y-10 opacity-0'
                }`}
            >
                {/* Nav Container */}
                <div
                    className={`relative w-full flex items-center justify-between bg-white/95 z-10 px-5 lg:px-6 py-3 lg:py-2 backdrop-blur-sm rounded-b-xl lg:rounded-full`}
                >
                    {/* Logo and Name */}
                    <AppIcon nameOnly />
                    {/* End Logo and Name */}

                    {/* Nav Button */}
                    <NavButton isOpen={isOpen} setIsOpen={setIsOpen} />
                    {/* End Nav Button */}
                </div>
                {/* End Nav Container */}
            </header>
            {/* End Header */}
        </>
    )
}
