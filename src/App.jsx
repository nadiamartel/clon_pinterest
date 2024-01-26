import './App.css';
import { useEffect, useRef, useState } from 'react';
import { createApi } from "unsplash-js";
import Navbar from './components/Navbar';
import Card from './components/card';
import Masonry from '@mui/lab/Masonry';
import InfiniteScroll from 'react-infinite-scroll-component';


const api = createApi({
  // Don't forget to set your access token here!
  // See https://unsplash.com/developers
  accessKey: "KmBSAXr0mhOY3_Uxy_0-LCJ00lSAJxk47yGHh-I5qtY"
});


function App() {

  const [data, setData] = useState([]);
  console.log("data: ", data);

  const index = useRef(1);

  useEffect(() => {
    api.search
      .getPhotos({ query: "cat", perPage: 20, page: index.current })
      .then(result => {
        setData(data.concat(result.response.results));
      })
      .catch(() => {
        console.log("something went wrong!");
      });
  }, []);

  const fetchData = () =>{
    index.current = index.current + 1;
  }

  return (
    <div>
      <Navbar />
      <InfiniteScroll
        dataLength={data.length} //This is important field to render the next data
        next={fetchData}
        hasMore={true}
        loader={<h4>Loading...</h4>}
      >
      </InfiniteScroll>
      <Masonry columns={4} spacing={2} className='masonry'>
        {
          data.map(item => (
            <Card key={item.id} item={item} />
          ))
        }
      </Masonry>
    </div>
  )
}

export default App
