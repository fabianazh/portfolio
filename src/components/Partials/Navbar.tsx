import Link from 'next/link'

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
                className={`text-sm relative text-black w-fit inline-block pb-0.5 font-medium group ${className}`}
            >
                {children}
                <div className="absolute w-full h-0.5 scale-x-0 bottom-0 left-0 bg-black origin-bottom-right transition-transform duration-300 -out group-hover:scale-x-100 group-hover:origin-bottom-left" />
            </Link>
        </>
    )
}

export default function Navbar({ className }: { className?: string }) {
    return (
        <>
            {/* Nav Item */}
            <nav className={`w-auto h-auto hidden lg:flex gap-4 ${className}`}>
                <ul className="flex justify-between gap-5 text-base font-semibold">
                    <li className="group">
                        <NavLink href="#home">Home</NavLink>
                    </li>
                    <li className="group">
                        <NavLink href="#about">About</NavLink>
                    </li>
                    <li className="group">
                        <NavLink href="#skill">Skill</NavLink>
                    </li>
                    <li className="group">
                        <NavLink href="#projects">Projects</NavLink>
                    </li>
                    <li className="group">
                        <NavLink href="#contact">Contact</NavLink>
                    </li>
                </ul>
            </nav>
            {/* End Nav Item */}
        </>
    )
}
