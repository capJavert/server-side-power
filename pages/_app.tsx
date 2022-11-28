import '../styles/globals.css'

import type { AppProps } from 'next/app'
import Head from 'next/head'

import ThrottleNotice from '../components/ThrottleNotice'

const App = ({ Component, pageProps }: AppProps) => {
    return (
        <>
            <Head>
                <title>Regular Next.js</title>
                <meta name="description" content="Showcase power of Next.js 13 and server side!" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <ThrottleNotice />
            <Component {...pageProps} />
        </>
    )
}

export default App
