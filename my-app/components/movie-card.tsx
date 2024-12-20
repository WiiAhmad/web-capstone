import Link from 'next/link'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Movie } from '@/app/data/movies'

interface MovieCardProps {
  movie: Movie
}

export function MovieCard({ movie }: MovieCardProps) {
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>{movie.title}</CardTitle>
      </CardHeader>
      <CardContent>
        <img src={movie.imageUrl} alt={movie.title} className="w-full h-48 object-cover mb-4 rounded-md" />
        <p className="text-sm text-muted-foreground mb-2">{movie.genre} | {movie.releaseYear}</p>
        <p className="text-sm line-clamp-3">{movie.description}</p>
      </CardContent>
      <CardFooter>
        <Link href={`/movies/${movie.id}`} passHref>
          <Button variant="outline" className="w-full">View Details</Button>
        </Link>
      </CardFooter>
    </Card>
  )
}

