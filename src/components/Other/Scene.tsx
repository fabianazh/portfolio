'use client'

import { Canvas } from '@react-three/fiber'
import Model from '@/components/Other/Model'

export default function Scene({
    activeProject,
    projects,
}: {
    activeProject: number | null
    projects: Project[] | []
}) {
    return (
        <>
            <div className="fixed left-0 top-0 h-screen w-full">
                <Canvas>
                    <Model activeProject={activeProject} projects={projects} />
                </Canvas>
            </div>
        </>
    )
}
