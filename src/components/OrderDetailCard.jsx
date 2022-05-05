import React from 'react'
import hearticon from '../icons/hearticon.svg'
import deleteicon from '../icons/deleteicon.svg'
import copyicon from '../icons/copyicon.svg'
import pencilicon from '../icons/pencilicon.svg'
import { Link } from 'react-router-dom'

export default function OrderDetailCard(props) {

    return (
        <div>
            <div id="mainCard" className="card p-3 mb-2">
                <div className="card-body">
                    <div id="firstCard" className="top mb-4 w-75">
                        <h5>{props.assemblyType + " " + props.color + " " + props.glassType +" " + props.trackRadius }</h5>
                        {/* <h5>10' 0'' X 10' 0.0'' CAN211 CC W1 COMPLETE DOOR INTELLICORE OBSCURE, 5TH GENERATION FINISH WALDER DOOR</h5> */}

                        <div className="moreDetails text-secondary" style={{ fontSize: "15px" }}>
                            <span>Job Name : </span><span>{props.farming}</span><br />
                            <span>Product #CWD . </span><span>{props.assemblyType}</span><br />
                            <span>Availability : </span><span className='fw-bold text-success'>IN STOCK </span><span>(Available for pickup)</span><br />
                        </div>
                    </div>

                    <div id="priceSection" className="bottom flex-wrap-reverse d-flex justify-content-between align-items-start mb-4">
                        <div className="quantitySelector d-flex align-items-center">
                            <button className=' btn border fw-bold'>-</button>
                            <input type="number" className='mx-1 border text-center' value="1" style={{ width: "50px", height: "38px" }} />
                            <button className=' btn border fw-bold'>+</button>
                        </div>

                        <div className="multiplier" style={{ textAlign: "center", color: "green" }}>
                            <span>Standard Multiplier: 432</span><br />
                            <span>Secondary Multipliers Applied</span><br />
                            <a href="#" className='fw-bold' style={{ textDecoration: "none", color: "brown" }}>Apply MPQ</a>
                        </div>

                        <div className="priceDetails " style={{ textAlign: "right" }}>
                            <span>Net Price:</span><span className='fs-4 fw-bold'>$ {props.price}</span><br />
                            <span>Unit Price:</span><span className=''>$ {props.price + 300}</span><br />
                            <a href="#" style={{ textDecoration: "none", color: "brown", fontSize: "13px" }} >View Price Details</a>
                        </div>
                    </div>


                    <div id="priceSection-mobile" className="bottom flex-wrap d-flex justify-content-between align-items-start mb-4 d-none" >

                        <div className='d-flex jsutify-content-between'>


                            <div className="w-50 multiplier" style={{ textAlign: "", color: "green", }}>
                                <span>Standard Multiplier: 432</span><br />
                                <span>Secondary Multipliers Applied</span><br />
                                <a href="#" className='fw-bold' style={{ textDecoration: "none", color: "brown" }}>Apply MPQ</a>
                            </div>

                            <div className="w-50 priceDetails " style={{ textAlign: "right", }}>
                                <span>Net Price:</span><span className='fs-4 fw-bold'>$ {props.price}.00</span><br />
                                <span>Unit Price:</span><span className=''>$ {props.price + 300}.00</span><br />
                                <a href="#" style={{ textDecoration: "none", color: "brown", fontSize: "13px" }} >View Price Details</a>
                            </div>

                        </div>
                        <div className="quantitySelector mt-3 d-flex align-items-center">
                            <button className=' btn border fw-bold'>-</button>
                            <input type="number" className='mx-1 border text-center' value="1" style={{ width: "50px", height: "38px" }} />
                            <button className=' btn border fw-bold'>+</button>
                        </div>
                    </div>

                    <div className="cartPagebuttons">
                        <div className="btn-group" role="group" aria-label="Basic outlined example" style={{ width: "100%" }}>
                            <button type="button" className="btn btn-outline-secondary"><img className='me-2' src={hearticon} alt="" /> FAVORITES</button>
                            <Link to="/new_order/configure_order/add_details"  type="button" className="btn btn-outline-secondary"><img className='me-2' src={pencilicon} alt="" /> EDIT</Link>
                            <button type="button" className="btn btn-outline-secondary"><img className='me-2' src={copyicon} alt="" /> COPY</button>
                            <button type="button" onClick={props.handleClick} name={props.name} className="btn btn-outline-secondary"><img className='me-2' src={deleteicon} alt="" /> DELETE</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}