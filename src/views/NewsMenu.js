
import { useCallback } from "react";
import "./NewsMenu.css";

// News Menu component
// Propagates city switching
/**
 * 
 * @param {object} param0 shaped like { city, setCity} 
 * @returns JSX.Element
 */
const Menu = ({ city, setCity }) => {

    // Create handler for button events
    const onCity = useCallback((e) => {

        const cityOfInterest = e.target.textContent.trim();
        // No need to change if same
        if (cityOfInterest === city) return;

        // Propagate city change
        setCity(cityOfInterest);
    }, [setCity, city]);

    return (
        <header className="News-header">
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