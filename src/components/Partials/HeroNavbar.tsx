'use client'

import { Link as SamePageLink } from 'react-scroll'
import Link from 'next/link'
import { navItems } from '@/constants/component'
import { AnimatePresence, motion } from 'framer-motion'
import { navContainerVariant, perspectiveTextVariant } from '@/variants/navbar'
import { mona } from '@/app/fonts'
import SecondaryButton from '@/components/Button/SecondaryButton'
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
                    variants={navContainerVariant}
                    animate={isOpen ? 'open' : 'closed'}
                    initial="closed"
                    className={`absolute -right-3 -top-5 lg:-top-3 bg-white rounded-xl border flex flex-col gap-2 lg:gap-2`}
                >
                    <AnimatePresence>
                        {isOpen && (
                            <motion.div className="pl-8 pr-20 lg:pl-10 lg:pr-16 flex flex-col gap-6 lg:gap-8 pt-6 lg:pt-10 pb-12 lg:pb-16 z-50">
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
                                                    samePage: boolean
                                                },
                                                index: number
                                            ) => (
                                                <li key={index}>
                                                    <motion.div
                                                        variants={
                                                            perspectiveTextVariant
                                                        }
                                                        custom={index}
                                                        animate="enter"
                                                        exit="exit"
                                                        initial="initial"
                                                        className="relative w-fit inline-block h-fit group"
                                                    >
                                                        {item.samePage ? (
                                                            <SamePageLink
                                                                onClick={() =>
                                                                    setIsOpen(
                                                                        !isOpen
                                                                    )
                                                                }
                                                                className={`text-base lg:text-base cursor-pointer relative pb-[1px] text-black font-medium`}
                                                                smooth={true}
                                                                to={item.link}
                                                                spy={true}
                                                            >
                                                                {item.text}
                                                                <div className="absolute w-full h-[2px] scale-x-0 bottom-0 left-0 bg-stone-600 origin-bottom-right transition-transform duration-300 group-hover:scale-x-100 group-hover:origin-bottom-left" />
                                                            </SamePageLink>
                                                        ) : (
                                                            <Link
                                                                onClick={() =>
                                                                    setIsOpen(
                                                                        !isOpen
                                                                    )
                                                                }
                                                                className={`text-base lg:text-base cursor-pointer relative pb-[1px] text-black font-medium`}
                                                                href={item.link}
                                                            >
                                                                {item.text}
                                                                <div className="absolute w-full h-[2px] scale-x-0 bottom-0 left-0 bg-stone-600 origin-bottom-right transition-transform duration-300 group-hover:scale-x-100 group-hover:origin-bottom-left" />
                                                            </Link>
                                                        )}
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
                        )}
                    </AnimatePresence>
                </motion.div>
            </motion.div>
            {/* End Nav Item */}
        </>
    )
}
