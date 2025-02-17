import "../css/style.css";
import logo from "../images/logo.png";
import ind from "../images/ind.png";
import { useState, useEffect } from "react";
import { IoMdCart } from "react-icons/io";
import { useSelector , useDispatch} from "react-redux";
// import { addtoCart } from "./CartSlice";
import { useNavigate } from "react-router-dom";
import { CiHeart } from "react-icons/ci";
import { IoSearchOutline } from "react-icons/io5";
import { IoMdArrowDropdown } from "react-icons/io";


import { FaAngleDown } from "react-icons/fa";
const Header=()=>{
    // const [mypro, setMypro]= useState("");
    // const [prodata, setProData]= useState([]);
//     const dispatch= useDispatch();
//     const navigate= useNavigate();
// const loadData=async(e)=>{
//     setMypro(e.target.value)
//     let api="http://localhost:3000/product";
//     const response= await axios.get(api);
//     console.log(response.data);
//     setProData(response.data);
// }

// const ans= prodata.map((key)=>{
//        const mystr= key.name.toLowerCase();
//        const myproduct= mypro.toLowerCase();
//        const status= mystr.includes(myproduct) ;
//        console.log(status);
//        if (status)
//        {
//     return(
//         <>
//           <Card style={{ width: '16rem', marginTop:"20px" }}>
//       <Card.Img variant="top" src={key.image} style={{height:"300px"}}
//       onClick={()=>{navigate(`/prodetail/${key.id}`)}} />
//       <Card.Body>
//         <Card.Title>{key.name}</Card.Title>
//         <Card.Text>
//            {key.description}
//            <h4> Price : {key.price}</h4>
//         </Card.Text>
//         <Button variant="primary" 
//         onClick={()=>{dispatch(addtoCart({id:key.id, name:key.name, desc:key.description, price:key.price, image:key.image, qnty:1}))}}>
//           add to Cart</Button>
//       </Card.Body>
//     </Card>
        
//         </>
//     )
// }
// })
// ---------------------


// const Wishlist = useSelector((state)=>state.mywishlist.wishlist);  //get data from json
// console.log(Wishlist);
// const MylenW = Wishlist.length;
// ----------------------

    const Cart = useSelector((state)=>state.mycart.cart);  //get data from json
    // console.log(Cart);
    const Mylen = Cart.length;
    const navigate = useNavigate();

    // -----wishlist length calculate
    
    
    return(
        <>
        
        <div id="header">
            <div><img src={logo} style={{height:"60px", width:"100px", borderRadius:"40px"}}/></div>
            <div id="head1">
                <h6>Delivering to Bhopal</h6>
                <h6>Update Location</h6>
            </div>
            {/* <div id="select">
                <span>
                    <select name="" style={{height:"25px", borderRadius:"10px",border:"1px solid lightblue", backgroundColor:"rgb(226, 231, 234)"}}>
                        <option value="">All<FaAngleDown /></option>
                        <option >Electronice</option>
                        <option >Home Decore</option>
                        <option >Fashion</option>
                        <option >Kitchen Essential</option>
                        <option >Devices</option>
                    </select>
                </span>
                <span ><input type="search" value={mypro} onChange={loadData} 
                 style={{borderRadius:"10px", width:"280px", 
                 border:"1px solid lightblue", backgroundColor:"rgb(226, 231, 234)"}} />
                    <div id="cardData">
                        {ans}
                    </div>
                    </span>
                 <span ><IoSearchOutline style={{marginTop:"-5px", marginLeft:"5px"}} onClick={ProSearch} />
                </span> 
                
            </div> */}
            <div>
                <img src={ind} style={{width:"35px", marginRight:"2px", marginTop:"-5px"}}/>
                <select style={{borderRadius:"5px", height:"28px", marginTop:"5px"}}>
                    <option>EN</option>
                    <option>US</option>
                    <option>USA</option>
                    <option>SA</option>
                </select>
                <span><IoMdArrowDropdown />
                </span>
            </div>
            <div><CiHeart style={{color:"red",}} onClick={()=>{navigate("/wishlist")}}/>0</div>
            

            <div style={{marginRight:"10px"}}><IoMdCart onClick={()=>{navigate("/cart")}}/> {Mylen}</div>
        </div>
        </>
    )
}
export default Header;

// import "../css/style.css";
// import logo from "../images/logo.png";
// import ind from "../images/ind.png";
// import { useState } from "react";
// import { IoMdCart } from "react-icons/io";
// import { useSelector, useDispatch } from "react-redux";
// import { useNavigate } from "react-router-dom";
// import { IoSearchOutline } from "react-icons/io5";
// import { IoMdArrowDropdown } from "react-icons/io";
// import { FaAngleDown } from "react-icons/fa";
// import axios from "axios";
// import { Card, Button } from "react-bootstrap";
// import { addtoCart } from "../pages/CartSlice";

