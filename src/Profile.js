/*import React,{useState} from 'react'
import Displayresult from './Displayresult';

const Profile = () => {

    const [data , setData] =useState([]);
    const[username , setUsername]=useState('');

   const OnChangeHandler =e =>{
   setUsername(e.target.value);
   }
 
  const submitHandler = async e =>{
    e.preventDefault();
    const profile =await fetch (`https://api.github.com/search/users?q=${username}`);
    const profileJson =await profile.json();
   

    if(profileJson)
    {
        setData(profileJson);
    }

  }
  

  return (
    <>
    <div style ={{padding :20}}>
        <div className="ui search" >
            <div className="ui icon input">
                <i className="search icon">
                
                </i>
        
       <input  className="prompt"
       placeholder="search username here .."
       type="text"  value= {username}  onChange={OnChangeHandler}/>
       </div>
       <button class="ui primary button" type="submit" onClick={submitHandler}>
          <i class="github icon"></i>
           Search
         </button>
         
         <Displayresult data={data}/>
       </div>
      
    </div>
    </>
    
  )
}
export default Profile*/


import React, { useState } from 'react';

function Profile() {
  const [searchQuery, setSearchQuery] = useState('');
  const [data, setdata] = useState([]);

  const handleSearch = async () => {
    const profile= await fetch(`https://api.github.com/search/users?q=${searchQuery}`);
    const profilejson = await profile.json();
    setdata(profilejson.items);
  };

  const handleInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  return (
    <div>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<input type="text" placeholder="Enter username" onChange={handleInputChange} />
      <button onClick={handleSearch}  width="900px">Search</button>
    
        {data.map((user) => (
         <table className ="ui celled table">
         <thead>
           <tr><th>Name</th>
           <th>Avatar</th>
          
         </tr></thead>
         <tbody>
           <tr>
             <td>
             <a >{user.login}</a> {user.name}
            </td>
             <td>
              {!user.avatar_url ? (""):(<img className= "ui  small circular image"
              src ={user.avatar_url}
              alt ={user.avatar_url}
              />
        )}
             
             </td>
             
           </tr>
           </tbody>
           </table>

))}     
        
    </div>
 
  )}

export default Profile

