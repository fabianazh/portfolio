import Footer from '@/components/Partials/Footer'
import ScrollButton from '@/components/Button/ScrollButton'

export default function LandingLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <main>
            {children}
            <ScrollButton />
            <Footer />
        </main>
    )
}
