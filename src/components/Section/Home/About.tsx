import Image from 'next/image'
import { FaArrowDown } from 'react-icons/fa'
import Link from 'next/link'
import SecondaryButton from '@/components/Button/SecondaryButton'
import PrimaryButton from '@/components/Button/PrimaryButton'
import { mona, mori } from '@/app/fonts'

export default function About() {
    return (
        <>
            {/* About Section */}
            <section
                className={`h-auto w-full relative flex justify-end py-32 px-6 lg:px-16`}
            >
                <div className="w-full flex flex-col gap-6">
                    {/* Heading Profile */}
                    <h1
                        className={`text-4xl lg:text-6xl font-semibold ${mori.className}`}
                    >
                        About Me
                    </h1>
                    {/* End Heading Profile */}
                    {/* Profile Content */}
                    <div className="flex flex-col lg:flex-row justify-start h-auto w-full gap-32">
                        {/* Left Content */}
                        <div className="w-full lg:w-10/12 h-fit flex flex-col gap-4 lg:gap-7">
                            {/* Desc */}
                            <div
                                className={`text-xl w-full h-fit flex flex-col gap-4 font-medium ${mona.className}`}
                            >
                                <span>
                                    I am passionate about web development, with
                                    a keen interest in both front-end and
                                    back-end technologies. My dedication to
                                    continuous learning drives me to explore new
                                    coding languages and frameworks, allowing me
                                    to enhance my skill set and stay updated
                                    with industry trends.
                                </span>
                                <span>
                                    When i&apos;m not building or exploring new
                                    web experiences, i&apos;m probably playing
                                    games or watching football.
                                </span>
                            </div>
                            {/* Button */}
                            <div className="w-full h-fit flex gap-14">
                                <div className="w-full lg:w-fit shrink-0">
                                    <PrimaryButton
                                        href="#projects"
                                        className={`mx-auto lg:mx-0 w-fit`}
                                        icon={
                                            <FaArrowDown className="scale-0 group-hover:scale-100 transition-transform" />
                                        }
                                    >
                                        Check out what i&apos;ve done{' '}
                                    </PrimaryButton>
                                </div>
                                <div className={`w-auto flex flex-grow`}>
                                    <span
                                        className={`text-lg font-medium ${mona.className}`}
                                    >
                                        I graduated with a degree in Software
                                        Engineering, where I honed my skills in
                                        design and problem-solving. My
                                        background in software engineering has
                                        equipped me with a strong foundation in
                                        both technical and creative aspects of
                                        development, enabling me to approach
                                        projects with a well-rounded
                                        perspective.
                                    </span>
                                </div>
                            </div>
                            {/* End Button */}
                        </div>
                        {/* End Left Content */}
                        {/* Contact */}
                        <div className="w-full lg:w-2/12 shrink-0 flex justify-start flex-col gap-2">
                            <span className="inline-block w-fit border-b-2 border-stone-200 text-stone-800">
                                Let&apos;s get connected
                            </span>
                            <SecondaryButton
                                href={'https://instagram.com/fabianazhrr'}
                                className="text-sm"
                            >
                                Instagram
                            </SecondaryButton>
                            <SecondaryButton
                                href={
                                    'https://www.facebook.com/profile.php?id=61560075789729'
                                }
                                className="text-sm"
                            >
                                Facebook
                            </SecondaryButton>
                            <SecondaryButton
                                href={'https://github.com/fabianazh'}
                                className="text-sm"
                            >
                                Github
                            </SecondaryButton>
                            <SecondaryButton href={'#'} className="text-sm">
                                Linked in
                            </SecondaryButton>
                        </div>
                    </div>
                    {/* End Profile Content */}
                </div>
            </section>
            {/* End About Section */}
        </>
    )
}
