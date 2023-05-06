import "./StudentBox.css";
import StudentCard from "./StudentCard";
import Title2 from "../../UI/Title2";

const StudentBox = ({students, title}) => {
    const studentElements = students.map((s, index) => {
        return (<StudentCard
            key={index}
            name={s.name}
            ra={s.ra}
            photo={s.photo}
        />);
    });
    return (
        <section className="student-box">
            <Title2>{title}</Title2>
            <div className="student-cards">{studentElements}</div>
        </section>
    );
};

export default StudentBox;
