import ProjectContainer from '@/components/Other/ProjectContainer'

export default function Projects() {
    const projects = [
        {
            id: 1,
            name: 'Bind',
            subname: 'Bind - Connecting You with the World',
            img: 'bind.png',
            desc: "A social media platform designed to bring people closer together. Bind offers a seamless and engaging experience for users to connect, share, and interact. Whether you're sharing updates, photos, or engaging with friends, Bind is here to keep you connected",
            className: 'w-10/12',
            descClassName: 'pb-10 gap-1',
            thumbnailClassName: 'w-[30rem]',
            techStack: ['Next JS', 'Tailwind CSS', 'Laravel'],
            projectLink: 'https://bind-app-demo.vercel.app',
            githubLink: 'https://github.com/BimaPn/bind-server',
        },
        {
            id: 2,
            name: 'Jitu!',
            subname: 'Jitu! - Menuju Keunggulan, Dengan Kedisiplinan!',
            img: 'jitu.png',
            desc: 'Introducing Jitu!, a simple system to help schools track and manage student violations. With Jitu!, school staff can easily record and view student violations. The system keeps all the data organized and secure, making it easy to maintain school discipline',
            className: 'flex-row-reverse w-11/12 place-self-end',
            descClassName: 'pb-10 gap-1',
            thumbnailClassName: 'w-[29rem]',
            techStack: ['Laravel', 'React JS', 'Tailwind CSS'],
            projectLink: '#',
            githubLink: 'https://github.com/fabianazh/jitu',
        },
        {
            id: 3,
            name: 'QuranKu',
            subname: 'QuranKu - Your Portable Portal to the Quranverse',
            img: 'quranku.png',
            desc: 'QuranKu is a modern and accessible Quran web application designed to provide users with a seamless reading experience anywhere, anytime. Whether users are at home, traveling, or on the move, QuranKu ensures that the beauty and wisdom of the Quran are just a click away',
            className: 'flex-row w-9/12',
            descClassName: 'pb-10 gap-1',
            thumbnailClassName: 'w-[30rem]',
            techStack: ['Next JS', 'Tailwind CSS', 'Chakra UI'],
            projectLink: 'https://quranku-one.vercel.app',
            githubLink: 'https://github.com/fabianazh/quranku',
        },
        {
            id: 4,
            name: 'TicTacTest',
            subname: 'TicTacTest - Your Classic Tic Tac Toe Playground!',
            img: 'tictactest.png',
            desc: 'TicTacTest is your go-to destination for a classic game of Tic Tac Toe in its purest form. While it may be simple in design, its charm lies in its simplicity. Challenge your friends to a match or engage in solo play as you hone your skills',
            className: 'flex-row w-9/12 place-self-end',
            descClassName: 'pb-10 gap-1',
            thumbnailClassName: 'w-[29rem]',
            techStack: ['React JS', 'Tailwind CSS', 'Chakra UI'],
            projectLink: 'https://fabianazh.github.io/tic-tac-test',
            githubLink: 'https://github.com/fabianazh/tic-tac-test',
        },
        {
            id: 5,
            name: 'Starbucks Clone',
            subname: 'Starbucks - Coffee that inspires',
            img: 'starbucks.png',
            desc: 'Welcome to Starbucks Landing, your online gateway to the world of Starbucks. This meticulously crafted landing page clone faithfully mirrors the aesthetic and essence of the iconic coffeehouse chain',
            className: 'flex-row-reverse w-9/12 place-self-start',
            descClassName: 'pb-10 gap-1',
            thumbnailClassName: 'w-[29rem]',
            techStack: ['React JS', 'Tailwind CSS'],
            projectLink: 'https://fabianazh.github.io/starbucks-clone',
            githubLink: 'https://github.com/fabianazh/starbucks-clone',
        },
    ]

    return (
        <>
            {/* Projet Section */}
            <section
                id="projects"
                className="w-full bg-white hidden lg:flex flex-col gap-10 py-14 px-16 h-full"
            >
                {/* Heading Projects */}
                <h2 className="text-4xl font-medium text-start w-full">
                    Featured{' '}
                    <span className="inine-block bg-black text-white animate-spin px-1 hover:animate-spin">
                        Projects
                    </span>
                </h2>
                {/* End Heading Projects */}
                {/* Projects Content */}
                <div className="w-full h-auto flex flex-col gap-20">
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
                                imgPath={`/assets/img/project/${project.img}`}
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
