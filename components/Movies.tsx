import Image from 'next/image'

import { MovieList } from '../types'
import { blurDataUrl } from '../utils'
import BodyChunk from './BodyChunk'

const Movies = ({ items }: { items: MovieList[] }) => {
    if (!items.length) {
        return <div>No results</div>
    }

    return (
        <section
            style={{
                display: 'flex',
                flex: 1,
                flexDirection: 'row',
                flexWrap: 'wrap'
            }}
        >
            {items.map(movie => (
                <article
                    key={movie.imdbID}
                    style={{
                        maxWidth: 300,
                        width: '100%',
                        margin: '20px 20px'
                    }}
                >
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
                    <h3
                        style={{
                            overflowWrap: 'break-word'
                        }}
                    >
                        {movie.Title} ({movie.Year})
                    </h3>
                    <BodyChunk />
                </article>
            ))}
        </section>
    )
}

export default Movies
