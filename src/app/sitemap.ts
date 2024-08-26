import { projects } from '@/constants/model'

export default async function sitemap() {
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL

    const projectsData = projects.map((project: Project) => {
        return {
            url: `${baseUrl}/${project.id}`,
            lastModified: project.created_at,
        }
    })

    return [
        {
            url: baseUrl,
            lastModified: new Date(),
        },
        ...projectsData,
    ]
}
