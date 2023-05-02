import React from 'react'
import './login.scss'
import { useNavigate } from 'react-router-dom';
import {useState} from 'react'


function Login() {
 const navigate= useNavigate();
  const gotoContact=() =>{
    navigate("/register");
  }

  const [user,setUser]= useState({
    email:"",
    password:""
 });

 let name,value;
 const handleInputs = (e)=>{
     console.log(e)
     name=e.target.name;
     value=e.target.value;
     setUser({...user,[name]:value})
   }

 const Postdata = async(e)=>{
     e.preventDefault();
     const {email,password} = user;
    const res = await fetch("https://eltimus-backend.onrender.com/login-user",{
     method:"POST",
     headers:{
       "Content-Type" : "application/json"
     },
     body:JSON.stringify({
         email,password
     })
    })

    const data = await res.json();
    console.log(data)
    if(data.success === false){
     window.alert("invalid Username/password")
    }else{
       window.alert("successfull Login")
       navigate("/Instructions");
    }

 }
  return (

    <div className='form-center'>
      <div className="login mt-5">
        <label className='signin'>PLAYER LOG-IN</label>
        <form id="login" method="get" action="login.php">
          <label className='mt-3'><b>Email-Id
          </b>
          </label>
          <input type="email" name="email" id="Uname" placeholder="Email-Id" className='mt-1 mr-5 w-100' value={user.email} onChange={handleInputs}/>
          <br></br>
          <label className='mt-2'><b>Password
          </b>
          </label>
          <input type="Password" name="password" id="Pass" placeholder="Password" className='mt-1 w-100' value={user.password} onChange={handleInputs}/>
          <br></br>
          <br></br>
          <input type="checkbox" id="check" />
          <span>Remember me</span>
          <br></br>
          <button type="button" className="btn btn-primary mt-2" onClick={Postdata}>Submit</button>
          <p className='text-white'>New User? <button className='btn btn-primary btn-sm' onClick={()=>{gotoContact()}}>Click Here</button>  </p>
        </form>
      </div>
    </div>
  )
}

export default Login
