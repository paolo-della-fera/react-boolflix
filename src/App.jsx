import AppHeader from "./components/AppHeader"
import AppMain from "./components/AppMain"
import { useState } from "react"
import axios from "axios"


const API_KEY = import.meta.env.VITE_API_KEY


function App() {
  const [searchFilm, setSearchFilm] = useState('')
  const [film, setFilm] = useState([])


  function handleSubmit(e) {
    e.preventDefault()

    
    const api_url_movies = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${searchFilm}`
    const api_url_serie_tv = `https://api.themoviedb.org/3/search/tv?api_key=${API_KEY}&query=${searchFilm}`


    axios.get(api_url_movies)
      .then(res1 => {
        axios.get(api_url_serie_tv)
          .then(res2 => {
            setFilm([...res1.data.results, ...res2.data.results])
          })
      })
      
  }

  return (
    <>
      <AppHeader searchFilm={searchFilm} setSearchFilm={setSearchFilm} onSubmit={handleSubmit} />
      <AppMain movies={film} />
    </>
  )
}

export default App