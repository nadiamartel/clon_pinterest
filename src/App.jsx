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
      <Masonry columns={4} spacing={2} className='masonry'>
        {
          data.map(item => (
            <div key={item.id} className='item'>
              <div className='imagen'>
                <img src={item.urls.small} alt={item.description} />
              </div>
              <p>{item.description}</p>
              <div>
                <img  className='usuario' src={item.user.profile_image.small} alt="" />
                <span>{item.user.name}</span>
              </div>
            </div>
          ))
        }
      </Masonry>
    </div>
  )
}

export default App
