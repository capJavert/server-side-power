import { CSSProperties } from 'react'

import { MovieRead, PickRename } from '../types'

const styles: Record<string, CSSProperties> = {
    container: {
        display: 'flex',
        flexDirection: 'row',
        margin: '20px',
        justifyContent: 'space-around',
        textAlign: 'center'
    }
}

const Ratings = ({ ratings }: Pick<PickRename<MovieRead, { Ratings: 'ratings' }>, 'ratings'>) => {
    return (
        <div style={styles.container}>
            {ratings.map(rating => (
                <article key={rating.Source}>
                    <h3>{rating.Source}</h3>
                    <p>⭐ {rating.Value}</p>
                </article>
            ))}
        </div>
    )
}

export default Ratings