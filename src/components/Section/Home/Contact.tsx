'use client'

import { useForm } from 'react-hook-form'
import { FaArrowRight } from 'react-icons/fa'

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
            className="w-full bg-[#fcfcfc] flex gap-20 py-14 px-16 h-full"
        >
            <div className="w-5/12 shrink-0 flex flex-col justify-end gap-2">
                <h3 className="text-7xl font-black tracking-tight">
                    Contact <br /> Me
                </h3>
                <span className="text-base font-semibold">
                    Feel free to reach out for collaborations or just a friendly
                    chat.
                </span>
            </div>
            <form onSubmit={handleSubmit(onSubmit)} className="w-7/12">
                <div className="mb-5">
                    <label
                        htmlFor={'name'}
                        className="mb-2 block text-base font-semibold text-black"
                    >
                        Full Name
                    </label>
                    <input
                        type={'text'}
                        id={'name'}
                        placeholder={'Enter your full name'}
                        className={`w-full font-medium valid:bg-white rounded text-sm border-gray-200 bg-white py-3 px-5 text-gray-700 outline-none focus:border-stone-500 border-2 focus:shadow-md`}
                        {...register('name', { required: true })}
                    />
                </div>
                <div className="mb-5">
                    <label
                        htmlFor={'name'}
                        className="mb-2 block text-base font-semibold text-black"
                    >
                        Email
                    </label>
                    <input
                        type={'text'}
                        id={'email'}
                        placeholder={'Enter your email address'}
                        className={`w-full fill-transparent rounded font-medium text-sm valid:bg-white border-gray-200 bg-white py-3 px-5 text-gray-700 outline-none focus:border-stone-500 border-2 focus:shadow-md`}
                        {...register('email', { required: true })}
                    />
                </div>
                <div className="mb-5">
                    <label
                        htmlFor={'message'}
                        className="mb-2 block text-base font-semibold text-black"
                    >
                        Message
                    </label>
                    <textarea
                        id={'message'}
                        rows={4}
                        placeholder={'Write your message here'}
                        className={`w-full rounded text-sm border-gray-200 resize-none bg-white py-3 px-5 text-gray-700 valid:bg-white outline-none focus:border-stone-500 border-2 focus:shadow-md`}
                        {...register('message', { required: true })}
                    ></textarea>
                </div>
                <div className="flex justify-end w-full h-auto gap-4">
                    <button
                        type="reset"
                        className="bg-stone-200 grid place-items-center hover:bg-stone-200/80 transition-colors duration-300 shadow-sm text-black px-5 py-2 text-sm rounded-sm font-semibold"
                    >
                        Reset
                    </button>
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
