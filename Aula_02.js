// Aula 2 – Como chegamos até aqui?
// https://www.youtube.com/watch?v=rUTKomc2gG8

/*
Você sabe qual foi a empresa a criar o JavaScript? Sabe qual é a diferença entre as linguagens Java e JavaScript? Sabe qual é a relação que existe entre as linguagens JavaScript e ECMAScript? Sabia que, por exemplo, o programa usado para acessar WhatsApp no computador é feito em JavaScript?
*/



/* 
TRANSCRIÇÃO
0:00
Antes de começar a sua aula 2 do curso de JavaScript
0:03
eu tenho algumas perguntas pra te fazer:
0:06
Em primeiro lugar, uma pergunta simples, mas muito importante.
0:09
Você sabe a diferença entre um cliente e um servidor para a infraestrutura da internet?
0:14
Você sabe diferenciar basicamente dentro de uma infraestrutura de redes, o que é um cliente suas tarefas
0:20
e o que é um servidor e suas tarefas? Outra coisa, você sabe diferenciar as tecnologias HTML, CSS,
0:27
JavaScript e o que cada uma faz?
0:29
Quais são as especialidades de cada uma? Para que cada uma serve?
0:32
Você consegue citar pra mim, de bate-pronto
0:35
4 sites que utilizam a tecnologia JavaScript no seu coração?
0:39
Pois saiba que se você ficou em dúvida em qualquer uma dessas perguntas
0:43
ou não sabe responder assim de imediato, é sinal que você não assistiu
0:47
ou não prestou muita atenção na aula anterior.
0:49
Então não se esquece que aqui em cima você tem acesso a playlist do curso
0:53
completo eu te recomendo ver todas as aulas na sequência.
0:57
Inclusive para poder responder essas perguntas que eu acabei de fazer.
1:00
Agora se você conseguiu responder tudo direitinho
1:03
seja bem-vindo, seja bem-vinda à aula 2 do seu curso de JavaScript
1:08
Legendas: Tainá Bandeira
1:20
Olá, pequeno Gafanhoto! Seja bem-vindo à sua segunda aula do Curso em Vídeo de JavaScript,
1:26
totalmente patrocinado pelo Google. O meu nome é Gustavo Guanabara,
1:29
eu sou professor e como eu disse no início do vídeo, nós vamos nessa aula
1:34
acabar de uma vez por todas com essa dúvida:
1:36
JavaScript e Java são a mesma coisa?
1:39
São diferentes? Por que eles têm um nome tão parecidos se eles são diferentes?
1:44
Ou se eles são iguais, por que tem o "Script" no final de um e não tem "Script" no final do outro?
1:48
A gente vai, até final dessa aula, responder todas as suas perguntas.
1:51
E se você viu nesse vídeo o título da aula que é a "Evolução do JavaScript"
1:56
e está pensando nesse momento em pular falando assim: "acho que eu não quero esse negócio não".
2:00
Vai por mim, eu te dou o conselho. Assiste esse vídeo até o final
2:04
porque quando a gente entende de onde vem uma tecnologia,
2:07
a gente entende até mesmo para onde ela vai.
2:10
Dá pra gente ter essa noção e além do mais,
2:12
tem outra dúvida que muita gente tem:
2:14
Javascript, ECMAScript, tem alguma relação entre eles?
2:18
O que é esse tal de "ECMAScript" que me mandaram estudar?
2:21
E para todas essas suas dúvidas, essa Aula 2 tem a resposta.
2:25
Então sente-se confortavelmente, pare de usar o Facebook e o Instagram ao mesmo tempo,
2:30
foca sua atenção aqui nessa aula, com certeza no final você vai saber pra caramba sobre JavaScript.
2:35
E como toda evolução, a gente precisa de uma linha do tempo, eu vou te mostrar aqui
2:40
toda a evolução da linguagem numa linha do tempo. É claro que eu não vou falar de todos os tópicos,
2:46
tópico por tópico, senão esse vídeo ia ficar com mais de duas horas.
2:49
E o objetivo aqui é não levar o seu tempo, o meu foco é te dar todas as informações
2:54
no menor tempo possível, mas sem perder a qualidade. E toda a nossa história, quando a gente fala de JavaScript,
2:59
começa com a história da própria Internet.
3:02
Em 1970 surgiu os primórdios da Internet, na verdade foi antes de 70,
3:07
em meados da década de 60, se você estudou um pouquinho de história.
3:11
Você deve se lembrar existia uma Guerra entre EUA e URSS
3:15
que ficou conhecida mais tarde como a grande Guerra Fria.
3:18
E essa guerra não foi uma guerra de batalhas físicas, de tiroteio, aquele negócio todo.
3:23
Ela foi uma guerra essencialmente psicológica e tecnológica.
3:27
Onde (convenhamos) os EUA estavam perdendo feio.
3:31
Isso porque a URSS tinha muito mais tecnologia
3:34
naquela época do que os EUA, inclusive foi ela (a URSS) que lançou o primeiro satélite artificial.
3:41
O famoso Sputnik.
3:42
É claro que a função do Sputnik não era muita coisa não,
3:45
mas os EUA não sabiam disso, na verdade eles tinham medos constante de serem atacados.
3:50
E aí, em meados da década de 60, o presidente militar da época
3:54
o Dwight D. Eisenhower decretou a criação de uma agência de pesquisa tecnológica, a DARPA.
4:02
E a função da DARPA, como acabei de falar, era pesquisar tecnologias para a guerra.
4:06
Uma dessas tecnologias envolvia a segurança dos centros militares.
4:10
Centro militar naquela época tinha computadores,
4:12
na verdade não era computador como você tem hoje na sua casa, eram grandes computadores
4:16
basicamente um centro militar tinha um computador cheio de dados dentro dele.
4:20
e se por acaso a URSS bombardeasse esse centro militar, todos os dados seriam perdidos.
4:26
A ideia da DARPA foi criar uma rede para proteger esses dados
4:29
onde um centro militar se comunicaria com o outro e se por acaso um fosse bombardeado,
4:34
os dados de um estavam dentro desse outro então os danos seriam físicos e não aos dados.
4:40
Essa rede ficou foi chamada de ARPANET. Era uma rede essencialmente gerenciada pelo governo e por militares,
4:48
mas tinha também muitas universidades dentro. Principalmente duas muito importantes:
4:53
a Universidade da Califórnia e um departamento que era o MIT, lá do outro lado dos EUA.
4:58
Essa rede sofreu um crescimento gigante durante alguns anos,
5:03
só que chegou um momento em que os militares e o governo não estavam mais dando conta
5:08
porque a rede cresceu pra caramba e a elas se juntaram a outras pequenas redes.
5:13
E foi nesse momento, durante a história da ARPANET, que ela mudou de nome várias vezes
5:18
e último nome que ficou foi a Internet. Sim, essa Internet que você tem hoje na sua casa,
5:24
surgiu lá em 1970, na época por conta de guerras.
5:28
Os anos se passaram e a ARPANET (no caso a Internet) sofreu várias atualizações,
5:34
vários crescimentos, novas tecnologias que surgiram, eu vou pular todas elas
5:38
mas uma que vai importar pra gente surgiu em 1993.
5:42
Em 1993 em Genebra, um inglês chamado Timothy Berners-Lee ou Tim Berners-Lee
5:49
ou TBL. Esse cara que tá aparecendo aqui embaixo foi o responsável pela criação de uma tecnologia
5:54
que a gente tem até hoje e é muito importante no nosso dia a dia, ele pesquisou um
5:58
meio de transformar o conteúdo em algo mais interativo através de ligações entre documentos.
6:05
Surgiu então a linguagem HTML, que foi criada por ele e por sua equipe,
6:09
o protocolo HTTP, que se juntou ao conjunto de protocolos TCP/IP que fazem parte da Internet
6:15
e também fundou a World Wide Web, a www que a gente usa até hoje,
6:20
basicamente quando você abre o navegador e digita www alguma coisa,
6:23
você está utilizando uma tecnologia que foi inventada em 1993 por Tim Berners-Lee e a sua equipe
6:30
que trabalha no CERN, que é uma Organização Européia para Pesquisa de Energia Nuclear.
6:35
Sendo assim, a World Wide Web (o www) surgiu em 1993, com Tim Berners-Lee.
6:43
Nesse mesmo ano, para que todas essas invenções de Tim Berners-Lee funcionassem
6:47
também era necessário um navegador. Surgia então, nos EUA, o Mosaic
6:53
ele era uma criação de um outro pesquisador, em outro centro de pesquisa que era NCSA
6:59
ou Centro Nacional de Aplicações de Supercomputadores
7:02
e esse pesquisador era o Marc Andreessen, esse que está aparecendo aqui no final da tela.
7:08
O Mosaic foi um navegador muito importante para a evolução da tecnologia porque ele foi o primeiro,
7:13
na verdade ele foi adaptado de um interpretador de Gopher que era um protocolo anterior ao HTTP,
7:19
mas ele foi adaptado e também funcionava com HTTP e também mostrava páginas Web.
7:24
Inclusive Marc Andreessen foi muito importante em 1994, quando ele saiu da NCSA
7:30
e se juntou com o cara bilionário o fundador da Silicon Graphics
7:35
chamado de Jim Clark, teve contato com a Internet e falou assim: "poxa eu vou abrir uma empresa disso ai",
7:41
chamou o Marc Andreessen e fundaram, os dois juntos, uma empresa chamada Netscape.
7:47
A empresa Netscape criou um navegador baseado no Mosaic e com toda a experiência que Andreessen tinha
7:54
e facilmente se tornou o navegador por mais famoso da Internet.
7:58
E uma curiosidade que tinha do Netscape: a equipe interna de desenvolvimento
8:02
sempre colocava nomes engraçados nas coisas. Um dos projetos internos dentro da Netscape,
8:07
era um grupo que homenageava o Godzilla, aquele bichão japonês gigante.
8:11
O nome do grupo era Mozilla e com certeza você já ouviu falar nesse nome,
8:17
mas segura as pontas aí que a história vai evoluindo. A Netscape, crescendo pra caramba
8:21
resolveu criar uma coisa baseada numa necessidade. O HTML era muito estático e foi aí, em 1995
8:29
que um ex-funcionário da Silicon Graphics, que trabalhava pro Jim Clark passou da Silicon Graphics
8:34
pra dentro da Netscape. O nome dele Brandon Eich, esse cara que apareceu aqui no meio
8:40
ele era um desenvolvedor e a tarefa dele foi a seguinte: criar uma linguagem que desse mais funcionalidades
8:46
ao simples HTML que existia na época, o Brandon Eich tinha um projeto e batizou a sua linguagem inicialmente
8:53
de Mocha que é um tipo de cafezinho e nessa mesma época estava surgindo uma linguagem lá da
8:59
Sun Microsystems chamada Java. Inclusive existe curso aqui de Java,
9:04
é só você clicar aqui em cima ou visitar o nosso canal Curso em Vídeo. Faça também o curso de Java
9:08
mas é importante dizer
9:10
JavaScript não é Java e Java não é JavaScript. Eu já vou te explicar, mas o fato é
9:15
em 1995, nesse ano que a gente está estudando agora, o Brandon Eich estava criando a linguagem Mocha
9:21
e estava nascendo ao mesmo tempo a linguagem Java. E essa linguagem Java
9:26
ganhou um sucesso muito grande na mídia, a mídia chamava a linguagem de "linguagem do futuro".
9:31
E então a Netscape pensou: "nós estamos criando uma linguagem, Java é a "linguagem do futuro",
9:36
nossa linguagem não vai nem se chamar Mocha". Na verdade ela tinha até outro nome,
9:39
Mocha foi o nome inicial ela se chamava depois LiveScript
9:43
e o pessoal da Netscape falou assim: "o nome Java faz sucesso,
9:46
não vamos chamar a nossa linguagem de LiveScript, nós vamos chamar a nossa linguagem
9:50
de JavaScript e então foi exatamente isso que aconteceu, exatamente isso que você acabou de ouvir.
9:57
O nome JavaScript não vem porque a linguagem JavaScript se parece com a linguagem Java.
10:01
Vem porque na época, estava fazendo sucesso falar a linguagem Java,
10:08
e aí os funcionários da Netscape, numa grande jogada de marketing falou assim:
10:12
"vou usar esse nome Java na minha linguagem também" e acabaram lançando
10:16
a linguagem JavaScript. Na verdade se você analisar, as linguagens Java e JavaScript
10:22
são bem diferentes entre si. É claro que alguns comandos se parecem bastante.
10:27
E nesse momento você deve estar pensando: "pô Guanabara, eu aprendi Java e JavaScript
10:30
e o if é igualzinho" na verdade o if, não é o if JavaScript e nem o if do Java. As duas linguagens
10:36
foram baseadas numa outra linguagem, chamada linguagem C
10:39
então é por isso que os comandos se parecem bastante, mas são linguagens completamente diferentes
10:45
JavaScript é uma coisa e Java é outra não confunda as bolas.
10:49
Surge então o nome JavaScript, e você já entendeu com a gente que não tem nada haver uma com a outra
10:55
foi só uma jogada de marketing e obviamente por conta da escolha desse nome
11:00
JavaScript foi uma linguagem que fez bastante sucesso, e você sabe o sucesso atrai o olho grande de algumas
11:06
outras empresas. E a empresa da vez foi a própria Microsoft, a criadora do Windows.
11:11
A ideia da Microsoft foi a seguinte: "nossa, JavaScript é uma linguagem legal,
11:15
vamos nós mesmos criar nossa própria linguagem" isso porque ela tinha acabado de lançar um outro navegador
11:23
que basicamente era o código base do Mosaic. O Mosaic ficou com o NCSA,
11:27
ele foi passado pra uma empresa, essa empresa foi comprada pela Microsoft, a Microsoft pegou o código
11:33
do Mosaic e lançou um navegador chamado Internet Explorer. Sim, eu sei que você está pensando
11:39
mas aguarda ai que você vai ver. O Internet Explorer foi lançado muito perto do ano de 1995
11:45
que é o ano que estamos estudando, junto com o Windows95 e a Microsoft não deixou pra trás:
11:50
"vamos criar nosso próprio JavaScript, com os mesmos comandos resolvendo alguns problemas
11:55
que as pessoas já tinha identificado e vamos batizar a nossa linguagem não de JavaScript e sim de JScript
12:01
porque pode rolar um processinho".
12:02
A Netscape obviamente pensou: "nossa, mas nós criamos a linguagem JavaScript, veio a Microsoft
12:08
meio que copiou, utilizando os mesmos comandos deu uma melhorada em outra vai acabar virando bagunça".
12:15
E a Netscape teve uma sacada muito boa, que foi padronizar a linguagem. E isso aconteceu em 1997,
12:22
quando a Netscape procurou uma empresa de padronização, nesse caso uma empresa européia,
12:27
a ECMA, que é a Associação Europeia de Fabricantes de Computadores.
12:32
A ECMA na Europa é tipo uma ISO nos EUA, ela padroniza as coisas.
12:36
E foi aí, com a Netscape cedendo o código JavaScript para ECMA para uma padronização, que surgiu
12:42
a linguagem ECMAScript. Basicamente a ECMAScript é a linguagem JavaScript padronizada.
12:49
Hoje, quando você estuda JavaScript, as pessoas pensam assim: "não, você vai estudar JavaScript
12:53
mas você vai estudar ECMA, não é?". Na verdade, essa frase significa que você vai estudar
12:58
a versão padronizada do JavaScript. Mais pra frente, a gente vai falar um pouco mais sobre essas versões.
13:03
Vamos passar mais alguns anos e vamos estudar o ano de 2002 e ver o que aconteceu nele
13:08
Basicamentem, 2002 foi o ano de encerramento da briga que existia entre a Netscape e a Microsoft
13:15
houve uma briga muito grande. O Internet Explorer foi embutido no sistema operacional Windows95,
13:21
o que fez com que a Netscape deixasse de ser um navegador mais famoso e mais instalado,
13:26
porque as pessoas já compraram um computador que já tinham navegador, que era o Internet Explorer
13:31
e com isso a Netscape deu uma caída e acabou falindo, mas as pessoas que trabalhavam lá criaram uma fundação
13:38
e a fundação ganhou o nome de um daqueles projetos que eu falei anteriormente, e foi em 2002 que surgiu
13:44
a Fundação Mozilla, que não desistiu de fazer navegador, ele só não se chamava mais Netscape
13:49
ele ganhou uma nova roupagem, um novo nome, um novo código e passou a ser o Firefox
13:55
que a gente usa até hoje, Firefox até ganhou uma grande notoriedade
13:58
mas acabou não sendo um grande navegador. Ele até hoje funciona, muita gente gosta.
14:03
Eu, particularmente, gosto pra caramba do Firefox, mas ele acabou perdendo muito espaço porque em 2008,
14:09
uma outra grande empresa acabou entrando nessa briga, a Netscape, a Microsoft, o mercado de Internet
14:16
crescendo pra caramba uma grande empresa, que inclusive é a patrocinadora do nosso curso
14:20
pensou assim: "também vou criar o meu próprio navegador".
14:23
Surgiu então o Google Chrome. E o Google Chrome cresceu para caramba,
14:27
nos primeiros dois anos de vida, ele já se tornou o terceiro navegador mais usado do mundo
14:33
hoje. No momento em que eu estou gravando esse vídeo,
14:35
o Google Chrome é o navegador mais famoso do mundo
14:39
Ele tem praticamente 50% do mercado. E o que o Google Chrome trouxe de bom
14:44
e que vai interessar a gente no aprendizado da linguagem JavaScript?
14:47
Ele tinha um motor interno de JavaScript muito poderoso e foi em 2009, que surgiu a versão
14:53
logo no inicio da V8, uma referência aos motores. O V8 é o motor por baixo do capô do Google Chrome
15:01
que roda JavaScript. Cada navegador tem o seu próprio motor, por exemplo:
15:05
o Firefox é o SpiderMonkey, no Safari ele se chama Nitro, no Opera é o Karakan
15:11
e na Microsoft no Edge é o Chakra. E uma das grandes vantagens
15:16
do V8, e que tornou ele muito importante, é que ele gerava
15:19
código JIT ou código "Just in Time". Eu não vou entrar nesse mérito aqui,
15:23
eu não vou entrar na explicação disso, mas é uma coisa muito boa. E outra coisa muito boa,
15:28
é que o V8 tem código aberto, é código livre qualquer pessoa pode mexer.
15:33
Inclusive um grupo pegou o código do V8 mexeu e fez a seguinte transformação:
15:39
o V8 só roda se eu tiver Google Chrome ele é código aberto,
15:43
se ele é código aberto eu posso modificar ele funcionar fora do Google Chrome
15:48
e essa iniciativa deu origem a uma famosa ferramenta que surgiu em 2010
15:53
chamada Node.js. Na verdade o Node.js é uma máquina que roda JavaScript
15:59
fora do navegador. Isso tornou, como eu disse no vídeo anterior, que o JavaScript
16:05
foi feito para rodar no cliente, rodando dentro do navegador,
16:09
o Node foi uma das grandes iniciativas, foi a que popularizou a saída do JavaScript dos navegadores.
16:15
Então hoje graças ao Node.js, e graças a outras máquinas que também rodam do lado de fora
16:20
mas o Node.js é o mais famoso de todos, hoje podemos ter JavaScript
16:24
do lado do servidor também. Mas volto a dizer: esse não é o foco desse nosso curso.
16:29
Então essa aqui é a nossa timeline que importa. É claro que faltou falar muita coisa
16:35
nesse momento você deve estar falando: "faltou falar de jQuery, você não falou de Vue.js,você não falou Angular,
16:40
você não falou de React". Calma meu querido, a gente está fazendo uma linha temporal bem básica
16:46
e esses aqui foram os que eu julguei importante para que você possa aprender
16:50
espero que você tenha entendido, espero que muitas das coisas que a gente falou aqui,
16:54
sirva pra você entender a evolução dessa maravilhosa linguagem JavaScript.
16:59
E agora, antes a gente finalizar eu preciso falar do ECMAScript. O ECMA, como a gente falou anteriormente,
17:05
é a padronização da linguagem JavaScript. Ele teve várias versões e várias funcionalidades
17:10
eu também não vou ficar falando sobre muitas funcionalidades
17:13
mas vou mostrar a evolução do ECMAScript pra você.
17:16
Como a gente viu anteriormente, a linguagem ECMAScript é a versão padronizada do JavaScript
17:21
Ela surgiu em 1997 com a versão 1.0 que era JavaScript1.1, que foi padronizado pela ECMA
17:29
mais tarde foi lançada a versão 2.0. Em 1998, um ano depois,
17:34
ela trouxe apenas algumas pequenas atualizações ao que tinha feito a versão 1.0
17:39
A versão 3.0 surgiu também um ano depois, em 1999 ela já trouxe compatibilidade com expressões regulares
17:47
já tinha o bloco try/cath para poder tratar erros, que não existia antes nas versões 1 e 2.0
17:52
mas já tinha na linguagem C, já tinha na linguagem Java e em 1999 meio que travou o projeto
17:58
As promessas para a versão 4.0 foram tão grandes que a versão nunca saía,
18:03
sabe aquele negócio de: "vou prometer que vai sair tal coisa", mas nunca sai
18:06
isso aconteceu com a versão 4.0 do ECMAScript, que sequer existiu e só em 2009,
18:12
pulando a versão 4, surgiu o ECMAScript versão 5 que já ficou conhecido como ES5,
18:18
essa versão é a mais popular de todas, compatíveis com quase todos os navegadores atuais,
18:23
ela se tornou compatível com o JSON e também trouxe vários métodos para tratar arrays
18:28
em 2015 surgiu o ES6, que trouxe os declaradores let e const
18:34
e também as Strings em Templates, que a gente vai usar pra caramba nesse curso
18:39
Basicamente esse curso ele se baseia muito no ES6 que essa versão
18:43
e que está bem popular hoje em dia também, mas é que o ES6 não é a última versão
18:48
porque a partir do ES6 que é de 2015 saía uma versão por ano, ele parou de se chamar
18:53
6, 7, 8. A partir da versão 7, ela já começou a se chamar pelo ano ES2016
19:00
que trouxe algumas funcionalidades como por exemplo o operador de exponenciação depois veio o ES2017
19:06
que trouxe a compatibilidade com funções assíncronas e outras muitas coisas.
19:10
E a última versão, a versão mais recente do momento em que eu estou gravando esse vídeo,
19:14
o ES2018, que trouxe novidades em expressões regulares as RegEx
19:19
e também trouxe a possibilidade de promises, de promessas, a gente nem vai chegar ver isso do curso
19:25
e a evolução do JavaScript não foi só a evolução da linguagem. Várias ferramentas surgiram
19:30
com a evolução do JavaScript. É aí é que eu venho ter um papo sério com você aqui. Tem muita gente
19:35
que pede cursos cursos de Angular, de React, de Vue.js, mas na verdade não sabe nada de JavaScript.
19:41
As tecnologias que surgiram, como por exemplo, Node.js, o próprio Angular do Google
19:46
ou o React do Facebook, foram ferramentas que surgiram e que levam o JavaScript para outro patamar.
19:52
Mas o grande problema é: você precisa conhecer o JavaScript para conhecer essas tecnologias
19:57
como disse anteriormente, uma das tecnologias que usa JavaScript é um framework muito importante
20:02
é o jQuery. Na verdade ele nem é um framework, ele é um conjunto de bibliotecas,
20:07
jQuery foi muito famoso durante muitos anos e agora deu uma caidinha, mas ele foi criado por uma galera
20:12
da Mozilla mesmo. A biblioteca, que facilitava muito o uso de interatividade em JavaScript
20:18
Em 2009 surgiu o Angular, o Angular é criado e mantido pelo Google,
20:23
ele facilita muito a criação de aplicações Web, ele é uma linguagem menos imperativa,
20:28
ele é uma linguagem mais declarativa, semelhante SQL para banco de dados
20:32
traçando um pequeno paralelo, existe uma briga entre o Angular 1, que é o tradicional AngularJS
20:38
e o Angular (só Angular) que é da versão 2 pra cima. Mas eu também não vou entrar muito nisso não.
20:43
O Facebook também lançou sua famosa biblioteca, o React.
20:47
O React tem mais ou menos a mesma funcionalidade do Angular
20:50
mas ele tem algumas flexibilidades maiores, existe o React Native para a criação de aplicações e celular
20:57
dá uma pesquisada mais pra frente, mas primeiro aprende JavaScript,
21:00
não entra nessa de: "não, eu vou fazer um curso de React sem saber JavaScript"
21:04
vai dar com as caras na água!
21:06
Em 2014 surgiu um framework que é muito poderoso que é o Vue.js. Depois que você aprender JavaScript,
21:11
dá uma olhadinha nele, ele foi criado por um ex-programador do Google,
21:14
que segundo ele mesmo, já estava meio cansado de usar o Angular e criou uma versão bem melhor
21:18
e chamou de Vue.js. É Vue, não view de visualização.
21:22
Outras ferramentas muito importantes, o Electon que hoje é mantido pela Github,
21:27
ele é especializado para a criação de interfaces gráficas, para programas de interface gráfica
21:31
e com certeza você já utilizou ou vai utilizar um programa feito em Electron
21:35
o próprio Visual Studio Code da Microsoft, que a gente vai utilizar neste curso, foi feito em Electron
21:41
Aquele programa que você instala no seu computador,
21:42
e eu sei que você tem, pra acessar WhatsApp também feito em Electron. Aquele chat do Discord,
21:48
aquela coisa toda do Discord também feito em Electron, o Slack também feito na mesma tecnologia.
21:53
Outra coisa que surgiu também baseado em JavaScript foi o Ionic, que é um SDK para poder criar aplicações
22:00
para dispositivos móveis. O Ionic, por sinal que utiliza o próprio Node.js.
22:05
Vários desses aqui usam o Node.js. Na verdade, para rodar o JavaScript fora do navegador,
22:10
ele se baseava também uma versão antiga de uma tecnologia chamada PhoneGap
22:13
que hoje evoluiu, está na mão da Apache e se chama Cordova. Então é isso uma sopa de letrinhas
22:19
que você vai ter que lidar quando você avançar com JavaScript. Mas por favor, deixa eu te pedir
22:24
um grande favor olhando nos seus olhos: não entra nessa de tentar aprender
22:29
qualquer uma dessas tecnologias aqui sem aprender JavaScript. É um tiro no escuro
22:34
você vai virar copiador de código, não é assim que funciona.
22:38
E para finalizar, vamos levar o JavaScript a outros patamares. Também, existem vários outros frameworks,
22:44
SDK, bibliotecas. Principalmente também para a criação de jogos
22:48
sim, existem jogos criados em JavaScript, mas para você tem que saber a base
22:52
e também ter adição dessas bibliotecas e SDKS. Por exemplo:
22:57
Phaser que é muito famoso. E tem outras soluções como: PixiJs, o Impact, o MelonJS,
23:04
o CraftyJS, existem várias bibliotecas e várias tecnologias
23:08
para a criação de jogos em JavaScript. Então é isso, chegamos ao final de mais uma aula,
23:13
espero que você tenha chegado até aqui e aguentou firme e forte, o próximo video está quase chegando ai,
23:19
e no próximo vídeo vamos dar os primeiros passos na linguagem,
23:22
vamos fazer a instalação das ferramentas, vamos bater um papo sobre desenvolvimento.
23:27
Assiste o próximo vídeo, pois ele está muito importante. Veja com toda a atenção
23:31
e reflita, faz com a mente aberta. Eu queria, mais uma vez, agradecer aqui a sua paciência,
23:37
a sua audiência, continue assistindo o curso de JavaScript, porque com certeza ele foi feito com todo o
23:42
carinho para você. Eu vou te dar um conselho rapidinho: mais pra frente, quando você aprender
23:47
um pouco mais sobre JavaScript, volta nessa aula e tenta assistir de novo a evolução dele,
23:53
com certeza você vai ter uma visão mais ampla e então você pode até focar os seus estudos
23:59
porque quando você aprender JavaScript, vai começar um monte de gente perguntando:
24:02
"porque você faz isso com JavaScript puro? Por que você não usa uma biblioteca?
24:05
Por que você não usa o jQuery? Por que você não usa o Angular?", muita coisa disso vai aparecer na sua vida
24:10
e aí você volta aqui assiste esse vídeo de novo e aí você tirar suas próprias conclusões
24:15
e dá prosseguimento aos seus estudos. Eu me despeço por aqui, mas já fica marcado
24:20
o nosso encontro para a próxima aula, onde a gente vai dar os primeiros passos na linguagem.
24:24
Um grande abraço e até a próxima!
24:28
Legendas: Tainá Bandeira
*/