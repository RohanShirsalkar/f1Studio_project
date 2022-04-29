import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer(props) {

    const disableBtn = () => {
        console.log("fn run")
        if (!props.isReady) {
            document.getElementById('footerbtn1').classList.add('disabled')
        }
        else {
            document.getElementById('footerBtn1').classList.remove('disabled')
        }
    }

    // if (!props.isReady){
    //     document.getElementById('footerbtn1').classList.add('disabled')
    // }
    // else {
    //     document.getElementById('footerBtn1').classList.remove('disabled')
    // }



    return (
        <div onLoad={disableBtn} className='footer shadow-sm'>
            <div className='card  fixed-bottom py-3 ' style={{ paddingRight: '13%' }}>
                <div className='div d-flex ms-auto'>

                    {props.btn2 && <Link to={props.url2 ? props.url2 : "#"} id="footerBtn1" className='btn btn-outline-secondary mx-2 ms-auto' onClick={props.onClick ? props.onClick : ""} style={{ width: "150px", borderColor: "#66332B", color: "#66332B  " }}>{props.btn2}</Link>}
                    <Link to={props.url1 ? props.url1 : "#"} onClick={props.onClick ? props.onClick : ""} id="footerBtn2" className='btn text-white mx-2 ms-auto' style={{ width: "150px", backgroundColor: "#66332B" }}>{props.btn1}</Link>
                </div>
            </div>
        </div>
    )
}
