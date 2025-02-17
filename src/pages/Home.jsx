import Carousel from 'react-bootstrap/Carousel';
import ban1 from "../images/ban1.jpg"
import ban2 from "../images/ban2.avif"
import ban3 from "../images/ban3.avif"
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useState, useEffect } from 'react';
import axios from 'axios';
import "../css/style.css"
import { useSelector, useDispatch } from 'react-redux';
import { addtoCart } from './CartSlice';


const Home=()=>{
    const [prodata, setProData] = useState([]);
    const dispatch = useDispatch();

    const loadData=async()=>{
        let  api = "http://localhost:3000/product";
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
      <Card.Img variant="top" src={key.image} height={"500px"} 
      onClick={()=>{navigate(`/prodetail/${key.id}`)}}/>
      <Card.Body>
        <Card.Title>{key.name}</Card.Title>
        <Card.Text>
          
          {key.description}
        </Card.Text>
        <Card.Text>
          
          {key.price}
        </Card.Text>
        {/* <Button  
        onClick={()=>{dispatch(addtoWishlist({id:key.id,
                                          name:key.name,    
                                          desc:key.description,
                                          price:key.price, 
                                          image:key.image,
                                          qnty:1}))}}>
            Add to Wishlist </Button> */}

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
          <Carousel>
      <Carousel.Item interval={1000}>
        <img src={ban1} text="First slide" style={{width:"100%"}} />
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={500}>
        <img src={ban2} text="Second slide" style={{width:"100%"}}/>
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src={ban3} text="Third slide" style={{width:"100%"}}/>
        <Carousel.Caption>
          
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    {/* ---------------cards------------ */}
    <h1>Our Products...</h1>
    <div id="cardData">{ans}</div>
        </>
    )
}
export default Home;