import { getData } from '@/app/lib/fetchGET';
import { MockData } from '@/types/types';
import Link from 'next/link';
import styles from './page.module.css';
import Hero from '@/app/_component/Header/_component/Hero/Hero';

const page = async ({ params }: {params: {slug: string}}) => {
    const { slug } = params;
    const data: MockData[] = await getData();

    const category = data.filter(item => item.category[0].name === slug);
    // console.log(category);

    return (
        <div className={styles.container}>
            <Hero />
            <div className={styles.articleContainer}>
                {category.map((item: MockData) => (
                    <article key={item.id} className={styles.article}>
                        <Link href={`/text/${item.id}`} className={styles.articleLink}>
                            <div className={styles.articleMeta}>
                                <span className={styles.category}>{item.category[0].name}</span>
                                <span className={styles.dot}>.</span>
                                <span className={styles.date}>{item.date}</span>
                            </div>
                            <span className={styles.articleTitle}>{item.title}</span>
                        </Link>
                    </article>
                ))}
            </div>
        </div>
    )
}

export default page