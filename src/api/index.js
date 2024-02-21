const NEWS_API_ENDPOINT = "https://newsapi.org";
const NEWS_API_KEY = "8d77aa1e084d4f6daa3b08340693280a";


export const getNewsFor = async (city) => {
    const endPoint = `${NEWS_API_ENDPOINT}/v2/everything?q=${city}&sortBy=popularity&apiKey=${NEWS_API_KEY}`;
    try {
        const response = await fetch(endPoint);
        if (response.ok) {
            const { articles } = await response.json();
            const data = articles.map(({ title, author, description, publishedAt }) => ({ title, author, description, publishedAt }));
            return { data, status: 200 };
        }

        return { error: response.statusText, status: response.status };
    } catch (e) {
        console.error(e);
        return { error: "Snap! Looks like you are offline. Check your Internet connectivity please." }
    }


}
