import React, { useEffect, useState } from 'react'
import Navigation from '../Navigation'
import hearticon from '../../icons/hearticon.svg'
import deleteicon from '../../icons/deleteicon.svg'
import copyicon from '../../icons/copyicon.svg'
import pencilicon from '../../icons/pencilicon.svg'
import Footer from '../Footer'
import { Link } from 'react-router-dom'
import { tableData } from '../data/TableData'


export default function Cart() {
    const today = new Date().toDateString()

    const removeContainer = () => {

        if(window.innerWidth < 1100){
            document.getElementById('cartPage').classList.remove('container')
        }
    }


    const placeOrder = () => {
        tableData.push(
            {

                productInfo: "2 New Collection Garage Door, Back Entry Door",
                cartName: "Johnson_Classic14209123",
                shippingPoint: "Russia Plant",
                createdBy: "Rohan Shirsalkar",
                expiry: "Expires in 6 days",
                date: today,

            }
        )
    }

    return (
        <div>
            <Navigation title={"Product name #Cart number"} previousUrl={"/new_order/configure_order/add_details"} />

            <div id="cartPage" onLoad={removeContainer} className="container w-75 mt-3 pb-5">
                <div id="mainCard" class="card p-3 mb-2">
                    <div class="card-body">
                        <div id="firstCard" className="top mb-4 w-75">
                            <h5>10' 0'' X 10' 0.0'' CAN211 CC W1 COMPLETE DOOR INTELLICORE OBSCURE, 5TH GENERATION FINISH WALDER DOOR</h5>

                            <div className="moreDetails text-secondary" style={{ fontSize: "15px" }}>
                                <span>Job Name : </span><span>Front door with glass</span><br />
                                <span>Product #CWD . </span><span>Garage door</span><br />
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
                                <span>Net Price:</span><span className='fs-4 fw-bold'>$4500</span><br />
                                <span>Unit Price:</span><span className=''>$4800</span><br />
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
                                    <span>Net Price:</span><span className='fs-4 fw-bold'>$4500</span><br />
                                    <span>Unit Price:</span><span className=''>$4800</span><br />
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
                            <div class="btn-group" role="group" aria-label="Basic outlined example" style={{ width: "100%" }}>
                                <button type="button" class="btn btn-outline-secondary"><img className='me-2' src={hearticon} alt="" /> FAVORITES</button>
                                <Link to="/new_order/configure_order/add_details" type="button" class="btn btn-outline-secondary"><img className='me-2' src={pencilicon} alt="" /> EDIT</Link>
                                <button type="button" class="btn btn-outline-secondary"><img className='me-2' src={copyicon} alt="" /> COPY</button>
                                <button type="button" class="btn btn-outline-secondary"><img className='me-2' src={deleteicon} alt="" /> DELETE</button>
                            </div>
                        </div>
                    </div>
                </div>

                <div id="cartpg-block-2" className='d-flex dRow mb-2'>
                    <div className="left me-1 w-50 mb-2">
                        <div class="card p-2 mb-2">
                            <div class="card-body">
                                <span className='text-dark'>Change Delivery Date</span><br />
                                <input type="date" className='py-2 px-2 my-1 border text-secondary' placeholder="Rohan" style={{ width: "100%", fontSize: "15px" }} /><br />
                                <span className='text-dark'>Standard Delivery: Tue May 28 - 2019</span>
                            </div>
                        </div>

                        <div class="card p-2">
                            <div class="card-body">
                                <div class="form-floating ">
                                    <span className='text-dark'>Change Delivery Date</span><br />
                                    <input type="email" class="py-2 border my-1 px-2" placeholder="Enter PO number" style={{ width: "100%", }} />
                                    <span className='text-dark'>Change Delivery Date</span><br />

                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="right ms-1 w-50 mb-2">
                        <div class="card p-2">
                            <div class="card-body">
                                <h6>Bill Summary</h6>
                                <div className="summary">
                                    <div>
                                        <span>Sub Total</span>
                                        <span>$ 4500.00</span>
                                    </div>
                                    <div>
                                        <span>Energy Surcharge</span>
                                        <span>$ 70.00</span>
                                    </div>
                                    <div>
                                        <span>Sales Tax</span>
                                        <span>$ 490.00</span>
                                    </div>
                                    <div className='my-2'>
                                        <h5>TOTAL</h5>
                                        <h5>$ 5061.00</h5>
                                    </div>
                                </div>
                                <hr />
                                <div>
                                    <div class="form-check">
                                        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                        <label class="form-check-label fw-bold" for="flexCheckDefault">
                                            Apply Tax
                                        </label>
                                        <p className='text-secondary mb-0'>(The 1% iStore discount is calculated into the total price for all doors and door parts. Please refer to the quote or order acknowledgment for details.) </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='mb-2'>
                    <div class="card">
                        <div id="cartpg-lastBlock" class="card-body d-flex dRow">
                            <div className="left  w-50 border-end  d-flex align-items-center justify-content-between">
                                <div id="shippingDetails" className="left p-2 w-75">
                                    <span>Shipping To</span>
                                    <h5>Bement Jared</h5>
                                    <p>144 Curt Shores, 50, Madison Avenue Hixson - 42040</p>
                                    <span>Contact: </span><span>(123) 456 7890</span>
                                </div>

                                <div className=" change-btn  p-5 ">
                                    <a href="#" style={{ color: "brown", textDecoration: "none", fontWeight: "bold" }}>CHANGE</a>
                                </div>


                            </div>

                            <div className="right  w-50   d-flex align-items-center justify-content-between">
                                <div id="billing" className="left p-2 ps-4 w-75">
                                    <span>Billing To</span>
                                    <h5>Bement Jared</h5>
                                    <p>144 Curt Shores, 50, Madison Avenue Hixson - 42040</p>
                                    <span>Contact: </span><span>(123) 456 7890</span>
                                </div>

                                <div className="change-btn p-5 ">
                                    <a href="#" style={{ color: "brown", textDecoration: "none", fontWeight: "bold" }}>CHANGE</a>
                                </div>


                            </div>


                        </div>
                    </div>
                </div>

                <Footer onClick={placeOrder} btn1={"PLACE ORDER"} btn2={"ADD MORE"} url1={"/"} url2={"/new_order"} />
            </div>
        </div>
    )
}
