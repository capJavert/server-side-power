import DefaultHead from '../../../components/DefaultHead'
import { getMovie } from '../data'

const Head = async ({ params }: { params: { id: string } }) => {
    const { id } = params
    const { data: movie } = await getMovie({ id })

    return (
        <>
            <DefaultHead />
            <title>{`🚀 ${movie.Title}`}</title>
        </>
    )
}

export default Head
