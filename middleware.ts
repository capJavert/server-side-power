import { NextRequest, NextResponse } from 'next/server'

const isDev = process.env.NODE_ENV !== 'production'

const apiMiddleware = (req: NextRequest) => {
    if (!isDev && req.headers.get('authorization') !== `Bearer ${process.env.API_SECRET}`) {
        return NextResponse.json(
            {
                message: 'Unauthorized'
            },
            {
                status: 401
            }
        )
    }

    return NextResponse.next({
        headers: {
            'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=86400'
        }
    })
}

const middleware = (req: NextRequest) => {
    const { pathname } = req.nextUrl

    switch (pathname) {
        case pathname.startsWith('/api/movies') ? pathname : false:
            return apiMiddleware(req)
        default:
            return NextResponse.next()
    }
}

export { middleware }
