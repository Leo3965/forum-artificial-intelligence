import "./AIInfo.css";
import AITextArea from "./AITextArea";

import Robot from "../../imgs/robot.svg";

const AIInfo = ({article}) => {
    return (
        <div className="aiinfo">
            <AITextArea article={article}/>
            <img className="imgAi" src={Robot} alt="nothing else metter"/>
        </div>
    );
};

export default AIInfo;
