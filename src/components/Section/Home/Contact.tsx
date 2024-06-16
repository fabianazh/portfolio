'use client'

import { useForm } from 'react-hook-form'
import { FaArrowRight } from 'react-icons/fa'
import { BsFacebook, BsGithub } from 'react-icons/bs'
import CircleButton from '@/components/Button/CircleButton'
import { RiInstagramFill } from 'react-icons/ri'
import { mona } from '@/app/fonts'

export default function Contact() {
    const { register, handleSubmit } = useForm<FormData>()

    function sendEmail(data: FormData) {
        const apiEndpoint = '/api/email'

        fetch(apiEndpoint, {
            method: 'POST',
            body: JSON.stringify(data),
        })
            .then((res) => res.json())
            .then((response) => {
                alert(response.message)
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
            className="w-full bg-[#fafafa] flex gap-20 py-14 px-16 h-full"
        >
            <div className={`w-5/12 shrink-0 flex flex-col justify-end gap-2`}>
                <h3 className="text-7xl font-black tracking-tight">
                    Contact <br /> Me
                </h3>
                <span className={`text-base font-semibold`}>
                    Feel free to reach out for collaborations or just a friendly
                    chat.
                </span>
                <div className="h-auto flex w-auto gap-4 mt-2">
                    <CircleButton href="https://github.com/fabianazh">
                        <BsGithub />
                    </CircleButton>
                    <CircleButton href="https://www.facebook.com/profile.php?id=61560075789729">
                        <BsFacebook />
                    </CircleButton>
                    <CircleButton href="https://instagram.com/fabianazhrr">
                        <RiInstagramFill />
                    </CircleButton>
                </div>
            </div>
            <form onSubmit={handleSubmit(onSubmit)} className="w-7/12">
                <div className="mb-5">
                    <label
                        htmlFor={'name'}
                        className={`mb-2 block text-base font-semibold text-black ${mona.className}`}
                    >
                        Full Name
                    </label>
                    <input
                        type={'text'}
                        id={'name'}
                        placeholder={'Enter your full name'}
                        className={`w-full font-normal valid:bg-transparent rounded text-sm border-stone-500 bg-transparent py-3 px-5 placeholder:text-stone-500 text-stone-800 outline-none focus:border-stone-500 border-2 focus:shadow-md`}
                        {...register('name', { required: true })}
                    />
                </div>
                <div className="mb-5">
                    <label
                        htmlFor={'name'}
                        className={`mb-2 block text-base font-semibold text-black ${mona.className}`}
                    >
                        Email
                    </label>
                    <input
                        type={'text'}
                        id={'email'}
                        placeholder={'Enter your email address'}
                        className={`w-full font-normal valid:bg-transparent rounded text-sm border-stone-500 bg-transparent py-3 px-5 placeholder:text-stone-500 text-stone-800 outline-none focus:border-stone-500 border-2 focus:shadow-md`}
                        {...register('email', { required: true })}
                    />
                </div>
                <div className="mb-5">
                    <label
                        htmlFor={'message'}
                        className={`mb-2 block text-base font-semibold text-black ${mona.className}`}
                    >
                        Message
                    </label>
                    <textarea
                        id={'message'}
                        rows={4}
                        placeholder={'Write your message here'}
                        className={`w-full font-normal valid:bg-transparent rounded text-sm border-stone-500 bg-transparent py-3 px-5 placeholder:text-stone-500 text-stone-800 outline-none focus:border-stone-500 border-2 focus:shadow-md resize-none`}
                        {...register('message', { required: true })}
                    ></textarea>
                </div>
                <div className="flex justify-end w-full h-auto gap-4">
                    {/* <button
                        type="reset"
                        className="bg-stone-200 grid place-items-center hover:bg-stone-200/80 transition-colors duration-300 shadow-sm text-black px-5 py-2 text-sm rounded-sm font-semibold"
                    >
                        Reset
                    </button> */}
                    <button
                        type="submit"
                        className="bg-black grid place-items-center hover:bg-stone-800 transition-colors duration-300 shadow-sm text-white group gap-2 grid-flow-col px-5 py-2 text-sm rounded-sm font-medium"
                    >
                        Submit
                        <span className="inline-block text-xs">
                            <FaArrowRight className="" />
                        </span>
                    </button>
                </div>
            </form>
        </section>
    )
}
