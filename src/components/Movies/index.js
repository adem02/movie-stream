import React from 'react';
import axios from 'axios';
import MyCard from '../MyCard';
import './index.css';
import InfiniteScroll from 'react-infinite-scroll-component';

const Movies = () => {

    const [movies, setMovies] = React.useState([]);
    const [page, setPage] = React.useState(1);

    const fetchData = () => {
        axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&sort_by=popularity.desc&page=${page}`)
            .then(res => {
                setMovies([...movies, ...res.data.results]);
                setPage(page + 1);
            })
            .catch(err => console.log(err));
    }

    React.useEffect(() => {
        fetchData();
    }, [])

    return (
        <InfiniteScroll
            dataLength={movies.length}
            next={fetchData}
            hasMore={true}
            loader={<h4>Loading...</h4>}
            endMessage={
                <p style={{ textAlign: 'center' }}>
                    <b>Yay! You have seen it all</b>
                </p>
            }
        >
            <div className='page_container'>
                {movies && movies.map(movie =>
                    <MyCard key={movie.id}
                        data={movie}
                    />
                )}
            </div>
        </InfiniteScroll>

    )
}

export default Movies
