// AULA 03
// Link desta aula no YouTube: https://www.youtube.com/watch?v=FdePtO5JSd0&t=41s

// No curso se aprende lógica de Programação (que é muito importante) utilizando uma liguagem de Programação (no caso, o JS).
// Instalações do navegador (Google Chrome), do editor de código (VSCode), e do Node.js (para utilizar o JS fora do navegador).


/* TRANSCRIÇÃO

Nessa aula de JavaScript que, começa agora, vamos falar muito sobre o processo de aprendizagem de uma linguagem, as dificuldades, as frustrações de quem está começando
0:09
e nós vamos também dar os primeiros passos na linguagem JavaScript. Você não perde por esperar só que a exemplo do que aconteceu na anterior eu vou começar essa aula te fazendo
0:18
algumas perguntas também, veja se você é capaz de responder a elas de maneira simples. Você sabe me dizer qual foi a empresa que criou a linguagem JavaScript?
0:26
Você sabe me dizer se as linguagens Java e JavaScript são a mesma coisa, se parecem ter alguma relação entre elas? E de maneira similar
0:34
a linguagem ECMAScript tem alguma relação com a linguagem JavaScript? E uma curiosidade: você sabia que vários programas são criados em JavaScript, inclusive aquele programa
0:44
que você instala no seu computador para poder acessar o seu WhatsApp diretamente pelo Windows ou aquele chat do Discord, que eu sei que você usa? Você sabe citar outros exemplos de software
0:53
que foi criado em JavaScript? Pois se por acaso a tua resposta para qualquer uma dessas perguntas for:
0:58
"tá aí, eu não sei" é sinal de que você pulou uma etapa e não assistiu o vídeo anterior. Pois saiba que sempre vai estar disponível aqui em cima um link para playlist completa
1:07
e esse curso só vai funcionar na sua cabeça de maneira completa. E se por acaso você conseguiu responder a todas essas perguntas sem problema nenhum,
1:15
seja bem-vindo, seja bem-vinda, à sua Aula 03 do curso de JavaScript!
1:21
Legenda: Tainá Bandeira
1:33
Olá, pequeno Gafanhoto! Seja bem-vindo à terceira aula do seu Curso em Vídeo de JavaScript
1:39
totalmente patrocinado pelo Google. O meu nome é Gustavo Guanabara, eu sou o seu professor e nas aulas anteriores, se você pulou, a gente viu um monte de coisas importantes,
1:49
te mostrei quais são as semelhanças entre JavaScript e ECMAScript, o que é o JavaScript - que as pessoas falam - te mostrei que Java não é a mesma coisa que JavaScript.
1:58
JavaScript e Java são coisas completamente diferentes. A gente viu a evolução da linguagem, vimos de onde veio, para onde vai, o que são os frameworks JavaScript,
2:07
as bibliotecas, as tecnologias para criar jogo em JavaScript. Enfim, a gente tem um monte de coisa para fazer, e se você pulou as primeiras aulas
2:16
e veio nessa aqui, que se chama "Primeiros passos", você perdeu efetivamente os primeiros passos, que são os vídeos anteriores. Então tome vergonha na cara,
2:24
assiste esses vídeos, não pule porque todas as informações que estão lá são muito importantes e valiosas. E nesta terceira aula, como eu já falei anteriormente,
2:33
nós vamos dar os primeiros passos em JavaScript e como esse curso foi feito pensando em primeiros passos de muita gente, vai ter muita gente chegando aqui e pensando assim:
2:42
"ah, não sei se eu preciso aprender a programar, não sei o que é aprender a programar", "eu queria aprender uma linguagem de programação" ou "estou tendo problemas no aprendizado
2:49
da linguagens de programação". E esse vídeo aqui no início, tem um papo muito sério muito reto em relação a esse tipo de assunto. Assista até o final, veja de mente aberta
3:00
que com certeza você vai entender meu ponto de vista. Então é o seguinte: se você escolheu aprender
3:05
linguagem de programação assistindo um curso, assistindo um vídeo, parabéns! É uma ótima opção, mas tem gente que acaba pensando que aprender é só assistir,
3:15
já faz um tempo que eu tenho uma reflexão sobre isso. Então, antes de começar, vou te fazer uma proposta: dá uma olhada só como a gente aprende, ou como várias pessoas pensam
3:26
que a gente aprende. E eu vou usar como exemplo, uma coisa que muita gente tem vontade de aprender, pode incluir você. Aprender a tocar um instrumento musical, por exemplo,
3:35
tocar um violão. E eu vou te dar uma situação, diz se ela não parece esquisita. Me acompanha.
3:41
Isso que você está vendo aqui, é uma pessoa tocando violão. Eu separei vários videos de pessoas tocando violão para eu tentar provar meu ponto.
3:49
Você assiste esse vídeo até o final, você está assistindo as pessoas, você está vendo a posição da mão no braço, você está vendo a posição e vai fazer um "Fá", vai fazer um "Dó" e tudo mais
3:59
você está simplesmente assistindo até o final, já vou sumir com esse vídeo
4:04
e você acabou de assistir esse vídeo do início ao fim. Pronto! Você acabou de assistir vários vídeos de pessoas tocando violão. E aí eu te pergunto:
4:13
só por ter assistido esses vídeos, você sabe tocar violão? Se por acaso você sair agora da sua casa
4:19
ir pra uma festinha te derem violão na sua mão, só por ter assistido esses vídeos você consegue tocar alguma música? Nem que seja a própria música que o cara estava tocando ali anteriormente. Soou esquisito
4:28
isso né? E se por acaso você pode estar pensando: "Ah não, dá pra seguir mais ou menos, dá para se virar e se eu errar não vou me machucar, não vai acontecer nada com ninguém". Eu vou te dar a segunda
4:37
proposição aqui: se além tocar violão, eu quisesse aprender a fazer manobras radicais com bicicletas?
4:44
Me acompanhe aqui de novo. Nesse momento você vai ver alguns vídeos de manobras com bicicleta. Preste atenção
4:51
no movimento corporal do atleta, preste atenção no que ele está fazendo com a bicicleta. Olha como ele sobe uma ladeira como ele desce uma ladeira, dá uma olhada nos movimentos.
5:01
Acompanha, segue no vídeo, acompanha os passos desse vídeo e quando ele chegar no final
5:07
a gente conversa. Mas dá uma olhada nas técnicas do cara, separei vários ângulos pra você. Olha só que maravilha. E agora que você assistiu esse vídeo com a explicação, você viu todos os detalhes
5:19
se você sair da sua casa agora e pegar uma bicicleta, você consegue fazer todas aquelas manobras? Essas duas situações, de aprender a tocar violão só assistindo o vídeo e aprender manobras de bicicleta
5:29
só assistindo vídeos soou, no mínimo, idiotas não é? Você vai falar: "putz, a gente nunca vai aprender
5:35
só assistindo o vídeo". E aí vem a pergunta final: se não dá pra andar de bicicleta e nem tocar violão
5:41
só assistindo o vídeo, porque tanta gente que assiste vídeos no YouTube (ou em outras plataformas)
5:46
acha que vai aprender programação só botando a mão assim e assistindo vídeos? Isso não soa idiota pra você?
5:53
Será que quando você terminar de assistir um tutorial de linguagem JavaScript por exemplo, como está aqui. Você assistiu a aula, já viu a pessoa fazendo todos os códigos,
6:02
por que você considera que você sabe programar só por ter assistido o vídeo? Que experiência você teve
6:07
com programação? O que um vídeo tem de tão mágico, que faz você aprender? E por que com programação
6:13
funciona e com violão e bicicleta não? Eu quero que você pare para pensar, o que vai fazer com que você
6:18
saiba andar de bicicleta e tocar violão? E a resposta de todo mundo é simples: "ah, Guanabara. É prática,
6:24
se eu praticar, praticar e praticar eu consigo!" Vou fazer outra pergunta: quando você prendeu a andar de bicicleta, você já saiu andando
6:32
de uma vez por todas? Ou na primeira vez foi mais difícil e depois foi ficando mais fácil? Se você toca um instrumento musical, seja ele qual for, a primeira música que você tocou,
6:41
você tocou com nitidez, clareza e toda prática possível? Não! Foi difícil, só que você persistiu, você praticou.
6:49
Programação é exatamente a mesma coisa! Você não aprende programação só assistindo um vídeo
6:55
você não aprende programação só lendo o livro, lendo matérias, copiando o código de fórum, você só aprende a programar praticando!
7:03
E no momento em que você decidiu assistir esse vídeo, você assumiu isso pra você também, você não vai aprender JavaScript só assistindo os vídeos, você não vai fazer os seus programas JavaScript
7:14
funcionarem da primeira vez da melhor maneira possível, você vai errar, você vai "tropeçar", você vai "cair"
7:20
e a sua persistência vai fazer você aprender. Então agora, a partir desse momento,
7:26
você acabou de assinar um compromisso com a gente, para aprender JavaScript, você não pode agir
7:32
como a gente acabou de agir, só assistindo o vídeo. Você tem que meter a mão na massa e fazer acontecer,
7:37
estamos combinados? Só que aí você pode estar pensando: "pô, você jogou a bomba e saiu correndo não é? Como é que eu vou aprender?". E agora vem a minha resposta:
7:45
existem várias formas de você aprender, na verdade é um conjunto dessas coisas. Você vai aprender nesse curso assistindo vídeos, óbvio, esse curso já está todo disponível para você,
7:56
você vai assistir o vídeo e você vai ter todas as aulas organizadas, mas você precisa botar a mão na massa, ligar seu computador, instalar as ferramentas
8:05
e fazer funcionar. É uma coisa que parece tão óbvia, mas que a maioria das pessoas sequer faz. Outra coisa importante, você precisa - sim - ler conteúdo,
8:14
ler manuais, ler guias de referência, ler livros. Já vou te dar recomendações importantes
8:20
de livros e coisas que você vai utilizar para poder aprender JavaScript junto comigo. Outra coisa muito importante, que a gente usa bastante dentro de sala de aula, mas acaba esquecendo no online:
8:29
anotações. A dica que eu dou é a seguinte: pegue um caderno qualquer, pode ser aquele caderno velho
8:35
com poucas folhas. Coloca lá: "estou aprendendo JavaScript", tudo aquilo que você julgar importante
8:40
e que talvez você vai esquecer mais pra frente, anote nesse caderno. Isso porque quando você vê um vídeo
8:46
de meia hora, de 40 minutos, mais pra frente você vai ter uma dúvida e vai falar: "putz, ele falou aquele comando, talvez seja no vídeo 4 e aí você começa a ver os vídeos para procurar
8:57
um comando que se você tivesse anotado no caderno, você nem precisava assistir o vídeo de novo, você provavelmente já passou por isso aqui dentro do Curso em Vídeo ou fazendo vários outros cursos online.
9:07
Pois esse tipo de postura, esse tipo de situação, acontece com muita frequência. Então anote tudo
9:13
nesse seu caderno que você vai começar agora. Outra coisa que faz a gente aprender muito é com interações com outras pessoas. Converse com outras pessoas. Crie grupos de estudo,
9:24
estudo em conjunto, fale para um amigo: "olha só, toma esse link aqui, assiste essa playlist,
9:29
assiste esse curso aqui do YouTube. Esse cara está ensinando a gente a programar Vamos fazer esse curso juntos?". E ai vocês vão trocando experiências,
9:36
junta com a galera da sua faculdade. "Mas não tem tanto JavaScript na minha faculdade" junta todo mundo em um dia da semana, assiste as aulas, bota em prática juntos, ajuda os seus colegas,
9:47
a gente aprende muito quando a gente ensina. Tente ajudar a galera, com essa ajuda
9:52
com certeza você vai aprender muito. Participe de fóruns, veja se tem alguma dúvida em aberto
9:58
que você pode ajudar, coloque a resposta, ajude as pessoas. As ajudas fazem a gente aprender pra caramba.
10:04
E por fim, uma dica muito importante: comece a pensar em projetos próprios algumas situações que você precisa resolver no seu dia-a-dia e aí tentar aplicar a ferramenta de programação
10:15
para solucionar esse problema. Com certeza essa é uma das coisas mais difíceis de se fazer quando começa a tentar resolver problemas próprios, a gente começa a bater em barreiras.
10:23
E então volta aquela conversa. Você não consegue aprender a andar de bicicleta tão fácil, você tem quedas,
10:29
você tem machucados. Você também não consegue aprender a programar tão fácil, você também tem tropeços. Mas é só você persistir que você consegue.
10:36
Então, se você seguir esses 6 tópicos aqui, assistir o vídeo, treinar no seu computador, dar uma lida
10:42
em manuais e referências (vou te dar algumas dicas grátis), anotar tudo, interagir com pessoas,
10:47
resolver problemas, pensar em projetos pessoais e tentar resolver eles com programação com certeza,
10:53
você vai ter sucesso no seu aprendizado, não só de programação, de qualquer coisa nessa vida.
10:58
E por falar em bibliografia, vou te dar bibliografia que eu uso para poder criar essas aulas. Eu, como professor, sempre tenho uma bibliografia recomendada. Para gravar esses vídeos
11:07
e preparar essas aulas, eu utilizei dois livros muito importantes, esse primeiro aqui: "Javascript: O Guia Definitivo", que é do David Flanagan e foi lançado pela editora O'Reilly, é muito bom,
11:18
ele é um livro caro. Aproximadamente R$150,00 no momento que eu estou gravando esse vídeo, mas é um livro muito bom. Outro livro muito bom é de um querido amigo,
11:27
do Maujor, que é o "JavaScript - Guia do Programador", do Maurício Samy Silva eu não faço ideia de quanto ele custa porque eu ganhei a minha cópia do meu querido Maujor. Tenho a versão
11:36
autografada e é um livro muito legal. Ele não está tão atualizado em relação a ECMAScript na versão 5 e 6
11:43
mas é um ótimo livro. E por falar em ECMA e em padrões, existem duas opções gratuitas que são: "O Guia de referência da Mozilla", existe um guia de referência
11:54
da própria empresa que criou o JavaScript e "O Guia de referência da ECMA" esses dois de baixo totalmente
12:00
gratuitos, o link para o acesso deles eu vou colocar aqui embaixo na descrição do vídeo.
12:05
Mas basicamente você acessa da seguinte maneira: ♫ Basicamente, você vai de acessar developer.mozilla.org. Você vem aqui
12:17
em "Referências e Guias" e você tem as referências de um monte de tecnologias, tem uma referência de HTML,
12:23
referência de CSS pra você que vai precisar, eu já falei anteriormente que tem HTML e CSS.
12:29
Você pode vir aqui em "Tecnologias", "JavaScript" e aqui você tem tutoriais,
12:34
você tem a referência completa, "referência de JavaScript" clicando aqui você tem acesso a referência
12:40
inteira de segundo a visão da Mozilla. Ele se baseou também no ECMA, mas se você quiser
12:46
a referência da ECMA você pode vir aqui e acessar ecma-international.org,
12:51
nesse site horroroso que a ECMA tem, você pode vir aqui em "Standards" que são os padrões,
12:57
a abre os "Standards" e tem standard que é 262 (se eu não me engano), ECMA-262.
13:03
vamos procurar aqui, o ECMA-262 é o EMAScript, então você tem a referência da versão 9,
13:13
mas você pode vir aqui e clicar nesse "here" aqui no cantinho e ter acesso a referência de todos
13:19
os ECMA mas vamos trabalhar muito com a 6º edição e a 5º edição, que são as mais populares.
13:26
Vou vir aqui na 6º edição, que é a que vamos trabalhar bastante, ele vai levar um tempo de download
13:32
porque está baixando o arquivo PDF e em alguns segundos (ou em alguns minutos)
13:38
você tem toda a referência ECMA, é um livro bastante extenso,
13:44
é um PDF de 546 páginas, infelizmente todo em inglês mas você tem toda referência,
13:53
todos os comandos de uma maneira bem técnica. E se você quiser de uma maneira um pouco menos técnica
13:59
mas também vendo todos os detalhes da linguagem, recomendo os dois livros aqui de cima
14:05
"JavaScript: O Guia Definitivo" e o "JavaScript - Guia do Programador". O primeiro livro, o Guia Definitivo
14:11
está mais baseado na 5º edição do ECMAScript mas para o que a gente precisa nesse curso serve
14:16
sem problema nenhum, você não está estudando uma versão velha, você está estudando os comandos
14:22
até um certo ponto. Até mesmo porque os EMAScript mais novos o ES2017 e ES2018
14:28
ainda não são compatíveis com a grande maioria dos navegadores de hoje em dia. Então não vale tanto a pena você ficar estudando sempre a última versão, porque os navegadores
14:37
demoram um tempo para adotar elas. E antes de instalar efetivamente as ferramentas do computador, eu queria só pedir a sua atenção por mais alguns minutinhos. Eu prometo que vai ser rápido
14:47
mas esse assunto é muito importante a gente abordar nesse início dos seus estudos. Existem algumas crenças limitantes, existem algumas dúvidas comuns de quem está começando a programar
14:57
e elas existem até para quem já está programando há algum tempo. Para um iniciante, as crenças limitantes iniciais são sempre as mesmas
15:05
e normalmente são dúvidas do tipo: "será que eu sou velho demais para começar a aprender a programar?" ou "será que eu sou novo demais para aprender a programar?". Eu vou te dizer o seguinte:
15:14
não existe idade mínima e nem máxima para você aprender a programar, aprender a programar faz bem
15:21
para o cérebro, raciocínio. Se você tem menos experiência, você tem um cérebro mais ativo, mais fácil de aprender. Se você é como eu, uma pessoa mais experiente
15:30
você começa a trabalhar o seu cérebro e aplicar sua experiência. Cada um tem seu ritmo
15:35
mas não existe idade mínima e máxima para aprender. Pare de ouvir as pessoas que dizem que
15:40
você está velho demais ou que você está novo demais para aprender a programar. Uma outra dúvida, cara, essa dúvida chega a me dar agonia! Tem gente que diz o seguinte:
15:48
"pra você programar tem que ser homem, lugar de mulher não é na programação".
15:54
Senhores, eu conheço muitas, muitas mulheres que são ótimas programadoras,
16:00
na maioria das vezes, muito melhores que os homens. É que a mulher é um pouco mais concentrada. Só que, infelizmente, se você entra numa sala de aula de tecnologia, vê que existem muito mais homens
16:10
do que mulheres. Mas você, que é mulher, ou você que conhece uma mulher que quer aprender a programar, nunca deixe ela acreditar nisso. Que informática, que tecnologia, que programação
16:19
é coisa de homem. Existem muito mais homens na área de tecnologia? Sim, mas programar é coisa pra homem? Não. Mulher pode virar programadora e eu incentivo inclusive, os melhores programadores que
16:30
eu conheço da minha vida não são homens. Conheço ótimos programadores homens, mas os melhores que eu conheço são mulheres. Outra crença limitante muito grande na área de
16:39
programação é: "mas eu não moro numa grande cidade, eu moro numa cidade do interior" ou "eu não moro num pólo tecnológico, eu não vou aprender a programar porque não é pra mim".
16:49
Cara, se você quer aprender a programar, mete as caras, aprende a programar,
16:54
não é sua localização que vai interferir. Hoje nós temos a Internet, a Internet rompe barreiras! Se você mora numa cidadezinha pequenininha do interior de Minas Gerais,
17:02
você pode virar um grande programador e trabalhar no Google. Eu conheço uma galera que é assim tem um cara, o Ale Borba (um grande abraço para você!) Ele vem do interior de Minas Gerais, uma cidadezinha
17:11
pequenininha que ninguém acreditaria que se tornasse um grande programador e ele está lá, dentro do Google.
17:17
Então pare com isso, pare de pensar que você é menor por conta do lugar que você mora.
17:22
Outra dúvida, outra crença limitante é: "ah, eu preciso ser muito nerd eu tenho que gostar muito de coisas nerd
17:28
para gostar de programar". Nãoo senhor, não senhora. Você precisa simplesmente ter vontade de programar
17:33
assim como alguém chegar em você e falar: "não aprende a tocar violão não, pois tocar violão é pra galera
17:39
que mora no bairro tal". Não, tocar violão pra todo mundo, é humanitário, é solidário. Programar também, para de se achar especial só porque você sabe programar. Muita gente no mundo sabe
17:49
programar. Para de desmerecer as pessoas que querem aprender. Outra dúvida também que sempre
17:55
acontece em sala de aula e nas rodinhas de conversa que a gente participa é: "pra você programar tem que saber muita Matemática ou é obrigatório saber Inglês, não começa a aprender a programar sem saber Inglês"
18:05
Para com isso você consegue ótimos materiais em Português, eu estou gravando um curso completamente
18:10
em Português para você. É claro que de vez em quando aparece uma frase e outra em Inglês, mas eu sempre vou traduzir pra você. Eu sempre vou te ajudar do início ao fim.
18:17
Você não precisa ser mestre em Matemática, mestre em Física e nem saber o Inglês fluente,
18:22
você não sabe nada é só querer aprender a programar. Uma outra coisa que está acontecendo constantemente,
18:28
toda a semana me mandam uma mensagem no Twitter, no Facebook, no Instagram perguntando seguinte: "ah Guanabara eu vi numa postagem de alguém, eu vi um cara que é programador
18:37
dizendo que aprender lógica de programação é perda de tempo". Eu não sei se você viu o filme do Karate Kid, qualquer uma das versões,
18:45
a primeira versão de Karate Kid ou a versão mais nova com o filho Will Smith se você não viu ainda, assista o filme Karate Kid. Eu gosto muito de mostrar ele em sala de aula,
18:54
infelizmente não posso botar aqui no curso por questões de direito autoral. O Karate Kid, no clássico, tem a coisa de "pintar cerca", que pro personagem aprender Karatê
19:06
ele tem que "pintar cerca" e "lixar o assoalho" na versão do Jaden Smith é o "tira o casaco", "bota o casaco". E ele fala assim: "caramba eu quero aprender
19:16
Karatê. Por que ele está me colocando pra pintar cerca?" e então ele começou a ficar revoltado, chegou uma hora que ele falou assim: "eu vou parar de pintar a cerca, eu não vou mais fazer isso,
19:24
eu quero aprender Karatê" e então o Sr. Miyagi fala assim: "pinta a cerca pra mim", ele faz um movimento de pintar cerca e aquele movimento é um golpe de Karatê.
19:32
A lógica de programação é exatamente isso. Você não está perdendo seu tempo, você está aprendendo
19:37
os fundamentos, para depois aplicar. Nesse curso eu não vou colocar como pré-requisito
19:43
se você não aprendeu a programar antes, você vai aprender a programar utilizando diretamente JavaScript,
19:48
eu vou te ensinar lógica de programação utilizando JavaScript. Aprender lógica de programação não é "perda de tempo", você não precisa aprender em Português
19:57
como muita gente faz utilizando o Portugol, mas você pode aprender e deve aprender lógica de programação
20:04
utilizando uma linguagem de programação ou até mesmo o Portugol mas nunca se esqueça que aprender lógica de programação é muito importante,
20:12
não deixe ninguém dizer que ela não é valiosa e toda vez que uma pessoa fala assim: "você está perdendo tempo aprendendo lógica, você pode aprender programação de outro jeito",
20:20
pergunta pra essa pessoa, olha nos olhos dela e pergunta: "e você, como é que você aprendeu a programar? Não foi aprendendo lógica de programação?".
20:27
Tem muita gente que gosta de eliminar a concorrência com essas crenças limitantes.
20:32
Não seja uma dessas pessoas que caem nesse papo. E por falar em papo, tem uma coisa muito importante
20:37
tem muita gente diz assim: "só aprende a programar porque você vai ficar rico, todo programador
20:43
ganha muito dinheiro". E eu vou ser bem sincero com você, os programadores iniciantes não vão ganhar muito dinheiro, os programadores iniciantes não vão ganhar
20:51
o melhor emprego, os programadores iniciantes vão sim, ser explorados por um monte de empresas,
20:56
mas isso não é uma exclusividade do programa do iniciante, isso é um grande problema, isso é uma grande limitação de todos os iniciantes. Mas pode acreditar em mim, quando você ganhar
21:05
experiência, o seu salário não vai ser o seu objetivo. Seu salário vai ser só consequência. Outro assunto que eu quero tratar muito importante, a gente já está indo para os finalmente, para instalação,
21:14
mas acredita em mim, isso é importante. Tem uma galera que faz "briga de linguagem", igual time de futebol,
21:20
política e religião, que "o meu time de futebol o melhor de todos e todos os outros são uma porcaria",
21:26
"o meu videogame, que eu comprei, é o melhor de todos e todos os outros são uma porcaria", "a religião que eu escolhi é a única correta, todas as outras estão erradas".
21:34
Volto a dizer, não seja esse tipo de pessoa. Não existe "a melhor linguagem do mundo", não existe "a linguagem que vai substituir todas as outras". Cada linguagem tem suas especialidades,
21:44
suas especificidades. Podem ser aplicadas para múltiplas possibilidades.
21:50
JavaScript é uma dessas linguagens, linguagem Python (que a gente tem o curso aqui no canal), também é uma dessas linguagens de múltiplos propósitos. Não estou dizendo que eles são melhores
21:59
do que as outras, nem piores. Para eu gostar de PHP, eu não preciso falar mal de Java,
22:04
para eu gostar de JavaScript e não preciso falar mal de Python por exemplo. Não existe a "linguagem número 1", existe sim a linguagem que se aplica às suas necessidades,
22:13
então por favor, pare com a briga besta. E se você nem sabia que essas brigas bestas existem, na hora que elas aparecerem para você, sai de fininho, não entra nelas não.
22:22
Você ganha muito mais aprendendo um monte de linguagens, eu conheço um monte de gente que defende a linguagem A ou linguagem e B, diz que ela é a melhor
22:28
coisa do mundo e quando aparece outras linguagens, novidades para aprender vai falar: "eu não preciso aprender isso eu já sei a minha linguagem A, e ela é a melhor do mundo"
22:36
você acabou se limitando de aprender uma ótima linguagem, porque você ficou com essa visão meio burra
22:43
de que só existe uma linguagem no mundo, para com isso. Outra grande dúvida para quem vai aprender JavaScript, essa é especificamente sobre JavaScript:
22:50
"ah, aprende utilizando framework, aprende usando o pacote, bibliotecas que é muito mais fácil".
22:57
O EMAScript, o JavaScript puro, é o ponto de partida para todo mundo que está querendo aprender
23:02
a programar, volta aquele papo do Karate Kid que eu falei, não tenta sair correndo, não tenta ficar
23:08
ganhando uma luta na primeira semana, não tenta fazer manobra de bicicleta no primeiro dia, não tenta fazer programas grandes da primeira vez. Todo bom programador começou programando
23:17
bem simples, começou programando um jogo da velha, uma calculadora, um "Olá, Mundo!" Com certeza aquele programador que você respeita não criou aquele software como o primeiro software dele,
23:27
pergunta para ele, se você tiver oportunidade, quais foram os primeiros programas que ele fez. Todo mundo começa do básico, quando você vai aprender a andar de bicicleta, você tem rodinhas.
23:35
Quando você começa a andar de skate, você usa cotoveleiras, joelheiras e equipamentos de proteção depois você fica mais experiente, isso é natural e pode soar bobo, pode soar básico, mas na programação
23:47
as pessoas cismam em esquecer isso e cismam em esquecer que o aprendizado é um caminho longo
23:52
a ser trilhado, e o cara que aprender da noite pro dia. E por falar em noite pro dia o erro mais comum, a dúvida mas com muitas pessoas e um erro que muita gente
24:01
tem aqui no YouTube principalmente no Curso em Vídeo é: vou estudar somente uma semana ou um dia antes da prova. Se você está assistindo esse vídeo porque na semana que vem
24:09
ou amanhã você tem uma prova de JavaScript, eu tem uma péssima notícia para te dar. Provavelmente você vai se dar mal. Isso porque deixar tudo pra cima da hora, basicamente
24:17
vai fazer você assistir esse curso inteiro assim, com a mão no queixo e tentando entender um monte de coisa e pedindo pelo amor de Deus pra isso cair na sua prova.
24:25
Aprender a programar é uma prática diária, ninguém se tornou um grande programador assistindo um milhão de vídeos ou lendo um milhão de livros. Todo mundo se torna um bom programador
24:33
criando bons programas. Mas vamos parar de conversa, vamos parar de papo que tem gente que acha que isso é enrolação, mas não é!
24:40
E vamos para os requisitos, vamos colocar no nosso computador os softwares que a gente precisa, o nosso computador não precisa de software quase nenhum, basicamente o que a gente tem que instalar
24:49
é um navegador - a gente vai recomendar que o Google Chrome. Instale o Google Chrome no seu computador,
24:54
porque ele tem umas ferramentas bem legais que vão auxiliar no seu aprendizado. O editor de código, a gente aqui vai utilizar o Visual Studio Code da Microsoft.
25:04
E nesse momento, tem um monte de gente falando: "ah mas por que você não botou o Sublime?" "porque você não botou o Atom?", "porque você não botou [um programa qualquer]?"
25:13
Eu não botei o Atom, eu não botei o Sublime, eu não botei qualquer outro programa
25:18
simplesmente porque tinha que escolher um e o que eu escolhi foi o Visual Studio Code por uma série de motivos, inclusive a integração que ele tem com o Node.js
25:28
e a facilidade que ele tem de criar ambientes internos, e em momento nenhum eu estou falando que o Sublime é ruim, que o Atom é ruim. São ótimos editores de código, mas eu resolvi utilizar esse,
25:40
esse daqui que está parecendo, nós vamos instalar também o Visual Studio Code. E por fim nós vamos instalar o Node.js, não porque esse curso vai tratar de JavaScript no servidor
25:49
e nem nada mais, Node.js (como a gente disse anteriormente) vai facilitar de rodar JavaScript
25:55
fora do navegador e o nosso Visual Studio Code não é um navegador, nós vamos rodar JavaScript
26:00
dentro do Visual Studio Code. Existe essa integração - e não é só com o Visual Studio Code existe integração com várias coisas.
26:06
Então esse é o trio que a gente tem que instalar. Ligue o seu computador e vamos fazer a instalação desses três softwares.
26:13
Então vamos lá, estou no meu computador recém formatado, uma máquina virtual zerada e vou abrir o navegador, no caso do Windows 10 ele só vem com o Edge
26:21
e eu vou procurar, em primeiro lugar, o Google Chrome. Vou baixar o Google Chrome.
26:28
Instalação do Google Chrome bem tranquila, "google.com/chrome" e você vem o "Download Chrome", você aceita e instala, vou até executar direto, alguns segundos,
26:41
agradeceu pelo download, já tocou aqui "aceita instalar?" aceito, vou minimizar o navegador
26:48
"On your marks" e ele vai efetuar o download e fazer a instalação do Google Chrome no meu computador.
26:54
É só você aguardar. Se por acaso ele perguntar alguma coisa é só avançar, aceita e é nós ;)
27:02
Ele acabou o download e agora está fazendo a instalação.
27:08
Já instalou, acabou de abrir aqui, já colocou aqui do lado, eu vou pegar aqui embaixo e vou puxar pra lateral pra ele ficar fixo diretamente na minha barra,
27:18
então agora eu tenho dois navegadores, o Edge (inclusive) da Microsoft vem com uma ferramenta desenvolvida também, mas a gente vai usar o Google Chrome
27:26
que eu julgo uma melhor opção pra gente, mas você pode usar um navegador que você preferir.
27:31
Outra coisa que a gente vai pegar é o Visual Studio Code. Visual Studio Code é gratuito e funciona em múltiplas plataformas,
27:39
tem para Mac, tem para Windows, tem até para Linux - e funciona muito bem no Linux, inclusive.
27:45
Aqui você tem o download para Windows, ele bota o "State Build". Se você clicar nessa setinha pode baixar a versão Insiders que é mais atualizada, mas acaba tendo um pouco mais de bugs.
27:55
Eu vou baixar a versão para Windows, então clique na setinha verde, vai aguardar alguns segundos
28:01
e o download vai começar. O download está acontecendo aqui em baixo. Já aconteceu, eu só vou clicar aqui e executar, terminou o download.
28:10
Deixa eu minimizar aqui, não existe a versão em Português.
28:15
Se por um acaso você não estiver enxergando direito na sua tela, coloca em tela cheia esse vídeo pra você enxergar, vou deixar aqui em Inglês, ele vai começar a instalação. Mais uma vez "next"
28:26
aceita, se você quiser ler a licença, é importante isso tudo. Mas ele está livre para você usar,
28:32
ele é grátis na verdade, "next", "next". Aqui você pode criar um ícone no desktop.
28:39
Enfim, aqui é importante que você deixe essa última opção é ligada: "Add to PATH", "Next", "Install". Ele vai efetuar a instalação do VS Code, alguns segundos aqui, terminando.
28:53
Se você quiser, pode marcar aqui para ele executar, eu vou executar só pra ver se está funcionando mas basicamente a gente não vai fazer código ainda nesse vídeo, só no próximo
29:01
ele está abrindo o Visual Studio Code. Como eu disse, ele é feito baseado num framework em JavaScript,
29:07
então isso é bem legal, eu quero abrir com o Google Chrome, já vê aqui todo o site
29:15
e toda as informações. Beleza, está funcionando, mantenha ele sempre atualizado mas já vou fechar, vou abrir o Node.js. Então vou vir aqui e colocar "nodejs.org",
29:29
que é o site do Node.js, aqui você pode baixar a versão LTS, que é mais recomendável
29:34
ou a última versão com os recursos mais atualizados. Vou abrir a LTS, mais uma vez naquela idéia
29:40
de manter sempre estável e atualizado seu ambiente para não ter crash, não ter probabilidade de dar
29:45
algum problema. Ele já está terminando aqui o download, assim que ele terminar o download ele vai instalar e vai iniciar a instalação do Node.js e aí como sempre dou a dica: sempre baixe
29:57
essas ferramentas do site oficial. Não busca e baixa em outros sites de download,
30:03
essas coisas aí não, vai direto no site oficial. Então esse é o setup do Nome.js, "next",
30:09
aceita os termos, pode ler os temos aqui mais uma vez. Mais uma vez o Node.js é um software livre,
30:15
deixa na pasta Node.js mesmo. Então, adicionar o path, isso aqui é muito importante, mantém ligada que a instalação do npm que o gerenciador de pacotes do Node
30:23
(Node Package Manager) coloca isso, porque mais pra frente você vai precisar
30:28
aqui no curso acredito que a gente não precise, clique em "next" e "Install", outra coisa que é muito importante: você precisa ter para instalação de todas essas ferramentas
30:39
privilégios de administrador, seja o usuário administrador da sua máquina se por acaso você tiver usuários de convidado ou outros usuários loga como administrador,
30:48
instala essas ferramentas para todos os usuários e então você pode usar mais tarde, ferramentas de desenvolvimento sempre instale como desenvolvedor.
31:00
Clicando em "finish" vamos verificar se o Node está funcionando, aqui eu tenho o Node.js
31:06
ele vai abrir um terminal com o Node.js eu posso testar, vou colocar "2+2"
31:13
e ele já me deu 4. Beleza, está funcionando. Para sair só você colocar ".exit" e aí ele sai, tranquilidade? Então é isso, fizemos as instalações de todos os softwares necessários.
31:25
♫ Agora é só correr pro abraço! No próximo vídeo, você vai fazer o seu primeiro script em JavaScript
31:34
utilizando o Visual Studio Code para escrever o código, vai utilizar o Google Chrome para rodar os seus códigos
31:42
e também vamos utilizar o Node.js para facilitar o nosso aprendizado integrando ele com o VS Code.
31:49
Mas tudo isso você só vai aprender no próximo vídeo porque esse aqui chegou ao fim, infelizmente
31:54
ou até felizmente, porque você já está louco para chegar isso e nunca se esqueça: esse vídeo, além de uma instalação completa veio com o bate papo muito interessante e muito valioso (na minha opinião)
32:06
Não seja o tipo de pessoa que desmerece os outros e nem o tipo de pessoa que acaba
32:11
desistindo de programar porque acabou batendo numa dessas crenças limitantes que a gente viu durante o vídeo.
32:17
Um grande abraço, boas práticas, instale todas as ferramentas aí no seu dispositivo e a gente se vê no próximo vídeo, para efetivamente botar a mão na massa
32:26
e escrever nossos primeiros programas em JavaScript. Um grande abraço e até a próxima!
32:34
Legenda: Tainá Bandeira

/* 