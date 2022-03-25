import axios from "axios";
import { React, useEffect, useState } from "react";

function App() {

  const [isLoading, setLoading] = useState(true);
  const [image, setImage] = useState([]);

  useEffect(() => {
    axios.get("https://api.thecatapi.com/v1/images/search").then(response => {
      setImage(response);
      setLoading(false);
      console.log(image.data[0])
    });
  }, []);


  if (isLoading) {
    return <div className="App">Loading...</div>;
  } //Burası loader ekranı


  return (
    <div style={styles.mainFrame} >
      Test
   

      <img src={image.data[0].url} />

    </div>
  );
}

const styles = {
  mainFrame: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: "100vh"
  }
};

export default App;