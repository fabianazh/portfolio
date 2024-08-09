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
    year: string
    src: string
    techStack: string[]
    githubLink: string
    projectLink: string
    isHighlighted: boolean
}
