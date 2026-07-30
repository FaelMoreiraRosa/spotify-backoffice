import type { Card } from '../../lib/spotify-data'
import { MediaCard } from './media-card'

export function SectionRow({ title, items }: { title: string; items: Card[] }) {
  return (
    <section className="mt-2">
      <div className="flex items-end justify-between px-1">
        <h2 className="text-2xl font-bold tracking-tight text-foreground hover:underline">
          <a href="#">{title}</a>
        </h2>
        <a
          href="#"
          className="shrink-0 text-sm font-bold uppercase tracking-wide text-muted-foreground hover:underline"
        >
          Mostrar tudo
        </a>
      </div>
      <div className="mt-1 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
        {items.map((item) => (
          <MediaCard key={item.id} item={item} />
        ))}
      </div>
    </section>
  )
}
