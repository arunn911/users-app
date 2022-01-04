
import {FcInfo} from 'react-icons/fc';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';


import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';




export function UserList ()
{
    const [users,setUsers] = useState([]);
   
    let navigate = useNavigate();

    const getUsers = () =>
    {
      fetch("https://612a0529068adf001789ba06.mockapi.io/users", {
        method: "GET",
    })
    .then((data) => data.json())
    .then((res) => setUsers(res));
    }
    useEffect(() => getUsers(),[]);
    // console.log(users);

 

    const deleteUser = (id) => {
      fetch(`https://612a0529068adf001789ba06.mockapi.io/users/${id}`, {
        method: "DELETE",
    })
    .then((data) => data.json())
    .then((res) =>{
                   console.log(res);
                   navigate("/users")
                  
                   
     } );
    }
  





  return (
    <div>
      <h3 style={{padding:'0 25px'}}>Total number of users</h3>
    <div className="userlist">
    {
      users.map((user) => {
        // console.log(user.name)
      
    return (
     <div className="namebox" key={user.id}>
         <img src={user.avatar} alt="pro"/>
      {user.name}
      <FcInfo style={{cursor:'pointer'}} size={25} 
       onClick={() => navigate("/profile/" + user.id)}/>
       <DeleteForeverIcon style={{color:'red',cursor:'pointer'}} size={25}
       onClick={() => deleteUser(user.id)} />
      </div>
     
     
    );
  })}
   </div>
   </div>
  )
}