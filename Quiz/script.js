const perguntas = [
    {
        pergunta: "Qual tag é usada para definir uma lista ordenada em HTML?",
        resposta: [
            "UL",
            "OL",
            "DL",
            "LI",
            "DT"
        ],
        correto: 1
    },
    {
        pergunta: "Qual propriedade em CSS é usada para definir a cor do texto?",
        resposta: [
            "background-color",
            "text-color",
            "color",
            "font-color",
            "text-style"
        ],
        correto: 2
    },
    {
        pergunta: "Em JavaScript, qual função é usada para imprimir algo no console?",
        resposta: [
            "console.log()",
            "print()",
            "log()",
            "display()",
            "write()"
        ],
        correto: 0
    },
    {
        pergunta: "Qual é a maneira correta de comentar em HTML?",
        resposta: [
            "<!-- Comentário -->",
            "// Comentário",
            "/* Comentário */",
            "# Comentário",
            "// Comentário HTML"
        ],
        correto: 0
    },
    {
        pergunta: "Qual seletor CSS é usado para selecionar elementos com uma classe específica?",
        resposta: [
            ".",
            "#",
            "@",
            ":",
            "$"
        ],
        correto: 0
    },
    {
        pergunta: "Como se referencia um arquivo externo de JavaScript em um arquivo HTML?",
        resposta: [
            "<script src='script.js'></script>",
            "<javascript src='script.js'></javascript>",
            "<js src='script.js'></js>",
            "<script href='script.js'></script>",
            "<link href='script.js' rel='javascript'>"
        ],
        correto: 0
    },
    {
        pergunta: "Qual é a maneira correta de declarar uma variável em JavaScript?",
        resposta: [
            "variable x;",
            "var x;",
            "x = var;",
            "declare x;",
            "let x;"
        ],
        correto: 1
    },
    {
        pergunta: "Qual é a propriedade em CSS usada para definir o espaçamento entre as linhas de um texto?",
        resposta: [
            "line-height",
            "spacing",
            "margin",
            "padding",
            "line-spacing"
        ],
        correto: 0
    },
    {
        pergunta: "Como você faz um comentário de uma linha em JavaScript?",
        resposta: [
            "// Este é um comentário",
            "/* Este é um comentário */",
            "<!-- Este é um comentário -->",
            "' Este é um comentário",
            "// Este é um comentário de linha"
        ],
        correto: 0
    },
    {
        pergunta: "Qual função JavaScript é usada para alterar o conteúdo HTML de um elemento?",
        resposta: [
            "document.getElementByClass()",
            "document.getElementByName()",
            "document.getElementByTag()",
            "document.getElementById()",
            "document.querySelector()"
        ],
        correto: 3
    }
];

// Nesse bloco o javascript foi capaz de pegar esse id e essa tag
const quiz = document.querySelector('#quiz');
const template = document.querySelector('template');

// Esse for foi utilizado para percorrer todo o array "perguntas" pegando os elementos essenciais para construir e mostrar o quiz;
for (let item of perguntas) {
    // Nessa parte foi defido a variável "quiz" que recebe a variável o conteúdo("ccontent") da variável "template" e clona todo o seu nó, que no caso seria toda a informação que está contida na tag 'template' no HTML. Após isso é pego todo e qualquer 'h3' do HTML e altera o seu texto de acordo com cada pergunta presente em cada objeto do array perguntas;
    let quizItem = template.content.cloneNode(true);
    quizItem.querySelector('h3').textContent = item.pergunta;


    // Loop que vasculha resposta presente em cada objeto do array perguntas, define uma variável "dt" que armazena cada informação de "quizItem" dentro das tags 'dl' (pai) e 'dt' (filho) e define um span com as respostas vasculhadas, adicionando um novo 'dt' para cada pergunta de cada objeto no array;
    for (let respostas of item.resposta) {
        let dt = quizItem.querySelector('dl dt').cloneNode(true);
        dt.querySelector('span').textContent = respostas;

        quizItem.querySelector('dl').appendChild(dt);
    }
    
    // remoção da primeira tag de 'dt' pois ela foi usada apenas como template e depois não foi mais requisitada
    quizItem.querySelector('dl dt').remove();

    // Coloca a pergunta na tela
    quiz.appendChild(quizItem);
}