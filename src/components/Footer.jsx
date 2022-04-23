import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer(props) {

    return (
        <div>
            <div className='card  fixed-bottom py-3 ' style={{ paddingRight: '13%'}}>
                <div className='ms-auto'>

                    <Link to={props.url1 ? props.url1 : "#"} className='btn text-white mx-2 ms-auto' style={{ width: "150px", backgroundColor: "#66332B" }}>{props.btn1}</Link>
                    { props.btn2 && <Link to={props.url2 ? props.url2 : "#"} className='btn text-white mx-2 ms-auto' style={{ width: "150px", backgroundColor: "#66332B" }}>{props.btn2}</Link> }
                </div>
            </div>
        </div>
    )
}
