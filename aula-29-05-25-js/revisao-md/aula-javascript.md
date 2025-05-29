# Guia Completo de JavaScript - Fundamentos

## 📜 Sintaxe Básica e Estruturas

Bem-vindo aos fundamentos do JavaScript! Aqui, vamos explorar a sintaxe essencial que forma a base da linguagem.

### Variáveis e Constantes

Em JavaScript, usamos variáveis para armazenar dados que podem mudar e constantes para dados que não devem ser alterados após a atribuição inicial.

#### `var`: A forma mais antiga de declarar variáveis
- Possui escopo de função ou global
- Menos usado em código moderno

```javascript
var nomeAntigo = "Ana";
nomeAntigo = "Carlos"; // Pode ser reatribuído
var nomeAntigo = "Julia"; // Pode ser redeclarado (não recomendado)
console.log(nomeAntigo); // Saída: Julia
```

#### `let`: Introduzido no ES6
- Permite declarar variáveis com escopo de bloco

```javascript
let idade = 30;
idade = 31; // Pode ser reatribuído
// let idade = 32; // Erro! Não pode ser redeclarado no mesmo escopo
console.log(idade); // Saída: 31

if (true) {
  let dentroDoBloco = "Visível aqui";
  console.log(dentroDoBloco); // Saída: Visível aqui
}
// console.log(dentroDoBloco); // Erro! fora de escopo
```

#### `const`: Constantes com escopo de bloco
- O valor não pode ser reatribuído

```javascript
const PI = 3.14159;
// PI = 3.14; // Erro! Não pode ser reatribuído
console.log(PI); // Saída: 3.14159

const pessoa = { nome: "Mariana" };
pessoa.nome = "Mariana Silva"; // Funciona! O objeto em si pode ser modificado
// pessoa = { nome: "João" }; // Erro! Não pode reatribuir a constante
console.log(pessoa.nome); // Saída: Mariana Silva
```

### Tipos de Dados Primitivos

São os blocos de construção básicos dos dados em JavaScript.

#### String
Sequência de caracteres, usada para texto.

```javascript
let saudacao = "Olá, mundo!";
let nome = 'João';
let frase = `Bem-vindo, ${nome}!`; // Template literals
console.log(frase); // Saída: Bem-vindo, João!
```

#### Number
Representa números, tanto inteiros quanto de ponto flutuante.

```javascript
let quantidade = 10;
let preco = 19.99;
let naoUmNumero = NaN; // Not a Number
let infinito = Infinity;
console.log(quantidade, preco); // Saída: 10 19.99
```

#### Boolean
Representa valores lógicos: `true` ou `false`.

```javascript
let ativo = true;
let finalizado = false;
console.log(ativo); // Saída: true
```

#### Null
Representa a ausência intencional de um valor de objeto.

```javascript
let usuario = null;
console.log(usuario); // Saída: null
```

#### Undefined
Indica que uma variável foi declarada, mas ainda não teve um valor atribuído.

```javascript
let descricao;
console.log(descricao); // Saída: undefined
```

#### Symbol (ES6)
Tipo de dado cujas instâncias são únicas e imutáveis.

```javascript
const idUnico = Symbol('descricaoUnica');
console.log(idUnico); // Saída: Symbol(descricaoUnica)
```

#### BigInt (ES2020)
Usado para representar inteiros maiores que o limite seguro para Number.

```javascript
const numeroMuitoGrande = 9007199254740991n; // 'n' no final indica BigInt
const outroGrande = BigInt("12345678901234567890");
console.log(numeroMuitoGrande + 1n); // Saída: 9007199254740992n
```

### Operadores

Símbolos que realizam operações em valores (operandos).

#### Aritméticos
- `+` (adição)
- `-` (subtração)
- `*` (multiplicação)
- `/` (divisão)
- `%` (módulo/resto)
- `**` (exponenciação - ES7)

```javascript
let soma = 10 + 5; // 15
let produto = 4 * 3; // 12
let resto = 10 % 3;  // 1
let potencia = 2 ** 3; // 8
```

#### Atribuição
- `=` (atribuição simples)
- `+=`, `-=`, `*=`, `/=`, `%=`

```javascript
let x = 10;
x += 5; // equivalente a x = x + 5; (x agora é 15)
```

#### Comparação
- `==` (igual a - compara valor, faz coerção de tipo)
- `===` (estritamente igual a - compara valor e tipo)
- `!=` (diferente de)
- `!==` (estritamente diferente de)
- `>` (maior que)
- `<` (menor que)
- `>=` (maior ou igual a)
- `<=` (menor ou igual a)

