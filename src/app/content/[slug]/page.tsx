import Aside from './_component/Aiside';
import styles from './page.module.css';

const page = async () => {

    return (
        <div className={styles.container}>
            <main className={styles.mainContent}>
                <article>
                    <header className={styles.header}>
                        <h1>美しい日本の四季：秋の魅力を探る</h1>
                        <div className={styles.meta}>
                            <span>投稿日: 2024年3月15日</span>
                            <span> | </span>
                            <span>著者: 山田太郎</span>
                        </div>
                    </header>

                    <div className={styles.postContent}>
                        <p>
                            日本の秋は、色とりどりの紅葉が山々を彩り、清々しい空気が漂う素晴らしい季節です。
                            この時期になると、全国各地で紅葉狩りを楽しむ人々の姿が見られます。
                        </p>
                        <p>
                            特に京都の古寺では、歴史ある建築物と紅葉が織りなす風景が、
                            まるで一枚の絵画のような美しさを見せてくれます。
                            また、秋は食欲の秋とも呼ばれ、新鮮な秋刀魚や松茸、栗など、
                            旬の味覚を楽しむこともできます。
                        </p>
                        <p>
                            日本の伝統文化と自然が見事に調和する秋は、
                            観光客にとっても日本の魅力を存分に感じられる季節と言えるでしょう。
                        </p>
                    </div>
                </article>
            </main>

            <Aside />
        </div>
    );
}

export default page