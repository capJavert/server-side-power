import '../styles/globals.css'

import ThrottleNotice from '../components/ThrottleNotice'
import { globalDelayMs } from '../utils'

const RootLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <html>
            <head />
            <body>
                <ThrottleNotice />
                {children}
            </body>
        </html>
    )
}

export default RootLayout
