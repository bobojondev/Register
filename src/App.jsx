import React, { useState, useEffect } from 'react';
import fire from './fire'
import './App.css';
import Login from './Login'
import Hero from './Hero';
function App() {


  const [user, setUser] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [emailError, setEmailError] = useState('')
  const [passwordError, setPasswordError] = useState('')
  const [hasAccount, setHasAccount] = useState(false)
  const [loading, setLoading] = useState({
    loading: false
  })


  function clearInput(){
    setEmail('');
    setPassword('');
  }

  function clearErrors(){
    setEmailError('');
    setPasswordError('');
  }

  function handleLogin(){
    clearErrors();
    fire
      .auth()
      .signInWithEmailAndPassword(email, password)
      .catch(err => {
        switch(err.code){
          case "auth/invalid-email":
          case "auth/user-disabled":
          case "auth/user-not-found":
            setEmailError(err.message)
            break;
          case "auth/wrong-password":
            setPasswordError(err.message)
            break;
        }
      })
  }


  function handleSignup(){
    clearErrors();
    fire
    .auth()
    .createUserWithEmailAndPassword(email, password)
    .catch(err => {
      switch(err.code){
        case "auth/email-already-in-use":
        case "auth/invalid-email":
          setEmailError(err.message)
          break;
        case "auth/week-password":
          setPasswordError(err.message)
          break;
      }
    })
  }


  function handleLogout(){
    fire.auth().signOut();
  }

  function authListener(){
    fire.auth().onAuthStateChanged(user => {
      if(user){
        clearInput()
        setUser(user)
      }else{
        setUser('');
      }
    })
  }

  useEffect(() => {
    authListener()
  }, [])

  return (
    <div className="App">
      {/* berda usera malumotlo galadi agar user boso heroni ochodi agar bomoso loginda duravaradi  kegin user bo'lib heroni ochso props bilan logoutni ishlatib qo'yibmon shuni bosqondo handleLogout dagan funcsiya ishlididon orqogo qoytorodi*/}
      {user ? ( 
        <Hero handleLogout={handleLogout} />
      ):(
       <Login
          email={email}
          setEmail={setEmail}
          password={password}
          setPassword={setPassword}
          handleLogin={handleLogin}
          handleSignup={handleSignup}
          hasAccount={hasAccount}
          setHasAccount={setHasAccount}
          emailError={emailError}
          passwordError={passwordError}
        />
      )}
    </div>
  );
}

export default App;
