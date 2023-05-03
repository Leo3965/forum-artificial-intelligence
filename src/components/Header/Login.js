import {Globe} from "react-bootstrap-icons";
import Button from 'react-bootstrap/Button';

import "./Login.css";

const Login = () => {
    return (
        <div className="login__ai">
            <div className="icon-wrapper__ai">
                <Globe className="icon__ai"/>
                <span className="text__ai">EN</span>
            </div>
            <Button className="button__ai">Login</Button>
        </div>
    );
};

export default Login;