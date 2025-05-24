import { Code, Code2 } from "lucide-react";
import Link from 'next/link';
import styles from './Header.module.css';
import DarkMode from "./_component/DarkMode/DarkMode";
import SearchInput from "./_component/SearchInput/SearchInput";

const Header = () => {
    return (
        <header className={styles.container}>
            <div>
                <Link href="/" className={styles.logo}>
                    <Code className={styles.logoIcon} />
                    <span className={styles.logoText}>Tech Blog</span>
                    <Code2 className={styles.logoIcon} />
                </Link>
            </div>
            <div className="flex items-center gap-4">
                <SearchInput />
                <DarkMode />
            </div>
        </header>
    )
}

export default Header