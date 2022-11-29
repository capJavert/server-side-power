import Movie from '../../../../components/Movie'
import Movies from '../../../../components/Movies'
import Ratings from '../../../../components/Ratings'
import { MovieRead } from '../../../../types'

const Loading = () => {
    const movie = {
        Title: 'XXXXXXXXX XXXXXX',
        Poster: 'N/A',
        Year: 'XXXX',
        Actors: 'XXXXX XXXXX, XXXXX XXXXX, XXXXX XXXXX',
        Awards: 'XXXXX XXXXX, XXXXX XXXXX, XXXXX XXXXX',
        Director: 'XXXXX XXXXX',
        Writer: 'XXXXX XXXXX',
        Genre: 'XXXXX XXXXX',
        Runtime: 'N/A',
        Language: 'N/A',
        Ratings: [
            {
                Source: 'Internet Movie Database',
                Value: 'N/A'
            },
            {
                Source: 'Rotten Tomatoes',
                Value: 'N/A'
            },
            {
                Source: 'Metacritic',
                Value: 'N/A'
            }
        ]
    } as MovieRead
    const relatedMovies = new Array(4).fill(movie)

    return (
        <>
            <Movie item={movie} />

            <h2>Rating and Reviews</h2>
            <Ratings ratings={movie.Ratings} />

            <h2>Related movies</h2>

            <Movies items={relatedMovies} />
        </>
    )
}

export default Loading
