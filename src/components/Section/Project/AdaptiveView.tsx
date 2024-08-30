import DeviceCard from '@/components/Card/DeviceCard'
import { inter } from '@/app/fonts'

export default function AdaptiveView({ project }: { project: Project }) {
    return (
        <>
            <section className="w-full h-auto bg-white flex flex-col lg:flex-row lg:justify-between gap-6 lg:gap-10 py-10 lg:py-14 mb-14 px-4 lg:px-20 z-0">
                {/* Left Content */}
                <div className="w-full lg:w-fit flex flex-col gap-1">
                    {/* Heading  */}
                    <h2
                        className={`text-lg lg:text-xl font-medium text-start ${inter.className}`}
                    >
                        Adaptive View
                    </h2>
                    {/* End Heading  */}
                </div>
                {/* End Left Content */}
                {/* Right Content */}
                <div className="w-full lg:w-9/12 flex h-auto flex-col gap-4 lg:gap-6">
                    {/* Desktop View */}
                    <DeviceCard
                        type="desktop"
                        url={`${project?.desktopViewImage}`}
                    />
                    {/* End Desktop View */}
                    <div className="w-full flex flex-col lg:flex-row gap-4 lg:gap-6">
                        <DeviceCard
                            type="tablet"
                            index={1}
                            url={`${project?.tabletViewImage}`}
                        />
                        <DeviceCard
                            type="mobile"
                            index={2}
                            url={`${project?.mobileViewImage}`}
                        />
                    </div>
                </div>
                {/* End Right Content */}
            </section>
        </>
    )
}
