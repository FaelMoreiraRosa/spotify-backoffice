'use client'

import { useState } from 'react'
import {
  trendingSongs,
  popularArtists,
  popularAlbums,
  popularPlaylists,
  popularRadio,
} from '../../lib/spotify-data'
import { SectionRow } from './section-row'

const filters = ['Tudo', 'Música', 'Podcasts']

export function MainContent() {
  const [active, setActive] = useState('Tudo')

  return (
    <main className="spotify-scroll flex-1 overflow-y-auto rounded-lg bg-linear-to-b from-[#1f1f1f] to-base">
      <div className="flex flex-col gap-6 px-4 pb-40 pt-4 md:px-6">
        {/* Filtros */}
        <div className="flex gap-2">
          {filters.map((filter) => (
            <button
              key={filter}
              type="button"
              onClick={() => setActive(filter)}
              className={`rounded-full px-4 py-1.5 text-sm font-semibold transition-colors ${
                active === filter
                  ? 'bg-foreground text-background'
                  : 'bg-elevated text-foreground hover:bg-elevated-hover'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        <SectionRow title="Músicas em alta" items={trendingSongs} />
        <SectionRow title="Artistas populares" items={popularArtists} />
        <SectionRow title="Álbuns e singles populares" items={popularAlbums} />
        <SectionRow title="Playlists populares" items={popularPlaylists} />
        <SectionRow title="Rádios populares" items={popularRadio} />

        <Footer />
      </div>
    </main>
  )
}

function Footer() {
  const columns = [
    { title: 'Empresa', links: ['Sobre', 'Vagas', 'For the Record'] },
    { title: 'Comunidades', links: ['Para Artistas', 'Desenvolvedores', 'Publicidade', 'Investidores', 'Fornecedores'] },
    { title: 'Links úteis', links: ['Suporte', 'App gratuito para dispositivos móveis', 'Popular por país'] },
    { title: 'Planos do Spotify', links: ['Premium Individual', 'Premium Duo', 'Premium Família', 'Spotify Free'] },
  ]

  return (
    <footer className="mt-8 border-t border-border pt-10">
      <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
        {columns.map((col) => (
          <div key={col.title} className="flex flex-col gap-3">
            <p className="font-bold text-foreground">{col.title}</p>
            {col.links.map((link) => (
              <a key={link} href="#" className="text-sm text-muted-foreground hover:text-foreground hover:underline">
                {link}
              </a>
            ))}
          </div>
        ))}
      </div>
      <p className="mt-10 text-sm text-muted-foreground">© 2026 Spotify AB</p>
    </footer>
  )
}
