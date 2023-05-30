import "./ProfessorCard.css";
import Title3 from "../../UI/Title3";

const ProfessorCard = ({name, photo}) => {
    return (
        <div className="student-card">
            <img className="student-img" alt="nothing" src={photo}/>
            <div className="student-text">
                <Title3>{name}</Title3>
            </div>
        </div>
    );
};

export default ProfessorCard;
