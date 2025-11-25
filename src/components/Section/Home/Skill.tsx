'use client'

import { inter, mona } from '@/app/fonts'
import SkillCard from '@/components/Card/SkillCard'
import { skills } from '@/constants/component'
import { useLocale } from '@/contexts/LocaleContext'
import localize from '@/libs/utils/localize'

const text = {
    title: {
        en: 'Skills',
        id: 'Keahlian',
    },
    desc: {
        en: 'Check out the languages, databases and frameworks that I am capable of using.',
        id: 'Lihat bahasa pemrograman, database, dan framework yang saya kuasai.',
    },
}

export default function Skill() {
    const { locale } = useLocale()

    return (
        <>
            {/* Skill Section */}
            <section
                id="skill"
                className="w-full h-auto bg-stone-100 flex flex-col lg:flex-row lg:justify-between gap-8 lg:gap-10 py-20 px-4 lg:px-20 z-0"
            >
                {/* Left Content */}
                <div className="w-full lg:w-3/12 shrink-0 flex flex-col gap-1">
                    {/* Heading Skill */}
                    <h2
                        className={`text-xl lg:text-2xl font-medium text-start ${inter.className}`}
                    >
                        {localize(text.title, locale)}
                    </h2>
                    {/* End Heading Skill */}
                    {/* Desc Skill */}
                    <span
                        className={`text-xs lg:text-sm font-medium text-stone-500 ${mona.className}`}
                    >
                        {localize(text.desc, locale)}
                    </span>
                    {/* End Desc Skill */}
                </div>
                {/* End Left Content */}
                {/* Right Content */}
                <div className="w-full lg:w-9/12 flex h-auto flex-col gap-6 z-10">
                    {skills.map(
                        (
                            skill: { title: string; stacks: Skill[] },
                            index: number
                        ) => (
                            <SkillCard
                                key={index}
                                index={index}
                                skill={skill}
                            />
                        )
                    )}
                </div>
                {/* End Right Content */}
            </section>
            {/* End Skill Section */}
        </>
    )
}
