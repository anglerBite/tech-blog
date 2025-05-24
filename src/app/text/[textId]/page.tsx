import styles from './page.module.css';
import dayjs from 'dayjs';
import { getData } from "@/app/lib/fetchGET";
import { MockData } from '@/types/types';

const TextPage = async ({ params }: {params: {textId: string}}) => {
    const { textId } = await params;
    const data: MockData[] = await getData();
    const content: MockData | undefined = data.find(item => item.id === textId)!;
    const formattedDate = dayjs(content.date).format('YYYY.MM.DD');

    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <header className={styles.header}>
                    <h1>{content.title}</h1>
                    <div className={styles.meta}>
                        <span>投稿日：{formattedDate}</span>
                    </div>
                </header>
                <div className={styles.text}>
                    <div dangerouslySetInnerHTML={{ __html: content.text }} />
                </div> 
            </div>
        </div>
    )
}

export default TextPage;