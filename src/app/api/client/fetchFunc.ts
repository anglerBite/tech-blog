const fetchFunc = async () => {
    try {
        const response = await fetch('http://localhost:3000/api/server', {
            cache: 'force-cache',
        });

        if (!response.ok) {
            throw new Error('取得失敗')
        }

        const data = await response.json();
        return data.dummy;
    } catch {
        console.error('取得失敗');
        return [];
    }
}

export default fetchFunc