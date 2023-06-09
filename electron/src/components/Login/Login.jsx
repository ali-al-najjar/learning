import React, { useState } from 'react';
import axios from "axios"


function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState('');
  const[error,setError]=useState("");

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const validateEmail=(email) =>{
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);}

  const validatePassword=(password)=> {
        const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
        return passwordRegex.test(password);
      }


  const handleSubmit = (e) => {
    e.preventDefault()
    if (validateEmail(email)){
      if(validatePassword(password)){
        const data = {
          email: email,
          password: password
        };

          axios.post("http://localhost:8000/auth/login",data,{
          headers: {
            'Content-Type': 'application/json'
          }
          })
          .then((res) => {
              console.log(res.data)
              localStorage.setItem('token',res.data.token);
              if (res.data.user_role == "admin"){
                // window.location.href="http://localhost:3000/dashboard" 
              }else{
              // localStorage.setItem('email',res.data.user.email);
              window.location.href="http://localhost:3000/courses"  }
        }
          ).catch((err) => {
              console.log(err);
          })
}else(setError("Your password is malformed"))
}else(setError("Your email is malformed"))
}




  return (
    <form className = "form_container" onSubmit={handleSubmit}>
      <div>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={handleEmailChange}
        />
      </div>
      <div>
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={handlePasswordChange}
        />
      </div>
      <div className = "error">{error}</div>
      <div className="register_url">Don't have an account? <a href="/register">Register here</a></div>
      <button className = "btn submit_button" type="submit">Log In</button>
    </form>
  );
}

export default Login;