```javascript
console.log(5 == "5");    // true (coerção de tipo)
console.log(5 === "5");   // false (tipos diferentes)
console.log(10 > 5);      // true
```

#### Lógicos
- `&&` (E lógico)
- `||` (OU lógico)
- `!` (NÃO lógico)

```javascript
let cond1 = true;
let cond2 = false;
console.log(cond1 && cond2); // false
console.log(cond1 || cond2); // true
console.log(!cond1);         // false
```

#### Ternário
Um atalho para a instrução if.

```javascript
let idadeUsuario = 18;
let status = (idadeUsuario >= 18) ? "Adulto" : "Menor de idade";
console.log(status); // Saída: Adulto
```

### Conversão de Tipos (Type Coercion & Conversion)

JavaScript é uma linguagem de tipagem dinâmica, o que significa que as variáveis não são rigidamente associadas a um tipo, e a conversão de tipos (coerção) pode acontecer automaticamente em certas operações.

#### Conversão Explícita

```javascript
let strNumero = "123";
let numero = Number(strNumero); // Converte string para número
console.log(typeof numero); // Saída: number

let valor = 456;
let strValor = String(valor); // Converte número para string
console.log(typeof strValor); // Saída: string

let booleano = Boolean("texto"); // Qualquer string não vazia é true
console.log(booleano); // Saída: true
console.log(Boolean("")); // Saída: false
console.log(Boolean(0)); // Saída: false
console.log(Boolean(null)); // Saída: false
```

#### Coerção Implícita

```javascript
console.log("5" + 3);   // "53" (concatenação de strings)
console.log("10" - 5);  // 5 (string convertida para número)
console.log("5" * "2"); // 10 (ambas convertidas para número)
console.log(5 + null);  // 5 (null é convertido para 0)
console.log("ola" + undefined); // "olaundefined"
```

É importante entender a coerção para evitar comportamentos inesperados, especialmente ao usar `==` em vez de `===`.

### Comentários

Comentários são usados para adicionar notas ao código, que são ignoradas pelo interpretador JavaScript.

#### Comentário de Linha Única

```javascript
// Isto é um comentário de linha única
let a = 10; // Este comentário explica a variável 'a'
```

#### Comentário de Múltiplas Linhas

```javascript
/*
Isto é um comentário
que pode ocupar
várias linhas.
*/
let b = 20;
```

---

## ⚙️ Funções

Funções são blocos de código reutilizáveis que realizam uma tarefa específica. Elas são fundamentais em JavaScript para organizar e modularizar o código.

### Declaração de Funções

Existem algumas maneiras de declarar funções:

#### Function Declaration (Declaração de Função)
São "elevadas" (hoisted), o que significa que podem ser chamadas antes de sua declaração no código.

```javascript
function saudar(nome) {
  return `Olá, ${nome}!`;
}
console.log(saudar("Alice")); // Saída: Olá, Alice!
```

#### Function Expression (Expressão de Função)
A função é atribuída a uma variável. Não são hoisted da mesma forma que as declarações.

```javascript
const despedir = function(nome) {
  return `Até logo, ${nome}!`;
};
console.log(despedir("Bob")); // Saída: Até logo, Bob!
```

#### Arrow Functions (Funções de Seta - ES6)
- Sintaxe mais concisa
- Não possuem seu próprio `this`, `arguments`, `super`, ou `new.target`
- Herdam `this` do escopo léxico pai
- Ideais para callbacks e funções curtas

```javascript
const somar = (a, b) => {
  return a + b;
};
console.log(somar(5, 3)); // Saída: 8

// Retorno implícito para uma única expressão
const multiplicar = (a, b) => a * b;
console.log(multiplicar(4, 5)); // Saída: 20

// Com um único parâmetro, parênteses são opcionais
const quadrado = x => x * x;
console.log(quadrado(7)); // Saída: 49
```

### Parâmetros e Argumentos

- **Parâmetros**: São os nomes listados na definição da função
- **Argumentos**: São os valores reais passados para a função quando ela é chamada

```javascript
function exibirInfo(nome, idade = 30) { // 'idade' tem um valor padrão
  console.log(`Nome: ${nome}, Idade: ${idade}`);
}

exibirInfo("Carlos", 25); // Saída: Nome: Carlos, Idade: 25
exibirInfo("Diana");      // Saída: Nome: Diana, Idade: 30 (usa valor padrão)
```

#### Objeto arguments
Em funções tradicionais (não arrow functions), um objeto semelhante a um array que contém todos os argumentos.

```javascript
function listarArgumentos() {
  console.log(arguments);
  for (let i = 0; i < arguments.length; i++) {
    console.log(arguments[i]);
  }
}
listarArgumentos(1, "teste", true);
// Saída: [Arguments] { '0': 1, '1': 'teste', '2': true }
// 1
// teste
// true
```

