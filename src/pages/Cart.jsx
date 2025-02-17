import { useSelector, useDispatch } from "react-redux";
import { CiCirclePlus } from "react-icons/ci";
import { CiCircleMinus } from "react-icons/ci";
import { qntyInc, qntyDec, proDelete } from "./CartSlice";
import { PiCurrencyInrBold } from "react-icons/pi";
import { MdDelete } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import Table from 'react-bootstrap/Table';
const Cart=()=>{

    const Cart = useSelector(state=>state.mycart.cart)
    const dispatch = useDispatch();
    const navigate= useNavigate();
    let totAmount = 0;
    const ans = Cart.map((key)=>{
        totAmount+=key.price*key.qnty;
        return(
            <>
            <tr>
                <td><img src={key.image} width="100" height="100"/></td>
                <td>{key.name}</td>
                <td>{key.desc}</td>
                <td>{key.price}</td>
                <td>
                <CiCircleMinus onClick={()=>{dispatch(qntyDec({id:key.id}))}}/>
                    {key.qnty}
                    <CiCirclePlus onClick={()=>{dispatch(qntyInc({id:key.id}))}} />
                    </td>
                <td>{key.price*key.qnty}</td>
                <td style={{color:"red", fontSize:"25px"}}><MdDelete  onClick={()=>{
                   dispatch(proDelete(key.id))
                }}/></td>
                
            </tr>
            </>
        )
    })

    return(
        <>
        <div align="center" style={{border:"1px solid grey ", width:"200px", margin:"auto", marginTop:"20px", backgroundColor:"lightblue", borderRadius:"10px"}}>My Cart</div>
        <hr />
        <h3 align="center"style={{margin:"auto", width:"400"}}><PiCurrencyInrBold />:{totAmount}</h3>
        <Table striped bordered hover size="sm">
            <thead>
                <tr>
                    <th>Image</th>
                    <th>Product Name</th>
                    <th>Description</th>
                    <th>Price</th>
                    <th>Quantity</th>
                    <th>Total</th>
                    <th>Delete Items</th>
                </tr>
            </thead>
            <tbody>
                {ans}
            </tbody>
        </Table>
        <button style={{display:"flex",paddingLeft:"30px",color:"black",margin:"auto",width:"15%", textAlign:"center", marginBottom:"60px",margin:"auto", backgroundColor:"lightblue", borderRadius:"10px"}} 
        onClick={()=>{
            navigate("/checkout")
        }}>Proceed to Checkout</button>
        </>
    )
}
export default Cart;