// import React, { useState } from "react";
// import './login.css';


// import email_icon from '../Assets/email.png'
// import password_icon from '../Assets/password.png'


// const Login = () => {

//     const [action,setAction]=useState("Login");

//     const handleSubmit = (event) => {
//       event.preventDefault(); // Prevent the default form submission behavior
    
//       // Access the form data
//       const email = event.target.elements.email.value;
//       const password = event.target.elements.password.value;
    
//       // Perform validation or data handling
//       // For example, you can send the form data to a server using AJAX or fetch
    
//       if (action === "Sign Up") {
//         alert("Successfully signed up!");
//       } else if (action === "Login") {
//         alert("Successfully logged in!");
//       }
//     };

//   return(
//     <div className='container'>

//       <form className="Forms">
//         <div className='header'>
//             <div className='text'>{action}</div> 
//             <div className='underline'></div> 
//         </div>

//         <div className="inputs">
         
           

//         <div className="input">
//                 <img src={email_icon} alt="" />
//                 <input type="email" placeholder='Email Id'/>
//         </div>

//         <div className="input">
//           <img src={password_icon} alt="" />
//           <input type="password" placeholder='Password'/>
//          </div>

//         </div>

//         {action === "Login" && (
//         <div className="forgot-password">
//           Forgot Password?
//           <span onClick={() => { <a href="signin.jsx"></a> }}>Click Here</span>
//         </div>
//       )}


      
// {action === "Login" && (
//         <div className="have-account">
//           Already Have an Account??
//           <span onClick={() => { setAction("Have Account") }}>Click Here</span>
//         </div>
//       )}

            
        
// {action === "Sign Up" ? (
//   <div className="submit-container">
//     <div className={action === "Login" ? "submit gray" : "submit"} onClick={() => { setAction("Sign-Up") }}>Sign-Up</div>
//     <a href="loginpage.html" className="submit-link">Login</a>
//   </div>
// ) : (
//     <>
//     <button className="submit" onClick={() => { setAction("Sign-Up") }}>
//     <a href="loginpage.html">Submit</a>
//     </button></>
//     )}

//         {/* <div className="submit-container">
//         {action !== "Sign-Up" && (
//           <div className={action==="Login"?"submit gray":"submit"}
//            onClick={()=>{setAction("Sign-Up")}}>Sign-Up</div>
//         )}
//           <div className={action==="Sign Up"?"submit gray":"submit"}
//           onClick={()=>{setAction("Login")}}>Log-In</div>
//         </div> */}
//       </form>
     

//     </div>


  
//   );
// }

// export default Login


// import React, { useState } from "react";
// import './login.css';

// import email_icon from '../Assets/email.png'
// import password_icon from '../Assets/password.png'

// const Login = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [error, setError] = useState(null);


//   const handleSubmit = (event) => {
//     event.preventDefault();
//     if (!email.includes('@')) {
//       setError("Email must contain @ symbol");
//     } else {    

//     // Perform validation or data handling
//     // For example, you can send the form data to a server using AJAX or fetch

//     alert("Successfully logged in!");
//   };
// }

//   return (
//     <div className='container'>
//       <form className="Forms">
//         <div className='header'>
//           <div className='text'><h1>Login</h1></div>
//           <div className='underline'></div>
//         </div>

//         <div className="inputs">
//           <div className="input">
//             <img src={email_icon} alt="" />
//             <input type="email" value={email} 
//             onChange={(e) => setEmail(e.target.value)} placeholder='Email Id'/>
//           </div>

//           <div className="input">
//             <img src={password_icon} alt="" />
//             <input type="password" value={password}
//              onChange={(e) => setPassword(e.target.value)} placeholder='Password'/>
//           </div>
//         </div>

//         <div className="forgot-password">
//           Forgot Password?
//           <span onClick={() => alert("Go to your email and click on the reset button to update your password!")}>Click Here</span>
//         </div>

//         <button className="submit" onClick={handleSubmit}>Submit</button>
//       </form>
//     </div>
//   );
// }

// export default Login;


import React, { useState } from "react";
import { useHistory } from "react-router-dom"; // Import useHistory from react-router-dom
import './login.css';

import email_icon from '../Assets/email.png'
import password_icon from '../Assets/password.png'

const Login = () => {
  // const history = useHistory(); 
  // Initialize useHistory hook

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    
    // Basic email validation
    if (!email.includes('@')) {
      setError("Email must contain @ symbol");
    } else if (password === "") {
      setError("Please enter your password");
    } else {
      // Clear any previous errors
      setError(null);

      // Simulate login success
      alert("Successfully logged in!");

      // Redirect to dashboard (example path '/dashboard')
      // history.push("/dashboard");
    }
  };

  return (
    <div className='container'>
      <form className="Forms" onSubmit={handleSubmit}>
        <div className='header'>
          <div className='text'><h1>Login</h1></div>
          <div className='underline'></div>
        </div>

        <div className="inputs">
          <div className="input">
            <img src={email_icon} alt="" />
            <input 
              type="email" 
              value={email} 
              onChange={(e) => setEmail(e.target.value)} 
              placeholder='Email Id'
              required
            />
          </div>

          <div className="input">
            <img src={password_icon} alt="" />
            <input 
              type="password" 
              value={password} 
              onChange={(e) => setPassword(e.target.value)} 
              placeholder='Password'
              required
            />
          </div>
        </div>

        {error && <div className="error">{error}</div>}

        <div className="forgot-password">
          Forgot Password?
          <span onClick={() => alert("Go to your email and click on the reset button to update your password!")}>Click Here</span>
        </div>

        <button className="submit" type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Login;
