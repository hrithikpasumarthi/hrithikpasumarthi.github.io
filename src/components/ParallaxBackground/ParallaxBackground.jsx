import { motion, useScroll, useTransform } from 'framer-motion'
import { useEffect, useState } from 'react'
import styles from './ParallaxBackground.module.css'

const ParallaxBackground = () => {
    const { scrollY } = useScroll()
    const [windowHeight, setWindowHeight] = useState(0)

    useEffect(() => {
        setWindowHeight(document.body.scrollHeight - window.innerHeight)
    }, [])

    const y1 = useTransform(scrollY, [0, windowHeight], [0, 300])
    const y2 = useTransform(scrollY, [0, windowHeight], [0, -400])
    const y3 = useTransform(scrollY, [0, windowHeight], [0, 150])

    return (
        <div className={styles.container}>
            {/* Subtle Gradient Mesh Base */}
            <div className={styles.gradientMesh}></div>

            {/* Floating Shape 1 - Large Circle */}
            <motion.div
                style={{ y: y1 }}
                className={styles.shape1}
            />

            {/* Floating Shape 2 - Medium Circle (moves upwards) */}
            <motion.div
                style={{ y: y2 }}
                className={styles.shape2}
            />

            {/* Floating Shape 3 - Small Accent */}
            <motion.div
                style={{ y: y3 }}
                className={styles.shape3}
            />

            {/* Grid Pattern Overlay (Tech vibe) */}
            <div className={styles.gridOverlay}></div>

        </div>
    )
}

export default ParallaxBackground
