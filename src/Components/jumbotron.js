import React, {Fragment} from 'react';

const Jumbotron = (props) =>{
    const {title, desc} = props;

    return (
        <Fragment>
            <div className="jumbotron">
                <div className="container">
                    {title !== ''? <h4 className="display-4">{title}</h4> : ''}
                    {desc !== ''? <p>{desc}</p> : ''}
                </div>
            </div>
        </Fragment>
    )
}

export default Jumbotron