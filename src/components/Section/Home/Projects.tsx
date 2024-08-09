import { inter, mona } from '@/app/fonts'
import ProjectContainer from '@/components/Container/ProjectContainer'
import { projects } from '@/constants/model'

export default function Projects() {
    const highlightedProjects = projects.filter(
        (project) => project.isHighlighted === true
    )

    const otherProjects = projects.filter(
        (project) => project.isHighlighted === false
    )

    return (
        <>
            {/* Project Section */}
            <section
                id="project"
                className="w-full h-auto flex flex-col lg:flex-row lg:justify-between gap-8 lg:gap-10 py-6 mb-14 px-6 lg:px-20"
            >
                {/* Left Content */}
                <div className="w-full lg:w-3/12 shrink-0 flex flex-col gap-1">
                    {/* Heading Project */}
                    <h2
                        className={`text-xl lg:text-2xl font-medium text-start ${inter.className}`}
                    >
                        Projects
                    </h2>
                    {/* End Heading Project */}
                    {/* Desc Project */}
                    <span
                        className={`text-xs lg:text-sm font-medium text-stone-500 ${mona.className}`}
                    >
                        Explore the projects I've worked on, showcasing my
                        expertise across various technologies and frameworks.
                    </span>
                    {/* End Desc Project */}
                </div>
                {/* End Left Content */}
                {/* Right Content */}
                <div className="w-full lg:w-10/12 flex h-auto flex-col gap-16 lg:gap-24">
                    <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-x-6 lg:gap-y-14 place-items-start">
                        {highlightedProjects.map((project: Project) => (
                            <ProjectContainer
                                key={project.id}
                                project={project}
                            />
                        ))}
                    </div>
                    <div className="flex w-full gap-4 lg:gap-4 flex-col">
                        <div className="w-full items-center flex gap-2.5">
                            <span className="font-medium">Other Projects</span>
                            <div className="font-medium bg-stone-200 px-3 py-0.5 text-xs rounded-full grid place-items-center">
                                {otherProjects.length}
                            </div>
                        </div>
                        <div className="flex flex-col w-full">
                            {otherProjects.map((project: Project) => (
                                <div
                                    key={project.id}
                                    className="w-full flex gap-4 text-stone-600 border-b last:border-0 pb-4 last:pb-0 lg:last:pb-3 last:pt-4 lg:last:pt-3"
                                >
                                    <span className="text-sm font-medium w-4/12 lg:w-2/12 shrink-0 lg:shrink-none">
                                        {project.name}
                                    </span>
                                    <div className="w-8/12 lg:w-10/12 flex flex-col lg:flex-row gap-1 lg:gap-2  lg:justify-between">
                                        <span className="text-sm font-medium w-full lg:w-6/12">
                                            {project.desc}
                                        </span>
                                        <div className="w-full lg:w-3/12 items-start">
                                            {project.techStack.map(
                                                (item, index) => (
                                                    <div key={index}>
                                                        <span
                                                            key={index}
                                                            className="text-xs lg:text-sm font-medium text-stone-400"
                                                        >
                                                            {item}
                                                        </span>
                                                        <span
                                                            key={index}
                                                            className="last:hidden text-xs lg:text-sm font-medium text-stone-400"
                                                        >
                                                            ,{' '}
                                                        </span>
                                                    </div>
                                                )
                                            )}
                                        </div>
                                        <span className="w-fit inline-block text-xs lg:text-sm font-medium text-stone-400">
                                            {project.year}
                                        </span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                {/* End Right Content */}
            </section>
            {/* End Project Section */}
        </>
    )
}
