import React from 'react'
import { useState } from 'react';
const Login = (props) => {

    const {email, setEmail, password, setPassword, handleLogin, handleSignup, hasAccount, setHasAccount, emailError, passwordError} = props;

   

  return (
    <div className='login'>
        <div className="loginContainer">
            <label>UserName</label>
            <input type="text" autoFocus value={email} onChange={e => setEmail(e.target.value)} />
            <p className="errorMsg">{emailError}</p>
            <label>Password</label>
            <input type="password" required value={password} onChange={e => setPassword(e.target.value)} />
            <p className="errorMsg">{passwordError}</p>
            <div className="btnContainer">
                {
                    hasAccount ? (
                        <div>
                            <button onClick={handleLogin}>
                                Sign in 
                            </button>
                            <p>Hisob yoq ? <span onClick={() => setHasAccount(!hasAccount)}>Sign up</span></p>
                        </div>
                    ):(
                        <div>
                            <button onClick={handleSignup}>sign up  </button>
                            <p>Hisobingiz bor? <span onClick={() => setHasAccount(!hasAccount)}>Sign in</span></p>
                        </div>
                    )
                }
            </div>
        </div>
    </div>
  )
}

export default Login