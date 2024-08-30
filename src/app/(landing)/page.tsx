import projectServices from '@/services/project'
import Home from '@/components/Page/Home'

export async function generateMetadata() {
    try {
        const projects: Project[] | null =
            await projectServices.getAllProjects()

        if (projects === null || projects.length < 1) {
            return {
                title: 'Fabian Azhar',
                description:
                    'Welcome to my professional portfolio! I am Fabian Azhar, a passionate Full Stack Web Developer with a strong background in software engineering. I specialize in both front-end and back-end development, crafting seamless and interactive web applications. My expertise includes modern frameworks and technologies, ensuring efficient and robust solutions. Explore my projects, designs, and problem-solving approaches that showcase my dedication to delivering high-quality digital experiences.',
                images: [],
            }
        }
        return {
            title: 'Fabian Azhar',
            description:
                'Welcome to my professional portfolio! I am Fabian Azhar, a passionate Full Stack Web Developer with a strong background in software engineering. I specialize in both front-end and back-end development, crafting seamless and interactive web applications. My expertise includes modern frameworks and technologies, ensuring efficient and robust solutions. Explore my projects, designs, and problem-solving approaches that showcase my dedication to delivering high-quality digital experiences.',
            images: projects?.flatMap((project: Project) => [
                project?.thumbnail,
                ...(project?.photos ?? []),
            ]),
        }
    } catch (error) {
        return {
            title: 'Fabian Azhar',
            description:
                'Welcome to my professional portfolio! I am Fabian Azhar, a passionate Full Stack Web Developer with a strong background in software engineering. I specialize in both front-end and back-end development, crafting seamless and interactive web applications. My expertise includes modern frameworks and technologies, ensuring efficient and robust solutions. Explore my projects, designs, and problem-solving approaches that showcase my dedication to delivering high-quality digital experiences.',
            images: [],
        }
    }
}

export default function HomePage() {
    return (
        <>
            <Home />
        </>
    )
}
