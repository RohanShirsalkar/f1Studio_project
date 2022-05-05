import React from 'react'

export default function Alert(props) {
    return (

        <div onClick={props.showAlert} className="alert alert-danger" role="alert" id="alert" style={{display : 'none'}}>
            {props.message}
        </div>

    )
}    
