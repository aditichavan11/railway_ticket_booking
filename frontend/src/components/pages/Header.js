// import classes from './Header.module.css'
import {useNavigate} from "react-router-dom"
// import Searchtrainform from './searchtrain.form';
import classes from './style.module.css'
import Navbar from "./Navbar";


function Header(){


// const navigate = useNavigate();
// function handleSubmit(event){
//   navigate("Login")
// }
// function handleSearch(event){
//     navigate("Signup")

    return(

        <div>

         <header className={classes.header}>
            <h1>सुलभ यात्रा - A Ticket Booking Site</h1>

            {/* <button>Contact Us</button>
            <button className="LoginBtn" onClick={handleSubmit}>LOGIN </button>
            <button className="SignupBtn" onClick={handleSearch}>SIGNUP </button>
              */}
        </header>
            {/* <Searchtrainform></Searchtrainform> */}
            {/* <Navbar/> */}
        
        </div>
    

    );
       

};

export default Header;