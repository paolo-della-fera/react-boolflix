import { useState } from "react"
import MovieList from "./MovieList"

import axios from "axios"

// recupero chiave API dal file
const api_env = import.meta.env.VITE_API_KEY

function AppMain() {
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

            {/* searchbar */}
            <div>

                <form onSubmit={handleSubmit}>
                    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"
                        value={searchFilm}
                        onChange={(e) => setSearchFilm(e.target.value)}
                    />

                    <button className="btn btn-outline-success" type="submit">
                        Search
                    </button>
                </form>

            </div>

            <MovieList movies={film} />

        </>

    )
}

export default AppMain