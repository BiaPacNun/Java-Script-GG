// Aula 06 - Tratamento de dados
// Link da aula: https://www.youtube.com/watch?v=OJgu_KCCUSY
/* Anotações:
Para escrever comentários no HTML é diferente do JS, se usa <!-- -->
Pra escrever comentários no CSS é */ /* 
O sinal de + significa Concatenação
*/

// Template Strings é o Formatador de Strings e é uma novidade das últimas versões do Ecmascript.
// Crase ` é o delimitador de String 
// Place holder é ${}

/*TRANSCRIÇÃO
0:00
Como sempre estamos fazendo em todas as aulas, antes de assistir esse vídeo até o final, tenta me respondeu algumas perguntas:
0:05
Você sabe me dizer o que é uma variável? Você sabe como fazer uma variável dentro do JavaScript
0:12
ser declarada como inteiro ou como real? Será que isso é possível? E por falar em inteiro e real, você sabe o que são tipos primitivos?
0:19
Sabe dizer quais são os tipos primitivos do JavaScript? Você sabe o que significa colocar o valor 'num' dentro de uma variável? Qual é o efeito disso?
0:28
E se, por acaso, você não sabe responder algumas dessas perguntas é sinal de que você não assistiu à aula anterior.
0:35
Porque todas as respostas para as perguntas que eu acabei de fazer, estão lá. Então, não se esqueça. Se você não respondeu a uma delas, clique aqui, vai por mim
0:42
acesse a playlist, assista esse curso desde o início, porque todos os conhecimentos são válidos.
0:48
Agora, se você conseguiu responder a todas essas perguntas, sem problema nenhum é só continuar assistindo essa aula
0:54
Legendas: Samara Affonso
1:07
Olá, pequeno Gafanhoto, seja bem-vindo a mais uma aula do seu Curso em Vídeo de JavaScript
1:12
totalmente patrocinado pelo Google. O meu nome é Gustavo Guanabara, eu sou professor. Nessa aula a gente vai dar prosseguimento àquilo que a gente começou a ver na aula anterior
1:21
e vamos começar a trabalhar a manipulação de dados na linguagem JavaScript. No vídeo anterior a gente trabalhou bastante com tipos primitivos, variáveis, como fazer atribuição
1:31
e com certeza muita gente comentou: " Guanabara, você usou apenas a palavra 'var' eu vi na internet que existe a palavra 'let' também. Qual é a diferença entre o 'var' e o 'let',
1:41
e até mesmo o 'const', que fazem parte da ECMAScript mais recente? Calma, meu querido, minha querida a gente vai chegar lá, pode acreditar. Vai assistindo esses vídeos
1:51
tranquilamente, do início ao fim. Na aula passada falei muito" not an number", uma pronúncia errada
1:56
o certo seria "not a number", que quer dizer "não é um número". Mas com certeza você entendeu é o NaN, é o famoso NaN que aparece toda hora quando você vai aprender JavaScript
2:06
Mas, na aula passada a gente viu também todos os tipos primitivos e os valores relacionados à ele.
2:12
A gente viu o "number", estão relacionados à ele os valores especiais em infinity e o NaN a gente viu 'string', o 'boolean', o 'null', o 'undefined', o 'object',
2:21
que tem um valor especial, que é o array. E se nesse momento de um pequeno arrepio, falando: " Meu Deus, array, vetor, que coisa horrorosa!". Fica tranquilo, não precisa estressar
2:29
Arrey é fácil. Você entendeu variável que eu falei anteriormente, na aula anterior? Arrey é uma variável especial. Quando chegar a hora você vai entender melhor o que eu estou falando.
2:38
E a gente tem também a 'function' que está aqui no final da lista, mas é muito importante para o JavaScript.
2:44
Muito em breve, a gente vai falar um pouquinho mais sobre functions. Mas pra esse vídeo a gente vai tratar, principalmente, os dois principais tipos primitivos. Na verdade,
2:53
existem três tipos primitivos principais do JavaScript que são: number, string e boolean
2:58
mas sobre o "boolean" a gente vai falar um pouquinho mais nas próximas aulas quando a gente começar a falar sobre operadores. O nosso foco aqui vai ser trabalhar, principalmente,
3:06
com esses dois principais tipos primitivos. Isso porque nas aulas anteriores, mais precisamente na aula 4
3:12
da sua playlist. E se você não a acessou a sua playlist, vai por mim, vai na sequência, clique aqui em cima,
3:18
é sempre a primeira playlist, a primeira playslist de toda a aula de JavaScript é o curso de JavaScript
3:23
a segunda playlist é o curso de HTML, CSS antiguinho que a gente tem aqui, mas que está mega atualizado. Eu recomendo, fortemente, que você faça esses dois cursos
3:31
em paralelo, aqui dentro do Curso em Vídeo. Se por acaso você estiver achando difícil demais ou você for bem iniciante, vai primeiro nesse curso daqui, adianta o seu processo
3:40
e depois faz o curso de HTML5 que também é muito importante. É sempre a segunda playlist que aparece aqui em cima quando você clica no "i" de interatividade
3:48
e se você se lembra muito bem, vamos aqui embaixo a gente fez um negócio pra guardar dados, na aula 4,
3:55
que foi utilizar o prompt. Então a gente utilizou: "Qual é o seu nome?" apareceu na tela essa janela e a gente vai dar uma relembrada
4:02
E na época eu falei: "Você vai digitar o nome, exatamente, aqui em baixo onde ficou amarelo.
4:08
O que vai acontecer com esse nome? Para onde vai o nome digitado? Para onde vai o valor que é digitado?"
4:13
E é isso que a gente começar a fazer a partir de agora. A gente vai começar a manipular os dados que estavam aqui dentro. E para criar essa janela que está aparecendo aqui
4:21
você se lembra muito bem a gente utilizou o comando o window.prompt e colocou: "Qual é seu nome? "
4:27
E na ocasião, eu falei que a gente deveria fazer algumas coisas com esses dados. Eu vou te ensinar como fazer isso. Então abre o seu Visual Studio Code,
4:35
vamos abrir também o arquivo que a gente fez na aula 4, que foi um exercício001 e agora nós vamos criar o exercício002 nessa aula de número 6
4:46
Já estou no meu Windows, vou abrir o Visual Studio Code e já vou abrir um navegador também, o Google Chrome.
4:53
Vamos organizar aqui, vou jogar o Chrome do lado direito e o Visual Studio Code pro lado esquerdo vou dar uma roubadinha pro lado do Visual Studio Code, porque a gente precisa olhar códigos.
5:02
Então, estou aqui na tela de "welcome" e vou clicar nesse papelzinho pra abrir a minha "cursojs" Se a sua pasta "cursojs" não estiver aberta, você vai clicar em 'file", "open folder" e vai abrir a pasta,
5:15
exatamente aquela pasta que você viu, que você criou na aula anterior, na aula 3, na verdade
5:21
eu vou selecionar pasta, ele já abriu aqui "aula04". O que eu vou fazer é o seguinte: eu vou criar uma nova pasta aqui dentro. Então vou clicar com o botão direito em "new folder"
5:30
e vou criar o "aula06". Não é "aula05", porque nessa aula a gente não fez nada em especial de prática
5:37
Eu vou utilizar esse código que eu acabei de abrir, pra eu usar ele e não perder
5:42
eu vou fazer o seguinte: seleciono, Ctrl+c, Ctrl+v. E ele já criou o exercício 02
5:48
Quando você usa a numeração, o próprio Visual Studio Code facilita sua vida. Vou pegar o exercício 02 , arrastar pra "aula06". Ele quer saber se eu quero mover.
5:57
Sim, eu quero mover. Então, eu já tenho a aula 1, o exercício 1 e eu tenho o exercício 2 que é,
6:03
exatamente, o exercício001 que vou alterar. Vou fechar o exercício001 aqui em cima e vou deixar só o dois aberto. Vou clicar nesse papelzinho para encolher também
6:11
e ficar com o código todo pra mim. Então, basicamente o que vou fazer é apagar esses dois comandos, eu não quero o "alert", nem o "confirm". A gente já viu pra que serve esses comandos
6:21
e o que a gente tinha feito era o seguinte, esse programa vai escrever a "olá, mundo", "já me livrei da maldição". E ele vai dar o prompt, e o prompt vai ser primeira coisa que vai aparecer
6:32
Para eu abrir esse arquivo 002 eu vou em primeiro lugar salvar ele, Ctrl+s, já salvei, não está uma bolinha, ficou um "x". Vou abrir o Explorer,
6:42
vou abrir a pasta dentro de documentos, "cursojs", a pasta que você criou Está vendo? "aula 06", está aqui o exercício 2, vou clicar duas vezes e ele já abriu no Google Chrome
6:51
Então está aqui: " Qual é o seu nome?". Gustavo. Vou dar ok. E ele, simplesmente, botou "Olá mundo" e o meu nome, Gustavo, não serviu para nada
6:58
simplesmente, porque eu não fiz nada com esse comando que você está vendo o que eu vou fazer com esse comando está aparecendo aqui embaixo, é bem simples
7:06
eu vou jogar o resultado da execução dele dentro de uma variável e a gente viu que para criar uma variável
7:11
eu vou utilizar a palavra 'var'. Então, eu botei "var nome". Esse igual, lembra? O igual foi o recebe
7:19
Então, eu vou ler essa linha que está aqui em baixo como a variável nome recebe o resultado do prompt que vai aparecer na janela. Você conseguiu entender isso?
7:27
A variável "nome" recebe o resultado do prompt que vai aparecer na janela window.prompt e nesse prompt vai estar escrito: "Qual é seu nome?". Muito simples.
7:36
Agora eu vou ter o nome guardado dentro da variável e tudo que eu digitar no prompt
7:41
vai ser jogado dentro de "nome". Na verdade, ele me dá somente uma opção Eu digitei o nome, cliquei em ok e ele vai jogar, exatamente, como está representada aqui embaixo.
7:50
Vamos ver se isso funcionou utilizando o outro comando, que a gente já aprendeu, que é o "alert". Então, vou fazer aquilo,
7:57
var nome = window. prompt Na verdade, como falei anteriormente, você também pode usar a palavra "let"
8:04
É a mesma coisa, só que nós vamos utilizar o "var", porque é uma questãõ de escrúpulo mais pra frente a gente vai entender qual é a diferença entre colocar "var", colocar "let" e colocar "const",
8:15
que também pode ser utilizado. São três palavras que podem ser utilizadas. Mas vou usar o "var", que foi o que a gente fez na aula passada. Só lembrando, isso é comentário
8:23
Eu não posso colocar comentários assim em JavaScript aqui, por exemplo.
8:28
"Isso é um comentário". Você vai ver que isso não serve de nada para delimitar
8:34
Vou atualizar. Meu nome, Gustavo. "Isso é um comentário", apareceu aqui. Está vendo? O comentário não funciona assim no HTML. Para HTML, você vai fazer isso:
8:44
Você vai colocar: < !-- Isso é um comentário > aqui dentro, pra dentro do HTML. Já aqui em cima no CSS não funciona o "//"
8:55
Nem o "!--", aqui só funciona " /* " Vou colocar: "Comentário em CSS"
9:03
Esse é um comentário CSS. Então, ele já colocou o comentário nas três tecnologias: comentário em HTML, comentário em CSS, que só serve esse,
9:12
e em JavaScript serve esse, mas também serve esse de cima. Por isso, eu fiz nas aulas anteriores
9:18
a questão de que você soubesse diferenciar o que é uma parte de HTML, o que é uma parte de CSS, o que é uma parte de JavaScript.
9:24
Não se esqueça, tem as playlists aqui em cima pra você ter acesso a todo o curso. Não pula nenhuma aula, porque tudo vai ser importante para você.
9:32
Então, agora eu tenho um nome. Basicamente, eu vou fazer o seguinte: eu vou criar uma linha e agora tenho a variável "nome", que tem o nome da pessoa
9:40
vou colocar: window.alert(), ou somente alert. E vou colocar: " É um grande prazer em te conhecer"
9:48
Então você pensa assim:" okay, está dentro de nome". 'É um grande prazer em te conhecer, nome'.
9:54
Olha só, vamos executar. Isso é muito comum em quem está começando, ter esse defeito, esse problema
10:01
"Gustavo, é um grande prazer em te conhecer nome". Eu não quero a palavra "nome" aqui,
10:06
eu quero o nome da pessoa. Por isso, eu não posso deixar esse "nome" dentro das aspas. Nem aspas simples, nem aspas duplas. É uma aspas específica para isso. Então, eu vou tirar a palavra
10:15
nome daqui e vou jogar ela aqui fora. Está vendo? Para ficar colorida e para juntar uma coisa à outra
10:21
pra colar uma coisa na outra eu uso o sinal de mais, que aqui no nosso caso tem a função de concatenação.
10:27
Vai anotando tudo no seu caderno, concatenação é a palavra. Vou botar aqui: "concatenação"
10:34
É pra isso que serve o comentário, principalmente quando a gente está começando a aprender. Então, beleza! Vamos salvar e atualizar. "Gustavo... é um grande prazer em te conhecer, Gustavo".
10:42
E se, por acaso, eu digitar outro nome? "Ah, meu nome é Eliosvaldo". " É um grande prazer em te conhecer, Eliosvaldo". Se você você quiser uma exclamação depois de Eliosvaldo,
10:51
depois do nome, é só você vir em "nome", concatena de novo, entre aspas a exclamação.
10:56
Quer ver? Vamos salvar e atualizar . "Meu nome é Maria do Carmo". Veja,
11:01
" É um grande prazer em te conhecer, Maria do Carmo!". Beleza? Treina isso aqui na sua casa.
11:07
Não considera que só porque você viu, você falou: " Ele fez e funcionou. Pronto, já sei ! "
11:12
Não. Lembra da história de tocar violão só assistindo o vídeo? Lembra da história de só fazer manobras radicais com bicicleta só assistindo o vídeo?
11:20
Não funciona nem para violão, nem para a manobra radical. Então, não funciona também para programação,
11:25
só assistir o vídeo é "tiro no pé". Você não vai comprovar que você aprendeu a programar você só vai comprovar que eu sei programar e que você me assistiu fazendo isso pra você
11:34
E esse não é o objetivo desse curso. O meu objetivo aqui é fazer você aprender JavaScript
11:40
e a gente só está no início da caminhada. Então vai por mim, treina. Então, já tô com o código,
11:45
o código já está funcionando, só que eu vou fazer o seguinte: eu não quero esse código, esse código ficou no passado. Eu vou fazer o nosso exercício 3 agora.
11:53
Baseado nisso, vou abrir o exercício 02, selecionar, Ctrl+c, Ctrl+v de novo
11:59
ele já criou exercício 03, na aula 6. Vamos começar a trabalhar assim na grande maioria dos casos.
12:05
Fechei aqui e eu vou apagar esse pedacinho, ok? E o que eu vou fazer agora é o seguinte:
12:10
no lugar de ler o nome de uma pessoa eu vou pedir para ela digitar dois números. Para isso, eu vou precisar de dois prompts. Dá uma olhada. Vamos criar uma variável "n1" pro primeiro número.
12:19
Lembra que o nome da variável é importante, eu não vou chamar sempre de "n1', "n2" Por exemplo, em nome e telefone é muito legal usar "nome" e "telefone", ou "nome" e "tel"
12:27
"n1" e "n2" é pra número um e número dois. window.prompt ( ' Digite um número: ' ) . E aqui eu vou ler outro número.
12:35
window.prompt ( ' Digite outro número: ' ) Então, acabei de ler dois números. Vamos ver se está funcionando. Vamos aos pouquinhos .
12:43
Salvei e vou abrir. Só que seu exercício 03. Então, eu vou fechar este exercício
12:48
e vou abrir o exercício 03. Cliquei duas vezes, apareceu: "Digite um número ". Vou digitar 5 .
12:53
"Digite outro número: ". 9 . "Olá mundo!". Então, é o seguinte, eu vou criar uma variável
13:02
que vai ser a soma. E eu quero somar "n1" mais "n2. Então você pensa assim: " Okay, beleza,
13:07
eu peguei o "n1" e tenho ele guardado". Se você assistiu à aula de variável você entendeu que o valor daqui
13:13
está guardado e o valor do "n2" também. Se eu somar "n1" com "n2", na nossa cabeça funciona assim:
13:18
" Vou pegar n1 e vou somar com n2 " Só que dá uma olhada, vamos fazer um window.alert, aquilo que nós fizemos anteriormente, " a soma dos valores é ". E eu vou concatenar com o 's'. Vamos ver como funciona.
13:34
Salvando, vamos atualizar. Ele vai perguntar: " Digite um número". 4. " Digite outro número ". 2
13:40
Quando eu clicar em "ok", seu coração diz: " Beleza, ele apertou 4, depois apertou o 2.
13:46
4+2 = 6 seis. Então, eu dou "ok" e vai aparecer que a soma entre os valores é 6. Mas, olhe, a soma dos valores é
13:53
42. O que aconteceu? Se "n1" está com quatro e "n2" está com dois, eu não posso fazer
14:01
quarenta e dois, têm que ser seis. Porém, lembra que eu falei para quê serve esse '+' alguns segundos atrás ?
14:08
Esse '+' também tem o efeito de concatenação e nesse momento a gente começa começa a trabalhar
14:14
tipos de dados. O '+' pode servir para adição e o '+' também pode servir para concatenação
14:25
E ele vai fazer. Neste caso, o mais '+' serve para concatenação. Nesse '+' , o próprio JavaScript
14:30
fica na dúvida. Se o '+' serve para adição e também serve pra concatenação, como eu preciso fazer?
14:36
Como eu faço para forçar esse tipo, para eu dizer que "n1" é um número e que "n2" também é um número?
14:43
Como o JavaScript ficou confuso, a gente tem que entender como ele funciona. Para esse '+' ser adição,
14:48
tem que ser um 'number' desse lado e um 'number' desse lado. Se for,
14:54
uma string desse lado e uma string desse lado, ele vai fazer uma concatenação. Deu pra entender?
15:00
Então, number + number = adição string + string = concatenação
15:06
Só que eu vou te dizer o seguinte, o window.prompt retorna pra mim uma string. Mesmo que digite o número,
15:12
ele trata como string e isso é uma característica do comando. Por isso é importante você aprender a linguagem e também assistir o vídeo com a gente que eu vou te dando essas dicas.
15:23
Então, basicamente, em "n1" e "n2", se eles recebem o valor do prompt eles recebem um valor string.
15:29
Aqui também ele recebe um valor string. Então, o que eu tenho que fazer é converter isso
15:34
de string para número e isto de string para número. E se você, gafanhoto esperto, gafanhota esperta
15:40
já tentou aprender uma outra linguagem de programação, você sabe que isso é muito comum. A gente ter que fazer conversões de tipo, essas conversões também existem no JavaScript
15:49
e é esse o motivo da nossa aula. Esse é o assunto da nossa aula. E você viu, se lembra muito bem,
15:55
porque foi a poucos segundos atrás, a gente vai precisar fazer uma conversão, exatamente, como está aqui em cima, de um string para um número. E para fazer isso existem várias maneiras.
16:04
A primeira delas é utilizar o Number.parseInt ou simplesmente parseInt e funciona, exatamente, igual. Nisso, ele vai fazer uma conversão de um número para um número inteiro.
16:14
Se você quiser um número real, um número com vírgula, nós vamos utilizar o parseFloat. E ele se chama froat,
16:21
porque aquele pontinho, por exemplo, cinco e meio no JavaScript é 5.5. Esse ponto do 5.5 a gente chama de
16:28
ponto flutuante ou floating point. Por isso, a gente utiliza o parseFloat. Parse é converter, parsear.
16:35
Então, se eu quiser converter para inteiro, Number.parseInt. Se eu quiser converter para real, Number.parseFloat. E, é importante que a gente saiba que o "n" do "Number" é maiúsculo e que o "i" e o "f"
16:47
do 'Int' e do 'Float', respectivamente, também são maiúsculos. O JavaScript é case sensitive
16:52
mas não fica preocupado não, porque o próprio Visual Studio Code já te ajuda nisso, também.
16:57
Vamos testar esses dois aqui. Como eu falei, são três maneiras diferentes de trabalhar. Eu só te mostrei duas, vamos treinar essas duas primeiro. Então, o que eu preciso fazer é,
17:05
fazer com que o "n1" seja inteiro e o "n2" seja inteiro. Eu tenho duas maneiras ou eu converto "n1" direto,
17:12
fazendo assim: Number.parseFloat ou parseInt. Vou colocar parseInt,
17:20
window prompt, e eu tenho que fechar o parêntesis duas vezes, preste atenção Qualquer coisa pause o vídeo e dê uma olhada. Vou colocar dentro de parêntesis. Para colocar tudo
17:29
dentro de parêntesis, eu seleciono e abro parênteses. Ele, automaticamente , já coloca parênteses dentro do
17:34
Visual Studio Code. Number.parseInt também. Então, basicamente, o que estou fazendo aqui é antes de jogar dentro de "n1" é,
17:41
converter ele para inteiro. Como eu disse, anteriormente, pode ser parseInt, number.parseInt ou, simplesmente,
17:47
apenas parseInt. Vou fazer sempre a versão mais completa pra você poder entender. Então, a minha
17:54
variável "n1" vai receber o que vier do prompt da janela, que está escrito: " Digite seu número",
18:00
convertido para um número inteiro. Então, é assim a gente vai trabalhar. Vamos salvar e ver se está funcionando agora. Vou atualizar. "Digite um número", mesmo número 4 e o
18:10
mesmo número 2. Quando eu clicar em ok, agora, a soma dos valores é 6. Então, agora está funcionando,
18:16
exatamente, da maneira que eu quis. Porque eu fiz a manipulação desse dado, eu fiz a conversão
18:22
desse dado. E a gente tem uma pequena limitação. Se eu atualizar... "Digite um número". Eu não disse se o número é inteiro ou real, então vou digitar 5,5 e
18:30
aqui eu vou digitar 2. 5,5 + 2 = 7,5 quando eu der "ok", a soma deu 7.
18:36
Por que não 7,5? Porque eu mandei converter para inteiro. Se eu quiser real, eu vou usar " Float ".
18:42
Aqui também, " Float". Então, eu tenho que saber, mais ou menos, o tipo que eu vou precisar.
18:48
Salvei, atualizei, vou fazer o mesmo exemplo agora, 5,5+2= 7,5. Então,
18:55
no meu parse, eu tenho que saber qual é o tipo e isso é uma grande realidade há muito tempo no JavaScript.
19:02
Só que agora, nas versões mais atuais, a gente tem um modo simplificado que é só utilizar Number
19:07
eu coloco Number e ele se vira. Ele sabe se é inteiro, ele sabe se é real e faz a conversão para o tipo definido.
19:14
É claro que essa síntese, só Number, não elimina as de cima, porque às vezes eu preciso, efetivamente,
19:21
tratar como real. Então, eu vou utilizar o parseFloat. Se eu quiser, efetivamente, inteiro, forçar inteiro, eu vou utilizar o parseInt. Se eu quiser que o próprio
19:29
JavaScript descida, de acordo com o valor que ele recebeu, se é inteiro ou se é real, eu vou utilizar somente
19:35
Number. " Eu vou" não, eu posso utilizar somente Number. Vamos fazer o teste? Então, ao invés de Number.parseFloat, eu vou usar Number. Ao invés de colocar Number.parseFloat
19:44
aqui embaixo, eu também vou botar só "Number". Vamos ver se ele vai conseguir se virar. Vamos salvar, atualizar e vamos ver. Vou digitar dois inteiros, 8 + 3 = 11
19:55
Funcionou perfeitamente. Agora, vamos atualizar de novo e vamos colocar, 7,5 + 3
20:01
7,5 + 3 = 10,5. Está funcionando bonito, está redondinho.
20:06
Então essa aqui é uma maneira mais recente de fazer, está nas versões mais novas do ECMAScript.
20:12
Mas, você pode se perguntar: "Guanabara, e se eu quiser fazer uma conversão de número para String?"
20:18
De número para String também existem duas maneiras. Na verdade, não são três, são duas maneiras. Eu posso utilizar o string, "n". Assim como eu utilizei "Number", número, eu posso utilizar o string, "n"
20:29
ou string, o valor que eu quiser. Então, String e entre parênteses o que eu quero converter, ele vai gerar uma String, ou eu coloco o que eu quero converter.toString. Então, consigo girar ao contrário
20:40
e jogar isso para uma String, caso seja necessário para frente. É importante que você anote isso no seu caderno.
20:46
Quando eu falo de caderno e anotar, você só vai dar valor quando você perceber lá na frente
20:52
que você quer lembrar um negócio que estava dentro de uma aula e fala assim: "Eu acho que estava na aula dois". Mas, n tava na aula dois, você têm que assistir a três.
20:59
"Eu acho que está na três". Você vai ficar procurando um monte de aulas e vai ter que reassistir boa parte do curso.
21:05
Então, anota no seu caderno, vai por mim, funciona muito. Então, se eu quiser, por exemplo, que esse meu
21:11
"s" seja considerado String, eu posso botar "s", que é um número, to.String, abre e fecha parênteses
21:18
ou, simplesmente, eu faço isso: coloco o "s" entre parênteses, tem que ser dois,
21:24
porque tem que fechar o da frente. Então, eu boto assim: +String(s). Então, funciona. Esse Number converte para um número, esse String converte para um String. Eu gosto mais dessa sintaxe mais
21:34
recente. Vocês vão ver que vai funcionar sem problema nenhum. Na verdade, eu nem precisava converter. Olhe lá, seis com cinco é igual à onze, funcionando perfeitamente. Lembrando que isso não é
21:44
obrigatório, nesse caso. Quando você precisar converter para String, você vai acabar dando valor à isso
21:49
E por falar em String e dar valor à ela, eu vou te mostrar aqui em baixo como fazer formatação de novas String´s
21:56
principalmente, a partir do ECMAScript dos mais novos. Imagine o seguinte, acompanhe aqui embaixo, eu criei uma variável chamada "s" e essa variável "s" está como JavaScript.
22:06
Eu já te ensinei que se você fizer isso: "Estou aprendendo s", ele não vai te mostrar,
22:11
"Estou aprendendo JavaScript". Ele vai mostrar que, "Estou aprendendo s". Quer ver? Vamos praticar isso utilizando o Node. Então, para eu não mexer nesse código, já que é um exemplo bem simples, eu vou abrir o Node.
22:23
Para abrir o Node, a gente abre um terminal novo, que é Ctrl + Shift + crase, a gente já aprendeu. Ou se você quiser, vou fechar aqui, pode ver aqui em terminal, novo terminal. Com cuidado e com cautela
22:35
para você não abrir um monte de terminais. Fique sempre de olho pra ver se você está com um ou dois terminais abertos, no máximo, para não ficar muito pesado. E nós vamos abrir o Node.
22:43
Então, já tô com o Node aberto, vou maximizar para a tela ficar cheia e vou fazer, exatamente,
22:49
o que estava aqui antes, var s = 'Javascript'. Na verdade, no JavaScript, tanto faz aspas simples ou aspas duplas
22:56
Então, ele já definiu. Se eu mandar escrever "s", ele vai mostrar 'JavaScript'. Se eu mandar mostrar, exatamente, o que estava antes, " Eu estou estudando 's' ", ele vai mostrar,
23:08
'Eu estou estudando 's', a gente já aprendeu isso. Mas, se eu mostrar, " Eu estou estudando ' +s "
23:15
concatenado com "s", com sinal de mais, com uma String. Lembra? Desse lado tem uma String e desse lado tem um String, porque o "s" também é uma String
23:22
" Eu estou estudando JavaScript ". String mais String, o "mais" serve para concatenar. Em número mais número, o "mais" serve para somar. Então, vamos lá, essa é a maneira tradicional
23:32
Quer ver um negócio?Vou dar Ctrl+L para limpar. Vamos declarar uma variável, nome para Gustavo, vou botar
23:39
idade pra... eu não estou botendo a "var", mas eu posso botar a "var" na frente também. idade, quarenta um e vou botar nota, cinco e meio. Então, eu criei três variáveis, nome idade e nota
23:53
Se eu mandar nome, ele mostra "Gustavo". Se eu mandar idade, ele mostra quarenta e um. Se eu mandar nota, ele mostra cinco e meio. E se eu quiser escrever: " O aluno Gustavo, de 41 anos,
24:04
tirou 5,5". Olhe o trabalho que vai dar. O aluno ' + nome ' com ' +idade ' anos tirou a nota ' +nota '
24:17
Olha só a quantidade de "s". Você viu que eu até me enrolei na hora da digitação. O aluno tal com tantos anos de idade tirou a nota tal .
24:25
"O aluno Gustavo, com 41 anos, tirou nota 5,5 ". E o que eu fiz foi, ao invés de utilizar esse,
24:31
que não faz interpolação, eu uso a parte com concatenação. Então, a gente acabou de usar
24:37
essa forma que está aparecendo aqui embaixo, utilizando a concatenação. Só que nas versões mais
24:42
recentes do JavaScript tem uma forma muito mais legal de trabalhar isso. O nome dessa técnica:
24:47
Template Strings, ou seja, o template de strings, formatador de strings
24:52
Olhe aqui embaixo como a que vai fazer. Eu estou aprendendo... na verdade, ali não é aspas simples,
24:58
é crase. A gente vai utilizar a crase, porque a crase é a delimitação do que a gente chama de tempo e de String
25:04
Então eu vou utilizar entre crases e vou botar esse símbolo que está aqui embaixo, que a gente chama de placeholder. Mas, não fica se preocupando com o nome das coisas.
25:12
Eu só estou te dizendo que essa parte vermelha, esse cifrão, o dólar, como alguns gostam de chamar, seguido de chaves, é o que se chama de placeholder. Dessa maneira, eu consigo de forma mais fácil,
25:22
segundo até a minha opinião. Vamos diretamente para o Node de novo e vamos fazer alguns testes Então, olha só, vamos fazer um template String. No lugar de fazer isso daqui, eu vou fazer o seguinte:
25:32
eu vou abrir crase. Então, entre crases, eu vou colocar: O aluno... e vou botar um placeholder aqui. O aluno ${nome} com ${idade} anos tirou a nota ${nota}
25:49
Dá uma olhada nesse comando. Inclusive, como ele está perto daqui de cima, ele ficou bem menor.
25:55
E menor não significa melhor, eu só acho que isso é uma organização melhor Vamos ver se funciona? "O aluno Gustavo, com 41 anos, tirou nota 5,5.
26:03
O resultado é, exatamente, o de cima. Essa parte de cima, eu utilizei esse mesmo comando, utilizando
26:10
concatenação e aqui embaixo eu utilizei Template Stringue, que é uma novidade das últimas versões do
26:16
ECMAScript e que os navegadores mais atuais estão totalmente compatíveis com ela Eu gosto mais dessa aqui, mas se por acaso você quiser ou já é do JavaScript mais antigo não tem nada tem
26:26
problema nenhum com isso. Você pode fazer esse daqui de cima, sem problema, ele ainda está compatível.
26:33
Eu vou sair do meu Node e vou sair no terminal para eu modificar essa linha. Ao invés de
26:38
" A soma dos valores é: ", vou dar uma melhorada. No meu alert, eu vou utilizar crase no lugar das aspas
26:46
E vou colocar: ..."
26:55
Viu como ficou bem melhor a minha resposta ? Olha isso, " `A soma entre ${n1} e ${n2} é igual a ${s}` "
27:01
Olha como ficou mais bonitinha, ficou mais elegante, ficou mais limpinha a minha linha de comando
27:07
Vou salvar, atualizar e vamos ver. " Digite um número ". Vou digitar cinco e dois e meio, já que eu utilizei
27:13
o Number ele vai se virar. A soma entre 5 + 2,5 = 10,5
27:20
Então, eu consegui, utilizando o Template String, facilitar bastante a minha vida
27:26
Então, nunca se esqueça, essa é a forma a gente vai utilizar bastante, utilizando aspas simples para String
27:32
simples ou as duplas, também para String simples, sem interpolação . E nós vamos utilizar Template Strings quando eu quiser interporlar, quando eu quiser utilizar o place holder
27:42
para facilitar minha vida. Então, eu vou utilizar sempre dos dois tipos para a gente treinar sempre. Existem outras coisas que podem ser feitas com Strings, utilizando essa mesma variável "s" que a gente
27:52
criou. Eu posso utilizar s.length, note que não têm parênteses no final porque é um atributo.
27:58
Mais pra frente vai entender melhor. O "length" me diz qual é o tamanho da String, quantas letras tem essa String. Outra coisa que eu posso fazer é jogar ela para letras maiúsculas,
28:08
utilizando o método, dessa vez tem parênteses, s.toUpperCase(). Lembrando que o "u" e o "c",
28:13
como está representada aqui embaixo, também são letras maiúsculas, e ele joga tudo para letra maiúscula e o s.toLowerCase() e vai jogar para letras minúsculas. Então essas são apenas três informações extras
28:24
que a gente pode fazer. Mais para frente a gente pode até aprender algumas funcionalidades a mais que a gente pode fazer com o String, como o fatiamento, busca dentro de Strings,
28:32
a gente para fazer um monte de coisa mais. Cara, o teu estudo de JavaScript está só no início, acredite em mim
28:38
Vamos criar um documento novo, um novo exercício pra gente trabalhar isso aqui. Então, eu tô com exercício002, exercício003, que eu fiz durante essa aula, vou criar o exercício004.
28:46
Dessa vez, eu não vou copiar e colar, eu vou criar um novo. Então, eu vou aqui dentro da aula06, botão direito,
28:52
new file, eu vou criar o ex004.html, não se esquece de botar o ponto html também.
28:58
Aqui eu vou criar um documento-base HTML. É digitar em minúsculos html:5, ou é só colocar "htm", e ja´cliquei aqui,
29:07
ele já criou essa parte toda.No final do body, eu vou criar um script Você pode também criar o script só digitando, sem tag. Ao invés de digitar tag e script,
29:16
é só eu digitar em letras minúsculas, script. E ele já cria a tag para mim.
29:21
Eu vou fazer o seguinte, vamos perguntar o nome de uma pessoa var nome = window.prompt ( ` Qual é seu nome ? `)
29:32
E aqui embaixo, eu vou mostrar na tela, pode ser por alert, mas eu vou te mostrar um comando novo.
29:39
É o document.write. O "write", escreve na tela , o "writeIn", escreve e pula pra linha de baixo
29:45
Vamos começar com o "write" pra gente entender. Document.write vai escrever nessa parte roxa, no caso,
29:51
mas vai ficar branca. Document.write, vou botar como template string. Vou colocar, seu nome tem tantas letras
29:59
Olha que legal, nesse "tantas letras", eu vou botar o "nome.lenght", que é o tamanho dele
30:06
Eu vou dar uma encolhida pra você poder ver o comando inteiro. Então, dá uma olhada. Escreva no documento, seu nome tem tantas letras. Vamos salvar e vamos abrir o arquivo, que é o exercício004
30:19
Tem muita gente que atualiza, mas não é atualizar. Porque esse que eu estou rodando é o exercício003
30:24
Eu quero rodar o exercício004. Então, eu vou abrir e ele já está aqui, cliquei duas vezes e ele abriu. Vou até fechar essas duas abas. Olhe lá, "Qual é o seu nome? Gustavo"
30:34
"Seu nome tem sete letras". Viu como ele fez? E eu posso utilizar aqui dentro tags html
30:41
Por exemplo, posso botar um "h2". Na verdade, "h2" não é tamanho da letra, mas é um artifício
30:48
para eu colocar a letra um pouco maior. "Qual é o seu nome?". " Gustavo". "Seu nome tem sete letras". Na verdade, isso aqui é meio zoado. Eu não vou fazer assim. Vou te mostrar o jeito certo.
30:56
Isso aqui é título, "h2" faz título". Para o que eu quero fazer, eu vou criar uma tag style
31:02
Aqui dentro vou colocar o body e vou colocar o fonte. Vai ser normal, 20pt (que é o tamanho), arial, ponto e
31:12
vírgula. Isso é css. Salvei, vou atualizar . " Qual é o seu nome?". "Maria". " Seu nome tem 5 letras".
31:18
Vou colocar assim: "Olá ${nome}, seu nome tem ${nome.length}."
31:25
Salvando. Dá uma olhada, vamos atualizar. Vou colocar: "José" "Olá, José! Seu nome tem 4 letras."
31:35
Outra coisa que eu posso fazer é: fazer um outro document.write e mostrar ele em maiúculo.
31:43
document.write ( `Seu nome em maiúsculas é $(nome.toUpperCase)`)
31:54
Vamos salvar e rodar. "Gustavo". "Olá, Gustavo! Seu nome tem 7 letras" Está vendo que ficou tudo junto? Isso foi porque eu utilizei "write". No lugar de "write",
32:04
eu vou botar o "writeln" . Ou eu posso utilizar um "br", que é a quebra de linha HTML, que a gente pode fazer
32:11
aqui dentro, porque a gente aceita tags. Eu posso colocar, por exemplo, meu nome em negrito. Para isso, eu coloco . A gente viu isso em HTML, lembra? Strong é o que faz ficar em negrito.
32:21
Antigamente, era . Agora, é "strong". Vamos salvar, atualizar e botar aqui "Gustavo" de novo.
32:27
"Olá, Gustavo! Seu nome tem sete letras. Seu nome em maiúsculas é..." Nem funcionou o "writeln".
32:32
Vamos botar o "write" normal e no final depois de "letras", eu vou colocar um "br".
32:38
Ele significa "break row", ou seja, quebre para linha de baixo. Atualizar, "Gustavo"
32:43
Agora ele fez. E porque ele escreveu "UpperCase [native code] ]" ? Porque eu esqueci de botar parêntesis.
32:49
Abra e feche parêntesis, porque é a chamada para o método. Rodei, " Gustavi". "Olá, Gustavi! Seu nome tem sete letras. Seu nome em maiúsculas é GUSTAVI"
32:59
Se quiser em minúsculas, eu também posso fazer. Vou botar uma quebra de linha aqui embaixo e colocar:
33:04
document.write(`Seu nome em minúsculas é ${nome.toLowerCase() }`)
33:15
Abre e fecha parênteses para não dar mesmo erro anterior. Salvei e atualizei "Qual é seu nome?" "Gustavo". "Olá, Gustavo! Seu nome tem sete letras. Seu nome em maiúsculas é GUSTAVO.
33:24
Seu nome é minúsculas é gustavo." Está vendo o"g" que era maiúsculo ? Eu posso fazer tudo bagunçado. Inclusive, colocar acentos. Vou colocar...
33:32
Conceição Ficou tudo bagunçado. "ok" . "Olá, ConCeiÇÃo! Seu nome tem nove letras. Seu nome em maiúsculas é CONCEIÇÃO.
33:46
Seu nome em minúsculas é conceição." Repare que ele refez os assentos sem problema nenhum
33:51
Então, essas são algumas pequenas funcionalidades que a gente pode fazer para formatar Strings.
33:57
E pra finalizar, vem uma coisa que a gente também vai querer, que é formatar números Considere que numa formatação de números, uma variável "n1" é igual à 1543.5
34:07
Se eu mandar escrever o valor de "n1" ele vai escrever 1543.5
34:12
Vamos abrir o Node e trabalhar isso. Então, a vamos abrir o terminal. Já te ensinei várias vezes como fazer
34:17
Vamos abrir o Node. Aqui, eu vou criar uma variável chamada "n1" var n1 = 1545.5
34:26
Se eu mandar escrever "n1", ele vai escrever, 1545.5 . Sem problemas. Mas, e se eu quisesse esse 1545 com duas casas decimais? Eu vou te ensinar o seguinte:
34:36
você pode escrever, n1.toFixed(2) para fixo com duas casas decimais. Olha que bonitinho
34:42
1545.50 , certo? Então, eu consigo fazer o toFixed. E se você quiser, vou te ensinar um macete.
34:50
Aqui a gente usa a vírgula, no Brasil a gente usa bastante vírgula se você quiser vírgula, você pode fazer assim: n1.tofixed(2).replace(' . ' ' , '-)
35:01
Eu vou trocar uma coisa por outra. Entre aspas, eu coloco o que eu vou trocar. Eu vou trocar o
35:07
ponto por vírgula. Então, dá uma olhada nesse comando. Olha isso, 1545,50
35:13
Então a gente tem que fazer um esforço um pouco maior para fazer a conversão de números Então, a gente acabou de aprender o to.Fixed, que é um método interno de todos os Numbers.
35:24
Mas, vamos supor que 1543.5 fosse o salário de uma pessoa. Como se faz para mostrar o real e tudo mais ?
35:32
Eu vou te mostrar um macete bem legal, que não é muito simples. Na verdade, ele é avaçado
35:38
Mas, olha só o comando que eu vou te ensinar. Estou de volta no Node e vou formatar da seguinte maneira,
35:44
n1.toLocaleString(), que é uma String localizada. Ou seja, localizada por parte do mundo
35:53
E eu vou localizar por 'pt-br', assim como eu digitei. Então, eu vou localizar a String em português,
36:00
vírgula e entre entre chaves eu vou colocar as configurações, os atributos. Isso, na verdade, é um objeto em javascript, a gente vai ver isso mais pra frente.
36:10
Mas aqui dentro vou colocar algumas configurações, como por exemplo: style: 'currency', ( pra ele mostrar em
36:20
valor monetário ) currency: 'BRL' (real do Brasil)
36:26
Claro, é um comando grande. Você nem vai usar tanto assim, mas anota esse comando. Dá uma olhada no que ele vai fazer, olha isso: R$1,545.50
36:34
n1.toLocaleString('pt-br', { style: 'currency' , currency 'BRL'}) Quero dizer que eu quero localizar para o Brasil e o estilo vai ser 'currency', que é dinheiro e currency vai ser
36:44
Brasil real. Se eu quiser em dólar, é só botar 'USD' e já vai ficar em dólares, certa?
36:50
Se você botar 'EUR', ele vai ficar em euro. Viu como é fácil a localização dentro do javascript?
36:57
E no Node, ele não faz a inversão, ele vírgula aqui e ponto aqui. No seu navegador ele vai fazer direto
37:04
com a vírgula no final e o ponto. Pode confiar, funciona bonitinho. Aqui é a única coisa que ele dá uma inversão.
37:10
Você não precisa utilizar "replace", mas se quiser pode, aqui no final, botar "replace" E fazer, exatamente, como a gente fez antes. Então isso é muito importante. Aprende essa linha, anota ela
37:23
E, com isso, a gente chegou muito longe nessa aula. Espero que você tenha aprendido. Espero que você tenha anotado tudo,
37:30
se não anotou, volta no vídeo, vai pausando e anotando, porque isso vai ser muito útil lá na frente
37:36
Eu me despeço por aqui, a gente se vê no próximo vídeo, onde a gente vai começar a ver os operadores. Nessa aula a gente viu um operador que serve para duas coisas. A gente viu a soma e a concatenação,
37:47
ambos usam o "+", vai depender de qual é o tipo de cada um dos lados. Mas, na aula que vem a gente vai ver todos os operadores pra gente poder fazer conta no javascript
37:56
e fazer conta é uma coisa muito comum no mundo da programação. Não significa que
38:01
"programar de muita matemática". O que precisa de muita matemática sua vida, você vive fazendo matemática. Mas, vamos deixar esse papo para a aula que vêm,
38:08
porque a gente vai começar a falar de operadores na próxima aula. Nunca se esqueça, pratique tudo aquilo que a gente colocou aqui nessa aula. Não adianta você só assistir eu fazendo o código.
38:17
Você precisa criar os seus próprios exercícios. Um grande abraço! Não se esqueça de se inscrever no canal
38:23
aqui embaixo. Aqui em cima você vai ver todas as playlists que nós julgarmos importantes para que você complemente seus estudos. Afinal de contas, o Curso em Vídeo, talvez você tenha
38:32
conhecido agora por conta do patrocínio do Google, mas a gente está criando conteúdo há muitos anos.
38:38
E todos os cursos que nós julgarmos importantes vão estar aqui em cima. E se não estiver aqui em cima, visita o nosso canal, Curso em Vídeo. É só procurar o Curso em Vídeo no youtube, vai lá e procura os cursos
38:48
a gente já disponibiliza gratuitamente há muito tempo. Um grande abraço, boas práticas e até a próxima!
38:57
Legendas: Samara Affonso
*/
