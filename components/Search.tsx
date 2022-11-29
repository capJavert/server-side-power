'use client'

import { useRouter, useSearchParams } from 'next/navigation'
import { CSSProperties, useState } from 'react'

const styles: Record<string, CSSProperties> = {
    input: {
        flex: 1,
        margin: '0 0 20px 0',
        height: '40px',
        fontSize: '24px',
        border: '1px solid #ffffff',
        borderRadius: '3px',
        padding: '0 5px',
        outline: 'none'
    },
    form: {
        display: 'flex',
        flex: 1,
        padding: '0 20px'
    }
}

const Search = ({ appMode = false }: { appMode?: boolean }) => {
    const router = useRouter()
    const searchParams = useSearchParams()
    const [value, setValue] = useState(() => searchParams.get('q') || '')

    const onSubmit = () => {
        const url = new URL(window.location.href)
        url.searchParams.set('q', value)

        if (appMode) {
            window.location.href = url.toString()
        } else {
            router.push(`${url.pathname}?${url.searchParams.toString()}`)
        }
    }

    return (
        <form
            style={styles.form}
            onSubmit={onSubmit}
            onKeyDown={event => {
                if (event.key !== 'Enter') {
                    return
                }

                if (!value) {
                    return
                }

                event.preventDefault()

                onSubmit()
            }}
        >
            <input
                style={styles.input}
                type="text"
                value={value}
                required
                onChange={event => {
                    setValue(event.target.value || '')
                }}
            />
        </form>
    )
}

export default Search
