import React, { useState } from "react";
import './login.css';


import person_icon from '../Assets/person.png'
import email_icon from '../Assets/email.png'
import password_icon from '../Assets/password.png'
import country_icon from '../Assets/country.png'
import zip_icon from '../Assets/zip.png'

const Login = () => {

    const [action,setAction]=useState("Login");

    const handleSubmit = (event) => {
      event.preventDefault(); // Prevent the default form submission behavior
    
      // Access the form data
      const email = event.target.elements.email.value;
      const password = event.target.elements.password.value;
    
      // Perform validation or data handling
      // For example, you can send the form data to a server using AJAX or fetch
    
      if (action === "Sign Up") {
        alert("Successfully signed up!");
      } else if (action === "Login") {
        alert("Successfully logged in!");
      }
    };
  
  return(
    <div className='container'>

      <form>
        <div className='header'>
            <div className='text'>{action}</div> 
            <div className='underline'></div> 
        </div>

        <div className="inputs">
          {action==="Login"?
          <div></div>:<div className="input">
            <img src={person_icon} alt="" />
              <input type="text" placeholder='Name'/>
            </div>}
           

        <div className="input">
                <img src={email_icon} alt="" />
                <input type="email" placeholder='Email Id'/>
        </div>

        <div className="input">
          <img src={password_icon} alt="" />
          <input type="password" placeholder='Password'/>
         </div>

         {action==="Login"?
          <div></div>:<div className="input">
                <img src={email_icon} alt="" />
                <input type="number" placeholder='Contact Number'/>
        </div>}

        {action==="Login"?
          <div></div>:<div className="input">
                <img src={country_icon} alt="" />
                <input type="text" placeholder='Country'/>
        </div>}


        

        {action==="Login"?
          <div></div>:<div className="input">
                <img src={zip_icon} alt="" />
                <input type="text" placeholder='Zip'/>
        </div>}

        </div>

        {action === "Login" && (
        <div className="forgot-password">
          Forgot Password?
          <span onClick={() => { setAction("Forgot Password") }}>Click Here</span>
        </div>
      )}

            
        
{action === "Sign Up" ? (
  <div className="submit-container">
    <div className={action === "Login" ? "submit gray" : "submit"} onClick={() => { setAction("Sign-Up") }}>Sign-Up</div>
    <a href="loginpage.html" className="submit-link">Login</a>
  </div>
) : (
    <>
    <button className="submit" onClick={() => { setAction("Sign-Up") }}>
    <a href="loginpage.html">Submit</a>
    </button></>
    )}

        <div className="submit-container">
        {action !== "Sign-Up" && (
          <div className={action==="Login"?"submit gray":"submit"}
           onClick={()=>{setAction("Sign-Up")}}>Sign-Up</div>
        )}
          <div className={action==="Sign Up"?"submit gray":"submit"}
          onClick={()=>{setAction("Login")}}>Log-In</div>
        </div>
      </form>
     

    </div>


  
  );
}

export default Login
