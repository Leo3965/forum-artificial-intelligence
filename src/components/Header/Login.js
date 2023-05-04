import {Globe} from "react-bootstrap-icons";

import "./Login.css";

const Login = () => {
    return (
        <div className="login__ai">
            <div className="icon-wrapper__ai">
                <Globe className="icon__ai"/>
                <span className="text__ai">EN</span>
            </div>
            <button className="button__ai">Login</button>
        </div>
    );
};

export default Login;
