import "./TextContent.css";

const TextContent = ({children, className}) => {
    className = className === undefined ? "" : className;
    const classes = `text-content ${className}`;
    return (
        <div className={classes}>{children}</div>
    );
};

export default TextContent;
