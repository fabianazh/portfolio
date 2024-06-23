import type { Metadata } from 'next'
import './globals.css'
import Header from '@/components/Partials/Header'
import Footer from '@/components/Partials/Footer'
import ScrollButton from '@/components/Button/ScrollButton'
import { dmSans } from './fonts'
import { Analytics } from '@vercel/analytics/react'

export const metadata: Metadata = {
    metadataBase: new URL('https://fabianazh.vercel.app'),
    title: {
        default: 'Fabian Azhar',
        template: '%s | Fabian Azhar',
    },
    description: 'Developer, designer, and creator.',
    openGraph: {
        title: 'Fabian Azhar',
        description: 'Developer, designer, and creator.',
        url: 'https://fabianazh.vercel.app',
        siteName: 'Fabian Azhar',
        locale: 'en_US',
        type: 'website',
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
        },
    },
    verification: {
        google: 'KFultBYn1-ivDaIiiT6oqqyybsfshwUFqHBzg-VBxMY',
    },
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
