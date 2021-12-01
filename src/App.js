import { useEffect, useState } from 'react';
import { Fragment } from 'react/cjs/react.production.min';
import './css/App.css';
import OtherPopular from './sections/OtherPopular';
import TenMostPopular from './sections/TenMostPopular';

export default function App() {
    // Variable pour stocker tous les films populaires
    const [allFilms, setAllFilms] = useState([]);
    // Variable pour stocker la liste des genres de film
    const [genreList, setGenreList] = useState([]);

    // Fonction pour récupérer tous les films populaires
    async function getAllPopularFilms() {
        // Variable temporaire pour stocker les films dans la boucle
        let data = [];
        // Boucle d'appel à l'API, besoin de récupérer 40 films donc -> besoin des 2 premières pages (20 par pages)
        for (let page = 1; page < 3; page++) {
            // Appel de l'API
            let films = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=c89646cb9c2f9f7a6144c074fff0e9c7&language=fr-FR&page=${page}`);
            // Passage au format JSON
            let filmsToJSON = await films.json();

            // Rajoute les données voulu au tableau temporaire existant
            data = data.concat(filmsToJSON.results); // Besoin seulement de "results"
        }

        // Ajout des films dans notre variable allFilms
        setAllFilms(data);
    }

    // Fonction pour récupérer la liste des genres
    async function getGenreList() {
        // Appel de l'API
        const list = await fetch('https://api.themoviedb.org/3/genre/movie/list?api_key=c89646cb9c2f9f7a6144c074fff0e9c7&language=fr-FR');
        // Passage au format JSON
        const listToJSON = await list.json();

        // Stock de la liste dans notre variable genreList
        setGenreList(listToJSON.genres); // Besoin seulement de "genres"
    }

    // useEffect permet de se lancer au chargement de la page, avec un tableau vide en deuxième argument il permet de ne se lancer qu'une seule fois à chaque refresh ou render
    useEffect(() => {
        getAllPopularFilms();
        getGenreList();
    }, []);

    return (
        <Fragment>
            
            <TenMostPopular
                films={allFilms.slice(0,10)}
                genreList={genreList}
            />
            
            <OtherPopular
                films={allFilms.slice(10, 40)}
                genreList={genreList}
            />
        
        </Fragment>
    );
}