import "./Hero.css";
import SubTitle from "../../UI/SubTitle";
import Title1 from "../../UI/Title1";

const Hero = () => {
    return (
        <div className="hero__ai">
            <div className="container__ai">
                <div className="grid-1">
                    <section className="section__ai">
                        <SubTitle>AI & Robotics</SubTitle>
                        <Title1>
                            Next Level <br/>
                            Machine <br/>
                            Intelligence
                        </Title1>
                    </section>
                </div>
                <div className="grid-2"></div>
                <div className="grid-3"></div>
                <div className="grid-4">
                </div>
            </div>
        </div>
    );
};

export default Hero;