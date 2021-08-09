import React ,{ useEffect, useState } from 'react';
import {useSelector, useDispatch} from 'react-redux';
import { Link } from "react-router-dom";
import {deletereminder} from '../Redux/Actions';

const Index = (props) => {
    const type = props.type;
    const {setEdit} = props;
    let reminders = useSelector((state) => state.ReminderReducre);
    const dispatch = useDispatch();
    const deleteReminder = (val) =>{
        dispatch(deletereminder(val));
    }
    const currentDate = new Date();

    if(type === 'upcoming'){
        const temp = reminders.filter((item)=> new Date(item.date + ':' +item.time) >= currentDate && item)
        console.log(temp,'upcoming');
        reminders = temp
    }else if(type === 'past'){
        const temp = reminders.filter((item)=> new Date(item.date + ':' +item.time) <= currentDate && item)
        console.log(temp,'past');
        reminders = temp
    }

    return (
        <>

            <Link  className="btn btn-primary" to="/add-reminder">Add Reminder</Link>
            <br/>
            <br/>
            
            
            <table className="table">
                <thead className="thead-dark">
                    <tr>
                        <th scope="col">No</th>
                        <th scope="col">Title</th>
                        <th scope="col">Date</th>
                        <th scope="col">Time</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>


                {
                    reminders.length > 0 
                    
                    ? 
                
                    reminders.map((item,index)=>(
                        <tr key={index}>
                            <td>{item.id}</td>
                            <td>{item.title}</td>
                            <td>{item.date}</td>
                            <td>{item.time}</td>
                            <td> <Link  className="btn btn-primary" onClick={()=>setEdit(true)} to={{pathname:'/edit-reminder/'+item.id}}>Edit</Link>  <a href="#" className="btn btn-danger" onClick={() => deleteReminder(item.id)}>Delete</a> </td>
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