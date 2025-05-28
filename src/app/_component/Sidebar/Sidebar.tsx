import Link from 'next/link';
import styles from './Sidebar.module.css';
import { getData } from '@/app/lib/fetchGET';
import { MockData } from '@/types/types';

const Sidebar = async () => {

    const data = await getData();

    return (
        <aside className={styles.container}>
            <section className={styles.section}>
                <div>
                    <h3>カテゴリー</h3>
                    <div className={styles.tagList}>
                        {/* {data.map((item: MockData, i: number) => (
                            <Link href={`/category/${item.category[0].name}`} className={styles.tagLink} key={i}>
                                <span className={styles.tag}>{item.category[0].name}</span>
                            </Link>
                        ))} */}
                    </div>
                </div>
            </section>
            <section className={styles.section}>
                <h3>最近の記事</h3>
                <ul className={styles.recentPostsList}>
                    {data.map((item: MockData, i: number) => (
                        <li key={i}>
                            <Link href={`/text/${item.id}`}>{item.title}</Link>
                        </li>
                    ))}
                </ul>
            </section>
        </aside >
    )
}

export default Sidebar;