import "./AICard.css";
import Robot from "../../imgs/robot-head.svg";

import SubTitle from "../../UI/SubTitle";
import Title2 from "../../UI/Title2";
import TextContent from "../../UI/TextContent";

import {Lightbulb, RocketTakeoff} from "react-bootstrap-icons";
import Title3 from "../../UI/Title3";

const AICard = () => {
    return (
        <div className="aicard">
            <div className="card__title">
                <SubTitle>WHO WE ARE</SubTitle>
                <Title2>We Help To Get Solutions</Title2>
                <TextContent>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse nunc lorem, rutrum id enim a,
                    efficitur hendrerit dui. Quisque et ullamcorper felis, id interdum turpis. Nunc mi dolor, varius sit
                    amet ipsum finibus, interdum accumsan purus. Nulla elit urna, venenatis ac imperdiet id, rhoncus
                    consequat arcu. Suspendisse faucibus eu erat sed aliquam. Cras quis justo velit. Curabitur ultrices
                    tortor quam, eu posuere mauris euismod ut. Nam eget odio justo. Phasellus dapibus mi in enim
                    vulputate, a consectetur elit dapibus.
                </TextContent>
            </div>

            <div className="sub-cards">
                <div className="sub-card">
                    <RocketTakeoff size={90} color="#FF7000"/>
                    <div>
                        <Title3>Lorem Ipsum</Title3>
                        <TextContent className="small">
                            Suspendisse vulputate suscipit est ac molestie. Suspendisse faucibus est at hendrerit
                            fringilla. Donec efficitur porta massa, vitae imperdiet justo vehicula nec.
                        </TextContent>
                    </div>
                </div>

                <div className="sub-card">
                    <Lightbulb size={90} color="#FF7000"/>
                    <div>
                        <Title3>Lorem Ipsum</Title3>
                        <TextContent className="small align">
                            Suspendisse vulputate suscipit est ac molestie. Suspendisse faucibus est at hendrerit
                            fringilla. Donec efficitur porta massa, vitae imperdiet justo vehicula nec.
                        </TextContent>
                    </div>
                </div>

                <img alt="" className="robot__ai" src={Robot}/>

            </div>
        </div>
    );
};

export default AICard;