// const Header = () => {
//     const [mypro, setMypro] = useState(""); // Search input value
//     const [prodata, setProData] = useState([]); // Stores filtered products
//     const dispatch = useDispatch();
//     const navigate = useNavigate();

//     // Handle input change
//     const handleInputChange = (e) => {
//         setMypro(e.target.value);
//     };

//     // Search function to fetch and filter data
//     const ProSearch = async () => {

//         if (mypro.trim() === "") {
//             alert("Please enter a search term!");
//             return;
//         }

//         try {
//             const response = await axios.get("http://localhost:3000/product");
//             const products = response.data;

//             // Filter products based on search input
//             const filteredProducts = products.filter((item) =>
//                 item.name.toLowerCase().includes(mypro.toLowerCase())
//             );

//             setProData(filteredProducts);
//             navigate("/search");
//         } catch (error) {
//             console.error("Error fetching products:", error);
//         }
//     };
    

//     // Generate product cards
//     const ans = prodata.map((item) => (
//         <Card style={{ width: "16rem", marginTop: "20px" }} key={item.id}>
//             <Card.Img
//                 variant="top"
//                 src={item.image}
//                 style={{ height: "300px", cursor: "pointer" }}
//                 onClick={() => navigate(`/prodetail/${item.id}`)}
//             />
//             <Card.Body>
//                 <Card.Title>{item.name}</Card.Title>
//                 <Card.Text>
//                     {item.description}
//                     <h4>Price: {item.price}</h4>
//                 </Card.Text>
//                 <Button
//                     variant="primary"
//                     onClick={() =>
//                         dispatch(
//                             addtoCart({
//                                 id: item.id,
//                                 name: item.name,
//                                 desc: item.description,
//                                 price: item.price,
//                                 image: item.image,
//                                 qnty: 1,
//                             })
//                         )
//                     }
//                 >
//                     Add to Cart
//                 </Button>
//             </Card.Body>
//         </Card>
//     ));

//     const Cart = useSelector((state) => state.mycart.cart);
//     const Mylen = Cart.length;

//     return (
//         <>
//             <div id="header">
//                 <div>
//                     <img
//                         src={logo}
//                         style={{
//                             height: "60px",
//                             width: "100px",
//                             borderRadius: "40px",
//                         }}
//                         alt="Logo"
//                     />
//                 </div>
//                 <div id="head1">
//                     <h6>Delivering to Bhopal</h6>
//                     <h6>Update Location</h6>
//                 </div>
//                 <div id="select">
//                     <span>
//                         <select
//                             name=""
//                             style={{
//                                 height: "25px",
//                                 borderRadius: "10px",
//                                 border: "1px solid lightblue",
//                                 backgroundColor: "rgb(226, 231, 234)",
//                             }}
//                         >
//                             <option value="">All</option>
//                             <option>Electronics</option>
//                             <option>Home Decor</option>
//                             <option>Fashion</option>
//                             <option>Kitchen Essential</option>
//                             <option>Devices</option>
//                         </select>
//                     </span>
//                     <span>
//                         <input
//                             type="search"
//                             value={mypro}
//                             onChange={handleInputChange}
//                             onKeyDown={(e) => e.key === "Enter" && ProSearch()}
//                             style={{
//                                 borderRadius: "10px",
//                                 width: "280px",
//                                 border: "1px solid lightblue",
//                                 backgroundColor: "rgb(226, 231, 234)",
//                             }}
//                             placeholder="Search..."
//                         />
                        
//                     </span>
//                     <span>
//                         <IoSearchOutline
//                             style={{ marginTop: "-5px", marginLeft: "5px", cursor: "pointer", color:"black" }}
//                             onClick={ProSearch} 
//                         />
//                     </span>
//                 </div>
//                 <div>
//                     <img
//                         src={ind}
//                         style={{ width: "35px", marginRight: "2px", marginTop: "-5px" }}
//                         alt="Country Flag"
//                     />
//                     <select
//                         style={{
//                             borderRadius: "5px",
//                             height: "28px",
//                             marginTop: "5px",
//                         }}
//                     >
//                         <option>EN</option>
//                         <option>US</option>
//                         <option>USA</option>
//                         <option>SA</option>
//                     </select>
//                     <span>
//                         <IoMdArrowDropdown />
//                     </span>
//                 </div>

//                 <div style={{ marginRight: "10px" }}>
//                     <IoMdCart
//                         onClick={() => {
//                             navigate("/cart");
//                         }}
//                     />{" "}
//                     {Mylen}
//                 </div>
//             </div>
//             <div id="cardData">{ans}</div>
//         </>
//     );
// };

// export default Header;
