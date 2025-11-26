import { FiX } from 'react-icons/fi'
import PrimaryButton from '@/components/Button/PrimaryButton'
import { perspectiveItemVariant, overlayVariant } from '@/constants/variants'
import { useLocale } from '@/contexts/LocaleContext'
import localize from '@/libs/utils/localize'
import { motion } from 'framer-motion'

export default function ServiceModal({
    setModal,
    modal,
}: {
    setModal: (e: { isOpen: boolean; data: Service | null }) => void
    modal: { isOpen: boolean; data: Service | null }
}) {
    const { locale } = useLocale()

    const titleText = modal?.data?.title
        ? localize(modal.data.title, locale)
        : ''

    const projectsList: string[] = modal?.data?.projects
        ? (modal.data.projects as Record<string, string[]>)[locale] ??
          modal.data.projects.en ??
          []
        : []

    const href = modal?.data?.href ? localize(modal.data.href, locale) : '#'

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
                        className="relative w-auto max-w-[90vw] lg:min-w-72 min-h-40 lg:min-h-56 bg-white z-10 shadow-sm rounded-2xl h-auto p-6 pr-14 lg:pr-16 lg:p-8 pt-5 lg:pt-7 flex flex-row-reverse gap-6"
                    >
                        {/* Close Button */}
                        <div
                            onClick={() =>
                                setModal({
                                    isOpen: false,
                                    data: null,
                                })
                            }
                            className="absolute top-5 right-6 w-fit h-fit z-0 cursor-pointer translate-y-1 translate-x-1 text-stone-500"
                        >
                            <FiX className="text-xl lg:text-xl" />
                        </div>
                        {/* End Close Button */}
                        {/* Content */}
                        <div className="w-fit flex flex-col shrink-0 gap-3 py-2 shrink-0">
                            {/* Title */}
                            <h4
                                className={`text-xl lg:text-2xl font-semibold break-words`}
                            >
                                {titleText}
                            </h4>
                            {/* End Title */}
                            {/* Project List */}
                            <ul className="w-full flex flex-col list-none px-1">
                                {projectsList.map(
                                    (item: string, index: number) => (
                                        <motion.li
                                            variants={perspectiveItemVariant}
                                            custom={index}
                                            initial="initial"
                                            animate="enter"
                                            exit="exit"
                                            key={index}
                                            className="text-sm font-normal flex items-center text-stone-700 break-words"
                                        >
                                            <span className="inline-block w-1 h-1 mr-2 rounded-full bg-stone-700"></span>
                                            {item}
                                        </motion.li>
                                    )
                                )}
                            </ul>
                            {/* End Project List */}
                            {/* Button */}
                            <PrimaryButton
                                href={href}
                                className={`inline-block w-fit text-xs font-medium bg-black text-white mt-3 lg:mt-5`}
                                as="link"
                            >
                                Order
                            </PrimaryButton>
                            {/* End Button */}
                        </div>
                        {/* End Content */}
                    </motion.div>
                    {/* End Modal */}
                </div>
                {/* End Modal Container */}
            </motion.div>
        </>
    )
}
