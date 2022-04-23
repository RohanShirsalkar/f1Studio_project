import React from 'react'
import rightarrowicon from '../icons/rightarrowicon.svg'
import { Link } from 'react-router-dom'


export default function CreateOrderCard(props) {

    return (
        <Link to={!props.route ? "#" : props.route} style={{textDecoration : "none",}}><div>
            <div class="card p-2 shadow-sm mb-3">

                <div class="card-body d-flex align-items-center justify-content-between">
                    <div className="left">
                        <h5 className='text-dark'>{props.title}</h5>
                        <p className='text-secondary'>{props.data}</p>
                    </div>

                    <div className="right">
                        <img src={rightarrowicon} alt="err" />
                    </div>
                </div>

            </div>
        </div></Link>
    )
}
