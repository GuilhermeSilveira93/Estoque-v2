import Link from 'next/link'

export default async function NotFoundPage() {
  return (
    <div className="flex h-screen flex-col items-center justify-center">
      <h2>Página não encontrada</h2>
      <p>Não foi possivel encontrar a pagina atual.</p>
      <Link href="/" className="text-primary">
        Retornar para Home Page
      </Link>
    </div>
  )
}
