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

export const getData = async () => {
    const data = await client.get({
        endpoint: 'blog',
        queries: {
            fields: 'id,title,category,text,date',
        }
    });

    const contents: MockData[] = data.contents;
    return contents;
}