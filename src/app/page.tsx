import { TopBar } from '../components/spotify/top-bar'
import { Sidebar } from '../components/spotify/sidebar'
import { MainContent } from '../components/spotify/main-content'
import { PreviewBar } from '../components/spotify/preview-bar'

export default function Page() {
  return (
    <div className="flex h-screen flex-col bg-background text-foreground">
      <TopBar />
      <div className="flex flex-1 gap-2 overflow-hidden px-2 pb-2">
        <Sidebar />
        <MainContent />
      </div>
      <PreviewBar />
    </div>
  )
}
