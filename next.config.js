const securityHeaders = [
    {
        key: 'X-DNS-Prefetch-Control',
        value: 'on'
    },
    {
        key: 'Strict-Transport-Security',
        value: 'max-age=63072000; includeSubDomains; preload'
    },
    {
        key: 'X-Frame-Options',
        value: 'DENY'
    },
    {
        key: 'Referrer-Policy',
        value: 'no-referrer'
    }
]

/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        appDir: true,
        allowMiddlewareResponseBody: true
    },
    reactStrictMode: true,
    swcMinify: true,
    poweredByHeader: false,
    headers: async () => {
        return [
            {
                source: '/:path*',
                headers: securityHeaders
            }
        ]
    },
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'm.media-amazon.com',
                pathname: '/images/**'
            }
        ]
    }
}

module.exports = nextConfig
