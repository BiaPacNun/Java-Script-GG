// Aula 1 – O que o JavaScript é capaz de fazer?

/*
Você sabe para que serve a linguagem JavaScript / ECMAScript? Sabe a diferença entre um cliente e um servidor para a Internet? Sabe para que servem as tecnologias HTML5, CSS3 e JavaScript? Consegue citar 4 sites que utilizam a linguagem JavaScript nos seus códigos?

Pois, para responder a essas e muitas outras perguntas, assista essa aula do Curso de JavaScript para Iniciantes até o final. E não se esqueça sempre de praticar todas as atividades que fizermos durante o vídeo no seu próprio computador.
*/

alert("Olá, Mundo!");
prompt.alert("Olá, Mundo 2!");

/*
TRANSCRIÇÃO 

0:00
Responde pra mim, sinceramente:
0:02
o que você acha de aprender uma tecnologia que é capaz de fazer coisas simples,
0:07
mas poderosas como essas aqui.
0:09
Eu estou no site do Google e vou fazer algumas alterações.
0:13
Eu vou transformar o fundo do site do Google para preto
0:18
e tudo isso com um comando. Ou então eu posso fazer isso aqui
0:22
dá uma olhadinha: a logo ficou em preto e branco. E se eu quiser eu posso até sumir com ela
0:29
Desse jeito
0:30
Como isso foi possível? Que comandos eu usei?
0:33
é só você assistir esse vídeo até o final, que eu te mostro esses comandos nessa aula.
0:38
Mas isso é só o primeiro passo, é a pontinha do iceberg no seu
0:42
Curso em Vídeo de JavaScript que começa agora.
0:46
Legendas: Tainá Bandeira
0:58
Olá, Pequeno Gafanhoto! Seja bem-vindo à primeira aula
1:03
do seu Curso de JavaScript, o tão pedido curso de JavaScript.
1:08
O meu nome é Gustavo Guanabara, eu sou o seu professor
1:10
e eu tenho um grande orgulho de dizer:
1:12
Esse é o primeiro curso do Curso em Vídeo 100% patrocinado pelo Google
1:20
É uma imensa felicidade
1:23
foram anos produzindo conteúdo. Você que conhece o canal, não sei se está chegando agora
1:28
Se você está chegando agora, aqui em cima, você vai acessar o canal do Curso em Vídeo.
1:32
e a gente já tem um monte de curso. A gente já tem curso de HTML básico com o CSS
1:37
a gente tem curso de PHP, de algoritmos básicos para quem quer aprender a programar os seus fundamentos
1:43
Tem curso de Linguagem Python
1:44
curso de Hardware se você não gosta de programação. Curso de Word, Excel
1:49
enfim, tem uma infinidade de cursos que foram desenvolvidos durante
1:53
todos esses anos de trabalho duro. Eu sou professor de Tecnologia
1:57
sou professor ainda em sala de aula, dou aula para um monte de jovens e adultos
2:02
eu tenho uma grande felicidade de estar iniciando esse curso de JavaScript aqui
2:05
e com o patrocínio de uma imensa empresa tão mundialmente conhecida
2:10
como o Google. Muito obrigado a todos vocês por estarem assistindo, por acompanharem esse curso
2:15
que vai sair completo, todo no mesmo dia.
2:18
E muito obrigado também a todos do Google por acreditarem no nosso trabalho
2:21
Especialmente, quero mandar um abraço para a Clarissa e para a Indiana.
2:25
Meninas, vocês moram no nosso coração ♥
2:28
Mas vamos parar de papo e não começar a entender o seguinte:
2:31
esse primeiro vídeo eu separei inteiramente para responder a uma simples pergunta
2:35
O que o JavaScript faz? E fica muito fácil de te explicar
2:40
JavaScript faz praticamente tudo. Eu vou provar nesse vídeo aqui pra você
2:45
e como muita gente vem me perguntar logo no início. Eu vou falar logo no início do curso
2:49
Para quem é esse curso? Para que tipo de aluno?
2:52
esse curso é especialmente para você
2:55
se você nunca aprendeu a programar, se você nunca programou na sua vida, esse curso é pra você.
3:00
Se você já um programador um pouco mais experiente, que já sabe os fundamentos de algoritmos
3:04
esse curso também é pra você. E se por acaso você já sabe um pouco de JavaScript
3:08
ou estudou JavaScript há muito tempo, e quer se aperfeiçoar
3:12
quer conhecer as novidades do ECMAScript nas suas últimas versões
3:16
esse curso também é pra você
3:17
é claro que em algumas partes vão irritar quem tem mais experiência
3:21
a gente vai ter uma aula explicando o que é uma variável. E você que já é experiente
3:25
já sabe o que é uma variável, mas nunca se esqueça: Quando você começou a aprender
3:29
você não sabia o que é uma variável. E tem muita gente que está chegando agora
3:33
nesse curso que não faz idéia do que é programação.
3:36
Está aqui porque recebeu um link, recebeu a indicação de uma pessoa
3:40
ou simplesmente foi divulgação do próprio Google. Seja muito bem-vindo ao seu curso de JavaScript
3:45
espero sinceramente que você goste
3:47
e mais pra frente a gente vai falar um pouquinho mais sobre algumas crenças limitantes
3:52
tem gente que pensa que não vai aprender a programar porque é muito novo
3:55
porque é muito velho, porque é homem, porque é mulher
3:58
porque precisa muita Matemática, precisa de muito Inglês
4:01
se você ouviu uma dessas coisas durante o aprendizado de programação, quando você tentou começar
4:05
Esquece! Para aprender a programar a gente precisa de uma coisa muito importante:
4:10
A sua total dedicação
4:12
e começa por assistir esses vídeos.
4:14
Nunca pude um vídeo, nunca deixe de treinar quando eu falar para você treinar
4:18
e se você seguir todas as instruções do início ao fim
4:21
você vai, sim, saber a base do JavaScript. E nós vamos começar com o conceito muito importante
4:28
a gente entender, na Internet, o que é o conceito de Cliente Servidor.
4:32
nesse exato momento você está assistindo esse vídeo com seu computador ligado
4:36
ou até mesmo com o celular na mão. Pois saiba que o seu computador
4:38
ou celular, que apareceram aqui do lado são os nossos clientes
4:43
você está utilizando um serviço que está sendo fornecido por um servidor
4:49
nesse exato momento, por exemplo, você está pegando dados dos servidores do YouTube
4:54
Esses servidores, essas máquinas de alta performance são quem estão fornecendo os dados
4:59
que são esse vídeo. Então quando você acessa internet, seja o que for: WhatsApp
5:04
Facebook, Instagram, o site do Google, o site do YouTube, o seu Gmail
5:08
do momento em que você usa um dispositivo, ele é um cliente e que precisa de dados de um servidor
5:14
às vezes é até mais de um servidor
5:16
e como você faz esse acesso na internet? Você usa um navegador.
5:19
no caso aqui, eu vou exemplificar com o Google Chrome
5:21
então quando você entra no Google Chrome digita www.youtube.com/cursoemvideo
5:27
já fazendo uma pequena propaganda. Esse nome que você digitou, que a gente chama de URL
5:31
vai para a infraestrutura da internet e ela vai te responder exatamente para a qual servidor
5:37
você vai ser desviado. Existe uma série de tecnologias envolvidas nisso
5:40
Mas o fato é: de uma maneira ou de outra a infraestrutura da internet
5:44
que essa nuvem está representada aqui do lado, vai chegar a um determinado servidor
5:48
Esse servidor é parecido com a sua máquina de maneira fundamental. Ele tem um sistema operacional
5:53
ele tem pastas, ele tem diretórios internos. Dentro dessas pastas ele tem arquivos
5:59
Esse arquivo é no que você está interessado. Pode ser uma foto, pode ser um texto
6:04
pode ser, como no seu caso, um vídeo.
6:06
E na maioria das vezes é um documento HTML
6:09
é esse que está pintado aqui embaixo. Na hora que você solicita por um servidor
6:13
ele tinha envia uma cópia. Ele vai pegar esse arquivo
6:15
vai colocar uma cópia, e vai mandar essa cópia para você. Essa cópia é enviada diretamente
6:20
para o cliente, para você. No seu Google Chrome, no seu navegador web.
6:24
O seu navegador a partir daí vai começar a trabalhar
6:28
para gerar o efeito visual, para gerar o site exatamente como você está vendo agora
6:33
Então, de uma maneira bem resumida, a web funciona assim
6:36
a parte de cima, que está aparecendo aqui, é a parte cliente
6:40
e cliente é você, exatamente nesse momento
6:42
E o que o cliente quer é um bando de arquivos. Esses arquivos são enviados pelos servidores
6:48
então, basicamente, você consegue entender que existe tecnologia aqui em cima
6:52
que a gente chama de tecnologias para clientes
6:54
E existem tecnologias para servidores
6:57
o JavaScript surgiu como uma tecnologia para clientes. É bem verdade, hoje ele funciona até nos servidores
7:04
mas a gente vai focar no funcionamento do JavaScript aqui em cima para esse curso
7:08
sendo assim, para a gente aqui, de forma fundamental e bem básica
7:12
JavaScript é uma tecnologia client-side
7:15
ou seja, JavaScript funciona muito mais do lado do cliente
7:19
e para você, que já sabe um pouquinho mais, eu sei e você sabe que ele também funciona no servidor
7:25
mas a gente também sabe que ele surgiu basicamente para clientes
7:28
quando você começar a estudar um pouco mais de JavaScript
7:31
vai descobrir que ele é muito maior, mas por enquanto vamos nos primeiros passos
7:36
Uma outra coisa que é muito importante entender junto com JavaScript, são as tecnologias relacionadas
7:42
eu vou pegar esse site que ficou colorido aqui em cima, que ficou em destaque
7:45
que é o site que você está vendo na tela, tanto no celular, quanto no computador
7:49
vou dar um destaque maior para ele. Esse website, na grande maioria das vezes,
7:54
é composto por três tecnologias do lado do cliente.
7:57
do lado do servidor, vai ter um monte de coisa também funcionando.
8:00
Mas como eu disse, o nosso foco inicial é cliente. São coisas que estão rodando no seu dispositivo
8:06
esse é o website que está aparecendo aqui do lado é composto basicamente
8:09
na sua grande maioria das vezes, por três tecnologias muito importantes
8:14
e eu vou explicar essas três tecnologias
8:16
criando um paralelo com o mundo real. Imagine que esse website
8:20
fosse um jornal, daqueles físicos que você vai na banca de jornal para comprar e folhear
8:25
e faz tempo que não faço isso
8:27
Mas você sabe que para existir um jornal, eu preciso de alguns profissionais
8:31
vou representar essas três tecnologias para website, como três profissionais que trabalham em um jornal
8:37
em primeiro lugar, eu representei uma jornalista ou um jornalista, tanto faz
8:42
O do meio é um designer e o último é um programador
8:47
E é claro que, em um jornal real, a gente não precisa de um programador para o jornal sair.
8:52
Mas acompanha a minha linha de raciocínio. Isso é apenas um paralelo
8:55
nessa minha ideia, a jornalista - que é um profissional especializado em produção de conteúdo e tudo mais
9:02
ela é a responsável por escrever o texto da matéria,
9:04
ela também muitas vezes é responsável, junto com o fotógrafo, de correr atrás de imagens
9:10
que ilustrem a sua reportagem. E se por acaso ela tiver uma ligação para outros tipos de mídia
9:16
como um vídeo, uma matéria no rádio. Ela também vai ser responsável por catalogar tudo isso
9:21
Basicamente, a nossa primeira personagem é a responsável pelo conteúdo
9:25
Só que a gente sabe que conteúdo só por conteúdo não se vende. É preciso ter uma visão mais atraente de tudo
9:33
E aí entra o designer. O designer vai pegar todo esse texto, imagem
9:37
todas as mídias separadas pela jornalista e vai tornar tudo mais bonito. Vai organizar cores vai organizar
9:44
tamanhos e posições de cada um desses componentes, vai diagnosticar e dimensionar
9:49
formatos diferentes, um jornal maior, um jornal menor. Ele vai tornar as coisas mais bonitas
9:55
E o programador, no fim, é aquele cara que vai tratar da engenharia da entrega do jornal
10:00
Ele vai pensar em que áreas a gente precisa entregar mais jornal, menos jornal, vai tratar das configurações
10:06
de cada uma das coisas da entrega, a integração entre a empresa que fabrica o jornal, a que distribui o jornal
10:13
da segurança para que o jornal seja entregue, e tudo mais
10:17
Então, esses três profissionais aqui agem em conjunto. O jornal não aconteceria
10:23
sem esses três. E o website que está aqui em cima também simplesmente não vai conseguir existir
10:29
sem essas três peças fundamentais: o conteúdo, o design e as interações
10:34
E o que estamos falando de desenvolvimento de sites esses três caras aqui têm nomes
10:40
têm siglas, são tecnologias. A jornalista, responsável pelo conteúdo é o que a gente chamaria de HTML
10:47
você provavelmente já ouviu falar nessa sigla.
10:49
O designer, que é o cara para deixar tudo bonito, a gente chama de CSS
10:53
E o programador, que é o responsável pelas integrações e interações, a gente chama de JavaScript
10:59
Então essas são as três tecnologias
11:02
que você vai precisar conhecer. Esse curso que você está assistindo é de JavaScript
11:06
mas você precisa também conhecer um pouco mais de HTML e CSS
11:10
e não se preocupe se você ainda não sabe isso. Se você chegou aqui e não sabe absolutamente nada
11:16
e aí fala assim: "poxa, agora vou ter que fazer outro curso"
11:19
Não. Para esse curso eu vou te ensinar tudo. Mas saiba que se você gostar de JavaScript
11:24
provavelmente você vai ter que aprender as outras duas, mais cedo ou mais tarde
11:28
o que eu estou te dando aqui são os primeiros passos. Não se preocupe com nada
11:33
E se por acaso você gostar tanto que você quiser
11:35
"Ah não! Eu quero estudar HTML
11:37
logo em seguida, assim que terminar esse curso". Não tem problema, a gente tem aqui em cima
11:41
é só você clicar aqui em cima. A gente tem um link para um curso relativamente antigo aqui no canal
11:46
mas que ainda está bem atualizado com as necessidades do mercado atual
11:50
mas, conselho meu: assiste esse curso primeiro. Depois vai lá e faz os outros
11:55
Sendo assim, voltando à nossa explicação aqui do lado, nós temos as três tecnologias
11:59
HTML, CSS e JavaScript
12:02
de forma bem sucinta, HTML é a jornalista. É ela quem trata do conteúdo
12:07
CSS é o designer, ela cuida do estilo
12:11
JavaScript é a parte do programador, é a parte da interação. E essas três tecnologias
12:16
funcionam em conjunto. E são elas três que compõem a parte de clientes
12:21
da grande maioria dos sites de hoje em dia. Vem comigo, que eu tenho uma demonstração para te fazer
12:27
Viemos aqui para o nosso "quadro negro" para te explicar uma coisa
12:31
imagine a seguinte situação
12:32
aquela jornalista, que a gente viu na história até pouco tempo atrás, foi chamada para fazer uma determinada
12:37
reportagem. Ela escreveu, em primeiro lugar, o título da reportagem.
12:41
Não estou ligando para o título, escrevi qualquer coisa aqui ao lado
12:43
Depois ela produziu a sua reportagem e gerou os parágrafos, gerou o texto, organizou
12:49
fez o que todo jornalista consegue e sabe fazer muito bem. Essa parte que ela faz, a produção dos textos
12:55
É o que a gente de HTML. A tecnologia HTML para a criação de sites
13:00
foca principalmente nos textos e nas marcações que existem nesse texto. Então, por exemplo
13:06
ela pode criar marcas específicas, por exemplo, para transformar
13:09
aquele texto que está aqui em cima como título, e todo título é um pouquinho maior
13:15
e pra não ficar chata, a leitura, ela vai colocar uma imagem no meio. Então tudo isso ainda é HTML
13:21
Então, em HTML a gente consegue organizar textos. Você percebe que o texto não está justificado
13:28
está meio bagunçado. A gente tem um título, que está maior
13:31
a gente tem imagens, mas nada de ficar bonito. O objetivo do HTML é simplesmente o conteúdo
13:38
o conteúdo aqui está bem organizado. Feito isso, ela vai entregar todo esse documento que está aqui do lado
13:44
para o designer. O que o designer vai fazer? Ele vai pegar esses textos esses dois parágrafos
13:50
Vai organizar, para deixar a coisa um pouco mais agradável. Vai deixar o texto arrumado
13:55
botar a imagem do meio, enfim. Vai fazer o design dele lá. Ele pode colocar, por exemplo
14:00
isso como uma repostagem menor, que caiba em um cantinho de uma página, vai colocar uma borda
14:05
vai aplicar cores. Ele vai fazer a coisa fica bonita. E aí chega o momento das interações
14:12
e aí é que entra o JavaScript na história. O JavaScript, para um site que estamos construindo aqui
14:18
faz coisas como, por exemplo, quando eu pegar o mouse passar por cima da imagem
14:23
eu quero que apareça um texto explicativo, uma legenda, mas só quando meu mouse estiver em cima
14:28
ou posso, por exemplo, quando clicar na uma imagem, porque ela está pequena
14:31
ampliar, ficar daquele jeito, escurecer a parte de trás do site
14:35
deixar a imagem mais pra frente
14:37
um botão de voltar. Quando eu clicar nesse botão de voltar, volta o site ao normal
14:42
isso tudo é a parte de interação que eu tenho com o site. Essa é a parte do JavaScript
14:48
na verdade, JavaScript permite você fazer quase tudo. Até mesmo modificar o documento na sua parte HTML e CSS
14:56
esse é o poder da linguagem. E antes de continuar, eu quero deixar parênteses importantes.
15:00
Eu vou até falar com essa câmera que fica mais perto. A gente não diz no mercado de trabalho
15:05
você está aprendendo, que está nos primeiros passos
15:07
a gente não diz que a gente "programa em HTML", nem que a gente "programa em CSS"
15:12
Isso porque HTML e CSS não são linguagens de programação
15:17
são tecnologias de construção de sites. Mas JavaScript sim
15:21
JavaScript é linguagem de programação
15:23
você pode encher o peito e dizer assim: "estou aprendendo a programar em JavaScript"
15:28
mas nunca diga que você programa em HTML nem que você programa e CSS. Diga que você
15:33
desenvolve coisas em HTML. Fica mais fácil assim, pode parecer frescura pode parecer preciosismo
15:39
da minha parte, mas fala direitinho porque tem muita gente que vai acabar te julgando por isso
15:44
e você está fazendo curso no Curso em Vídeo, não está fazendo em qualquer lugar não
15:47
e uma outra dúvida que muita gente, quando começa a aprender uma linguagem de programação
15:50
precisa de uma justificativa é: "eu vou aprender JavaScript, você disse que é pra fazer site.
15:57
Mas quem usa JavaScript? Que tipo de empresas? Que tipo de sites usam JavaScript?
16:02
Eu tenho uma lista pra te mostrar. A gente tem: Google, YouTube, LinkedIn
16:08
Netflix, Facebook, Amazon, IBM, o Governo dos EUA
16:13
o Governo do Brasil. Todos esses sites e muitos outros, uma infinidade gigante de sites
16:19
utiliza, sim a tecnologia JavaScript e eu vou te provar isso
16:23
faz essa parte do vídeo que vai começar agora junto comigo e eu prometo você vai se surpreender bastante
16:31
Você vai no seu sistema operacional
16:33
abrir o seu navegador favorito. Eu vou abrir o Google Chrome aqui
16:36
porque ele me dá algumas funcionalidades bem legais
16:39
se você não tem o Google Chrome no seu computador, instale-o
16:42
a gente vai usar muito ele durante esse curso. Outra coisa importante é que no seu celular você
16:47
não vai conseguir acompanhar essa parte, você vai precisar de um computador
16:51
Mas dá uma olhadinha aqui. Eu vou abrir o site do Google digitar assim:
16:55
Curso em Vídeo
16:56
viu que ele está me ajudando aqui?
16:59
Curso em Vídeo, aí ele me diz: Curso em Vídeo de Python, de Java,
17:02
Curso em Vídeo de YouTube, de PHP, de HTML
17:04
de Excel, de Algoritmo. Tudo isso aqui tem, aquilo que eu falei. Tudo isso já tem aqui no nosso canal.
17:09
se você está conhecendo ele agora, você está com um prato cheio
17:11
você está com um monte de curso para fazer. Mas faz esse aqui até o final
17:15
Essa ajuda é muito útil no seu dia-a-dia. Eu vou botar Curso em Vídeo
17:20
eu tenho alguns vídeos aqui, e tudo mais. Então o Google ele me permite essa ajuda
17:25
Se eu botar aqui "Curso em Vídeo", ele está me dando ajuda aqui. Agora, faça o seguinte:
17:28
você vai clicar com o botão direito em qualquer área branca, e vai escolher "inspecionar"
17:33
você vai abrir essa janelinha aqui, não se assusta com ela
17:37
basicamente esse daqui é o código HTML
17:40
para este site que está aparecendo aqui do lado. Isso aqui é o HTML
17:44
esse é o conteúdo que eu tinha falado pra você. Você vai clicar aqui em cima, primeira coisa
17:48
no DevTools você vai clicar nessa reticência aqui e eu vou destacar ele
17:52
e vou clicar nessa primeira aqui. Para eu destacar a janela e você conseguir entender
17:56
direitinho o que eu estou falando. Então a primeira coisa que vou fazer é
17:59
desabilitar o JavaScript para ver como o Google se comporta sem JavaScript. Então vamos lá
18:05
Para desabilitar o JavaScript, você vai clicar aqui na reticência, vai escolher settings, ou configurações
18:11
aqui você vai rolar lá pra baixo, e tem uma opção que é
18:14
"desabilitar o JavaScript", só cliquei aqui. Depois de clicar, você vai atualizar o seu site
18:19
vou clicar nesse botão aqui em cima pra atualizar
18:22
quando atualizou, o site já ficou esquisito
18:26
o Google já ficou (se você é um usuário Google de muito tempo) você está vendo que está no Google antigo
18:32
está em um Google meio feio. Quando eu digitar aqui em cima, ele vai parar de me ajudar
18:37
"Curso em..." ele já não está me ajudando. Então essa ajuda que ele me dava, era em JavaScript
18:43
está funcionando
18:44
se eu vier aqui e habilitar o JavaScript de novo e atualizar
18:49
Volta naquele modo. Então JavaScript aqui me deu uma modernidade
18:53
que é a ajuda, no caso do Google. Vamos dar uma olhadinha em "Imagens"
18:59
O Google Imagens também tem muita coisa, você vai rolando
19:03
você vê que o conteúdo vai carregando conforme você rola
19:06
essas imagens não estavam aqui, elas vão começar a aparecer conforme eu chegue no final
19:11
ele já está aqui embaixo carregando mais imagens.
19:14
E aqui eu estou rolando, eu posso vir aqui em "Mais Resultados" e continua carregando
19:18
Com o JavaScript, eu tenho esse recurso
19:21
vamos fazer o seguinte
19:22
eu vou vir aqui em cima em "desabilitar o JavaScript" e vou atualizar de novo, só que agora no Google Imagens
19:28
Olha isso. Dá uma olhada. Não tem mais chegar no final e agora volta naquela paginação antiga do Google
19:35
O Google basicamente tem uma versão para quando você está com JavaScript ligado
19:40
que tem muito mais funcionalidades, e tem uma versão
19:43
mais simples e mais antiga que não depende do JavaScript
19:48
JavaScript é importante para o Google, sim!
19:50
mas dá uma olhada aqui, vou abrir um outro site do Google em outra tela
19:54
Vou abrir o YouTube
19:56
com certeza você conhece, você está vendo este vídeo aqui dentro do YouTube
19:59
também funciona dessa maneira. Quando chega no final ele dá uma carregada em mais conteúdo
20:04
"rolagem infinita" isso aqui. Isso utiliza outras tecnologias, inclusive o AJAX também
20:10
Vou abrir aqui o Curso em Video, quando eu digito
20:12
"Curso em Vídeo" está aqui também Curso em Vídeo.
20:15
beleza. Vou abrir um vídeo do Curso em Vídeo
20:19
sei lá, "seja um programador"
20:21
é muito legal esse vídeo, assista ele. Vou abrir aqui, ele já começou o vídeo aqui para mim
20:26
Tem os comentários. Os comentários também são rolados, quando eu rolo aqui os comentários vão sendo
20:32
carregados. A gente já começa a entender, começa a perceber que talvez tenha JavaScript aqui.
20:37
Agora, o que eu vou fazer é o seguinte:
20:39
eu vou desabilitar o JavaScript para o YouTube
20:42
dá uma olhada nisso. Vou clicar no botão de "Atualizar"
20:45
segure o botão de Shift do seu teclado para poder atualizar
20:48
para ele não ter cache
20:49
Dá uma olhada no site do YouTube
20:51
sem JavaScript, nada do YouTube funciona
20:55
Vamos para a página principal do YouTube
20:58
Não tem, simplesmente não tem nada!
21:00
Eu não consigo clicar
21:02
o YouTube é muito dependente. Praticamente a parte de interação dele é feita baseada em JavaScript
21:09
e sem JavaScript você não consegue acessar o YouTube.
21:13
eu acho que ficou bem claro. E isso vai funcionar para qualquer site. Faça a sua experiência
21:18
abra o site que você mais está acostumado a acessar no seu dia-a-dia
21:21
vai lá na parte do DevTools do Google Chrome e desabilita o JavaScript
21:25
entende qual é a importância da linguagem JavaScript para o seu site favorito
21:30
esse é o primeiro exercício dessa aula
21:32
e antes de terminar esse vídeo, eu tenho uma
21:34
promessa para cumprir contigo. Você deve se lembrar que no início do vídeo eu fiz coisas do tipo
21:39
mudar a cor do fundo do site do Google, colocar logo em preto e branco, sumir com a logo
21:44
E eu vou te mostrar exatamente como fazer isso. E não fica preocupado em entender os comandos
21:50
o nosso objetivo aqui é mostrar de forma divertida
21:54
a maneira de fazer. O que fazer e entender o que fazer, você vai aprender se você assistir esse curso até o final
22:00
essa é só a primeira aula. Então volta no seu Google Chrome, abre o seu DevTools
22:05
abre o site do Google e vamos começar o nosso "trabalho hacker"
22:10
Eu vou aqui nas configurações, vou desmarcar para ele habilitar o JavaScript
22:16
segurar o Shift e dar o Update. Já voltamos o YouTube ao normal. Alívio.
22:22
vamos abrir o Google agora, e nós vamos utilizar o DevTools pra brincar.
22:27
Em primeiro lugar, nós vamos clicar em "Console". Aqui você consegue dar comandos.
22:34
então, por exemplo eu posso colocar
22:36
alert('Olá, mundo!'); Dá uma olhada em como eu digitei
22:40
alert todo em minúsculas, aspas simples, o apóstrofo e coloquei 'Olá, mundo!'
22:46
quando eu apertar Enter, ele escreveu 'O Google diz Olá, mundo!'
22:49
O Google diz?
22:50
não fui eu quem mandou dizer?
22:52
calma, já explico melhor. Vou dar 'OK' aqui e vamos fazer algumas alterações
22:57
por exemplo, como eu mudo a cor de fundo para preto?
23:01
então vamos lá. Aqui embaixo, no Console, vamos colocar document
23:06
(a gente vai explicar como funciona tudo isso) document.body
23:09
document.body.style
23:10
document.body.style.background Se você analisar, o corpo do documento, o estilo dele
23:17
a cor do fundo vai ser 'black', certo? Vou dar Enter e já está lá.
23:22
Esse foi o comando que eu usei, lá no início do vídeo. Outra coisa que eu fiz
23:26
foi transformar essa logo em preto-e-branco.
23:28
você vai clicar nessa setinha, só pra gente poder pegar o nome dessa imagem
23:32
é só clicar na setinha, ficou azul
23:35
clique aqui atrás, você vai passar o mouse em cada um deles e vai aparecer o nome
23:39
se você olhar aqui em cima, tem img#hplogo
23:46
certo? Então, como você vai fazer? Vou colocar aqui document.querySelector
23:52
('img#hplogo').style.
23:59
(vou aumentar aqui, para caber tudo)
24:03
.filter. E esse filtro vai ser 'grayscale(100%)'
24:08
isso é, ele vai ficar em escala de cinza, 100%
24:12
Dei Enter. Dá uma olhada no meu site
24:14
já está logo em preto-e-branco
24:16
eu quero sumir com a logo agora, vou voltar no console
24:20
e vou dar um comando muito parecido com esse aqui de cima, só que vai ser
24:23
document.querySelector('img#hplogo').style.visibility
24:33
vai ser 'hidden', que é 'escondido'
24:35
então basicamente, vou pegar esse hplogo eu vou colocar ele escondido. Ok?
24:40
Sumiu. E aí eu te pergunto: eu hackeei o site do Google?
24:44
agora todo mundo quer acessar o Google vai ver um site preto, sem logo, ou com a logo em preto-e-branco?
24:50
Não, sinto muito em informar
24:52
basicamente, o que você fez foi alterar o JavaScript que já chegou na sua máquina, no seu dispositivo
24:59
lembra que o JavaScript funciona do lado do cliente?
25:01
então basicamente, só para a sua máquina, nesse exato momento
25:05
o site do Google está preto, sem logo, ou com a logo em preto-e-branco
25:10
qualquer outra pessoa que esteja acessando em qualquer outro lugar do mundo, e até o seu lado, do celular
25:14
vai estar com o site do Google bonitinho. Você não hackeou o Google
25:18
você simplesmente está mexendo no código que já chegou na sua máquina. E ele pertence só você
25:23
Quer ver um negócio? Se eu vier aqui e atualizar
25:26
o site já volta ao normal. Sem problema nenhum. Quando você clica nesse botão
25:31
você simplesmente está pedindo de novo ao servidor:
25:34
"Olha, servidor. Me manda aquele arquivo de novo?"
25:36
ele vai pegar uma cópia, vai mandar pra você do jeitinho que ele foi construído
25:40
quer ver uma outra brincadeira que você pode fazer? Eu vou abrir outro site aqui
25:45
Me acompanha. Vamos acessar aqui em cima, outro site que é o G1
25:48
que é outro site bem conhecido. Você já deve ter visto aquela galera que faz modificações
25:53
Vai mudando a manchete e tudo mais
25:56
é simples mudar a manchete
25:58
A primeira coisa que eu tenho que fazer é vir aqui no meu DevTools e vou habilitar a setinha.
26:02
pra eu saber o nome dessa área
26:04
Essa área se chama span bstn-hl-title. Vou aqui no console
26:11
Para tirar essa sujeira toda: Ctrl+L (de limpar)
26:14
E vamos colocar lá: document.querySelector()
26:19
document.querySelector('span.bstn-hl-title')
26:32
document.querySelector('span.bstn-hl-title').innerText
26:34
Então o meu texto dentro está: "Reforma propõe idade mínima e fim da aposentadoria"
26:38
Eu vou colocar outro texto
26:40
"Curso em Vídeo de JavaScript é o melhor do YouTube", vou dar Enter
26:47
Está lá. Acabei de mudar a manchete
26:51
eu tiro um print, posso até mudar a foto (se quiser) eu posso botar uma foto que esteja aqui
26:56
eu faço toda modificação do site G1
26:59
tiro um print e digo para todo mundo que acabou de sair na capa, dizendo que o Curso de JavaScript é o melhor o YouTube
27:06
Você não entrou no site do G1
27:08
modificou as coisas e agora todo mundo vai ler isso. É só no seu computador. É só na sua máquina agora
27:14
se você atualizar o site, ele volta para a manchete anterior.
27:17
mas eu acho que com essas demonstrações, você conseguiu entender o poder da linguagem JavaScript
27:23
E aí? Gostou da ideia? Quer aprender essa linguagem? Quer entender melhor
27:28
cada um desses comandos que a gente viu até aqui e muitos outros comandos?
27:32
a gente vai aprender os fundamentos principais da Linguagem JavaScript
27:36
E o melhor de tudo? Esse curso já está completinho, disponível, online,
27:40
prontinho para você assistir do início ao fim. Mais uma vez eu gostaria de agradecer muito o patrocínio do Google
27:46
Para você, nosso aluno que a gente chama de "Pequeno Gafanhoto"
27:49
muito obrigado também por assistir o vídeo, por compartilhar com as pessoas
27:53
mostrar que o Curso em Vídeo está construindo, a cada dia, um pouco do seu conhecimento
27:58
é claro que a gente não quer que esse curso seja o mais completo, eu não vou falar nunca
28:03
basta assistir esse vídeo você vai dizer que já sabe tudo de JavaScript
28:07
O meu objetivo aqui é te ensinar, é te dar os primeiros passos para que depois você consiga andar sozinho
28:13
Então seja muito bem-vindo, seja muito bem-vinda ao seu Curso de JavaScript, e a gente se vê
28:19
na próxima aula. E eu espero sinceramente que com esse vídeo, que eu tenha convencido
28:24
a prosseguir com o curso.
28:26
Um grande abraço, bons estudos e até a próxima.
28:30
Legendas: Tainá Bandeira
*/