#### Parâmetros Rest (ES6)
Permite que uma função aceite um número indefinido de argumentos como um array.

```javascript
function somarTodos(...numeros) {
  let total = 0;
  for (const num of numeros) {
    total += num;
  }
  return total;
}
console.log(somarTodos(1, 2, 3));    // Saída: 6
console.log(somarTodos(10, 20, 30, 40)); // Saída: 100
```

### Retorno de Valores

Funções podem retornar um valor usando a palavra-chave `return`. Se `return` não for usado, a função retorna `undefined` por padrão.

```javascript
function calcularAreaRetangulo(largura, altura) {
  if (largura <= 0 || altura <= 0) {
    return "Dimensões inválidas"; // Pode retornar diferentes tipos
  }
  return largura * altura;
}

let area1 = calcularAreaRetangulo(5, 10);
console.log(area1); // Saída: 50

let area2 = calcularAreaRetangulo(-2, 10);
console.log(area2); // Saída: Dimensões inválidas

function semRetornoExplicito() {
  console.log("Esta função não retorna nada explicitamente.");
}
let resultado = semRetornoExplicito();
console.log(resultado); // Saída: undefined
```

### Escopo de Funções

O escopo determina a acessibilidade (visibilidade) das variáveis.

- **Escopo Global**: Variáveis declaradas fora de qualquer função
- **Escopo de Função (Local)**: Variáveis declaradas dentro de uma função
- **Escopo de Bloco (ES6)**: Variáveis declaradas com `let` e `const` dentro de um bloco (`{}`)

```javascript
let variavelGlobal = "Sou global";

function mostrarEscopo() {
  let variavelLocalFuncao = "Sou local da função";
  var variavelVarLocal = "Sou var local";
  console.log(variavelGlobal);

  if (true) {
    let variavelBloco = "Sou do bloco";
    const constanteBloco = "Constante do bloco";
    console.log(variavelLocalFuncao);
    console.log(variavelBloco);
    console.log(constanteBloco);
  }
  // console.log(variavelBloco); // Erro! Fora do escopo do bloco
}

mostrarEscopo(); // Chama a função
// console.log(variavelLocalFuncao); // Erro! Fora do escopo da função
console.log(variavelGlobal); // Saída: Sou global
```

### Hoisting (Elevação)

Em JavaScript, declarações de variáveis (com `var`) e declarações de funções são "movidas" para o topo de seu escopo.

#### Hoisting com var

```javascript
console.log(minhaVar); // Saída: undefined (declaração foi elevada, mas não a atribuição)
var minhaVar = "Valor";
console.log(minhaVar); // Saída: Valor

// O que o interpretador "vê":
// var minhaVar;
// console.log(minhaVar);
// minhaVar = "Valor";
// console.log(minhaVar);
```

#### Hoisting com let e const
`let` e `const` também são hoisted, mas não são inicializadas. Acessá-las antes da declaração resulta em um ReferenceError (Temporal Dead Zone).

```javascript
// console.log(minhaLet); // ReferenceError: Cannot access 'minhaLet' before initialization
let minhaLet = "Valor Let";
```

#### Hoisting de Funções
Declarações de função são completamente hoisted.

```javascript
funcaoElevada(); // Saída: "Função elevada foi chamada!"

function funcaoElevada() {
  console.log("Função elevada foi chamada!");
}

// Expressões de função NÃO são hoisted da mesma forma:
// expressaoNaoElevada(); // TypeError: expressaoNaoElevada is not a function
var expressaoNaoElevada = function() {
  console.log("Expressão de função chamada.");
};
expressaoNaoElevada(); // Saída: "Expressão de função chamada."
```

---

## 📊 Objetos e Arrays

Objetos e Arrays são estruturas de dados fundamentais em JavaScript para armazenar coleções de dados e dados mais complexos.

### Objetos Literais

Objetos são coleções de pares chave-valor (propriedades). As chaves são strings (ou Symbols) e os valores podem ser de qualquer tipo.

#### Criação

```javascript
const carro = {
  marca: "Fiat",
  modelo: "Uno",
  ano: 2010,
  ligado: false,
  ligar: function() { // Método
    this.ligado = true;
    console.log("Carro ligado!");
  },
  desligar() { // Sintaxe de método mais curta (ES6)
    this.ligado = false;
    console.log("Carro desligado.");
  },
  "cor externa": "Vermelho" // Chaves com espaços precisam de aspas
};
```

#### Acesso a Propriedades

- **Notação de Ponto (.)**: Para chaves simples
- **Notação de Colchetes ([])**: Para chaves dinâmicas ou com caracteres especiais

