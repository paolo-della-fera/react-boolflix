const flags = {
    "it": "/src/assets/italy.png",
    "en": "/src/assets/united-kingdom.png",
    "fr": "/src/assets/france.png",
    "es": "/src/assets/spain.png"
}


function MovieCard({ movie }) {

    function getFlagEmoji() {

        if (flags[movie.original_language] !== undefined) {
            return <img src={flags[movie.original_language]}alt = "" />
        } else {
            return movie.original_language
        }

    }

    return (

        <>

            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">Titolo: {movie.title ? movie.title : movie.name}</h5>
                    <p className="card-text">Titolo Originale: {movie.original_title ? movie.original_title : movie.original_name}</p>
                    <p className="card-text">Lingua: {getFlagEmoji()}</p>
                    <p className="card-text">Voto: {movie.vote_average}</p>
                </div>
            </div>

        </>

    )
}

export default MovieCard