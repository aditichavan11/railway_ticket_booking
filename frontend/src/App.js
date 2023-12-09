import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Searchtrainform from "./components/pages/searchtrain.form.js";
import Header from "./components/pages/Header.js";
import Home from './components/pages/Home.js';
import background from "./images/img 2.png";
import Login from "./components/pages/Login.js";
import Signup from "./components/pages/Signup.js";
import Passengerf from "./components/pages/Passengerf.js";
import SeatBooking from "./components/pages/Seatbooking.js";
import Contact from"./components/pages/Contact.js";
import Payment from "./components/pages/Payment.js";
import eticket  from "./components/pages/eticket.js";
function App() {
  return (
  
   <div>

    <BrowserRouter>
    <Routes>


      <Route  actual path="/"element={<Home/>}/>
      <Route actual path="Header"element={<Header/>}/>
      <Route actual path="searchtrain.form"element={<Searchtrainform/>}/>
        <Route actual path="Login"element={<Login/>}/>
        <Route  actual path="Signup"element={<Signup/>}/>
        <Route actual path="Passengerf/:train_id" element={<Passengerf/>}/>
        <Route actual path="Seatbooking"element={<SeatBooking/>}/>
        <Route actual path="Contact"element={<Contact/>}/>
       <Route actual path="Payment"element={<Payment/>}/>
       <Route actual path="eticket"element={<eticket/>}/>


       </Routes>
       </BrowserRouter>

        
          
     
        
  


      </div> 
    )
  }
  
  
  
;

export default App;