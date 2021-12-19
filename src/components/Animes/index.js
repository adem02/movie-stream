import React from 'react';
import axios from 'axios';
import MyCard from '../MyCard';
import './index.css';
import InfiniteScroll from 'react-infinite-scroll-component';

const Animes = () => {

    const [animes, setAnimes] = React.useState([]);
    const [page, setPage] = React.useState(1);


    const fetchData = () => {
        axios.get(`https://api.themoviedb.org/3/discover/tv?api_key=99494842cd79cda18f8359823a43a548&language=en-US&sort_by=popularity.desc&page=${page}&with_genres=16`)
            .then(res => {
                setAnimes([...animes, ...res.data.results]);
                setPage(page + 1);
            })
            .catch(err => console.log(err));
    }

    React.useEffect(() => {
        fetchData();
    }, [])
    return (
        <InfiniteScroll
            dataLength={animes.length}
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
                {animes && animes.map(anime =>
                    <MyCard key={anime.id}
                        data={anime} />
                )}
            </div>
        </InfiniteScroll>
    )
}

export default Animes