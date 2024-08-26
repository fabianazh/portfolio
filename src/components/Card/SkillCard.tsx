'use client'

import Image from 'next/image'
import { LinkPreview } from '@/components/Other/LinkPreview'
import { motion } from 'framer-motion'
import { perspectiveItemVariant } from '@/constants/variants'

export default function SkillCard({
    skill,
    index,
}: {
    skill: { title: string; stacks: Skill[] }
    index: number
}) {
    return (
        <>
            {/* Skill Card */}
            <motion.div className="w-full flex flex-col h-fit shrink-0 gap-3 lg:gap-3.5 bg-[#fafafa] p-4 lg:p-6 pb-5 lg:pb-6 rounded-xl shadow-sm">
                {/* Heading */}
                <span className={`block text-sm lg:text-sm font-medium`}>
                    {skill.title}
                </span>
                {/* End Heading */}
                {/* Content */}
                <div className="w-full flex flex-wrap gap-3">
                    {skill.stacks.map((stack: Skill, i: number) => (
                        <LinkPreview key={i} url={stack.url}>
                            <motion.div
                                initial={{
                                    opacity: 0,
                                    y: 8,
                                }}
                                whileInView={{
                                    opacity: 1,
                                    y: 0,
                                    transition: {
                                        delay: 0.1 + i * 0.1,
                                    },
                                }}
                                viewport={{
                                    amount: 'some',
                                    once: true,
                                }}
                                className="group bg-stone-100/50 hover:bg-stone-200/80 rounded-md border shrink-0 w-fit h-fit px-3 py-1.5 flex items-center gap-1.5 duration-300 transition-colors"
                            >
                                <Image
                                    src={`/img/icon/${stack.src}.png`}
                                    alt={stack.name}
                                    draggable={'false'}
                                    width={64}
                                    height={64}
                                    className={`cursor-pointer w-fit h-3 lg:h-4`}
                                />
                                <span
                                    className={`text-xs lg:text-xs font-medium text-black`}
                                >
                                    {stack.name}
                                </span>
                            </motion.div>
                        </LinkPreview>
                    ))}
                </div>
                {/* Content */}
            </motion.div>
            {/* End Skill Card */}
        </>
    )
}
