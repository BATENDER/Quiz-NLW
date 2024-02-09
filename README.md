# QUIZ NLW #14

--- 

## 1. Descrição 🎯
> O projeto teve como propósito testar minhas habilidades em programação criando um quiz interativo que apresenta algumas perguntas específicas sobre diversos assuntos e marca em tempo real os acertos dos participantes. Esse quiz serve para qualquer um que precise testar seus conhecimentos sobre um conteúdo específico.  

<br>

## 2. Tecnologias 💻

>
* HTML
    * Utilizado para estruturação do código
* CSS
    * Utilizado para estilização do projeto
* JavaScript
    * Utilizado para lógica, inteligência, interatividade e funcionalidade do projeto  

<br>

## 3. Funcionalidades 🧩

> O conteúdo de cada pergunta foi elaborada com a ajuda do chat GPT (Link para acessar a IA: [Chat GPT](https://chat.openai.com/)), ou seja, existe uma possibilidade praticamente infinita de informações que podem ser extraídas e usadas como conhecimentos gerais. O quiz foi elaborado de forma que apenas uma das respostas é correta e a validação de cada resposta depende se a opção marcada está correta ou não e o feedback e nota são dados automaticamente após a resposta de cada pergunta, não contabilizando quando a resposta estiver incorreta.  

<br>

## 4. Estrutura do Projeto 📂

>  O projeto foi estruturado da seguinte forma:
* 1 Arquivo `index.htlm`
* 1 Pasta de `assets` contendo: 
    * 1 Pasta de `images` contendo: 
        * 1 Imagem
    * 1 Paste de `styles` contendo:
        * 1 Arquivo `styles.css`
* 1 Arquivo `script.js`

> 1. **HTML**: foi necessário apenas um arquivo HTML contendo todas as informações presentes no **QUIZ**. Além disso foi utilizada uma tag muito interessante para fazer o modelo das perguntas, a tag `<template>`:
 ``` 
<template id="quiz-template">
    <div class="quiz-item">
        <h3>Pergunta 01</h3>
        <dl>
            <dt>
                <input type="radio" name="1-item" value="0">
                <span> Resposta A </span>
            </dt>
        </dl>
    </div>
</template>

> 2. **CSS**: também no CSS, usado para aestilização do projeto, foram utilizados alguns **seletores** muito interessantes como:
    - `flex-shrink` que serve para comprimir aquele que o seletor se refere
    - `letter-spancing` usado para da espaço entre cada letra
    - `all`usado para definir a decoração de todos os atributos padrões de alguma `tag` específica
    - `:checked` uma _pseudoclasse_ que atua quando uma `tag`é acionada(muit utilizado em `inputs` do tipo `radio`);

> 3. **JavaScript**: a validação do projeto foi feito assim:
 ``` correta.delete(item);
    if (respostaCorreta) {
        correta.add(item);
    }  ```
 ```

<br>

## 5. Design e Estilo 🎨

> O design, as cores, os estilos, o layout e a tipografia foram elaborados na forma como a empresa **Rocketseat** formata suas aplicações.

> O fomato das perguntas foram elaboradas seguindo uma estrutura específica e as perguntas/respostas sendo registradas através da informação do Chat GPT.  
Presente na estrutura:  
 ```
 const conteudo = [
    {
        pergunta: '',
        resposta: [
            "1. Pergunta"
            "2. Pergunta"
            "3. Pergunta"
            "4. Pergunta"
            "5. Pergunta"
        ],
        correta: 1;
    },
    ...
 ]  ```
```

<br>

## 6. Responsividade 📱

> A forma como o **QUIZ** foi elaborado, já possui uma grande facilidade de se adaptar aos diversos dispositivos, sendo eles móveis ou não  

<br>

## 7. Testes e Validação ✔️

> Foram feitos diversos testes em relação a funcionalidade da lógica em **JavaScript** e em relação a alguns atributos em **CSS**  

<br>

## 8. Desafios e Soluções 💡

> Os maiores desafios foi em relação a pegar todas as informações contidas na variável de `conteudo` para ser utilizado no código utilizando o `<template>` no arquivo de **HTML**. O que foi apresentado uma solução que aumenta muito a produtividade e reduz a quantidade de linhas de códigos necessários para fazer as perguntas (que já foram várias 😅)  

<br>

## 9. Aprendizados 📚

> Aprendi muita coisa em relação ao **JavaScript**, pricipalmente para reduzir a quantidade de código necessária para realizar certas ações e com toda certeza irei utilizar esses meus conhecimentos em projetos futuros  

<br>

## 10. Melhorias Futuras

> Com toda certeza aprender a utilizar melhor os `-webkits` para tornar a UX cada vez mais atrativa e boa de se vizualizar

***
#
<br>

Saiba quem eu sou:


[BATENDER](https://github.com/BATENDER) |
--- |
![Logo do meu perfil](https://github.com/BATENDER/Quiz-NLW/assets/65036435/1809a2ea-4ad2-46c2-b650-bdac56c217bf) |
