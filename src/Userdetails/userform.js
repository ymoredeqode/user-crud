import React , {useState, useEffect, Fragment} from 'react';
import * as Constants from '../Constants.js';
import Alert from '../Components/alert';
import {useSelector, useDispatch} from 'react-redux';
import {addUser, updateUser} from '../Redux/Actions';
import {useHistory, useParams } from "react-router-dom";
import firebase from '../firebase';


const Userform = (props) => {

    const {isEdit,setEdit} = props;

    let userdata = useSelector(state => state.formReducer);
    const dispatch = useDispatch();
    const history = useHistory();
    const params = useParams();
    if(params.id !== undefined){ 
        const currentUser = userdata.find(item => item.id === params.id);
        userdata = currentUser;
    }

    const educations = Constants.educations;
    const gender = Constants.gender;
    const [id, setID] = useState(firebase.ref().child('users').push().key);

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [image, setImage] = useState('');
    const [dob, setDob] = useState('');
    const [education, setEducation] = useState('');
    const [usergender, setUsergender] = useState('');
    const [password, setPassword] = useState('');
    const [cpassword, setCpassword] = useState('');
    const [flag, setFlag] = useState(false);
    const [proceedflag, setProceedflag] = useState('');
    const [errorMsg, setErrormsg] = useState([]);

    const resetUserForm = () => {
        setName('');
        setEmail('');
        setImage('');
        setDob('');
        setEducation('');
        setUsergender('');
        setPassword('');
        setCpassword('');
        setID(firebase.ref().child('users').push().key);
    }
    
    const getPassword = (e) =>{
        setPassword(e.target.value)
    }

    const getCPassword = (e) =>{
        setCpassword(e.target.value)
    }

    const getImage = (e) =>{
        var file = e.target.files[0];
        var reader = new FileReader();
        reader.onloadend = function() {
            setImage(reader.result)
        }
        reader.readAsDataURL(file);
    }

    useEffect(() => {
        if(proceedflag === true){
            let obj = {
                id:id,
                name:name,
                email:email,
                dob:dob,
                usergender:usergender,
                education:education,
                password:password,
                image:image
            }
            if(params.id === undefined){
                dispatch(addUser(obj));
                firebase.ref('users/' + obj.id).set(obj ,
                    err => {
                        if(err){
                            console.log(err);
                        }
                    }
                );
            }else{
                dispatch(updateUser(obj));
                firebase.ref('users/' + obj.id).set(obj ,
                    err => {
                        if(err){
                            console.log(err);
                        }
                    }
                );
            }
            setFlag(true);
            setEdit(false);
            setProceedflag(false);
            setTimeout(()=>{
                resetUserForm();
                history.push('/userlist');
            },3000)
        }else{
            setTimeout(()=>{
                setFlag(false);
            },5000)
        }
    },[proceedflag]);

    useEffect(()=>{
        if(isEdit){
            setID(userdata.id);
            setName(userdata.name);
            setEmail(userdata.email);
            setImage(userdata.image);
            setDob(userdata.dob);
            setEducation(userdata.education);
            setUsergender(userdata.usergender);
            setPassword(userdata.password );
            setCpassword(userdata.password);
        }
    },[isEdit])


    const submitForm = (e) =>{
        e.preventDefault();
        setErrormsg([]);
        setProceedflag(true);
        const data = new FormData(e.target);
        for (let [key, value] of data.entries()) {
            if(value === ''){
                const keyname = key.charAt(0).toUpperCase() + key.slice(1);
                setErrormsg(errorMsg =>[...errorMsg, keyname+' Is required']);
                setProceedflag(false);
            }
            if(key === 'email' && value !== ''){
                if(value.match("^[a-zA-Z0-9]+@[a-zA-Z0-9-]+\.[a-zA-Z]+$") === null){
                    setErrormsg(errorMsg =>[...errorMsg,'Email Is invalid']);
                    setProceedflag(false);
                }
            }
            if(key === 'cpassword' && value !== ''){
                if(value !== password){
                    setErrormsg(errorMsg =>[...errorMsg,'Confrim Password does not match']);
                    setProceedflag(false);
                }
            }
        }

        if(usergender === ''){
            setErrormsg(errorMsg =>[...errorMsg,'Gender Is required']);
            setProceedflag(false);
        }

        if(image === ''){
            setErrormsg(errorMsg =>[...errorMsg,'image Is required']);
            setProceedflag(false);
        }
    }

    return(
        <Fragment>
            {proceedflag === false ? <> {errorMsg.map(entry => <Alert  key={entry} type="alert alert-danger" msg={entry}/> )} </> : ''}
            <form onSubmit={submitForm}>
                { flag === true ? <Alert  type="alert alert-success" msg='Success'/> : <></> }
                <br/>
                <br/>
                {params.id !== undefined ? <h3>Edit : {name} </h3> : <h3>Add User</h3>}
                <br/>
                
                <input type="hidden" name="id" value={id}/>

                <div className="form-group">
                    <label htmlFor="titleName">Name</label>
                    <input type="text" name="name" className="form-control" id="titleName"  placeholder="Enter name" value={name} onChange={(e)=> setName(e.target.value) } />
                </div>

                <div className="form-group">
                    <label htmlFor="titleEmail">Email</label>
                    <input type="email" name="email" className="form-control" id="titleEmail"  placeholder="Enter email" value={email} onChange={(e)=> setEmail(e.target.value) } />
                </div>

                <div className="form-group">
                    <label htmlFor="titleDOB">DOB</label>
                    <input type="date"  name="dob" className="form-control" id="titleDOB"  placeholder="Enter dob" value={dob} onChange={(e)=> setDob(e.target.value) } />
                </div>

                <div className="form-group">
                    <label htmlFor="Education">Education</label>
                    <select className="form-control" id="Education" value={education} name="education" onChange={(e)=>{setEducation(e.target.value)}}>
                        <option value="" key="deafult" defaultValue={education === ''} >Select</option>
                        {educations.map(({ key, val,id }, index) => <option defaultValue={education === val} key={id} value={val} >{key}</option>)}
                    </select>
                </div>

                <label>Gender :</label>
                {gender.map(({ key, val, id }, index) => <Fragment key={id}>   {key} <input key={id} type="radio" name="usergender" checked={usergender === val} value={val} onChange={(e)=>{setUsergender(e.target.value)}}/> </Fragment >)}   
                <br/>

                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input type="password" className="form-control" id="password"  name="password" placeholder="Enter password" value={password} onChange={getPassword} />
                </div>

                <div className="form-group">
                    <label htmlFor="Confirmpassword">Confirm Password</label>
                    <input type="password" className="form-control" id="Confirmpassword"  name="cpassword" placeholder="Enter confirm password" value={cpassword} onChange={getCPassword} />
                </div>
                <div className="form-group">
                    <label htmlFor="exampleFormControlFile1">Image</label>
                    <input type="file" accept="image/*"  name="image" onChange={getImage} className="form-control-file" id="exampleFormControlFile1" />
                </div>

                <button type="submit" className="btn btn-primary" >{params.id !== undefined ? "Update" : "Add User"}</button>
            </form>
            <br/>
        </Fragment>
    )
}

export default Userform 
