import { motion } from 'framer-motion'
import { FaLinkedin, FaGithub } from 'react-icons/fa'
import { BiLogoGmail } from "react-icons/bi";
import { CONTACT_DATA } from '../../constants'
import styles from './Contact.module.css'

const Contact = () => {
    return (
        <section id="contact" className={styles.sectionContainer}>
            <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className={styles.mainHeader}
            >
                {CONTACT_DATA.title}
            </motion.h2>

            <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className={styles.description}
            >
                {CONTACT_DATA.description}
            </motion.p>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className={styles.actions}
            >


                <div className={styles.socialIcons}>
                    <a
                        href={`mailto:${CONTACT_DATA.email}`}
                        target='_blank'
                        rel="noopener noreferrer"
                        className={styles.socialIcon}
                    >
                        <BiLogoGmail />
                    </a>
                    <a href={CONTACT_DATA.linkedin} target="_blank" rel="noopener noreferrer" className={styles.socialIcon}><FaLinkedin /></a>
                    <a href={CONTACT_DATA.github} target="_blank" rel="noopener noreferrer" className={styles.socialIcon}><FaGithub /></a>
                </div>
            </motion.div>
        </section>
    )
}

export default Contact
