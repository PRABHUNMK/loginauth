import { Outlet ,Link,useNavigate} from "react-router-dom";

import "./App.css";

import axios from 'axios';

import {useState} from 'react';


export default function Registerpage()
{
  
  const [name,setname]=useState("");
  const [email,setemail]=useState("");
  const [num,setnum]=useState("");
  const navig= useNavigate();

  const handlesubmit=(e)=>{
    e.preventDefault();
    const data={
      name:name,
      email:email,
      num:num
    }

    axios.post("http://localhost:3500/register",data)
    .then(result => console.log("data posted", result),
    navig('/login'))
    .catch(err => console.log("data not posted",err))


  }
  return (

  <>
    <div className='Loginpage'>
      <div className='leftside'>
          <h1>Register page</h1>

          <form className='registerform' onSubmit={handlesubmit}>
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
                <td ><button type="Submit" className="registerbutton" >Register</button></td>
              </tr>
              
            </table>
          </form>
          
          <p>If you have account?
          <Link to='/login' ><button  className="loginbutton">Login</button></Link>
          <Outlet/> </p>

      </div>

     
      
    </div>
  </>);
};

