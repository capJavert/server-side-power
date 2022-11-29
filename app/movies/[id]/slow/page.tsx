import { Suspense } from 'react'

import AsyncMovies from '../../../../components/AsyncMovies'
import FallbackMovies from '../../../../components/FallbackMovies'
import Movie from '../../../../components/Movie'
import Ratings from '../../../../components/Ratings'
import { globalDelayMs } from '../../../../utils'
import { getMovie, getMovies } from '../../data'

const Page = async ({ params }: { params: { id: string } }) => {
    const { id } = params
    const { data: movie } = await getMovie({ id, delayMs: globalDelayMs })
    const relatedMovies = getMovies({ search: movie.Title, delayMs: globalDelayMs * 2 })
        .then(({ data }) => {
            return { data: data.filter(item => item.imdbID !== movie.imdbID) }
        })
        .catch(() => ({ data: [] }))

    return (
        <>
            <Movie item={movie} />

            <h2>Rating and Reviews</h2>
            <Ratings ratings={movie.Ratings} />

            <h2>Related movies</h2>

            <Suspense fallback={<FallbackMovies count={4} />}>
                {/* @ts-expect-error Server Component */}
                <AsyncMovies.Promise promise={relatedMovies} />
            </Suspense>
        </>
    )
}

export const revalidate = 0

export default Page
