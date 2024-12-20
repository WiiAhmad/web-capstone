import { notFound } from 'next/navigation'
import Link from 'next/link'
import { movies } from '../../data/movies'
import { Button } from "@/components/ui/button"
import { InputForm } from '@/components/comentary'
import { CommentForm } from '@/components/comment-form'
import { Toaster } from '@/components/ui/toaster'

export default function MoviePage({ params }: { params: { id: string } }) {
  const movie = movies.find((m) => m.id === parseInt(params.id))

  if (!movie) {
    notFound()
  }

  return (
    <div className="container mx-auto py-8">
      <Link href="/dashboard" passHref>
        <Button variant="outline" className="mb-6">Back to Dashboard</Button>
      </Link>
      <div className="bg-card text-card-foreground rounded-lg shadow-lg overflow-hidden">
        <img src={movie.imageUrl} alt={movie.title} className="w-full h-64 object-cover" />
        <div className="p-6">
          <h1 className="text-3xl font-bold mb-2">{movie.title}</h1>
          <p className="text-muted-foreground mb-4">{movie.genre} | {movie.releaseYear}</p>
          <p className="mb-6">{movie.description}</p>
          <Button>Watch Now</Button>
        </div>
      </div>

      <div>
        <h2></h2>
        <CommentForm movieId={movie.id}/>
        {/* <InputForm /> */}
      </div>

      <Toaster />
    </div>
  )
}

