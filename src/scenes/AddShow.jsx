import { useState } from "react"
import { useNavigate, userNavigate } from "react-router-dom";
import { Form } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import Header from "./Header";
import Footer from "./Footer";

export default function AddShow({ setShows }) {

  const[title, setTitle] = useState('');
  const[poster, setPoster] = useState('');
  const[seasons, setSeasons] = useState('');

  const navigate = useNavigate();

  const handleAddShow = (e) => {
    e.preventDefault();
    fetch("https://tv-shows-api-dr.web.app/shows", {

      method: "POST",
      headers: { "Content-Type": "application/json"},
      body: JSON.stringify( {title, poster, seasons} )
    })
      .then(resp => resp.json())
      .then(data => {
        if(data.message) {
          alert(data.message)
          return
        }
        setShows(data);
        navigate("/");
      })
      .catch(alert)
  }
 
  return(
    <>
    
      <header>
        <Header/>
      </header>
        
        <Form onSubmit={handleAddShow} className="add-show"> 
          <h2>Add a show</h2>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Title</Form.Label>
            <Form.Control 
              type="text" 
              placeholder="Enter Title" 
              value={title}
              onChange={ (e) => {setTitle(e.target.value)}}
                />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Poster</Form.Label>
            <Form.Control 
              type="text" 
              placeholder="Enter Poster" 
              value={poster}
              onChange={ (e) => {setPoster(e.target.value)}}/>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Seasons</Form.Label>
            <Form.Control 
              type="text" 
              placeholder="Enter Seasons" 
              value={seasons}
              onChange={ (e) => {setSeasons(e.target.value)}}/>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
      </Form>
        
        <footer>
          <Footer/>
        </footer>
    </>
  )
}

        // <form onSubmit={handleAddShow}>
        //   <label htmlFor="title">Title 
        //     <input
        //       type="text"
        //       value={title}
        //       onChange={ (e) => {setTitle(e.target.value)}} />
        //   </label>
          
        //   <label htmlFor="poster">Poster 
        //     <input
        //       type="text"
        //       value={poster}
        //       onChange={ (e) => {setPoster(e.target.value)}} />
        //   </label>
        
        //   <label htmlFor="seasons">Seasons 
        //     <input
        //       type="text"
        //       value={seasons}
        //       onChange={ (e) => {setSeasons(e.target.value)}} />
        //   </label>
        //   <input type="submit" value="Add Show" />
        // </form>