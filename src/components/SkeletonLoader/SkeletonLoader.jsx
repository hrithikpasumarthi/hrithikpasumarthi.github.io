import styles from './SkeletonLoader.module.css'

const SkeletonLoader = () => {
    return (
        <div className={styles.container}>
            {/* About Section Skeleton */}
            <div className={styles.section}>
                <div className={`${styles.skeleton} ${styles.heading}`}></div>
                <div className={`${styles.skeleton} ${styles.line}`}></div>
                <div className={`${styles.skeleton} ${styles.lineShort}`}></div>
            </div>

            {/* Projects Section Skeleton */}
            <div className={styles.section}>
                <div className={`${styles.skeleton} ${styles.heading}`}></div>
                <div className={`${styles.skeleton} ${styles.card}`}></div>
            </div>

            {/* Skills Section Skeleton */}
            <div className={styles.section}>
                <div className={`${styles.skeleton} ${styles.heading}`}></div>
                <div className={styles.grid}>
                    <div className={`${styles.skeleton} ${styles.gridItem}`}></div>
                    <div className={`${styles.skeleton} ${styles.gridItem}`}></div>
                    <div className={`${styles.skeleton} ${styles.gridItem}`}></div>
                </div>
            </div>

            {/* Achievements Section Skeleton */}
            <div className={styles.section}>
                <div className={`${styles.skeleton} ${styles.heading}`}></div>
                <div className={styles.grid}>
                    <div className={`${styles.skeleton} ${styles.gridItem}`}></div>
                    <div className={`${styles.skeleton} ${styles.gridItem}`}></div>
                    <div className={`${styles.skeleton} ${styles.gridItem}`}></div>
                </div>
            </div>
        </div>
    )
}

export default SkeletonLoader