```javascript
console.log(carro.marca);          // Saída: Fiat
console.log(carro["modelo"]);      // Saída: Uno
console.log(carro["cor externa"]); // Saída: Vermelho

let propriedadeDesejada = "ano";
console.log(carro[propriedadeDesejada]); // Saída: 2010
```

#### Modificação e Adição de Propriedades

```javascript
carro.ano = 2012;
carro.cor = "Azul"; // Adiciona nova propriedade
console.log(carro.ano); // Saída: 2012
console.log(carro.cor); // Saída: Azul
```

#### Remoção de Propriedades

```javascript
delete carro.cor;
console.log(carro.cor); // Saída: undefined
```

#### Métodos
Funções que são propriedades de um objeto. `this` dentro de um método refere-se ao objeto.

```javascript
carro.ligar(); // Saída: Carro ligado!
console.log(carro.ligado); // Saída: true
```

#### Iterando sobre Propriedades

```javascript
for (let chave in carro) {
  if (carro.hasOwnProperty(chave)) { // Boa prática para evitar propriedades do protótipo
    console.log(`${chave}: ${carro[chave]}`);
  }
}
```

#### Outras formas de iteração

```javascript
console.log(Object.keys(carro));   // Retorna um array com as chaves
console.log(Object.values(carro)); // Retorna um array com os valores
console.log(Object.entries(carro)); // Retorna um array de arrays [chave, valor]
```

### Arrays

Arrays são listas ordenadas de valores. Os valores podem ser de qualquer tipo e podem ser misturados.

#### Criação

```javascript
const numeros = [1, 2, 3, 4, 5];
const frutas = ["Maçã", "Banana", "Laranja"];
const misto = [10, "Texto", true, { id: 1 }];
const vazio = [];
```

#### Acesso a Elementos
Através de índices (baseados em zero).

```javascript
console.log(frutas[0]); // Saída: Maçã
console.log(frutas[2]); // Saída: Laranja
console.log(numeros.length); // Saída: 5 (propriedade length indica o tamanho)
```

#### Modificação de Elementos

```javascript
frutas[1] = "Morango";
console.log(frutas); // Saída: ["Maçã", "Morango", "Laranja"]
```

### Métodos Comuns de Array

#### Adicionar/Remover Elementos

##### `push()`: Adiciona elementos ao final

```javascript
frutas.push("Uva");
console.log(frutas); // ["Maçã", "Morango", "Laranja", "Uva"]
```

##### `pop()`: Remove o último elemento

```javascript
let frutaRemovida = frutas.pop();
console.log(frutaRemovida); // Uva
console.log(frutas);      // ["Maçã", "Morango", "Laranja"]
```

##### `unshift()`: Adiciona elementos ao início

```javascript
frutas.unshift("Pêra");
console.log(frutas); // ["Pêra", "Maçã", "Morango", "Laranja"]
```

##### `shift()`: Remove o primeiro elemento

```javascript
let primeiraFruta = frutas.shift();
console.log(primeiraFruta); // Pêra
console.log(frutas);       // ["Maçã", "Morango", "Laranja"]
```

#### Manipulação e Iteração

##### `slice(inicio, fim)`: Retorna uma cópia de uma porção do array

```javascript
const algunsNumeros = numeros.slice(1, 3);
console.log(algunsNumeros); // [2, 3]
console.log(numeros);       // [1, 2, 3, 4, 5] (original inalterado)
```

##### `splice(inicio, qtdRemover, item1, item2, ...)`: Altera o conteúdo do array

```javascript
const cores = ["vermelho", "verde", "azul"];
// Remover "verde"
cores.splice(1, 1);
console.log(cores); // ["vermelho", "azul"]

// Adicionar "amarelo" e "roxo" na posição 1
cores.splice(1, 0, "amarelo", "roxo");
console.log(cores); // ["vermelho", "amarelo", "roxo", "azul"]
```

##### `concat()`: Concatena arrays

```javascript
const arr1 = [1, 2];
const arr2 = [3, 4];
const arr3 = arr1.concat(arr2, 5, [6, 7]);
console.log(arr3); // [1, 2, 3, 4, 5, 6, 7]
```

##### `forEach()`: Executa uma função para cada elemento

```javascript
frutas.forEach(function(fruta, indice) {
  console.log(`Índice ${indice}: ${fruta}`);
});
// Saída:
// Índice 0: Maçã
// Índice 1: Morango
// Índice 2: Laranja
```

##### `map()`: Cria um novo array com os resultados de uma função

```javascript
const precos = [10, 20, 30];
const precosComTaxa = precos.map(preco => preco * 1.1);
console.log(precosComTaxa); // [11, 22, 33]
```

