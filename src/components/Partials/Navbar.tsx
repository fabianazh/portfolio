'use client'

import { Link } from 'react-scroll'
import { navItems } from '@/constants/component'
import { AnimatePresence, motion } from 'framer-motion'
import { perspectiveTextVariant } from '@/variants/navbar'
import { mona } from '@/app/fonts'
import AppIcon from '@/components/Icon/AppIcon'

export default function Navbar({
    isOpen,
    setIsOpen,
}: {
    isOpen: boolean
    setIsOpen: (isopen: boolean) => void
}) {
    return (
        <>
            {/* Nav Container */}
            <motion.div
                variants={{
                    open: {
                        transition: {
                            duration: 0.4,
                        },
                        opacity: 100,
                    },
                    closed: {
                        transition: {
                            duration: 0.6,
                        },
                        opacity: 0,
                    },
                }}
                animate={isOpen ? 'open' : 'closed'}
                initial="closed"
                className={`fixed bottom-0 lg:bottom-auto flex justify-center transition-all duration-400 lg:top-5 lg:right-5 z-50 h-fit w-full lg:w-auto px-4 lg:px-0`}
            >
                <AnimatePresence>
                    {isOpen && (
                        <div className="pl-8 pr-8 lg:pl-10 lg:pr-10 flex flex-col gap-12 lg:gap-16 bg-white rounded-b-none lg:rounded-b-xl rounded-xl pt-6 lg:pt-10 pb-9 lg:pb-16 w-full lg:w-80">
                            <motion.div
                                variants={perspectiveTextVariant}
                                custom={0}
                                animate="enter"
                                exit="exit"
                                initial="initial"
                                className="w-full flex justify-between relative lg:static h-fit items-center lg:items-start"
                            >
                                <AppIcon />
                                <button
                                    onClick={() => setIsOpen(!isOpen)}
                                    className="outline-none grid place-items-center bg-transparent cursor-pointer w-fit h-fit relative top-0 right-0 border-none z-[100]"
                                >
                                    <svg
                                        width="23"
                                        height="23"
                                        viewBox="0 0 23 23"
                                        className="w-4 h-4 lg:w-4 lg:h-4"
                                    >
                                        <path
                                            fill="transparent"
                                            strokeWidth="3"
                                            stroke="hsl(0, 0%, 18%)"
                                            strokeLinecap="round"
                                            d="M 3 3 L 20 20"
                                        />
                                        <path
                                            fill="transparent"
                                            strokeWidth="3"
                                            stroke="hsl(0, 0%, 18%)"
                                            strokeLinecap="round"
                                            d="M 3 20 L 20 3"
                                        />
                                    </svg>
                                </button>
                            </motion.div>
                            {/* Nav Item */}
                            <nav className="border-box flex flex-col gap-2">
                                <motion.span
                                    variants={perspectiveTextVariant}
                                    custom={1}
                                    animate="enter"
                                    exit="exit"
                                    initial="initial"
                                    className={`text-lg lg:text-xl font-semibold ${mona.className}`}
                                >
                                    Fabian Azhar
                                </motion.span>
                                <ul className={`flex flex-col gap-2 lg:gap-2`}>
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
                                                    perspectiveTextVariant
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
                                                    className={`text-sm lg:text-base cursor-pointer relative pb-[1px] text-black font-medium`}
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
                            {/* End Nav Item */}
                            {/* Bottom Menu */}
                            <motion.div
                                variants={perspectiveTextVariant}
                                custom={1}
                                animate="enter"
                                exit="exit"
                                initial="initial"
                                className="flex w-full flex-col gap-5"
                            >
                                <span className="text-xs lg:text-sm">
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
                        </div>
                    )}
                </AnimatePresence>
            </motion.div>
            {/* End Nav Container */}
        </>
    )
}
