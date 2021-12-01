import FilmCard from "../components/FilmCard"

export default function OtherPopular(props) {
    return (
        <section id="otherPopular">
            {props.films.map((film, index) => {
                return (
                    <FilmCard
                        key={index}
                        poster_path={`https://image.tmdb.org/t/p/w200${film.poster_path}`}
                        title={film.title}
                        genre_ids={film.genre_ids}
                        genreList={props.genreList}
                    />
                )
            })}
        </section>
    )
}