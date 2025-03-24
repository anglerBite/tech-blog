import { NextResponse } from "next/server";
import dummy from '@/data/dummy.json';

export async function GET() {
    try {
        return await NextResponse.json(dummy);
    } catch {
        return NextResponse.json(
            { error: '記事の取得に失敗しました' },
            { status: 500 }
        );
    }
}