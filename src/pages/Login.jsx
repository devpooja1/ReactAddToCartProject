// import Button from 'react-bootstrap/Button';
// import Form from 'react-bootstrap/Form';

// const Login=()=>{
//     return(
//         <>
//         <div style={{margin:"auto", width:"400px"}}>
//         <h1>Login page</h1>
//         <Form>
//       <Form.Group className="mb-3" controlId="formBasicEmail">
//         <Form.Label>Email address</Form.Label>
//         <Form.Control type="email" name="userid" />
//         <Form.Text className="text-muted">
        
//         </Form.Text>
//       </Form.Group>

//       <Form.Group className="mb-3" controlId="formBasicPassword">
//         <Form.Label>Password</Form.Label>
//         <Form.Control type="password" name="password" />
//       </Form.Group>
//       <Form.Group className="mb-3" controlId="formBasicCheckbox">
        
//       </Form.Group>
//       <Button variant="primary">
//         Submit
//       </Button>
//     </Form>
//     </div>
//         </>
//     )
// }
// export default Login;

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';
import axios from 'axios';
import {useNavigate} from "react-router-dom";

import {message} from "antd";

const Login=()=>{
  const [email, setEmail] = useState("");
  const [password, setPassword]= useState("");

  const navigate = useNavigate();
  const handleSubmit=async(e)=>{
    e.preventDefault();
    try {
      let api="http://localhost:3000/admin";
      const response= await axios.post(api, {email:email, password:password})
      if (response.status==200)
      {
        localStorage.setItem("username", response.data.name);
        localStorage.setItem("useremail", response.data.email);
        console.log(response.data);
         navigate("/dashboard")
      }    
   

    } catch (error) {
       message.error(error.response.data.msg)
    }
    
  }

    return(
        <>
          <h1> Admin Login!</h1>

          <Form style={{width:"500px"}}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Enter email</Form.Label>
        <Form.Control type="email" name="email" value={email} onChange={(e)=>{setEmail(e.target.value)}} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Enter password</Form.Label>
        <Form.Control type="password" name="password" value={password} onChange={(e)=>{setPassword(e.target.value)}} />
      </Form.Group>
      <Button variant="primary" type="submit"  onClick={handleSubmit}>
        Submit
      </Button>
    </Form>
        
        </>
    )
}

export default Login;