export interface Movie {
    id: number;
    title: string;
    description: string;
    releaseYear: number;
    genre: string;
    imageUrl: string;
  }
  
  export const movies: Movie[] = [
    {
      id: 1,
      title: "Inception",
      description: "A thief who enters the dreams of others to steal secrets from their subconscious.",
      releaseYear: 2010,
      genre: "Sci-Fi",
      imageUrl: "https://picsum.photos/seed/inception/300/200",
    },
    {
      id: 2,
      title: "The Shawshank Redemption",
      description: "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
      releaseYear: 1994,
      genre: "Drama",
      imageUrl: "https://picsum.photos/seed/shawshank/300/200",
    },
    {
      id: 3,
      title: "The Dark Knight",
      description: "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.",
      releaseYear: 2008,
      genre: "Action",
      imageUrl: "https://picsum.photos/seed/darkknight/300/200",
    },
    {
      id: 4,
      title: "Pulp Fiction",
      description: "The lives of two mob hitmen, a boxer, a gangster and his wife, and a pair of diner bandits intertwine in four tales of violence and redemption.",
      releaseYear: 1994,
      genre: "Crime",
      imageUrl: "https://picsum.photos/seed/pulpfiction/300/200",
    },
    {
      id: 5,
      title: "Forrest Gump",
      description: "The presidencies of Kennedy and Johnson, the Vietnam War, the Watergate scandal and other historical events unfold from the perspective of an Alabama man with an IQ of 75, whose only desire is to be reunited with his childhood sweetheart.",
      releaseYear: 1994,
      genre: "Drama",
      imageUrl: "https://picsum.photos/seed/forrestgump/300/200",
    },
    {
      id: 6,
      title: "The Matrix",
      description: "A computer hacker learns about the true nature of reality and his role in the war against its controllers.",
      releaseYear: 1999,
      genre: "Sci-Fi",
      imageUrl: "https://picsum.photos/seed/matrix/300/200",
    },
    {
      id: 7,
      title: "Gladiator",
      description: "A former Roman General sets out to exact vengeance against the corrupt emperor who murdered his family and sent him into slavery.",
      releaseYear: 2000,
      genre: "Action",
      imageUrl: "https://picsum.photos/seed/gladiator/300/200",
    },
    {
      id: 8,
      title: "Titanic",
      description: "A seventeen-year-old aristocrat falls in love with a kind but poor artist aboard the luxurious, ill-fated R.M.S. Titanic.",
      releaseYear: 1997,
      genre: "Romance",
      imageUrl: "https://picsum.photos/seed/titanic/300/200",
    },
    {
      id: 9,
      title: "The Godfather",
      description: "The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.",
      releaseYear: 1972,
      genre: "Crime",
      imageUrl: "https://picsum.photos/seed/godfather/300/200",
    },
    {
      id: 10,
      title: "Schindler's List",
      description: "In German-occupied Poland during World War II, industrialist Oskar Schindler gradually becomes concerned for his Jewish workforce after witnessing their persecution by the Nazis.",
      releaseYear: 1993,
      genre: "Biography",
      imageUrl: "https://picsum.photos/seed/schindler/300/200",
    },
  ];
  
  