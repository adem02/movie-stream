import React from 'react'
import axios from 'axios';
import MyCard from '../MyCard';
import './index.css';


const Series = () => {
    const [series, setSeries] = React.useState([]);

    React.useEffect(() => {
        axios.get(`https://api.themoviedb.org/3/discover/tv?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&sort_by=popularity.desc`)
            .then(res => {
                setSeries(res.data.results);
            })
            .catch(err => console.log(err));
    }, [])
    return (
        series &&
        <div className='page_container'>
            {series.map(serie =>
                <MyCard key={serie.id}
                    title={serie.original_title}
                    poster={serie.poster_path} />
            )}
        </div>
    )
}

export default Series
