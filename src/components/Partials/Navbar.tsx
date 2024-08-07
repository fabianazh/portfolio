'use client'

import Link from 'next/link'
import { navItems } from '@/constants/navItems'
import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { navContainerVariants, perspectiveText } from '@/variants/navbar'

function NavButton({
    className,
    isActive,
    setIsActive,
}: {
    isActive: boolean
    setIsActive: (isActive: boolean) => void
    className?: string
}) {
    return (
        <>
            <button
                onClick={() => setIsActive(!isActive)}
                className="outline-none grid place-items-center bg-transparent cursor-pointer w-fit h-fit relative top-0 right-0 border-none z-[100]"
            >
                <svg
                    width="23"
                    height="23"
                    viewBox="0 0 23 23"
                    className="w-6 h-6 lg:w-5 lg:h-5"
                >
                    <motion.path
                        fill="transparent"
                        strokeWidth="2"
                        stroke="hsl(0, 0%, 18%)"
                        strokeLinecap="round"
                        variants={{
                            closed: { d: 'M 2 2.5 L 20 2.5' },
                            open: { d: 'M 3 16.5 L 17 2.5' },
                        }}
                    />
                    <motion.path
                        fill="transparent"
                        strokeWidth="2"
                        stroke="hsl(0, 0%, 18%)"
                        strokeLinecap="round"
                        d="M 2 9.423 L 20 9.423"
                        variants={{
                            closed: { opacity: 1 },
                            open: { opacity: 0 },
                        }}
                        transition={{ duration: 0.1 }}
                    />
                    <motion.path
                        fill="transparent"
                        strokeWidth="2"
                        stroke="hsl(0, 0%, 18%)"
                        strokeLinecap="round"
                        variants={{
                            closed: { d: 'M 2 16.346 L 20 16.346' },
                            open: { d: 'M 3 2.5 L 17 16.346' },
                        }}
                    />
                </svg>
            </button>
        </>
    )
}

export default function Navbar({ className }: { className?: string }) {
    const [isActive, setIsActive] = useState<boolean>(false)

    return (
        <>
            {/* Nav Item */}
            <motion.div
                initial={false}
                animate={isActive ? 'open' : 'closed'}
                className={`relative flex items-center w-fit h-full bg-transparent ${className}`}
            >
                <NavButton isActive={isActive} setIsActive={setIsActive} />
                <motion.div
                    variants={navContainerVariants}
                    animate={isActive ? 'open' : 'closed'}
                    initial="closed"
                    className={`absolute right-0 top-0 bg-white rounded-xl border flex flex-col gap-2 lg:gap-2`}
                >
                    <AnimatePresence>
                        {isActive && (
                            <motion.div className="px-10 pt-12 pb-20">
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
                                                <li key={index}>
                                                    <motion.div
                                                        variants={
                                                            perspectiveText
                                                        }
                                                        custom={index}
                                                        animate="enter"
                                                        exit="exit"
                                                        initial="initial"
                                                        className="relaive w-fit inline-block h-fit group"
                                                    >
                                                        <Link
                                                            href={item.link}
                                                            className={`text-base lg:text-xl relative pb-[1px] text-black font-medium`}
                                                        >
                                                            {item.text}
                                                            <div className="absolute w-full h-[2px] scale-x-0 bottom-0 left-0 bg-stone-600 origin-bottom-right transition-transform duration-300 group-hover:scale-x-100 group-hover:origin-bottom-left" />
                                                        </Link>
                                                    </motion.div>
                                                </li>
                                            )
                                        )}
                                    </ul>
                                </nav>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </motion.div>
            </motion.div>
            {/* End Nav Item */}
        </>
    )
}
