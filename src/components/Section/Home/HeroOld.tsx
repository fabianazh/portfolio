import { mona, mori } from '@/app/fonts'
import PrimaryButton from '@/components/Button/PrimaryButton'
import Image from 'next/image'
import { FaArrowDown } from 'react-icons/fa'

export default function HeroOld() {
    return (
        <>
            {/* Hero Section */}
            <section
                id="home"
                className="relative top-0 z-0 w-ful h-auto min-h-screen text-lg px-6 md:px-16 grid grid-rows-2 lg:grid-cols-2 gap-10 lg:gap-14 lg:mb-16 overflow-x-hidden pb-10 lg:pb-20 pt-24"
            >
                {/* Left Content */}
                <div className="flex flex-col h-auto w-full shrink-0 gap-4 justify-end order-2 lg:order-1">
                    <h1
                        className={`text-5xl lg:text-[5rem] lg:leading-none font-semibold ${mori.className}`}
                    >
                        Full Stack <span className="block">Web Developer</span>
                    </h1>
                    <div className="w-full flex h-[21rem] relative overflow-hidden rounded-xl">
                        <Image
                            src={'/img/gallery/g1.jpg'}
                            alt="Photo 1"
                            width={500}
                            height={400}
                            draggable={'false'}
                            className="h-full shrink-0 w-fit grayscale"
                        />
                        <div className="w-7/12 lg:w-6/12 gap-2.5 flex flex-col h-fit absolute bg-Gray-200 p-5 lg:p-6 pr-0 top-0 z-10 right-0 rounded-bl-xl">
                            <span className="text-sm lg:text-base font-semibold">
                                Specialized in Web Design, UI / UX, Front End
                                Development and Back end Development.
                            </span>
                            <PrimaryButton
                                href="#about"
                                className={`w-fit text-xs lg:text-sm`}
                                icon={
                                    <FaArrowDown className="scale-0 group-hover:scale-100 transition-transform" />
                                }
                            >
                                More about me
                            </PrimaryButton>
                        </div>
                    </div>
                </div>
                {/* End Left Content */}
                {/* Right Content */}
                <div className="flex h-full flex-grow w-full shrink-0 gap-2.5 lg:gap-6 order-1 lg:order-2">
                    <div className="flex flex-col h-fit gap-6 shrink-0 w-[55%] lg:pt-12">
                        <div className="h-96 w-full z-20 bg-[url('/img/f/f1.jpeg')] brightness-95 bg-center bg-cover"></div>
                        <h2
                            className={`lg:text-[3rem] w-full lg:leading-none font-semibold ${mori.className}`}
                        >
                            Muhammad <span className="block">Fabian Azhar</span>
                        </h2>
                    </div>
                    <div className="w-[45%] flex flex-col items-center flex-grow">
                        <div className="w-11/12 aspect-square flex justify-center items-end">
                            <span className="text-[8rem] leading-none">*</span>
                        </div>
                        <Image
                            src={'/img/bg/f1.jpg'}
                            alt="Photo 1"
                            width={210}
                            height={280}
                            draggable={'false'}
                            className="h-fit place-self-end shrink-0 w-full"
                        />
                    </div>
                </div>
                {/* End Right Content */}
            </section>
            {/* End Hero Section */}
        </>
    )
}
