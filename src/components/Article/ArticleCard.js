import "./ArticleCard.css";

import SubTitle from "../../UI/SubTitle";
import Title2 from "../../UI/Title2";
import TextContent from "../../UI/TextContent";

const ArticleCard = ({logo, subTitle, title, content, isImageFirst}) => {
    return (
        <section className="articlecard">

            {isImageFirst && (
                <>
                    <AIImage logo={logo}/>
                    <AIText subTitle={subTitle} title={title} content={content}/>
                </>
            )}

            {!isImageFirst  && (
                <>
                    <AIText subTitle={subTitle} title={title} content={content}/>
                    <AIImage logo={logo}/>
                </>
            )}

        </section>
    );
};

const AIImage = ({logo}) => {
    return (
        <img src={logo} className="aiimg" alt="nothing"/>
    );
};

const AIText = ({subTitle, title, content}) => {
    return (
        <div className="aitext">
            <SubTitle>{subTitle}</SubTitle>
            <Title2>{title}</Title2>
            <TextContent className="align">{content}</TextContent>
        </div>
    );
};

export default ArticleCard;
