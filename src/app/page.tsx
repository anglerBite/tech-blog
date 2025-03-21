import styles from './page.module.css';
import Hero from "./component/Hero/Hero";
import Article from './component/article/Article';
import Categories from './component/Categories/Categories';

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