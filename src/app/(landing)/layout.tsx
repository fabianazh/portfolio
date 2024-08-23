'use client'

import { useEffect } from 'react'
import Footer from '@/components/Partials/Footer'
import Lenis from 'lenis'

export default function LandingLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    useEffect(() => {
        const lenis = new Lenis()

        function raf(time: number) {
            lenis.raf(time)
            requestAnimationFrame(raf)
        }

        requestAnimationFrame(raf)
    }, [])

    return (
        <>
            {children}
            <Footer />
        </>
    )
}
