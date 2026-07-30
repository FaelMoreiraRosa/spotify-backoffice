'use client'

import { SpotifyLogo } from './spotify-logo'

function HomeIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M3 9.5L12 3l9 6.5V20a1 1 0 0 1-1 1h-5v-6H9v6H4a1 1 0 0 1-1-1V9.5z" />
    </svg>
  )
}

function SearchIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <circle cx="11" cy="11" r="8" />
      <line x1="21" y1="21" x2="16.65" y2="16.65" />
    </svg>
  )
}

function DownloadIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
      <polyline points="7 10 12 15 17 10" />
      <line x1="12" y1="15" x2="12" y2="3" />
    </svg>
  )
}

export function TopBar() {
  return (
    <header className="flex items-center justify-between gap-4 px-2 py-2 md:px-4">
      {/* Logo */}
      <div className="flex items-center">
        <a href="#" aria-label="Início do Spotify" className="text-foreground">
          <SpotifyLogo className="size-8" />
        </a>
      </div>

      {/* Home + search */}
      <div className="flex flex-1 items-center justify-center gap-2">
        <a
          href="#"
          aria-label="Início"
          className="flex size-12 items-center justify-center rounded-full bg-elevated text-foreground transition-colors hover:bg-elevated-hover"
        >
          <HomeIcon className="size-6" />
        </a>
        <div className="flex w-full max-w-118.5 items-center gap-3 rounded-full bg-elevated px-4 py-3 text-muted-foreground transition-colors focus-within:bg-elevated-hover focus-within:ring-2 focus-within:ring-foreground hover:bg-elevated-hover">
          <SearchIcon className="size-6 shrink-0" />
          <input
            type="text"
            placeholder="O que você quer ouvir?"
            aria-label="Buscar"
            className="w-full bg-transparent text-sm text-foreground placeholder:text-muted-foreground focus:outline-none"
          />
        </div>
      </div>

      {/* Auth actions */}
      <div className="flex items-center gap-2 md:gap-4">
        <a
          href="#"
          className="hidden text-sm font-bold text-muted-foreground transition-colors hover:scale-105 hover:text-foreground lg:inline"
        >
          Premium
        </a>
        <a
          href="#"
          className="hidden text-sm font-bold text-muted-foreground transition-colors hover:scale-105 hover:text-foreground lg:inline"
        >
          Suporte
        </a>
        <a
          href="#"
          className="hidden text-sm font-bold text-muted-foreground transition-colors hover:scale-105 hover:text-foreground lg:inline"
        >
          Download
        </a>
        <div className="mr-2 hidden h-6 w-px bg-border lg:block" />
        <a
          href="#"
          className="hidden items-center gap-2 text-sm font-bold text-muted-foreground transition-colors hover:scale-105 hover:text-foreground lg:flex"
        >
          <DownloadIcon className="size-4" />
          Instalar app
        </a>
        <a
          href="#"
          className="whitespace-nowrap text-sm font-bold text-muted-foreground transition-colors hover:scale-105 hover:text-foreground"
        >
          Inscrever-se
        </a>
        <a
          href="#"
          className="whitespace-nowrap rounded-full bg-foreground px-6 py-3 text-sm font-bold text-background transition-transform hover:scale-105"
        >
          Entrar
        </a>
      </div>
    </header>
  )
}
