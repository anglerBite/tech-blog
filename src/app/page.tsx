import styles from './page.module.css';
import Hero from "./_component/Hero/Hero";
import Article from './_component/Article/Article';
import Categories from './_component/Categories/Categories';

export default function Home() {

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <Hero />
        <Article />
        <Categories />
      </main>
    </div>
  );
}