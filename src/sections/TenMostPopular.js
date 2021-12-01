import FilmCard from "../components/FilmCard"

export default function TenMostPopular(props) {
    return (
        <section id="tenMostPopular">
            {props.films.map((film, index) => {
                return (
                    <FilmCard
                        key={index}
                        poster_path={`https://image.tmdb.org/t/p/w200${film.poster_path}`}
                        title={film.title}
                        overview={film.overview.slice(0, 120)}
                        genre_ids={film.genre_ids}
                        genreList={props.genreList}
                    />
                )
            })}
        </section>
    )
}