'use client'

import { useState } from 'react'

const RateButton = () => {
    const [liked, setLiked] = useState(false)

    return (
        <button
            style={{
                width: '90px',
                cursor: 'pointer',
                border: 0,
                boxShadow: 'none',
                margin: 0,
                borderRadius: '5px',
                background: '#3a3a3a',
                padding: '5px'
            }}
            type="button"
            title="Like"
            onClick={() => {
                setLiked(current => !current)
            }}
        >
            {liked ? 'Dislike 👎' : 'Like 👍'}
        </button>
    )
}

export default RateButton
