import { FiX } from 'react-icons/fi'
import { perspectiveItemVariant, overlayVariant } from '@/constants/variants'
import { useLocale } from '@/contexts/LocaleContext'
import localize from '@/libs/utils/localize'
import { motion } from 'framer-motion'
import NotAvailableIcon from '@/components/Icon/NotAvailableIcon'

export default function NotAvailableModal({
    setModal,
    modal,
}: {
    setModal: (e: {
        isOpen: boolean
        data: {
            title: { en: string; id: string }
            desc: { en: string; id: string }
        } | null
    }) => void
    modal: {
        isOpen: boolean
        data: {
            title: { en: string; id: string }
            desc: { en: string; id: string }
        } | null
    }
}) {
    const { locale } = useLocale()

    const titleText = modal?.data?.title
        ? localize(modal.data.title, locale)
        : ''

    const descText = modal?.data?.desc ? localize(modal.data.desc, locale) : ''

    return (
        <>
            <motion.div className="w-screen h-screen fixed top-0 left-0 bg-transparent z-[60]">
                {/* Modal Container */}
                <div className="w-full h-full relative flex justify-center items-center z-0">
                    {/* Overlay */}
                    <motion.div
                        onClick={() =>
                            setModal({
                                isOpen: false,
                                data: null,
                            })
                        }
                        variants={overlayVariant}
                        animate="enter"
                        exit="exit"
                        initial="initial"
                        className="absolute w-full h-full bg-transparent backdrop-blur z-0"
                    ></motion.div>
                    {/* End Overlay */}
                    {/* Modal */}
                    <motion.div
                        variants={{
                            initial: {
                                opacity: 0,
                                scale: 0.95,
                            },
                            enter: {
                                opacity: 1,
                                scale: 1,
                                transition: {
                                    delay: 0.3,
                                    duration: 0.2,
                                },
                            },
                            exit: {
                                opacity: 0,
                                scale: 0.95,
                                transition: {
                                    duration: 0.2,
                                },
                            },
                        }}
                        animate="enter"
                        exit="exit"
                        initial="initial"
                        className="relative w-10/12 lg:w-5/12 lg:min-w-96 min-h-40 lg:min-h-56 bg-white z-10 shadow-sm rounded-2xl h-auto pb-7 pt-0 flex flex-col gap-8"
                    >
                        {/* Top Content */}
                        <div
                            onClick={() =>
                                setModal({
                                    isOpen: false,
                                    data: null,
                                })
                            }
                            className="relative w-full border-b border-stone-300 flex justify-end items-center p-3"
                        >
                            <div className="w-fit h-fit rounded-full p-1 hover:bg-stone-100 hover:shadow-sm transition-all duration-300">
                                <FiX className="text-xl lg:text-xl cursor-pointer text-stone-500" />
                            </div>
                        </div>
                        {/* End Top Content */}
                        {/* Bottom Content */}
                        <div className="w-full flex flex-col shrink-0 gap-4 py-4 shrink-0 px-12 pt-0 justify-center items-center text-center">
                            {/* Image Content */}
                            <div className="w-full h-fit relative flex justify-center items-center">
                                <NotAvailableIcon className="w-fit h-40" />
                            </div>
                            {/* End Image Content */}
                            {/* Text Content */}
                            <div className="w-full flex flex-col">
                                <h4
                                    className={`text-base lg:text-lg font-semibold`}
                                >
                                    {titleText}
                                </h4>
                                <h5
                                    className={`text-xs lg:text-sm font-semibold text-stone-600`}
                                >
                                    {descText}
                                </h5>
                            </div>
                            {/* End Text Content */}
                        </div>
                        {/* End Bottom Content */}
                    </motion.div>
                    {/* End Modal */}
                </div>
                {/* End Modal Container */}
            </motion.div>
        </>
    )
}
