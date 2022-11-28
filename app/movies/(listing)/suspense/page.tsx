import { Suspense } from 'react'

import AsyncMovies from '../../../../components/AsyncMovies'
import FallbackMovies from '../../../../components/FallbackMovies'
import Movies from '../../../../components/Movies'
import { getMovies } from '../../data'

const Page = async ({ searchParams }: { searchParams?: { q: string } }) => {
    const { q } = searchParams || {}
    const { data: movies } = await getMovies({ search: q })

    return (
        <>
            <Movies items={movies} />

            <h2>Avengers</h2>
            <Suspense fallback={<FallbackMovies count={12} />}>
                {/* @ts-expect-error Server Component */}
                <AsyncMovies search="Avengers" />
            </Suspense>

            <h2>Fast Saga</h2>
            <Suspense fallback={<FallbackMovies count={12} />}>
                {/* @ts-expect-error Server Component */}
                <AsyncMovies search="Fast+and+Furious" />
            </Suspense>
        </>
    )
}

export const revalidate = 0

export default Page
