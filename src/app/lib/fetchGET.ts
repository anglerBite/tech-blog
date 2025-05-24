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

export const getData = async (): Promise<MockData[]> => {
    const res = await client.get<{
        contents: MockData[]
    }>({
        endpoint: 'blog',
        queries: {
            fields: 'id,title,category,text,date',
        },
    });

    // もし API から返ってくる JSON が期待と異なる場合は
    // ここでバリデーションも挟める（例: zod 等）
    return res.contents;
};