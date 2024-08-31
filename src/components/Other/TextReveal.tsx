import { motion } from 'framer-motion'

export default function TextReveal({
    text,
    className,
    wordClassName = 'mr-1',
    index = 0,
    duration = 0.2,
    fromButton = false,
}: {
    text: string
    className?: string
    wordClassName?: string
    index?: number
    duration?: number
    fromButton?: boolean
}) {
    const words = text.split(' ')

    return (
        <span className={className}>
            {words.map((word: string, i: number) => (
                <motion.span
                    key={i}
                    className={`inline-block ${wordClassName}`}
                    initial={{ opacity: 0, y: fromButton ? 3 : 0 }}
                    whileInView={{
                        opacity: 1,
                        y: 0,
                        transition: {
                            duration: duration,
                            ease: 'easeOut',
                            delay: index + i * 0.05,
                        },
                    }}
                    viewport={{
                        amount: 'some',
                        once: true,
                    }}
                >
                    {word}
                </motion.span>
            ))}
        </span>
    )
}
