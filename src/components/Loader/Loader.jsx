import { motion } from 'framer-motion'
import styles from './Loader.module.css'

const Loader = () => {
    return (
        <div className={styles.container}>
            <motion.div
                animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.5, 1, 0.5]
                }}
                transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
                className={styles.spinner}
            />
        </div>
    )
}

export default Loader
