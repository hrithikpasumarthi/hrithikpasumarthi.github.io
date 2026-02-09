import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaBars, FaTimes } from 'react-icons/fa'
import { Link } from 'react-scroll'
import ThemeToggle from '../ThemeToggle/ThemeToggle'
import { NAV_LINKS } from '../../constants'
import styles from './Header.module.css'

const Header = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggleMenu = () => setIsOpen(!isOpen)

    return (
        <header className={styles.header}>
            <nav className={styles.nav}>

                {/* Desktop Menu */}
                <div className={styles.desktopMenu}>
                    <ul className={styles.navList}>
                        {NAV_LINKS.map(link => (
                            <li key={link.name}>
                                <Link
                                    to={link.to}
                                    smooth={true}
                                    duration={500}
                                    className={styles.navLink}
                                >
                                    {link.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                    <ThemeToggle />
                </div>

                {/* Mobile Menu Icon */}
                <div className={styles.mobileMenuIcon}>
                    <ThemeToggle />
                    <div onClick={toggleMenu} className={styles.toggleButton}>
                        {isOpen ? <FaTimes /> : <FaBars />}
                    </div>
                </div>
            </nav>

            {/* Mobile Dropdown */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className={styles.mobileDropdown}
                    >
                        <ul className={styles.mobileMenuList}>
                            {NAV_LINKS.map(link => (
                                <li key={link.name}>
                                    <Link
                                        to={link.to}
                                        smooth={true}
                                        duration={500}
                                        onClick={toggleMenu}
                                        className={styles.mobileLink}
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    )
}

export default Header
