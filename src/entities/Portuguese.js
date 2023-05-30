import AiGlobe from "../imgs/ai-globe.svg";
import Ches from "../imgs/pexels-kindel-media-8566474.jpg";
import Robot1 from "../imgs/robot1.svg";
import maria from "../imgs/maria.jpeg";
import leo from "../imgs/leo.jpg";
import natalia from "../imgs/natalia.png";
import felipe from "../imgs/felipe.jpg";
import luciano from "../imgs/luciano.jpg";
import laura from "../imgs/laura.jpg";
import kelen from "../imgs/kelen.jpg";
import marina from "../imgs/marina.jpeg";
import robotProf from "../imgs/robot-prof.jpg";

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
                subTitle: "",
                title: "Para que serve ?",
                content: "Dentre os inúmeros objetivos da inteligência artificial, o principal é desenvolver tecnologias que tenham a capacidade de simular ações humanas e pensar logicamente.\n" +
                    "E com isso criar soluções para os mais variados aspectos da nossa vida.\n" +
                    "A modernização das empresas é um dos resultados práticos mais evidentes do uso dessas tecnologias.\n" +
                    "Porém, existem muitas outras áreas usufruindo desses benefícios, como saúde com programas de diagnóstico médico, entretenimento, automação, atendimento ao usuário, varejo online, manutenção preditiva, jogos, programas de computador, aplicativos de segurança para sistemas\n" +
                    "informação, robótica (robôs auxiliares), dispositivos de reconhecimento\n" +
                    "caligrafia e reconhecimento de voz",
                image: AiGlobe
            },
            {
                subTitle: "",
                title: "Como surgiu ?",
                content: "A partir da década de 1940, as pesquisas em torno dessa ciência incipiente foram desenvolvidas apenas para tentar encontrar novas funcionalidades para o computador, ainda em projeto. Com o advento da Segunda Guerra Mundial, surgiu também a necessidade de desenvolver tecnologia para impulsionar a indústria bélica.\n" +
                    "Ao longo do tempo, surgiram diversas linhas de estudo da IA, sendo uma delas a biologia, que estuda o desenvolvimento de conceitos que visam imitar as redes neurais humanas.\n" +
                    "De fato, foi na década de 60 que essa ciência é chamada de Inteligência Artificial e os pesquisadores da linha biológica acreditavam que as máquinas eram capazes de realizar tarefas humanas complexas, como o raciocínio.\n" +
                    "Após um período difícil, o estudo das redes neurais volta à tona na década de 1980, mas é na década de 1990 que ela ganha um grande impulso, consolidando-se verdadeiramente como a base dos estudos sobre IA.\n" +
                    "Alan Turing é considerado o pai da Inteligência Artificial por ser um pioneiro ao sugerir que as máquinas poderiam fazer o que os humanos fazem: usar as informações disponíveis para resolver problemas e tomar decisões. Essa foi a estrutura de seu artigo \"Computing Machinery and Intelligence\", publicado em 1950 e no qual o cientista discutiu como construir máquinas inteligentes e como testar essa inteligência.\n" +
                    "No artigo, Turing descreveu um “jogo de imitação”, onde um humano deveria ser capaz de distinguir em um diálogo escrito se está falando com um homem ou com uma máquina. Ao longo dos anos, o material passou a ser conhecido como “a primeira fonte de questionamento da fronteira entre humano e máquina”.\n" +
                    "\n" +
                    "“O Jogo da Imitação”, filme estrelado por Benedict Cumberbatch, é uma biografia de Alan Turing. O filme mostra como o cientista resolveu o Código Enigma, que os alemães usaram durante a guerra para transmitir mensagens codificadas",
                image: Ches
            }
        ],
        textwrapper: [
            {
                title: "Aprendizado de máquina",
                content: "é uma linha de estudo dentro do guarda-chuva da IA, onde a máquina usa dados para aprender como realizar uma tarefa sem ser especificamente programada para isso. O ML permite que o computador “aprenda” como fazer uma tarefa da maneira mais eficiente"
            }, {
                title: "Aprendizado profundo",
                content: "é uma subcategoria de aprendizado de máquina baseado em redes neurais que permite que o DL aprenda com uma grande quantidade de dados, tornando-o mais preciso"
            }
        ],
        aiVideo: {
            title: "O que é Inteligência Artificial?",
            content: "A ficção científica certamente familiarizou o mundo com o conceito de inteligência artificial. Mas fora de Hollywood… o que é A.I. e o que ele pode realmente fazer?",
            video: "https://www.youtube.com/embed/c0m6yaGlZh4"
        },
        article: {
            title: "Aplicações de Inteligência Artificial",
            paragraphs: [
                "As aplicações da inteligência artificial são infinitas. A tecnologia pode ser aplicada em diversos setores e indústrias. A IA está sendo testada e usada no setor de saúde para sugerir dosagens de medicamentos, identificar tratamentos e auxiliar em procedimentos cirúrgicos na sala de cirurgia. Outros exemplos de máquinas com inteligência artificial incluem computadores que jogam xadrez e carros autônomos. Cada uma dessas máquinas deve pesar as consequências de qualquer ação que realizar, pois cada ação afetará o resultado final. No xadrez, o resultado final é ganhar o jogo. Para carros autônomos, o sistema de computador deve contabilizar todos os dados externos e computá-los para agir de forma a evitar uma colisão. A inteligência artificial também tem aplicações no setor financeiro, onde é usada para detectar e sinalizar atividades bancárias e financeiras, como uso incomum de cartão de débito e grandes depósitos em contas – tudo isso ajuda o departamento de fraude de um banco. Os aplicativos para IA também estão sendo usados ​​para ajudar a simplificar e facilitar a negociação. Isso é feito facilitando a estimativa de oferta, demanda e precificação de títulos.",
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
        professorTitle: "Professoras",
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
}

export default Portuguese;
