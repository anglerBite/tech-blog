'use client';

import { Search } from 'lucide-react';
import Link from 'next/link';
import styles from './SearchInput.module.css';
import { useEffect, useState } from 'react';
import { getData } from '@/app/lib/fetchGET';
import { MockData } from '@/types/types';

const SearchInput = () => {

    const [text, setText] = useState<string>('');
    const [data, setData] = useState<MockData[]>([]);
    const [result, setResult] = useState<MockData[]>([]);

    useEffect(() => {
        const dataFetch = async () => {
            const res = await getData();
            setData(res);
        }
        dataFetch();
    }, []);

    useEffect(() => {
        if (text.trim() === '') {
            setResult([]);
        } else {
            const searchObj = data.filter(item => item.title.includes(text));
            setResult(searchObj);
        }
    }, [text, data]);

    const handleOutside = () => setResult([]);

    return (
        <>
            {result.length > 0 && (
                <div
                    onClick={handleOutside}
                    style={{ position: 'fixed', inset: 0 }}
                />
            )}
            <div className={styles.searchContainer}>
                <input
                    type="text"
                    placeholder='記事を検索...'
                    className={styles.searchInput}
                    value={text}
                    onChange={e => setText(e.target.value)}
                />
                <Search className={styles.searchIcon} />
                <ul className={result.length > 0 ? styles.searchResult : styles.searchResultNone}>
                    {result.map(item => (
                        <li key={item.id}>
                            <Link href={`/text/${item.id}`}>{item.title}</Link>
                        </li>
                    ))}
                </ul>
            </div >
        </>
    )
}

export default SearchInput