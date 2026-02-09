import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaInfoCircle } from 'react-icons/fa'
import { ACCOLADES } from '../../constants'
import styles from './Achievements.module.css'

const Achievements = () => {
    return (
        <section id="achievements" className={styles.sectionContainer}>
            <motion.h2
                className="section-heading"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
            >
                Achievements
            </motion.h2>

            <div className={styles.grid}>
                {ACCOLADES.map((item, index) => {
                    const hasMultipleQuarters = item.year.includes(',')
                    const [showTooltip, setShowTooltip] = useState(false)
                    const [tooltipDirection, setTooltipDirection] = useState('top')

                    return (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className={styles.card}
                            style={{ borderTop: `3px solid ${item.color}` }}
                        >
                            <div className={styles.content}>
                                <div className={styles.meta}>
                                    <span className={styles.type}>
                                        {item.type}
                                    </span>
                                    <div className={styles.yearWrapper}>
                                        <span className={styles.year}>
                                            {!hasMultipleQuarters ? item.year : null}
                                        </span>
                                        {hasMultipleQuarters && (
                                            <div className={styles.infoIconWrapper}>
                                                <FaInfoCircle
                                                    className={styles.infoIcon}
                                                    onClick={(e) => {
                                                        const rect = e.currentTarget.getBoundingClientRect();
                                                        const spaceAbove = rect.top;
                                                        const spaceBelow = window.innerHeight - rect.bottom;
                                                        const preferredDirection = spaceAbove > spaceBelow ? 'top' : 'bottom';

                                                        // Toggle and set direction
                                                        if (showTooltip) {
                                                            setShowTooltip(false);
                                                        } else {
                                                            setTooltipDirection(preferredDirection);
                                                            setShowTooltip(true);
                                                        }
                                                    }}
                                                />
                                                <AnimatePresence>
                                                    {showTooltip && (
                                                        <motion.div
                                                            initial={{
                                                                opacity: 0,
                                                                y: tooltipDirection === 'top' ? 10 : -10,
                                                                scale: 0.95
                                                            }}
                                                            animate={{ opacity: 1, y: 0, scale: 1 }}
                                                            exit={{
                                                                opacity: 0,
                                                                y: tooltipDirection === 'top' ? 10 : -10,
                                                                scale: 0.95
                                                            }}
                                                            className={`${styles.tooltip} ${tooltipDirection === 'top' ? styles.tooltipTop : styles.tooltipBottom}`}
                                                        >
                                                            <div className={styles.tooltipTitle}>Award Timeline</div>
                                                            <div className={styles.tooltipContent}>
                                                                {item.year.split(',').map((q, i) => (
                                                                    <div key={i} className={styles.quarterItem}>• {q.trim()}</div>
                                                                ))}
                                                            </div>
                                                            <div className={styles.tooltipArrow} />
                                                        </motion.div>
                                                    )}
                                                </AnimatePresence>
                                            </div>
                                        )}
                                    </div>
                                </div>

                                <h3 className={styles.title}>
                                    {item.title}
                                </h3>
                            </div>

                            <div className={styles.footer}>
                                Secured: <span className={styles.place}>{item.place}</span>
                            </div>
                        </motion.div>
                    )
                })}
            </div>
        </section>
    )
}

export default Achievements
