import "./InfoCard.css";
import AICard from "./AICard";

const InfoCard = ({aiInfo}) => {
    return (
        <div className="info-card">
            <AICard aiInfo={aiInfo}/>
        </div>
    );
};

export default InfoCard;
