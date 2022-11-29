import { GetServerSideProps } from 'next'

import { getMovies } from '../../../app/movies/data'
import Movies from '../../../components/Movies'
import Search from '../../../components/Search'
import { MovieList } from '../../../types'
import { globalDelayMs } from '../../../utils'

export type Props = { movies: MovieList[]; avengerMovies: MovieList[]; fastMovies: MovieList[] }

const Page = ({ movies, avengerMovies, fastMovies }: Props) => {
    return (
        <>
            <h1>Movies</h1>
            <Search />

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
        getMovies({ search: 'Avengers', delayMs: globalDelayMs }),
        getMovies({ search: 'Fast+and+Furious', delayMs: globalDelayMs })
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
