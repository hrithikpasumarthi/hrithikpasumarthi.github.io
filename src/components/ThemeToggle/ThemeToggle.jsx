import { useState, useEffect } from 'react'
import { FaSun, FaMoon } from 'react-icons/fa'
import { motion } from 'framer-motion'
import styles from './ThemeToggle.module.css'

const ThemeToggle = () => {
    const [theme, setTheme] = useState(localStorage.getItem('theme') || 'dark')

    useEffect(() => {
        document.documentElement.setAttribute('data-theme', theme)
        localStorage.setItem('theme', theme)
    }, [theme])

    const toggleTheme = () => {
        setTheme(prevTheme => prevTheme === 'dark' ? 'light' : 'dark')
    }

    return (
        <motion.button
            onClick={toggleTheme}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className={styles.toggleButton}
            aria-label="Toggle Theme"
        >
            {theme === 'dark' ? <FaSun /> : <FaMoon />}
        </motion.button>
    )
}

export default ThemeToggle
