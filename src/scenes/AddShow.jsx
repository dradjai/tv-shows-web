import { useState } from "react"
import { useNavigate, userNavigate } from "react-router-dom";

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
      <h2>AddShow</h2>
      <form onSubmit={handleAddShow}>
        <label htmlFor="title">Title 
          <input
            type="text"
            value={title}
            onChange={ (e) => {setTitle(e.target.value)}} />
        </label>

        <label htmlFor="poster">Poster 
          <input
            type="text"
            value={poster}
            onChange={ (e) => {setPoster(e.target.value)}} />
        </label>

        <label htmlFor="seasons">Seasons 
          <input
            type="text"
            value={seasons}
            onChange={ (e) => {setSeasons(e.target.value)}} />
        </label>
        <input type="submit" value="Add Show" />
      </form>
    </>
  )
}