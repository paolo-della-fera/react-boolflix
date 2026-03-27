import AppHeader from "./components/AppHeader"
import AppMain from "./components/AppMain"
import { useState } from "react"

import axios from "axios"

const api_env = import.meta.env.VITE_API_KEY


function App() {

  const [searchFilm, setSearchFilm] = useState('')
  const [film, setFilm] = useState([])

  const api_url_movies = `https://api.themoviedb.org/3/search/movie?api_key=${api_env}&query=${searchFilm}`
  const api_url_serie_tv = `https://api.themoviedb.org/3/search/tv?api_key=${api_env}&query=${searchFilm}`


  function handleSubmit(e) {
    e.preventDefault()

    // chiamate API  
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
      <AppHeader searchFilm={searchFilm} setSearchFilm={setSearchFilm} onSubmit={handleSubmit}/>
      <AppMain movies={film}/>
    </>
  )
}

export default App
