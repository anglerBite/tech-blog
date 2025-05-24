import { MockData } from "@/types/types";
import { client } from "./microcms"

// export const getData = async () => {
//     try {
//         const res = await fetch('http://localhost:3002/mock', {
//             headers: {
//                 'Content-Type': 'application/json'
//             }
//         });

//         if (!res.ok) {
//             throw new Error('取得失敗');
//         }

//         return res.json();

//     } catch {
//         return console.log('取得失敗')
//     }
// }

// src/app/lib/fetchGET.ts

// src/app/lib/fetchGET.ts


type RawItem = Omit<MockData, 'category'> & {
    category: string[];
};

export const getData = async (): Promise<MockData[]> => {
    const res = await client.get<{ contents: RawItem[] }>({
        endpoint: 'blog',
        queries: {
            fields: 'id,title,category,text,date',
        },
    });

    // 文字列配列 → { name: string }[] へ変換
    return res.contents.map(item => ({
        ...item,
        category: item.category.map(name => ({ name })),
    }));
};