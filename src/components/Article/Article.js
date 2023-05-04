import "./Article.css";
import ArticleCard from "./ArticleCard";
import AiGlobe from "../../imgs/ai-globe.svg";
import Ches from "../../imgs/pexels-kindel-media-8566474.jpg";

const Article = () => {
    const content = "" +
        "Nunc at dolor mollis, pulvinar nisi vitae, finibus nunc. Fusce ultrices purus orci, eget porttitor\n" +
        "mauris blandit non. Morbi consequat erat diam, vitae rutrum urna venenatis non. Nunc tortor lacus,\n" +
        "bibendum nec facilisis in, sodales vitae metus. Nullam suscipit quis leo a hendrerit. Duis vel elit\n" +
        "sapien. Pellentesque luctus suscipit dignissim. Etiam efficitur tortor leo, imperdiet consequat odio\n" +
        "molestie eu. Nullam et ipsum vehicula, molestie orci vitae, tristique arcu. Curabitur eget aliquam\n" +
        "libero, at egestas felis. Mauris ac vulputate erat. Fusce turpis nulla, lobortis a rhoncus\n" +
        "condimentum, fringilla vitae neque. Phasellus mollis vehicula fermentum.";
    return (
        <div className="article">
            <ArticleCard logo={AiGlobe} subTitle="Lorem" title="AI Robots Technology" content={content} isImageFirst={true}/>
            <ArticleCard logo={Ches} subTitle="Lorem" title="AI Robots Technology" content={content} isImageFirst={false}/>
        </div>
    );
};

export default Article;
