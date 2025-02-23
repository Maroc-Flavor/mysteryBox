// Erstelle eine wiederverwendbare Komponente für statische Seiten
export default function StaticPageLayout({ children, title }: { 
  children: React.ReactNode
  title: string 
}) {
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-2xl font-bold mb-4">{title}</h1>
      {children}
    </div>
  )
} 