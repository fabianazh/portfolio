'use client'

import { useEffect } from 'react'
import Lenis from 'lenis'
import Footer from '@/components/Partials/Footer'
import ScrollButton from '@/components/Button/ScrollButton'

export default function LandingLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    useEffect(() => {
        const lenis = new Lenis()

        function raf(time: any) {
            lenis.raf(time)
            requestAnimationFrame(raf)
        }

        requestAnimationFrame(raf)
    }, [])

    return (
        <main>
            {children}
            <ScrollButton />
            <Footer />
        </main>
    )
}
