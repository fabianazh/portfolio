import { mona } from '@/app/fonts'
import Link from 'next/link'

export default function Footer() {
    const currentYear = new Date().getFullYear()

    return (
        <>
            <footer
                id="footer"
                className={`flex flex-col lg:flex-row relative items-center justify-between gap-6 bg-[#fafafa] px-5 lg:px-16 py-4 ${mona.className}`}
            >
                <span className="font-medium lg:font-semibold text-sm text-stone-700">
                    ©{currentYear} Fabianazh. All rights reserved
                </span>
                <Link
                    href={'https://fabianazh.vercel.app'}
                    className="font-medium block"
                >
                    v1
                </Link>
            </footer>
        </>
    )
}
