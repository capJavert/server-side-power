export type MovieList = {
    Title: string
    Year: string
    imdbID: string
    Type: string
    Poster: string
}

export type MovieRead = {
    Title: string
    Year: string
    Rated: string
    Released: string
    Runtime: string
    Genre: string
    Director: string
    Writer: string
    Actors: string
    Plot: string
    Language: string
    Country: string
    Awards: string
    Poster: string
    Ratings: {
        Source: string
        Value: string
    }[]
    Metascore: string
    imdbRating: string
    imdbVotes: string
    imdbID: string
    Type: string
    DVD: string
    BoxOffice: string
    Production: string
    Website: string
}

type UnionToIntersection<U> = (U extends any ? (k: U) => void : never) extends (k: infer I) => void ? I : never

export type PickRename<T, R extends { [K in keyof R]: K extends keyof T ? PropertyKey : 'Error: key not in T' }> = Omit<
    T,
    keyof R
> &
    UnionToIntersection<{ [P in keyof R & keyof T]: { [PP in R[P]]: T[P] } }[keyof R & keyof T]>
