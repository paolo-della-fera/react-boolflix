import MovieCard from "./MovieCard"

function MovieList({ movies }) {




    return (

        <>

            <div>

                {/* iteriamo ogno componente della prop passata */}
                {
                    movies.map(movie => <MovieCard key={movie.id} movie={movie} />)
                }
                
            </div>

        </>

    )
}

export default MovieList