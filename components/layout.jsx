import Header from './Header'
import Login from './LoginComponent'

function Layout({children}) {
    return (
        <>
            <Header />
            <Login />
            <main>{children}</main>
        </>
    )
}

export default Layout;