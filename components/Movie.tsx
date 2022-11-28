import Image from 'next/image'
import { CSSProperties } from 'react'

import { MovieRead } from '../types'
import { blurDataUrl } from '../utils'

const styles: Record<string, CSSProperties> = {
    main: {
        display: 'flex',
        flexDirection: 'row'
    },
    aside: {
        margin: '20px'
    },
    title: {
        marginLeft: '0px'
    },
    list: {
        paddingLeft: '20px'
    }
}

const Movie = ({ item: movie }: { item: MovieRead }) => {
    return (
        <main style={styles.main}>
            <aside style={styles.aside}>
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
            </aside>
            <div style={styles.content}>
                <h1 style={styles.title}>
                    {movie.Title} ({movie.Year})
                </h1>
                <p>{movie.Plot}</p>
                <ul style={styles.list}>
                    <li>Director: {movie.Director}</li>
                    <li>Writer: {movie.Writer}</li>
                    <li>Genre: {movie.Genre}</li>
                    <li>Runtime: {movie.Runtime}</li>
                    <li>Language: {movie.Language}</li>
                </ul>

                <article>
                    <h3>🧑 Actors</h3>
                    <p>{movie.Actors}</p>
                </article>

                <article>
                    <h3>🏆 Awards</h3>
                    <p>{movie.Awards}</p>
                </article>
            </div>
        </main>
    )
}

export default Movie
