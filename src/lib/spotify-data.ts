export type Card = {
  id: string
  title: string
  subtitle: string
  image: string
  round?: boolean
}

const covers = [
  '/covers/cover-1.png',
  '/covers/cover-2.png',
  '/covers/cover-3.png',
  '/covers/cover-4.png',
  '/covers/cover-5.png',
  '/covers/cover-6.png',
]

const artists = [
  '/artists/artist-1.png',
  '/artists/artist-2.png',
  '/artists/artist-3.png',
  '/artists/artist-4.png',
  '/artists/artist-5.png',
  '/artists/artist-6.png',
]

export const trendingSongs: Card[] = [
  { id: 't1', title: 'Luzes da Cidade', subtitle: 'Marina Costa', image: covers[0] },
  { id: 't2', title: 'Verão Infinito', subtitle: 'Retrowave', image: covers[1] },
  { id: 't3', title: 'Corrente', subtitle: 'MC Theo', image: covers[2] },
  { id: 't4', title: 'Névoa', subtitle: 'Aurora Vale', image: covers[3] },
  { id: 't5', title: 'Pulsar', subtitle: 'Neon Kids', image: covers[4] },
  { id: 't6', title: 'Flor de Fogo', subtitle: 'Lia Fernandes', image: covers[5] },
]

export const popularArtists: Card[] = [
  { id: 'a1', title: 'Marina Costa', subtitle: 'Artista', image: artists[0], round: true },
  { id: 'a2', title: 'MC Theo', subtitle: 'Artista', image: artists[1], round: true },
  { id: 'a3', title: 'Rafael Dias', subtitle: 'Artista', image: artists[2], round: true },
  { id: 'a4', title: 'Aurora Vale', subtitle: 'Artista', image: artists[3], round: true },
  { id: 'a5', title: 'Diego Luna', subtitle: 'Artista', image: artists[4], round: true },
  { id: 'a6', title: 'Lia Fernandes', subtitle: 'Artista', image: artists[5], round: true },
]

export const popularAlbums: Card[] = [
  { id: 'al1', title: 'Noites de Neon', subtitle: 'Marina Costa', image: covers[4] },
  { id: 'al2', title: 'Pôr do Sol', subtitle: 'Retrowave', image: covers[1] },
  { id: 'al3', title: 'Sombras', subtitle: 'MC Theo', image: covers[2] },
  { id: 'al4', title: 'Amanhecer', subtitle: 'Aurora Vale', image: covers[3] },
  { id: 'al5', title: 'Tropicália', subtitle: 'Diego Luna', image: covers[5] },
  { id: 'al6', title: 'Retratos', subtitle: 'Lia Fernandes', image: covers[0] },
]

export const popularPlaylists: Card[] = [
  { id: 'p1', title: 'Top Brasil', subtitle: 'As mais tocadas do país', image: covers[5] },
  { id: 'p2', title: 'Esquenta Sertanejo', subtitle: 'Os hits do sertanejo', image: covers[1] },
  { id: 'p3', title: 'Foco Total', subtitle: 'Concentre-se com faixas suaves', image: covers[3] },
  { id: 'p4', title: 'Pop Rising', subtitle: 'O melhor do pop atual', image: covers[0] },
  { id: 'p5', title: 'Batidão Eletrônico', subtitle: 'Para dançar a noite toda', image: covers[4] },
  { id: 'p6', title: 'Acústico', subtitle: 'Versões intimistas', image: covers[2] },
]

export const popularRadio: Card[] = [
  { id: 'r1', title: 'Rádio Marina Costa', subtitle: 'Com Aurora Vale, Lia Fernandes e mais', image: artists[0], round: true },
  { id: 'r2', title: 'Rádio MC Theo', subtitle: 'Com Diego Luna, Rafael Dias e mais', image: artists[1], round: true },
  { id: 'r3', title: 'Rádio Aurora Vale', subtitle: 'Com Marina Costa, Lia e mais', image: artists[3], round: true },
  { id: 'r4', title: 'Rádio Diego Luna', subtitle: 'Com MC Theo, Rafael e mais', image: artists[4], round: true },
  { id: 'r5', title: 'Rádio Rafael Dias', subtitle: 'Com Diego Luna, MC Theo e mais', image: artists[2], round: true },
  { id: 'r6', title: 'Rádio Lia Fernandes', subtitle: 'Com Aurora Vale, Marina e mais', image: artists[5], round: true },
]
