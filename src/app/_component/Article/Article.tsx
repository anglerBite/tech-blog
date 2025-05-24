// src/app/_component/Article/Article.tsx
import { getData } from '@/app/lib/fetchGET';
import dayjs from 'dayjs';
import { MockData } from '@/types/types';
import Link from 'next/link';
import styles from './Article.module.css';

export default async function Article() {
    const data: MockData[] = await getData();

    return (
        <div className={styles.container}>
            {data.map(item => {
                // 安全性のため optional chaining も併用
                const firstCategoryName = item.category?.[0]?.name ?? 'Uncategorized';

                return (
                    <article key={item.id} className={styles.article}>
                        <Link href={`/text/${item.id}`} className={styles.articleLink}>
                            <div className={styles.articleMeta}>
                                <span className={styles.category}>{firstCategoryName}</span>
                                <span className={styles.dot}>.</span>
                                <span className={styles.date}>
                                    {dayjs(item.date).format('YYYY.MM.DD')}
                                </span>
                            </div>
                            <span className={styles.articleTitle}>{item.title}</span>
                        </Link>
                    </article>
                );
            })}
        </div>
    );
}