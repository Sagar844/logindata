import React  from 'react';
import { useState } from "react";



function Loginpage() {
  const [user, SetUser] = useState({

name:"",
email:"",
password:"",

  });
 let name,value;
 const getuserdata  = (event) => {
   
    name = event.target.name;
    value = event.target.value;
     SetUser({...user ,[name]:value}); 

  };
  const postData = async(e) =>{
 e.preventDefault();


const {
  name,
  email,
  password
  } = user;

   const res = await fetch ("https://custom-resource-349421-default-rtdb.firebaseio.com/myfirstproject.json",
  {
    method:"POST",
    headers: {
      "Content-Type" : "appliction/json",

    },
    body:JSON.stringify({
      name,
      email,
      password,
      




    })
  }
  );
  };
  
  return (

<div className=" p-5 ">
 <form  method='POST' >
<label>Name</label><br></br>
  
 <input  placeholder='Enter your Name' type="text" name='name'  className="border-2 solid border-orange-500 rounded-md" value={user.name} onChange={getuserdata}></input>

  
 <br></br>
  
  <label>Email</label>
  <br></br>
  
<input  placeholder='Enter your email'name="email"   className="border-2 solid border-orange-500 rounded-md"  value={user.email} onChange={getuserdata}></input>
  <br></br> <br></br>
  
  <label>Password</label>
  <br></br>
  
  <input placeholder='Password' name="password"  type="number" className="border-2 solid border-orange-500 rounded-md"  value={user.password } onChange={getuserdata}></input>

<br></br> <br></br>
  
  <button className="bg-orange-500 text-white py-3 px-5 rounded-md" type="submit" onClick={postData}> SubmitNow</button>
  </form>
</div>
 
  );
}


    export default Loginpage;