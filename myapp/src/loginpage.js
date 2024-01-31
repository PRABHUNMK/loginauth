import { Link, Outlet,useNavigate } from "react-router-dom";
import axios from 'axios';
import "./App.css"

import {useState} from 'react';

export default function Loginpage()
{
  
  const [name,setname]=useState("");
  const [email,setemail]=useState("");
  const [num,setnum]=useState("");
  const navig= useNavigate();

  const handlelogin=(e)=>{
    e.preventDefault();
    const data={
      name:name,
      email:email,
      num:num
    }
    axios.post('http://localhost:3500/login',data)
    .then(result=>{
      console.log("data login success",result)
      if(result.data === "Success")
      {
        navig('/home')

      }
      
    })
    .catch(err=>
      console.log("login error",err)
    )
    

  }
  return (
  <>
    <div className='Loginpage'>
      <div className='leftside'>
          <h1>Login</h1>

          <form className='registerform' onSubmit={handlelogin}>
            <table className='registertable'>
              <tr>
                <td>
                  <label>Full Name</label>
                </td>
                <td>
                  <input type="text" value={name} onChange={(e)=> setname(e.target.value)} className="inputfield"/>
                </td>
                
              </tr>
              <tr>
                <td>
                  <label>Email ID</label>
                </td>
                <td>
                  <input type="text" value={email}  onChange={(e)=> setemail(e.target.value)} className="inputfield"/>
                </td>
                
              </tr>
              <tr>
                <td>
                  <label>Phone No</label>
                </td>
                <td>
                  <input type="number" value={num} onChange={(e)=> setnum(e.target.value)} className="inputfield"/>
                </td>
                
              </tr>

              <tr className="submitbutton">
                <td>{}</td>
                <td ><button type="Submit" className="registerbutton" >Login</button></td>
              </tr>
              
            </table>
          </form>
          <p>Don't have an account?
          <Link to='/' ><button  className="loginbutton">Register</button></Link>
          <Outlet/> </p>
          
         

      </div>

     
      
    </div>
  </>);
};

