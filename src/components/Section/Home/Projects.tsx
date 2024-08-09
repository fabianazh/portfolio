import { inter, mona } from '@/app/fonts'
import ProjectContainer from '@/components/Container/ProjectContainer'
import { projects } from '@/constants/model'

export default function Projects() {
    return (
        <>
            {/* Project Section */}
            <section
                id="project"
                className="w-full h-auto flex flex-col lg:flex-row lg:justify-between gap-8 lg:gap-10 py-16 mb-14 px-6 lg:px-20"
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
                <div className="w-full lg:w-10/12 flex h-auto flex-col gap-6">
                    <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 place-items-start">
                        {projects.map((project: Project) => (
                            <ProjectContainer key={project.id}>
                                {/* Image Container */}
                                <ProjectContainer.Thumbnail
                                    imgPath={`/img/project/${project.src}`}
                                    title={project.subname}
                                    techStack={project.techStack}
                                />
                                {/* End Image Container */}

                                {/* Description Container */}
                                <ProjectContainer.Description
                                    title={project.name}
                                    year={project.year}
                                    desc={project.desc}
                                    projectLink={project.projectLink}
                                    githubLink={project.githubLink}
                                    techStack={project.techStack}
                                />
                                {/* End Description Container */}
                            </ProjectContainer>
                        ))}
                    </div>
                </div>
                {/* End Right Content */}
            </section>
            {/* End Project Section */}
        </>
    )
}
