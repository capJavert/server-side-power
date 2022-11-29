'use client'

import { useRouter } from 'next/navigation'
import { CSSProperties, useEffect, useState } from 'react'

import { globalDelayMs } from '../../../utils'

const styles: Record<string, CSSProperties> = {
    container: {
        display: 'flex',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: '20px',
        flexDirection: 'column',
        height: `calc(100vh - ${globalDelayMs ? 27 : 0}px`
    },
    button: {
        cursor: 'pointer',
        border: 0,
        boxShadow: 'none',
        margin: '0 10px',
        borderRadius: '5px',
        background: '#3a3a3a',
        padding: '10px 20px'
    },
    buttonContainr: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row'
    },
    title: {
        marginLeft: ''
    }
}

const Error = ({ error, reset }: { error: Error; reset: () => void }) => {
    const router = useRouter()

    useEffect(() => {
        // Log the error to an error reporting service
        console.error(error)

        // usually this is logged to sentry or other error loggig service
        console.log('Error digest', (error as any).digest)
    }, [error])

    return (
        <div style={styles.container}>
            <h1 style={styles.title}>😔 Movie not found 😔</h1>
            <p>Sorry for the inconvenience, actions below might help.</p>
            <div style={styles.buttonContainr}>
                <button
                    style={styles.button}
                    onClick={() => {
                        reset()
                    }}
                >
                    Try again
                </button>
                <button
                    style={styles.button}
                    onClick={() => {
                        router.push('/movies')
                    }}
                >
                    Back to movies
                </button>
            </div>
        </div>
    )
}

export default Error
