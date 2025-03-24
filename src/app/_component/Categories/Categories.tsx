import Link from 'next/link'
import {Tag} from "lucide-react";
import styles from './Categories.module.css'
import fetchFunc from '@/app/api/client/fetchFunc';
import { fetchFuncType } from '@/types/types';

const Categories = async () => {

    const response = await fetchFunc();

    return (
        <div className={styles.categories}>
            <h2 className={styles.categoriesTitle}>カテゴリー</h2>
            <div className={styles.categoryList}>
                {response.map((category: fetchFuncType, index: number) => (
                    <Link
                        key={index}
                        href="#"
                        className={styles.categoryTag}
                    >
                        <Tag className={styles.categoryTagIcon} />
                        <span className={styles.categoryTagText}>{category.category}</span>
                    </Link>
                ))}
            </div>
        </div>
    )
}

export default Categories