import fetchFunc from '@/app/api/client/fetchFunc';
import { Tag } from "lucide-react";
import { fetchFuncType } from '@/types/types';
import styles from '../page.module.css';
import Link from 'next/link';

const Aside = async () => {

    const response = await fetchFunc();

    return (
        <aside className={styles.sidebar}>
            <div className={styles.sidebarSection}>
                <h3>カテゴリー</h3>
                <div className={styles.tagList}>
                    {response.map((tag: fetchFuncType, index: number) => (
                        <Link href='#' className={styles.tagLink} key={index}>
                            <span className={styles.tag}>{tag.category}</span>
                        </Link>
                    ))}
                </div>
            </div>

            <div className={styles.sidebarSection}>
                <h3>最近の投稿</h3>
                <ul className={styles.recentPostsList}>
                    {response.map((recent: fetchFuncType, index: number) => (
                        <li key={index}>
                            <Link href="#">{recent.title}</Link>
                        </li>
                    ))}
                </ul>
            </div>
        </aside>
    )
}

export default Aside