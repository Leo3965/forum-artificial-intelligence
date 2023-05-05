import "./About.css";
import Header from "../components/Header/Header";
import AboutHero from "../components/Hero/AboutHero";
import Body from "../components/Body";
import StudentBox from "../components/StudentBox/StudentBox";

const About = () => {
    return (
        <>
            <Header/>
            <Body>
                <AboutHero/>
                <StudentBox/>
            </Body>
        </>
    );
};

export default About;
