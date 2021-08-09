import React ,{ useEffect, useState } from 'react';
import {useSelector, useDispatch, connect} from 'react-redux';
import { Link } from "react-router-dom";
import {deleteUser,fetchUsers} from '../Redux/Actions';

const Index = (props) => {
    const {setEdit} = props;

    const [initUsers, setInitUsers] = useState([]);
    console.log(initUsers.length);

    
    // let initUsers = useSelector((state) => state.formReducer);
    const dispatch = useDispatch();
    const deletedata = (val) =>{
        dispatch(deleteUser(val))
    }
    useEffect(() => {
        setInitUsers(dispatch(fetchUsers()));
    }, []);

    return (
        <>

            <Link  className="btn btn-primary" to="/userform">Add User</Link>
            <br/>
            <br/>

            <table className="table">
                <thead className="thead-dark">
                    <tr>
                        <th>No</th>
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
                    initUsers.length > 0 
                    
                    ? 
                
                    initUsers.map((item,index)=>(
                        <tr key={index}>
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