export const navItems = [
    {
        link: 'home',
        text: 'Home',
        samePage: true,
    },
    {
        link: 'about',
        text: 'About',
        samePage: true,
    },
    {
        link: 'skill',
        text: 'Skill',
        samePage: true,
    },
    {
        link: '/projects',
        text: 'Projects',
        samePage: false,
    },
    {
        link: 'contact',
        text: 'Contact',
        samePage: true,
    },
]

export const squareImg = [
    {
        name: 'Borobudur.jpeg',
        location: 'Borobudur, Central Java',
        className: '',
    },
    {
        name: 'KarangTengahBeach.jpeg',
        location: 'Karang Tengah Beach, Banten',
        className: '',
    },
    {
        name: 'BreksiCliff.jpeg',
        location: 'Breksi Cliff, Yogyakarta',
        className: '',
    },
    {
        name: 'Palembang.jpeg',
        location: 'Palembang, South Sumatra',
        className: '',
    },
    {
        name: 'CurugSawer.jpeg',
        location: ' Sukabumi, West Java',
        className: 'grayscale',
    },
]

// export async function getRandomSquareImg(): Promise<SquareImg> {
//     const randomIndex = Math.floor(Math.random() * squareImg.length)
//     return squareImg[randomIndex]
// }
