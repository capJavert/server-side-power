// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

import { MovieList, MovieRead } from '../../../types'

const handler = async (req: NextApiRequest, res: NextApiResponse<MovieRead | { message: string }>) => {
    const searchParams = new URLSearchParams()
    searchParams.append('apikey', process.env.OMDB_API_KEY as string)
    const params = [
        {
            name: 'i',
            value: req.query.id
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
        res.status(404).json({
            message: 'Not found'
        })

        return
    }

    const result = resultOrError as MovieRead

    res.status(200).json(result)
}

export default handler
