interface SquareImg {
    name: string
    location: string
    className: string
}

interface Project {
    id: string
    index: number
    name: string
    subname: string
    desc: string
    shortDesc: string
    year: string
    thumbnail: string
    role: string
    client: string
    tools: string[]
    collaborators: string[]
    githubLink: string
    projectLink: string
    isHighlighted: boolean
    photos: string[]
    created_at: string
    keywords: string[]
}

interface Skill {
    name: string
    src: string
    url: string
}

interface Service {
    title: string
    desc: string
    href: string
    projects: string[]
}
