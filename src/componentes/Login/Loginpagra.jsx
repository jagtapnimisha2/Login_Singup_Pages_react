import React, { useState } from 'react'
import './Loginpag.css'
import user_icon from '../Assest/person.png'
import email_icon from '../Assest/email.png'
import password_icon from '../Assest/password.png'
const Loginpagra = () => {
    const [action,setActions]=useState("Sing Up");
  return (
    <div className='container'>
        <div className="header">
            <div className="text">{action}</div>
            <div className="underline"></div>
        </div>
        <div className="inputs">
        {/* ternary oprators:-{} */}
        {
            action==="Login"?<div></div>:<div className="input">
                <img src={user_icon} alt="" />
                <input type="text" placeholder='Name' />
            </div>
        }
            

            <div className="input">
                <img src={email_icon} alt="" />
                <input type="email" placeholder='Email'/>
            </div>
            <div className="input">
                <img src={password_icon} alt="" />
                <input type="password" placeholder='Password'/>
            </div>
        </div>
        {
            action==="Sing Up"?<div></div>:<div className="forgot-password">Lost Password? <span>Click Here!</span></div>
        }
        
        <div className="submit-container">
            <div className={action==="Login"?"submit gray":"submit"} onClick={()=>{setActions("Sing Up")}}>Sing up</div>
            <div className={action==="Sing Up"?"submit gray":"submit"} onClick={()=>{setActions("Login")}}>Login</div>
        </div>
    </div>
  )
}

export default Loginpagra