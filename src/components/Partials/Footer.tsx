import { BsFacebook, BsGithub } from 'react-icons/bs'
import CircleButton from '@/components/Button/CircleButton'
import { RiInstagramFill } from 'react-icons/ri'
import { mona } from '@/app/fonts'

export default function Footer() {
    const currentYear = new Date().getFullYear()

    return (
        <>
            <footer
                id="footer"
                className={`flex relative items-center justify-between bg-[#fafafa] px-16 py-4 ${mona.className}`}
            >
                <div className="h-0.5 bg-stone-300 w-11/12 mx-auto block absolute top-0"></div>
                <span className="font-semibold text-sm text-stone-700">
                    ©{currentYear} Fabianazh. All rights reserved
                </span>
                <div className="h-auto hidden justify-between w-auto gap-8">
                    <CircleButton href="https://github.com/fabianazh">
                        <BsGithub />
                    </CircleButton>
                    <CircleButton href="https://www.facebook.com/profile.php?id=61560075789729">
                        <BsFacebook />
                    </CircleButton>
                    <CircleButton href="https://instagram.com/fabianazhrr">
                        <RiInstagramFill />
                    </CircleButton>
                </div>
            </footer>
        </>
    )
}
