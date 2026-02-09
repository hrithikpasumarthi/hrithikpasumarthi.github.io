import { motion } from 'framer-motion'
import { FaCertificate } from 'react-icons/fa'
import { CERTIFICATIONS } from '../../constants'
import styles from './Certifications.module.css'

const Certifications = () => {
    return (
        <section id="certifications" className={styles.sectionContainer}>
            <motion.h2
                className="section-heading"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
            >
                Certifications
            </motion.h2>

            <div className={styles.grid}>
                {CERTIFICATIONS.map((cert, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.05 }}
                        className={styles.card}
                    >
                        <FaCertificate className={styles.icon} />
                        <span className={styles.name}>{cert}</span>
                    </motion.div>
                ))}
            </div>
        </section>
    )
}

export default Certifications
