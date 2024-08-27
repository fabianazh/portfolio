'use client'

import { mona } from '@/app/fonts'
import Link from 'next/link'
import { navItems } from '@/constants/component'
import AppIcon from '@/components/Icon/AppIcon'
import { Link as SamePageLink } from 'react-scroll'
import { motion } from 'framer-motion'

export default function Footer() {
    const currentYear = new Date().getFullYear()

    return (
        <>
            <footer
                id="footer"
                className={`flex flex-col gap-2 lg:gap-1 relative px-5 lg:px-16 py-4 lg:py-6 ${mona.className}`}
            >
                <nav className="w-full flex flex-col lg:flex-row justify-between lg:items-center lg:gap-4">
                    <AppIcon nameOnly size="lg" />
                    <ul className="w-fit flex gap-2 lg:gap-4">
                        {navItems.map(
                            (
                                navitem: { link: string; text: string },
                                index: number
                            ) => (
                                <motion.li
                                    key={index}
                                    initial={{
                                        opacity: 0,
                                        y: 4,
                                    }}
                                    whileInView={{
                                        opacity: 1,
                                        y: 0,
                                        transition: {
                                            delay: 0.1 + index * 0.12,
                                        },
                                    }}
                                    viewport={{
                                        amount: 'some',
                                        once: true,
                                    }}
                                >
                                    <SamePageLink
                                        className={`group text-[0.8em] pb-[0.5px] cursor-pointer relative text-black font-medium`}
                                        smooth={true}
                                        to={navitem.link}
                                        spy={true}
                                    >
                                        {navitem.text}
                                        <div
                                            className={`absolute w-full h-[2px] scale-x-0 bottom-0 left-0 bg-stone-600 origin-bottom-right transition-transform duration-300 group-hover:scale-x-100 group-hover:origin-bottom-left`}
                                        />
                                    </SamePageLink>
                                </motion.li>
                            )
                        )}
                    </ul>
                </nav>
                <div
                    className={`flex items-center justify-between gap-6 ${mona.className}`}
                >
                    <span className="font-medium lg:font-semibold text-xs lg:text-sm text-stone-600">
                        ©{currentYear} Fabianazh. All rights reserved
                    </span>
                    <Link
                        href={'https://fabianazh.vercel.app'}
                        className="font-medium block text-stone-600 text-sm shrink-0 block"
                    >
                        v1
                    </Link>
                </div>
            </footer>
        </>
    )
}
