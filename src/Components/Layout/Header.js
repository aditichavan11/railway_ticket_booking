import classes from './Header.module.css'

// import Trainimage from '../../assets/train.png'
function Header(){
    return(
         <header className={classes.header}>
            <h1>Sulabh Yatra - A Ticket Booking Site</h1>
            <button>Contact Us</button>
            <button>Login</button>
            
             
        </header>
            
        

    

    );
       

};

export default Header;