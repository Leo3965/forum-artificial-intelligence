import "./About.css";
import Header from "../components/Header/Header";
import AboutHero from "../components/Hero/AboutHero";
import Body from "../components/Body";
import StudentBox from "../components/StudentBox/StudentBox";
import {useState} from "react";
import English from "../entities/English";
import Portuguese from "../entities/Portuguese";
import ProfessorBox from "../components/ProfessorBox/ProfessorBox";

const About = () => {
    const [language, setLanguage] = useState(English);
    const handleLanguageClick = (lan) => {
        const selectLanguage = lan === "EN" ? English : Portuguese;
        setLanguage(selectLanguage);
    };


    return (
        <>
            <Header header={language.header} handleLanguageClick={handleLanguageClick}/>
            <Body>
                <AboutHero hero={language.about.hero}/>
                <ProfessorBox professors={language.about.professors} title={language.about.professorTitle}/>
                <StudentBox students={language.about.students} title={language.about.studentTitle}/>
            </Body>
        </>
    );
};

export default About;
