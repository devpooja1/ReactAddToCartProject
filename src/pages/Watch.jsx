import Card from 'react-bootstrap/Card';
import { useState, useEffect } from 'react';
import axios from 'axios';
import "../css/style.css"
import { useDispatch } from 'react-redux';
import { addtoCart } from './CartSlice';
import Button from 'react-bootstrap/Button'

const Watch=()=>{
    const [prodata, setProData] = useState([]);
    const dispatch = useDispatch();

    const loadData=async()=>{
        let  api = "http://localhost:3000/watch";
        const response = await axios.get(api);
        console.log(response.data);
        setProData(response.data);

    }
    useEffect(()=>{
        loadData();
    },[])
    const ans =prodata.map((key)=>{
        return(
            <>
            <Card style={{ width: '20rem' }}>
      <Card.Img variant="top" src={key.image} height={"350px"} 
      onClick={()=>{navigate(`/prodetail/${key.id}`)}}/>
      <Card.Body>
        <Card.Title>{key.name}</Card.Title>
        <Card.Text>
          
          {key.description}
        </Card.Text>
        <Card.Text>
          
          {key.price}
        </Card.Text>

        <Button  
        onClick={()=>{dispatch(addtoCart({id:key.id,
                                          name:key.name,    
                                          desc:key.description,
                                          price:key.price, 
                                          image:key.image,
                                          qnty:1}))}}>
            Add to Cart</Button>
       
      </Card.Body>
    </Card>
            </>
        )
    })
    return(
        <>
         
    {/* ---------------cards------------ */}
    <h1>Our Products</h1>
    <div id="cardData">{ans}</div>
        </>
    )
}
export default Watch;