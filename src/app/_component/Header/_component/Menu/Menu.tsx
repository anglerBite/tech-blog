'use client';

import { useState } from 'react';
import { MenuIcon, X } from 'lucide-react';
import styles from './Menu.module.css';
import Link from 'next/link';

const Menu = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => {
        setIsOpen(!isOpen);
    }

    return (
        <>
            <button
                className={styles.menuButton}
                onClick={toggleMenu}
                aria-label={isOpen ? 'Close menu' : 'Open menu'}>
                {isOpen ? (
                    <X className='h-6 w-6 bg-var(card-background)' />
                ) : (
                    <MenuIcon className='h-6 w-6 bg-var(card-background)' />
                )}
            </button>
            {/*ここから下スライドメニュー*/}
            <div className={`${styles.slideMenu} ${isOpen ? styles.slideMenuOpen : ''}`}>
                <nav className={styles.nav}>
                    <ul className={styles.navList}>
                        <li>
                            <Link href="/" className={styles.navItem}>
                                ホーム
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>

            {
                isOpen && (
                    <div
                        className={styles.overlay}
                        onClick={toggleMenu}
                        aria-hidden="true"
                    />
                )
            }
        </>
    )
}

export default Menu