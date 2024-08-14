/* eslint-disable react-hooks/rules-of-hooks */
import React, { useEffect, useRef } from 'react'
import { useFrame, useThree } from '@react-three/fiber'
import { motion } from 'framer-motion-3d'
import { animate, useMotionValue, useTransform } from 'framer-motion'
import { vertex, fragment } from '@/constants/props'
import { useTexture, useAspect } from '@react-three/drei'
import useMouse from '@/hooks/useMouse'
import useDimension from '@/hooks/useDimension'

export default function Model({
    activeProject,
    projects,
}: {
    activeProject: number | null
    projects: Project[] | []
}) {
    const plane = useRef<any>()
    const { viewport } = useThree()
    const dimension = useDimension()
    const mouse = useMouse()
    const opacity = useMotionValue(0)
    const textures = projects.map((project: Project) =>
        useTexture(project.thumbnail)
    )
    const { width, height } = textures[0].image
    const lerp = (x: number, y: number, a: number) => x * (1 - a) + y * a

    const scale = useAspect(width, height, 0.225)
    const smoothMouse = {
        x: useMotionValue(0),
        y: useMotionValue(0),
    }

    useEffect(() => {
        if (activeProject != null) {
            plane.current.material.uniforms.uTexture.value =
                textures[activeProject]
            animate(opacity, 1, {
                duration: 0.2,
                onUpdate: (latest) =>
                    (plane.current.material.uniforms.uAlpha.value = latest),
            })
        } else {
            animate(opacity, 0, {
                duration: 0.2,
                onUpdate: (latest) =>
                    (plane.current.material.uniforms.uAlpha.value = latest),
            })
        }
    }, [activeProject])

    const uniforms = useRef({
        uDelta: { value: { x: 0, y: 0 } },
        uAmplitude: { value: 0.0005 },
        uTexture: { value: textures[0] },
        uAlpha: { value: 0 },
    })

    useFrame(() => {
        const { x: mouseX, y: mouseY } = mouse
        const smoothX = smoothMouse.x.get()
        const smoothY = smoothMouse.y.get()
        const xVal = mouseX.get()
        const yVal = mouseY.get()

        smoothMouse.x.set(lerp(smoothX, xVal, 0.1))
        smoothMouse.y.set(lerp(smoothY, yVal, 0.1))

        const material = plane?.current?.material as any
        if (plane?.current && material) {
            material.uniforms.uDelta.value = {
                x: xVal - smoothX,
                y: -1 * (yVal - smoothY),
            }
        }
    })

    const x = useTransform(
        smoothMouse.x,
        [0, dimension.width],
        [(-1 * viewport.width) / 2, viewport.width / 2]
    )
    const y = useTransform(
        smoothMouse.y,
        [0, dimension.height],
        [viewport.height / 2, (-1 * viewport.height) / 2]
    )

    return (
        <motion.mesh position-x={x} position-y={y} ref={plane} scale={scale}>
            <planeGeometry args={[1, 1, 15, 15]} />
            {/* <meshBasicMaterial wireframe={true} color="red"/> */}
            <shaderMaterial
                vertexShader={vertex}
                fragmentShader={fragment}
                uniforms={uniforms.current}
                transparent
            />
        </motion.mesh>
    )
}
