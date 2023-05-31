import "./Header.css";
import Links from "./Links";
import Login from "./Login";

import {Github} from "react-bootstrap-icons";

const Header = ({header, handleLanguageClick}) => {
    const currentPath = document.URL.split('/')[3];
    const cssColor = currentPath === "about" ? "purple" : "orange";
    const handleIconClick = () => {
        window.open('https://github.com/Leo3965/forum-artificial-intelligence', '_blank');
    }

    return (
        <nav className="header__ai">
            <Github onClick={handleIconClick} className="icon__ai"/>
            <Links header={header} color={cssColor}/>
            <Login handleLanguageClick={handleLanguageClick} color={cssColor}/>
        </nav>
    );
};

export default Header;
