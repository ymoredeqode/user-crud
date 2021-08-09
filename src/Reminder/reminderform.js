import React , {useState, useEffect, Fragment} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import { useHistory, useParams } from "react-router-dom";
import Alert from '../Components/alert';
import {addreminder, updatereminder} from '../Redux/Actions';

const Reminderform = (props) => {
    const {isEdit,setEdit} = props;

    let reminders = useSelector(state => state.ReminderReducre )
    const dispatch = useDispatch();
    const history = useHistory();
    const params = useParams();
    if(params.id !== undefined){ 
        const currentReminder = reminders.find(item => parseInt(item.id) === parseInt(params.id));
        reminders = currentReminder;
    }
    const [id,setID] = useState(Math.floor(Math.random() * 1000000000000));
    const [title,setTitle] = useState('');
    const [date,setDate] = useState('');
    const [time,setTime] = useState('');
    const [flag, setFlag] = useState(false);
    const [proceedflag, setProceedflag] = useState('');
    const [errorMsg, setErrormsg] = useState([]);

    useEffect(() => {
        if(proceedflag === true){
            let obj = {
                id:id,
                title:title,
                date:date,
                time:time
            }
            if(params.id === undefined){
                dispatch(addreminder(obj));
            }else{
                dispatch(updatereminder(obj));
            }
            setFlag(true);
            setEdit(false);
            setProceedflag(false);
            setTimeout(()=>{
                setTitle('');
                setDate('');
                setTime('');
                setID(Math.floor(Math.random() * 1000000000000));
                history.push('/reminders');
            },3000)

        }else{
            setTimeout(()=>{
                setFlag(false);
            },5000)
        }
    },[proceedflag]);


    useEffect(()=>{
        if(isEdit){
            setID(reminders.id);
            setTitle(reminders.title);
            setDate(reminders.date);
            setTime(reminders.time);
        }
    },[isEdit])


    const submitReminder = (e) => {
        e.preventDefault();
        setErrormsg([]);
        setProceedflag(true);
        const data = new FormData(e.target);
        for (let [key, value] of data.entries()) {
            if(value === ''){
                key = key.charAt(0).toUpperCase() + key.slice(1);
                setErrormsg(errorMsg =>[...errorMsg, key+' Is required']);
                setProceedflag(false);
            }
        }
    }

    return (
        <Fragment>

            {proceedflag === false ? <> {errorMsg.map(entry => <Alert  key={entry} type="alert alert-danger" msg={entry}/> )} </> : ''}

            {flag === true ? <Alert  type="alert alert-success" msg='Success'/> : ''}
            
            <form onSubmit={submitReminder}>

                <input type="hidden" value={id} name="id" />
                
                <div className="form-group">
                    <label htmlFor="titleInput">Title</label>
                    <input type="text" className="form-control" id="titleInput" name="title"  placeholder="Enter title" value={title} onChange={(e)=> setTitle(e.target.value) } />
                </div>

                <div className="form-group">
                    <label htmlFor="dateInput">Date</label>
                    <input type="date" className="form-control" id="dateInput" name="date"  placeholder="Date" value={date} onChange={(e)=> setDate(e.target.value) } />
                </div>

                <div className="form-group">
                    <label htmlFor="timeInput">Time</label>
                    <input type="time" className="form-control" id="timeInput" name="time"  placeholder="Time" value={time} onChange={(e)=> setTime(e.target.value) } />
                </div>
                
                <button type="submit" className="btn btn-primary" >{params.id !== undefined ? "Update" : "Add"}</button>
            </form>
            
        </Fragment>
    )
}

export default Reminderform
