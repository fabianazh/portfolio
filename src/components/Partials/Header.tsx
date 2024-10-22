'use client'

import Navbar from '@/components/Partials/Navbar'
import { useCallback, useEffect, useState } from 'react'
import {
    AnimatePresence,
    motion,
    useMotionValueEvent,
    useScroll,
} from 'framer-motion'
import { overlayVariant } from '@/constants/variants'
import NavButton from '@/components/Partials/NavButton'
import Link from 'next/link'
import { mona } from '@/app/fonts'
import { navItems } from '@/constants/component'
import { Link as SamePageLink } from 'react-scroll'

export default function Header() {
    const [hidden, setHidden] = useState<boolean>(true)
    const [isOpen, setIsOpen] = useState<boolean>(false)
    const [activeSection, setActiveSection] = useState<string>('home')

    const { scrollY } = useScroll()

    useMotionValueEvent(scrollY, 'change', (latest) => {
        const previous = scrollY.getPrevious() ?? 0
        const viewportHeight = window.innerHeight
        const halfScreen = viewportHeight / 2

        if (latest < halfScreen) {
            setHidden(true)
        } else if (latest > halfScreen && latest < viewportHeight) {
            setHidden(false)
        } else if (latest > viewportHeight) {
            if (latest > previous && latest > 300) {
                setHidden(true)
            } else {
                setHidden(false)
            }
        }

        if (isOpen) {
            setIsOpen(false)
        }
    })

    const handleIntersection = useCallback(
        (entries: IntersectionObserverEntry[]) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setActiveSection(entry.target.id)
                }
            })
        },
        []
    )

    useEffect(() => {
        const observer = new IntersectionObserver(handleIntersection, {
            root: null,
            rootMargin: '0px',
            threshold: 0.5,
        })

        const sections = document.querySelectorAll('section')
        sections.forEach((section) => observer.observe(section))

        return () => {
            sections.forEach((section) => observer.unobserve(section))
        }
    }, [handleIntersection])

    return (
        <>
            <AnimatePresence>
                {isOpen && (
                    <>
                        {/* Overlay */}
                        <motion.div
                            onClick={() => setIsOpen(!isOpen)}
                            variants={overlayVariant}
                            animate="enter"
                            exit="exit"
                            initial="initial"
                            className="fixed w-screen h-screen top-0 left-0 bg-black/20 backdrop-blur-sm z-40"
                        ></motion.div>
                        {/* End Overlay */}
                        {/* Navbar */}
                        <Navbar isOpen={isOpen} setIsOpen={setIsOpen} />
                        {/* Navbar */}
                    </>
                )}
            </AnimatePresence>
            {/* Header */}
            <motion.header
                // variants={{
                //     visible: { y: 0 },
                //     hidden: { y: '-100%' },
                // }}
                // animate={hidden ? 'hidden' : 'visible'}
                // transition={{ duration: 0.35, ease: 'easeInOut' }}
                className={`w-full h-fit bg-transparent fixed top-0 left-0 z-30 px-0 lg:px-14 transition-all duration-300 ${
                    hidden
                        ? '-translate-y-10 opacity-0'
                        : 'translate-y-0 lg:translate-y-2.5 opacity-100'
                }`}
            >
                {/* Nav Container */}
                <div
                    className={`relative w-full flex items-center justify-between bg-white/50 z-10 px-5 lg:px-6 py-3 lg:py-2 backdrop-blur-md rounded-b-xl lg:rounded-b-full lg:rounded-full lg:border border-stone-100 shadow-sm`}
                >
                    <div className="w-fit flex gap-10 items-center">
                        {/* Logo and Name */}
                        <Link
                            href={'https://fabianazh.vercel.app'}
                            className={`text-sm text-black w-fit h-fit inline-block font-medium lg:font-semibold group ${mona.className}`}
                        >
                            Fabian Azhar
                        </Link>
                        {/* End Logo and Name */}
                        {/* Navbar */}
                        <nav className="w-fit hidden lg:flex z-0">
                            <ul className="w-fit flex gap-2 lg:gap-4">
                                {navItems.map(
                                    (
                                        navitem: { link: string; text: string },
                                        index: number
                                    ) => (
                                        <li key={index}>
                                            <SamePageLink
                                                className={`group text-[0.8em] cursor-pointer relative text-black font-medium ${
                                                    activeSection ===
                                                    navitem.link
                                                        ? 'active'
                                                        : ''
                                                }`}
                                                smooth={true}
                                                to={navitem.link}
                                                spy={true}
                                            >
                                                {navitem.text}
                                                <div
                                                    className={`absolute w-full h-[2px] ${
                                                        activeSection ===
                                                        navitem.link
                                                            ? 'scale-x-100'
                                                            : 'scale-x-0'
                                                    } bottom-0 left-0 bg-stone-600 origin-bottom-right transition-transform duration-300 group-hover:scale-x-100 group-hover:origin-bottom-left`}
                                                />
                                            </SamePageLink>
                                        </li>
                                    )
                                )}
                            </ul>
                        </nav>
                        {/* End Navbar */}
                    </div>

                    {/* Nav Button */}
                    <NavButton isOpen={isOpen} setIsOpen={setIsOpen} />
                    {/* End Nav Button */}
                </div>
                {/* End Nav Container */}
            </motion.header>
            {/* End Header */}
        </>
    )
}
