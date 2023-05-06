import "./AboutHero.css";
import SubTitle from "../../UI/SubTitle";
import Title1 from "../../UI/Title1";

const AboutHero = ({hero}) => {
    const titlesElement = hero.titles.map((t, index) => {
        return (<Title1 key={index}>{t}</Title1>);
    });

    return (
        <div className="about-hero">
            <div className="container__ai">
                <div className="grid-1">
                    <section className="section__ai">
                        <SubTitle className="purple">{hero.subTitle}</SubTitle>
                        {titlesElement}
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

export default AboutHero;
