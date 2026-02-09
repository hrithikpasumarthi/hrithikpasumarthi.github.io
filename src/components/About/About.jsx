import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaBriefcase, FaGraduationCap, FaChevronDown, FaChevronUp } from 'react-icons/fa'
import { EXPERIENCES, EDUCATION, INTRO_DATA } from '../../constants'
import styles from './About.module.css'

const About = () => {
    // Accordion State for Experience (if multiple)
    const [openIndex, setOpenIndex] = useState(0)

    const toggleAccordion = (index) => {
        setOpenIndex(openIndex === index ? -1 : index)
    }

    return (
        <section id="about" className={styles.aboutSection}>
            <motion.h2
                className="section-heading"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
            >
                About Me
            </motion.h2>

            {/* Introduction */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className={styles.intro}
            >
                <p>
                    Hello! My name is <span className={styles.highlightText}>{INTRO_DATA.name}</span>. {INTRO_DATA.title} {INTRO_DATA.description}
                </p>
            </motion.div>

            <div className={styles.gridContainer}>

                {/* Column 1: Work Experience */}
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                >
                    <h3 className={styles.columnTitle}>
                        <FaBriefcase className={styles.columnTitleIcon} /> Experience
                    </h3>

                    {EXPERIENCES.length === 1 ? (
                        // Single Experience Card View
                        <div className={styles.experienceCard}>
                            <div className={styles.jobHeader}>
                                <div>
                                    <div className={styles.role}>{EXPERIENCES[0].title}</div>
                                    <div className={styles.companyRow}>
                                        <div className={styles.company}>{EXPERIENCES[0].company}</div>
                                        <div className={styles.duration}>{EXPERIENCES[0].range}</div>
                                    </div>
                                </div>
                            </div>
                            <ul className={styles.dutyList}>
                                {EXPERIENCES[0].duties.map((duty, i) => (
                                    <li key={i} className={styles.dutyItem}>{duty}</li>
                                ))}
                            </ul>
                        </div>
                    ) : (
                        // Accordion View for Multiple Experiences
                        <div className={styles.accordionContainer}>
                            {EXPERIENCES.map((exp, index) => (
                                <div key={index} className={styles.accordionItem}>
                                    <button
                                        className={`${styles.accordionHeader} ${openIndex === index ? styles.accordionHeaderActive : ''}`}
                                        onClick={() => toggleAccordion(index)}
                                    >
                                        <div>
                                            <div className={styles.companyName}>{exp.company}</div>
                                            <div className={styles.companyYear}>{exp.range}</div>
                                        </div>
                                        {openIndex === index ? <FaChevronUp /> : <FaChevronDown />}
                                    </button>
                                    <AnimatePresence>
                                        {openIndex === index && (
                                            <motion.div
                                                initial={{ height: 0, opacity: 0 }}
                                                animate={{ height: 'auto', opacity: 1 }}
                                                exit={{ height: 0, opacity: 0 }}
                                                style={{ overflow: 'hidden' }}
                                            >
                                                <div className={styles.accordionContent}>
                                                    <div className={styles.role} style={{ fontSize: '1rem', marginBottom: '0.5rem' }}>{exp.title}</div>
                                                    <ul className={styles.dutyList}>
                                                        {exp.duties.map((duty, i) => (
                                                            <li key={i} className={styles.dutyItem}>{duty}</li>
                                                        ))}
                                                    </ul>
                                                </div>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>
                            ))}
                        </div>
                    )}
                </motion.div>

                {/* Column 2: Education */}
                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                >
                    <h3 className={styles.columnTitle}>
                        <FaGraduationCap className={styles.columnTitleIcon} /> Education
                    </h3>

                    {EDUCATION.map((edu, index) => (
                        <div key={index} className={styles.educationCard}>
                            <div className={styles.eduIcon}><FaGraduationCap /></div>
                            <div className={styles.eduContent}>
                                <div className={styles.degree}>{edu.degree}</div>
                                <div className={styles.institution}>{edu.institution}</div>
                                <div className={styles.eduFooter}>
                                    <div className={styles.eduYear}>{edu.year}</div>
                                    {edu.cgpa && <div className={styles.cgpa}>CGPA: {edu.cgpa}</div>}
                                </div>
                            </div>
                        </div>
                    ))}
                </motion.div>

            </div>
        </section>
    )
}

export default About
