import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { Outlet } from "react-router-dom";
function Layout() {
    return(
        <>
         <Header></Header>
         <Outlet />
         <Footer></Footer>
        </>
    )
}
export default Layout
