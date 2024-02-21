
import { useCallback } from "react";

// News Menu component
// Handles city switching too
const Menu = ({ city, setCity }) => {

    // Create handler for button events
    const onCity = useCallback((e) => {
        const cityOfInterest = e.target.textContent.trim();
        setCity(cityOfInterest);
    }, [setCity]);

    return (
        <header>
            <h1>News Pub!</h1>
            <p>Get every news about your city here.</p>
            <section className="News-menu">
                <button onClick={onCity} className={city === 'Waterloo' ? 'active' : ''}>Waterloo</button>
                <button onClick={onCity} className={city === 'Toronto' ? 'active' : ''}>Toronto</button>
                <button onClick={onCity} className={city === 'Halifax' ? 'active' : ''}>Halifax</button>
                <button onClick={onCity} className={city === 'Calgary' ? 'active' : ''}>Calgary</button>
                <button onClick={onCity} className={city === 'Vancouver' ? 'active' : ''}>Vancouver</button>
                <button onClick={onCity} className={city === 'Ottawa' ? 'active' : ''}>Ottawa</button>
                <button onClick={onCity} className={city === 'Winnipeg' ? 'active' : ''}>Winnipeg</button>
                <button onClick={onCity} className={city === 'Montreal' ? 'active' : ''}>Montreal</button>
            </section>
            <h2>News from {city}</h2>
        </header>
    )
}
export default Menu;