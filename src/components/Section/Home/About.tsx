import Image from 'next/image'
import { FaArrowDown } from 'react-icons/fa'
import Link from 'next/link'
import SecondaryButton from '@/components/Button/SecondaryButton'
import PrimaryButton from '@/components/Button/PrimaryButton'
import { mona } from '@/app/fonts'

export default function About() {
    return (
        <>
            {/* About Section */}
            <section
                className={`h-auto w-full relative flex flex-col py-24 gap-10 px-6 lg:px-16`}
            >
                {/* Heading Profile */}
                <h1
                    id="about"
                    className={`text-3xl lg:text-4xl font-medium text-center w-full`}
                >
                    <span className="inine-block bg-black text-white px-1">
                        About
                    </span>{' '}
                    Me
                </h1>
                {/* End Heading Profile */}
                {/* Profile Content */}
                <div className="flex flex-col lg:flex-row h-auto w-full gap-3">
                    {/* Left Content */}
                    <div className="w-full lg:w-6/12 shrink-0 h-fit flex flex-col gap-4 lg:gap-7 order-2 lg:order-1">
                        {/* Name */}
                        <span className="block text-3xl text-center lg:text-start lg:text-5xl tracking-tight font-medium">
                            Muhammad Fabian Azhar
                        </span>
                        {/* Desc */}
                        <div
                            className={`text-lg font-medium lg:pr-5 lg:text-justify ${mona.className}`}
                        >
                            <span>
                                I am passionate about web and game development,
                                with a keen interest in both front-end and
                                back-end technologies. My dedication to
                                continuous learning drives me to explore new
                                coding languages and frameworks, allowing me to
                                enhance my skill set and stay updated with
                                industry trends.
                            </span>
                        </div>
                        {/* Contact */}
                        {/* Button */}
                        <div className="w-full lg:pr-8 items-start justify-between h-auto flex flex-col lg:flex-row gap-7">
                            <PrimaryButton
                                href="#projects"
                                className={`mx-auto lg:mx-0`}
                                icon={
                                    <FaArrowDown className="scale-0 group-hover:scale-100 transition-transform" />
                                }
                            >
                                Check out what i&apos;ve done{' '}
                            </PrimaryButton>
                            <div className="w-full lg:w-fit flex gap-6 lg:block">
                                <div className="aspect-square w-1/2 lg:w-fit h-auto group cursor-pointer">
                                    <div className="aspect-square relative h-auto overflow-hidden transition-all group-hover:scale-90 duration-[0.9s] scale-100 rounded-xl">
                                        <Image
                                            src={'/assets/img/bg/f1.jpg'}
                                            alt=""
                                            width={210}
                                            height={210}
                                            draggable={'false'}
                                            className="aspect-square h-auto transition-all scale-100 duration-[0.9s] group-hover:scale-125 brightness-"
                                        />
                                    </div>
                                </div>
                                <div className="lg:hidden flex flex-col gap-2 w-1/2 shrink-0 justify-center order-3">
                                    <div className="flex flex-col gap-2">
                                        <span className="inline-block w-fit border-b-2 border-stone-200 text-stone-800">
                                            Let&apos;s get connected
                                        </span>
                                        <SecondaryButton
                                            href={
                                                'https://instagram.com/fabianazhrr'
                                            }
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
                                            href={
                                                'https://github.com/fabianazh'
                                            }
                                            className="text-sm"
                                        >
                                            Github
                                        </SecondaryButton>
                                        <SecondaryButton
                                            href={'#'}
                                            className="text-sm"
                                        >
                                            Linked in
                                        </SecondaryButton>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* End Left Content */}
                    {/* Center Content */}
                    <div className="w-full lg:w-4/12 shrink-0 h-full flex flex-col gap-6 mb-4 lg:mb-0 lg:mr-6 order-1 lg:order-2">
                        <div className="w-full h-full group cursor-pointer">
                            <div className="w-full relative h-full overflow-hidden transition-all group-hover:scale-90 duration-[0.9s] scale-100 rounded-xl">
                                <Image
                                    src={'/assets/img/bg/f1.jpg'}
                                    alt=""
                                    width={300}
                                    height={400}
                                    draggable={'false'}
                                    className="w-full h-fit transition-all scale-100 duration-[0.9s] group-hover:scale-125 brightness-"
                                />
                            </div>
                        </div>
                    </div>
                    {/* End Center Content */}
                    {/* Right Content */}
                    <div className="hidden lg:flex flex-col gap-2 w-2/12 shrink-0 justify-between order-3">
                        <div className="w-full h-fit group cursor-pointer"></div>
                        <div className="flex flex-col gap-2">
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
                    {/* End Right Content */}
                </div>
                {/* End Profile Content */}
            </section>
            {/* End About Section */}
        </>
    )
}
