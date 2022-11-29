import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
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
    const pathname = usePathname()

    return (
        <section style={styles.container} className="movies moviesSection">
            {items.map(movie => (
                <Link key={movie.imdbID} href={`${pathname?.startsWith('/v12') ? '/v12' : ''}/movies/${movie.imdbID}`}>
                    <article style={styles.article}>
                        {movie.Poster.startsWith('https://') ? (
                            <div className="movieImage">
                                <Image
                                    alt={movie.Title}
                                    src={movie.Poster}
                                    width={300}
                                    height={448}
                                    placeholder="blur"
                                    blurDataURL={blurDataUrl}
                                />
                            </div>
                        ) : (
                            <Image alt="Placeholder" src={blurDataUrl} width={300} height={448} />
                        )}
                        <h3 style={styles.title}>
                            {movie.Title} ({movie.Year})
                        </h3>
                        <BodyChunk />
                    </article>
                </Link>
            ))}
        </section>
    )
}

export default Movies
