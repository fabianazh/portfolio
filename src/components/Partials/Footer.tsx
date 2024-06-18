import { BsFacebook, BsGithub } from 'react-icons/bs'
import CircleButton from '@/components/Button/CircleButton'
import { RiInstagramFill } from 'react-icons/ri'
import { mona } from '@/app/fonts'
import Link from 'next/link'

export default function Footer() {
    const currentYear = new Date().getFullYear()

    return (
        <>
            <footer
                id="footer"
                className={`flex flex-col lg:flex-row relative items-center justify-center lg:justify-between bg-[#fafafa] px-5 lg:px-16 py-4 ${mona.className}`}
            >
                <div className="h-0.5 bg-stone-300 w-11/12 mx-auto block absolute top-0"></div>
                <span className="font-medium lg:font-semibold text-sm text-stone-700">
                    ©{currentYear} Fabianazh. All rights reserved
                </span>
                <Link
                    href={'https://fabianazh.vercel.app'}
                    className="font-medium hidden lg:block"
                >
                    v1
                </Link>
            </footer>
        </>
    )
}
