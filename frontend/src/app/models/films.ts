export class Films {
  id: number;
  title: string;
  description: string;
  category: string;
  image: string;
  rating: number;
  year: number;
  genre: string;
  isNew: boolean;
  trailerUrl?: string;

  constructor(
    id: number,
    title: string,
    description: string,
    category: string,
    image: string,
    rating: number,
    year: number,
    genre: string,
    isNew: boolean,
    trailerUrl: string
  ) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.category = category;
    this.image = image;
    this.rating = rating;
    this.year = year;
    this.genre = genre;
    this.isNew = isNew;
    this.trailerUrl = trailerUrl;
  }
}

export const FILMS: Films[] = [
  {
    id: 1,
    title: 'The Shawshank Redemption',
    description: 'Two imprisoned ',
    category: 'Adventure',
    image:
      'https://upload.wikimedia.org/wikipedia/en/8/81/ShawshankRedemptionMoviePoster.jpg',
    rating: 9.3,
    year: 1994,
    genre: 'Drama',
    isNew: true,
    trailerUrl: 'https://www.youtube.com/watch?v=6hB3S9bIaco',
  },
  {
    id: 2,
    title: 'The Godfather',
    description:
      'The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.',
    category: 'Comedy',
    image: 'https://upload.wikimedia.org/wikipedia/en/1/1c/Godfather_ver1.jpg',
    rating: 9.2,
    year: 1972,
    genre: 'Crime',
    isNew: false,
    trailerUrl: 'https://www.youtube.com/watch?v=6hB3S9bIaco',
  },
  {
    id: 3,
    title: 'The Dark Knight',
    description:
      'When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.',
    category: 'Comedy',
    image:
      'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTfE_qrYMBZ_JB8om-34WGaZARhpX26yWRttqIDvn4_7l--UzX8mxKcPrc59IcvTpEA_G8gPA',
    rating: 9.0,
    year: 2008,
    genre: 'Action',
    isNew: false,
    trailerUrl: 'https://www.youtube.com/watch?v=6hB3S9bIaco',
  },
  {
    id: 4,
    title: "Schindler's List",
    category: 'Comedy',
    description:
      'In German-occupied Poland during World War II, industrialist Oskar Schindler gradually becomes concerned for his Jewish workforce after witnessing their',
    image:
      'https://upload.wikimedia.org/wikipedia/en/3/38/Schindler%27s_List_movie.jpg',
    rating: 8.9,
    year: 1993,
    genre: 'Biography',
    isNew: false,
    trailerUrl: 'https://www.youtube.com/watch?v=6hB3S9bIaco',
  },
  {
    id: 5,
    title: "Schindler's List",
    category: 'Comedy',
    description:
      'In German-occupied Poland during World War II, industrialist Oskar Schindler gradually becomes concerned for his Jewish workforce after witnessing their',
    image:
      'https://upload.wikimedia.org/wikipedia/en/3/38/Schindler%27s_List_movie.jpg',
    rating: 8.9,
    year: 1993,
    genre: 'Biography',
    isNew: false,
    trailerUrl: 'https://www.youtube.com/watch?v=6hB3S9bIaco',
  },
  {
    id: 6,
    title: "Schindler's List",
    category: 'Adventure',
    description:
      'In German-occupied Poland during World War II, industrialist Oskar Schindler gradually becomes concerned for his Jewish workforce after witnessing their',
    image:
      'https://upload.wikimedia.org/wikipedia/en/3/38/Schindler%27s_List_movie.jpg',
    rating: 8.9,
    year: 1993,
    genre: 'Biography',
    isNew: false,
    trailerUrl: 'https://www.youtube.com/watch?v=6hB3S9bIaco',
  },
];
