import classes from './Header.module.css'

import {useNavigate} from "react-router-dom"
import Searchtrainform from './Searchtrain.form';

// import Trainimage from '../../assets/train.png'
function Header(){

    const navigate = useNavigate();

    function handleSubmit(event){
        navigate("Login")
    };
    function handleClick(event){
        navigate("Signup")
    };
    return(
        <>
         <header className={classes.header}>
            <h1>Sulabh Yatra - A Ticket Booking Site</h1>
            <button>Contact Us</button>
            <button onClick={handleSubmit}>Login</button>
            <button onClick={handleClick}>SignUp</button>

            
             
        </header>
        <Searchtrainform/>
        </>    
        

    

    );
       

};

export default Header;