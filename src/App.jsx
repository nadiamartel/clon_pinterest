import './App.css';
import { useEffect, useRef, useState } from 'react';
import { createApi } from "unsplash-js";
import Navbar from './components/Navbar';
import Card from './components/Card';
import Masonry from '@mui/lab/Masonry';
import InfiniteScroll from 'react-infinite-scroll-component';
import { useBookStore } from './store/bookStore';


const api = createApi({
  // Don't forget to set your access token here!
  // See https://unsplash.com/developers
  accessKey: import.meta.env.VITE_ACCESS_KEY
});


function App() {

  const [data, setData] = useState([]);
  
  let index = useRef(1); //useRef para que no vuelva a renderizarze!
  
  const valueRef = useBookStore(state => state.value) //para recuperar el EG
  
  console.log("data: ", data);
  console.log("valueRef", valueRef);

  useEffect(() => {
    api.search
      .getPhotos({ query: valueRef, perPage: 20, page: index.current })
      .then(result => {
        setData(data.concat(result.response.results)); //concatenar para no borrar lo anterior
      })
      .catch(() => {
        console.log("algo salio mal!");
      });
  }, [valueRef]);

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
        // loader={<h4>Loading...</h4>}
      >
      </InfiniteScroll>
      <Masonry 
        columns={{ xs:2, sm:3, md:5 }} 
        spacing={{ xs:1, sm:2, md:3 }} 
        className='masonry'>
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
