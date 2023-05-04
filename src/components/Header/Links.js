import "./Links.css";
import {Link} from "react-router-dom";
import {useState} from "react";

const Links = () => {
    const currentPath = document.URL.split('/')[3];
    const activeItemCss = "link__item__active";
    const itemCss = "link__item";

    const [linkStyle, setLinkStyle] = useState({
        home: currentPath === "" ? activeItemCss : itemCss,
        about: currentPath === "about" ? activeItemCss : itemCss
    });
    const handleLinkClick = (link) => {
        const currentLink = link.target.innerText.toLowerCase();
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
            <Link to="/" className={linkStyle.home} onClick={handleLinkClick}>Home</Link>
            <Link to="/about" className={linkStyle.about} onClick={handleLinkClick}>About</Link>
        </div>
    );
};

export default Links;
