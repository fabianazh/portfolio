import Hero from '@/components/Section/Home/Hero'
import Projects from '@/components/Section/Home/Projects'
import About from '@/components/Section/Home/About'
import Skill from '@/components/Section/Home/Skill'
import Contact from '@/components/Section/Home/Contact'
import Service from '@/components/Section/Home/Service'

export default function HomePage() {
    return (
        <>
            <Hero />
            <Projects />
            <About />
            <Skill />
            <Service />
            <Contact />
        </>
    )
}
