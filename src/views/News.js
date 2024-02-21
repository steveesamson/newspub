
import { useState } from 'react';
import NewsMenu from "./NewsMenu";
import "./News.css";
import NewsItem from './NewsItem';
import Display from './DisplayWhen';
import { useNewsFor } from '../hooks/useNewsFor';

// The main News component
// Expects a defaultCity props that defaults to Waterloo if not provided
const News = ({ defaultCity = "Waterloo" }) => {
    // Tracks city state
    const [city, setCity] = useState(defaultCity);
    // Tracks which news has its description displayed
    // Only one news can have it's description displayed at a time.
    const [show, setShow] = useState(null);

    // Loads news based on city
    const { news, loading, error } = useNewsFor(city);

    return (<article className='News'>
        <NewsMenu city={city} setCity={setCity} />
        <section className='News-items-wrapper'>
            <Display when={loading}>
                <p>Loading news...</p>
            </Display>
            <Display when={!loading && !!error}>
                <p className='error'>{error}</p>
            </Display>
            <Display when={!loading && !!news && news.length}>
                <ul className='News-items'>
                    {!!news && news.map((next) => <NewsItem news={next} show={show} setShow={setShow} key={next.title} />)}
                </ul>
            </Display>
            <Display when={!loading && !!news && !news.length}>
                <p>Sorry there are not news for {city}</p>
            </Display>
        </section>
    </article>);
}

export default News;