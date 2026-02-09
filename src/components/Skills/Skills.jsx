import { motion } from 'framer-motion'
import { SKILLS_DATA } from '../../constants'
import styles from './Skills.module.css'

const Skills = () => {
    return (
        <section id="skills" className={styles.sectionContainer}>
            <motion.h2
                className="section-heading"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
            >
                Technical Skills
            </motion.h2>

            <div className={styles.grid}>
                {SKILLS_DATA.map((skillGroup, index) => (
                    <motion.div
                        key={skillGroup.category}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        className={styles.skillCard}
                    >
                        <h3 className={styles.categoryTitle}>
                            {skillGroup.category}
                        </h3>
                        <ul className={styles.skillList}>
                            {skillGroup.items.map(item => (
                                <li key={item} className={styles.skillItem}>
                                    <span className={styles.bullet}>▹</span> {item}
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                ))}
            </div>
        </section>
    )
}

export default Skills
