import { mona, mori } from '@/app/fonts'
import PrimaryButton from '@/components/Button/PrimaryButton'
import Image from 'next/image'
import { FaArrowDown } from 'react-icons/fa'

export default function Hero() {
    return (
        <>
            {/* Hero Section */}
            <section
                id="home"
                className="relative top-0 z-0 w-ful h-auto min-h-screen text-lg px-6 md:px-16 grid grid-cols-2 lg:gap-14 lg:mb-16 overflow-x-hidden pb-20 lg:pt-32"
            >
                {/* Left Content */}
                <div className="flex flex-col h-auto w-full shrink-0 gap-2.5 lg:gap-6 justify-end">
                    <h1
                        className={`lg:text-[5rem] lg:leading-none font-semibold ${mori.className}`}
                    >
                        Full Stack <span className="block">Web Developer</span>
                    </h1>
                    <div className="w-full flex flex-grow h-auto gap-8 items-end">
                        <Image
                            src={'/assets/img/bg/f2.jpg'}
                            alt="Photo 1"
                            width={210}
                            height={280}
                            draggable={'false'}
                            className="h-fit place-self-start shrink-0 w-6/12"
                        />
                        <div className="flex flex-col w-6/12 h-full gap-6">
                            <div className="w-full gap-2.5 flex flex-col">
                                <span className="text-base font-semibold">
                                    Specialized in Web Design, UI / UX, Front
                                    End Development and Back end Development.
                                </span>
                                <PrimaryButton
                                    href="#about"
                                    className={`w-fit text-sm`}
                                    icon={
                                        <FaArrowDown className="scale-0 group-hover:scale-100 transition-transform" />
                                    }
                                >
                                    More about me
                                </PrimaryButton>
                            </div>
                            <Image
                                src={'/assets/img/bg/f1.jpg'}
                                alt="Photo 2"
                                width={210}
                                height={210}
                                draggable={'false'}
                                className="h-fit w-full shrink-0"
                            />
                        </div>
                    </div>
                </div>
                {/* End Left Content */}
                {/* Right Content */}
                <div className="flex flex-col h-auto w-full shrink-0 gap-2.5 lg:gap-6">
                    <div className="h-96 w-[60%] bg-[url('/assets/img/f/f1.jpeg')] bg-center bg-cover "></div>
                    <h2
                        className={`lg:text-[4rem] lg:leading-none font-semibold ${mori.className}`}
                    >
                        Fabian Azhar
                    </h2>
                </div>
                {/* End Right Content */}
            </section>
            {/* End Hero Section */}
        </>
    )
}
