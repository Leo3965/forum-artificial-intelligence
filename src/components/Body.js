import Hero from "./Hero/Hero";
import InfoCard from "./InfoCard/InfoCard";
import Article from "./Article/Article";
import AIInfo from "./AIInfo/AIInfo";
import AIVideo from "./AIVideo/AIVideo";

const Body = () => {
    return (
        <>
            <Hero/>
            <InfoCard/>
            <Article/>
            <AIVideo/>
            <AIInfo/>
        </>
    );
};

export default Body;
