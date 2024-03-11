import Loading from "@/app/loading"
import Footer from "./Footer"
import Header from "./Header"

function Layout({ children, isLoading }) {


    return (
        <>
            <Header />
            {isLoading && <Loading />}
            <div >{children}</div>
            <Footer />
        </>
    )
}



export default Layout