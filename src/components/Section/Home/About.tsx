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
                id="about"
                className={`h-auto w-full relative flex justify-end py-28 px-6 lg:px-16`}
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
                    <div className="flex flex-col lg:flex-row-reverse justify-start h-auto w-full gap-10 lg:gap-14">
                        {/* Left Content */}
                        <div className="w-full lg:w-[20%] shrink-0 flex justify-start flex-row lg:flex-col gap-6">
                            <div className="w-1/2 lg:w-full aspect-square flex overflow-hidden">
                                <Image
                                    src={'/img/bg/f1.jpg'}
                                    alt="Photo 1"
                                    width={210}
                                    height={280}
                                    draggable={'false'}
                                    className="w-full brightness-75 rotate-0 grayscale-0 shrink-0 h-fit object-cover"
                                />
                            </div>
                            <div className="w-1/2 lg:w-full flex flex-col gap-2">
                                <span className="inline-block w-fit border-b-2 border-stone-300 text-stone-800">
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
                        {/* End Left Content */}
                        {/* Right Content */}

                        <div className="w-full lg:w-10/12 h-fit flex flex-col flex-grow justify-end divide-y-2 divide-stone-300">
                            {/* Desc */}
                            <div
                                className={`text-lg lg:text-xl w-full pb-5 lg:pb-8 h-fit leading-normal flex flex-col text-justify gap-4 font-normal lg:font- ${mona.className}`}
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
                            <div className="w-full h-fit flex flex-col-reverse gap-6 pt-5 lg:pt-8">
                                <div className="w-full lg:w-fit shrink-0">
                                    <PrimaryButton
                                        href="#projects"
                                        className={`mx-auto lg:mx-0 w-fit text-xs lg:text-sm`}
                                        icon={
                                            <FaArrowDown className="scale-0 group-hover:scale-100 transition-transform" />
                                        }
                                    >
                                        Check out what i&apos;ve done{' '}
                                    </PrimaryButton>
                                </div>
                                <div className={`w-auto flex flex-grow`}>
                                    <span
                                        className={`text-lg lg:text-xl leading-normal text-justify  font-normal lg:font- ${mona.className}`}
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
                    </div>
                    {/* End Profile Content */}
                </div>
            </section>
            {/* End About Section */}
        </>
    )
}
