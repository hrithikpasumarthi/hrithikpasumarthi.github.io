import { useState } from 'react'
import { motion } from 'framer-motion'
import { FaGithub, FaExternalLinkAlt, FaFileAlt, FaMarkdown } from 'react-icons/fa'
import { PROJECTS } from '../../constants'
import styles from './Projects.module.css'

const Projects = () => {
    const [selectedProject, setSelectedProject] = useState(0)

    return (
        <section id="projects" className={styles.projectsContainer}>
            <motion.h2
                className="section-heading"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
            >
                Some Things I've Built
            </motion.h2>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className={styles.vscodeLayout}
            >
                {/* Sidebar - File Explorer */}
                <div className={styles.sidebar}>
                    <div className={styles.sidebarHeader}>
                        EXPLORER
                    </div>
                    <ul className={styles.fileList}>
                        {PROJECTS.map((project, index) => (
                            <li
                                key={index}
                                className={`${styles.fileItem} ${selectedProject === index ? styles.fileItemActive : ''}`}
                                onClick={() => setSelectedProject(index)}
                            >
                                <FaMarkdown className={styles.fileIcon} />
                                {project.title}.md
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Content Area - README Display */}
                <div className={styles.contentArea}>
                    <div className={styles.tabBar}>
                        <div className={styles.tab}>
                            <FaFileAlt className={styles.tabIcon} />
                            {PROJECTS[selectedProject].title}.md
                        </div>
                    </div>

                    <motion.div
                        key={selectedProject}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3 }}
                        className={styles.readmeContent}
                    >
                        <h1># {PROJECTS[selectedProject].title}</h1>

                        <p>{PROJECTS[selectedProject].description}</p>

                        <h2>## Tech Stack</h2>
                        <div className={styles.techBadges}>
                            {PROJECTS[selectedProject].tech.map((tech, i) => (
                                <span key={i} className={styles.techBadge}>
                                    {tech}
                                </span>
                            ))}
                        </div>

                        <div className={styles.projectLinks}>
                            {PROJECTS[selectedProject].links.github && <a
                                href={PROJECTS[selectedProject].links.github}
                                className={styles.projectLink}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <FaGithub /> View Source
                            </a>}
                            {PROJECTS[selectedProject].links.external && <a
                                href={PROJECTS[selectedProject].links.external}
                                className={styles.projectLink}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <FaExternalLinkAlt /> Live Demo
                            </a>}
                        </div>
                    </motion.div>
                </div>
            </motion.div>
        </section>
    )
}

export default Projects
