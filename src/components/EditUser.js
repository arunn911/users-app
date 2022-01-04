// import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useParams } from 'react-router';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const EditUser = () => {
    const { id } = useParams();

const [name,setName] = useState("");
const [email,setEmail] = useState("");
const [mobile,setMobile] = useState("");
const [company,setCompany] = useState("");
const [role,setRole] = useState("");
const [street,setStreet] = useState("");
const [city,setCity] = useState("");
const [country,setCountry] = useState("");
const [zipcode,setZipcode] = useState("");
const [image,setImage] = useState("");

    const getUser = () => 
    {
    
      fetch("https://612a0529068adf001789ba06.mockapi.io/users/"+ id)
      .then((data) => data.json())
      .then((e) => {
        setName(e.name)
        setEmail(e.email)
        setMobile(e.mobile)
        setCompany(e.company)
        setRole(e.role)
        setStreet(e.street)
        setCity(e.city)
        setCountry(e.country)
        setZipcode(e.zipcode)
        setImage(e.avatar)
      });
    };

    useEffect(getUser,[id]);

    let navigate = useNavigate();
const handleClick = () => {
   navigate(-1)
}

    return (
        <div className="Formcontainer">
            <h2>Edit profile</h2>
            <TextField  className="inputbox" onChange={(event) => setName(event.target.value)} value={name}  id="standard-basic" label="Name" variant="standard" />
            <TextField  className="inputbox" onChange={(event) => setEmail(event.target.value)} value={email} id="standard-basic" label="Email" variant="standard" />
            <TextField  className="inputbox" onChange={(event) => setMobile(event.target.value)} value={mobile} id="standard-basic" label="Phone" variant="standard"/>
            <TextField  className="inputbox" onChange={(event) => setCompany(event.target.value)} value={company} id="standard-basic" label="Company name" variant="standard"/>
            <TextField  className="inputbox" onChange={(event) => setRole(event.target.value)} value={role} id="standard-basic" label="Job tiltle" variant="standard"/>
            <TextField  className="inputbox" onChange={(event) => setStreet(event.target.value)} value={street} id="standard-basic" label="Street name" variant="standard"/>
            <TextField  className="inputbox" onChange={(event) => setCity(event.target.value)} value={city} id="standard-basic" label="City" variant="standard"/>
            <TextField  className="inputbox" onChange={(event) => setCountry(event.target.value)} value={country} id="standard-basic" label="Country" variant="standard"/>
            <TextField  className="inputbox" onChange={(event) => setZipcode(event.target.value)} value={zipcode} id="standard-basic" label="Zipcode" variant="standard"/>
            <TextField  className="inputbox" onChange={(event) => setImage(event.target.value)} value={image} id="standard-basic" label="Profile image url" variant="standard"/>
            <Button onClick={handleClick} type="submit" variant="contained">Edit Profile</Button>
        </div>
    )
}




