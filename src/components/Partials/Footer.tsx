import { mona } from '@/app/fonts'
import Link from 'next/link'
import { navItems } from '@/constants/component'
import AppIcon from '@/components/Icon/AppIcon'

export default function Footer() {
    const currentYear = new Date().getFullYear()

    return (
        <>
            <footer
                id="footer"
                className={`flex flex-col relative gap-1 px-5 lg:px-16 py-4 ${mona.className}`}
            >
                {/* <nav className="w-full flex justify-between items-center gap-4">
                    <AppIcon nameOnly />
                    <ul className="w-fit flex gap-2 lg:gap-4">
                        {navItems.map((navitem, index: number) => (
                            <li key={index}>
                                <Link
                                    href={navitem.link}
                                    className="text-xs lg:text-sm font-medium"
                                >
                                    {navitem.text}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav> */}
                <div
                    className={`flex flex-col lg:flex-row items-center justify-between gap-6${mona.className}`}
                >
                    <span className="font-medium lg:font-semibold text-sm text-stone-700">
                        ©{currentYear} Fabianazh. All rights reserved
                    </span>
                    <Link
                        href={'https://fabianazh.vercel.app'}
                        className="font-medium block text-stone-700 lg:text-black"
                    >
                        v1
                    </Link>
                </div>
            </footer>
        </>
    )
}
