'use client'

import { motion, useInView, useAnimation } from 'framer-motion'
import { useEffect, useRef } from 'react'

export default function AnimatedNumber({ number }: { number: number }) {
    const controls = useAnimation()
    const ref = useRef<HTMLSpanElement | null>(null)
    const isInView = useInView(ref, { once: true })

    useEffect(() => {
        if (isInView) {
            controls.start({
                opacity: 1,
                transition: { duration: 2 },
            })

            let current = 0
            const interval = setInterval(() => {
                if (current < number) {
                    current += 1
                    if (ref.current) {
                        ref.current.innerText = current.toString()
                    }
                } else {
                    clearInterval(interval)
                }
            }, 700 / number)
        }
    }, [controls, isInView, number])

    return (
        <motion.span
            ref={ref}
            initial={{ opacity: 0 }}
            animate={controls}
            className="text-3xl lg:text-4xl font-medium text-black"
        >
            0
        </motion.span>
    )
}
