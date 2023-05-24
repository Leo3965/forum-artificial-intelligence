import "./TextWrapper.css";
import Title1 from "../../UI/Title1";
import TextContent from "../../UI/TextContent";

const Text = ({title, content}) => {
    return (
        <div className="text-container-element">
            <Title1 className="text-container-title">{title}</Title1>
            <TextContent className="text-container-article">{content}</TextContent>
        </div>
    );
};

export default Text;
