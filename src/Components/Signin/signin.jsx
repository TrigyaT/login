// import React, { useState } from "react";
// import './signin.css';


// import person_icon from '../Assets/person.png'
// import email_icon from '../Assets/email.png'
// import password_icon from '../Assets/password.png'
// import country_icon from '../Assets/country.png'
// import zip_icon from '../Assets/zip.png'

// const Login = () => {

//     const [action,setAction]=useState("Sign Up");

//     const handleSubmit = (event) => {
//       event.preventDefault(); // Prevent the default form submission behavior
    
//       // Access the form data
//       const email = event.target.elements.email.value;
//       const password = event.target.elements.password.value;
    
//       // Perform validation or data handling
//       // For example, you can send the form data to a server using AJAX or fetch
    
//       if (action === "Sign Up") {
//         alert("Successfully signed up!");
//       }
//     };



    
  
//   return(
//     <div className='container1'>

//       <form>
//         <div className='header1'>
//             <div className='text'>{action}</div> 
//             <div className='underline'></div> 
//         </div>

//         <div className="inputs">
//             <div className="input">
//             <img src={person_icon} alt="" />
//               <input type="text" placeholder='Name'/>
//             </div>
           

//         <div className="input">
//                 <img src={email_icon} alt="" />
//                 <input type="email" placeholder='Email Id'/>
//         </div>

//         <div className="input">
//           <img src={password_icon} alt="" />
//           <input type="password" placeholder='Password'/>
//          </div>

//        <div className="input">
//                 <img src={email_icon} alt="" />
//                 <input type="number" placeholder='Contact Number'/>
//         </div>

       
//           <div className="input">
//                 <img src={country_icon} alt="" />
//                 <input type="text" placeholder='Country'/>
//         </div>


        

//        <div className="input">
//                 <img src={zip_icon} alt="" />
//                 <input type="text" placeholder='Zip'/>
//         </div>

//         </div>


            
 
//   <div className="submit-container1">
//     <div className={action === "Sign Up" ? "submit gray" : "submit"} onClick={() => { setAction("Sign-Up") }}>Sign-Up</div>
//   </div>
    
// </form>
//     </div>


//   )
//   };
  

// export default Login


// import React, { useState } from "react";
// import './signin.css';


// import person_icon from '../Assets/person.png'
// import email_icon from '../Assets/email.png'
// import password_icon from '../Assets/password.png'
// import country_icon from '../Assets/country.png'
// import zip_icon from '../Assets/zip.png'

// const Signin = () => {

//     const [action,setAction]=useState("Sign Up");
//     const [email, setEmail] = useState("");
//     const [zip, setZip] = useState("");
//     const [error, setError] = useState(null);

//     const handleSubmit = (event) => {
//       event.preventDefault(); // Prevent the default form submission behavior
    
//       // Access the form data
//       const emailValue = event.target.elements.email.value;
//       const zipValue = event.target.elements.zip.value;
//       const password = event.target.elements.password.value;
    
//       if (!emailValue.includes('@')) {
//         setError("Email must contain @ symbol");
//       } else if (zipValue.length > 5 || isNaN(zipValue)) {
//         setError("Zip code must be a 5-digit number");
//       } else {
//         // Perform validation or data handling
//         // For example, you can send the form data to a server using AJAX or fetch
    
//         if (action === "Sign Up") {
//           alert("Successfully signed up!");
//         }
//       }
//     };
  

//       return(
//     <div className='container1'>

//       <form>
//         <div className='header1'>
//             <div className='text'>{action}</div> 
//             <div className='underline'></div> 
//         </div>

//         <div className="inputs">
//             <div className="input">
//             <img src={person_icon} alt="" />
//               <input type="text" placeholder='Name'/>
//             </div>
           

//         <div className="input">
//                 <img src={email_icon} alt="" />
//                 <input type="email" placeholder='Email Id'/>
//         </div>

//         <div className="input">
//           <img src={password_icon} alt="" />
//           <input type="password" placeholder='Password'/>
//          </div>

//        <div className="input">
//                 <img src={email_icon} alt="" />
//                 <input type="number" placeholder='Contact Number'/>
//         </div>
       
//           <div className="input">
//                 <img src={country_icon} alt="" />
//                 <input type="text" placeholder='Country'/>
//         </div>


        

//        <div className="input">
//                 <img src={zip_icon} alt="" />
//                 <input type="text" pattern="[0-9]{5}"  inputMode="numeric" placeholder='Zip'/>
//         </div>

//         </div>


            
 
//   <div className="submit-container1">
//     <div className={action === "Sign Up" ? "submit gray" : "submit"} onClick={() => { setAction("Sign Up") }}>Sign-Up</div>
//   </div>
    
// </form>
//     </div>


//   )
//   };
  

// export default Signin


import React, { useState } from "react";
import './signin.css';

import person_icon from '../Assets/person.png'
import email_icon from '../Assets/email.png'
import password_icon from '../Assets/password.png'
import country_icon from '../Assets/country.png'
import zip_icon from '../Assets/zip.png'

const Signin = () => {
  const [action, setAction] = useState("Sign Up");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [contact, setContact] = useState("");
  const [country, setCountry] = useState("");
  const [zip, setZip] = useState("");
  const [error, setError] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent the default form submission behavior

    // Perform validation
    if (!email.includes('@')) {
      setError("Email must contain @ symbol");
    } else if (zip.length !== 5 || isNaN(zip)) {
      setError("Zip code must be a 5-digit number");
    } else {
      // Perform validation or data handling
      // For example, you can send the form data to a server using AJAX or fetch

      setError(null); // Clear error message if validation passes
      alert("Successfully signed in!"); // Show success message
    }
  };

  return (
    <div className='container1'>
      <form onSubmit={handleSubmit}>
        <div className='header1'>
          <div className='text'>{action}</div>
          <div className='underline'></div>
        </div>

        <div className="inputs">
          <div className="input">
            <img src={person_icon} alt="" />
            <input
              type="text"
              placeholder='Name'
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div className="input">
            <img src={email_icon} alt="" />
            <input
              type="email"
              name="email"
              placeholder='Email Id'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="input">
            <img src={password_icon} alt="" />
            <input
              type="password"
              placeholder='Password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div className="input">
            <img src={email_icon} alt="" />
            <input
              type="number"
              placeholder='Contact Number'
              value={contact}
              onChange={(e) => setContact(e.target.value)}
            />
          </div>

          <div className="input">
            <img src={country_icon} alt="" />
            <input
              type="text"
              placeholder='Country'
              value={country}
              onChange={(e) => setCountry(e.target.value)}
            />
          </div>

          <div className="input">
            <img src={zip_icon} alt="" />
            <input
              type="text"
              name="zip"
              pattern="[0-9]{5}"
              inputMode="numeric"
              placeholder='Zip'
              value={zip}
              onChange={(e) => setZip(e.target.value)}
            />
          </div>

          {error && <div className="error">{error}</div>}
        </div>

        <div className="submit-container1">
          <button type="submit" className="submit">
            {action}
          </button>
        </div>
      </form>
    </div>
  )
};

export default Signin;
