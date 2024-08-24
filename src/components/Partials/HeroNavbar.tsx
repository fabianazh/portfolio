'use client'

import { Link } from 'react-scroll'
import { navItems } from '@/constants/component'
import { AnimatePresence, motion } from 'framer-motion'
import { perspectiveItemVariant } from '@/constants/variants'
import { mona } from '@/app/fonts'
import NavButton from '@/components/Partials/NavButton'

export default function Navbar({
    className,
    isOpen,
    setIsOpen,
}: {
    className?: string
    isOpen: boolean
    setIsOpen: (isopen: boolean) => void
}) {
    return (
        <>
            {/* Nav Item */}
            <motion.div
                initial={false}
                animate={isOpen ? 'open' : 'closed'}
                className={`relative flex items-center w-fit h-full bg-transparent ${className}`}
            >
                <NavButton
                    isOpen={isOpen}
                    setIsOpen={setIsOpen}
                    className={`w-6 h-6 lg:w-5 lg:h-5`}
                />
                <motion.div
                    variants={{
                        open: {
                            width: 'auto',
                            height: 'auto',
                            transition: {
                                duration: 0.5,
                                ease: [0.76, 0, 0.24, 1],
                            },
                            opacity: 100,
                        },
                        closed: {
                            width: 0,
                            height: 0,
                            padding: 0,
                            transition: {
                                duration: 0.5,
                                delay: 0.35,
                                ease: [0.76, 0, 0.24, 1],
                            },
                            opacity: 0,
                        },
                    }}
                    animate={isOpen ? 'open' : 'closed'}
                    initial="closed"
                    className={`absolute -right-3 -top-5 lg:-top-3 bg-white rounded-xl border flex flex-col gap-2 lg:gap-2`}
                >
                    <AnimatePresence>
                        {isOpen && (
                            <motion.div className="pl-8 pr-20 lg:pl-10 lg:pr-16 flex flex-col gap-6 lg:gap-8 pt-6 lg:pt-10 pb-12 lg:pb-16 z-50 w-auto lg:w-72">
                                <motion.div
                                    variants={perspectiveItemVariant}
                                    custom={0}
                                    animate="enter"
                                    exit="exit"
                                    initial="initial"
                                    className="flex flex-col"
                                >
                                    <span
                                        className={`text-base lg:text-lg text-black w-fit h-fit inline-block font-semibold group ${mona.className}`}
                                    >
                                        Fabian Azhar
                                    </span>
                                    <span
                                        className={`text-sm lg:text-sm w-fit h-fit inline-block font-medium group text-stone-500`}
                                    >
                                        Full stack developer
                                    </span>
                                </motion.div>
                                <nav className="border-box">
                                    <ul
                                        className={`flex flex-col gap-2 lg:gap-2`}
                                    >
                                        {navItems.map(
                                            (
                                                item: {
                                                    link: string
                                                    text: string
                                                },
                                                index: number
                                            ) => (
                                                <motion.li
                                                    key={index}
                                                    variants={
                                                        perspectiveItemVariant
                                                    }
                                                    custom={index}
                                                    animate="enter"
                                                    exit="exit"
                                                    initial="initial"
                                                    className="relative w-fit inline-block h-fit group"
                                                >
                                                    <Link
                                                        onClick={() =>
                                                            setIsOpen(!isOpen)
                                                        }
                                                        className={`text-base lg:text-base cursor-pointer relative pb-[1px] text-black font-medium`}
                                                        smooth={true}
                                                        to={item.link}
                                                        spy={true}
                                                    >
                                                        {item.text}
                                                        <div className="absolute w-full h-[2px] scale-x-0 bottom-0 left-0 bg-stone-600 origin-bottom-right transition-transform duration-300 group-hover:scale-x-100 group-hover:origin-bottom-left" />
                                                    </Link>
                                                </motion.li>
                                            )
                                        )}
                                    </ul>
                                </nav>
                                {/* Bottom Menu */}
                                <motion.div
                                    variants={perspectiveItemVariant}
                                    custom={1}
                                    animate="enter"
                                    exit="exit"
                                    initial="initial"
                                    className="flex w-full flex-col gap-5"
                                >
                                    <span className="text-xs lg:text-sm whitespace-nowrap">
                                        &copy; {new Date().getFullYear()} Fabian
                                        Azhar.
                                        <span className="block">
                                            All rights reserved.
                                        </span>
                                    </span>
                                    {/* Contact */}
                                    <div className="flex gap-3 lg:gap-2 w-full">
                                        <div className="text-xs lg:text-xs border px-3 py-0.5 rounded-full bg-stone-200 font-semibold">
                                            EN
                                        </div>
                                        <div className="text-xs lg:text-xs border px-3 py-0.5 rounded-full font-semibold">
                                            ID
                                        </div>
                                    </div>
                                    {/* End Contact */}
                                </motion.div>
                                {/* End Bottom Menu */}
                            </motion.div>
                        )}
                    </AnimatePresence>
                </motion.div>
            </motion.div>
            {/* End Nav Item */}
        </>
    )
}
