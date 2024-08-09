import Hero from '@/components/Section/Home/Hero'
import About from '@/components/Section/Home/About'
import Projects from '@/components/Section/Home/Projects'
import Skill from '@/components/Section/Home/Skill'
import Contact from '@/components/Section/Home/Contact'

export default function Home() {
    return (
        <>
            <Hero />
            <Projects />
            <Skill />
            <Contact />
        </>
    )
}
