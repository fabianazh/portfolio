'use client'

import { mona } from '@/app/fonts'
import HeroHeader from '@/components/Partials/HeroHeader'
import { BackgroundBeams } from '@/components/Other/BackgroundBeams'
import Link from 'next/link'
import MailIcon from '@/components/Icon/MailIcon'

export default function Hero() {
    return (
        <>
            {/* Hero Section */}
            <section
                id="home"
                className="z-0 w-screen h-fit lg:h-screen py-4 lg:py-6 px-0 lg:px-12"
            >
                {/* Content Container */}
                <div className="relative w-full h-full flex flex-col justify-between bg-stone-200/30 rounded-2xl px-4 lg:px-10 py-4 lg:py-6">
                    {/* Background */}
                    <BackgroundBeams className="absolute w-full h-full top-0 left-0" />
                    {/* End Background */}

                    {/* Header */}
                    <HeroHeader />
                    {/* End Header */}

                    {/* Content */}
                    <div
                        className={`w-full items-center flex flex-col gap-2 text-center pt-28 lg:pt-0 pb-14 lg:pb-32 px-4 md:px-48 lg:px-72 2xl:px-96 ${mona.className}`}
                    >
                        <h1 className="text-4xl font-bold">
                            Harmonizing Quality Design & Web Development
                        </h1>
                        <span>
                            I craft seamless and intuitive designs for websites
                            and apps, empowering businesses to elevate user
                            experiences, drive key performance metrics, and
                            attain digital excellence.
                        </span>
                        <Link
                            href={'#'}
                            className="w-fit text-xs lg:text-sm font-medium py-2 px-4 lg:px-6 mt-4 lg:mt-6 inline-flex h-fit gap-2 bg-white rounded-full items-center shadow-sm"
                        >
                            <MailIcon className="w-fit h-4 lg:h-5" /> Request a
                            project
                        </Link>
                    </div>
                    {/* End Content */}
                </div>
                {/* End Content Container */}
            </section>
            {/* End Hero Section */}
        </>
    )
}
