'use client'

import Link from 'next/link'
import { IoChevronForward } from 'react-icons/io5'
import { useState } from 'react'

export default function PrimaryButton({
    href,
    children,
    className = 'bg-black text-white',
    target,
    as = 'link',
    type,
    iconClassName,
}: {
    href?: string
    children: React.ReactNode
    className?: string
    target?: '_blank' | '_parent' | '_top' | '_self'
    as: 'button' | 'link'
    type?: 'button' | 'submit' | 'reset'
    iconClassName?: string
}) {
    if (as === 'button') {
        return (
            <button
                type={type}
                className={`grid place-items-center transition-all duration-500 gap-1 grid-flow-col px-5 py-1.5 rounded-full group hover:opacity-80 ${className}`}
            >
                {children}{' '}
                <IoChevronForward
                    className={`group-hover:translate-x-0.5 transition-transform duration-300 ${iconClassName}`}
                />
            </button>
        )
    }

    return (
        <>
            <Link
                href={`${href}`}
                className={`grid place-items-center transition-colors duration-500 gap-1 grid-flow-col px-5 py-1.5 rounded-full group ${className}`}
                target={target}
            >
                {children}{' '}
                <IoChevronForward
                    className={`group-hover:translate-x-0.5 transition-transform duration-300 ${iconClassName}`}
                />
            </Link>
        </>
    )
}
