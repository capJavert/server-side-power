import { GetServerSideProps } from 'next'

import { getMovie, getMovies } from '../../../app/movies/data'
import Movie from '../../../components/Movie'
import Movies from '../../../components/Movies'
import Ratings from '../../../components/Ratings'
import { MovieList, MovieRead } from '../../../types'
import { globalDelayMs } from '../../../utils'

export type Props = { movie: MovieRead; relatedMovies: MovieList[] }

const Page = ({ movie, relatedMovies }: Props) => {
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

export const getServerSideProps: GetServerSideProps<Props> = async context => {
    const { id } = context.params || {}
    const { data: movie } = await getMovie({ id: id as string })
    const { data: relatedMovies } = await getMovies({ search: movie.Title, delayMs: globalDelayMs })
        .then(({ data }) => {
            return { data: data.filter(item => item.imdbID !== movie.imdbID) }
        })
        .catch(() => ({ data: [] }))

    return {
        props: {
            movie,
            relatedMovies
        }
    }
}

export default Page
