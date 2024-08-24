'use client'

import { useForm } from 'react-hook-form'
import { mona, inter } from '@/app/fonts'
import SecondaryButton from '@/components/Button/SecondaryButton'
import PrimaryButton from '@/components/Button/PrimaryButton'
import { motion } from 'framer-motion'
import TextReveal from '@/components/Other/TextReveal'
import { enquires, contacts } from '@/constants/component'

export default function Contact() {
    const { register, handleSubmit, reset } = useForm<FormData>()

    async function sendEmail(data: FormData) {
        const apiEndpoint = 'https://fabianazh.vercel.app/api/email'

        fetch(apiEndpoint, {
            method: 'POST',
            body: JSON.stringify(data),
        })
            .then((res) => res.json())
            .then((response) => {
                alert(response.message)
                reset()
            })
            .catch((err) => {
                alert(err)
            })
    }

    function onSubmit(data: FormData) {
        sendEmail(data)
    }

    return (
        <section
            id="contact"
            className={`relative w-full flex flex-col gap-8 lg:gap-12 py-14 px-4 lg:px-16 h-full z-0 ${mona.className}`}
        >
            <div className={`w-full flex gap-4 flex-col ${inter.className}`}>
                <h3 className="text-3xl lg:text-5xl font-semibold">
                    Contact Me
                </h3>
                <TextReveal
                    className={`block lg:hidden text-base font-normal`}
                    text={`I'm always excited to discuss new opportunities, projects, or collaborations. Whether you have a question, want to work together, or just want to say hello, feel free to reach out!`}
                />
            </div>
            <div className="grid lg:grid-cols-2 w-full h-auto flex-grow gap-20 items-end z-10">
                <form onSubmit={handleSubmit(onSubmit)} className="w-full">
                    <motion.div
                        initial={{
                            opacity: 0,
                        }}
                        whileInView={{
                            opacity: 1,
                            transition: {
                                delay: 0.4 + 0 * 0.2,
                            },
                        }}
                        viewport={{
                            amount: 'some',
                            once: true,
                        }}
                        className="mb-8 relative group"
                    >
                        <input
                            type={'text'}
                            id={'name'}
                            placeholder={'Enter your full name'}
                            className={`w-full font-medium valid:bg-transparent text-sm border-stone-300 bg-transparent py-3 px-2 lg:px-3 placeholder:text-stone-700 text-stone-800 outline-none autocomplete:bg-transparent border-b-2 focus:border-stone-400 ${mona.className}`}
                            required
                            autoComplete="off"
                            {...register('name')}
                        />
                        <div className="absolute transition-all duration-300 bottom-0 left-1/2 -translate-x-1/2 w-full h-0.5 scale-x-0 bg-stone-400  group-hover:scale-x-100 group-focus-within:scale-x-100"></div>
                    </motion.div>
                    <motion.div
                        initial={{
                            opacity: 0,
                        }}
                        whileInView={{
                            opacity: 1,
                            transition: {
                                delay: 0.4 + 0.5 * 0.2,
                            },
                        }}
                        viewport={{
                            amount: 'some',
                            once: true,
                        }}
                        className="mb-8 relative group"
                    >
                        <input
                            type={'text'}
                            id={'email'}
                            placeholder={'Enter your email address'}
                            className={`w-full font-medium valid:bg-transparent text-sm border-stone-300 bg-transparent py-3 px-2 lg:px-3 placeholder:text-stone-700 text-stone-800 outline-none autocomplete:bg-transparent border-b-2 focus:border-stone-400 ${mona.className}`}
                            required
                            autoComplete="off"
                            {...register('email')}
                        />
                        <div className="absolute transition-all duration-300 bottom-0 left-1/2 -translate-x-1/2 w-full h-0.5 scale-x-0 bg-stone-400  group-hover:scale-x-100 group-focus-within:scale-x-100"></div>
                    </motion.div>
                    <motion.div
                        initial={{
                            opacity: 0,
                        }}
                        whileInView={{
                            opacity: 1,
                            transition: {
                                delay: 0.4 + 1 * 0.2,
                            },
                        }}
                        viewport={{
                            amount: 'some',
                            once: true,
                        }}
                        className="mb-8 relative group h-fit"
                    >
                        <textarea
                            id={'message'}
                            rows={4}
                            placeholder={'Write your message here'}
                            className={`w-full h-fit font-medium valid:bg-transparent text-sm border-stone-300 bg-transparent py-3 px-2 lg:px-3 placeholder:text-stone-700 text-stone-800 outline-none autocomplete:bg-transparent border-b-2 focus:border-stone-400 ${mona.className}`}
                            required
                            autoComplete="off"
                            {...register('message')}
                        ></textarea>
                        <div className="absolute transition-all duration-300 bottom-1.5 left-1/2 -translate-x-1/2 w-full h-0.5 scale-x-0 bg-stone-400  group-hover:scale-x-100 group-focus-within:scale-x-100"></div>
                    </motion.div>
                    <div className="flex justify-end w-full h-auto gap-4">
                        <PrimaryButton
                            as="button"
                            type="submit"
                            className="bg-black text-white text-sm"
                        >
                            Submit
                        </PrimaryButton>
                    </div>
                </form>
                <div className="flex flex-col divide-y-2 divide-stone-300 z-10">
                    <div className="w-9/12 h-fit pb-10">
                        <TextReveal
                            className={`hidden lg:block text-lg font-normal`}
                            text={`I'm always excited to discuss new opportunities, projects, or collaborations. Whether you have a question, want to work together, or just want to say hello, feel free to reach out!`}
                        />
                    </div>
                    <div className="w-full flex-grow flex justify-between lg:justify-start pt-10">
                        <div className="w-fit lg:w-1/2 shrink-0 flex flex-col gap-4">
                            <span className="text-lg font-medium">
                                General Enquires
                            </span>
                            {enquires.map(
                                (enquire: { name: string }, index: number) => (
                                    <motion.span
                                        key={index}
                                        initial={{
                                            opacity: 0,
                                        }}
                                        whileInView={{
                                            opacity: 1,
                                            transition: {
                                                delay: 0.4 + index * 0.2,
                                            },
                                        }}
                                        viewport={{
                                            amount: 'some',
                                            once: true,
                                        }}
                                        className="font-medium text-sm"
                                    >
                                        {enquire.name}
                                    </motion.span>
                                )
                            )}
                        </div>
                        <div className="w-fit lg:w-1/2 shrink-0 flex flex-col gap-4">
                            <span className="text-lg font-medium">
                                Social Media
                            </span>
                            <div className="flex flex-col gap-1">
                                {contacts.map(
                                    (
                                        contact: { name: string; link: string },
                                        index: number
                                    ) => (
                                        <motion.div
                                            key={index}
                                            initial={{
                                                opacity: 0,
                                            }}
                                            whileInView={{
                                                opacity: 1,
                                                transition: {
                                                    delay: 0.4 + index * 0.2,
                                                },
                                            }}
                                            viewport={{
                                                amount: 'some',
                                                once: true,
                                            }}
                                            className="inline-block w-fit h-fit"
                                        >
                                            <SecondaryButton
                                                href={contact.link}
                                                className="text-sm"
                                            >
                                                {contact.name}
                                            </SecondaryButton>
                                        </motion.div>
                                    )
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Border */}
            <div className="h-0.5 bg-stone-300 w-11/12 mx-auto block absolute bottom-0" />
            {/* End Border */}
        </section>
    )
}
