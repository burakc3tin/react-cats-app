import axios from "axios";
import { React, useEffect, useState } from "react";
import "./image.css";
import cat1 from "./cat1.png";
import cat2 from "./cat2.png";
import Loader from "./Loader";
import $ from 'jquery'

function App() {

  const [isLoading, setLoading] = useState(true);
  const [image, setImage] = useState([]);
  const [catImage, setCatImage] = useState(cat1);

  useEffect(() => {
  
  catsChange();
  }, []);

  const catsChange = async () => {
    setLoading(true);

   await axios.get("https://api.thecatapi.com/v1/images/search").then(response => {
      setImage(response);
      setLoading(false);
       
      // $("#catsChange").hover(function(){
      //   setCatsName("cat2")
      // });
       
    });
  }
  
const loaderChange = () => {

}

  if (isLoading) {
    return <Loader/>;
  } // loader ekranı

   
  

  return (
    <div style={styles.mainFrame} >
     
      <img src={image.data[0].url} className ="img-fluid imageMax" alt="Responsive image" />
      <img src={catImage} className ="catImage" alt="Responsive image" onClick={catsChange} id="catsChange" 
      onMouseOver={()=>setCatImage(cat2)}
      onMouseOut={()=>setCatImage(cat1)}
      />
      {/* <img src={cat2} class="img-fluid catImage" alt="Responsive image" /> */}

    </div>
  );
}

const styles = {
  mainFrame: {
    display: 'flex',
    flexDirection:"column",
    alignItems: 'center',
    justifyContent: 'center',
    height: "100vh"
  }
};

export default App;