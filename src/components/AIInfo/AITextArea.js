import "./AITextArea.css";
import TextContent from "../../UI/TextContent";
import Title1 from "../../UI/Title1";

const AITextArea = ({article}) => {
    const textElements = article.paragraphs.map((a, index) => {
        return (<TextContent key={index}>{a}</TextContent>);
    });
    return (
        <div className="aitextarea">
            <Title1>{article.title}</Title1>
            {textElements}
        </div>
    );
};

export default AITextArea;
