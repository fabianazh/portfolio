import { mona, urbanist } from '@/app/fonts'
import Image from 'next/image'

export default function Skill() {
    const iconsOld = [
        // 'HTML',
        // 'CSS',
        // 'Ps',
        // 'Ai',
        // 'Figma',
        // 'CorelDRAW',
    ]

    const icons = [
        {
            name: 'JS',
            isSquare: true,
        },
        {
            name: 'TS',
            isSquare: true,
        },
        {
            name: 'React',
            isSquare: false,
        },
        {
            name: 'NextJS',
            isSquare: false,
        },
        {
            name: 'Tailwind',
            isSquare: false,
        },
        {
            name: 'Bootstrap',
            isSquare: false,
        },
        {
            name: 'PHP',
            isSquare: false,
        },
        {
            name: 'Laravel',
            isSquare: false,
        },
        {
            name: 'MySQL',
            isSquare: false,
        },
        {
            name: 'CS',
            isSquare: false,
        },
        {
            name: 'Unity',
            isSquare: false,
        },
    ]

    const iconsLearning = ['Python', 'Django']

    return (
        <>
            {/* Skill Section */}
            <section className="w-full h-auto flex flex-col gap-10 py-20 mb-14">
                {/* Heading Skill */}
                <h2
                    className={`text-3xl lg:text-4xl font-medium text-center w-full lg:mb-5`}
                >
                    My{' '}
                    <span className="inine-block bg-black text-white px-1">
                        Skill
                    </span>
                </h2>
                {/* End Heading Skill */}
                {/* Skill Content */}
                <div className="w-full px-6 lg:px-24 h-auto flex flex-col lg:flex-row gap-6">
                    {/* Left Content */}
                    <div className="w-full lg:w-1/3 shrink-0 h-auto">
                        <div className="w-full h-auto group cursor-pointer">
                            <div className="w-full relative h-auto overflow-hidden transition-all group-hover:scale-90 duration-[0.9s] scale-100 rounded-xl">
                                <Image
                                    src={'/assets/img/bg/f1.jpg'}
                                    alt=""
                                    width={300}
                                    height={400}
                                    draggable={'false'}
                                    className="w-full h-fit transition-all scale-100 duration-[0.9s] group-hover:scale-125 brightness-"
                                />
                            </div>
                        </div>
                    </div>
                    {/* End Left Content */}
                    {/* Right Content */}
                    <div className="w-full lg:w-2/3 shrink-0 flex h-auto flex-col gap-6">
                        <div className="w-full flex flex-col h-fit shrink-0 border p-6 lg:p-6 pb-8 rounded-xl bg-stone-100 gap-4 lg:gap-6">
                            <div className="w-full flex flex-col gap-1">
                                <span
                                    className={`block text-xl lg:text-2xl font-bold ${urbanist.className}`}
                                >
                                    Explore my stack
                                </span>
                                <span
                                    className={`text-sm lg:text-base font-medium text-stone-700 ${mona.className}`}
                                >
                                    Check out what language and framework i use
                                </span>
                            </div>
                            <div className="flex flex-row flex-wrap justify-start gap-[1.1rem]">
                                {icons.map((icon, index) => (
                                    <div
                                        key={index}
                                        className="group bg-stone-200/90 rounded aspect-square shrink-0 grid place-items-center w-16 overflow-hidden shadow"
                                    >
                                        <Image
                                            src={`/assets/img/icon/${icon.name}.png`}
                                            alt={icon.name}
                                            draggable={'false'}
                                            width={64}
                                            height={64}
                                            className={`xl:grayscale-0 transition-all duration-200 cursor-pointer w-10`}
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="w-full h-auto shrink-0 rounded-xl bg-stone-100 border flex-grow"></div>
                    </div>
                    {/* End Right Content */}
                </div>
                {/* End Skill Content */}
            </section>
            {/* End Skill Section */}
        </>
    )
}
