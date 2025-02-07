import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import TopMenu from "./components/TopMenu";
import Footer from "./components/Footer";



const Layout=()=>{
    return(
        <>
        <div id="head">
        <Header/>
        <TopMenu/>
        </div>

        
        <Outlet/>
        <Footer/>
        </>
    )
}

export default Layout;