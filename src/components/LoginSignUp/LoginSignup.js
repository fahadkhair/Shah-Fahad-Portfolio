import React, { act, useState } from 'react'
import './LoginSignup.css';

const LoginSignup = () => {

  const [action, setAction] = useState('Sign Up');


  return (
    <div className='container-login'>
      <div className="header-login">
        <div className="text-login">{action}</div>
        <div className="underline-login"></div>
      </div>
      <div className="inputs-login">
        {action==="Login-login"?<div></div>:<div className="input-login">
          <img src={'./components/images/Person'} alt="" />
          <input type="text" placeholder='Name'/>
        </div>}
        
        <div className="input-login">
          <img src="" alt="" />
          <input type="email" placeholder='Email ID'/>
        </div>
        <div className="input-login">
          <img src="" alt="" />
          <input type="password" placeholder='Password'/>
        </div>
      </div>

      {action==="Sign Up"?<div></div>:<div className="forgot-password-login"> Lost Password? <span>CLick Here!</span>
      </div>}
      <div className="submit-container-login">
        <div className={action==="Login-login"?"submit-login gray":"submit-login"} onClick={()=> {setAction("Sign Up")}}>Sign Up</div>
        <div className={action==="Sign Up-login"? "submit-login gray": "submit-login"} onClick={()=> {setAction("Login")}}>Login</div>
      </div>
    </div>
  )
}

export default LoginSignup;
