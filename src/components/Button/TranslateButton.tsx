'use client'

import { motion } from 'framer-motion'
import { perspectiveItemVariant } from '@/constants/variants'
import { useLocale } from '@/contexts/LocaleContext'

export default function TranslateButton({
    value,
    delay,
}: {
    value: string
    delay: number
}) {
    const { locale, setLocale } = useLocale()

    const isActive = locale === value

    return (
        <>
            <motion.div
                variants={perspectiveItemVariant}
                custom={delay}
                animate="enter"
                exit="exit"
                initial="initial"
                role="button"
                tabIndex={0}
                onClick={() => setLocale(value)}
                className={`text-xs lg:text-xs border px-3 py-0.5 rounded-full font-semibold cursor-pointer select-none ${
                    isActive ? 'bg-stone-600 text-white' : ''
                }`}
            >
                {value.toUpperCase()}
            </motion.div>
        </>
    )
}
