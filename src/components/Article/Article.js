import "./Article.css";
import ArticleCard from "./ArticleCard";

const Article = ({cards}) => {
    const isEven = (num) => {
        return num % 2 === 0;
    };

    const cardsElem = cards.map((c, index) => {
        return <ArticleCard
            key={index}
            logo={c.image}
            subTitle={c.subTitle}
            title={c.title}
            content={c.content}
            isImageFirst={isEven(index)}
        />
    });
    return (
        <div className="article">
            {cardsElem}
        </div>
    );
};

export default Article;
