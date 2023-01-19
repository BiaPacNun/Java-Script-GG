// AULA 04 - Criando o seu 1º script
// Link da aula: https://www.youtube.com/watch?v=OmmJBfcMJA8
// Transcrição:

0:00
Como já está ficando tradicional no seu curso em vídeo de JavaScript,
0:03
antes da aula eu tenho algumas perguntas para te fazer:
0:07
Você consegue lembrar qual foi a bibliografia recomendada? Quais são os sites?
0:09
quais são os documentos que eu recomendei dar uma lida para facilitar o seu aprendizado em JavaScript?
0:15
Outra coisa: para uma pessoa ser um programador, não só um programador JavaScript
0:19
É necessário mesmo saber bem Inglês? Isso é um pré-requisito?
0:22
Outra coisa: você lembra das dicas que eu te dei para estudar, para aprender direitinho?
0:27
Lembra dos macetes que eu dei para o conteúdo não não sair da sua cabeça?
0:30
E o mais importante de tudo: você lembra quais foram os programas que a gente instalou no seu computador
0:35
para que a gente possa chegar nessa aula e fazer nosso primeiro programa?
0:38
Pois se por acaso você não conseguir responder a algumas dessas perguntas que eu acabei de fazer,
0:43
volta pra aula anterior. É só clicar aqui em cima e escolher sempre o primeiro link, que é playlist do curso completo
0:49
E nessa aula, a gente vai começar a desenvolver nossos primeiros scripts em JavaScript
0:55
Legendas: Lucas Fedorowicz
1:07
Olá pequeno Gafanhoto, seja bem-vindo a mais uma aula do seu Curso em Vídeo de
1:11
JavaScript totalmente patrocinado pelo Google, o meu nome é Gustavo Guanabara
1:16
eu sou o seu professor, e agora que a gente passou nessas primeiras aulas
1:19
o que nós vamos fazer como sempre aqui no Curso em Vídeo é construir os nossos primeiros scripts
1:24
E depois de tantos anos criando conteúdo para o YouTube
1:27
eu sei, tem muita gente que pula as primeiras aulas e vem direto pra cá, para saber qual é o primeiro script
1:33
Tem gente que acha que é "perder tempo" estudar a base da linguagem
1:37
vendo a história e a evolução das coisas. Mas vai por mim, não é perda de tempo.
1:41
Se você não conseguiu responder algumas dessas perguntas, e coisas do tipo:
1:45
JavaScript é igual a Java? O que é ECMAscript?
1:47
Isso tudo a gente viu nas primeiras aulas desse curso. E apenas dando uma relembrada,
1:52
A gente viu que todo documento, quando a gente vai começar a criar sites,
1:56
e JavaScript vai ajudar a gente para isso
1:58
Os nossos documentos são separados em três partes:
2:01
a parte do conteúdo, que é a linguagem HTML
2:05
que a gente vai utilizar. A parte de design, de deixar um pouquinho mais bonito,
2:09
a gente vai utilizar CSS. E a parte da interatividade
2:12
a gente vai usar inteiramente em JavaScript (a interatividade do lado do cliente).
2:17
E se por acaso você não assistiu às aulas anteriores, lá eu fiz uma relação explicando a diferença entre
2:23
conteúdo, estilo e interação. A gente viu um panorama inteiro
2:26
Então não entra nessa de ficar com preguiça de assistir às primeiras aulas
2:29
volta lá e investe seu tempo. Não é perda de tempo, é investimento.
2:34
Mas agora o que a gente vai fazer é abrir o nosso sistema e botar tudo aquilo que a gente
2:38
instalou na aula anterior para funcionar. Acompanha os passos comigo
2:43
Já estou aqui no meu computador,
2:46
eu sempre vou representar aqui com o Windows
2:49
porque a grande maioria dos nossos alunos ultiliza o Windows como base, e o que eu vou fazer
2:54
eu vou abrir o Google Chrome, e vou abrir Visual Studio Code que nós instalamos na aula anterior.
3:00
O que eu vou fazer durante o aprendizado inicial é:
3:03
arrastar o Visual Studio Code pro lado esquerdo e do lado direito no Windows
3:07
vou colocar esse aqui, então eu vou deixar aqui.
3:11
Até dei uma aumentada no código para a gente poder
3:13
ter aproveitamento melhor de tela você vai deixar
3:15
aberto em paralelo aqui e a dica que eu te dou: se você não tiver dois monitores no seu computador é
3:20
utilizar o seu celular. Você deixa ele do ladinho ali
3:23
assistindo essa aula, você me assiste pelo celular e use o computador
3:27
para poder criar os seus scripts junto comigo.
3:30
Porque como a gente viu anteriormente, não é assistindo o vídeo de andar de bicicleta,
3:34
não é assistindo o vídeo de tocar violão. Você só aprende a programar
3:39
botando a mão na massa. É por isso que lá embaixo na tela está escrito: "mão na massa". Se for preciso,
3:44
assista esse vídeo em tela cheia para ficar bem melhor de você enxergar.
3:48
Então vamo lá, a primeira coisa que a gente vai fazer é
3:51
organizar os nossos arquivos. E um bom programador
3:53
organiza os seus arquivos, porque senão lá na frente ele acaba se perdendo.
3:57
Então nós já vamos começar o nosso curso aqui, na primeira parte prática
4:01
nós vamos organizar uma pasta. Eu abri os Meus Documentos
4:04
que eu tenho os meus documentos do dia a dia, e eu vou clicar com o botão direito
4:08
Novo > Pasta, nessa pasta que eu acabei de criar vou dar o nome de: CursoJS
4:13
Vou abrir a pasta CursoJS e ela está vazia. Posso até fechar isso aqui, e agora no Visual Studio Code eu vou em
4:19
File > Open Folder que é "abrir pasta" e ele vai perguntar: qual pasta você quer abrir?
4:24
Eu quero abrir os Meus Documentos
4:26
CursoJS, selecionar pasta e pronto. E vai abrir a pasta no cantinho, vai ter os seus arquivos
4:32
você pode, para economizar espaço da tela, clicar nesses papéis brancos
4:37
que essa parte do lado esquerdo some, e toda vez que você precisa ver de novo,
4:42
você clica aqui e abre o papelzinho
4:43
A pasta do CursoJS, está vazia. Primeira coisa que vou fazer:
4:48
vamos organizar por aulas, então vou clicar nesse ícone
4:52
New Folder, que é "nova pasta". Ele vai criar a pasta, vou chamar de aula04
4:56
e a gente vai organizar os nossos arquivos. Pressiono Enter, a pasta foi criada.
5:02
E vou clicar nesse primeiro, o New File, e nós vamos ter o nosso primeiro exercício.
5:07
E eu vou chamar de ex001.html
5:11
Sempre coloque o final, a extensão do arquivo é ex001 tudo em letras minúsculas
5:16
nomes de arquivo que a gente vai colocar para web é tudo em letras minúsculas, então ex001.html
5:23
deu Enter e ele já criou o arquivo. Eu posso até
5:26
esconder essa aba. Outra coisa que eu posso fechar
5:29
é essa aba "Welcome", e só estou com arquivo ex001.html
5:33
aberto na tela. Se você vier aqui no Explorer
5:36
até vou deixar o Explorer já aberto, a pasta é CursoJS
5:40
ele já criou a página 04, abrindo a pasta 04, eu tenho o exercício 01. Se eu clicar duas vezes
5:48
ele abre o arquivo aqui no meu navegador.
5:50
A partir de agora, tudo o que eu alterar, eu dou Reload, aperta esse botão e ele vai atualizar pra mim
5:56
Ok? Primeira coisa que a gente vai fazer com o Visual Studio onde vai nos ajudar pra caramba vamos começar
6:01
criando um código aqui, em letras minúsculas é só você digitar "html"
6:05
quando você digita "html" esse Intelisense, vai te ajudar dando várias opções. Uma delas, esse "html5"
6:12
que é a versão que a gente vai utilizar, a versão mais atualizada.
6:16
Clicando nele, olha isso. Ele já criou um código HTML5
6:20
fácil, simples, sem você conhecer nenhuma linha. Foi daquilo que eu falei anteriormente
6:24
Se você é um aluno que já conhece HTML,
6:27
sem problema nenhum, você já entendeu a grande maioria do código criado aqui na tela. Agora, se você é bem
6:33
iniciante e nunca viu HTML (como eu disse anteriormente) é muito importante que você saiba utilizar HTML
6:39
só que ele não é um pré-requisito essencial para esse curso
6:42
Você pode fazer o curso de JavaScript sem saber a parte de HTML básico veremos o
6:48
essencial, mas é importante que mais pra frente você faça o Curso de HTML
6:52
e aqui no Curso em Vídeo a gente também tem, clicando aqui em cima
6:56
sempre o nosso segundo link é o nosso "Curso de HTML com CSS" e a gente vê as tecnologias HTML5
7:02
e CSS3, passo-a-passo, detalhe por detalhe
7:06
Mas vamos aqui para a tela, o que a gente tem é basicamente o seguinte: eu tenho o meu documento
7:11
que é o essa marca, que é importante para o HTML5
7:15
Aqui eu tenho a minha linguagem, ele colocou como Inglês
7:18
Vou colocar como Português assim: pt-BR, estou dizendo para o
7:22
navegador que o meu site está em Português
7:25
Aí eu tenho duas áreas no meu documento
7:27
Vou fechar aqui, clicar nesse sinal de "-", eu tenho duas áreas básicas: a área da cabeça
7:33
cabeça e a área do corpo o . Todo site tem essas duas áreas:
7:40
a cabeça e o corpo. A parte da cabeça é a parte de configurações
7:44
E a parte do corpo é a parte que vai
7:46
aparecer nessa área branca. Só pra você ter uma idéia, o exemplo na tag
7:52
HTML é feita por tags. Todas as marcas, as coisas que estão entre sinal de < e > são as nossas
7:58
tags, são as nossas marcas. Aqui, por exemplo, a tag está sendo usada duas vezes
8:04
para duas configurações diferentes. Primeiro, as configurações
8:08
de caracteres para podermos utilizar acentuações, que o Português tem (e vários outros idiomas
8:13
têm) e a configuração do viewport (na verdade foi usado três vezes), a compatibilidade
8:19
principalmente com o Internet Explorer
8:21
e Edge, e a do viewport e a configuração
8:23
de teclado. Não se preocupe com essas linhas no início, só deixe elas aí e que eu tenho o título.
8:29
Título é o que vai aparecer exatamente em cima que
8:33
está como é ex.html. Vou até fechar essa outra aba aqui. Ele aqui em cima como nome do arquivo
8:37
Se eu quiser, "Meu primeiro programa"
8:41
quando eu salvar
8:42
como é que você percebe que você tem que salvar?
8:44
Percebe aqui em cima, ao lado do nome do arquivo, tem uma bola
8:48
Essa bola indica que o arquivo foi
8:50
mexido, você digitou alguma coisa mas ainda não salvou. Para salvar você vai em File > Save
8:56
Outra coisa para se prestar atenção é que eu tenho aqui um número '1'
8:59
Que fica dizendo que 'um' arquivo não foi salvo. É só você apertar Ctrl+S
9:05
já sumiu a bola, já assumiu número. Se eu fizer qualquer alteração aqui tipo 'Oi'
9:11
significa que eu tenho um arquivo que foi alterado, mas ainda ainda não foi salvo
9:14
olha aqui do lado e tem uma bolinha dizendo que o arquivo que foi alterado por exatamente
9:18
esse, vou dar CTRL+S de novo e você vai ver qual a diferença entre
9:21
"Meu primeiro programa" e o "Oi". Eu vou contar um negócio pra você
9:25
Existe uma "maldição" se você é aluno do Curso em Vídeo há muito tempo,
9:29
já sabe essa maldição que a "maldição do Olá Mundo"
9:33
Conta a lenda que se você for aprender qualquer tipo de tecnologia, qualquer tipo de linguagem de programação
9:37
e não colocar "Olá, Mundo!" para escrever no seu primeiro exemplo
9:41
você vai acabar não aprendendo essa tecnologia ou linguagem direito. Na verdade,
9:44
eu não sei se isso funciona, se é verdade, mas convenhamos:
9:48
eu não vou arriscar. Eu vou colocar "Olá, Mundo!", pra gente
9:52
se livrar bonitinho. Escreve direitinho.
9:56
Então a gente vai ver onde está escrito "Meu primeiro programa" e onde vai vir inscrito "Olá, Mundo!"
10:01
A bola aqui, ainda indica que não foi salvo. Ctrl+S. Vou vir aqui eu vou apertar ou Ctrl+R
10:07
ou F5, ou simplesmente clique aqui em cima
10:10
Está vendo? Aqui está me dando a opção de traduzir essa página, porque está em Inglês
10:14
Eu não vou salvar, "nunca traduzir site". Então olha só, o "Meu primeiro programa"
10:19
é o meu ou o título e "Olá, Mundo!" está dentro do meu , do meu corpo.
10:26
Outra coisa que podemos fazer aqui é colocar algumas marcas, por exemplo. Vou transformar o "Olá, Mundo!" em um título
10:29
Vou transformar o "Olá, Mundo!" em um título
10:32
Você está lendo uma matéria do jornal, a matéria do jornal tem um título. Para criar esse título vai botar
10:37
Para terminar o título você bota
10:39
você viu que o meu Visual Studio? simplesmente abro tag boto / e ele já complementa
10:46
ele sabe que o título foi aberto e que ele vai fechar o título aqui no final. Vamos salvar de novo
10:52
Atualizar
10:53
Ele já ficou com a letra maior. É importante dizer:
10:56
não transforma letra maior. diz que esse texto aqui (no caso 'Olá, Mundo!') é um
11:02
"título de nível 1". Outra coisa eu posso criar é um parágrafo, Já me livrei da maldição
11:10
Vamos salvar, atualizar. Viu a diferença entre título e parágrafo? Essa é a parte de conteúdo.
11:17
E todo o conteúdo está dentro de um arquivo HTML. Vamos fazer tudo dentro de um mesmo arquivo HTML, certo?
11:22
A gente tem também a parte do estilo, que vimos anteriormente
11:26
A parte do estilo é configurada geralmente na área de cabeça onde o bota uma tag chamada
11:32
. Só colocar "style", dar enter e ele já cria. É só fazer assim, em letras minúsculas
11:38
escreve "style" eu só botei
11:40
"sty" e ele já disse: 'você quer criar uma tag style?'
11:43
Aí eu clico ele vai (ou aperto o Enter) digito "sty" e aperto Enter, e ele vai. Aqui dentro
11:49
vou colocar o estilo. Por exemplo, isso aqui é outra tecnologia. Essa parte de fora é toda HTML
11:55
tudo o que eu escrever aqui dentro é CSS. Por exemplo, tenho um body (eu posso colocar aqui)
12:00
e ele já vai criar aqui um seletor. Eu abro chaves e coloco aqui
12:05
background-color, por exemplo, eu só botei "bac"
12:09
e ele está me ajudando background-color. Ele te dá várias opções
12:12
vou colocar aqui blue; em CSS todo final de marcação tem um ponto e vírgula. E outra coisa interessante
12:19
Esse azul que vai ficar muito forte. Eu vou salvar e atualizar
12:23
ficou muito forte, eu quero um outro azul, um pouco mais claro
12:25
É só parar o mouse em cima da palavra "blue"
12:28
que vai aparecer essa janela. Eu posso escolher um azul mais claro
12:32
clicando e arrastando
12:34
vou deixar esse azul um pouco mais claro. Ele já
12:37
preencheu o código, você não precisa nem se preocupar com o código de cor. No curso de
12:41
HTML eu te ensinei como montar esse código de cor, esse RGB
12:45
Inclusive você pode, aqui em cima botar o formato RGB, no formato
12:50
hexadecimal, que a gente aprendeu durante a aula do curso de HTML (não se preocupe com isso no momento), em HSL e
12:57
voltando a RGB. Basicamente ele vai te ajudar pra caramba. Vou salvar,
13:02
atualizar de novo, e agora eu estou com aquele azul, a minha letra pode ficar branca. Então só vou botar assim
13:07
color. Só cliquei em color, ele vai me dar a opção branco é
13:13
"white". Eu posso escrever white e ele foi.
13:17
Atualizando, você vai ver que a letra ficou branca. Se você quiser configurar a fonte, essa é a parte de estilo
13:20
Se você quiser configurar a fonte, essa é a parte de estilo
13:23
estou tentando deixar o código mais bonitinho. Você pode, por exemplo, botar aqui a nossa fonte
13:27
A minha fonte vai ficar normal,
13:32
25pt que é o tamanho dela quando você escolhe lá no Word o tamanho da fonte
13:37
25pt e a fonte vou utilizar a fonte Arial, lembrando do ponto e vírgula no final de cada um. Ctrl+S,
13:45
atualizei e ele já está aqui (25 é muito grande)
13:48
20, atualizar, beleza. 20 é o tamanho dessa letra. Essa daqui ficou proporcional à ela. Então essa parte de
13:55
estilo, vamos começar bem simples. Então a gente viu, já
13:59
conteúdo HTML. Esta parte aqui, onde está o mouse, que vou selecionar agora é a parte de
14:05
estilo, que está dentro da tag . Tem outras maneiras de se fazer,
14:08
colocando no arquivo separado e tudo mais. Depois a gente trabalha com isso, mas no curso de HTML que eu te
14:14
recomendei aqui no nosso do canal vai ensinar o
14:17
passo-a-passo para isso, e faltou a terceira forma, que é a forma de interagir.
14:21
Então eu botei "olá, mundo!", já me livrei da maldição, e falta a parte de JavaScript. A parte do JavaScript,
14:28
geralmente a gente vai colocar antes de fechar o corpo, antes do
14:32
Aqui é a abertura do corpo, aqui é o fechamento do corpo. Aqui no finalzinho, para que os
14:37
scripts sejam carregados depois do código base, a gente vai criar um script. É só escrever em minúsculas
14:43
(ele já me deu aqui). Não escolhe o de baixo não, escolhe o de cima.
14:47
Cliquei, ele já criou um script aqui. Também tem como criar scripts externos, mas pra frente vamos fazer isso
14:53
A primeira coisa que estamos fazendo é um exemplo básico
14:57
E não se preocupa com o tamanho do código, até porque você não digitou quase
15:00
nada. A gente só botou "html" e o próprio Visual Studio Code facilitou a nossa vida com isso
15:06
Então, dentro do script eu vou programar em JavaScript.
15:09
Você não diz que vai "programar em HTML"
15:12
você não diz que vai "programar em CSS", mas você pode dizer
15:16
que você vai "programar JavaScript", porque ele é sim uma linguagem de programação
15:19
HTML é uma linguagem de marcação
15:22
conteúdo, e CSS é uma linguagem de estilos, são folhas de estilo
15:27
Então você não diz que programa nenhuma delas, a não ser o JavaScript
15:31
Aqui dentro, eu posso escrever o comando que for. Comandos em JavaScript
15:35
sempre em letras minúsculas
15:36
a maioria das vezes, quando não for, eu vou te avisar porque tem diferença
15:40
no caso do JavaScript
15:41
Então, o que eu vou escrever aqui é o seguinte: vamos começar
15:44
mostrando um alerta na tela, se você fez um curso de
15:46
HTML, qualquer curso básico de JavaScript, você fez esse comando aqui.
15:51
Vou utilizar em minúsculas window.alert()
15:55
e entre parênteses você vai colocar
15:57
Abre aspas e fecha (você vai perceber que quando eu abro aspas ele já fecha aqui) tudo o
16:03
que eu vou escrever na tela, tenho que colocar entre aspas, mais pra frente você vai ver isso também.
16:10
Então, escrevi aqui "minha primeira mensagem". No JavaScript
16:13
antigamente você tinha que colocar ponto e vírgula no final de cada comando.
16:17
Hoje em dia ele não é obrigatório e eu não vou utilizar
16:20
durante esse curso, apesar de muita gente aí nesse exato momento estar muito magoada comigo
16:26
"Não! JavaScript tem que ter um ponto e vírgula!", é uma escolha de cada um
16:29
Você gosta de usar ponto e vírgula? use seu ponto e vírgula
16:31
Durante todo esse curso, eu não vou utilizar
16:34
ponto e vírgula. a não ser de vez em quando, eu dou uma
16:37
escorregada e boto um ponto e vírgula por conta do PHP, por conta da linguagem Java, mas não é
16:41
necessário, vai por mim, não vou utilizar aqui. Vamos rodar agora, vamos salvar de novo
16:46
vou atualizar, e percebo o seguinte: eu vou até
16:49
atualizar de um outro jeito, eu vou
16:51
segurar o Shift e atualizar. Você percebe que a parte do estilo já foi pega
16:57
o estilo pegou, só que o conteúdo ainda não apareceu. O "Olá, mundo!" não apareceu aqui
17:01
atrás, o "já me livrei da maldição" não apareceu aqui atrás, mas ele já disse
17:05
"This page says", "essa página diz" minha primeira mensagem. Então, esse window.alert()
17:11
é o seu primeiro comando em JavaScript (isso é um comando JavaScript), eu posso até
17:16
simplificar pra somente alert(), não tem problema
17:20
O window posso omitir, mas eu vou deixar aqui no início o window.alert()
17:23
E ele vai dizer lá: 'minha primeira mensagem'. Vamos rodar aqui, 'minha primeira mensagem', aperto em Ok
17:31
Aí o conteúdo vai aparecer. Mesmo colocando o aqui no final, ele
17:36
apareceu, ele executou esse comando sem que estes daqui
17:41
apareçam efetivamente na tela. Vou atualizar de novo, você viu que o conteúdo não aparece
17:45
'Minha primeira mensagem' apareceu. Só quando eu clico em Ok. Viu? Essa é a interatividade
17:49
que a gente vai criar. E se esse nesse momento você ta achando: "mas isso aqui é muito simples"
17:54
Sim! É para ser simples
17:56
JavaScript é muito simples. É claro que nossos comandos vão aumentar, a gente vai ter mais
18:00
funcionalidades, mas via de regra, programar em JavaScript é muito simples.
18:05
Não deixa ninguém falar pra você
18:07
"JavaScript (que geralmente é assim) JavaScript
18:10
é difícil. A base é fácil, mas espera chegar em array, espera chegar em vetores"
18:17
Olha só. Talvez você não me conheça há tanto tempo assim, mas pode acreditar:
18:21
pessoas que falam isso, só querem descontar em você frustrações que elas mesmas tiveram
18:26
porventura, quando estavam aprendendo a programar.
18:28
Ou então, esse tipo de gente não quer muita concorrência. Vai por mim,
18:33
programar é extremamente fácil
18:36
Então, conforme a gente deu aquela revisada no início da aula, temos conteúdo em
18:40
HTML, estilo em CSS, interação JavaScript. Traduzindo esse
18:44
panorama para o código que a gente acabou de criar. Isso tudo que está aqui é a parte
18:50
HTML, está vendo aqui? Quando eu ampliar aqui (tem um +)
18:55
Tudo isso aqui é a parte de CSS. Essa parte aqui: conteúdo
19:02
essa parte aqui: estilo. A parte que fez ele ficar
19:06
"bonito", vou até botar um estilo a mais aqui. Vou botar, sei lá, o h1 de uma de uma cor
19:13
Sei lá, (nossa senhora, isso aqui vai ficar feio demais) vou botar aqui
19:16
yellow, só parar o mouse em cima, eu escolho aqui. Vou colocar ele um pouco mais escuro
19:20
Sei lá, um pouco mais alaranjado
19:23
Vou deixar nessa cor aqui (nossa essa cor está hórrivel). Beleza. Tudo o que for h1 é essa cor meio
19:29
amarelada. O "Olá, mundo!" é meu ele vai ficar "primeira mensagem"
19:33
exatamente dessa cor (vou mudar um pouquinho aqui, com uma cor um pouco mais viva)
19:37
Opacidade no máximo. Mais uma vez, atualizando, e agora eu tenho aqui
19:41
Então essa é a parte do estilo. Vou encolher o estilo, é só clicar nesse -
19:45
no Visual Studio Code, essa parte de baixo do script, quando ampliar, essa é a minha parte do JavaScript
19:51
É a minha parte de interatividade. E agora você consegue ver
19:55
todo o conjunto numa mesma tela. Então, na hora de desenvolver um site, você tem que unir:
20:00
conteúdo, estilo e interatividade. É assim que os bons programadores fazem.
20:04
Na verdade existem técnicas para melhorar esse código que está aqui do lado,
20:08
weparando os arquivos (e isso é até recomendável), mas nós estamos nos primeiros passos
20:13
O primeiro passo é assim mesmo, devagarinho aos poucos
20:16
É igual aquela aula, quando eu falei das manobras da
20:19
bicicleta. Você não vai pegar a bicicleta já vai virar cambalhota
20:22
Você vai na bicicleta, sobe uma rampa, desce a rampa
20:25
Não vai começar com uma coisa mais difícil. É exatamente igual na hora de programar.
20:29
Você não pode sair correndo, senão o tombo acaba sendo grande e frustrações começam a aparecer.
20:34
E antes de terminar essa aula, eu vou te mostrar mais dois comandos
20:38
Para você não ficar achando que é só um comando
20:40
e que a coisa é simples. Vou te mostrar mais dois comandos, olha só
20:45
Embaixo do window.alert() eu vou usar o window mais duas coisas. Primeira coisa, vou botar
20:49
windown.confirm() e aqui eu vou colocar "Está gostando de JavaScript?"
20:56
Vamos executar. Ele primeiro vai fazer o alerta, depois vai pedir a confirmação
21:00
Vou salvar (Ctrl+S)
21:01
Atualizar aqui (F5)
21:02
Está lá "minha primeira mensagem"
21:04
Esse comando é o alert(), como você botou o primeiro ele executa primeiro
21:08
Quando eu clicar em Ok, ele vai voltar aqui "Está gostando de JavaScript?"
21:11
Então ele tem uma opção de confirmação: Ok ou Cancela. Estou gostando, Ok. Viu? São dois
21:18
comandos que podem ser utilizados. Vou te mostrar um terceiro, que é o
21:23
window (não esquece de digitar, porque você só aprende quando você pratica)
21:27
.prompt() e vai perguntar assim: "Qual é seu nome?". Então acabei de ver o terceiro comando
21:34
Então, alert() ele bota um alerta, onde só tem a opção de Ok, quer ver? Vamos salvar,
21:39
nunca se esqueça, se tiver um "1" aqui é sinal de que não está tudo pronto ainda
21:44
O "1" ou "2", enfim. Atualizei, primeiro comando executado é o meu windows.alert()
21:50
Minha primeira mensagem, Ok. windows.confirm() está perguntando "Está gostando de JS?", Ok ou Cancelar.
21:56
Dessa vez vou cancelar. Está vendo a terceira, que é o prompt()? "Qual é o seu nome?"
22:00
Vou botar "Gustavo" e vou dar o Ok. Ai você vai falar: "poxa, mas meu nome não apareceu na tela"
22:04
Claro! Não apareceu porque você não mandou ainda
22:07
A gente, nas próximas aulas, vai aprender a mandar. Na verdade, não tem nem como testar no momento em
22:11
que está esse código aqui qual foi o botão que a pessoa apertou, se ela apertou Ok se ela apertou Cancela.
22:16
No prompt(), eu não sei qual foi o nome que a pessoa digitou. Isso porque a gente tem que utilizar
22:22
aqui na frente dessas funcionalidades
22:24
algumas variáveis.
22:28
E variável é o assunto da próxima aula
22:31
porque essa daqui já está ficando grande pra caramba. Não se esquece de
22:35
praticar, a prática é muito importante nesses casos. Não adianta você só assistir o vídeo
22:40
e considerar que você sabe. Na verdade, se você assistiu o vídeo até o final
22:44
e entender tudo, não significa que você sabe, significa que
22:47
você acabou de comprovar que eu sei JavaScript. Prove pra mim e prove pra você mesmo que você também sabe JavaScript.
22:54
É muito simples. Não se esquece, como sempre
22:57
de se inscrever no nosso canal, o Curso em vídeo tem um monte de curso. Aqui em cima você tem alguns cursos
23:03
selecionados, mas é só você acessar o nosso canal que é
23:07
youtube.com/cursoemvídeo ir lá nas playlists, ver todos os cursos a gente está criando
23:11
há muitos anos. Habilita também o sininho quando você se inscrever, para que você possa receber
23:16
notificações e não se esqueça: interaja com a gente aqui embaixo nos comentários, deixe suas dúvidas, dá uma curtida e
23:23
compartilha com todo mundo. Sabe aquele grupo da faculdade, ou grupo do colégio em que todo mundo está estudando junto?
23:28
Indica o nosso curso lá pra eles. Você tem um grupo no Facebook de
23:32
compartilhamento de informação, tem um monte de grupo de programadores lá dentro do Facebook
23:36
Bota lá o link, recomenda o Curso em Vídeo lá também. Praticamente todos os dias eu recebo
23:41
notificações de pessoas que estão indicando com o CursoemVídeo para o maior número de pessoas.
23:45
Eu me despeço por aqui, não se esqueça de praticar antes de passar para a próxima aula, onde nós vamos ver um pouco mais sobre
23:51
variáveis. Um grande abraço e até a próxima!
23:56
Legendas: Lucas Fedorowicz




