import Search from '../../../components/Search'

const RootLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <>
            <h1>Movies</h1>
            <Search />
            {children}
        </>
    )
}

export default RootLayout
