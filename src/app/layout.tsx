import type { Metadata } from 'next'
import './globals.css'
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
    description:
        'Welcome to my professional portfolio! I am Fabian Azhar, a passionate Full Stack Web Developer with a strong background in software engineering. I specialize in both front-end and back-end development, crafting seamless and interactive web applications. My expertise includes modern frameworks and technologies, ensuring efficient and robust solutions. Explore my projects, designs, and problem-solving approaches that showcase my dedication to delivering high-quality digital experiences.',
    openGraph: {
        title: 'Fabian Azhar',
        description:
            'Welcome to my professional portfolio! I am Fabian Azhar, a passionate Full Stack Web Developer with a strong background in software engineering. I specialize in both front-end and back-end development, crafting seamless and interactive web applications. My expertise includes modern frameworks and technologies, ensuring efficient and robust solutions. Explore my projects, designs, and problem-solving approaches that showcase my dedication to delivering high-quality digital experiences.',
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
                {children}
                <ScrollButton />
                <Footer />
            </body>
        </html>
    )
}
