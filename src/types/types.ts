// export interface MockData {
//     id: string;
//     title: string;
//     category: {name: string};
//     text: string;
//     date: string;
// }

import { MicroCMSListContent } from "microcms-js-sdk";

export type Category = {
    name: string;
} & MicroCMSListContent

export type MockData = {
    id: string;
    title: string;
    category: Category;
    text: string;
    date: string;
} & MicroCMSListContent;