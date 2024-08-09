import { inter } from '@/app/fonts'
import ProjectContainer from '@/components/Container/ProjectContainer'
import { projects } from '@/constants/model'

export default function Projects() {
    return (
        <>
            {/* Projet Section */}
            <section
                id="projects"
                className="w-full flex flex-col gap-4 lg:gap-10 py-8 lg:py-14 px-6 lg:px-20 h-full"
            >
                {/* Heading Projects */}
                <h2
                    className={`text-xl lg:text-2xl text-left lg:text-start font-medium ${inter.className}`}
                >
                    Projects
                </h2>
                {/* End Heading Projects */}
                {/* Projects Content */}
                <div className="w-full h-auto flex flex-col gap-10 lg:gap-20">
                    {projects.map((project) => (
                        <ProjectContainer
                            className={project.className}
                            key={project.id}
                        >
                            {/* Description Container */}
                            <ProjectContainer.Description
                                title={project.name}
                                desc={project.desc}
                                className={project.descClassName}
                                projectLink={project.projectLink}
                                githubLink={project.githubLink}
                            />
                            {/* End Description Container */}

                            {/* Image Container */}
                            <ProjectContainer.Thumbnail
                                imgPath={`/img/project/${project.img}`}
                                title={project.subname}
                                className={project.thumbnailClassName}
                                techStack={project.techStack}
                            />

                            {/* End Image Container */}
                        </ProjectContainer>
                    ))}
                </div>
                {/* End Projects Content */}
            </section>
            {/* End Projet Section */}
        </>
    )
}
