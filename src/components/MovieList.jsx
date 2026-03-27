import MovieCard from "./MovieCard"

function MovieList({ movies }) {




    return (

        <>

            <div className="row">

                {
                movies.map(movie => (
                    <div className="col-4 col-md-3 col-lg-2" key={movie.id}>
                        <MovieCard movie={movie} />
                    </div>
                ))
                }

            </div>

        </>

    )
}

export default MovieList