##### `filter()`: Cria um novo array com elementos que passam no teste

```javascript
const idades = [15, 22, 18, 30, 12];
const maioresDeIdade = idades.filter(idade => idade >= 18);
console.log(maioresDeIdade); // [22, 18, 30]
```

##### `reduce()`: Reduz o array a um único valor

```javascript
const valores = [1, 2, 3, 4];
const somaTotal = valores.reduce((acumulador, valorAtual) => {
  return acumulador + valorAtual;
}, 0); // 0 é o valor inicial do acumulador
console.log(somaTotal); // 10
```

##### `find()`: Retorna o primeiro elemento que satisfaz a condição

```javascript
const pessoas = [
  { nome: "Ana", idade: 20 },
  { nome: "Bruno", idade: 25 },
  { nome: "Carlos", idade: 20 }
];
const primeiraPessoaCom20 = pessoas.find(pessoa => pessoa.idade === 20);
console.log(primeiraPessoaCom20); // { nome: "Ana", idade: 20 }
```

##### `findIndex()`: Retorna o índice do primeiro elemento que satisfaz a condição

```javascript
const indiceBruno = pessoas.findIndex(pessoa => pessoa.nome === "Bruno");
console.log(indiceBruno); // 1
```

##### `includes()`: Verifica se um array contém um elemento

```javascript
console.log(frutas.includes("Morango")); // true
console.log(frutas.includes("Abacaxi")); // false
```

##### `join()`: Junta todos os elementos em uma string

```javascript
const palavras = ["Olá", "mundo", "JavaScript"];
const frase = palavras.join(" "); // separador é um espaço
console.log(frase); // "Olá mundo JavaScript"
```

### Desestruturação (Destructuring Assignment - ES6)

Uma forma concisa de extrair valores de arrays ou propriedades de objetos.

#### Desestruturação de Array

```javascript
const coordenadas = [10, 20, 30];
const [x, y, z] = coordenadas;
console.log(x); // 10
console.log(y); // 20
console.log(z); // 30

const [primeiro, , terceiro] = coordenadas; // Ignorando o segundo elemento
console.log(primeiro, terceiro); // 10 30

const [head, ...tail] = coordenadas; // Usando o operador Rest
console.log(head);  // 10
console.log(tail);  // [20, 30]
```

#### Desestruturação de Objeto

```javascript
const usuario = {
  id: 123,
  nomeCompleto: "Ana Silva",
  email: "ana.silva@example.com",
  preferencias: {
    tema: "escuro",
    notificacoes: true
  }
};

const { nomeCompleto, email } = usuario;
console.log(nomeCompleto); // Ana Silva
console.log(email);      // ana.silva@example.com

// Com nomes de variáveis diferentes e valores padrão
const { id: userID, telefone = "N/A" } = usuario;
console.log(userID);   // 123
console.log(telefone); // N/A

// Desestruturação aninhada
const { preferencias: { tema } } = usuario;
console.log(tema); // escuro
```

### Spread e Rest Operators (...)

O operador de três pontos (`...`) pode ser usado como Spread ou Rest, dependendo do contexto.

#### Spread Operator
"Espalha" os elementos de um iterável ou as propriedades de um objeto.

##### Em Arrays

```javascript
const parte1 = [1, 2];
const parte2 = [3, 4];
const combinado = [...parte1, 0, ...parte2, 5];
console.log(combinado); // [1, 2, 0, 3, 4, 5]

const original = [10, 20, 30];
const copia = [...original]; // Cria uma cópia superficial
copia.push(40);
console.log(original); // [10, 20, 30]
console.log(copia);    // [10, 20, 30, 40]
```

##### Em Objetos (ES2018+)

```javascript
const obj1 = { a: 1, b: 2 };
const obj2 = { b: 3, c: 4 };
const objCombinado = { ...obj1, ...obj2, d: 5 }; // Propriedades posteriores sobrescrevem
console.log(objCombinado); // { a: 1, b: 3, c: 4, d: 5 }

const pessoaOriginal = { nome: "Carlos", idade: 30 };
const pessoaCopia = { ...pessoaOriginal, cidade: "SP" };
console.log(pessoaCopia); // { nome: "Carlos", idade: 30, cidade: "SP" }
```

#### Rest Operator
Coleta múltiplos elementos em um único elemento (array).

```javascript
function minhaFuncao(primeiroArg, ...outrosArgs) {
  console.log("Primeiro:", primeiroArg);
  console.log("Outros:", outrosArgs); // outrosArgs é um array
}
minhaFuncao("A", "B", "C", "D");
// Saída:
// Primeiro: A
// Outros: ["B", "C", "D"]

const [primeiroItem, ...restoDosItens] = [10, 20, 30, 40];
console.log(primeiroItem); // 10
console.log(restoDosItens); // [20, 30, 40]
```

