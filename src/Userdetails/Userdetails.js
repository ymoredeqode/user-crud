import React from 'react';

const Userdetails = (props) =>{
    const {label,value} = props;

    return (
            <p>{label} : {value}</p>
    )

}
export default Userdetails