import React from 'react';
import axios from 'axios';
import MyCard from '../MyCard';
import './index.css';

const Animes = () => {

    const [animes, setAnimes] = React.useState([]);

    React.useEffect(() => {
        axios.get(`https://api.themoviedb.org/3/discover/tv?api_key=99494842cd79cda18f8359823a43a548&language=en-US&sort_by=popularity.desc&with_genres=16`)
            .then(res => {
                setAnimes(res.data.results);
            })
            .catch(err => console.log(err));
    }, [])
    return (
        animes &&
        <div className='page_container'>
            {animes.map(anime =>
                <MyCard key={anime.id}
                    title={anime.original_title}
                    poster={anime.poster_path} />
            )}
        </div>
    )
}

export default Animes