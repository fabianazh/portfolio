import { urbanist } from '@/app/fonts'
import Link from 'next/link'
import { RxHamburgerMenu } from 'react-icons/rx'

function NavLink({
    href,
    className,
    children,
}: {
    href: string
    className?: string
    children: React.ReactNode
}) {
    return (
        <>
            <Link
                href={href}
                className={`text-sm relative w-fit inline-block pb-0.5 font-medium group ${className}`}
            >
                {children}
                <div className="absolute w-full h-0.5 scale-x-0 bottom-0 left-0 bg-black origin-bottom-right transition-transform duration-300 -out group-hover:scale-x-100 group-hover:origin-bottom-left" />
            </Link>
        </>
    )
}

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

                    {/* Nav Item */}
                    <nav className="w-auto h-auto hidden lg:flex gap-4">
                        <ul className="flex justify-between gap-5 text-base font-semibold">
                            <li className="group">
                                <NavLink href="#home">Home</NavLink>
                            </li>
                            <li className="group">
                                <NavLink href="#about">About</NavLink>
                            </li>
                            <li className="group">
                                <NavLink href="#projects">Projects</NavLink>
                            </li>
                            <li className="group">
                                <NavLink href="#contact">Contact</NavLink>
                            </li>
                        </ul>
                        {/* <div className="block h-full bg-black w-0.5 border z-50"></div>
                    <ul className="flex justify-between gap-5 font-Quicksand text-base font-semibold">
                        <li className="group">
                            <a href="#home" className="nav__item">
                                ID
                            </a>
                        </li>
                        <li className="group">
                            <a href="#about" className="nav__item">
                                EN
                            </a>
                        </li>
                    </ul> */}
                    </nav>
                    {/* End Nav Item */}
                </div>
            </header>
        </>
    )
}
