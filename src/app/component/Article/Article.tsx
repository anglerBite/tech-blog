import Link from 'next/link';
import styles from './Article.module.css';
import { Clock, ChevronRight} from "lucide-react";
import { featuredPosts } from "../../dummy";

const Article = () => {
    return (
        <div className={styles.grid}>
            {featuredPosts.map((post, index) => (
                <article key={index} className={styles.article}>
                    <Link href="#" className={styles.articleLink}>
                        <div className={styles.articleMeta}>
                            <span className={styles.category}>{post.category}</span>
                            <span className={styles.dot}>•</span>
                            <span className={styles.date}>{post.date}</span>
                        </div>
                        <h2 className={styles.articleTitle}>{post.title}</h2>
                        <p className={styles.articleExcerpt}>{post.excerpt}</p>
                        <div className={styles.articleFooter}>
                            <div className={styles.readTime}>
                                <Clock className={styles.readTimeIcon} />
                                {post.readTime}
                            </div>
                            <ChevronRight className={styles.chevronIcon} />
                        </div>
                    </Link>
                </article>
            ))}
        </div>
    )
}

export default Article