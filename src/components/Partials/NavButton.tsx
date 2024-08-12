import { motion } from 'framer-motion'

export default function NavButton({
    isOpen,
    setIsOpen,
    className = 'w-4 h-4',
}: {
    isOpen: boolean
    setIsOpen: (isopen: boolean) => void
    className?: string
}) {
    return (
        <>
            {/* Nav Button */}
            <motion.div
                initial={false}
                animate={isOpen ? 'open' : 'closed'}
                className={`relative flex items-center w-fit h-full shrink-0`}
            >
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="outline-none grid place-items-center bg-transparent cursor-pointer w-fit h-fit relative top-0 right-0 border-none z-[100]"
                >
                    <svg
                        width="23"
                        height="23"
                        viewBox="0 0 23 23"
                        className={`${className}`}
                    >
                        <motion.path
                            fill="transparent"
                            strokeWidth="2"
                            stroke="hsl(0, 0%, 18%)"
                            strokeLinecap="round"
                            variants={{
                                closed: { d: 'M 2 2.5 L 18 2.5' },
                                open: { d: 'M 3 16.5 L 17 2.5' },
                            }}
                        />
                        <motion.path
                            fill="transparent"
                            strokeWidth="2"
                            stroke="hsl(0, 0%, 18%)"
                            strokeLinecap="round"
                            d="M 2 9.423 L 12 9.423"
                            variants={{
                                closed: { opacity: 1 },
                                open: { opacity: 0 },
                            }}
                            transition={{ duration: 0.1 }}
                        />
                        <motion.path
                            fill="transparent"
                            strokeWidth="2"
                            stroke="hsl(0, 0%, 18%)"
                            strokeLinecap="round"
                            variants={{
                                closed: { d: 'M 2 16.346 L 20 16.346' },
                                open: { d: 'M 3 2.5 L 17 16.346' },
                            }}
                        />
                    </svg>
                </button>
            </motion.div>
            {/* End Nav Button */}
        </>
    )
}
