import './App.css';
import { useEffect, useState } from 'react';
import { createApi } from "unsplash-js";
import Navbar from './components/Navbar';
import Masonry from '@mui/lab/Masonry';


const api = createApi({
  // Don't forget to set your access token here!
  // See https://unsplash.com/developers
  accessKey: "KmBSAXr0mhOY3_Uxy_0-LCJ00lSAJxk47yGHh-I5qtY"
});


function App() {

  const [data, setData] = useState([]);
  console.log("data: ", data);

  useEffect(() => {
    api.search
      .getPhotos({ query: "cat", perPage: 20 })
      .then(result => {
        setData(result.response.results);
      })
      .catch(() => {
        console.log("something went wrong!");
      });
  }, []);

  return (
    <div>
      <h2>Buen dia!</h2>
      <Navbar />
      <Masonry columns={4} spacing={2}>
        {
          data.map(item => (
            <img key={item.id} src={item.urls.small} alt={item.description} />
          ))
        }
      </Masonry>
    </div>
  )
}

export default App
