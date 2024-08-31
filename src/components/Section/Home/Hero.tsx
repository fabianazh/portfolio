'use client'

import { mona } from '@/app/fonts'
import HeroHeader from '@/components/Partials/HeroHeader'
import { BackgroundBeams } from '@/components/Other/BackgroundBeams'
import Link from 'next/link'
import MailIcon from '@/components/Icon/MailIcon'
import TextReveal from '@/components/Other/TextReveal'
import { motion } from 'framer-motion'

export default function Hero() {
    return (
        <>
            {/* Hero Section */}
            <section
                id="home"
                className="z-0 w-screen h-fit lg:h-screen py-4 lg:py-6 px-0 lg:px-12 z-0"
            >
                {/* Content Container */}
                <div className="relative w-full h-full flex flex-col justify-between bg-stone-200/30 shadow-sm rounded-2xl px-4 lg:px-10 py-4 lg:py-6">
                    {/* Background */}
                    <BackgroundBeams className="absolute w-full h-full top-0 left-0" />
                    {/* End Background */}

                    {/* Header */}
                    <HeroHeader />
                    {/* End Header */}

                    {/* Content */}
                    <div
                        className={`w-full items-center flex flex-col gap-2 text-center pt-28 lg:pt-0 pb-14 lg:pb-32 px-4 md:px-48 lg:px-72 2xl:px-96 z-0 ${mona.className}`}
                    >
                        <TextReveal
                            className="text-4xl font-bold z-0"
                            text="Harmonizing Quality Design & Web Development"
                            duration={0.35}
                        />
                        <TextReveal
                            text="I craft seamless and intuitive designs for websites and apps, empowering businesses to elevate user experiences, drive key performance metrics, and attain digital excellence."
                            index={0.5}
                            className="z-0"
                        />
                        <span></span>
                        <motion.div
                            initial={{
                                opacity: 0,
                            }}
                            whileInView={{
                                opacity: 1,
                                transition: {
                                    delay: 1.5,
                                    duration: 0.7,
                                },
                            }}
                            viewport={{
                                amount: 'some',
                                once: true,
                            }}
                            className="w-fit"
                        >
                            <Link
                                href={
                                    'mailto:fabianazharr@gmail.com?subject=Project%20Request&body=Hello%20Muhammad%20Fabian%20Azhar,%0D%0A%0D%0AI%20would%20like%20to%20discuss%20a%20potential%20project%20with%20you.%20Please%20let%20me%20know%20a%20convenient%20time%20for%20us%20to%20talk%20further.%0D%0A%0D%0AThank%20you!%0D%0A%0D%0ABest%20regards,%0D%0A%5BYour%20Name%5D'
                                }
                                className="w-fit text-xs lg:text-sm font-medium py-2 px-4 lg:px-6 mt-4 lg:mt-6 inline-flex h-fit gap-2 bg-white rounded-full items-center shadow-sm z-10 hover:bg-stone-50 transition-colors duration-300 z-10"
                            >
                                <MailIcon className="w-fit h-4 lg:h-5" />{' '}
                                Request a project
                            </Link>
                        </motion.div>
                    </div>
                    {/* End Content */}
                </div>
                {/* End Content Container */}
            </section>
            {/* End Hero Section */}
        </>
    )
}
