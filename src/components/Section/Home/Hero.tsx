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
                className="z-0 w-ful h-fit text-lg px-6 md:px-16 grid grid-flow-row lg:grid-flow-col gap-10 lg:gap-14 lg:mb-16 overflow-x-hidden pb-10 lg:pb-0 pt-24"
            >
                {/* Left Content */}
                <div className="flex flex-col h-fit w-full shrink-0 gap-5 lg:gap-8 justify-end order-2 lg:order-1">
                    <h1
                        className={`text-4xl lg:text-[5rem] lg:leading-none font-semibold ${mori.className}`}
                    >
                        Full Stack <span className="block">Web Developer</span>
                    </h1>
                    <div className="w-full flex h-[19rem] lg:h-[21rem] relative overflow-hidden rounded-bl-xl">
                        <Image
                            src={'/assets/img/gallery/g1.jpg'}
                            alt="Photo 1"
                            width={700}
                            height={500}
                            quality={100}
                            draggable={'false'}
                            className="h-full shrink-0 w-fit grayscale object-cover"
                        />
                        <div className="w-7/12 lg:w-6/12 gap-2.5 flex flex-col h-fit absolute bg-Gray-200 p-5 lg:p-7 pr-0 top-0 z-10 right-0 rounded-bl-xl items-center">
                            <span className="text-sm lg:text-base font-semibold text-center">
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
                <div className="flex flex-col h-full flex-grow w-full shrink-0 gap-2.5 lg:gap-4 order-1 lg:order-2">
                    <div className="flex flex-row h-auto gap-6 shrink-0 w-full justify-end flex-grow">
                        <div className="h-[23rem] w-[55%] z-20 flex place-self-end overflow-hidden">
                            <Image
                                src={'/assets/img/f/f1.jpeg'}
                                alt="Photo 1"
                                width={410}
                                height={500}
                                draggable={'false'}
                                className="h-full place-self-end grayscale shrink-0 w-full object-cover"
                            />
                        </div>
                        <div className="flex flex-col w-[45%] flex-grow justify-between">
                            <div className="w-full lg:w-[45%] mx-auto aspect-square flex items-end justify-center">
                                <span className="text-[8rem] leading-none">
                                    *
                                </span>
                            </div>
                            <Image
                                src={'/assets/img/bg/f1.jpg'}
                                alt="Photo 1"
                                width={210}
                                height={280}
                                draggable={'false'}
                                className="h-fit place-self-end shrink-0 w-full"
                            />
                        </div>
                    </div>
                    <div className="w-full flex flex gap-0 items-center flex-grow h-full">
                        <h2
                            className={`text-3xl lg:text-[3rem] w-full lg:leading-none font-semibold ${mori.className}`}
                        >
                            Muhammad <span className="">Fabian Azhar</span>
                        </h2>
                    </div>
                </div>
                {/* End Right Content */}
            </section>
            {/* End Hero Section */}
        </>
    )
}
