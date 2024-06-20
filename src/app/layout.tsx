import type { Metadata } from 'next'
import './globals.css'
import Header from '@/components/Partials/Header'
import Footer from '@/components/Partials/Footer'
import ScrollButton from '@/components/Button/ScrollButton'
import { dmSans } from './fonts'
import { Analytics } from '@vercel/analytics/react'

export const metadata: Metadata = {
    title: 'Fabian Azh',
    description:
        'I am Muhammad Fabian Azhar, a passionate Fullstack Developer and Unity Developer. With a strong foundation in both frontend and backend technologies, I create dynamic, user-friendly web applications and immersive game experiences. This repository showcases my projects, skills, and accomplishments in the world of software development.',
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang="en">
            <body className={dmSans.className}>
                <Analytics />
                <Header />
                {children}
                <ScrollButton />
                <Footer />
            </body>
        </html>
    )
}
