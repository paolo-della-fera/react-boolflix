

function AppHeader({ searchFilm, setSearchFilm, onSubmit }) {



    return (

        <header>

            {/* searchbar */}
            <nav className="navbar  px-4">

                <a className="navbar-brand fw-bold fs-1">
                    Boolflix
                </a>

                <form className="d-flex" onSubmit={onSubmit}>

                    <input
                        className="form-control me-2"
                        type="search"
                        placeholder="Cerca film o serie..."
                        value={searchFilm}
                        onChange={(e) => setSearchFilm(e.target.value)}
                    />
                    
                    <button className="btn" type="submit">
                        Search
                    </button>

                </form>

            </nav>

        </header>

    )
}

export default AppHeader