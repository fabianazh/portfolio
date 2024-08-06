'use client'

import { mona, mori } from '@/app/fonts'
import PrimaryButton from '@/components/Button/PrimaryButton'
import Image from 'next/image'
import { FaArrowDown } from 'react-icons/fa'
import Header from '@/components/Partials/Header'
import { BackgroundBeams } from '@/components/Other/BackgroundBeams'
import Link from 'next/link'

export default function Hero() {
    return (
        <>
            {/* Hero Section */}
            <section
                id="home"
                className="z-0 w-screen h-screen py-4 lg:py-6 px-0 lg:px-14"
            >
                {/* Content Container */}
                <div className="relative w-full h-full flex flex-col justify-between bg-stone-200/30 rounded-2xl px-4 lg:px-10 py-2">
                    {/* Background */}
                    <BackgroundBeams className="absolute w-full h-full top-0 left-0" />
                    {/* End Background */}

                    {/* Header */}
                    <Header />
                    {/* End Header */}

                    {/* Content */}
                    <div
                        className={`w-full items-center flex flex-col gap-2 text-center pb-14 lg:pb-32 px-6 lg:px-56 ${mona.className}`}
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
                            className="w-fit text-xs lg:text-sm font-medium py-2 px-4 mt-4 lg:mt-6 inline-flex h-fit gap-2 bg-white rounded-full"
                        >
                            Request a project
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
