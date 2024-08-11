'use client'

import { Link } from 'react-scroll'
import { navItems } from '@/constants/component'
import { AnimatePresence, motion } from 'framer-motion'
import { navContainerVariant, perspectiveTextVariant } from '@/variants/navbar'
import { mona } from '@/app/fonts'
import SecondaryButton from '@/components/Button/SecondaryButton'

export default function Navbar({
    isOpen,
    setIsOpen,
}: {
    isOpen: boolean
    setIsOpen: (isopen: boolean) => void
}) {
    return (
        <>
            {/* Nav Item */}
            <motion.div
                variants={navContainerVariant}
                animate={isOpen ? 'open' : 'closed'}
                initial="closed"
                className={`fixed bottom-0 lg:bottom-auto lg:top-5 lg:right-5 bg-white rounded-xl border flex flex-col gap-2 lg:gap-2 z-50 h-fit w-auto left-1/2 -translate-x-1/2 lg:left-auto lg:-translate-x-0`}
            >
                <AnimatePresence>
                    {isOpen && (
                        <motion.div className="pl-8 pr-8 lg:pl-10 lg:pr-10 flex flex-col gap-6 lg:gap-8 pt-6 lg:pt-10 pb-12 lg:pb-16 z-50 w-[90vw] lg:w-96">
                            <motion.div
                                variants={perspectiveTextVariant}
                                custom={0}
                                animate="enter"
                                exit="exit"
                                initial="initial"
                                className="w-full flex justify-between relative lg:static h-fit items-center lg:items-start"
                            >
                                <div className="flex flex-col">
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
                                </div>
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
                            <nav className="border-box">
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
                                        href={'https://github.com/fabianazh'}
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
            {/* End Nav Item */}
        </>
    )
}
