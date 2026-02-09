import { Suspense, lazy, useEffect } from 'react'
import Header from './components/Header/Header'
import SkeletonLoader from './components/SkeletonLoader/SkeletonLoader'
import ParallaxBackground from './components/ParallaxBackground/ParallaxBackground'
import './index.css'

// Lazy load heavy sections
const About = lazy(() => import('./components/About/About'))
const Projects = lazy(() => import('./components/Projects/Projects'))
const Skills = lazy(() => import('./components/Skills/Skills'))
const Achievements = lazy(() => import('./components/Achievements/Achievements'))
const Certifications = lazy(() => import('./components/Certifications/Certifications'))
const Contact = lazy(() => import('./components/Contact/Contact'))

function App() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="App">
      <ParallaxBackground />
      <Header />
      <main>
        <Suspense fallback={<SkeletonLoader />}>
          <About />
          <Projects />
          <Skills />
          <Achievements />
          <Certifications />
          <Contact />
        </Suspense>
      </main>
      <footer style={{ textAlign: 'center', padding: '2rem', color: 'var(--text-secondary)' }}>
        <p>&copy; {new Date().getFullYear()} Hrithik. All rights reserved.</p>
      </footer>
    </div>
  )
}

export default App
