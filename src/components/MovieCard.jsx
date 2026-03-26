function MovieCard({ movie }) {


    return (

        <>

            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">Titolo: {movie.title}</h5>
                    <p className="card-text">Titolo Originale: {movie.original_title}</p>
                    <p className="card-text">Lingua: {movie.original_language}</p>
                    <p className="card-text">Voto: {movie.vote_average}</p>
                </div>
            </div>

        </>

    )
}

export default MovieCard