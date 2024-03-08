export interface IMovie { 
    id: string; 
    title: string; 
    image: string; 
    price: number; 
    category: string; 
    rating: { 
        rate: number; 
        count: number; 
    }; 
    description: string;     
}

export interface IMovieShort {
    Poster: string;
    Title: string;
    Type: string;
    Year: string;
    imdbID: string;
}