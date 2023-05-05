import "./Header.css";
import Links from "./Links";
import Login from "./Login";

import {BookHalf} from "react-bootstrap-icons";

const Header = () => {
    const currentPath = document.URL.split('/')[3];
    const cssColor = currentPath === "about" ? "purple" : "orange";

    return (
        <nav className="header__ai">
            <BookHalf className="icon__ai"/>
            <Links color={cssColor}/>
            <Login color={cssColor}/>
        </nav>
    );
};

export default Header;
