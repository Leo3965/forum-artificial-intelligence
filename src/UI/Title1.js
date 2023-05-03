import "./Title.css";

const Title1 = ({children, className}) => {
    const classes = `title__ai title1 ${className}`;
    return (
        <div className={classes}>{children}</div>
    );
};

export default Title1;