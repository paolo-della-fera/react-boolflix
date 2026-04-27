import MovieCard from "./MovieCard"

function MovieList({ movies }) {




    return (

        <>
        
            <div className="container">

                <div className="row">

                    {
                        movies.map(movie => (
                            <div className="col-12 col-md-3 col-lg-2" key={movie.id}>
                                <MovieCard movie={movie} />
                            </div>
                        ))
                    }

                </div>

            </div>

        </>

    )
}

export default MovieList