import { mori } from '@/app/fonts'
import SkillContainer from '@/components/Container/SkillContainer'
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
        // {
        //     name: 'CS',
        //     isSquare: false,
        //     url: 'https://learn.microsoft.com/en-us/dotnet/csharp',
        // },
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
        // {
        //     name: 'Ai',
        //     isSquare: true,
        //     url: 'https://www.adobe.com/products/illustrator.html',
        // },
        // {
        //     name: 'Unity',
        //     isSquare: false,
        //     url: 'https://unity.com/',
        // },
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
                <div className="w-full px-6 lg:px-16 h-auto flex flex-col lg:flex-row gap-6">
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
                                    className="w-full h-full transition-all grayscale scale-100 duration-[0.9s] group-hover:scale-125 group-hover:grayscale-0 object-cover"
                                />
                            </div>
                        </div>
                    </div>
                    {/* End Left Content */}
                    {/* Right Content */}
                    <div className="w-full lg:w-2/3 shrink-0 flex h-auto flex-col gap-6">
                        <SkillContainer
                            title="Explore my stack"
                            desc="Check out the languages and frameworks that I am capable
                        of using."
                            stack={stacks}
                        />
                        <SkillContainer
                            title="Additional proficiencies"
                            desc="Discover the additional tools and software that complement my core stack."
                            stack={otherTools}
                        />
                    </div>
                    {/* End Right Content */}
                </div>
                {/* End Skill Content */}
            </section>
            {/* End Skill Section */}
        </>
    )
}
