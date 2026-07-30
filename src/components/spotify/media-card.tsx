import type { Card } from '../../lib/spotify-data'

function PlayIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="size-5 translate-x-px">
      <path d="M8 5v14l11-7z" />
    </svg>
  )
}

export function MediaCard({ item }: { item: Card }) {
  return (
    <a
      href="#"
      className="group relative flex flex-col gap-3 rounded-md bg-transparent p-3 transition-colors hover:bg-elevated-hover focus-visible:bg-elevated-hover focus-visible:outline-none"
    >
      <div className="relative">
        <img
          src={item.image || '/placeholder.svg'}
          alt={item.title}
          className={`aspect-square w-full object-cover shadow-lg ${
            item.round ? 'rounded-full' : 'rounded-md'
          }`}
        />
        <button
          type="button"
          aria-label={`Reproduzir ${item.title}`}
          className="absolute bottom-2 right-2 flex size-12 translate-y-2 items-center justify-center rounded-full bg-primary text-primary-foreground opacity-0 shadow-xl transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100 hover:scale-105 hover:bg-primary-hover"
        >
          <PlayIcon />
        </button>
      </div>
      <div className="flex flex-col gap-1">
        <p className="truncate font-semibold text-foreground">{item.title}</p>
        <p className="line-clamp-2 text-sm text-muted-foreground">{item.subtitle}</p>
      </div>
    </a>
  )
}
