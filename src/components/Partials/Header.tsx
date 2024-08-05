import Navbar from '@/components/Partials/Navbar'
import AppIcon from '@/components/Icon/AppIcon'

export default function Header() {
    return (
        <>
            <header className="relative lg:items-center justify-between top-0 left-0 z-40 flex h-auto lg:h-16 w-full lg:w-full bg-transparent">
                {/* Logo and Name */}
                <AppIcon />
                {/* End Logo and Name */}

                <Navbar />
            </header>
        </>
    )
}
