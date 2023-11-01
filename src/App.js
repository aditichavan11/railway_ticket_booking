
import Header from "./Components/Layout/Header"
import {BrowserRouter,Routes,Route} from "react-router-dom"; 
import Login from "./Components/Layout/Login";
import Signup from "./Components/Layout/Signup";


function App() {
  return (
  
    <div>
       <> 
      <BrowserRouter> 
      <Routes> 
        <Route exact path="/" element={<Header/>}/> 
        
        <Route exact path="Login" element={<Login/>}/>
        <Route exact path="Signup" element={<Signup/>}/>

        
      </Routes> 
      </BrowserRouter> 
      </> 
  
    </div>
    
  );
  
};

export default App;