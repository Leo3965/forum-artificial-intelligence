import Header from "../components/Header/Header";

import "./Home.css";
import Body from "../components/Body";
import Hero from "../components/Hero/Hero";
import InfoCard from "../components/InfoCard/InfoCard";
import Article from "../components/Article/Article";
import AIVideo from "../components/AIVideo/AIVideo";
import AIInfo from "../components/AIInfo/AIInfo";

function Home() {
    return (
        <div className="home">
            <Header/>
            <Body>
                <Hero/>
                <InfoCard/>
                <Article/>
                <AIVideo/>
                <AIInfo/>
            </Body>
        </div>
    );
}

export default Home;
