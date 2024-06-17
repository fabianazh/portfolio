import { urbanist } from '@/app/fonts'
import PrimaryButton from '../../Button/PrimaryButton'
import SecondaryButton from '../../Button/SecondaryButton'
import { FaArrowDown } from 'react-icons/fa'

export default function Hero() {
    return (
        <>
            {/* Hero Section */}
            <section
                id="home"
                className="relative top-0 z-0 flex flex-col items-center w-full h-screen text-lg pt-24 lg:pt-0 px-5 md:pl-24 lg:flex-row bg-Gray-200s"
            >
                {/* Left Content */}
                <div className="flex flex-col h-full lg:h-auto lg:pt-10 w-full lg:w-7/12 gap-0 lg:gap-2.5">
                    {/* Text */}
                    <span className="mb-1 text-2xl name lg:text-5xl">
                        Hello, I&apos;m
                    </span>
                    <span className={`name ${urbanist.className}`}>
                        Fabian Azhar
                    </span>
                    <span className="block w-full mb-2 lg:mb-5 text-lg font-medium lg:text-3xl">
                        Full Stack Developer & Unity Developer
                    </span>
                    {/* End Text */}
                    {/* Button */}
                    <div className="flex h-auto text-sm font-medium items-center gap-2.5 lg:gap-7 mb-4">
                        <PrimaryButton href="#about" className="">
                            More about me{' '}
                            <div className="text-sm rounded-full grid place-items-center bg-Gray-200 text-black w-7 aspect-square shrink-0 scale-[.3] group-hover:scale-100 transition-transform">
                                <FaArrowDown className="scale-0 group-hover:scale-100 transition-transform" />
                            </div>
                        </PrimaryButton>

                        <SecondaryButton href="#contact" className="pb-[1.5px]">
                            Let&apos;s get in touch
                        </SecondaryButton>
                    </div>
                    {/* End Button */}
                    {/* Social Media */}
                    <div className="flex w-auto h-auto gap-4">
                        {/* <a href='#' className='icon__lg'>
                            <i className='fa-brands fa-github'></i>
                        </a>
                        <a href='#' className='icon__lg'>
                            <i className='fa-brands fa-facebook'></i>
                        </a>
                        <a href='#' className='icon__lg'>
                            <i className='fa-brands fa-instagram'></i>
                        </a> */}
                    </div>
                    {/* End Social Media */}
                </div>
                {/* End Left Content */}

                {/* Right Content */}
                <div className="relative top-0 flex justify-end w-5/12"></div>
                {/* End Right Content */}
            </section>
            {/* End Hero Section */}
        </>
    )
}
