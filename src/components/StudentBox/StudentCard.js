import "./StudentCard.css";
import Title3 from "../../UI/Title3";
import TextContent from "../../UI/TextContent";

const StudentCard = ({name, ra, photo}) => {
    return (
        <div className="student-card">
            <img className="student-img" alt="nothing" src={photo}/>
            <div className="student-text">
                <Title3>{name}</Title3>
                <TextContent className="small">
                    <span className="student-ra">RA: </span>
                    {ra}
                </TextContent>
            </div>
        </div>
    );
};

export default StudentCard;
