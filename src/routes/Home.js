import Header from "../components/Header/Header";

import "./Home.css";
import Body from "../components/Body";
import Hero from "../components/Hero/Hero";
import InfoCard from "../components/InfoCard/InfoCard";
import Article from "../components/Article/Article";
import AIVideo from "../components/AIVideo/AIVideo";
import AIInfo from "../components/AIInfo/AIInfo";
import {useState} from "react";
import English from "../entities/English";
import Portuguese from "../entities/Portuguese";
import TextWrapper from "../components/TextContainer/TextWrapper";

function Home() {
    const [language, setLanguage] = useState(English);
    const handleLanguageClick = (lan) => {
        const selectLanguage = lan === "EN" ? English : Portuguese;
        setLanguage(selectLanguage);
    };


    return (
        <div className="home">
            <Header header={language.header} handleLanguageClick={handleLanguageClick}/>
            <Body>
                <Hero home={language.home}/>
                <InfoCard aiInfo={language.home.aiInfo}/>
                <Article cards={language.home.cards}/>
                <TextWrapper textwrapper={language.home.textwrapper}/>
                <AIVideo aiVideo={language.home.aiVideo}/>
                <AIInfo article={language.home.article}/>
            </Body>
        </div>
    );
}

export default Home;
