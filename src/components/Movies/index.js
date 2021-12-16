import React from 'react';
import axios from 'axios';
import MyCard from '../MyCard';
import './index.css';

const Movies = () => {

    const [movies, setMovies] = React.useState([]);

    React.useEffect(() => {
        axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&sort_by=popularity.desc`)
            .then(res => {
                setMovies(res.data.results);
            })
            .catch(err => console.log(err));
    }, [])
    return (
        movies &&
        <div className='page_container'>
            {movies.map(movie =>
                <MyCard key={movie.id}
                    title={movie.original_title}
                    poster={movie.poster_path}
                />
            )}
        </div>
    )
}

export default Movies
