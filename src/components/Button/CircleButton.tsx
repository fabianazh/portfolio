export default function CircleButton({
    href,
    children,
}: {
    href: string
    children: React.ReactNode
}) {
    return (
        <a
            href={href}
            className="aspect-square shadow hover:translate-y-0.5 grid place-items-center w-8 rounded-full bg-stone-300 transition-all hover:bg-stone-300 duration-300 text-lg"
        >
            {children}
        </a>
    )
}
