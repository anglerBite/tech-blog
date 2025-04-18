import styles from './Hero.module.css'

const Hero = () => {
    return (
        <div className={styles.hero}>
            <h1 className={styles.heroTitle}>日々の備忘録</h1>
            <p className={styles.heroText}>日々の備忘録を記録するためのブログです。</p>
        </div>
    )
}

export default Hero