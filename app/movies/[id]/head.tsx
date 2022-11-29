import DefaultHead from '../../../components/DefaultHead'
import { getMovie } from '../data'

const Head = async ({ params }: { params: { id: string } }) => {
    const { id } = params
    const { data: movie } = await getMovie({ id }).catch(() => ({ data: undefined }))

    return (
        <>
            <DefaultHead />
            <title>{`🚀 ${movie?.Title || 'Server power'}`}</title>
        </>
    )
}

export default Head
