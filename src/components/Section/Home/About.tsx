import Image from 'next/image'
import { FaArrowDown } from 'react-icons/fa'
import Link from 'next/link'
import SecondaryButton from '@/components/Button/SecondaryButton'

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
                <div className="flex flex-row h-auto w-full px-16 gap-3">
                    {/* Left Content */}
                    <div className="w-6/12 shrink-0 h-auto flex flex-col gap-7">
                        {/* Name */}
                        <span className="block text-5xl tracking-tight font-medium">
                            Muhammad{' '}
                            <span className="inine-block bg-black text-white px-1">
                                Fabian
                            </span>{' '}
                            Azhar
                        </span>
                        {/* Desc */}
                        <div className="text-lg font-medium pr-5 text-justify">
                            I am passionate about web and game development, with
                            a keen interest in both front-end and back-end
                            technologies. My dedication to continuous learning
                            drives me to explore new coding languages and
                            frameworks, allowing me to enhance my skill set and
                            stay updated with industry trends.
                        </div>
                        {/* Contact */}
                        {/* Button */}
                        <div className="w-full pr-8 items-start justify-between h-auto flex flex-row gap-7">
                            <Link
                                href="#projects"
                                className={`bg-black grid place-items-center transition-colors duration-300 text-white gap-2.5 grid-flow-col pr-2 pl-5 py-2 rounded-full group`}
                            >
                                Check out what i&apos;ve done{' '}
                                <div className="text-sm rounded-full grid place-items-center bg-Gray-200 text-black w-7 aspect-square shrink-0 scale-[.3] group-hover:scale-100 transition-transform">
                                    <FaArrowDown className="scale-0 group-hover:scale-100 transition-transform" />
                                </div>
                            </Link>
                            <div className="aspect-square h-auto group cursor-pointer">
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
                        </div>
                    </div>
                    {/* End Left Content */}
                    {/* Center Content */}
                    <div className="w-4/12 shrink-0 h-full flex flex-col gap-6 mr-6">
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
                    {/*  */}
                    <div className="flex flex-col gap-2 w-2/12 shrink-0 justify-between">
                        <div className="w-full h-fit group cursor-pointer">
                            <div className="w-full relative h-full overflow-hidden transition-all group-hover:scale-90 duration-[0.9s] scale-100 rounded-xl">
                                <Image
                                    src={'/assets/img/bg/f1.jpg'}
                                    alt=""
                                    width={150}
                                    height={150}
                                    draggable={'false'}
                                    className="w-full h-fit transition-all scale-100 duration-[0.9s] group-hover:scale-125 brightness-"
                                />
                            </div>
                        </div>
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
                    {/*  */}
                </div>
                {/* End Profile Content */}
            </section>
            {/* End About Section */}
        </>
    )
}
