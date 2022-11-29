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

const Search = () => {
    const router = useRouter()
    const searchParams = useSearchParams()
    const [value, setValue] = useState(() => searchParams.get('q') || '')

    const onSubmit = () => {
        const url = new URL(window.location.href)
        url.searchParams.set('q', value)

        router.push(url.toString())
    }

    return (
        <form
            style={styles.form}
            onSubmit={onSubmit}
            onKeyDown={event => {
                if (event.key !== 'Enter') {
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
                onChange={event => {
                    setValue(event.target.value || '')
                }}
            />
        </form>
    )
}

export default Search
