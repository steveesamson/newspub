import { useEffect, useMemo, useState } from "react"
import { getNewsFor } from "../api";

// Hook to connect view to data
// Uses getNewsFor from api/index.js
// Return memo of {news, error, loading}
export const useNewsFor = (city) => {
    const [news, setNews] = useState(null);
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const fetchNews = async () => {
            // Notify of loading
            setLoading(true);
            // Start a fetch
            const { data, error } = await getNewsFor(city);
            // Update states;
            setNews(data);
            setError(error);
            setLoading(false);
        };
        // Fetch if city is non-null
        city && fetchNews();
    }, [city]);

    // Return a memo of news, error and loading
    return useMemo(() => ({ news, error, loading }), [news, error, loading]);
};
