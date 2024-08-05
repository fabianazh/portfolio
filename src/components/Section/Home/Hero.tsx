'use client'

import { mona, mori } from '@/app/fonts'
import PrimaryButton from '@/components/Button/PrimaryButton'
import Image from 'next/image'
import { FaArrowDown } from 'react-icons/fa'
import Header from '@/components/Partials/Header'
import { BackgroundBeams } from '@/components/Other/BackgroundBeams'

export default function Hero() {
    return (
        <>
            {/* Hero Section */}
            <section
                id="home"
                className="z-0 w-screen h-screen py-6 px-6 lg:px-14"
            >
                {/* Content Container */}
                <div className="relative w-full h-full bg-stone-200/50 rounded-2xl lg:px-10 lg:py-2">
                    {/* Background */}
                    <BackgroundBeams className="" />
                    {/* End Background */}
                    {/* Header */}
                    <Header />
                    {/* End Header */}
                </div>
                {/* End Content Container */}
            </section>
            {/* End Hero Section */}
        </>
    )
}
