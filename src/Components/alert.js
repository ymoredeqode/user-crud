import React, { Fragment } from 'react'

const Alert = (props) =>  {

    const {type,msg} = props;

    return (
            <div className={type} role="alert">
                {msg}
            </div>
    )
}

export default Alert
