export default function FilmCard(props) {
    return (
        <div className="film-card">

            <div className="film-card__img-container">
                <img src={props.poster_path} alt="poster du film" className="film-card__img" />
            </div>

            <h2 className="film-card__title">{props.title}</h2>

            {props.overview && <p className="film-card__overview">{props.overview}</p>}

            <div className="film-card__category-container">
                {props.genre_ids.map((id, index) => {
                    let category = props.genreList.find(genre => genre.id === id);
                    return <p key={index} className="film-card__category">{category.name}</p>
                })}
            </div>

        </div>
    )
}