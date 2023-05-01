import { useState } from "react"
import Header from "./Header";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Footer from "./Footer";

export default function Signup({ setUser }) {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  
  const handleSignup = (e) => {
    e.preventDefault();
    fetch("https://tv-shows-api-dr.web.app/signup", {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify( {email, password} )
    })
    
      .then(resp => resp.json())
      .then(data => {
        console.log(data)
        if(data.message){
          alert(data.message)
          return
        }
        console.log(data);
        setUser(data)
      })
      .catch(alert)
  }


  return(
    <>
       <header>
        <Header/>
      </header>
        
      <Form onSubmit={handleSignup} className="form-signup">
      <h2>Signup</h2>
      <Form.Group controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control 
            type="email" 
            placeholder="Enter email" 
            value={email}
            onChange={ (e) => {setEmail(e.target.value)}} />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control 
          type="password" 
          placeholder="Password" 
          value={password}
          onChange={ (e) => {setPassword(e.target.value)}} />
          
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check 
        type="checkbox" 
        label="Check me out" />
      <Button variant="primary" type="submit">
        Submit
      </Button>
      </Form.Group>
    </Form>

      
    </>
  )
}