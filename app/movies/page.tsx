import Movies from '../../components/Movies'
import { globalDelayMs } from '../../utils'
import { getMovies } from './data'

const Page = async ({ searchParams }: { searchParams?: { q: string } }) => {
    const { q } = searchParams || {}
    const [{ data: movies }, { data: avengerMovies }, { data: fastMovies }] = await Promise.all([
        getMovies({ search: q as string }),
        getMovies({ search: 'Avengers', delayMs: globalDelayMs }),
        getMovies({ search: 'Fast+and+Furious', delayMs: globalDelayMs })
    ])

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

export const revalidate = 0

export default Page
