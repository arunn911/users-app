import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useState, useEffect} from "react";
import Button from '@mui/material/Button';
import EditIcon from '@mui/icons-material/Edit';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';


export function Profile () {

    const { id } = useParams();
    const [profile,setProfile] = useState({});

    // const viewProfile = () => 
    // {
    //     fetch("https://612a0529068adf001789ba06.mockapi.io/users/" + id)
    //     .then((data) => data.json())
    //     .then((e) => setProfile(e));
       
    //   }

useEffect(() => { fetch("https://612a0529068adf001789ba06.mockapi.io/users/" + id)
.then((data) => data.json())
.then((e) => setProfile(e));},[id])
// console.log(profile);
let navigate = useNavigate();

function handleClick() {
    navigate("/users");
  }


    return (
        <div className="container">

            <div className="profilecard">
                <div className="imagecontainer">
                    <img src={profile.avatar} alt="user"/>
                </div>
                <div className="info">
                    <h1>{profile.name}</h1>
                    <p><span className="highlights">Email : </span>{profile.email}</p>
                    <p><span className="highlights">Phone : </span>{profile.mobile}</p>
                    <p><span className="highlights">Company : </span>{profile.company}</p>
                    <p><span className="highlights">Role : </span>{profile.role}</p>
                    <p><span className="highlights">Street : </span>{profile.street}</p>
                    <p><span className="highlights">City : </span>{profile.city}</p>
                    <p><span className="highlights">Country : </span>{profile.country}</p>
                    <p><span className="highlights">Zipcode : </span>{profile.zipcode}</p>
                </div>
                <div className="btn">
                <Button  onClick={() => navigate("/edit-user/" + profile.id)} variant="contained" startIcon={<EditIcon />}>
          Edit Profile
        </Button> 
                <Button onClick={handleClick} variant="contained" startIcon={<ArrowBackIcon />}>
          Back
        </Button>
        </div>
            </div>
           
        </div>

        //    <IoIosArrowRoundBack size={30} onClick={handleClick} />
    )
}