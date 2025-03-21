import Link from 'next/link'
import {Tag} from "lucide-react";
import styles from './Categories.module.css'

const Categories = () => {
    return (
        <div className={styles.categories}>
            <h2 className={styles.categoriesTitle}>カテゴリー</h2>
            <div className={styles.categoryList}>
                {["Next.js", "React", "TypeScript", "JavaScript", "Web開発", "パフォーマンス"].map((category, index) => (
                    <Link
                        key={index}
                        href="#"
                        className={styles.categoryTag}
                    >
                        <Tag className={styles.categoryTagIcon} />
                        <span className={styles.categoryTagText}>{category}</span>
                    </Link>
                ))}
            </div>
        </div>
    )
}

export default Categories