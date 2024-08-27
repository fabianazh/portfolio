'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useToaster } from '@/contexts/ToasterContext'

export default function Toaster() {
    const { messages, removeMessage } = useToaster()

    return (
        <div className="fixed bottom-4 right-0 lg:right-6 lg:bottom-6 flex flex-col space-y-3 lg:space-y-4 w-full lg:w-fit items-center lg:items-start lg:max-w-sm px-4 lg:px-0 z-50">
            <AnimatePresence>
                {messages.map(({ id, message, type }) => (
                    <motion.div
                        key={id}
                        initial={{ opacity: 0 }}
                        animate={{
                            opacity: 1,
                            transition: {
                                duration: 0.4,
                            },
                        }}
                        exit={{
                            opacity: 0,
                            transition: {
                                duration: 0.4,
                            },
                        }}
                        onClick={() => removeMessage(id)}
                        className="relative w-full lg:w-80 py-2 lg:py-2.5 px-5 gap-2 lg:gap-10 bg-stone-50 border border-b-0 rounded-md shadow flex justify-between items-center cursor-pointer"
                    >
                        {/* Message */}
                        <span className="text-sm text-black font-medium">
                            {message}
                        </span>
                        {/* End Message */}
                        {/* Close Button */}
                        <button
                            onClick={() => removeMessage(id)}
                            className="ml-4 text-black hover:text-black/80 font-medium focus:outline-none"
                        >
                            &#10005;
                        </button>
                        {/* End Close Button */}
                        {/* Indicator */}
                        <div
                            className={`absolute w-full h-0.5 bottom-0 right-0 z-10`}
                        >
                            <motion.div
                                initial={{ width: '100%' }}
                                animate={{ width: 0 }}
                                transition={{ duration: 3.5, ease: 'linear' }}
                                className={`h-full bg-white ${
                                    type === 'success'
                                        ? 'bg-green-400'
                                        : 'bg-red-500'
                                }`}
                            />
                        </div>
                        {/* End Indicator */}
                    </motion.div>
                ))}
            </AnimatePresence>
        </div>
    )
}
