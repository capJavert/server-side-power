import Image from 'next/image'

import { blurDataUrl } from '../utils'
import BodyChunk from './BodyChunk'

const FallbackMovies = ({ count }: { count: number }) => {
    return (
        <section
            style={{
                display: 'flex',
                flex: 1,
                flexDirection: 'row',
                flexWrap: 'wrap'
            }}
        >
            {new Array(count).fill(null).map((_, index) => (
                <article
                    key={index}
                    style={{
                        maxWidth: 300,
                        width: '100%',
                        margin: '20px 20px'
                    }}
                >
                    <Image alt="Placeholder" src={blurDataUrl} width={300} height={448} />
                    <h3
                        style={{
                            overflowWrap: 'break-word'
                        }}
                    >
                        <br />
                    </h3>
                    <BodyChunk />
                </article>
            ))}
        </section>
    )
}

export default FallbackMovies
