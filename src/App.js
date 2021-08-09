import './App.css';
import React, {useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Userform from './Userdetails/userform';
import Userlist from './Userdetails';
import Reminderlist from './Reminder';
import Home from './Home';
import Jumbotron from './Components/jumbotron';
import Reminderform from './Reminder/reminderform';


function App() {
  const [isEdit, setIsEdit] = useState(false);
  const setEdit = (val) =>{
    setIsEdit(val)
  }

  return (

    <Router>

    <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
       <Link className="navbar-brand" to="/">Deqode</Link>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExampleDefault" aria-controls="navbarsExampleDefault" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarsExampleDefault">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <Link className="nav-link" to="/">Home <span className="sr-only">(current)</span></Link>
          </li>
         
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="#" id="dropdown01" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Users</a>
            <div className="dropdown-menu" aria-labelledby="dropdown01">
              <Link className="dropdown-item" to="/userlist">Users</Link>
              <Link className="dropdown-item" to="/userform">Add Users</Link>
            </div>
          </li>

          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="#" id="dropdown01" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Reminders</a>
            <div className="dropdown-menu" aria-labelledby="dropdown01">
              <Link className="dropdown-item" to="/add-reminder">Add Reminder</Link>
              <Link className="dropdown-item" to="/reminders">All</Link>
              <Link className="dropdown-item" to="/upcoming-reminders">Upcoming</Link>
              <Link className="dropdown-item" to="/past-reminders">Past</Link>
            </div>
          </li>
        </ul>
      </div>
    </nav>


    <main role="main">


        <Switch>
          <Route exact path="/">
            <Home/> 
          </Route>

          <Route exact path="/userform">
            <Jumbotron  title="Add User" desc="" />
            <div className="container">
              <Userform isEdit={isEdit} setEdit={setEdit} />
            </div>
          </Route>

          <Route exact path="/userform/:id">
            <Jumbotron  title="Edit User" desc="" />
            <div className="container">
              <Userform isEdit={isEdit} setEdit={setEdit}/>
            </div>
          </Route>

          <Route exact path="/userlist">
            <Jumbotron  title="User List" desc="" />
            <div className="container">
              <Userlist setEdit={setEdit}/>
            </div>
          </Route>

          <Route exact path="/reminders">
            <Jumbotron  title="Reminders List" desc="" />
            <div className="container">
              <Reminderlist type="all"  setEdit={setEdit} />
            </div>
          </Route>

          <Route exact path="/upcoming-reminders">
            <Jumbotron  title="Upcoming Reminders List" desc="" />
            <div className="container">
              <Reminderlist type="upcoming" setEdit={setEdit} />
            </div>
          </Route>

          <Route exact path="/past-reminders">
            <Jumbotron  title="Past Reminders List" desc="" />
            <div className="container">
              <Reminderlist type="past" setEdit={setEdit}/>
            </div>
          </Route>


          <Route exact path="/add-reminder">
            <Jumbotron  title="Add New Reminder" desc="" />
            <div className="container">
              <Reminderform isEdit={isEdit} setEdit={setEdit}/>
            </div>
          </Route>


          <Route exact path="/edit-reminder/:id">
            <Jumbotron  title="Edit Reminder" desc="" />
            <div className="container">
              <Reminderform isEdit={isEdit} setEdit={setEdit} />
            </div>
          </Route>


        </Switch>

      </main>
    </Router>
    

  );
}






export default App;
