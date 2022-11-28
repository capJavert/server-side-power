import Image from 'next/image'
import { CSSProperties } from 'react'

import { MovieList } from '../types'
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

const Movies = ({ items }: { items: MovieList[] }) => {
    return (
        <section style={styles.container}>
            {items.map(movie => (
                <article key={movie.imdbID} style={styles.article}>
                    {movie.Poster.startsWith('https://') ? (
                        <Image
                            alt={movie.Title}
                            src={movie.Poster}
                            width={300}
                            height={448}
                            placeholder="blur"
                            blurDataURL={blurDataUrl}
                        />
                    ) : (
                        <Image alt="Placeholder" src={blurDataUrl} width={300} height={448} />
                    )}
                    <h3 style={styles.title}>
                        {movie.Title} ({movie.Year})
                    </h3>
                    <BodyChunk />
                </article>
            ))}
        </section>
    )
}

export default Movies
