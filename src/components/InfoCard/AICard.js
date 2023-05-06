import "./AICard.css";
import Robot from "../../imgs/robot-head.svg";

import SubTitle from "../../UI/SubTitle";
import Title2 from "../../UI/Title2";
import TextContent from "../../UI/TextContent";

import {Lightbulb, RocketTakeoff} from "react-bootstrap-icons";
import Title3 from "../../UI/Title3";

const AICard = ({aiInfo}) => {
    return (
        <div className="aicard">
            <div className="card__title">
                <SubTitle>{aiInfo.subTitle}</SubTitle>
                <Title2>{aiInfo.title}</Title2>
                <TextContent>{aiInfo.content}</TextContent>
            </div>

            <div className="sub-cards">
                <div className="sub-card">
                    <RocketTakeoff className="ai-icon"/>
                    <div>
                        <Title3>{aiInfo.info1.title}</Title3>
                        <TextContent className="small align">{aiInfo.info1.content}</TextContent>
                    </div>
                </div>

                <div className="sub-card">
                    <Lightbulb className="ai-icon"/>
                    <div>
                        <Title3>{aiInfo.info2.title}</Title3>
                        <TextContent className="small align">{aiInfo.info2.content}</TextContent>
                    </div>
                </div>

                <img alt="" className="robot__ai" src={Robot}/>

            </div>
        </div>
    );
};

export default AICard;
