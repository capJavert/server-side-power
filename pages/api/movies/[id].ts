import type { NextApiRequest, NextApiResponse } from 'next'

import { MovieRead } from '../../../types'

const handler = async (req: NextApiRequest, res: NextApiResponse<MovieRead | { message: string }>) => {
    const searchParams = new URLSearchParams()
    searchParams.append('apikey', process.env.OMDB_API_KEY as string)
    const params = [
        {
            name: 'i',
            value: req.query.id
        },
        {
            name: 'plot',
            value: req.query.plot || 'full'
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

    const { Response, ...result } = resultOrError

    res.status(200).json(result as MovieRead)
}

export default handler
