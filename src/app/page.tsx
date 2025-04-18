import Hero from './_component/Header/_component/Hero/Hero';
import styles from './page.module.css';
import Article from './_component/Article/Article';

export default function Home() {

  return (
    <div className={styles.container}>
      <Hero />
      <Article />
    </div>
  );
}