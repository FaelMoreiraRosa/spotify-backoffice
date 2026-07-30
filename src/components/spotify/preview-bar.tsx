export function PreviewBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 flex flex-col items-center justify-between gap-3 bg-linear-to-r from-[#af2896] to-[#509bf5] px-4 py-3 sm:flex-row sm:px-6">
      <div className="text-center sm:text-left">
        <p className="text-xs font-bold uppercase tracking-wide text-white">Prévia do Spotify</p>
        <p className="text-sm text-white sm:text-base">
          Inscreva-se para ouvir músicas e podcasts ilimitados com anúncios ocasionais. Não precisa de
          cartão de crédito.
        </p>
      </div>
      <button
        type="button"
        className="shrink-0 whitespace-nowrap rounded-full bg-foreground px-8 py-3 text-sm font-bold text-background transition-transform hover:scale-105"
      >
        Inscreva-se de graça
      </button>
    </div>
  )
}
