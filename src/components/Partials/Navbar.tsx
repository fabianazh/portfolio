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
                className={`text-sm lg:text-sm relative text-black w-fit inline-block pb-[1px] font-medium group ${className}`}
            >
                {children}
                <div className="absolute w-full h-[2px] scale-x-0 bottom-0 left-0 bg-stone-600 origin-bottom-right transition-transform duration-300 group-hover:scale-x-100 group-hover:origin-bottom-left" />
            </Link>
        </>
    )
}

export default function Navbar({ className }: { className?: string }) {
    const navItems = [
        {
            link: '#home',
            text: 'Home',
        },
        // {
        //     link: '#about',
        //     text: 'About',
        // },
        // {
        //     link: '#skill',
        //     text: 'Skill',
        // },
        {
            link: '#projects',
            text: 'Projects',
        },
        {
            link: '#contact',
            text: 'Contact',
        },
    ]
    return (
        <>
            {/* Nav Item */}
            <nav
                className={`flex w-auto h-auto shrink-0 bg-transparent gap-4 ${className}`}
            >
                <ul
                    className={`flex flex-col lg:flex-row lg:justify-between gap-2 lg:gap-5 px-7 lg:px-0`}
                >
                    {navItems.map((item, index) => (
                        <li key={index} className="group">
                            <NavLink href={item.link}>{item.text}</NavLink>
                        </li>
                    ))}
                </ul>
            </nav>
            {/* End Nav Item */}
        </>
    )
}
