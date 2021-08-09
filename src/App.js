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
import Home from './Home';
import Jumbotron from './Components/jumbotron';


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


        </Switch>

      </main>
    </Router>
    

  );
}






export default App;
