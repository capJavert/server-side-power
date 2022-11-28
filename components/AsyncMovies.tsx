import { getMovies } from '../app/movies/data'
import { MovieList } from '../types'
import Movies from './Movies'

const AsyncMovies = async ({ search, delayMs = 5000 }: { search: string; delayMs?: number }) => {
    const { data: movies } = await getMovies({ search, delayMs })

    return (
        <>
            <Movies items={movies} />
        </>
    )
}

AsyncMovies.Promise = async ({ promise }: { promise: Promise<ReturnType<typeof getMovies>> }) => {
    const { data: movies } = await promise

    return (
        <>
            <Movies items={movies} />
        </>
    )
}

export default AsyncMovies
