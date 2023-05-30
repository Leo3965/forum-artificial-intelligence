import AiGlobe from "../imgs/ai-globe.svg";
import Ches from "../imgs/pexels-kindel-media-8566474.jpg";
import Robot1 from "../imgs/robot1.svg";
import marina from "../imgs/marina.jpeg";
import maria from "../imgs/maria.jpeg";
import felipe from "../imgs/felipe.jpg";
import laura from "../imgs/laura.jpg";
import leo from "../imgs/leo.jpg";
import luciano from "../imgs/luciano.jpg";
import natalia from "../imgs/natalia.png";
import kelen from "../imgs/kelen.jpg";
import robotProf from "../imgs/robot-prof.jpg";

const English = {
    header: {
        home: "Home",
        about: "About"
    },
    home: {
        subTitle: "A3 - Artificial Intelligence",
        titles: ["Instrumental English", "& Connectivity"],
        aiInfo: {
            subTitle: "AI fundamentals",
            title: "What is Artificial Intelligence?",
            content: "There are a number of different forms of learning as applied to artificial intelligence. The simplest is learning by trial and error. For example, a simple computer program for solving mate-in-one chess problems might try moves at random until a mate is found. The program might then store the solution with the position so that the next time the computer encountered the same position, it would recall the solution. This simple memorizing of individual items and procedures known as rote learning is relatively easy to implement on a computer. More challenging is the problem of implementing what is called generalization. Generalization involves applying past experience to analogous new situations. For example, a program that learns the past tense of regular English verbs by rote will not be able to produce the past tense of a word such as jump unless it previously had been presented with jumped, whereas a program that is able to generalize can learn the “add ed” rule and so form the past tense of jump based on experience with similar verbs",
            info1: {
                title: "instinctual",
                content: "All but the simplest human behavior is ascribed to intelligence (instinctual), while even the most complicated insect behavior is never taken as an indication of intelligence"
            },
            info2: {
                title: "Psychologists",
                content: "generally do not characterize human intelligence by just one trait but by the combination of many diverse abilities. Research in AI has focused chiefly on the following components of intelligence: learning, reasoning, problem-solving, perception, and using language",
            }
        },
        cards: [{
            subTitle: "",
            title: "What is it for ?",
            content: "Among the numerous objectives of artificial intelligence, the main one is to develop technologies that have the ability to simulate human actions and think logically. " +
                "And with that, create solutions for the most varied aspects of our life. The modernization of companies is one of the most evident practical results of the use of these technologies. " +
                "However, there are many other areas enjoying those benefits, such as health with medical diagnostic programs, entertainment, automation, user service, online retail, predictive maintenance, " +
                "games, computer programs, security applications for systems information, robotics (helper robots), devices for reconnaissance handwriting and voice recognition.",
            image: AiGlobe
        }, {
            subTitle: "",
            title: "How did it come about ?",
            content: "Starting in the 1940s, research around this incipient science was developed just to try to find new functionalities for the computer, still in design. " +
                "With the advent of World War II, the need also arose to develop technology to boost the war industry. Over time, several lines of study of AI have emerged, " +
                "one of which is biology, which studies the development of concepts that are intended to imitate human neural networks. " +
                "In fact, it was in the 60s when this science is called Artificial Intelligence and the biological line researchers believed that machines were possible to perform human tasks complex, like reasoning. " +
                "After a difficult period, the study of neural networks returns to the surface in the 1980s, but it is in the 1990s that she has a great impetus, truly consolidating it as the basis of studies on AI." +
                "Alan Turing is considered the father of Artificial Intelligence for being a pioneer in suggesting that machines could do what humans do: use available information to solve problems and make decision " +
                "is was the structure of his article Computing Machinery and Intelligence, published in 1950 and in which the scientist discussed how to build intelligent machines and how to test this intelligence. " +
                "In the article, Turing described an “imitation game”, where a human should be able to distinguish in written dialogue whether he is talking to a man or a machine. Over the years, the material has come " +
                "to be known as “the first source of questioning the boundary between human and machine”. “The Imitation Game”, a film starring Benedict Cumberbatch, is a biography of Alan Turing. The film shows how the " +
                "scientist solved the Enigma Code, which the Germans used during the war to transmit coded messages.",
            image: Ches
        }
        ],
        textwrapper: [
            {
                title: "Machine learning",
                content: "is a line of study inside the AI umbrella, where the machine uses data to learn how to do a task without being specifically programmed to. The ML allows the computer to “learn” how to do a task in its most efficient way"
            }, {
                title: "Deep learning",
                content: "is a subcategory of Machine learning based on neural networks which allow the DL to learn from a large amount of data, making it more accurate"
            }, {
                title: "Natural Language Processing",
                content: "is a branch of AI that uses machine learning and Deep learning to translate the human form of communication to the machine, allowing the person’s message to be comprehended. One of the most common uses of the NLP is Speech recognition, which is when the machine converts the human voice into text data so that the computer can “understand” the command"
            }
        ],
        aiVideo: {
            title: "What is Artificial Intelligence?",
            content: "Science fiction has certainly familiarized the world with the concept of artificial intelligence. But outside of Hollywood…what is A.I. and what can it actually do?",
            video: "https://www.youtube.com/embed/c0m6yaGlZh4"
        },
        article: {
            title: "Applications of Artificial Intelligence\n",
            paragraphs: [
                "The applications for artificial intelligence are endless. The technology can be applied to many different sectors and industries. AI is being tested and used in the healthcare industry for suggesting drug dosages, identifying treatments, and for aiding in surgical procedures in the operating room.\n" +
                "" +
                "Other examples of machines with artificial intelligence include computers that play chess and self-driving cars. Each of these machines must weigh the consequences of any action they take, as each action will impact the end result. In chess, the end result is winning the game. For self-driving cars, the computer system must account for all external data and compute it to act in a way that prevents a collision.\n" +
                "\n" +
                "Artificial intelligence also has applications in the financial industry, where it is used to detect and flag activity in banking and finance such as unusual debit card usage and large account deposits—all of which help a bank's fraud department. Applications for AI are also being used to help streamline and make trading easier. This is done by making supply, demand, and pricing of securities easier to estimate.\n",
            ]
        }
    },
    about: {
        hero: {
            subTitle: "A3",
            titles: ["Instrumental English", "& Connectivity"]
        },
        studentTitle: "Members",
        students: [
            {
                name: "Leonardo Oliveira Freitas",
                ra: 819143458,
                photo: leo
            },
            {
                name: "Felipe Rocha Pereira",
                ra: 819166993,
                photo: felipe
            },
            {
                name: "Nathália Cristina de Oliveira Bastos",
                ra: 822160984,
                photo: natalia
            },
            {
                name: "Luciano Souza Santos",
                ra: 819120717,
                photo: luciano
            },
            {
                name: "Marina Francischetti Mariano",
                ra: 12522196868,
                photo: marina
            },
            {
                name: "Juliana Reis de Souza",
                ra: 819226027,
                photo: Robot1
            },
            {
                name: "Laura Nascimento Carvalho",
                ra: 125221101241,
                photo: laura
            },
            {
                name: "Maria Luiza Moreira Pereira",
                ra: 12522196940,
                photo: maria
            }
        ],
        professorTitle: "Professors",
        professors: [
            {
                name: "Kelen Cistina Sant Anna de Lima",
                photo: kelen
            },
            {
                name: "Silvana Diniz",
                photo: robotProf
            }
        ]
    }
};

export default English;
