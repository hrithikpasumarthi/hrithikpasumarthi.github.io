import { motion } from 'framer-motion'
import { Link } from 'react-scroll'
import styles from './Hero.module.css'

const Hero = () => {
    return (
        <section id="hero" className={styles.heroSection}>
            <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1, duration: 0.5 }}
                className={styles.intro}
            >
                Hi, my name is
            </motion.p>

            <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className={styles.name}
            >
                Hrithik.
            </motion.h1>

            <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.5 }}
                className={styles.tagline}
            >
                I build things for the web.
            </motion.h2>

            <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.5 }}
                className={styles.description}
            >
                I am a software engineer specializing in building (and occasionally designing) exceptional digital experiences. Currently, I’m focused on building accessible, human-centered products at <span style={{ color: 'var(--primary-color)' }}>Infosys</span>.
            </motion.p>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.5 }}
            >
                <Link
                    to="projects"
                    smooth={true}
                    duration={500}
                    className={styles.ctaButton}
                >
                    Check out my work!
                </Link>
            </motion.div>
        </section>
    )
}

export default Hero
