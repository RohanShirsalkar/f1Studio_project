import React from 'react'

export default function tableDataCard(props) {
    const today = new Date().toLocaleDateString()
    return (

        <div class="card mb-2 shadow-sm">
            <div class="card-body">
                <div className='d-flex justify-content-between mb-2 align-items-center'>
                    <span>{props.section}</span>
                    <span>{props.farming}</span>
                </div>
                <h5 className='w-100 mb-2'>{props.assemblyType + " " + props.color + " " + props.glassType +" " + props.trackRadius}</h5>
                {/* <h5 className='w-100 mb-2'>2 Classic Collection Garage Door, 2 Entry Door</h5> */}
                <div className='d-flex justify-content-between align-items-center'>
                    <span>{props.color} · {props.design}</span>
                    {props.date == today && <span class="ms-3 badge rounded-pill bg-success" >NEW</span>}
                </div>
            </div>
        </div>

    )
}
