import { GetServerSideProps } from 'next'

import { getMovies } from '../../../app/movies/data'
import Movies from '../../../components/Movies'
import { MovieList } from '../../../types'

export type Props = { movies: MovieList[]; avengerMovies: MovieList[]; fastMovies: MovieList[] }

const Page = ({ movies, avengerMovies, fastMovies }: Props) => {
    return (
        <>
            <Movies items={movies} />

            <h2>Avengers</h2>
            <Movies items={avengerMovies} />

            <h2>Fast Saga</h2>
            <Movies items={fastMovies} />
        </>
    )
}

export const getServerSideProps: GetServerSideProps<Props> = async context => {
    const { q } = context.query
    const [{ data: movies }, { data: avengerMovies }, { data: fastMovies }] = await Promise.all([
        getMovies({ search: q as string }),
        getMovies({ search: 'Avengers', delayMs: 5000 }),
        getMovies({ search: 'Fast+and+Furious', delayMs: 5000 })
    ])

    return {
        props: {
            movies,
            avengerMovies,
            fastMovies
        }
    }
}

export default Page
