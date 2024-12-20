import { MovieCard } from "@/components/movie-card";
import { movies } from "../data/movies";

export default function MovieLayout() {
  return (
    <div className="font-[family-name:var(--font-geist-sans)] mx-3">
        {/* <h1 className="text-center text-3xl font-bold mb-8">Movie Dashboard</h1> */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {movies.map((movie) => (
              <MovieCard key={movie.id} movie={movie} />
            ))}
          </div>
    </div>
  );
}