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
                    src="https://www.youtube.com/embed/tgbNymZ7vqY">
            </iframe>
        </section>
    );
};

export default AIVideo;
