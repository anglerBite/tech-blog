export const getData = async () => {
    try {
        const res = await fetch('http://localhost:3000/api');

        if (!res.ok) {
            throw new Error('取得失敗');
        }

        const data = await res.json();

        return data;
    } catch (error) {
        console.error('Error fetching data:', error);
        return { mock: [] };
    }
}