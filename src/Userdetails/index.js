import React ,{ useEffect, useState } from 'react';
import {useSelector, useDispatch, connect} from 'react-redux';
import { Link } from "react-router-dom";
import {deleteUser,fetchUsers} from '../Redux/Actions';
import firebase from '../firebase';

const Index = (props) => {
    const {setEdit} = props;
    const [initUsers, setInitUsers] = useState([]);
    let initData = useSelector((state) => state.formReducer);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchUsers());
    }, []);

    useEffect(() => {
        setInitUsers(initData)
    }, [initData]);

    const deletedata = (val) =>{
        firebase.ref('users/' + val).remove()
        dispatch(deleteUser(val))
    }

    return (
        <>

            <Link  className="btn btn-primary" to="/userform">Add User</Link>
            <br/>
            <br/>

            <table className="table">
                <thead className="thead-dark">
                    <tr>
                        <th>No</th>
                        <th>Id</th>
                        <th>Image</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>DOB</th>
                        <th>Gender</th>
                        <th>Education</th>
                        <th>Password</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                {
                    // initUsers !== undefined 
                    initUsers.length > 0 
                    
                    ? 
                
                    initUsers.map((item,index)=>(
                        <tr key={index}>
                            <td>{index + 1}</td>
                            <td>{item.id}</td>
                            <td><img src={item.image} alt="deqode" className="App-logo"/></td>
                            <td>{item.name}</td>
                            <td>{item.email}</td>
                            <td>{item.dob}</td>
                            <td>{item.usergender}</td>
                            <td>{item.education}</td>
                            <td>{item.password}</td>
                            <td> <Link  className="btn btn-primary" onClick={()=>setEdit(true)} to={{pathname:'/userform/'+item.id}}>Edit</Link>  <a href="#" className="btn btn-danger" onClick={() => deletedata(item.id)}>Delete</a> </td>

                        </tr>
                    ))

                    :
                    <tr>
                        <td colSpan="8">No data found</td>
                    </tr>

                }
                </tbody>

                
            </table>

        </>
    )

}

export default Index