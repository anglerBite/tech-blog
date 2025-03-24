'use client'

import { useState, useEffect } from "react";
import { Sun, Moon } from "lucide-react";
import styles from './DarkMode.module.css';

const DarkMode = () => {

    const [isDark, setIsDark] = useState(false);

    useEffect(() => {
        // 初期テーマの設定
        const isDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
        setIsDark(isDarkMode);
        document.documentElement.setAttribute('data-theme', isDarkMode ? 'dark' : 'light');
    }, []);

    const toggleTheme = () => {
        setIsDark(!isDark);
        document.documentElement.setAttribute('data-theme', !isDark ? 'dark' : 'light');
    };

    return (
        <button
            className={styles.iconButton}
            onClick={toggleTheme}
            aria-label="テーマ切り替え"
        >
            {isDark ? <Sun size={20} /> : <Moon size={20} />}
        </button>
    )
}

export default DarkMode