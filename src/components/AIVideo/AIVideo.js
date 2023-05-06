import "./AIVideo.css";
import Title1 from "../../UI/Title1";
import TextContent from "../../UI/TextContent";

const AIVideo = ({aiVideo}) => {
    return (
        <section className="aivideo">
            <div className="videotext">
                <Title1>{aiVideo.title}</Title1>
                <TextContent>{aiVideo.content}</TextContent>
            </div>
            <iframe className="videoplayer"
                    title="video"
                    src={aiVideo.video}>
            </iframe>
        </section>
    );
};

export default AIVideo;
