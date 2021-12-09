import './App.css';
import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Userform from './Userdetails/userform';
import Userlist from './Userdetails';
import Postlist from './Posts';
import PostForm from './Posts/postForm';
import Home from './Home';
import Jumbotron from './Components/jumbotron';
import * as Path from './Constants/Path.js';
import Navigation from './Components/Navigation';

function App() {
	const [isEdit, setIsEdit] = useState(false);
	const setEdit = (val) => {
		setIsEdit(val)
	}

	return (

		<Router>
			<Navigation />

			{/* <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
				<Link className="navbar-brand" to={Path.BASE_PATH}>Deqode</Link>
				<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExampleDefault" aria-controls="navbarsExampleDefault" aria-expanded="false" aria-label="Toggle navigation">
					<span className="navbar-toggler-icon"></span>
				</button>

				<div className="collapse navbar-collapse" id="navbarsExampleDefault">
					<ul className="navbar-nav mr-auto">
						<li className="nav-item active">
							<Link className="nav-link" to={Path.BASE_PATH}>Home <span className="sr-only">(current)</span></Link>
						</li>

						<li className="nav-item dropdown">
							<a className="nav-link dropdown-toggle" href="#" id="dropdown02" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Users</a>
							<div className="dropdown-menu" aria-labelledby="dropdown02">
								<Link className="dropdown-item" to={Path.USER_LIST}>Users</Link>
								<Link className="dropdown-item" to={Path.USER_FORM}>Add Users</Link>
							</div>
						</li>


						<li className="nav-item dropdown">
							<a className="nav-link dropdown-toggle" href="#" id="dropdown01" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Posts</a>
							<div className="dropdown-menu" aria-labelledby="dropdown01">
								<Link className="dropdown-item" to={Path.POST_LIST}>Posts</Link>
								<Link className="dropdown-item" to={Path.POST_FORM}>Add Post</Link>
							</div>
						</li>


					</ul>
				</div>
			</nav> */}


			<main role="main">


				<Switch>
					<Route exact path={Path.BASE_PATH}>
						<Home />
					</Route>

					<Route exact path={Path.USER_FORM}>
						<Jumbotron title="Add User" desc="" />
						<div className="container">
							<Userform isEdit={isEdit} setEdit={setEdit} />
						</div>
					</Route>

					<Route exact path={Path.EDIT_USER_FORM}>
						<Jumbotron title="Edit User" desc="" />
						<div className="container">
							<Userform isEdit={isEdit} setEdit={setEdit} />
						</div>
					</Route>

					<Route exact path={Path.USER_LIST}>
						<Jumbotron title="User List" desc="" />
						<div className="container">
							<Userlist setEdit={setEdit} />
						</div>
					</Route>


					<Route exact path={Path.POST_FORM}>
						<Jumbotron title="Add Post" desc="" />
						<div className="container">
							<Userform isEdit={isEdit} setEdit={setEdit} />
						</div>
					</Route>

					<Route exact path={Path.EDIT_POST_FORM}>
						<Jumbotron title="Edit Post" desc="" />
						<div className="container">
							<PostForm isEdit={isEdit} setEdit={setEdit} />
						</div>
					</Route>

					<Route exact path={Path.POST_LIST}>
						<Jumbotron title="Post List" desc="" />
						<div className="container">
							<Postlist setEdit={setEdit} />
						</div>
					</Route>


				</Switch>

			</main>
		</Router>


	);
}






export default App;
