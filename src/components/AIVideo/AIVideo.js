import "./AIVideo.css";
import Title1 from "../../UI/Title1";
import TextContent from "../../UI/TextContent";

const AIVideo = () => {
    return (
        <section className="aivideo">
            <div className="videotext">
                <Title1>
                    Etiam Nulla Lectus Amet Nunc
                </Title1>
                <TextContent>
                    Neque, Puviram Vestiburum Non All quam
                </TextContent>
            </div>
            <iframe className="videoplayer"
                    title="video"
                    src="https://www.youtube.com/embed/6OKXZ0aF8UQ">
            </iframe>
        </section>
    );
};

export default AIVideo;
