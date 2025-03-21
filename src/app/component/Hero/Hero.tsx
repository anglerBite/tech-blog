import styles from './Hero.module.css'

const Hero = () => {
    return (
        <div className={styles.hero}>
            <h1 className={styles.heroTitle}>
                プログラミングの知見を深める
            </h1>
            <p className={styles.heroText}>
                最新のWeb開発技術とベストプラクティスについて、
                実践的な知識を共有するテックブログです。
            </p>
        </div>
    )
}

export default Hero