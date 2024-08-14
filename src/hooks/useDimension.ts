import { useEffect, useState } from 'react'

export default function useDimension() {
    const [dimension, setDimension] = useState({ width: 0, height: 0 })

    function resize() {
        const { innerWidth, innerHeight } = window
        setDimension({
            width: innerWidth,
            height: innerHeight,
        })
    }

    useEffect(() => {
        resize()

        window.addEventListener('resize', resize)
        return () => window.removeEventListener('resize', resize)
    })

    return dimension
}
