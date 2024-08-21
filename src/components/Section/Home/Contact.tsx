'use client'

import { useForm } from 'react-hook-form'
import { FaArrowUp } from 'react-icons/fa'
import { mona, inter } from '@/app/fonts'
import SecondaryButton from '@/components/Button/SecondaryButton'
import PrimaryButton from '../../Button/PrimaryButton'

export default function Contact() {
    const { register, handleSubmit, reset } = useForm<FormData>()

    async function sendEmail(data: FormData) {
        const apiEndpoint = '/api/email'

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
                <h3 className="text-4xl lg:text-5xl font-semibold">
                    Contact Me
                </h3>
                <span className={`block lg:hidden text-base font-normal`}>
                    I&apos;m always excited to discuss new opportunities,
                    projects, or collaborations. Whether you have a question,
                    want to work together, or just want to say hello, feel free
                    to reach out!
                </span>
            </div>
            <div className="grid lg:grid-cols-2 w-full h-auto flex-grow gap-20 items-end z-10">
                <form onSubmit={handleSubmit(onSubmit)} className="w-full">
                    <div className="mb-8 relative group">
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
                    </div>
                    <div className="mb-8 relative group">
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
                    </div>
                    <div className="mb-8 relative group h-fit">
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
                    </div>
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
                        <span className={`hidden lg:block text-lg font-normal`}>
                            I&apos;m always excited to discuss new
                            opportunities, projects, or collaborations. Whether
                            you have a question, want to work together, or just
                            want to say hello, feel free to reach out!
                        </span>
                    </div>
                    <div className="w-full flex-grow flex justify-between lg:justify-start pt-10">
                        <div className="w-fit lg:w-1/2 shrink-0 flex flex-col gap-4">
                            <span className="text-lg font-medium">
                                General Enquires
                            </span>
                            <span className="font-medium text-sm">
                                Muhammad Fabian Azhar
                            </span>
                            <span className="font-medium text-sm">
                                West Java, Indonesia.
                            </span>
                            <span className="font-medium text-sm">
                                fabianazhrr@gmail.com
                            </span>
                        </div>
                        <div className="w-fit lg:w-1/2 shrink-0 flex flex-col gap-4">
                            <span className="text-lg font-medium">
                                Social Media
                            </span>
                            <div className="flex flex-col gap-1">
                                <SecondaryButton
                                    href={'https://instagram.com/fabianazhrr'}
                                    className="text-sm"
                                >
                                    Instagram
                                </SecondaryButton>
                                <SecondaryButton
                                    href={
                                        'https://www.facebook.com/profile.php?id=61560075789729'
                                    }
                                    className="text-sm"
                                >
                                    Facebook
                                </SecondaryButton>
                                <SecondaryButton
                                    href={'https://github.com/fabianazh'}
                                    className="text-sm"
                                >
                                    Github
                                </SecondaryButton>
                                <SecondaryButton
                                    href={'https://linkedin/fabianazh'}
                                    className="text-sm"
                                >
                                    Linked in
                                </SecondaryButton>
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
