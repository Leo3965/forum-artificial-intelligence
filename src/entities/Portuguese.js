import AiGlobe from "../imgs/ai-globe.svg";
import Ches from "../imgs/pexels-kindel-media-8566474.jpg";
import Robot1 from "../imgs/robot1.svg";
import Robot2 from "../imgs/robot2.svg";
import Robot3 from "../imgs/robot3.svg";
import Robot4 from "../imgs/robot4.svg";
import Robot5 from "../imgs/robot5.svg";
import Robot6 from "../imgs/robot6.svg";

const Portuguese = {
    header: {
        home: "Início",
        about: "Sobre"
    },
    home: {
        subTitle: "A3 - Inteligencia artificial",
        titles: ["Inglês Instrumental", "e Conectividade"],
        aiInfo: {
            subTitle: "Fundamentos da IA",
            title: "O que é Inteligência Artificial?",
            content: "Existem várias formas diferentes de aprendizado aplicadas à inteligência artificial. O mais simples é aprender por tentativa e erro. Por exemplo, um programa de computador simples para resolver problemas de xadrez mate-in-one pode tentar movimentos aleatórios até que um mate seja encontrado. O programa pode então armazenar a solução com a posição para que, na próxima vez que o computador encontrar a mesma posição, ele recupere a solução. Essa simples memorização de itens e procedimentos individuais - conhecida como aprendizado mecânico - é relativamente fácil de implementar em um computador. Mais desafiador é o problema de implementar o que é chamado de generalização. A generalização envolve a aplicação de experiências passadas a novas situações análogas. Por exemplo, um programa que aprende o pretérito de verbos regulares em inglês por memorização não será capaz de produzir o pretérito de uma palavra como jump, a menos que tenha sido previamente apresentado com jumped, enquanto um programa capaz de generalizar pode aprender a regra “add ed” e assim formar o pretérito de pular com base na experiência com verbos semelhantes",
            info1: {
                title: "instintiva",
                content: "Todos os comportamentos humanos, exceto o mais simples, são atribuídos à inteligência (instintiva), enquanto mesmo o comportamento mais complicado dos insetos nunca é considerado uma indicação de inteligência"
            },
            info2: {
                title: "Psicólogos",
                content: "geralmente não caracterizam a inteligência humana por apenas um traço, mas pela combinação de muitas habilidades diversas. A pesquisa em IA tem se concentrado principalmente nos seguintes componentes da inteligência: aprendizado, raciocínio, resolução de problemas, percepção e uso da linguagem"
            }
        },
        cards: [
            {
                subTitle: "ML",
                title: "Aprendizado de máquina",
                content: "é uma linha de estudo dentro do guarda-chuva da IA, onde a máquina usa dados para aprender como realizar uma tarefa sem ser especificamente programada para isso. O ML permite que o computador “aprenda” como fazer uma tarefa da maneira mais eficiente",
                image: AiGlobe
            },
            {
                subTitle: "DL",
                title: "Aprendizado profundo",
                content: "é uma subcategoria de aprendizado de máquina baseado em redes neurais que permite que o DL aprenda com uma grande quantidade de dados, tornando-o mais preciso",
                image: Ches
            }, {
                subTitle: "NLP",
                title: "Processamento de linguagem natural",
                content: "é um ramo da IA ​​que utiliza aprendizado de máquina e aprendizado profundo para traduzir a forma de comunicação humana para a máquina, permitindo que a mensagem da pessoa seja compreendida. Um dos usos mais comuns do NLP é o reconhecimento de fala, que é quando a máquina converte a voz humana em dados de texto para que o computador possa “entender” o comando",
                image: Ches,
            }
        ],
        textwrapper: [
            {
                title: "Para que serve ?",
                content: "Dentre os inúmeros objetivos da inteligência artificial, o principal é desenvolver tecnologias que tenham a capacidade de simular ações humanas e pensar logicamente.\n" +
                    "E com isso criar soluções para os mais variados aspectos da nossa vida.\n" +
                    "A modernização das empresas é um dos resultados práticos mais evidentes do uso dessas tecnologias.\n" +
                    "Porém, existem muitas outras áreas usufruindo desses benefícios, como saúde com programas de diagnóstico médico, entretenimento, automação, atendimento ao usuário, varejo online, manutenção preditiva, jogos, programas de computador, aplicativos de segurança para sistemas\n" +
                    "informação, robótica (robôs auxiliares), dispositivos de reconhecimento\n" +
                    "caligrafia e reconhecimento de voz"
            }, {
                title: "Como surgiu ?",
                content: "A partir da década de 1940, as pesquisas em torno dessa ciência incipiente foram desenvolvidas apenas para tentar encontrar novas funcionalidades para o computador, ainda em projeto. Com o advento da Segunda Guerra Mundial, surgiu também a necessidade de desenvolver tecnologia para impulsionar a indústria bélica.\n" +
                    "Ao longo do tempo, surgiram diversas linhas de estudo da IA, sendo uma delas a biologia, que estuda o desenvolvimento de conceitos que visam imitar as redes neurais humanas.\n" +
                    "De fato, foi na década de 60 que essa ciência é chamada de Inteligência Artificial e os pesquisadores da linha biológica acreditavam que as máquinas eram capazes de realizar tarefas humanas complexas, como o raciocínio.\n" +
                    "Após um período difícil, o estudo das redes neurais volta à tona na década de 1980, mas é na década de 1990 que ela ganha um grande impulso, consolidando-se verdadeiramente como a base dos estudos sobre IA.\n" +
                    "Alan Turing é considerado o pai da Inteligência Artificial por ser um pioneiro ao sugerir que as máquinas poderiam fazer o que os humanos fazem: usar as informações disponíveis para resolver problemas e tomar decisões. Essa foi a estrutura de seu artigo \"Computing Machinery and Intelligence\", publicado em 1950 e no qual o cientista discutiu como construir máquinas inteligentes e como testar essa inteligência.\n" +
                    "No artigo, Turing descreveu um “jogo de imitação”, onde um humano deveria ser capaz de distinguir em um diálogo escrito se está falando com um homem ou com uma máquina. Ao longo dos anos, o material passou a ser conhecido como “a primeira fonte de questionamento da fronteira entre humano e máquina”.\n" +
                    "\n" +
                    "“O Jogo da Imitação”, filme estrelado por Benedict Cumberbatch, é uma biografia de Alan Turing. O filme mostra como o cientista resolveu o Código Enigma, que os alemães usaram durante a guerra para transmitir mensagens codificadas"
            }
        ],
        aiVideo: {
            title: "Etiam Nulla Lectus Amet Nunc",
            content: "Neque, Puviram Vestiburum Non All quam",
            video: "https://www.youtube.com/embed/6OKXZ0aF8UQ"
        },
        article: {
            title: "Etiam Nulla Lectus Amet",
            paragraphs: [
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras venenatis tempus velit, sit amet gravida velit iaculis ac. Nunc justo nisi, ullamcorper a pharetra sed, fringilla id velit. Curabitur vulputate augue a consequat suscipit. Praesent vulputate ac ante sit amet dapibus. Morbi tincidunt imperdiet nisl, sit amet vehicula neque. Donec dapibus sagittis est. Sed sit amet risus sed neque iaculis vestibulum eu vitae lacus. Ut pulvinar ultrices rutrum. In in scelerisque augue. Praesent eu justo eros. Praesent molestie, massa vel efficitur bibendum, risus lectus molestie sapien, quis posuere leo tellus vel dolor. Praesent lacinia vitae leo non accumsan.",
                "Ut ornare hendrerit consequat. Vivamus vel nibh in risus efficitur luctus. Nullam commodo, libero eget accumsan consequat, nulla turpis sodales ligula, non laoreet neque neque ac odio. Nullam consectetur lacinia mauris eget pharetra. In dignissim molestie velit eu tincidunt. Proin vitae congue lorem, id dignissim lorem. Integer fermentum odio quis urna mollis vehicula. Suspendisse elementum lorem sit amet tristique tincidunt. Ut in purus quam. Sed at nisi volutpat, mattis mi vel, fringilla est. Quisque ligula ante, faucibus ac nibh ullamcorper, congue ornare felis. Quisque eu nibh fringilla, scelerisque lorem et, commodo dolor. Nulla facilisi. Fusce tellus magna, commodo nec orci in, placerat dapibus ex.",
                "In in magna nec libero gravida aliquet eget dictum lectus. Nulla blandit sagittis ipsum, ac mollis urna egestas a. Integer faucibus odio vel sapien convallis, et finibus tellus tristique. Nulla facilisi. Maecenas felis dui, faucibus ut tellus non, malesuada fermentum mauris. Etiam in imperdiet velit. Sed sit amet nisl libero. Sed ultricies nisi at ligula tincidunt eleifend. Sed pharetra nulla id ligula aliquet dictum. Donec sit amet ante eleifend, placerat est ac, laoreet odio. Duis malesuada quam sit amet leo ultricies, a volutpat neque auctor. Fusce finibus non ligula sit amet pulvinar. Suspendisse blandit tincidunt nisl, et varius risus. Nunc eget elit ac libero finibus tincidunt non a sapien.",
            ]
        }
    },
    about: {
        hero: {
            subTitle: "A3",
            titles: ["Inglês Instrumental &", "Conectividade"]
        },
        studentTitle: "Integrantes",
        students: [
            {
                name: "Leonardo Oliveira Freitas",
                ra: 819143458,
                photo: Robot1
            },
            {
                name: "Nathália Cristina de Oliveira Bastos",
                ra: 822160984,
                photo: Robot2
            },
            {
                name: "Felipe Rocha Pereira",
                ra: 819166993,
                photo: Robot3
            },
            {
                name: "Luciano Souza Santos",
                ra: 819120717,
                photo: Robot4
            },
            {
                name: "Juliana",
                ra: 0,
                photo: Robot5
            },
            {
                name: "Marina Francischetti Mariano",
                ra: 12522196868,
                photo: Robot5
            },
            {
                name: "Laura Nascimento Carvalho",
                ra: 125221101241,
                photo: Robot6
            },
            {
                name: "Maria Luiza Moreira Pereira",
                ra: 12522196940,
                photo: Robot6
            }
        ]
    }
}

export default Portuguese;
