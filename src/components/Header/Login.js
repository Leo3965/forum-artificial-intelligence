import {Globe} from "react-bootstrap-icons";

import "./Login.css";

const Login = ({color}) => {
    const buttonCss = "button__ai " + (color === "purple" ? "button-purple" : "");
    return (
        <div className="login__ai">
            <div className="icon-wrapper__ai">
                <Globe className="icon__ai"/>
                <span className="text__ai">EN</span>
            </div>
            <button className={buttonCss}>Login</button>
        </div>
    );
};

export default Login;
