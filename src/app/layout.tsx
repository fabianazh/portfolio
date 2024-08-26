import type { Metadata } from 'next'
import './globals.css'
import { dmSans } from './fonts'
import { Analytics } from '@vercel/analytics/react'

export const metadata: Metadata = {
    metadataBase: new URL('https://fabianazh.vercel.app'),
    keywords: [
        'Fabian Azhar',
        'Muhammad Fabian Azhar',
        'Azhar Muhammad Fabian',
        'Muhammad-Fabian-Azhar',
        'Muhammad Fabian',
        'muhammad fabian azhar',
        'muhammadfabianazhar',
        'muhammad-fabian-azhar',
        'MuhammadFabian',
        'MuhammadFabianAzhar',
        'FabianAzhar',
        'Fabian Azhar Web',
        'Fabian Azhar Web Portfolio',
        'Portfolio Fabian Azhar',
        'Fabian Azhar Terdekat',
        'Azhar Terdekat',
        'Fabian Portfolio',
        'Fabian Portofolio',
        'Fabian Azhar Portfolio',
        'Fabianazh',
        'Fabianazhrr',
        'Programmer Indonesia',
        'Programmer Sukabumi',
        'Web Developer Sukabumi',
        'Fabianazh Portfolio',
        'Fabianazh Tampan',
        'fabianazh',
        'fabianazhrr',
        'fabian azhrr',
        'fabian azh',
        'fabian azh vercel',
        'portfolio fabian',
        'portfolio fabianazh',
    ],
    title: {
        default: 'Fabian Azhar',
        template: ' ',
    },
    description:
        'Welcome to my professional portfolio! I am Fabian Azhar, a passionate Full Stack Web Developer with a strong background in software engineering. I specialize in both front-end and back-end development, crafting seamless and interactive web applications. My expertise includes modern frameworks and technologies, ensuring efficient and robust solutions. Explore my projects, designs, and problem-solving approaches that showcase my dedication to delivering high-quality digital experiences.',
    openGraph: {
        title: 'Fabian Azhar',
        description:
            'Welcome to my professional portfolio! I am Fabian Azhar, a passionate Full Stack Web Developer with a strong background in software engineering. I specialize in both front-end and back-end development, crafting seamless and interactive web applications. My expertise includes modern frameworks and technologies, ensuring efficient and robust solutions. Explore my projects, designs, and problem-solving approaches that showcase my dedication to delivering high-quality digital experiences.',
        url: process.env.NEXT_PUBLIC_BASE_URL,
        siteName: 'Fabian Azhar',
        locale: 'id_ID',
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
            </body>
        </html>
    )
}
