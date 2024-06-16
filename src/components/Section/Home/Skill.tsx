import Image from 'next/image'

export default function Skill() {
    const icons = [
        // 'HTML',
        // 'CSS',
        'JS',
        'TS',
        'React',
        'NextJS',
        'Tailwind',
        'Bootstrap',
        'PHP',
        'Laravel',
        'MySQL',
        'CS',
        'Unity',
        // 'Ps',
        // 'Ai',
        // 'Figma',
        // 'CorelDRAW',
    ]
    const iconsLearning = ['Python', 'Django']

    return (
        <>
            {/* Skill Section */}
            <section className="w-full h-auto flex flex-col gap-10 py-20 mb-14">
                {/* Heading Skill */}
                <h2 className="text-4xl font-medium text-center w-full mb-5">
                    My{' '}
                    <span className="inine-block bg-black text-white px-1">
                        Skill
                    </span>
                </h2>
                {/* End Heading Skill */}
                {/* Skill Content */}
                <div className="w-full px-24 h-auto flex gap-20">
                    {/* Curently Learning */}
                    <div className="w-1/3 shrink-0 h-auto flex flex-col gap-10"></div>
                    {/* Curently Learning */}
                    {/* My Skill */}
                    <div className="w-2/3 shrink-0 border flex h-auto flex-col gap-10">
                        <span className="block text-center text-lg font-medium">
                            Currently Capable:
                        </span>
                        <div className="flex flex-row flex-wrap justify-center gap-6 gap-y-8">
                            {icons.map((icon) => (
                                <div
                                    key={icon}
                                    className="group aspect-square shrink-0 grid place-items-center w-14"
                                >
                                    <Image
                                        src={`/assets/img/icon/${icon}.png`}
                                        alt={icon}
                                        draggable={'false'}
                                        width={64}
                                        height={64}
                                        className="w-full xl:grayscale group-hover:drop-shadow-lg group-hover:grayscale-0 transition-all duration-200 cursor-pointer"
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                    {/* End My Skill */}
                </div>
                {/* End Skill Content */}
            </section>
            {/* End Skill Section */}
        </>
    )
}
