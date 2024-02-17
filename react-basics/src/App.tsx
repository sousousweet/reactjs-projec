import './App.css'
import Navbar from './components/Navbar'
import { useState } from 'react';
import './components/RegisterForm/index.scss';
import RegisterForm from './components/RegisterForm/RegisterForm';
import UserDetails from './components/UserDetails';

function App() {
  const company="codeAway";
  const aboutTxt="About Us";
  const [isLoggedIn,setIsLoggedIn] =useState(false);
  const [userData,setUserData]=useState(
    {
      username:"",
      email:"",
      address:"",
      password:"",
      fullName:"",
  
    }
  );
 return (

    <>
    <Navbar  companyName={company} aboutTxt={aboutTxt} isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
    {isLoggedIn ? 
    <UserDetails user={userData}/>

     : <RegisterForm setIsLoggedIn={setIsLoggedIn} 
    userData={userData}
    setUserData={setUserData}
    />
    } 
    
    </>
  )
}

export default App
