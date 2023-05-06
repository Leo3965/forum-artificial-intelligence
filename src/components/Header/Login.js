import {Globe} from "react-bootstrap-icons";

import "./Login.css";
import {useState} from "react";
import {languages, switchLanguage} from "../../entities/Language";

const Login = ({color, handleLanguageClick}) => {
    const buttonCss = "button-arounder " + (color === "purple" ? "button-purple" : "");

    const [languageIcon, setLanguageIcon] = useState(languages.english);

    const handleClick = () => {
        const newLan = switchLanguage(languageIcon);
        handleLanguageClick(newLan);
        setLanguageIcon(newLan);
    };

    return (
        <div className="login__ai">
            <div className="icon-wrapper__ai">
                <Globe className="icon__ai"/>
                <span className="text__ai" onClick={handleClick}>{languageIcon}</span>
            </div>
            <div className="buttons-container">
                <button className={buttonCss}>Login</button>
            </div>
        </div>
    );
};

export default Login;
