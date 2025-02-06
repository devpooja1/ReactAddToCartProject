import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const Login=()=>{
    return(
        <>
        <div style={{margin:"auto", width:"400px"}}>
        <h1>Login page</h1>
        <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" name="email" />
        <Form.Text className="text-muted">
        
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" name="password" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        
      </Form.Group>
      <Button variant="primary">
        Submit
      </Button>
    </Form>
    </div>
        </>
    )
}
export default Login;