---

## 📄 Manipulação Básica do DOM

O DOM (Document Object Model) representa a estrutura de um documento HTML como uma árvore de objetos. O JavaScript pode interagir com essa árvore para alterar dinamicamente o conteúdo, a estrutura e o estilo da página web.

### O que é o DOM?

- **Document**: O objeto principal que representa todo o documento HTML
- **Object**: Cada parte do documento (elementos, atributos, texto) é representada como um objeto
- **Model**: A estrutura em árvore (hierárquica) desses objetos

### Exemplo de HTML Base

```html
<!DOCTYPE html>
<html>
<head>
  <title>Minha Página DOM</title>
</head>
<body>
  <h1 id="tituloPrincipal">Bem-vindo!</h1>
  <p class="paragrafo">Este é um parágrafo de exemplo.</p>
  <p class="paragrafo">Este é outro parágrafo.</p>
  <div id="container">
    <span>Texto dentro da div.</span>
  </div>
  <button id="meuBotao">Clique Aqui</button>

  <script>
    // O código JavaScript vai aqui
  </script>
</body>
</html>
```

### Selecionando Elementos

#### `document.getElementById(id)`
Seleciona um elemento pelo seu atributo `id`.

```javascript
const titulo = document.getElementById("tituloPrincipal");
console.log(titulo); // Mostra o objeto elemento H1
```

#### `document.getElementsByClassName(nomeDaClasse)`
Seleciona todos os elementos que possuem uma determinada classe.

```javascript
const paragrafos = document.getElementsByClassName("paragrafo");
console.log(paragrafos);      // Mostra a HTMLCollection com os dois parágrafos
console.log(paragrafos[0]); // Acessa o primeiro parágrafo
```

#### `document.getElementsByTagName(nomeDaTag)`
Seleciona todos os elementos com uma determinada tag HTML.

```javascript
const todosOsPs = document.getElementsByTagName("p");
console.log(todosOsPs.length); // Saída: 2 (se houverem dois <p> na página)
```

#### `document.querySelector(seletorCSS)`
Seleciona o primeiro elemento que corresponde ao seletor CSS especificado.

```javascript
const primeiroParagrafo = document.querySelector(".paragrafo"); // Seleciona o primeiro com a classe
const divContainer = document.querySelector("#container");      // Seleciona pelo ID
const spanDentroContainer = document.querySelector("#container span"); // Seletor mais complexo
console.log(primeiroParagrafo);
console.log(spanDentroContainer);
```

#### `document.querySelectorAll(seletorCSS)`
Seleciona todos os elementos que correspondem ao seletor CSS especificado.

```javascript
const todosParagrafosComQuery = document.querySelectorAll(".paragrafo");
console.log(todosParagrafosComQuery); // Mostra a NodeList

todosParagrafosComQuery.forEach(p => {
  console.log(p.textContent);
});
```

### Manipulando Conteúdo e Atributos

#### `textContent`
Define ou obtém o conteúdo textual de um nó e seus descendentes.

```javascript
const tituloElemento = document.getElementById("tituloPrincipal");
console.log(tituloElemento.textContent); // Saída: Bem-vindo!
tituloElemento.textContent = "Novo Título da Página!"; // Altera o texto
```

#### `innerHTML`
Define ou obtém a sintaxe HTML descrevendo os descendentes do elemento.

```javascript
const containerDiv = document.getElementById("container");
console.log(containerDiv.innerHTML); // Saída: <span>Texto dentro da div.</span>
containerDiv.innerHTML = "<p><strong>Conteúdo novo</strong> com HTML.</p>";
```

#### `value`
Usado para obter ou definir o valor de elementos de formulário.

```html
<input type="text" id="campoNome" value="Nome inicial">
```

```javascript
const campoNome = document.getElementById("campoNome");
console.log(campoNome.value); // Saída: Nome inicial
campoNome.value = "Maria";   // Altera o valor do campo
```

#### `setAttribute()` e `getAttribute()`

```javascript
const link = document.createElement("a"); // (Veremos criação abaixo)
link.textContent = "Google";
link.setAttribute("href", "https://www.google.com");
link.setAttribute("target", "_blank"); // Abre em nova aba
document.body.appendChild(link); // Adiciona o link ao corpo da página

const linkHref = link.getAttribute("href");
console.log(linkHref); // Saída: https://www.google.com

link.removeAttribute("target");
```

#### Manipulando Classes CSS

```css
/* No seu arquivo CSS */
.destacado {
  background-color: yellow;
  font-weight: bold;
}
```

