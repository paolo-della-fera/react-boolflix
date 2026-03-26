import { useState } from "react"
import MovieList from "./MovieList"

import axios from "axios"

const api_env = import.meta.env.VITE_API_KEY

function AppMain() {
    const [searchFilm, setSearchFilm] = useState('')
    const [film, setFilm] = useState([])

    const api_url = `https://api.themoviedb.org/3/search/movie?api_key=${api_env}&query=${searchFilm}`


    function handleSubmit(e) {
        e.preventDefault()
        axios.get(api_url)
            .then(res => setFilm(res.data.results))
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