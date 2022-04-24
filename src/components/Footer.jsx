import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer(props) {

    return (
        <div>
            <div className='card  fixed-bottom py-3 ' style={{ paddingRight: '13%'}}>
                <div className='ms-auto'>

                    { props.btn2 && <Link to={props.url2 ? props.url2 : "#"} className='btn btn-outline-secondary mx-2 ms-auto' style={{ width: "150px", borderColor: "#66332B", color: "#66332B  " }}>{props.btn2}</Link> }
                    <Link to={props.url1 ? props.url1 : "#"} className='btn text-white mx-2 ms-auto' style={{ width: "150px", backgroundColor: "#66332B" }}>{props.btn1}</Link>
                </div>
            </div>
        </div>
    )
}
