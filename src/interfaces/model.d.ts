interface SquareImg {
    name: string
    location: string
    className: string
}

interface Project {
    id: string
    index: number
    name: {
        en: string
        id: string
    }
    subname: {
        en: string
        id: string
    }
    desc: {
        en: string
        id: string
    }
    shortDesc: {
        en: string
        id: string
    }
    year: string
    thumbnail: string
    role: string
    tools: string[]
    collaborators: string[]
    githubLink: string
    projectLink: string
    isHighlighted: boolean
    photos: string[]
    created_at: string
    keywords: string[]
    desktopViewImage: string
    mobileViewImage: string
    tabletViewImage: string
}

interface Skill {
    name: string
    src: string
    url: string
}

interface Service {
    title: {
        en: string
        id: string
    }
    desc: {
        en: string
        id: string
    }
    href: {
        en: string
        id: string
    }
    projects: {
        en: string[]
        id: string[]
    }
}
