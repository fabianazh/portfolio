import { urbanist } from '@/app/fonts'
import Link from 'next/link'
import { RxHamburgerMenu } from 'react-icons/rx'
import Navbar from './Navbar'

export default function Header() {
    return (
        <>
            <header className="absolute top-0 left-0 z-50 flex h-auto py-3 lg:py-0 lg:h-16 text-black backdrop-blur-md lg:absolute lg:bg-transparent px-6 lg:px-16 w-screen lg:w-full bg-transparent">
                <div className="w-11/12 lg:w-full mx-auto block lg:hidden h-[2px] bg-black shadow-sm absolute bottom-0 left-1/2 -translate-x-1/2"></div>
                <div className="w-full h-full items-center flex justify-between">
                    {/* Logo and Name */}
                    <Link
                        href="https://fabianazh.vercel.app"
                        className={`text-base lg:text-xl font-semibold transition lg:pb-1.5 after:border-b-2 after:block after:border-black after:scale-x-0 hover:after:scale-x-100 after:transition-transform ${urbanist.className}`}
                    >
                        Fabianazh.
                    </Link>
                    {/* End Logo and Name */}

                    {/* Hamburger Menu */}
                    <div className="lg:hidden">
                        <RxHamburgerMenu />
                    </div>
                    {/* End Hamburger Menu */}

                    <Navbar />
                </div>
            </header>
        </>
    )
}
