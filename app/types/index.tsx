export interface IMovie extends IMovieShort {
    Actors: string;
    Awards: string;
    BoxOffice: string;
    Country: string;
    DVD: string;
    Director: string;
    Genre: string;
    Language: string;
    Metascore: string;
    Plot: string;
    Production: string;
    Rated: string;
    Ratings: { Source: string; Value: string }[];
    Released: string;
    Response: string;
    Runtime: string;
    Website: string;
    Writer: string;
    imdbRating: string;
    imdbVotes: string;
}

export interface IMovieShort {
    Poster: string;
    Title: string;
    Type: string;
    Year: string;
    imdbID: string;
}