import { useCallback } from "react";
import "./NewsItem.css";
import Display from "./DisplayWhen";

// Displays individual News item

const NewsItem = ({ news: { author, title, publishedAt, description }, show, setShow }) => {


    // Toggles news description visibility
    // tracks based on the title field
    const onToggleContent = useCallback(() => {
        setShow(title);
    }, [setShow, title])

    return (<li className="item">
        <h3>{title}</h3>
        <p><strong>By {author}</strong>  <small>on {publishedAt.split("T")[0]}{"  "}</small>
            <Display when={show !== title}>
                <button onClick={onToggleContent}>Read News</button>
            </Display>
        </p>
        <Display when={show === title}>
            <p className="content">{description}</p>
        </Display>

    </li>)
}

export default NewsItem;