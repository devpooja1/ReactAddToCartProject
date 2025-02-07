import { useSelector, useDispatch } from "react-redux";
// import { CiCirclePlus } from "react-icons/ci";
// import { CiCircleMinus } from "react-icons/ci";
const Cart=()=>{

    const Cart = useSelector(state=>state.mycart.cart)
    const dispatch = useDispatch();
    const ans = Cart.map((key)=>{
        return(
            <>
            <tr>
                <td><img src={key.image} width="100" height="100"/></td>
                <td>{key.name}</td>
                <td>{key.desc}</td>
                <td>{key.price}</td>
                <td>
                {/* <CiCirclePlus /> */}
                    {key.qnty}
                    {/* <CiCircleMinus /> */}
                    </td>
                <td>{key.price*key.qnty}</td>
                
            </tr>
            </>
        )
    })

    return(
        <>
        <h1>My Cart</h1>
        <hr />
        <table>
            <thead>
                <tr>
                    <th>Image</th>
                    <th>Product Name</th>
                    <th>Description</th>
                    <th>Price</th>
                    <th>Quantity</th>
                    <th>Total</th>
                </tr>
            </thead>
            <tbody>
                {ans}
            </tbody>
        </table>
        </>
    )
}
export default Cart;