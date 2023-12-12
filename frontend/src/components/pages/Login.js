import {useNavigate} from "react-router-dom";
import { useEffect, useState } from 'react';
import classes from'../pages/style.module.css'
import Header from './Header'
import {Link} from'react-router-dom'


const Login = () => {

   
    const navigate = useNavigate();
    //function handleClick(event){
     // navigte("/Home")
    // };
    const [logininfo, setlogininfo] = useState(null)

// useEffect(()=>{
// const fetchlogininfo = async()=>{
//     const response = await fetch("/login")
//     const json = await response.json()

//     if (response.ok){
//         setlogininfo(json)
//     }

// }
// fetchlogininfo()
// }, [])

    const [username, setusername] = useState('');
    const [password, setpassword] = useState('');
    const [error, setError] = useState(null);


    const handleSubmit = async(e)=>{
      e.preventDefault()

    //   const detail = {username, password}

      const response = await fetch('http://localhost:8000/api/login', {
          method:'POST',
          body: JSON.stringify({username, password}),
          headers: {
              'Content-Type':'application/json',
              'Accept': 'application/json'
          }
      }) 
      const json = await response.json

      if(!response.ok){
          setError(json.error)
      }
      if (response.ok){
          setusername('')
          setpassword('')
          setError(null)
          alert("Logged In Successfully!")
        //   navigate("/searchtrainform")
          console.log('login details added', json)
      }

  }


     return(

      <div className={classes.header}>

         <Header></Header>
      

        <div className={classes.Loginbody}>
        
        <h1 className="loginTitle"> <u>USER LOGIN</u></h1>

        <form onSubmit={handleSubmit}>

        
        <p className="username"> USERNAME</p>
         <input type="text"placeholder=""  name="username"
            onChange={(e)=> setusername(e.target.value)}
            value={username}/>

         <p className="password" >PASSWORD </p>
         <input type="password" show="*" placeholder="" name="password"
            onChange={(e)=> setpassword(e.target.value)}
            value={password}
         />
        <h5>
          If not login? <Link to="/Signup">Create account here</Link> {/* Add Link to Signup Page */}
        </h5>
       <button className={classes.LoginBtn} type="submit">Login</button>
       </form>
       
      </div>
    </div>
    )
          
  
    };

export default Login