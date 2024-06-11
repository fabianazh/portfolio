import Image from 'next/image'
import PrimaryButton from '@/components/Button/PrimaryButton'
import SecondaryButton from '@/components/Button/SecondaryButton'
import { FaArrowDown } from 'react-icons/fa'
import { FaMapLocation } from 'react-icons/fa6'
import Link from 'next/link'
import { IoMdMail, IoMdPin } from 'react-icons/io'
import { MdMap } from 'react-icons/md'

export default function About() {
    return (
        <>
            {/* About Section */}
            <section
                className={`h-auto w-full relative flex flex-col py-24 gap-10`}
            >
                {/* Heading Profile */}
                <h1
                    id="about"
                    className={`text-4xl font-medium text-center w-full`}
                >
                    <span className="inine-block bg-black text-white px-1">
                        About
                    </span>{' '}
                    Me
                </h1>
                {/* End Heading Profile */}
                {/* Profile Content */}
                <div className="flex flex-row h-auto w-full px-16 gap-6">
                    {/* Left Content */}
                    <div className="w-2/3 h-auto flex flex-col gap-7">
                        {/* Name */}
                        <span className="block text-5xl tracking-tight font-medium">
                            Muhammad{' '}
                            <span className="inine-block bg-black text-white px-1">
                                Fabian
                            </span>{' '}
                            Azhar
                        </span>
                        {/* Desc */}
                        <div className="text-lg pr-5">
                            My name is Muhammad Fabian Azhar, and I live in West
                            Java, Indonesia. I love web development, both
                            front-end and back-end, as well as game development.
                            I&apos;m always looking to learn new skills and work
                            on exciting projects. In my free time, I like to
                            experiment with different coding languages and
                            frameworks to expand my knowledge. I am excited to
                            continue improving my skills in web and game
                            development. My goal is to create a strong portfolio
                            that shows my abilities in these areas.
                        </div>
                        {/* Contact */}
                        <div className="w-full h-auto grid grid-rows-2 gap-3">
                            <Link href="#" className="inline-block w-fit">
                                <div className="flex flex-row gap-2.5">
                                    <span className="grid place-items-center text-2xl">
                                        <IoMdPin />
                                    </span>
                                    <span className="font-medium">
                                        West Java, Indonesia.
                                    </span>
                                </div>
                            </Link>
                            <Link href="#" className="inline-block w-fit">
                                <div className="flex flex-row gap-3">
                                    <span className="grid place-items-center text-2xl">
                                        <IoMdMail />
                                    </span>
                                    <span className="font-medium">
                                        fabianazhrr@gmail.com
                                    </span>
                                </div>
                            </Link>
                        </div>
                        {/* Button */}
                        <div className="w-full items-center h-auto flex flex-row gap-7">
                            <PrimaryButton
                                href="#projects"
                                className="gap-2.5 grid-flow-col px-5 py-2"
                            >
                                Chech out what i&apos;ve done{' '}
                                <span className="inline-block text-sm">
                                    <FaArrowDown className="group-hover:animate-bounce" />
                                </span>
                            </PrimaryButton>
                            <SecondaryButton
                                href="#contact"
                                className="pb-[2px]"
                            >
                                Contact Email
                            </SecondaryButton>
                        </div>
                    </div>
                    {/* End Left Content */}
                    {/* Right Content */}
                    <div className="w-1/3 shrink-0 h-full flex flex-col gap-6">
                        {/* <Image
                            src={AboutBG}
                            alt=""
                            draggable={'false'}
                            className="w-full h-full about__image"
                        /> */}
                        <div className="w-9/12 h-28 group cursor-pointer">
                            <div className="w-full relative h-full overflow-hidden transition-all group-hover:scale-90 duration-1000 scale-100">
                                <Image
                                    src={'/assets/img/bg/f1.jpeg'}
                                    alt={''}
                                    className="w-full h-full transition-all scale-100 duration-1000 group-hover:scale-125 brightness-75"
                                    fill={true}
                                />
                            </div>
                        </div>
                        <div className="w-9/12 h-[5.1rem] group cursor-pointer place-self-end">
                            <div className="w-full relative h-full overflow-hidden transition-all group-hover:scale-90 duration-1000 scale-100">
                                <Image
                                    src={'/assets/img/bg/f3.jpeg'}
                                    alt={''}
                                    className="w-full h-full transition-all scale-100 duration-1000 group-hover:scale-125 brightness-"
                                    fill={true}
                                />
                            </div>
                        </div>
                        <div className="w-10/12 h-[7rem] group cursor-pointer place-self-center">
                            <div className="w-full relative h-full overflow-hidden transition-all group-hover:scale-90 duration-1000 scale-100">
                                <Image
                                    src={'/assets/img/bg/f2.jpeg'}
                                    alt={''}
                                    className="w-full h-full transition-all scale-100 duration-1000 group-hover:scale-125 brightness-[.7]"
                                    fill={true}
                                />
                            </div>
                        </div>
                    </div>
                    {/* End Right Content */}
                </div>
                {/* End Profile Content */}
            </section>
            {/* End About Section */}
        </>
    )
}
