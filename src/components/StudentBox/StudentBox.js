import "./StudentBox.css";
import StudentCard from "./StudentCard";
import Title2 from "../../UI/Title2";

import Robot1 from "../../imgs/robot1.svg";
import Robot2 from "../../imgs/robot2.svg";
import Robot3 from "../../imgs/robot3.svg";
import Robot4 from "../../imgs/robot4.svg";
import Robot5 from "../../imgs/robot5.svg";
import Robot6 from "../../imgs/robot6.svg";

const StudentBox = () => {
    return (
        <section className="student-box">
            <Title2>Integrantes</Title2>
            <div className="student-cards">
                <StudentCard nome="Leonardo Oliveira Freitas" ra="819143458" photo={Robot1}/>
                <StudentCard nome="Felipe" ra="12345678" photo={Robot2}/>
                <StudentCard nome="Natalia" ra="87654321" photo={Robot3}/>
                <StudentCard nome="Luciano" ra="10293845" photo={Robot4}/>
                <StudentCard nome="Marina" ra="123" photo={Robot5}/>
                <StudentCard nome="Juliana" ra="456" photo={Robot6}/>
                <StudentCard nome="Laura" ra="456" photo={Robot6}/>
                <StudentCard nome="Mari" ra="456" photo={Robot6}/>
            </div>
        </section>
    );
};

export default StudentBox;
