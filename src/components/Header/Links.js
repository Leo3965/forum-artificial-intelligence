import "./Links.css";
import {Link} from "react-router-dom";

const Links = () => {
    return (
        <div className="link__ai">
            <Link to="/" className="link__item__active">Home</Link>
            <Link to="/about" className="link__item">About</Link>
        </div>
    );
};

export default Links;
