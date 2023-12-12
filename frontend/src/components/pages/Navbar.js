import {useNavigate} from "react-router-dom";
import classes from'./style.module.css';

function Navbar(){

    
const navigate = useNavigate();
function handleSubmit(event){
  navigate("Login")
}
function handleSearch(event){
    navigate("Signup")
}
function handlecontact(event){
    navigate("Contact")
}
    return (
        <div>
        <div >
        <button className={classes.Navcontact} onClick={handlecontact}>Contact Us</button></div>
        <div>
        <button className={classes.Navlogin} onClick={handleSubmit}>LOGIN/SIGNUP </button></div>
       </div>
         
    )
}
export default Navbar;