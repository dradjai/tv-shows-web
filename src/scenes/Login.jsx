import { useState } from "react"
import { useNavigate } from "react-router-dom";
import Header from "./Header";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Footer from "./Footer";


export default function Login({ setUser }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    fetch("https://tv-shows-api-dr.web.app/login", {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify({ email, password })

    })
      .then(resp => resp.json())
      .then(data => {
        if(data.message){
          alert(data.message)
          return
        }
        setUser(data)
        navigate("/");
      })
      .catch(alert)

  }

  return(
    <>
      <header>
        <Header/>
      </header>
      
      
      <Form onSubmit={handleLogin} className="form-login">
      <h2>Login</h2>
      <Form.Group controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control 
          type="email" 
          placeholder="Enter email" 
          value={email}
          onChange={ (e) => {setEmail(e.target.value)}}
          />
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
          onChange={ (e) => {setPassword(e.target.value)}}/>
      </Form.Group>
      <Form.Group controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Login
      </Button>
    </Form>
        <footer>
          <Footer/>
        </footer>
    </>
  )
}