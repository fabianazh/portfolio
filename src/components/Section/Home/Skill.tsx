import { inter, mona } from '@/app/fonts'
import SkillContainer from '@/components/Container/SkillContainer'
import Image from 'next/image'
import {
    languagesAndFrameworksStack,
    databasesStack,
    otherToolsStack,
} from '@/constants/model'

export default function Skill() {
    return (
        <>
            {/* Skill Section */}
            <section
                id="skill"
                className="w-full h-auto flex flex-col lg:flex-row lg:justify-between gap-4 lg:gap-10 py-20 mb-14 px-6 lg:px-20"
            >
                {/* Left Content */}
                <div className="w-full lg:w-fit flex flex-col gap-1">
                    {/* Heading Skill */}
                    <h2
                        className={`text-xl lg:text-2xl font-medium text-start ${inter.className}`}
                    >
                        Skills
                    </h2>
                    {/* End Heading Skill */}
                    {/* Desc Skill */}
                    <span
                        className={`text-xs lg:text-sm font-medium text-stone-500 ${mona.className}`}
                    >
                        Check out the languages, databases and frameworks that I
                        am capable of using.
                    </span>
                    {/* End Desc Skill */}
                </div>
                {/* End Left Content */}
                {/* Right Content */}
                <div className="w-full lg:w-2/3 shrink-0 flex h-auto flex-col gap-6">
                    <SkillContainer
                        title="Languages and other"
                        stacks={languagesAndFrameworksStack}
                    />
                    <SkillContainer title="Database" stacks={databasesStack} />
                    <SkillContainer
                        title="Additional proficiencies"
                        stacks={otherToolsStack}
                    />
                </div>
                {/* End Right Content */}
            </section>
            {/* End Skill Section */}
        </>
    )
}
