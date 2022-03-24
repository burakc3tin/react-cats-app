 
import {React,useEffect,useState} from "react";
 

function App() {

  const [image,setImage] = useState([]);
  
  useEffect(()=>{

    
  },[])

  return (
    <div style={styles.mainFrame} >
     

    <img  src="https://via.placeholder.com/350x150"/>

    </div>
  );
}

const styles = {
 mainFrame : {
  display:'flex',
  alignItems:'center',
  justifyContent:'center',
  height: "100vh"
 }
};

export default App;