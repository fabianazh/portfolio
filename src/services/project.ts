import { projects } from '@/constants/model'

const projectServices = {
    getAllProjects: (): Project[] => projects,
    getProjectDetail: (projectId: string): Project | undefined =>
        projects.find((project: Project) => project.id === projectId),
}

export default projectServices
