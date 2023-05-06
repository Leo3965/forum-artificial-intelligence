import "./SubTitle.css";

const SubTitle = ({children, className}) => {
    className = className === undefined ? "" : className;
    const classes = `subtitle ${className}`;
    return (
        <div className={classes}>{children}</div>
    );
};

export default SubTitle;
