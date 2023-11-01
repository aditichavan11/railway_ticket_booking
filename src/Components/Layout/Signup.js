
const Signup = () => {
    return (
        <div>
       
        
        
        <h1 className="headersigninTitle"> Sign up</h1>
         
        <p className="FirstName"> FIRST NAME</p>
         <input 
          type="text"
          placeholder=""
          className="FirstNameInput"
          />
<p className="LastName"> LAST NAME</p>
         <input 
          type="text"
          placeholder=""
          className="LastNameInput"
          />

<p className="Phoneno"> PHONE NO</p>
         <input 
          type="Number"
          placeholder=""
          className="PhonenoInput"
          />
<p className="Email"> EMAIL ID  </p>
         <input 
          type="email"
          placeholder=""
          className="EmailInput"
          />



        <p className="UserName"> USERNAME</p>
         <input type="text" placeholder="" className="UserNameInput"/>

         <p className="Password">PASSWORD </p>
         <input type="password" placeholder="" show = "*" className="PasswordInput"/>
        
            <button className="SubmitBtn" >SUBMIT </button>
       
      

    </div>
    )
          
  
}

export default Signup