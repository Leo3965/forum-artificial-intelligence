import "./Title.css";

const Title3 = ({children, className}) => {
    const classes = `title__ai title3 ${className}`;
    return (
        <div className={classes}>{children}</div>
    );
};

export default Title3;