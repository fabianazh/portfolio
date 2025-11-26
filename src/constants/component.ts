export const navItems = [
    {
        link: 'home',
        text: { en: 'Home', id: 'Beranda' },
    },
    {
        link: 'projects',
        text: { en: 'Projects', id: 'Projek' },
    },
    {
        link: 'about',
        text: { en: 'About', id: 'Tentang' },
    },
    {
        link: 'skill',
        text: { en: 'Skill', id: 'Keahlian' },
    },
    {
        link: 'services',
        text: { en: 'Services', id: 'Layanan' },
    },
    {
        link: 'contact',
        text: { en: 'Contact', id: 'Kontak' },
    },
]

// export async function getRandomSquareImg(): Promise<SquareImg> {
//     const randomIndex = Math.floor(Math.random() * squareImg.length)
//     return squareImg[randomIndex]
// }

export const skills = [
    {
        title: {
            en: 'Frontend Development',
            id: 'Frontend Development',
        },
        stacks: [
            {
                name: 'HTML',
                src: 'HTML',
                url: 'https://developer.mozilla.org/en-US/docs/Web/HTML',
            },
            {
                name: 'CSS',
                src: 'CSS',
                url: 'https://developer.mozilla.org/en-US/docs/Web/CSS',
            },
            {
                name: 'Tailwind CSS',
                src: 'Tailwind',
                url: 'https://tailwindcss.com/',
            },
            {
                name: 'Bootstrap',
                src: 'Bootstrap',
                url: 'https://getbootstrap.com/',
            },
            {
                name: 'JavaScript',
                src: 'JS',
                url: 'https://www.javascript.com/',
            },
            {
                name: 'TypeScript',
                src: 'TS',
                url: 'https://www.typescriptlang.org/',
            },
            {
                name: 'React',
                src: 'React',
                url: 'https://reactjs.org/',
            },
            {
                name: 'Next JS',
                src: 'NextJS',
                url: 'https://nextjs.org/',
            },
            {
                name: 'Framer Motion',
                src: 'FramerMotion',
                url: 'https://www.framer.com/motion/',
            },
        ],
    },
    {
        title: {
            en: 'Backend Development',
            id: 'Backend Development',
        },
        stacks: [
            {
                name: 'Node JS',
                src: 'NodeJS',
                url: 'https://nodejs.org/',
            },
            {
                name: 'Express JS',
                src: 'ExpressJS',
                url: 'https://expressjs.com/',
            },
            {
                name: 'PHP',
                src: 'PHP',
                url: 'https://www.php.net/',
            },
            {
                name: 'Laravel',
                src: 'Laravel',
                url: 'https://laravel.com/',
            },
            {
                name: 'Mongo DB',
                src: 'MongoDB',
                url: 'https://www.mongodb.com/',
            },
            {
                name: 'PostgreSQL',
                src: 'PostgreSQL',
                url: 'https://www.postgresql.org/',
            },
            {
                name: 'Firebase',
                src: 'Firebase',
                url: 'https://firebase.google.com/',
            },
            {
                name: 'MySQL',
                src: 'MySQL',
                url: 'https://www.mysql.com/',
            },
        ],
    },
    {
        title: {
            en: 'Additional Proficiencies',
            id: 'Keahlian Tambahan',
        },
        stacks: [
            {
                name: 'Git',
                src: 'Git',
                url: 'https://git-scm.com/',
            },
            {
                name: 'Figma',
                src: 'Figma',
                url: 'https://www.figma.com/',
            },
            {
                name: 'Photoshop',
                src: 'Ps',
                url: 'https://www.adobe.com/products/photoshop.html',
            },
        ],
    },
]

