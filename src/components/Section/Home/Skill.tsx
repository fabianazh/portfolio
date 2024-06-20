import { mona, mori, urbanist } from '@/app/fonts'
import { LinkPreview } from '@/components/Other/LinkPreview'
import Image from 'next/image'

export default function Skill() {
    const stacks = [
        {
            name: 'JS',
            isSquare: true,
            url: 'https://www.javascript.com/',
        },
        {
            name: 'TS',
            isSquare: true,
            url: 'https://www.typescriptlang.org/',
        },
        {
            name: 'React',
            isSquare: false,
            url: 'https://reactjs.org/',
        },
        {
            name: 'NextJS',
            isSquare: false,
            url: 'https://nextjs.org/',
        },
        {
            name: 'NodeJS',
            isSquare: false,
            url: 'https://nodejs.org/',
        },
        {
            name: 'ExpressJS',
            isSquare: false,
            url: 'https://expressjs.com/',
        },
        {
            name: 'Tailwind',
            isSquare: false,
            url: 'https://tailwindcss.com/',
        },
        {
            name: 'Bootstrap',
            isSquare: false,
            url: 'https://getbootstrap.com/',
        },
        {
            name: 'PHP',
            isSquare: false,
            url: 'https://www.php.net/',
        },
        {
            name: 'Laravel',
            isSquare: false,
            url: 'https://laravel.com/',
        },
        {
            name: 'MongoDB',
            isSquare: false,
            url: 'https://www.mongodb.com/',
        },
        {
            name: 'PostgreSQL',
            isSquare: false,
            url: 'https://www.postgresql.org/',
        },
        {
            name: 'MySQL',
            isSquare: false,
            url: 'https://www.mysql.com/',
        },
        {
            name: 'CS',
            isSquare: false,
            url: 'https://learn.microsoft.com/en-us/dotnet/csharp',
        },
    ]

    const otherTools = [
        {
            name: 'Git',
            isSquare: false,
            url: 'https://git-scm.com/',
        },
        {
            name: 'Figma',
            isSquare: false,
            url: 'https://www.figma.com/',
        },
        {
            name: 'Ps',
            isSquare: true,
            url: 'https://www.adobe.com/products/photoshop.html',
        },
        {
            name: 'Ai',
            isSquare: true,
            url: 'https://www.adobe.com/products/illustrator.html',
        },
        {
            name: 'Unity',
            isSquare: false,
            url: 'https://unity.com/',
        },
    ]

    return (
        <>
            {/* Skill Section */}
            <section
                id="skill"
                className="w-full h-auto flex flex-col items-center gap-10 py-20 mb-14"
            >
                {/* Heading Skill */}
                <h2
                    className={`text-4xl lg:text-5xl font-semibold ${mori.className}`}
                >
                    My Skill
                </h2>
                {/* End Heading Skill */}
                {/* Skill Content */}
                <div className="w-full px-6 lg:px-24 h-auto flex flex-col lg:flex-row gap-6">
                    {/* Left Content */}
                    <div className="w-full lg:w-1/3 shrink-0 flex-grow">
                        <div className="w-full h-full group cursor-pointer">
                            <div className="w-full relative h-full overflow-hidden transition-all group-hover:scale-90 duration-[0.9s] scale-100 rounded-xl">
                                <Image
                                    src={'/assets/img/bg/f11.jpg'}
                                    alt=""
                                    width={300}
                                    height={400}
                                    draggable={'false'}
                                    className="w-full h-full transition-all grayscale scale-100 duration-[0.9s] group-hover:scale-125 object-cover"
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
                                    Check out the languages and frameworks that
                                    I am capable of using
                                </span>
                            </div>
                            <div className="grid grid-cols-3 gap-[1.1rem]">
                                {stacks.map((icon, index) => (
                                    <LinkPreview key={index} url={icon.url}>
                                        <div className="group bg-stone-200/90 rounded aspect-square shrink-0 grid place-items-center w-full overflow-hidden shadow">
                                            <Image
                                                src={`/assets/img/icon/${icon.name}.png`}
                                                alt={icon.name}
                                                draggable={'false'}
                                                width={64}
                                                height={64}
                                                className={`xl:grayscale-0 transition-all duration-200 cursor-pointer w-10`}
                                            />
                                        </div>
                                    </LinkPreview>
                                ))}
                            </div>
                        </div>
                        <div className="w-full flex flex-col h-fit shrink-0 border p-6 lg:p-6 pt-4 pb-8 rounded-xl bg-stone-100 gap-2 lg:gap-4">
                            <span
                                className={`block text-lg lg:text-xl font-bold ${urbanist.className}`}
                            >
                                Other tools
                            </span>
                            <div className="flex flex-row flex-wrap justify-start gap-[1.1rem]">
                                {otherTools.map((icon, index) => (
                                    <LinkPreview key={index} url={icon.url}>
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
                                    </LinkPreview>
                                ))}
                            </div>
                        </div>
                    </div>
                    {/* End Right Content */}
                </div>
                {/* End Skill Content */}
            </section>
            {/* End Skill Section */}
        </>
    )
}
