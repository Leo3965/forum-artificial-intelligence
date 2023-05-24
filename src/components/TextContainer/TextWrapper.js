import "./TextWrapper.css";
import Text from "./Text";

const TextWrapper = ({textwrapper}) => {
    const texts = textwrapper.map((t, index) => {
        return <Text title={t.title} content={t.content} key={index}/>
    });

    return (
        <section className="text-container">
            {texts}
        </section>
    );
};

export default TextWrapper;
