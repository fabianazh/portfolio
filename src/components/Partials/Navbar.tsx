'use client'

import Link from 'next/link'
import { navItems } from '@/constants/navItems'
import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import {
    navContainerVariant,
    perspectiveTextVariant,
    overlayVariant,
} from '@/variants/navbar'
import { mona } from '@/app/fonts'
import { disableScroll, enableScroll } from '@/utils/controllScroll'
import SecondaryButton from '@/components/Button/SecondaryButton'

function NavButton({
    isActive,
    setIsActive,
}: {
    isActive: boolean
    setIsActive: (isActive: boolean) => void
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

    useEffect(() => {
        window.addEventListener('scroll', () => setIsActive(false))

        return () => {
            window.removeEventListener('scroll', () => setIsActive(false))
        }
    }, [isActive])

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
                    variants={navContainerVariant}
                    animate={isActive ? 'open' : 'closed'}
                    initial="closed"
                    className={`absolute right-0 top-0 bg-white rounded-xl border flex flex-col gap-2 lg:gap-2`}
                >
                    <AnimatePresence>
                        {isActive && (
                            <>
                                <motion.div
                                    onClick={() => setIsActive(!isActive)}
                                    variants={overlayVariant}
                                    animate="enter"
                                    exit="exit"
                                    initial="initial"
                                    className="fixed w-screen h-screen top-0 left-0 bg-black/10 -z-[1]"
                                ></motion.div>
                                <motion.div className="pl-8 pr-20 lg:pl-10 lg:pr-10 flex flex-col gap-6 lg:gap-8 pt-6 lg:pt-10 pb-12 lg:pb-16 z-50">
                                    <motion.div
                                        variants={perspectiveTextVariant}
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
                                                    <li key={index}>
                                                        <motion.div
                                                            onClick={() =>
                                                                setIsActive(
                                                                    !isActive
                                                                )
                                                            }
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
                                                                href={item.link}
                                                                className={`text-base lg:text-base relative pb-[1px] text-black font-medium`}
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
                                    <div className="flex gap-10 lg:gap-14 w-full">
                                        <motion.div
                                            variants={perspectiveTextVariant}
                                            custom={3}
                                            animate="enter"
                                            exit="exit"
                                            initial="initial"
                                            className="flex flex-col gap-1"
                                        >
                                            <SecondaryButton
                                                href={
                                                    'https://instagram.com/fabianazhrr'
                                                }
                                                className="text-sm"
                                            >
                                                Instagram
                                            </SecondaryButton>
                                            <SecondaryButton
                                                href={
                                                    'https://www.facebook.com/profile.php?id=61560075789729'
                                                }
                                                className="text-sm"
                                            >
                                                Facebook
                                            </SecondaryButton>
                                        </motion.div>
                                        <motion.div
                                            variants={perspectiveTextVariant}
                                            custom={4}
                                            animate="enter"
                                            exit="exit"
                                            initial="initial"
                                            className="flex flex-col gap-1"
                                        >
                                            <SecondaryButton
                                                href={
                                                    'https://github.com/fabianazh'
                                                }
                                                className="text-sm"
                                            >
                                                Github
                                            </SecondaryButton>
                                            <SecondaryButton
                                                href={'#'}
                                                className="text-sm whitespace-nowrap"
                                            >
                                                Linked in
                                            </SecondaryButton>
                                        </motion.div>
                                    </div>
                                </motion.div>
                            </>
                        )}
                    </AnimatePresence>
                </motion.div>
            </motion.div>
            {/* End Nav Item */}
        </>
    )
}
