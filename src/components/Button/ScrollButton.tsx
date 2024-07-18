'use client'

import { useEffect, useState } from 'react'
import { TbChevronsUp } from 'react-icons/tb'

export default function ScrollButton() {
    const [isScrolled, setIsScrolled] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            const screenHeight = window.innerHeight
            const currentScrollPos = window.pageYOffset
            setIsScrolled(currentScrollPos > screenHeight)
        }

        window.addEventListener('scroll', handleScroll)

        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])
    return (
        <>
            <div
                className={`aspect-square text-2xl z-[100] shadow hover:translate-y-0.5 w-8 rounded-full bg-stone-300 transition-all hover:bg-stone-300 duration-300 fixed bottom-4 grid place-items-center right-4 ${
                    isScrolled ? 'scale-100' : 'scale-0'
                }`}
            >
                <a href="#home">
                    <TbChevronsUp />
                </a>
            </div>
        </>
    )
}
