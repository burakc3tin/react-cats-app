 
import {React,useEffect} from "react";
 

function App() {

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