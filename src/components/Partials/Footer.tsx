'use client'

import { mona } from '@/app/fonts'
import Link from 'next/link'
import { navItems } from '@/constants/component'
import AppIcon from '@/components/Icon/AppIcon'
import { Link as SamePageLink } from 'react-scroll'
import { motion } from 'framer-motion'
import { usePathname } from 'next/navigation'
import { useLocale } from '@/contexts/LocaleContext'
import localize from '@/libs/utils/localize'

export default function Footer() {
    const currentYear = new Date().getFullYear()
    const pathname = usePathname()

    const { locale, setLocale } = useLocale()

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
                                item: {
                                    link: string
                                    text: { en: string; id: string }
                                },
                                index: number
                            ) => (
                                <motion.li
                                    key={index}
                                    initial={{
                                        opacity: 0,
                                    }}
                                    whileInView={{
                                        opacity: 1,
                                        transition: {
                                            delay: 0.1 + index * 0.15,
                                        },
                                    }}
                                    viewport={{
                                        amount: 'some',
                                        once: true,
                                    }}
                                >
                                    {pathname === '/' ? (
                                        <>
                                            <SamePageLink
                                                className={`group text-[0.8em] pb-[0.5px] cursor-pointer relative text-black font-medium`}
                                                smooth={true}
                                                to={item.link}
                                                spy={true}
                                            >
                                                <>
                                                    {localize(
                                                        item.text,
                                                        locale
                                                    )}
                                                    <div
                                                        className={`absolute w-full h-[2px] scale-x-0 bottom-0 left-0 bg-stone-600 origin-bottom-right transition-transform duration-300 group-hover:scale-x-100 group-hover:origin-bottom-left`}
                                                    />
                                                </>
                                            </SamePageLink>
                                        </>
                                    ) : (
                                        <>
                                            <Link
                                                className={`group text-[0.8em] pb-[0.5px] cursor-pointer relative text-black font-medium`}
                                                href={`https://fabianazh.vercel.app#${item.link}`}
                                            >
                                                <>
                                                    {localize(
                                                        item.text,
                                                        locale
                                                    )}
                                                    <div
                                                        className={`absolute w-full h-[2px] scale-x-0 bottom-0 left-0 bg-stone-600 origin-bottom-right transition-transform duration-300 group-hover:scale-x-100 group-hover:origin-bottom-left`}
                                                    />
                                                </>
                                            </Link>
                                        </>
                                    )}
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
                    <div className="w-fit flex gap-5 text-xs lg:text-sm items-center">
                        <motion.button
                            initial={{
                                opacity: 0,
                            }}
                            whileInView={{
                                opacity: 1,
                                transition: {
                                    delay: 0.1 + 0 * 0.15,
                                },
                            }}
                            viewport={{
                                amount: 'some',
                                once: true,
                            }}
                            onClick={() => setLocale('en')}
                            className={`font-medium block text-xs shrink-0 hover:text-stone-900 transition-all ${
                                locale === 'en'
                                    ? 'text-stone-900'
                                    : 'text-stone-600'
                            }`}
                        >
                            EN
                        </motion.button>
                        <motion.button
                            initial={{
                                opacity: 0,
                            }}
                            whileInView={{
                                opacity: 1,
                                transition: {
                                    delay: 0.1 + 1 * 0.15,
                                },
                            }}
                            viewport={{
                                amount: 'some',
                                once: true,
                            }}
                            onClick={() => setLocale('id')}
                            className={`font-medium block text-xs shrink-0 hover:text-stone-900 transition-all ${
                                locale === 'id'
                                    ? 'text-stone-900'
                                    : 'text-stone-600'
                            }`}
                        >
                            ID
                        </motion.button>
                    </div>
                </div>
            </footer>
        </>
    )
}
