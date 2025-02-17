import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import wish from "../images/wish.png"

const TopMenu=()=>{
  const WishData = useSelector((state) => state.wishlist?.items || []); // Fix selector
  const wishLength = WishData.length;


    return(
        <>
        <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          
          <Nav className="me-auto">
            <Nav.Link as={Link} to="home">Home</Nav.Link>
            <Nav.Link as={Link} to="product">Product</Nav.Link>
            <Nav.Link as={Link} to="mobile">Mobiles</Nav.Link>
            <Nav.Link as={Link} to="women">Women</Nav.Link>
            <Nav.Link as={Link} to="men">Men</Nav.Link>
            <Nav.Link as={Link} to="electronics">Electronics</Nav.Link>
            <Nav.Link as={Link} to="watch">Watch</Nav.Link>
            <Nav.Link as={Link} to="decor">Decor</Nav.Link>
            <Nav.Link as={Link} to="search">Search</Nav.Link>
            <Nav.Link as={Link} to="login">Login</Nav.Link>
            {/* <Nav.Link as={Link} to="registration">Registration</Nav.Link> */}
            {/* <Nav.Link as={Link} to="/wishlist" className="wish-link">
              <div className="icon-container">
                <img src={wish} alt="Wishlist" className="wish-icon"  />
                {wishLength > 0 && <span className="wish-count">{wishLength}</span>}
              </div>
            </Nav.Link> */}
          </Nav>
        </Container>
      </Navbar>
        
        </>
    )
}
export default TopMenu;