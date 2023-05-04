import "./AIInfo.css";
import AITextArea from "./AITextArea";

import Robot from "../../imgs/robot.svg";

const AIInfo = () => {
    return (
        <div className="aiinfo">
            <AITextArea/>
            <img className="imgAi" src={Robot} alt="nothing else metter"/>
        </div>
    );
};

export default AIInfo;
