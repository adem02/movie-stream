import React from 'react'
import axios from 'axios';
import MyCard from '../MyCard';
import './index.css';
import InfiniteScroll from 'react-infinite-scroll-component';



const Series = () => {
    const [series, setSeries] = React.useState([]);
    const [page, setPage] = React.useState(1);


    const fetchData = () => {
        axios.get(`https://api.themoviedb.org/3/discover/tv?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&sort_by=popularity.desc&page=${page}`)
            .then(res => {
                setSeries([...series, ...res.data.results]);
                setPage(page + 1);
            })
            .catch(err => console.log(err));
    }

    React.useEffect(() => {
        fetchData();
    }, [])

    return (
        <InfiniteScroll
            dataLength={series.length}
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
                {series && series.map(serie =>
                    <MyCard key={serie.id}
                        data={serie} />
                )}
            </div>
        </InfiniteScroll>
    )
}

export default Series
