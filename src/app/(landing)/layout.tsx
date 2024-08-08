'use client'

import Footer from '@/components/Partials/Footer'
import ScrollButton from '@/components/Button/ScrollButton'
import SmoothScroll from '@/components/Other/SmoothScroll'

export default function LandingLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <>
            <SmoothScroll />
            <main>{children}</main>
            <ScrollButton />
            <Footer />
        </>
    )
}
