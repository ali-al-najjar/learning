import React, { useState } from 'react';
import axios from 'axios';

const Register = () => {
  const [first_name, setFirstName] = useState('');
  const [last_name, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const[error,setError]=useState("");

  const handleFirstNameChange = (event) => {
    setFirstName(event.target.value);
  };
  const handleLastNameChange = (event) => {
    setLastName(event.target.value);
  };
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
              first_name: first_name,
              last_name: last_name,
              email: email,
              password: password
            };
    
              axios.post("http://localhost:8000/auth/register",data,{
              headers: {
                'Content-Type': 'application/json'
              }
              })
              .then((res) => {
                  console.log(res)
                  window.location.href="http://localhost:3000/"  
            }
              ).catch((err) => {
                  console.log(err);
              })
    }else(setError("Your password is malformed"))
    }else(setError("Your email is malformed"))
    }

  return (
    <form className = "form_container" onSubmit={handleSubmit}>
      <label>
        First Name: 
        <input
          type="text"
          name="firstName"
          value={first_name}
          onChange={handleFirstNameChange}
        />
      </label>
      <br />
      <label>
        Last Name: 
        <input
          type="text"
          name="lastName"
          value={last_name}
          onChange={handleLastNameChange}
        />
      </label>
      <br />
      <label>
        Email: 
        <input
          type="email"
          name="email"
          value={email}
          onChange={handleEmailChange}
        />
      </label>
      <br />
      <label>
        Password: 
        <input
          type="password"
          name="password"
          value={password}
          onChange={handlePasswordChange}
        />
      </label>
      <br />
      <div className = "error">{error}</div>
      <button className = "btn submit_button" type="submit">Submit</button>
      <div className="register_url">Already have an account? <a href="/">Login here</a></div>
    </form>
  );
};

export default Register;
