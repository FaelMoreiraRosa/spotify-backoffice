import { PrismaClient } from "../generated/prisma";
const prisma = new PrismaClient();

async function main() {
// 1
  await prisma.band.create({
    data: {
      name: "Legião Urbana",
      slug: "legiao-urbana",
      description: "Uma das bandas de rock mais influentes do Brasil, formada em Brasília nos anos 1980.",
      status: "inactive",
      tracks: {
        create: [
          { title: "Tempo Perdido", slug: "tempo-perdido", durationInSeconds: 302 },
          { title: "Faroeste Caboclo", slug: "faroeste-caboclo", durationInSeconds: 544 },
        ],
      },
    },
  });

  // 2
  await prisma.band.create({
    data: {
      name: "The Beatles",
      slug: "the-beatles",
      description: "Banda britânica de rock formada em Liverpool em 1960. O grupo musical mais bem-sucedido da história.",
      status: "inactive",
      tracks: {
        create: [
          { title: "Hey Jude", slug: "hey-jude", durationInSeconds: 431 },
          { title: "Let It Be", slug: "let-it-be", durationInSeconds: 243 },
        ],
      },
    },
  });

  // 3
  await prisma.band.create({
    data: {
      name: "Queen",
      slug: "queen",
      description: "Banda britânica de rock formada em Londres em 1970, liderada pelo icônico Freddie Mercury.",
      status: "active",
      tracks: {
        create: [
          { title: "Bohemian Rhapsody", slug: "bohemian-rhapsody", durationInSeconds: 354 },
          { title: "Don't Stop Me Now", slug: "dont-stop-me-now", durationInSeconds: 209 },
        ],
      },
    },
  });

  // 4
  await prisma.band.create({
    data: {
      name: "Os Paralamas do Sucesso",
      slug: "os-paralamas-do-sucesso",
      description: "Banda brasileira de rock e ska formada em 1982, no Rio de Janeiro.",
      status: "active",
      tracks: {
        create: [
          { title: "Lanterna dos Afogados", slug: "lanterna-dos-afogados", durationInSeconds: 188 },
          { title: "Meu Erro", slug: "meu-erro", durationInSeconds: 208 },
        ],
      },
    },
  });

  // 5
  await prisma.band.create({
    data: {
      name: "Pink Floyd",
      slug: "pink-floyd",
      description: "Banda britânica de rock progressivo famosa por suas composições complexas e shows grandiosos.",
      status: "inactive",
      tracks: {
        create: [
          { title: "Comfortably Numb", slug: "comfortably-numb", durationInSeconds: 382 },
          { title: "Wish You Were Here", slug: "wish-you-were-here", durationInSeconds: 334 },
        ],
      },
    },
  });

  // 6
  await prisma.band.create({
    data: {
      name: "Titãs",
      slug: "titas",
      description: "Banda de rock paulistana que surgiu nos anos 1980 e se consolidou como uma das maiores do país.",
      status: "active",
      tracks: {
        create: [
          { title: "Epitáfio", slug: "epitafio", durationInSeconds: 176 },
          { title: "Polícia", slug: "policia", durationInSeconds: 127 },
        ],
      },
    },
  });

  // 7
  await prisma.band.create({
    data: {
      name: "Nirvana",
      slug: "nirvana",
      description: "Banda estadunidense de rock formada no final dos anos 1980 que popularizou o movimento grunge.",
      status: "inactive",
      tracks: {
        create: [
          { title: "Smells Like Teen Spirit", slug: "smells-like-teen-spirit", durationInSeconds: 301 },
          { title: "Come As You Are", slug: "come-as-you-are", durationInSeconds: 219 },
        ],
      },
    },
  });

  // 8
  await prisma.band.create({
    data: {
      name: "Skank",
      slug: "skank",
      description: "Banda brasileira que mistura pop, rock, reggae e ska, originária de Belo Horizonte.",
      status: "inactive",
      tracks: {
        create: [
          { title: "Vou Deixar", slug: "vou-deixar", durationInSeconds: 275 },
          { title: "Garota Nacional", slug: "garota-nacional", durationInSeconds: 317 },
        ],
      },
    },
  });

  // 9
  await prisma.band.create({
    data: {
      name: "Led Zeppelin",
      slug: "led-zeppelin",
      description: "Banda britânica de rock, amplamente reconhecida como uma das criadoras do heavy metal e hard rock.",
      status: "inactive",
      tracks: {
        create: [
          { title: "Stairway to Heaven", slug: "stairway-to-heaven", durationInSeconds: 482 },
          { title: "Immigrant Song", slug: "immigrant-song", durationInSeconds: 146 },
        ],
      },
    },
  });

  // 10
  await prisma.band.create({
    data: {
      name: "Capital Inicial",
      slug: "capital-inicial",
      description: "Banda de rock brasileira formada em Brasília, famosa no ressurgimento acústico nos anos 2000.",
      status: "active",
      tracks: {
        create: [
          { title: "Primeiros Erros", slug: "primeiros-erros", durationInSeconds: 304 },
          { title: "Natasha", slug: "natasha", durationInSeconds: 195 },
        ],
      },
    },
  });

  // 11
  await prisma.band.create({
    data: {
      name: "AC/DC",
      slug: "ac-dc",
      description: "Banda de hard rock australiana formada em 1973 por Angus e Malcolm Young.",
      status: "active",
      tracks: {
        create: [
          { title: "Back In Black", slug: "back-in-black", durationInSeconds: 255 },
          { title: "Highway to Hell", slug: "highway-to-hell", durationInSeconds: 208 },
        ],
      },
    },
  });

  // 12
  await prisma.band.create({
    data: {
      name: "Sepultura",
      slug: "sepultura",
      description: "A maior banda de heavy metal do Brasil, reconhecida mundialmente pela mistura com ritmos tribais.",
      status: "active",
      tracks: {
        create: [
          { title: "Roots Bloody Roots", slug: "roots-bloody-roots", durationInSeconds: 212 },
          { title: "Ratamahatta", slug: "ratamahatta", durationInSeconds: 270 },
        ],
      },
    },
  });

  // 13
  await prisma.band.create({
    data: {
      name: "Red Hot Chili Peppers",
      slug: "red-hot-chili-peppers",
      description: "Banda americana que mescla rock com funk e elementos do punk.",
      status: "active",
      tracks: {
        create: [
          { title: "Californication", slug: "californication", durationInSeconds: 329 },
          { title: "Under the Bridge", slug: "under-the-bridge", durationInSeconds: 264 },
        ],
      },
    },
  });

  // 14
  await prisma.band.create({
    data: {
      name: "Jota Quest",
      slug: "jota-quest",
      description: "Banda de pop rock brasileira com fortes influências da black music.",
      status: "active",
      tracks: {
        create: [
          { title: "Dias Melhores", slug: "dias-melhores", durationInSeconds: 219 },
          { title: "Amor Maior", slug: "amor-maior", durationInSeconds: 205 },
        ],
      },
    },
  });

  // 15
  await prisma.band.create({
    data: {
      name: "Metallica",
      slug: "metallica",
      description: "Banda de heavy metal norte-americana e uma das maiores pioneiras do thrash metal.",
      status: "active",
      tracks: {
        create: [
          { title: "Enter Sandman", slug: "enter-sandman", durationInSeconds: 331 },
          { title: "Nothing Else Matters", slug: "nothing-else-matters", durationInSeconds: 388 },
        ],
      },
    },
  });

  // 16
  await prisma.band.create({
    data: {
      name: "O Rappa",
      slug: "o-rappa",
      description: "Banda brasileira que mistura rock, reggae, rap e MPB, conhecida por suas letras de cunho social.",
      status: "inactive",
      tracks: {
        create: [
          { title: "Pescador de Ilusões", slug: "pescador-de-ilusoes", durationInSeconds: 240 },
          { title: "Minha Alma", slug: "minha-alma", durationInSeconds: 304 },
        ],
      },
    },
  });

  // 17
  await prisma.band.create({
    data: {
      name: "Iron Maiden",
      slug: "iron-maiden",
      description: "Lendária banda britânica de heavy metal formada em 1975.",
      status: "active",
      tracks: {
        create: [
          { title: "The Trooper", slug: "the-trooper", durationInSeconds: 252 },
          { title: "Fear of the Dark", slug: "fear-of-the-dark", durationInSeconds: 438 },
        ],
      },
    },
  });

  // 18
  await prisma.band.create({
    data: {
      name: "Engenheiros do Hawaii",
      slug: "engenheiros-do-hawaii",
      description: "Banda gaúcha de rock, conhecida por suas letras poéticas e reflexivas.",
      status: "inactive",
      tracks: {
        create: [
          { title: "Infinita Highway", slug: "infinita-highway", durationInSeconds: 371 },
          { title: "Era Um Garoto", slug: "era-um-garoto", durationInSeconds: 268 },
        ],
      },
    },
  });

  // 19
  await prisma.band.create({
    data: {
      name: "Coldplay",
      slug: "coldplay",
      description: "Banda britânica de rock alternativo famosa mundialmente por seus mega-shows e sucessos pop.",
      status: "active",
      tracks: {
        create: [
          { title: "Yellow", slug: "yellow", durationInSeconds: 269 },
          { title: "Viva La Vida", slug: "viva-la-vida", durationInSeconds: 242 },
        ],
      },
    },
  });

  // 20
  await prisma.band.create({
    data: {
      name: "Mamonas Assassinas",
      slug: "mamonas-assassinas",
      description: "Banda brasileira de rock cômico que teve um sucesso estrondoso e relâmpago nos anos 90.",
      status: "inactive",
      tracks: {
        create: [
          { title: "Pelados em Santos", slug: "pelados-em-santos", durationInSeconds: 204 },
          { title: "Vira-Vira", slug: "vira-vira", durationInSeconds: 143 },
        ],
      },
    },
  });

  // 21
  await prisma.band.create({
    data: {
      name: "Pearl Jam",
      slug: "pearl-jam",
      description: "Banda estadunidense de rock alternativo, pilar fundamental do movimento grunge em Seattle.",
      status: "active",
      tracks: {
        create: [
          { title: "Alive", slug: "alive", durationInSeconds: 340 },
          { title: "Even Flow", slug: "even-flow", durationInSeconds: 293 },
        ],
      },
    },
  });

  // 22
  await prisma.band.create({
    data: {
      name: "Charlie Brown Jr.",
      slug: "charlie-brown-jr",
      description: "Banda de rock brasileira que combinou punk, reggae e hip hop, liderada pelo carismático Chorão.",
      status: "inactive",
      tracks: {
        create: [
          { title: "Zóio de Lula", slug: "zoio-de-lula", durationInSeconds: 252 },
          { title: "Proibida pra Mim", slug: "proibida-pra-mim", durationInSeconds: 168 },
        ],
      },
    },
  });

  // 23
  await prisma.band.create({
    data: {
      name: "Foo Fighters",
      slug: "foo-fighters",
      description: "Banda de rock formada por Dave Grohl logo após o fim do Nirvana.",
      status: "active",
      tracks: {
        create: [
          { title: "Everlong", slug: "everlong", durationInSeconds: 250 },
          { title: "The Pretender", slug: "the-pretender", durationInSeconds: 269 },
        ],
      },
    },
  });

  // 24
  await prisma.band.create({
    data: {
      name: "Los Hermanos",
      slug: "los-hermanos",
      description: "Banda brasileira que mistura rock alternativo, ska e MPB, originada no Rio de Janeiro.",
      status: "inactive",
      tracks: {
        create: [
          { title: "Anna Júlia", slug: "anna-julia", durationInSeconds: 212 },
          { title: "O Vento", slug: "o-vento", durationInSeconds: 201 },
        ],
      },
    },
  });

  // 25
  await prisma.band.create({
    data: {
      name: "The Rolling Stones",
      slug: "the-rolling-stones",
      description: "Uma das bandas mais antigas e bem-sucedidas do rock mundial, ativa desde os anos 60.",
      status: "active",
      tracks: {
        create: [
          { title: "Paint It, Black", slug: "paint-it-black", durationInSeconds: 225 },
          { title: "Satisfaction", slug: "satisfaction", durationInSeconds: 223 },
        ],
      },
    },
  });

  // 26
  await prisma.band.create({
    data: {
      name: "Os Mutantes",
      slug: "os-mutantes",
      description: "Banda lendária do rock psicodélico brasileiro e parte fundamental do movimento Tropicália.",
      status: "active",
      tracks: {
        create: [
          { title: "A Minha Menina", slug: "a-minha-menina", durationInSeconds: 282 },
          { title: "Balada do Louco", slug: "balada-do-louco", durationInSeconds: 181 },
        ],
      },
    },
  });

  // 27
  await prisma.band.create({
    data: {
      name: "U2",
      slug: "u2",
      description: "Banda irlandesa liderada por Bono, famosa pelas guitarras de the Edge e o forte engajamento social.",
      status: "active",
      tracks: {
        create: [
          { title: "With or Without You", slug: "with-or-without-you", durationInSeconds: 296 },
          { title: "Beautiful Day", slug: "beautiful-day", durationInSeconds: 246 },
        ],
      },
    },
  });

  // 28
  await prisma.band.create({
    data: {
      name: "Raimundos",
      slug: "raimundos",
      description: "Banda brasileira que revolucionou ao mesclar hardcore punk com ritmos nordestinos como o forró.",
      status: "active",
      tracks: {
        create: [
          { title: "Mulher de Fases", slug: "mulher-de-fases", durationInSeconds: 212 },
          { title: "A Mais Pedida", slug: "a-mais-pedida", durationInSeconds: 172 },
        ],
      },
    },
  });

  // 29
  await prisma.band.create({
    data: {
      name: "Radiohead",
      slug: "radiohead",
      description: "Banda de rock alternativo inglesa altamente elogiada por sua experimentação sonora.",
      status: "active",
      tracks: {
        create: [
          { title: "Creep", slug: "creep", durationInSeconds: 238 },
          { title: "Karma Police", slug: "karma-police", durationInSeconds: 264 },
        ],
      },
    },
  });

  // 30
  await prisma.band.create({
    data: {
      name: "Barão Vermelho",
      slug: "barao-vermelho",
      description: "Clássica banda de rock brasileiro, projetou grandes nomes como Cazuza e Frejat.",
      status: "active",
      tracks: {
        create: [
          { title: "Pro Dia Nascer Feliz", slug: "pro-dia-nascer-feliz", durationInSeconds: 267 },
          { title: "Bete Balanço", slug: "bete-balanco", durationInSeconds: 211 },
        ],
      },
    },
  });

  // 31
  await prisma.band.create({
    data: {
      name: "Arctic Monkeys",
      slug: "arctic-monkeys",
      description: "Banda britânica de indie rock que despontou na era da internet nos anos 2000.",
      status: "active",
      tracks: {
        create: [
          { title: "Do I Wanna Know?", slug: "do-i-wanna-know", durationInSeconds: 272 },
          { title: "505", slug: "track-505", durationInSeconds: 253 },
        ],
      },
    },
  });

  // 32
  await prisma.band.create({
    data: {
      name: "Natiruts",
      slug: "natiruts",
      description: "Uma das maiores e mais icônicas bandas de reggae do Brasil, nascida em Brasília.",
      status: "inactive",
      tracks: {
        create: [
          { title: "Sorri, Sou Rei", slug: "sorri-sou-rei", durationInSeconds: 304 },
          { title: "Quero Ser Feliz Também", slug: "quero-ser-feliz-tambem", durationInSeconds: 198 },
        ],
      },
    },
  });

  // 33
  await prisma.band.create({
    data: {
      name: "The Strokes",
      slug: "the-strokes",
      description: "Banda americana que foi figura central na revitalização do garage rock nos anos 2000.",
      status: "active",
      tracks: {
        create: [
          { title: "Reptilia", slug: "reptilia", durationInSeconds: 221 },
          { title: "Someday", slug: "someday", durationInSeconds: 187 },
        ],
      },
    },
  });

  // 34
  await prisma.band.create({
    data: {
      name: "Ira!",
      slug: "ira",
      description: "Importante banda paulistana de rock com fortes referências da cultura mod.",
      status: "active",
      tracks: {
        create: [
          { title: "Envelheço na Cidade", slug: "envelheco-na-cidade", durationInSeconds: 196 },
          { title: "Dias de Luta", slug: "dias-de-luta", durationInSeconds: 270 },
        ],
      },
    },
  });

  // 35
  await prisma.band.create({
    data: {
      name: "Muse",
      slug: "muse",
      description: "Banda inglesa reconhecida por mesclar rock alternativo, sinfônico e eletrônico em shows teatrais.",
      status: "active",
      tracks: {
        create: [
          { title: "Supermassive Black Hole", slug: "supermassive-black-hole", durationInSeconds: 209 },
          { title: "Starlight", slug: "starlight", durationInSeconds: 240 },
        ],
      },
    },
  });

  // 36
  await prisma.band.create({
    data: {
      name: "Angra",
      slug: "angra",
      description: "Banda brasileira de power metal com arranjos complexos e elementos de ritmos regionais.",
      status: "active",
      tracks: {
        create: [
          { title: "Carry On", slug: "carry-on", durationInSeconds: 304 },
          { title: "Nova Era", slug: "nova-era", durationInSeconds: 293 },
        ],
      },
    },
  });

  // 37
  await prisma.band.create({
    data: {
      name: "The Killers",
      slug: "the-killers",
      description: "Banda de rock americana de Las Vegas, famosa pelo sucesso gigantesco do seu álbum de estreia.",
      status: "active",
      tracks: {
        create: [
          { title: "Mr. Brightside", slug: "mr-brightside", durationInSeconds: 222 },
          { title: "Somebody Told Me", slug: "somebody-told-me", durationInSeconds: 197 },
        ],
      },
    },
  });

  // 38
  await prisma.band.create({
    data: {
      name: "Cidade Negra",
      slug: "cidade-negra",
      description: "Banda fluminense que popularizou o reggae de raiz com influências pop no Brasil.",
      status: "active",
      tracks: {
        create: [
          { title: "Aonde Você Mora?", slug: "aonde-voce-mora", durationInSeconds: 308 },
          { title: "Girassol", slug: "girassol", durationInSeconds: 260 },
        ],
      },
    },
  });

  // 39
  await prisma.band.create({
    data: {
      name: "Green Day",
      slug: "green-day",
      description: "Trio californiano responsável por revitalizar a popularidade global do punk rock.",
      status: "active",
      tracks: {
        create: [
          { title: "Basket Case", slug: "basket-case", durationInSeconds: 181 },
          { title: "American Idiot", slug: "american-idiot", durationInSeconds: 174 },
        ],
      },
    },
  });

  // 40
  await prisma.band.create({
    data: {
      name: "Biquini Cavadão",
      slug: "biquini-cavadao",
      description: "Banda de rock brasileira duradoura, formada no Rio de Janeiro na prolífica década de 80.",
      status: "active",
      tracks: {
        create: [
          { title: "Tédio", slug: "tedio", durationInSeconds: 147 },
          { title: "Vento Ventania", slug: "vento-ventania", durationInSeconds: 279 },
        ],
      },
    },
  });

  // 41
  await prisma.band.create({
    data: {
      name: "Blink-182",
      slug: "blink-182",
      description: "Banda pop punk americana, ícone da estética e sonoridade adolescente do final dos anos 90.",
      status: "active",
      tracks: {
        create: [
          { title: "All The Small Things", slug: "all-the-small-things", durationInSeconds: 168 },
          { title: "I Miss You", slug: "i-miss-you", durationInSeconds: 227 },
        ],
      },
    },
  });

  // 42
  await prisma.band.create({
    data: {
      name: "Nenhum de Nós",
      slug: "nenhum-de-nos",
      description: "Veterana banda de rock do Rio Grande do Sul, marcante pelas melodias poéticas.",
      status: "active",
      tracks: {
        create: [
          { title: "Camila, Camila", slug: "camila-camila", durationInSeconds: 308 },
          { title: "O Astronauta de Mármore", slug: "o-astronauta-de-marmore", durationInSeconds: 198 },
        ],
      },
    },
  });

  // 43
  await prisma.band.create({
    data: {
      name: "Oasis",
      slug: "oasis",
      description: "Os irmãos Gallagher lideraram esta banda que definiu o Britpop nos anos 1990.",
      status: "inactive",
      tracks: {
        create: [
          { title: "Wonderwall", slug: "wonderwall", durationInSeconds: 258 },
          { title: "Don't Look Back in Anger", slug: "dont-look-back-in-anger", durationInSeconds: 288 },
        ],
      },
    },
  });

  // 44
  await prisma.band.create({
    data: {
      name: "RPM",
      slug: "rpm",
      description: "A banda brasileira de maior sucesso comercial da década de 80, combinando rock e sintetizadores.",
      status: "inactive",
      tracks: {
        create: [
          { title: "Olhar 43", slug: "olhar-43", durationInSeconds: 181 },
          { title: "Rádio Pirata", slug: "radio-pirata", durationInSeconds: 211 },
        ],
      },
    },
  });

  // 45
  await prisma.band.create({
    data: {
      name: "The Police",
      slug: "the-police",
      description: "Trio britânico lendário liderado por Sting, pioneiro na incorporação do reggae ao rock.",
      status: "inactive",
      tracks: {
        create: [
          { title: "Every Breath You Take", slug: "every-breath-you-take", durationInSeconds: 254 },
          { title: "Roxanne", slug: "roxanne", durationInSeconds: 191 },
        ],
      },
    },
  });

  // 46
  await prisma.band.create({
    data: {
      name: "Pitty",
      slug: "pitty",
      description: "Uma das maiores vozes femininas do rock nacional contemporâneo, originária da Bahia.",
      status: "active",
      tracks: {
        create: [
          { title: "Me Adora", slug: "me-adora", durationInSeconds: 270 },
          { title: "Equalize", slug: "equalize", durationInSeconds: 231 },
        ],
      },
    },
  });

  // 47
  await prisma.band.create({
    data: {
      name: "Guns N' Roses",
      slug: "guns-n-roses",
      description: "Fenômeno do hard rock mundial no final da década de 80 com solos inesquecíveis e estilo excêntrico.",
      status: "active",
      tracks: {
        create: [
          { title: "Sweet Child O' Mine", slug: "sweet-child-o-mine", durationInSeconds: 356 },
          { title: "November Rain", slug: "november-rain", durationInSeconds: 537 },
        ],
      },
    },
  });

  // 48
  await prisma.band.create({
    data: {
      name: "Pato Fu",
      slug: "pato-fu",
      description: "Banda mineira criativa, conhecida por seu rock alternativo inusitado e instrumentos de brinquedo.",
      status: "active",
      tracks: {
        create: [
          { title: "Sobre o Tempo", slug: "sobre-o-tempo", durationInSeconds: 210 },
          { title: "Ando Meio Desligado", slug: "ando-meio-desligado", durationInSeconds: 195 },
        ],
      },
    },
  });

  // 49
  await prisma.band.create({
    data: {
      name: "Linkin Park",
      slug: "linkin-park",
      description: "Gigantes do Nu-Metal, unindo de forma magistral o rap, rock eletrônico e metal alternativo.",
      status: "inactive",
      tracks: {
        create: [
          { title: "In the End", slug: "in-the-end", durationInSeconds: 216 },
          { title: "Numb", slug: "numb", durationInSeconds: 187 },
        ],
      },
    },
  });

  // 50
  await prisma.band.create({
    data: {
      name: "System of a Down",
      slug: "system-of-a-down",
      description: "Banda de metal alternativo aclamada pelo ritmo frenético e letras ativistas profundas.",
      status: "active",
      tracks: {
        create: [
          { title: "Chop Suey!", slug: "chop-suey", durationInSeconds: 210 },
          { title: "Toxicity", slug: "toxicity", durationInSeconds: 218 },
        ],
      },
    },
  });
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.log(e);
    await prisma.$disconnect();
    process.exit(1);
  });
