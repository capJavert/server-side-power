import Search from '../../../components/Search'

const Layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <>
            <h1>Movies</h1>
            <Search appMode />
            {children}
        </>
    )
}

export default Layout
