import Link from 'next/link'

function NavLink({
    href,
    className,
    children,
    openNav,
}: {
    href: string
    className?: string
    children: React.ReactNode
    openNav?: () => void
}) {
    function handleClick() {
        if (openNav && window.innerWidth < 1024) {
            openNav()
        }
    }
    return (
        <>
            <Link
                href={href}
                className={`text-xl lg:text-sm relative text-black w-fit inline-block pb-0.5 font-medium group ${className}`}
                onClick={handleClick}
            >
                {children}
                <div className="absolute w-full h-0.5 scale-x-0 bottom-0 left-0 bg-black origin-bottom-right transition-transform duration-300 -out group-hover:scale-x-100 group-hover:origin-bottom-left" />
            </Link>
        </>
    )
}

export default function Navbar({
    className,
    isOpen,
    openNav,
}: {
    className?: string
    isOpen: boolean
    openNav: () => void
}) {
    return (
        <>
            {/* Nav Item */}
            <nav
                className={`w-fit lg:w-auto lg:h-auto z-50 shrink-0 h-screen transition-all duration-500 fixed top-0 opacity-100 right-0 bg-white shadow lg:shadow-none lg:bg-transparent fixed lg:static flex gap-4 ${className} ${
                    isOpen
                        ? '-translate-x-0 opacity-100 flex'
                        : 'translate-x-full lg:translate-x-0 opacity-50 lg:opacity-100 hidden lg:flex'
                }`}
            >
                <ul
                    className={`flex flex-col lg:flex-row pl-8 pr-28 lg:pl-0 lg:pr-0 py-16 lg:py-0 lg:justify-between gap-5 text-base font-semibold`}
                >
                    <li className="group">
                        <NavLink href="#home" openNav={openNav}>
                            Home
                        </NavLink>
                    </li>
                    <li className="group">
                        <NavLink href="#about" openNav={openNav}>
                            About
                        </NavLink>
                    </li>
                    <li className="group">
                        <NavLink href="#skill" openNav={openNav}>
                            Skill
                        </NavLink>
                    </li>
                    <li className="group">
                        <NavLink href="#projects" openNav={openNav}>
                            Projects
                        </NavLink>
                    </li>
                    <li className="group">
                        <NavLink href="#contact" openNav={openNav}>
                            Contact
                        </NavLink>
                    </li>
                </ul>
            </nav>
            {/* End Nav Item */}
        </>
    )
}
