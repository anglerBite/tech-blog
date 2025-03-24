import { Code2, Search, LogIn } from "lucide-react";
import styles from "./Header.module.css";
import DarkMode from "../DarkMode/DarkMode";
import Link from "next/link";


const Header = () => {
    return (
        <header className={styles.header}>
            <div className={styles.headerContent}>
                <div className={styles.headerInner}>
                    <div className={styles.logo}>
                        <Code2 className={styles.logoIcon} />
                        <Link href='/'>
                            <span className={styles.logoText}>Tech Blog</span>
                        </Link>
                    </div>
                    <div className={styles.headerActions}>
                        <div className={styles.searchContainer}>
                            <input
                                type="text"
                                placeholder="記事を検索..."
                                className={styles.searchInput}
                            />
                            <Search className={styles.searchIcon} />
                        </div>
                        <DarkMode />
                        <button className={styles.primaryButton}>
                            <LogIn size={20} />
                            ログイン
                        </button>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header