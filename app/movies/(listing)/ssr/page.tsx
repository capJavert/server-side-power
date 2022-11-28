import AsyncMovies from '../../../../components/AsyncMovies'
import Movies from '../../../../components/Movies'
import { getMovies } from '../../data'

const Page = async ({ searchParams }: { searchParams?: { q: string } }) => {
    const { q } = searchParams || {}
    const { data: movies } = await getMovies({ search: q })

    return (
        <>
            <Movies items={movies} />

            <h2>Avengers</h2>
            {/* @ts-expect-error Server Component */}
            <AsyncMovies search="Avengers" />

            <h2>Fast Saga</h2>
            {/* @ts-expect-error Server Component */}
            <AsyncMovies search="Fast+and+Furious" />
        </>
    )
}

export const revalidate = 0

export default Page