```javascript
const paragrafoDestaque = document.querySelector(".paragrafo");
paragrafoDestaque.classList.add("destacado");
// paragrafoDestaque.classList.remove("paragrafo");
// paragrafoDestaque.classList.toggle("outraClasse");
console.log(paragrafoDestaque.classList.contains("destacado")); // true
```

#### Manipulando Estilos Inline

```javascript
const tituloEstilo = document.getElementById("tituloPrincipal");
tituloEstilo.style.color = "blue";
tituloEstilo.style.backgroundColor = "lightgray";
tituloEstilo.style.padding = "10px";
// Para remover um estilo inline, defina-o como uma string vazia
// tituloEstilo.style.color = "";
```

### Criando e Removendo Elementos

#### `document.createElement(tagName)`
Cria um novo elemento HTML.

```javascript
const novoParagrafo = document.createElement("p");
novoParagrafo.textContent = "Este é um parágrafo criado dinamicamente.";
```

#### `appendChild()` e `insertBefore()`

```javascript
const container = document.getElementById("container");
container.appendChild(novoParagrafo);

const outroParagrafo = document.createElement("p");
outroParagrafo.textContent = "Parágrafo inserido antes.";
const primeiroFilhoContainer = container.firstChild;
if (primeiroFilhoContainer) {
  container.insertBefore(outroParagrafo, primeiroFilhoContainer);
} else {
  container.appendChild(outroParagrafo);
}
```

#### `removeChild()` e `remove()`

```javascript
const pParaRemover = document.querySelector("#container p");
if (pParaRemover) {
  container.removeChild(pParaRemover);
}

// Forma mais moderna
const spanARemover = document.querySelector("#container span");
if (spanARemover) {
  spanARemover.remove(); // Remove o próprio span
}
```

#### `replaceChild()`

```javascript
const paragrafoAntigo = document.querySelector(".paragrafo");
const paragrafoSubstituto = document.createElement("p");
paragrafoSubstituto.textContent = "Este parágrafo substituiu um antigo.";

if (paragrafoAntigo && paragrafoAntigo.parentNode) {
  paragrafoAntigo.parentNode.replaceChild(paragrafoSubstituto, paragrafoAntigo);
}
```

---

## 🖱️⌨️ Eventos Básicos

Eventos são ações ou ocorrências que acontecem no sistema. No contexto do navegador, eventos são frequentemente interações do usuário ou mudanças no estado do navegador/DOM.

### Tipos de Eventos Comuns

#### Eventos de Mouse
- `click`: Um clique do mouse
- `dblclick`: Um clique duplo do mouse
- `mousedown`: O botão do mouse é pressionado
- `mouseup`: O botão do mouse é liberado
- `mousemove`: O ponteiro do mouse se move
- `mouseover`: O ponteiro entra nos limites de um elemento
- `mouseout`: O ponteiro sai dos limites de um elemento

#### Eventos de Teclado
- `keydown`: Uma tecla é pressionada
- `keyup`: Uma tecla é liberada
- `keypress`: Uma tecla que produz um caractere é pressionada (depreciado)

#### Eventos de Formulário
- `submit`: Um formulário é enviado
- `focus`: Um elemento recebe foco
- `blur`: Um elemento perde o foco
- `change`: O valor de um elemento de formulário é alterado
- `input`: O valor de um elemento é alterado (disparado imediatamente)

#### Eventos de Janela/Documento
- `load`: Um recurso terminou de carregar
- `DOMContentLoaded`: O documento HTML foi completamente carregado
- `resize`: A janela do navegador foi redimensionada
- `scroll`: O documento ou um elemento foi rolado

### Adicionando Event Listeners

#### Sintaxe
```javascript
elemento.addEventListener(tipoDoEvento, funcaoCallback, useCaptureOpcional);
```

#### Exemplo Prático

