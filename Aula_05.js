// Variáveis e Tipos Primitivos
// Link da aula: https://www.youtube.com/watch?v=Vbabsye7mWo

/*Você sabe o que são variáveis? Sabe declarar variáveis em JavaScript? Sabe quais são os tipos primitivos do JavaScript? Consegue entender o que significa colocar um valor null dentro de uma variável em JavaScript?

Pois, para responder a essas e muitas outras perguntas, assista essa aula do Curso de JavaScript para Iniciantes até o final. E não se esqueça sempre de praticar todas as atividades que fizermos durante o vídeo no seu próprio computador.

Aula do Curso de JavaScript e ECMAScript para Iniciantes, criado pelo professor Gustavo Guanabara para o canal CursoemVideo.*/

/*TRANSCRIÇÃO
    0:00
Como de costume, antes da aula, eu vou te fazer quatro perguntas: Em primeiro lugar, você já aprendeu como se gerencia pastas utilizando o Visual Studio Code?
0:09
Você sabe abrir um projeto, colocar dentro de pasta, organizar melhor seus arquivos para facilitar o seu estudo mais pra frente?
0:15
Outra pergunta: o Node.js está instalado no seu computador? E a essa pergunta, eu adiciono até uma outra sub-pergunta:
0:23
Você sabe para que serve o Node.js? Se olhar um código, você sabe me dizer qual parte é HTML5, qual parte é CSS, qual parte é JavaScript?
0:33
E por falar em JavaScript, Você já sabe disparar alertas? Disparar confirmações? Perguntas?
0:39
Olhe as perguntas ao lado. Veja se em alguma delas você tem alguma dúvida E se estiver com alguma dúvida, você já sabe como funciona.
0:48
É sinal de que você pulou algumas das aulas e perdeu alguns conceitos importantes, valiosos para essa aula.
0:54
Então não se esqueça, aqui em cima, você aperta e vai para a primeira playlist. Que é sempre a playlist do curso completo.
1:00
Agora, se você conseguiu responder a essas perguntas, sem problema nenhum Seja bem-vindo a mais uma aula de seu curso.
1:07
Legendas: Rayssa Victoria
1:19
Olá, Pequeno Gafanhoto! Seja bem-vindo a mais uma aula do seu Curso em Vídeo de JavaScript, totalmente patrocinado pelo Google.
1:27
O meu nome é Gustavo Guanabara, eu sou professor, e seja bem-vindo, seja bem-vinda à quinta a aula do seu curso,
1:33
onde a gente vai falar sobre tipos de dados e variáveis. E se nesse momento você está pensando:
1:38
"Caramba, essa aula vou pular, porque eu já sei o que é uma variável." Calma! Porque variáveis em JavaScript têm uma pequena diferença
1:47
e talvez você não esteja acostumado com esse tipo de filosofia da linguagem. Vamos dar continuidade. Anteriormente, no seu curso de JavaScript
1:56
a gente aprendeu a disparar três tipos de janelas bem simples: O alerta, que está aqui em cima, que é o window.alert() ou simplesmente alert().
2:04
Você aprendeu também a janela de confirmação, que parece um alert, mas tem opção de "Ok" ou "Cancelar".
2:10
E também aprendemos esse de baixo, o prompt(), que é uma forma de você interagir com o usuário
2:15
solicitando que ele digite alguma coisa. E a gente tinha um pequeno problema A parte de cima não, o alerta é só uma mensagem, clica em Ok e segue sua vida
2:24
Eu não te ensinei uma maneira, na aula anterior, de como pegar na janela do meio
2:29
se o usuário apertou no "Ok" ou no "Cancela", para eu poder tomar ações diferentes. Ou por exemplo, se eu perguntei o nome da pessoa usando um prompt.
2:38
Onde fica guardado esse nome? A pessoa digitou o nome, para onde ele foi? E até o momento, essas duas perguntas
2:44
têm uma única resposta: os dados não foram para lugar nenhum! Eles simplesmente se perderamm porque a gente não sabia como guardar eles. E é exatamente isso que a gente vai aprender
2:53
nessa aula. Eu vou te ensinar como guardar dados, para usá-los mais pra frente, mas antes de falar e de variáveis, de espaços de memória, espaço de armazenamento
3:02
eu tenho que mostrar o seguinte: uma coisa muito importante, comentários. Às vezes os programadores deixam de lado o uso de comentários
3:10
e comentário é uma coisa muito importante quem comenta bem os seus códigos, mantém ele bem documentado
3:16
e só quando você for um programador mais experiente, você vai pegar um código que você escreveu há cinco anos e vai olhar e falar assim:
3:23
"Caramba, eu não lembro nada desse código." E se ele estivesse comentado você ia achar tudo muito mais fácil.
3:29
No JavaScript, comentários podem utilizar dois tipos de simbologia primeiro, as // que apareceram aqui. E segundo, a /* */
/*
3:39
que é um símbolo só, separado em dois pedaços. A utilização é muito simples você que já usou qualquer linguagem de programação, sabe o que significa essa simbologia
3:47
Se você é um aluno novo, está chegando agora, não tem problema nenhum eu vou te explicar. O // serve pra botar um comentário em uma única linha
3:56
então, qualquer coisa que eu escreva depois da // é considerado um comentário. (já te explico melhor isso) se eu colocar entre /* e */ /*eu consigo fazer comentários de mais de uma linha.
4:07
Para exemplificar, eu vou abrir o código que a gente fez na aula anterior na aula quatro, eu vou te mostrar como funcionam os comentários.
4:17
Na aula anterior eu te mostrei como a gente cria uma pasta "cursojs" abrimos a "aula04", que foi exemplo anterior
4:25
E temos o ex001.html então esse é o arquivo. Vou encolher aqui, é só clicar nesse papel em branco
4:31
ele encolhe. Eu vou mostrar esse arquivo onde ele está, dentro de cursojs/aula 04
4:37
e eu tenho o exercício 001, que eu vou abrir um navegador então basicamente o que ele fez
4:42
ele mostrou pra mim esses três comandos, ele vai executar esses três comandos antes de mais nada.
4:47
primeiro ele vai dar um alerta, minha primeira mensagem, foi exatamente isso daqui dou "ok", logo em seguida, "Está gostando de JS?", "ok"
4:54
"Qual é o seu nome?" "Gustavo", "ok" ele mostrou, e eu me livrei da maldição.
4:59
Basicamente ele executou esses três comandos em JavaScript. Eu já perguntei no início da aula, se você sabe diferenciar o que é HTML, CSS e JavaScript.
5:08
Esse símbolo de comentário só serve para dentro do JavaScript. Então por isso eu perguntei no início, é importante você saber que o trecho de JavaScript é esse daqui
5:16
então o símbolo de // e de /* só funciona aqui dentro. Aqui fora são outros
5:22
símbolos de comentário. Então eu posso fazer o seguinte, por exemplo, se eu colocar //
5:27
nesse primeiro comando e nesse segundo comando. Viu que o próprio Visual Studio Code já ficou verde?
5:35
Já mudou a cor da do meu código? Vou salvar e vou atualizar no meu navegador.
5:40
Quando atualizar, ele já começou pedindo meu nome. Significa que ele simplesmente ignorou
5:46
esses dois primeiros comandos (vou colocar aqui "André"). Então funcionou, se eu botar basicamente, tudo como um comentário
5:52
eu posso atualizar e ele não fez pergunta nenhuma, porque nenhum dos comandos de JavaScript foram colocados.
5:58
E depois vem uma outra coisa, já que estou colocando // dentro de todas as linhas e são múltiplas linhas
6:03
você pode fazer assim, você pode colocar o /* e no final o */
/*6:09
Eu delimito todos os comandos que eu quero como comentários. Desse jeito, o resultado é exatamente o mesmo.
6:15
Por exemplo, vou colocar o */ /*aqui significa que tudo o que está entre esses símbolos é um comentário,
6:22
essa parte que ficou de fora, então ele vai perguntar meu nome. Tudo o que eu deixar de fora, é fora do comentário. Então isso é para a depuração, isso é uma grande utilidade
6:29
dos comentários para a depuração que é ver como que o programa está funcionando. Outra forma de comentar é usar o // depois de cada comando para explicar para que serve,
6:37
por exemplo, vou botar aqui // vai perguntar o nome...
6:43
É claro que esse comentário é meio bobo, mas quando você foi aprendendo comando os novos, você vai aprender como funciona o negócio. // janela com botão Ok e Cancelar
6:53
então isso daqui é comentário, estou comentando pra que serve a linha nada disso aqui que está verde vai ser considerado. Então se eu executar o programa de novo,
7:02
ele vai me perguntar, primeira mensagem "Está gostando?" o seu nome, ele fez todos os três, mas essa parte "janela com um botão Ok" e "Vai perguntar o nome"
7:11
simplesmente foi ignorada. Isso serve pra você, mais pra frente dar uma olhada no código, ou outra pessoa olhar o seu código e entender de uma maneira mais clara
7:21
Então é pra isso que servem os comentários. Use-os com moderação! Tem gente que comenta tudo e sem
7:26
necessidade, mas é uma ferramenta muito útil no mundo da programação. Mas o nosso assunto aqui não é comentário, é variável e é exatamente sobre esse assunto
7:35
que a gente vai começar a comentar agora. Eu vou te explicar variável um pouco diferente do que os outros professores
7:40
incluindo eu, há algum tempo atrás, explicava o conceito de variável. Se liga aí que eu vou usar um exemplo da vida real e que com certeza você vai entender.
7:49
Imagine o seguinte: você tem um terreno, você está na rua e comprou um terreno.
7:55
aí você quer transformar esse terreno um estacionamento, isso é, você quer receber automóveis para ficarem estacionados no seu terreno. Se você começar a botar carro dentro desse terreno
8:04
loucamente, sem organização daqui a pouco, todo o seu terreno está uma bagunça, você não consegue colocar mais nada
8:10
e muito pior: não consegue tirar os primeiros carros que você colocou. O que normalmente o comércio faz? O que geralmente as pessoas fazem é delimitar marcas,
8:20
colocar vagas dentro do estacionamento. Essas vagas elas são uma marca física de onde os carros vão parar
8:26
exatamente isso está representado aqui do lado. Então o que eu vou fazer aqui, embaixo de mim, é criar seis vagas
8:32
como estão representados aqui embaixo: tem seis vagas. Outra coisa que é importante Outra coisa que é importante, até para a pessoa poder se organizar melhor,
8:40
quem nunca perdeu um carro na vaga no estacionamento de shopping não lembrava onde colocou? Qual é a melhor maneira, que é utilizada até hoje, para você achar o seu carro no
8:48
estacionamento? As vagas são numeradas, elas têm identificação. Então, vou colocar as identificações aqui: a1, a2, a3, a4, a5, a6. Uma vaga de automóvel, chamei de a1 até a6.
8:59
Então, vamos dar os nomes das nossas vagas. Isso aqui embaixo de mim são as instruções necessárias para colocar seis vagas no meu estacionamento.
9:08
O grande problema, é que um estacionamento pode ter vaga para automóvel, se eu chegar com um caminhão
9:14
ou uma caminhonete muito grande, eu não vou conseguir parar. Então eu teria que ter vagas para caminhões e caminhonetes,
9:20
vagas um pouco maiores que eu vou chamar de c1, c2, c3, c4, que eu faria da mesma maneira que a gente fez anteriormente
9:26
existem vagas também para carros menores, para automóveis menores que são as motocicletas.
9:31
Então, eu crio por exemplo, vagas menores. Eu vou criar de m1 até m6, que são seis vagas para motocicletas
9:38
basicamente, o que a gente fez foi organizar espaços no nosso terreno espaços específicos para automóveis, para caminhões e para motocicletas
9:48
porque o tamanho do automóvel vai variar, a partir daí eu posso começar a colocar
9:54
automóveis nas vagas de automóveis, posso começar a colocar caminhões na vaga de caminhão e posso colocar motocicletas nas vagas relativas a elas.
10:02
E como é que eu faço pra colocar um carro na vaga? Dá uma olhada e olha a relação do criando. Eu tenho uma vaga a1 que a gente representou
10:09
anteriormente só de uma ampliada, eu vou dizer o seguinte, ele recebendo um carro novo então botar assim, a vaga a1 recebe o carro1. Esse sinal de igual aqui
10:21
para o JavaScript, sempre que você olhar um sinal de igual você vai ler como "recebe", é um combinado que a gente tem aqui. Nunca chame em JavaScript
10:30
um único sinal de igual de "igual". Um único sinal de igual a gente chama sempre de "recebe"
10:36
sendo assim, essa linha de baixo eu leio assim: "vaga a1 recebe carro." Combinado? E aí, continuando com a ideia do mundo real
10:44
imagina agora, que chegue outro carro para estacionar e ele quer estacionar naquela vaga a1
10:50
isso é, eu quero fazer um a1 recebe carro2. Existe alguma possibilidade física,olhando aqui o gráfico,
10:56
de colocar dois carros numa mesma vaga? E, obviamente, você respondeu: "Não tem como Guanabara, pra eu colocar o segundo carro eu tenho que tirar o primeiro"
11:05
E é exatamente isso que acontece também com os computadores. Para eu colocar o segundo carro, para fazer a1 receber carro2, a vaga a1 receber o segundo carro,
11:14
eu tenho que tirar o primeiro carro para assim, só depois, colocar o segundo carro no lugar.
11:20
Outra coisa que eu posso fazer, também com essa vaga, é dizer "Olha, essa vaga a1 não vai receber carro nenhum! Eu quero tirar o carro que está aqui e não quero deixar o carro nenhum."
11:29
É só fazer isso, a1 recebe null, essa palavrinha "null" existe também no JavaScript.
11:35
Significa que essa vaga vai ficar nula, sem nada dentro e a partir do momento em que eu faço esse comando atribuindo null a essa "vaga"
11:43
eu tiro o carro que está no momento. E se você entendeu isso para a vaga de carro, com certeza você vai entender isso para computadores.
11:52
Computadores também têm espaços, também têm um terreno. Esse terreno do computador a gente chama de
11:58
memória. Sempre que você pensa na memória do computador pensa em um terreno que vai virar um estacionamento. É um espaço gigante onde eu posso colocar ,não carros ,sim
12:08
dados. E se eu começar a colocar dado de forma desenfreada, daqui a pouco eu perco esses dados
12:13
Então, eu preciso dentro da memória do computador, assim como eu fiz com os terrenos, colocar espaços
12:20
delimitados para receber esse valores. Esses espaços amarelos, que apareceram embaixo de mim, a gente chama de
12:26
variáveis. São muito parecidos com as vagas de estacionamento, pra eu utilizar esses três espaços
12:32
que estão aqui embaixo em vez da palavra "vaga" eu não estou criando uma vaga eu estou criando uma
12:37
variável. Então vou utilizar a palavra "var". Para eu poder identificar cada uma das três variáveis
12:43
eu preciso de um identificador. Eu preciso de um nome. Eu vou colocar aqui n1, n2, e n3 para colocar três números, por exemplo. Vamos dar
12:52
identificadores pra eles. var n1, var n2, var n3 Vai criar três espaços no meu grande terreno que é o espaço da memória. Eu posso também
13:01
Colocar valores n1 = 5 Lembra um símbolo de igual é recebe. n2 = 8.5 n3 = 15
13:09
Automaticamente esses valores 5, 8.5 e 15 vão ser colocadas dentro das variáveis. Isso a gente chama de "atribuição".
13:18
E se você ainda está meio perdido, não tem problema nenhum continua assistindo. Cria essa relação na sua cabeça, que você já vai entender direitinho.
13:26
Outra coisa, assim como ocorre lá nos estacionamentos existem vagas de tamanhos diferentes, existem também variáveis de tamanhos diferentes para caber dados de
13:36
tamanhos diferentes por exemplo, aqui embaixo eu acabei de criar três variáveis de tamanhos maiores.
13:42
Então, vou criar três var (só olhar ali, no cantinho). Essas variáveis vão se chamar s1, s2 e s3 por exemplo, que eu vou colocar uma cadeia de caracteres
13:51
A gente chama de "string", por isso o s que está aqui em baixo. Vou criar s1, s2 e s3.
13:56
Dentro dessas variáveis no lugar de números ,como eu coloquei os 5, 8.5 e 15 eu vou colocar palavras.
14:03
"JavaScript", "Curso em Vídeo" e "Guanabara". Para eu fazer isso eu vou colocar s1 = "JavaScript"
14:09
s2 = 'Curso em Vídeo' e s3 = `Guanabara` Percebe que essas cadeias de caracteres, essas palavras, essas frases
14:17
estão entre "aspas"? E eu posso usar em JavaScript três tipos de aspas: As "aspas duplas", o 'apóstrofo' ou aspa simples e a `crase`
14:27
Isso tem diferença para o JavaScript usar uma ou outra, mas aguarda que mais pra frente a gente fala sobre isso, só fique sabendo que existem três
14:35
formas de delimitar um string dentro da linguagem JavaScript. Sendo assim, como falei anteriormente,
14:40
eu tenho seis espaços, cada um tem um nome bem definido, eu não vou confundir
14:48
uma com a outra e sobre esses nomes a gente tem que dar uma discutida em relação a isso. O nome de cada variável, a gente chama de
14:55
"identificador". Existem algumas regras para a nomeação de identificadores, não posso botar qualquer nome
15:01
pura e simplesmente. A primeira regra é que elas podem começar com uma letra, como botei: n1, n2, n3, s1, s2, s3
15:09
Pode começar também com um cifrão, e também pode começar com o símbolo de sublinhado. Isso é uma regra, dificilmente a gente vai usar o cifrão ou o sublinhado na frente, mas é possível.
15:20
Não podem começar com números, isso é o s1 eu não posso chamar de 1s. Daria erro.
15:26
Outra coisa, é possível usar letras ou números, a gente viu isso s1, s2, s3, n1, n2, n3
15:33
É possível utilizar acentos e símbolos. No JavaScript, você pode criar.
15:39
a variável média com acento agudo no "e". Você pode criar variável π utilizando o símbolo de π para isso, não tem problema nenhum no JavaScript
15:47
isso não vai deixar seu programa errado, mais lento, nem nada disso. Elas também não podem conter espaços
15:54
Eu não posso colocar espaço no meio de um identificador. Eu vou substituir o espaço pelo sinal de sublinhado, que eu coloquei aqui em cima
16:00
E por fim, não podem ser palavras reservadas. Por exemplo, a palavra "function", a palavra "alert", eu não posso criar uma variável
16:09
usando palavras que o JavaScript usa como comandos. Eu não posso, por exemplo, criar uma variável chamada "var".
16:15
Eu não conseguiria botar o comando "var var". Deu pra entender como seria confuso? E pra começar a trabalhar com variáveis, a gente vai utilizar o Node.js
16:24
que a gente instalou em algumas aulas anteriores. Então, abra o seu ambiente e vamos abrir o Node.js.
16:33
Já estou aqui no meu Windows. Para abrir o Node.js, vou te mostrar de duas maneiras a primeira maneira, que é mais simples, é só clicar no botão Iniciar
16:41
e procurar Node.js. Se você instalou como a gente fez lá nas aulas anteriores. E se você não viu aula anterior
16:48
assista. É a primeira playlist aqui de todo o card aqui em cima tem um card (um i). É só clicar nele e acessar a primeira playlist.
16:58
Sem instalar o Node.js, vai ficar meio complicada a sua vida, a gente vai utilizar muito ele para treinar.
17:03
Uma vez aberto o Node.js, mostra esse prompt, que é o sinal de > E eu posso pedir para ele mostrar algumas coisas como, por exemplo, mostra "Oi" pra mim, Node.js
17:12
E ele escreveu "Oi". Faz para mim quanto é 3 + 2 Ele diz "5"
17:17
É muito parecido com a linguagem Python. O IDLE do Python, que vai me responder isso.
17:23
Outra coisa que eu posso fazer, é criar variável como a gente fez var nome = "Gustavo"
17:29
Eu acabei de criar uma variável, um espaço na memória, chamada "nome" e esse nome vai ser "Gustavo".
17:35
Ele me deu "undefined", porque eu não mandei mostrar o nome eu mandei de criar variável. Ele criou a variável.
17:41
Se eu mandar mostrar o nome Qual é o nome? "Gustavo" Cuidado! Se eu mandar escrever nome assim, ele vai escrever a palavra "nome".
17:47
Se eu mandar escrever nome assim, ele vai escrever o conteúdo da variável.
17:53
Se eu quiser eu posso mudar o nome. Nome não é mais "Gustavo", nome agora é "Paulo". Ele vai perder o "Gustavo"
17:58
Assim como na vaga do carro, eu tinha que tirar o primeiro carro, para botar outo. Eu vou ter que tirar um nome "Gustavo" Para botar o nome "Paulo". Note aqui, que eu usei aspas duplas e aqui eu usei aspas simples, tanto faz,
18:08
vai funcionar. O nome agora é "Paulo". Se eu mandar mostrar o nome, ele mostrou "Paulo" e não "Gustavo".
18:14
Ficou claro? Essa é a primeira maneira de abrir o Node.js Para fechar é só você digitar .exit e ele vai fechar. Beleza? Essa é a primeira maneira
18:24
A segunda maneira é dentro do Visual Studio Code, que acaba ficando mais fácil já que a gente está aprendendo
18:29
e está usando bastante ele. A gente pode fazer dessa maneira. Vou fechar aqui meu código (não precisa nem fechar, pode deixar ele aberto) e você vai fazer o seguinte:
18:38
você vai clicar aqui em cima em Terminal > Novo Terminal ou apertar o Ctrl+Shift+`
18:44
Olhe no seu sistema operacional, qual é a tecla de atalho. Eu vou até abrir Ctrl+Shift+`.Ele abriu um terminal aqui embaixo.
18:52
Vou até maximizar e vou clicar na setinha aqui, para tornar ele de tela cheia.
18:57
Para eu entrar no node, é simples. É só digitar "node", ele vai na mesma tela.
19:03
e eu posso, dentro do meu Visual Studio Code, utilizar o node. Por exemplo, vou criar uma variável
19:09
var idade = 18 Criei uma variável. var salário = 1550.35
19:21
Beleza var sexo = "masculino"
19:27
Então, tem estas três variáveis, se eu quiser ver a idade da pessoa Idade 18 Qual o salário dela? 1550.35
19:33
Qual é o sexo? Masculino Da mesma maneira, eu posso sair com .exit e ele vai voltar
19:39
pro meu terminal. Eu posso fechar o terminal digitando exit. Você percebe que são dois ambientes diferentes?
19:46
o node, o prompt é >, o terminal o prompt é #. Então, ele vai sair do terminal.
19:52
Qutra maneira de sair do terminal estou com ele aberto, é fechar utilizando esse "x".
19:58
Muito cuidado! Porque às vezes a pessoa vai abrindo terminal, eu apertei Ctrl+Shift+`
20:04
várias vezes. Eu acabei de abrir dez terminais Às vezes você está sentindo que o seu computador está meio lento
20:12
É por que você abriu um monte de terminal. Vou sair, exit. E você vai falar "Mas não saiu do terminal
20:19
ele está no terminal." Ele está em outro terminal. Eu tenho que fechar cada um deles e não adianta fechar na seta, eu tenho que vir e dar "exit" em cada um deles
20:28
O sétimo... Viu como é que tá ficando lento? Quanto mais terminais estiverem abertos,
20:34
mais lento vai ficando o meu computador. Então, vamos tomar cuidado! Porque às vezes quando você utiliza
20:40
o Visual Studio Code, você se empolga, abre mais um terminal e depois só está lento e você não sabe porque. É por conta disso. Essas são as duas maneiras de fazer
20:50
Vou abrir um terminal, vou abrir um Node, se você depois não quiser que a tela fique cheia é só você clicar na seta e ele volta para a posição original. No Node, como a gente falou, vamos criar variável
21:01
var n1 = 8 var n2 = 5
21:06
Se eu mandar mostrar n1, 8. Se eu mandar mostrar n2, 5. Se eu mandar mostrar: n1 + n2
21:13
Ele vai somar 5 com 8 e vai dar 13. Se por acaso essa tela começar a ficar cheia é só você apertar Ctrl+L.
21:21
L de "limpar", você apertou Ctrl+L, ele limpou a tela do meu Node. Acabamos de demonstrar a criação de uma variável e a utilização dessas variáveis.
21:33
Lembrando que existem as regras que estão aqui do lado. São essas seis regras aqui que a gente tem que seguir na hora de escolher um nome para o identificador. Eu até te recomendo
21:43
como eu disse anteriormente, pegue o seu caderno, anota,tira print dessa tela (vou até fazer uma pose).
21:50
Tirou? Só seguir essas seis regras não é sinal de sucesso. Tem um monte de programador e que dá umas
21:58
deslizadas gigantes na hora de seguir essas regras e escolher nomes de identificadores.
22:04
Eu trouxe algumas dicas para você escolher nomes de identificadores. A primeira dica é: maiúsculas e minúsculas fazem diferença.
22:12
Se eu criar uma variável "a" eu tenho que usar "a". Se eu criar uma variável "a" e tentar mostrar uma variável "A", vai dar erro.
22:22
Vou mostrar pra você. Se eu criar variável "a" valendo 10 e depois de criar variável "A"
22:28
valendo 20 eu acabei de criar duas variáveis. Se eu mandar mostrar a é 10, se eu mandar mostrar A é 20. Por exemplo, vou criar uma variável
22:35
chamada b = 30. Se eu mandar mostrar o B ele vai dizer "B não foi definido"
22:41
E você vai falar: "Foi definido sim!" Não foi, porque B e b faz diferença.
22:46
Então, abre seu olho, essa primeira regra é muito importante. A segunda é o seguinte: tente utilizar nomes coerentes para as suas variáveis
22:54
A gente fez isso antes. Quero guardar o nome de uma pessoa? O nome da variável é "nome" Quero guardar o salário? A variável se chama "salário", pelo menos "sal".
23:02
Quero guardar idade? Chamo de "idade" Enfim, nomes coerentes pelo amor de Deus!
23:08
Tem um monte de programador que diz o seguinte: "Minha variáveis vão se chamar n1, n2, n3, n4."
23:14
Pra mim n1, n2, n3, n4 são 4 números "Não, n1 é nome, n2 é idade, n3 é telefone e n4 é salário"
23:21
Tá maluco! Isso faz com que você se torne o que eu gosto de chamar de "programador alfabeto" ou "programador contador".
23:28
O "programador alfabeto" é que todas as variáveis deles são a, b, c, d, e, f, g, h e o "programador contador" é aquele que todas as variáveis dele são n1, n2, n3, n4, n5.
23:36
Foge disso! O "programador alfabeto" também tem aquele x, y, z .Toda variável é x, y, z.
23:42
É claro que a gente vai usar, de vez em quando, isso para exemplificar mas na hora de programar: nome na variável "nome" ,idade na variável "idade",
23:49
telefone na variável "tel", por exemplo. Não vai chamar nome n1, telefone n2
23:55
e salário n3. Foge disso, pelo amor de Deus! Sendo assim,
24:00
variáveis servem para a gente guardar isso, que está aparecendo na tela dados. E dá uma olhada que eu coloquei vários tipos de dados. Você percebe que são dados diferentes?
24:10
Dá uma vasculhada, vê que tipo de dado a gente está colocando. algumas delas são palavras, alguns são números, até mesmo tem alguns números com vírgula,
24:18
outros números sem a vírgula (a vírgula é o ponto decimal). Eu tenho o valor true e false. Vou fazer um trabalho pra você
24:25
Vou dar uma separadinha. Eu tenho esses dados que estão separados. Na parte de cima, perto da cabeça
24:32
5, 18 e -12 são números. Esses números eles não têm parte fracionária, não tem valor depois da vírgula
24:39
é o que a gente chama de "número inteiro". A parte de baixo 0.5 , -15.9 , 3.14 , 8.0
24:46
São números que a gente chama de "reais". São números com ponto flutuante ou chamado de float. Na verdade, o JavaScript trata um pouco diferente de outras linguagens. Para o JavaScript
24:57
todos esses daqui são de um mesmo tipo, que é o "number". O JavaScript e não vai diferenciar a priori
25:04
valores numéricos inteiros e valores numéricos reais. Aqui embaixo de mim eu tenho: "Google" 'JavaScript' e `Maria`
25:11
Inclusive representados com aquelas aspas um pouco diferentes, que a gente vai ver um pouco mais pra frente. Esses dados que estão aqui embaixo a gente vai chamar "string".
25:20
Que são cadeias de caracteres. Uma string e também pode ser um conjunto de números por exemplo, o seu telefone o seu
25:26
CPF, seu número de identidade eles são números, mas eles têm ponto, eles têm traço. Então eles não são numéricos, eles não são number.
25:34
O seu CPF é string, ele é um conjunto de caracteres composto por números e traços e pontos.
25:41
E por fim, os valores true e false, são "verdadeiro" e "falso" em inglês. A linguagem de programação
25:46
chama isso de boolean, ou valor booleano. Esses três que estão aqui do lado são os três "tipos primitivos primordiais"
25:55
No início desse curso, a gente vai falar muito sobre o tipo de dados e vamos nos focar, basicamente, nesses três primeiros:
26:02
number, string e o boolean. Mas saiba que no JavaScript existem muitos outros tipos primitivos
26:08
Vou dar exemplos. O Number tem dois valores internos muito importantes.
26:14
Que são o "Infinity" e o "Not a Number" (o NaN) Se você começou a aprender JavaScript, provavelmente recebeu várias vezes essa mensagem
26:23
NaN, "Not a Number". A gente vai explicar um pouco melhor sobre isso. A gente também tem os tipos no "null" e "undefined".
26:30
que tem um monte de gente que confunde (vamos falar um pouquinho sobre isso mais pra frente). Temos o tipo object, já que o JavaScript é uma linguagem orientada a objetos.
26:38
Dentro de object a gente tem um monte de coisa, inclusive o null é considerado object (mais pra frente falamos sobre isso também).
26:44
Existe um tipo interno, o "array", que é um object, é o temido "vetor" da a programação.
26:51
Fica tranquilo! Não tem estresse nenhum com vetores, quando chegar a hora você vai aprender, você vai ver que é molezinha.
26:57
Também uma curiosidade "function", é um tipo primitivo na linguagem JavaScript, já que ela também funciona no paradigma funcional e
27:05
considerar uma function um tipo é algo muito interessante. E para saber se esses tipos todos, para eu trabalhar com esses tipos todos têm um comando no JavaScript muito
27:14
valioso. Que é o "typeof",que é o "tipo de". Vamos abrir o nosso Node.js e vamos entender melhor como isso funciona
27:21
Já estou com o meu terminal e o node já preparados. Vou fazer o seguinte: se eu quiser, eu posso criar um "var n" (que é um número) = 200
27:32
Ele deu lá. Se eu mandar mostrar o "n" ele vai dizer que é 200, mas eu quero saber qual é o tipo desse 200. É só eu botar typeof (tudo em minusculo) n.
27:42
Ele vai me dizer "n é um number" No JavaScript, como eu falei, é um pouco diferente de outras linguagens, se eu botar por exemplo n = "Google". Ele aceita. "Mas o n é um número,
27:54
número não aceita Google". Se você vier aqui de novo e der, typeof n (eu fiz isso apertando a seta para cima e para baixo eu volto nos comandos do histórico)
28:02
está lá, string. A minha variável, quando eu defino a variável n, eu não defino um tipo primitivo
28:09
eu digo que ela é uma variável, é um espaço. Ela pode aumentar e diminuir conforme o programa for rodando.
28:14
Isso é uma característica do JavaScript. Eu posso fazer assim por exemplo: typeof direto o número, o valor literal, que o JavaScript chama 6 de "número literal".
28:25
"Literalmente um número", não botei dentro de uma variável. typeof 6 number. 6.5 também é um number.
28:31
Agora, se eu fizer "6.5" assim, lembra que eu falei? Se eu botar entre aspas ele é um string.
28:37
Se eu botar typeof, e colocar qualquer coisa entre colchetes, ele vai me dizer que é um objeto.
28:44
Na verdade é um "array" (que é um objeto), também funciona para chaves. Se eu botar typeof function( ){ }
28:52
Uma função, ele vai dizer que é do tipo function. Se eu pedir typeof undefined
28:58
Ele é undefined. Como eu disse, se eu colocar typeof NaN
29:03
Not a Number, ele é um number. Se eu botar infinity ele vai dizer que também é um number.
29:09
Lembra que eu falei que é um tipo interno? (uma curiosidade chata) (isso eu acho charo) typeof null ele deveria escrever null. Só que null pro JavaScript é um objeto
29:19
Você consegue fazer typeof de qualquer um deles, de qualquer valor ou de qualquer variável,
29:26
mas basicamente a gente vai se concentrar bastante nos tipos number, string e boolean e vai trabalhar bem de leve com o null e o undefined
29:37
diferenciando eles entre si Então é isso, Pequeno Gafanhoto! Chegamos ao final da nossa quinta aula.
29:45
É bastante coisa, não se esquece de manter o seu caderno atualizado. Se você anotar tudo bonitinho no caderno, não tem estresse lá na frente
29:54
porque você está aprendendo aos poucos. Outra coisa que você não pode deixar de fazer é praticar.
29:59
Não adianta assistir esse vídeo até o final e considerar que só porque você me viu fazendo
30:05
você já sabe fazer. Lembre que eu falei, lá no início nas primeiras aulas? Você não diz que aprendeu a andar de bicicleta e fazer manobras radicais
30:13
só assistindo vídeos, porque você diz então que você aprendeu a programar em JavaScript só vendo eu fazer?
30:19
Eu me despeço por aqui, não se esquece, aqui em cima playlists e vídeos que eu julgar interessantes para cada uma das aulas. Sempre a primeira playlist é o curso de
30:29
JavaScript. Também vou colocar aqui a playlist do curso de HTML5 e CSS que é importante. Nessa aula, a gente não usou nada de HTML, mas é importante também saber.
30:38
Aqui embaixo você se inscreve no canal, acessa os vídeos que estão disponíveis. Dentro do Curso em Vídeo, a gente tem vários outros cursos.
30:46
Quer fazer junto de JavaScript um curso de Hardware? Um curso de Redes? Também tem no nosso canal, é só você assistir. É só acessar o canal do Curso em Vídeo no YouTube
30:56
youtube.com/cursoemvideo E acessar nossa área de playlist. Você vai ver a quantidade de cursos, a quantidade de aulas que a gente tem feito
31:03
durante todos esses anos de produção de conteúdo. Mais uma vez, eu gostaria de agradecer profundamente
31:08
o patrocínio total do Google, e gostaria de agradecer também pela sua audiência, por assistir
31:14
todas as aulas que já estão disponíveis no nosso canal. Um grande abraço, bons estudos e até a próxima!
31:22
Legendas: Rayssa Victoria
*/