export const services = [
    {
        title: {
            en: 'UI/UX Design',
            id: 'Desain UI/UX',
        },
        desc: {
            en: 'UI/UX Design creates visually appealing, user-friendly interfaces to enhance user experience.',
            id: 'Desain UI/UX menciptakan antarmuka yang menarik secara visual dan ramah pengguna untuk meningkatkan pengalaman pengguna.',
        },
        projects: {
            en: [
                'Wireframing and Prototyping',
                'User Flow and Journey Mapping',
                'High-Fidelity UI Mockups',
                'Mobile App Design',
                'Responsive Web Design',
            ],
            id: [
                'Wireframing dan Prototyping',
                'Pemetaan Alur dan Perjalanan Pengguna',
                'Mockup UI High-Fidelity',
                'Desain Aplikasi Mobile',
                'Desain Web Responsif',
            ],
        },
        href: {
            en: 'mailto:fabianazharr@gmail.com?subject=UI/UX%20Design%20Project%20Request&body=Hello%20Muhammad%20Fabian%20Azhar,%0D%0A%0D%0AI%20am%20interested%20in%20discussing%20a%20UI/UX%20design%20project%20with%20you.%20Please%20let%20me%20know%20a%20convenient%20time%20to%20talk%20further.%0D%0A%0D%0AThank%20you!%0D%0A%0D%0ABest%20regards,%0D%0A%5BYour%20Name%5D',
            id: 'mailto:fabianazharr@gmail.com?subject=UI/UX%20Design%20Project%20Request&body=Hello%20Muhammad%20Fabian%20Azhar,%0D%0A%0D%0AI%20am%20interested%20in%20discussing%20a%20UI/UX%20design%20project%20with%20you.%20Please%20let%20me%20know%20a%20convenient%20time%20to%20talk%20further.%0D%0A%0D%0AThank%20you!%0D%0A%0D%0ABest%20regards,%0D%0A%5BYour%20Name%5D',
        },
    },
    {
        title: {
            en: 'Frontend Development',
            id: 'Frontend Development',
        },
        desc: {
            en: 'Frontend development deals with the visual and interactive parts of a website using HTML, CSS, and JavaScript.',
            id: 'Pengembangan frontend menangani bagian visual dan interaktif dari sebuah situs web menggunakan HTML, CSS, dan JavaScript.',
        },
        projects: {
            en: [
                'Landing Page Development',
                'Single Page Applications (SPA)',
                'Responsive Web Design',
                'Custom Animations',
                'Web Performance Optimization',
            ],
            id: [
                'Pengembangan Halaman Landing',
                'Aplikasi Halaman Tunggal (SPA)',
                'Desain Web Responsif',
                'Animasi Kustom',
                'Optimisasi Performa Web',
            ],
        },
        href: {
            en: 'mailto:fabianazharr@gmail.com?subject=Frontend%20Development%20Project%20Request&body=Hello%20Muhammad%20Fabian%20Azhar,%0D%0A%0D%0AI%20am%20interested%20in%20discussing%20a%20frontend%20development%20project%20with%20you.%20Please%20let%20me%20know%20a%20convenient%20time%20to%20talk%20further.%0D%0A%0D%0AThank%20you!%0D%0A%0D%0ABest%20regards,%0D%0A%5BYour%20Name%5D',
            id: 'mailto:fabianazharr@gmail.com?subject=Frontend%20Development%20Project%20Request&body=Hello%20Muhammad%20Fabian%20Azhar,%0D%0A%0D%0AI%20am%20interested%20in%20discussing%20a%20frontend%20development%20project%20with%20you.%20Please%20let%20me%20know%20a%20convenient%20time%20to%20talk%20further.%0D%0A%0D%0AThank%20you!%0D%0A%0D%0ABest%20regards,%0D%0A%5BYour%20Name%5D',
        },
    },
    {
        title: {
            en: 'Backend Development',
            id: 'Backend Development',
        },
        desc: {
            en: 'Backend development manages server-side logic, databases, and APIs behind the scenes.',
            id: 'Pengembangan backend mengelola logika sisi server, basis data, dan API di balik layar.',
        },
        projects: {
            en: [
                'API Development and Integration',
                'Database Design and Management',
                'User Authentication Systems',
                'Server-Side Logic Implementation',
                'Third-Party Service Integration',
            ],
            id: [
                'Pengembangan dan Integrasi API',
                'Desain dan Manajemen Basis Data',
                'Sistem Otentikasi Pengguna',
                'Implementasi Logika Sisi Server',
                'Integrasi Layanan Pihak Ketiga',
            ],
        },
        href: {
            en: 'mailto:fabianazharr@gmail.com?subject=Backend%20Development%20Project%20Request&body=Hello%20Muhammad%20Fabian%20Azhar,%0D%0A%0D%0AI%20am%20interested%20in%20discussing%20a%20backend%20development%20project%20with%20you.%20Please%20let%20me%20know%20a%20convenient%20time%20to%20talk%20further.%0D%0A%0D%0AThank%20you!%0D%0A%0D%0ABest%20regards,%0D%0A%5BYour%20Name%5D',
            id: 'mailto:fabianazharr@gmail.com?subject=Backend%20Development%20Project%20Request&body=Hello%20Muhammad%20Fabian%20Azhar,%0D%0A%0D%0AI%20am%20interested%20in%20discussing%20a%20backend%20development%20project%20with%20you.%20Please%20let%20me%20know%20a%20convenient%20time%20to%20talk%20further.%0D%0A%0D%0AThank%20you!%0D%0A%0D%0ABest%20regards,%0D%0A%5BYour%20Name%5D',
        },
    },
    {
        title: {
            en: 'Full Stack Development',
            id: 'Full Stack Development',
        },
        desc: {
            en: 'Full stack development covers both frontend and backend, delivering complete web solutions.',
            id: 'Pengembangan full stack mencakup frontend dan backend, memberikan solusi web lengkap.',
        },
        projects: {
            en: [
                'End-to-End Web Application Development',
                'E-commerce Platform Development',
                'Content Management System (CMS) Implementation',
                'RESTful API Development',
                'Full-Stack Web Application Maintenance',
            ],
            id: [
                'Pengembangan Aplikasi Web End-to-End',
                'Pengembangan Platform E-commerce',
                'Implementasi Sistem Manajemen Konten (CMS)',
                'Pengembangan API RESTful',
                'Pemeliharaan Aplikasi Web Full-Stack',
            ],
        },
        href: {
            en: 'mailto:fabianazharr@gmail.com?subject=Full-Stack%20Development%20Project%20Request&body=Hello%20Muhammad%20Fabian%20Azhar,%0D%0A%0D%0AI%20am%20interested%20in%20discussing%20a%20full-stack%20development%20project%20with%20you.%20Please%20let%20me%20know%20a%20convenient%20time%20to%20talk%20further.%0D%0A%0D%0AThank%20you!%0D%0A%0D%0ABest%20regards,%0D%0A%5BYour%20Name%5D',
            id: 'mailto:fabianazharr@gmail.com?subject=Full-Stack%20Development%20Project%20Request&body=Hello%20Muhammad%20Fabian%20Azhar,%0D%0A%0D%0AI%20am%20interested%20in%20discussing%20a%20full-stack%20development%20project%20with%20you.%20Please%20let%20me%20know%20a%20convenient%20time%20to%20talk%20further.%0D%0A%0D%0AThank%20you!%0D%0A%0D%0ABest%20regards,%0D%0A%5BYour%20Name%5D',
        },
    },
]

export const enquires = [
    {
        name: 'Muhammad Fabian Azhar',
    },
    {
        name: 'West Java, Indonesia.',
    },
    {
        name: 'fabianazharr@gmail.com',
    },
]

export const contacts = [
    {
        name: 'Instagram',
        link: 'https://instagram.com/fabianazhrr',
    },
    {
        name: 'Facebook',
        link: 'https://www.facebook.com/profile.php?id=61560075789729',
    },
    {
        name: 'Github',
        link: 'https://github.com/fabianazh',
    },
    {
        name: 'Linked In',
        link: 'https://linkedin/fabianazh',
    },
]
