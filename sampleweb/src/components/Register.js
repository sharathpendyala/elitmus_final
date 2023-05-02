import React,{useState} from 'react'
import './Resgister.scss'
import {useNavigate} from 'react-router-dom'

function Register() {
  const history = useNavigate();
  const [user,setUser]= useState({
     Fullname:"",
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
      const {Fullname,email,password} = user;
     const res = await fetch("https://eltimus-backend.onrender.com/create-user",{
      method:"POST",
      headers:{
        "Content-Type" : "application/json"
      },
      body:JSON.stringify({
        Fullname,email,password
      })
     })

     const data = await res.json();
     if(data.success === false){
      window.alert("invalid registration")
     }else{
        window.alert("successfull registration")
        history("/");
     }
  }
  return (
    <div>
      <div className="login mt-5">
        <label className='signin text-center'>PLAYER REGISTRATION</label>
        <form id="login" method="POST">
          <label className='mt-2'>Full Name</label>
           <input className='mt-1 w-100' name="Fullname" placeholder='Full Name' value={user.Fullname} onChange={handleInputs}></input>
          <label className='mt-3'><b>Email-Id
          </b>
          </label>
          <input type="email" name="email" id="Uname" placeholder="Email-Id" value={user.email} onChange={handleInputs} className='mt-1 mr-5 w-100' />
          <br></br>
          <label className='mt-2'><b>Password
          </b>
          </label>
          <input type="Password" name="password" id="Pass" placeholder="Password" value={user.password} onChange={handleInputs} className='mt-1 w-100' />
          <br></br>
          <br></br>
          <button type="button" className="btn btn-primary mt-2" onClick={Postdata}>Submit</button>
        </form>
      </div>
    </div>
  )
}

export default Register
