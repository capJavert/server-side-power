import type { NextApiRequest, NextApiResponse } from 'next'

import { MovieList } from '../../../types'

const handler = async (req: NextApiRequest, res: NextApiResponse<MovieList[] | { message: string }>) => {
    const searchParams = new URLSearchParams()
    searchParams.append('apikey', process.env.OMDB_API_KEY as string)
    const params = [
        {
            name: 's',
            value: req.query.search
        },
        {
            name: 'y',
            value: req.query.year
        },
        {
            name: 'type',
            value: req.query.type
        },
        {
            name: 'page',
            value: req.query.page
        }
    ]
    params.forEach(param => {
        if (!param.value) {
            return
        }

        let value = param.value

        if (Array.isArray(value)) {
            value = value[0]
        }

        searchParams.append(param.name, value)
    })

    const response = await fetch(`https://www.omdbapi.com/?${searchParams.toString()}`, {
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        }
    })

    if (!response.ok) {
        res.status(response.status).json({
            message: `HTTP Error ${response.status}`
        })

        return
    }

    const resultOrError = await response.json()

    if (resultOrError.Response === 'False') {
        res.status(400).json({
            message: resultOrError.Error || `Failed`
        })

        return
    }

    const result = resultOrError as {
        Search: MovieList[]
        totalResults: number
    }

    res.status(200).setHeader('x-total', result.totalResults).json(result.Search)
}

export default handler
