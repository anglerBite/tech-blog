'use client';

import { useEffect, useState } from 'react';
import styles from './DarkMode.module.css';
import { Moon, Sun } from "lucide-react";

const DarkMode = () => {
    const [isDark, setIsDark] = useState(false);

    useEffect(() => {
        document.documentElement.setAttribute('data-theme','dark');
    }, []);

    const toggleTheme = () => {
        setIsDark(!isDark);
        document.documentElement.setAttribute('data-theme', !isDark ? 'light' : 'dark');
    };

    return (
        <button
            className={styles.iconButton}
            onClick={toggleTheme}
            aria-label="テーマ切り替え"
        >
            {isDark ? <Moon size={20} /> : <Sun size={20} />}
        </button>
    )
}

export default DarkMode