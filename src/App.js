
import { UserList } from './components/UserList';
import './App.css';
import {Routes,Route} from "react-router-dom";
import {BrowserRouter as Router, useNavigate} from "react-router-dom";
import { Profile } from './components/Profile';
import { Topbar } from './components/DashBoard';
import { CreateUser } from './components/CreateUser';
import { EditUser } from './components/EditUser';
import { Button } from '@mui/material';

function App() {

 return(
   <Router>
     <div className="wrapcontainer">
     <Topbar/>
   <div className="App">
   <Routes>
          <Route path="/" element={<Welcome/>}/>
          <Route path="/users" element={<UserList/>}/>
          <Route path="/profile/:id" element={<Profile/>}/>
          <Route path="/create-user" element={<CreateUser/>}/>
          <Route path="/edit-user/:id" element={<EditUser/>}/>
          
        </Routes>
   </div>
   </div>
   </Router>
 )

}

function Welcome () {
  let navigate = useNavigate();

function handleClick() {
    navigate("/users");
  }
  return (
    <div className="home-wrapper">
      <div className="home">
        <h1>Simple CRUD UI for users</h1>
        <p>Click here to access the the users</p>
        <Button  onClick={handleClick} variant="contained" >
          Userlist
        </Button> 
      </div>
    </div>
  )
}

export default App;


