import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { faStar as faStarEmpty } from '@fortawesome/free-regular-svg-icons'

const flags = {
    "it": "/src/assets/italy.png",
    "en": "/src/assets/united-kingdom.png",
    "fr": "/src/assets/france.png",
    "es": "/src/assets/spain.png"
}

const stars = ['', '', '', '', '']


function MovieCard({ movie }) {

    // funzione per far apparire l'immagine con la bandiera 
    function getFlagEmoji() {

        if (flags[movie.original_language] !== undefined) {
            return <img src={flags[movie.original_language]} alt="" />
        } else {
            return movie.original_language
        }

    }

    // funzione per la conversione del voto da 1 a 10 a 5 stelline con arrotondamento per eccesso 
    function voteStars() {
        const vote = Math.ceil(movie.vote_average / 2)

        return stars.map((_, index) =>
            index < vote
                ? <FontAwesomeIcon icon={faStar} key={index} />
                : <FontAwesomeIcon icon={faStarEmpty} key={index} />
        )
    }

    return (

        <>

            {/* film e serie tv card */}
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">Titolo: {movie.title ? movie.title : movie.name}</h5>
                    <p className="card-text">Titolo Originale: {movie.original_title ? movie.original_title : movie.original_name}</p>
                    <p className="card-text">Lingua: {getFlagEmoji()}</p>
                    <p className="card-text">Voto: {voteStars()} </p>
                    <img src={`https://image.tmdb.org/t/p/w342${movie.poster_path}`} alt="" />
                </div>
            </div>

        </>

    )
}

export default MovieCard