export default function Hero() {
    return (
        <>
            {/* Hero Section */}
            <section
                id="home"
                className="relative top-0 z-0 flex w-full h-screen text-lg px-6 md:px-16 lg:flex-row lg:mb-16 overflow-x-hidden pb-20 lg:pb-5"
            >
                {/* Left Content */}
                <div className="flex flex-col h-full w-full gap-0 lg:gap-2.5 overflow-x-hidden justify-end">
                    {/* Text */}
                    <div className="flex flex-col gap-2 lg:gap-2 w-fit h-auto">
                        <span
                            className={`text-4xl lg:text-[4rem] lg:leading-none tracking-tight font-medium`}
                        >
                            I&apos;m Fabian,
                        </span>
                        <div className="flex flex-col lg:flex-row w-full h-auto gap-4 lg:gap-6 lg:items-end overflow-hidden">
                            <span className="text-6xl font-medium lg:font-normal lg:text-[7rem] lg:leading-none tracking-tight block shrink-0">
                                Full Stack Developer
                            </span>
                            <span className="text-base tracking-normal leading-normal font-medium lg:-translate-y-">
                                Specialized in Web Design, UX / UI, Front End
                                Development and Back end Development.
                            </span>
                        </div>
                    </div>
                    {/* End Text */}
                </div>
                {/* End Left Content */}
            </section>
            {/* End Hero Section */}
        </>
    )
}
