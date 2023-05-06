import "./Title.css";

const Title2 = ({children, className}) => {
    className = className === undefined ? "" : className;
    const classes = `title__ai title2 ${className}`;
    return (
        <div className={classes}>{children}</div>
    );
};

export default Title2;
