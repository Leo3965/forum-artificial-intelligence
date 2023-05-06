import "./Links.css";
import {Link} from "react-router-dom";
import {useState} from "react";

const Links = ({color, header}) => {
    const activeItemCss = "link__item__active " + color + "-link";
    const itemCss = "link__item " + color + "-link";

    const [linkStyle, setLinkStyle] = useState({
        home: color === "orange" ? activeItemCss : itemCss,
        about: color === "purple" ? activeItemCss : itemCss
    });
    const handleLinkClick = (event) => {
        const currentLink = event.target.innerText.toLowerCase();
        const homeCss = currentLink === "home" ? activeItemCss : itemCss;
        const aboutCss = currentLink === "about" ? activeItemCss : itemCss;

        const currentLinkStyle = {
            home: homeCss,
            about: aboutCss
        };

        setLinkStyle(currentLinkStyle);
    };

    return (
        <div className="link__ai">
            <Link to="/" className={linkStyle.home} onClick={handleLinkClick}>{header.home}</Link>
            <Link to="/about" className={linkStyle.about} onClick={handleLinkClick}>{header.about}</Link>
        </div>
    );
};

export default Links;
