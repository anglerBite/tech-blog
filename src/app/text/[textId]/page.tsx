import styles from './page.module.css';
import { getData } from "@/app/lib/fetchGET";

const TextPage = async ({ params }: { params: { textId: number } }) => {
    const { textId } = params;
    const data = await getData();
    const content = data.find(item => item.id === textId);

    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <header className={styles.header}>
                    <h1>{content.title}</h1>
                    <div className={styles.meta}>
                        <span>投稿日：{content.date}</span>
                    </div>
                </header>
                <div className={styles.text}>
                    <p>{content.text}</p>
                </div>
            </div>
        </div>
    )
}

export default TextPage;