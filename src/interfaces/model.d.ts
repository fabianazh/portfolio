interface FormData {
    name: string
    email: string
    message: string
}

interface SquareImg {
    name: string
    location: string
    className: string
}

interface Project {
    id: string
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
}
