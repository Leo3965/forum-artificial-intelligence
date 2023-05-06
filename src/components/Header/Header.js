import "./Header.css";
import Links from "./Links";
import Login from "./Login";

import {BookHalf} from "react-bootstrap-icons";

const Header = ({header, handleLanguageClick}) => {
    const currentPath = document.URL.split('/')[3];
    const cssColor = currentPath === "about" ? "purple" : "orange";

    return (
        <nav className="header__ai">
            <BookHalf className="icon__ai"/>
            <Links header={header} color={cssColor}/>
            <Login handleLanguageClick={handleLanguageClick} color={cssColor}/>
        </nav>
    );
};

export default Header;
