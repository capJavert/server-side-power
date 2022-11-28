import Image from 'next/image'
import { CSSProperties } from 'react'

import { blurDataUrl } from '../utils'
import BodyChunk from './BodyChunk'

const styles: Record<string, CSSProperties> = {
    container: {
        display: 'flex',
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap'
    },
    article: {
        maxWidth: 300,
        width: '100%',
        margin: '20px 20px'
    },
    title: {
        overflowWrap: 'break-word'
    }
}

const FallbackMovies = ({ count }: { count: number }) => {
    return (
        <section style={styles.container}>
            {new Array(count).fill(null).map((_, index) => (
                <article key={index} style={styles.article}>
                    <Image alt="Placeholder" src={blurDataUrl} width={300} height={448} />
                    <h3 style={styles.title}>
                        <br />
                    </h3>
                    <BodyChunk />
                </article>
            ))}
        </section>
    )
}

export default FallbackMovies
