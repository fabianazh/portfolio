'use client'

import { useForm } from 'react-hook-form'
import { FaArrowUp } from 'react-icons/fa'
import { mona, mori } from '@/app/fonts'
import SecondaryButton from '@/components/Button/SecondaryButton'

export default function Contact() {
    const { register, handleSubmit, reset } = useForm<FormData>()

    function sendEmail(data: FormData) {
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
            className={`w-full bg-[#fafafa] flex flex-col gap-8 lg:gap-20 py-14 px-6 lg:px-16 h-full ${mona.className}`}
        >
            <div className={`w-full flex gap-2 flex-col ${mori.className}`}>
                <h3 className="text-4xl lg:text-7xl font-semibold">
                    Contact Me
                </h3>
                <span className={`block lg:hidden text-base font-medium`}>
                    I&apos;m always excited to discuss new opportunities,
                    projects, or collaborations. Whether you have a question,
                    want to work together, or just want to say hello, feel free
                    to reach out!
                </span>
            </div>
            <div className="grid lg:grid-cols-2 w-full h-auto flex-grow gap-20 items-end">
                <form onSubmit={handleSubmit(onSubmit)} className="w-full">
                    <div className="mb-8">
                        <input
                            type={'text'}
                            id={'name'}
                            placeholder={'Enter your full name'}
                            className={`w-full font-medium valid:bg-transparent text-sm border-stone-300 bg-transparent py-3 px-2 lg:px-3 placeholder:text-stone-700 text-stone-800 outline-none autocomplete:bg-transparent focus:border-stone-400 border-b-2 ${mona.className}`}
                            required
                            autoComplete="off"
                            {...register('name')}
                        />
                    </div>
                    <div className="mb-8">
                        <input
                            type={'text'}
                            id={'email'}
                            placeholder={'Enter your email address'}
                            className={`w-full font-medium valid:bg-transparent text-sm border-stone-300 bg-transparent py-3 px-2 lg:px-3 placeholder:text-stone-700 text-stone-800 outline-none autocomplete:bg-transparent focus:border-stone-400 border-b-2 ${mona.className}`}
                            required
                            autoComplete="off"
                            {...register('email')}
                        />
                    </div>
                    <div className="mb-8">
                        <textarea
                            id={'message'}
                            rows={4}
                            placeholder={'Write your message here'}
                            className={`w-full font-medium valid:bg-transparent text-sm border-stone-300 bg-transparent py-3 px-2 lg:px-3 placeholder:text-stone-700 text-stone-800 outline-none autocomplete:bg-transparent focus:border-stone-400 border-b-2 ${mona.className} resize-none`}
                            required
                            autoComplete="off"
                            {...register('message')}
                        ></textarea>
                    </div>
                    <div className="flex justify-end w-full h-auto gap-4">
                        <button
                            type="submit"
                            className="bg-black grid place-items-center transition-colors duration-300 text-white gap-2.5 grid-flow-col pr-1 pl-5 py-1 rounded-full group"
                        >
                            Submit
                            <div className="text-sm rounded-full grid place-items-center bg-Gray-200 text-black w-7 aspect-square shrink-0 scale-[.2] group-hover:scale-100 transition-transform">
                                <FaArrowUp className="rotate-45 scale-0 group-hover:scale-100 transition-transform" />
                            </div>
                        </button>
                    </div>
                </form>
                <div className="flex flex-col divide-y-2 divide-stone-300">
                    <div className="w-9/12 h-fit pb-10">
                        <span className={`hidden lg:block text-lg font-normal`}>
                            I’m always excited to discuss new opportunities,
                            projects, or collaborations. Whether you have a
                            question, want to work together, or just want to say
                            hello, feel free to reach out!
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
                            <div className="flex flex-col gap-1">
                                <span className="font-medium text-sm">
                                    Email
                                </span>
                                <span className="font-medium text-sm">
                                    fabianazhrr@gmail.com
                                </span>
                            </div>
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
                                <SecondaryButton href={'#'} className="text-sm">
                                    Linked in
                                </SecondaryButton>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
