'use client'

import { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'
import { urbanist } from '@/app/fonts'
import Link from 'next/link'
import { RxHamburgerMenu } from 'react-icons/rx'
import Navbar from '@/components/Partials/Navbar'
import { BiX } from 'react-icons/bi'
import { disableScroll, enableScroll } from '@/utils/controllScroll'

export default function Header() {
    const [isNavOpen, setIsNavOpen] = useState<boolean>(false)

    const pathname = usePathname()

    function openNav() {
        setIsNavOpen((isNavOpen) => !isNavOpen)
    }

    useEffect(() => {
        isNavOpen === true ? disableScroll() : enableScroll()
    }, [isNavOpen])

    useEffect(() => {
        setIsNavOpen(false)
    }, [pathname])

    return (
        <>
            <header className="absolute top-0 left-0 z-50 flex h-auto py-3 lg:py-0 lg:h-16 text-white backdrop-blur-md lg:absolute lg:bg-transparent px-6 lg:px-16 w-screen lg:w-full bg-transparent">
                <div className="w-11/12 lg:w-full mx-auto block lg:hidden h-[2px] bg-black shadow-sm absolute bottom-0 left-1/2 -translate-x-1/2"></div>
                <div className="w-full h-full items-center flex justify-between">
                    {/* Logo and Name */}
                    <Link
                        href="https://fabianazh.vercel.app"
                        className={`text-black text-base lg:text-xl font-semibold transition lg:pb-1.5 after:border-b-2 after:block after:border-black after:scale-x-0 hover:after:scale-x-100 after:transition-transform ${urbanist.className}`}
                    >
                        Fabianazh.
                    </Link>
                    {/* End Logo and Name */}

                    {/* Hamburger Menu */}
                    <div
                        onClick={() => openNav()}
                        className="flex relative border text-2xl xl:hidden z-50 text-black"
                    >
                        <BiX
                            className={`text-3xl absolute top-1/2 -translate-y-1/2 -right-0.5 transition-all ${
                                isNavOpen ? 'scale-100' : 'scale-0'
                            }`}
                        />
                        <RxHamburgerMenu
                            className={`absolute top-1/2 -translate-y-1/2 right-0 transition-all ${
                                isNavOpen ? 'scale-0' : 'scale-100'
                            }`}
                        />
                    </div>
                    {/* End Hamburger Menu */}

                    <Navbar />
                </div>
            </header>
        </>
    )
}
