import { ChangeEvent,useState } from 'react';
import './index.scss';
import { IUserData } from '../../interfaces';
import { formInputList } from '../../data';

interface Iprops {
    setIsLoggedIn:(val: boolean)=>void;
    userData: IUserData;
    setUserData:(user:IUserData)=>void
}
 export default function RegisterForm ({setIsLoggedIn,userData,setUserData}:Iprops) {
  const [inputArr,setInputArr]=useState(formInputList);
  // ** Handlers
  const onChangeHandler =( event: ChangeEvent<HTMLInputElement>)=>{
    const {value, name}=event.target;
   setUserData({
    ... userData,
    [name]: value,

   });
  };

  // ** Renders
  const renderFormInputList=inputArr.map((input,index) =>(
    <div style={{display:"flex", alignItems:"center"}}  key={index}>
      <div className="input-wrapper">
          
          <label htmlFor={input.id}>{input.label}</label>
          <input type={input.type} name={input.name} id={input.id} 
          value={userData[input.name]} 
          onChange={
            onChangeHandler
          }/>
          
        </div>
      <button onClick={()=>{
        const filtered=inputArr.filter(input => input.name != formInputList[index]["name"])
      
        setInputArr(filtered);
      }}> ✔ {index}</button>
    </div>
    ));
  
    return (
      <div>
        {/* <h3 style={{margin: 30}}>Your email: {email}</h3> */}
        <form  style={{margin:30}} className="login-form"
      onSubmit={event=>{
        event.preventDefault();

      }}
      >
        {renderFormInputList}
        <button 
        onClick={()=>{
            setIsLoggedIn(true)}}
        >Login</button>
      </form>
      </div>
    )
   }
  