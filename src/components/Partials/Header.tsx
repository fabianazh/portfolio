import Navbar from '@/components/Partials/Navbar'
import AppIcon from '@/components/Icon/AppIcon'

export default function Header() {
    return (
        <>
            <header className="relative lg:items-center justify-between top-0 left-0 z-40 flex h-auto py-4 lg:py-0 lg:h-16 px-6 lg:px-16 w-screen lg:w-full bg-transparent">
                {/* Logo and Name */}
                <AppIcon />
                {/* End Logo and Name */}

                <Navbar />
            </header>
        </>
    )
}
