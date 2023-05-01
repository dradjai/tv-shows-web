import Nav from 'react-bootstrap/Nav';
import { LinkContainer } from 'react-router-bootstrap';


export default function Header(){

  return (

    <Nav className='nav-bar' defaultActiveKey="/" as="ul">
      <Nav.Item as="li">
        <LinkContainer to="/"><Nav.Link>Home</Nav.Link></LinkContainer>
        </Nav.Item>
      <Nav.Item as="li">
        <LinkContainer to="/login"><Nav.Link>Login</Nav.Link></LinkContainer>
      </Nav.Item>
      <Nav.Item as="li">
        <LinkContainer to="/signup"><Nav.Link>Signup</Nav.Link></LinkContainer>
      </Nav.Item>
      <Nav.Item as="li">
        <LinkContainer to="/addshow"><Nav.Link>Add Show</Nav.Link></LinkContainer>
      </Nav.Item>
    </Nav>
     
  )
}