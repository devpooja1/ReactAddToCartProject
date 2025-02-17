import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Registration from "./pages/Registration";
import Cart from "./pages/Cart";
import CheckOut from "./pages/CheckOut";
import Search from "./pages/Search";
import ProductDetail from "./pages/ProductDetail";
import Product from "./pages/Product";
import MenWear from "./pages/MenWear";
import Women from "./pages/Women";
import Mobile from "./pages/Mobile";
import PayComplete from "./pages/PayComplete";
import Watch from "./pages/Watch";
import Electronics from "./pages/Electronics";
import Decor from "./pages/Decor";
import AdminDashboard from "./pages/AdminDashboard";
// import Wishlist from "./pages/WishList";



const App=()=>{
  return(
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout/>}>
        <Route index element={<Home/>}/>
        <Route path="home" element={<Home/>}/>
        <Route path="product" element={<Product/>}/>
        <Route path="login" element={<Login/>}/>
        {/* <Route path="registration" element={<Registration/>}/> */}
        <Route path="cart" element={<Cart/>}/>
        <Route path="checkout" element={<CheckOut/>}/>
        <Route path="search" element={<Search/>}/>
        <Route path="mobile" element={<Mobile/>}/>
        <Route path="electronics" element={<Electronics/>}/>
        <Route path="women" element={<Women/>}/>
        <Route path="men" element={<MenWear/>}/>
        <Route path="watch" element={<Watch/>}/>
        <Route path="decor" element={<Decor/>}/>
        {/* <Route path="wishlist" element={<Wishlist/>}/> */}
        <Route path="prodetail" element={<ProductDetail/>}/>
        <Route path="paycomplete" element={<PayComplete/>}/>
        


        </Route>
        <Route path="dashboard" element={<AdminDashboard/>}/>
      </Routes>
    </BrowserRouter>
    </>
  )
}
export default App;