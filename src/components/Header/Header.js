import "./Header.css";
import Links from "./Links";
import Login from "./Login";

import {BookHalf} from "react-bootstrap-icons";

const Header = () => {

    return (
        <nav className="header__ai">
            <BookHalf className="icon__ai"/>
            <Links/>
            <Login/>
        </nav>
    );
};

export default Header;