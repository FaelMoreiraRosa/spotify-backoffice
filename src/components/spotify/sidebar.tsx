function LibraryIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      className="h-6 w-6"
      aria-hidden="true"
      fill="currentColor"
    >
      <path d="M4 6h2v12H4V6Zm5 0h2v12H9V6Zm5 0h2v12h-2V6Zm5 0h2v12h-2V6Z" />
    </svg>
  )
}

function PlusIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      className="h-5 w-5"
      aria-hidden="true"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 5v14M5 12h14" />
    </svg>
  )
}

function GlobeIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      className="h-4 w-4"
      aria-hidden="true"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <path d="M2 12h20" />
      <path d="M12 2a10 10 0 0 1 0 20" />
      <path d="M6.8 6.8a10 10 0 0 0 10.4 10.4" />
    </svg>
  )
}

function PromoCard({ title, description, cta }: { title: string; description: string; cta: string }) {
  return (
    <div className="flex flex-col gap-4 rounded-lg bg-elevated p-4">
      <p className="font-bold text-foreground">{title}</p>
      <p className="text-muted-foreground">{description}</p>
      <button
        type="button"
        className="w-fit rounded-full bg-foreground px-4 py-1.5 text-sm font-bold text-background transition-transform hover:scale-105"
      >
        {cta}
      </button>
    </div>
  )
}

export function Sidebar() {
  return (
    <aside className="hidden w-85 shrink-0 flex-col gap-2 md:flex">
      <div className="flex flex-1 flex-col rounded-lg bg-base">
        <div className="flex items-center justify-between px-4 pt-4 pb-2">
          <button
            type="button"
            className="flex items-center gap-3 font-bold text-muted-foreground transition-colors hover:text-foreground"
          >
            <LibraryIcon />
            Sua Biblioteca
          </button>
          <button
            type="button"
            aria-label="Criar playlist ou pasta"
            className="flex h-8 w-8 items-center justify-center rounded-full text-muted-foreground transition-colors hover:bg-elevated-hover hover:text-foreground"
          >
            <PlusIcon />
          </button>
        </div>

        <div className="flex flex-col gap-4 p-2">
          <PromoCard
            title="Crie sua primeira playlist"
            description="É fácil, nós vamos te ajudar"
            cta="Criar playlist"
          />
          <PromoCard
            title="Que tal seguir alguns podcasts?"
            description="Avisaremos sobre novos episódios"
            cta="Explorar podcasts"
          />
        </div>

        <div className="mt-auto flex flex-wrap gap-x-4 gap-y-2 px-6 py-4 text-xs text-muted-foreground">
          <a href="#" className="hover:text-foreground">Legal</a>
          <a href="#" className="hover:text-foreground">Central de Segurança e Privacidade</a>
          <a href="#" className="hover:text-foreground">Política de Privacidade</a>
          <a href="#" className="hover:text-foreground">Cookies</a>
          <a href="#" className="hover:text-foreground">Sobre anúncios</a>
          <a href="#" className="hover:text-foreground">Acessibilidade</a>
        </div>

        <div className="px-4 pb-5">
          <button
            type="button"
            className="flex items-center gap-2 rounded-full border border-muted-foreground/60 px-3 py-1.5 text-sm font-bold text-foreground transition-colors hover:scale-105 hover:border-foreground"
          >
            <GlobeIcon />
            Português do Brasil
          </button>
        </div>
      </div>
    </aside>
  )
}
