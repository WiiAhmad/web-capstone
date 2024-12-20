import { MovieCard } from "@/components/movie-card";
import { movies } from "./data/movies";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardTitle, CardHeader, CardFooter } from "@/components/ui/card";

export default function Home() {
  return (
    <div className="font-[family-name:var(--font-geist-sans)] min-h-screen flex items-center justify-center">
        <div className="text-center">
          <Button className="">
            <Link href="/dashboard">
              Klik disini untuk menonton
            </Link>
          </Button>
        </div>
    </div>
  );
}