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



export const getData = async (): Promise<MockData[]> => {
    const data = await client.get({
        endpoint: 'blog',
        queries: {
            fields: 'id,title,category,text,date',
        },
    });

    return data.contents;
};