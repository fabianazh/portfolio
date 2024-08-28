'use client'

import { useForm } from 'react-hook-form'
import { mona, inter } from '@/app/fonts'
import SecondaryButton from '@/components/Button/SecondaryButton'
import PrimaryButton from '@/components/Button/PrimaryButton'
import { motion } from 'framer-motion'
import TextReveal from '@/components/Other/TextReveal'
import { enquires, contacts } from '@/constants/component'
import Toaster from '@/components/Other/Toaster'
import { useToaster } from '@/contexts/ToasterContext'
import * as z from 'zod'
import { mailSchema } from '@/schemas/zod'
import { zodResolver } from '@hookform/resolvers/zod'

type FormData = z.infer<typeof mailSchema>

export default function Contact() {
    const {
        handleSubmit,
        register,
        reset,
        formState: { errors, isSubmitting },
    } = useForm<FormData>({
        resolver: zodResolver(mailSchema),
    })
    const { addMessage } = useToaster()

    async function sendEmail(data: FormData) {
        const apiEndpoint = `/api/email`

        try {
            const response = await fetch(apiEndpoint, {
                method: 'POST',
                body: JSON.stringify(data),
            })
            const result = await response.json()
            addMessage('success', result.message)
            reset()
        } catch (error) {
            addMessage(
                'error',
                error instanceof Error
                    ? error.message
                    : 'An unknown error occurred'
            )
        }
    }

    function onSubmit(data: FormData) {
        sendEmail(data)
    }

    return (
        <section
            id="contact"
            className={`relative w-full flex flex-col gap-8 lg:gap-12 py-14 px-4 lg:px-16 h-full z-10 ${mona.className}`}
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
                        className="mb-8 relative group flex flex-col gap-1"
                    >
                        <div className="w-full h-fit relative">
                            <input
                                type={'text'}
                                id={'name'}
                                placeholder={'Enter your full name'}
                                className={`w-full font-medium valid:bg-transparent text-sm bg-transparent py-3 px-2 lg:px-3 placeholder:text-stone-700 text-stone-800 outline-none autocomplete:bg-transparent border-b-2 ${
                                    errors.name
                                        ? 'border-red-400 focus:border-red-500'
                                        : 'border-stone-300 focus:border-stone-400'
                                } ${mona.className}`}
                                required
                                autoComplete="off"
                                {...register('name')}
                            />
                            <div
                                className={`absolute transition-all duration-300 bottom-0 left-1/2 -translate-x-1/2 w-full h-0.5 scale-x-0  group-hover:scale-x-100 group-focus-within:scale-x-100 ${
                                    errors.name ? 'bg-red-500' : 'bg-stone-400'
                                }`}
                            />
                        </div>
                        {errors.name && (
                            <span className="text-red-600 text-sm">
                                {errors.name.message}
                            </span>
                        )}
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
                        className="mb-8 relative group flex flex-col gap-1"
                    >
                        <div className="w-full h-fit relative">
                            <input
                                type={'text'}
                                id={'email'}
                                placeholder={'Enter your email address'}
                                className={`w-full font-medium valid:bg-transparent text-sm bg-transparent py-3 px-2 lg:px-3 placeholder:text-stone-700 text-stone-800 outline-none autocomplete:bg-transparent border-b-2 ${
                                    errors.email
                                        ? 'border-red-400 focus:border-red-500'
                                        : 'border-stone-300 focus:border-stone-400'
                                } ${mona.className}`}
                                required
                                autoComplete="off"
                                {...register('email')}
                            />
                            <div
                                className={`absolute transition-all duration-300 bottom-0 left-1/2 -translate-x-1/2 w-full h-0.5 scale-x-0  group-hover:scale-x-100 group-focus-within:scale-x-100 ${
                                    errors.email ? 'bg-red-500' : 'bg-stone-400'
                                }`}
                            />
                        </div>
                        {errors.email && (
                            <span className="text-red-600 text-sm">
                                {errors.email?.message}
                            </span>
                        )}
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
                        className="mb-8 relative group flex flex-col h-fit"
                    >
                        <div className="w-full h-fit relative">
                            <textarea
                                id={'message'}
                                rows={4}
                                placeholder={'Write your message here'}
                                className={`w-full h-fit font-medium valid:bg-transparent text-sm bg-transparent py-3 px-2 lg:px-3 placeholder:text-stone-700 text-stone-800 outline-none autocomplete:bg-transparent border-b-2 ${
                                    errors.message
                                        ? 'border-red-400 focus:border-red-500'
                                        : 'border-stone-300 focus:border-stone-400'
                                } ${mona.className}`}
                                required
                                autoComplete="off"
                                {...register('message')}
                            ></textarea>
                            <div
                                className={`absolute transition-all duration-300 bottom-1.5 left-1/2 -translate-x-1/2 w-full h-0.5 scale-x-0 group-hover:scale-x-100 group-focus-within:scale-x-100 ${
                                    errors.message
                                        ? 'bg-red-500'
                                        : 'bg-stone-400'
                                }`}
                            />
                        </div>
                        {errors.message && (
                            <span className="text-red-600 text-sm">
                                {errors.message?.message}
                            </span>
                        )}
                    </motion.div>
                    <motion.div
                        initial={{
                            opacity: 0,
                        }}
                        whileInView={{
                            opacity: 1,
                            transition: {
                                delay: 0.4 + 1.5 * 0.2,
                            },
                        }}
                        viewport={{
                            amount: 'some',
                            once: true,
                        }}
                        className="flex justify-end w-full h-auto gap-4"
                    >
                        <PrimaryButton
                            as="button"
                            type="submit"
                            className="bg-black text-white text-sm"
                        >
                            {isSubmitting ? 'Submiting...' : 'Submit'}
                        </PrimaryButton>
                    </motion.div>
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
                            <motion.span
                                initial={{
                                    opacity: 0,
                                }}
                                whileInView={{
                                    opacity: 1,
                                    transition: {
                                        delay: 0.4,
                                    },
                                }}
                                viewport={{
                                    amount: 'some',
                                    once: true,
                                }}
                                className="text-lg font-medium"
                            >
                                General Enquires
                            </motion.span>
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
                            <motion.span
                                initial={{
                                    opacity: 0,
                                }}
                                whileInView={{
                                    opacity: 1,
                                    transition: {
                                        delay: 0.4,
                                    },
                                }}
                                viewport={{
                                    amount: 'some',
                                    once: true,
                                }}
                                className="text-lg font-medium"
                            >
                                Social Media
                            </motion.span>
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
            <Toaster />
        </section>
    )
}
