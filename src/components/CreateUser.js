// import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

export const CreateUser = () => {
    
    return (
        <div className="Formcontainer">
            <h2>Please fill the details to add user</h2>
            <TextField  className="inputbox"  id="standard-basic" label="Name" variant="standard" />
            <TextField  className="inputbox"  id="standard-basic" label="Email" variant="standard" />
            <TextField  className="inputbox"  id="standard-basic" label="Phone" variant="standard"/>
            <TextField  className="inputbox"  id="standard-basic" label="Company name" variant="standard"/>
            <TextField  className="inputbox"  id="standard-basic" label="Job tiltle" variant="standard"/>
            <TextField  className="inputbox"  id="standard-basic" label="Street name" variant="standard"/>
            <TextField  className="inputbox"  id="standard-basic" label="City" variant="standard"/>
            <TextField  className="inputbox"  id="standard-basic" label="Country" variant="standard"/>
            <TextField  className="inputbox"  id="standard-basic" label="Zipcode" variant="standard"/>
            <TextField  className="inputbox"  id="standard-basic" label="Profile image url" variant="standard"/>
            <Button type="submit" variant="contained">Add User</Button>
        </div>
    )
}


// const [name,setName] = useState('');
    // const [email,setEmail] = useState('');
    // const [phone,setPhone] = useState('');
    // const [company,setCompany] = useState('');
    // const [role,setRole] = useState('');
    // const [street,setStreet] = useState('');
    // const [city,setCity] = useState('');
    // const [country,setCountry] = useState('');
    // const [zipcode,setZipcode] = useState('');
    // const [image,setImage] = useState('');


    // const addUser = () => {
    //     const newUser = {
    //       name:name,
    //       avatar: image,
    //       email:email,
    //       mobile:phone,
    //       role:role,
    //       company:company,
    //       street:street,
    //       city:city,
    //       country:country,
    //       zipcode:zipcode,
    //     };
    //   }
