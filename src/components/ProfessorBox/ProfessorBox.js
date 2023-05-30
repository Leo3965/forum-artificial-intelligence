import "./ProfessorBox.css";
import ProfessorCard from "./ProfessorCard";
import Title2 from "../../UI/Title2";

const ProfessorBox = ({professors, title}) => {
    const professorsElements = professors.map((s, index) => {
        return (<ProfessorCard
            key={index}
            name={s.name}
            photo={s.photo}
        />);
    });
    return (
        <section className="student-box">
            <Title2>{title}</Title2>
            <div className="student-cards">{professorsElements}</div>
        </section>
    );
};

export default ProfessorBox;
