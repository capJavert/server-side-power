import { MovieList, MovieRead } from '../../types'
import { delay } from '../../utils'

export const getMovies = async (params: {
    search?: string
    year?: string
    type?: string
    page?: number
    delayMs?: number
}): Promise<{ data: MovieList[] }> => {
    if (!params.search) {
        return { data: [] }
    }

    const searchParams = new URLSearchParams()
    Object.keys(params).forEach(key => {
        const value = (params as Record<string, any>)[key]

        if (!value) {
            return
        }

        searchParams.append(key, value)
    })

    if (params.delayMs && params.delayMs > 0) {
        await delay(params.delayMs)
    }

    const response = await fetch(`${process.env.VERCEL_URL}/api/movies?${searchParams.toString()}`, {
        headers: {
            Authorization: `Bearer ${process.env.API_SECRET}`
        }
    })
    const resultOrError = await response.json()

    if (!response.ok) {
        throw new Error(resultOrError.message || `HTTP Error ${response.status}`)
    }

    const result = resultOrError as MovieList[]

    return { data: result }
}

export const getMovie = async (params: { id: string; delayMs?: number }): Promise<{ data: MovieRead }> => {
    const searchParams = new URLSearchParams()
    Object.keys(params).forEach(key => {
        const value = (params as Record<string, any>)[key]

        if (!value) {
            return
        }

        searchParams.append(key, value)
    })

    if (params.delayMs && params.delayMs > 0) {
        await delay(params.delayMs)
    }

    const response = await fetch(`${process.env.VERCEL_URL}/api/movies/${searchParams.get('id')}`, {
        headers: {
            Authorization: `Bearer ${process.env.API_SECRET}`
        }
    })
    const resultOrError = await response.json()

    if (!response.ok) {
        throw new Error(resultOrError.message || `HTTP Error ${response.status}`)
    }

    const result = resultOrError as MovieRead

    return { data: result }
}
