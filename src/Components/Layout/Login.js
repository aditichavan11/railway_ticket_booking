
import {useNavigate} from "react-router-dom"


const Login = () => {
    const navigate = useNavigate();
        function handleSubmit(event){
                navigate("Seatbooking")
            };
     return (
        <div>
        
        <h1 className="loginTitle"> USER LOGIN</h1>


        <p className="username"
        > USERNAME</p>
         <input 
          type="text"
          placeholder=""
          className="UserNameInput"
          />

         <p className="password"
         >PASSWORD </p>
         <input type="password" placeholder="" show="*" className="PasswordInput"/>
        
       <button className="LoginBtn" onClick={handleSubmit}>Login</button>
       
      

    </div>
    )
          
  
    }

export default Login