```html
<!DOCTYPE html>
<html>
<head>
  <title>Eventos JS</title>
  <style>
    #meuBotao { padding: 10px; font-size: 16px; }
    #caixa { 
      width: 100px; 
      height: 100px; 
      background-color: lightblue; 
      margin-top: 10px; 
      text-align: center; 
      line-height: 100px; 
    }
  </style>
</head>
<body>
  <button id="meuBotao">Clique em Mim!</button>
  <div id="caixa">Passe o mouse</div>
  <input type="text" id="meuInput" placeholder="Digite algo...">
  <p id="mensagem"></p>

  <script>
    // 1. Selecionar os elementos
    const botao = document.getElementById("meuBotao");
    const caixa = document.getElementById("caixa");
    const input = document.getElementById("meuInput");
    const paragrafoMensagem = document.getElementById("mensagem");

    // 2. Adicionar Event Listeners

    // Evento de clique no botão
    botao.addEventListener("click", function() {
      paragrafoMensagem.textContent = "Botão clicado!";
      console.log("Botão clicado!");
    });

    // Evento de mouseover na caixa
    caixa.addEventListener("mouseover", () => { // Usando arrow function
      caixa.style.backgroundColor = "coral";
      caixa.textContent = "Mouse aqui!";
    });

    // Evento de mouseout na caixa
    caixa.addEventListener("mouseout", function() {
      this.style.backgroundColor = "lightblue"; // 'this' refere-se ao elemento 'caixa'
      this.textContent = "Passe o mouse";
    });

    // Evento de keydown no input
    input.addEventListener("keydown", function(evento) {
      // O objeto 'evento' contém informações sobre o evento
      console.log(`Tecla pressionada: ${evento.key}, Código: ${evento.code}`);
      paragrafoMensagem.textContent = `Você pressionou: ${evento.key}`;
    });

    // Evento de 'input' para capturar mudanças em tempo real
    input.addEventListener("input", function(event) {
        console.log("Valor do input:", event.target.value);
    });

    // Evento 'DOMContentLoaded'
    document.addEventListener('DOMContentLoaded', () => {
        console.log('DOM completamente carregado e analisado.');
    });
  </script>
</body>
</html>
```

### O Objeto Event

Quando um evento ocorre, a função callback recebe automaticamente um objeto Event como primeiro argumento.

#### Propriedades e Métodos Comuns

##### Propriedades Gerais
- `event.type`: O tipo de evento que ocorreu
- `event.target`: O elemento onde o evento ocorreu originalmente
- `event.currentTarget`: O elemento ao qual o listener está anexado

##### Métodos Importantes
- `event.preventDefault()`: Impede o comportamento padrão do navegador

```javascript
const meuFormulario = document.querySelector("form");
if (meuFormulario) {
    meuFormulario.addEventListener("submit", function(evento) {
        evento.preventDefault(); // Impede o envio padrão do formulário
        console.log("Formulário NÃO enviado, dados podem ser processados via JS/AJAX.");
    });
}
```

- `event.stopPropagation()`: Impede que o evento se propague para elementos pais

#### Eventos de Mouse
- `event.clientX`, `event.clientY`: Coordenadas do mouse relativas à janela
- `event.pageX`, `event.pageY`: Coordenadas do mouse relativas ao documento
- `event.button`: Qual botão do mouse foi pressionado (0: principal, 1: meio, 2: secundário)

#### Eventos de Teclado
- `event.key`: O valor da tecla pressionada
- `event.code`: O código físico da tecla no teclado
- `event.altKey`, `event.ctrlKey`, `event.shiftKey`, `event.metaKey`: Teclas modificadoras

### Removendo Event Listeners

Para remover um event listener, você precisa passar a mesma função que foi usada para adicioná-lo.

```javascript
const botaoAcao = document.getElementById('botaoAcao');

function lidarComClique() {
  console.log('Botão de ação clicado!');
  // Para remover após o primeiro clique:
  botaoAcao.removeEventListener('click', lidarComClique);
  console.log('Listener de clique removido.');
}

if (botaoAcao) {
    botaoAcao.addEventListener('click', lidarComClique);
}
```

#### Alternativa: Opção `{ once: true }`

```javascript
const botaoUnico = document.getElementById('botaoUnico');
if (botaoUnico) {
    botaoUnico.addEventListener('click', function() {
        console.log('Este evento de clique só acontecerá uma vez.');
    }, { once: true });
}
```

---

## 🎯 Conclusão

Este guia cobriu os fundamentos essenciais do JavaScript:

- **Sintaxe Básica**: Variáveis, tipos de dados, operadores e conversões
- **Funções**: Declaração, parâmetros, escopo e hoisting
- **Objetos e Arrays**: Criação, manipulação e métodos importantes
- **DOM**: Seleção, manipulação e criação de elementos
- **Eventos**: Interatividade e resposta a ações do usuário

### Próximos Passos

Para continuar aprendendo JavaScript, explore:

- **ES6+ Features**: Classes, modules, async/await
- **APIs do Navegador**: Fetch, Local Storage, Geolocation
- **Frameworks**: React, Vue.js, Angular
- **Node.js**: JavaScript no servidor
- **Ferramentas**: Webpack, Babel, npm

### Recursos Adicionais

- [MDN Web Docs](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript)
- [JavaScript.info](https://javascript.info/)
- [Eloquent JavaScript](https://eloquentjavascript.net/)

---

**Desenvolvido com ❤️ para facilitar o seu aprendizado em JavaScript!**