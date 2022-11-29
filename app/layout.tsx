import '../styles/globals.css'

import ThrottleNotice from '../components/ThrottleNotice'

const RootLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <html>
            <head>
                <meta charSet="utf-8" />
                <meta name="viewport" content="width=device-width" />
            </head>
            <body>
                <ThrottleNotice />
                {children}
            </body>
        </html>
    )
}

export default RootLayout
