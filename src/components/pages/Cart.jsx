import React, { useEffect, useState } from 'react'
import Navigation from '../Navigation'
import Footer from '../Footer'
import { Link } from 'react-router-dom'
import { tableData } from '../data/TableData'
import { cart } from '../data/cartData'
import OrderDetailCard from '../OrderDetailCard'


export default function Cart() {
    const [cartProducts, setCartProducts] = useState([])
    const [count, setCount] = useState(0)


    const handleClick = (event) => {
        let index = cart.findIndex(item => item.id == event.target.name)
        cart.splice(index, 1)
        setCount(count + 1)
    }


    const placeOrder = () => {

        cart.forEach(element => {
            tableData.push(element)
        });


    }

    let cartTotal = 0
    
    cart.forEach(element => {
        cartTotal += element.price
    })

    useEffect(() => {

        const cartProductArray = cart.map(element => {
            return <OrderDetailCard setCount={setCount} handleClick={handleClick} name={element.id} assemblyType={element.assemblyType} color={element.color} glassType={element.glassType} farming={element.farming} price={element.price} trackRadius={element.trackRadius} />

        })
        setCartProducts(cartProductArray)
    },[count])


    return (
        <div>
            <Navigation title={"Product name #Cart number"} previousUrl={"/new_order/configure_order/add_details"} />

            <div id="cartPage"  className="container w-75 mt-3 pb-5">
                {/* <OrderDetailCard /> */}
                {cartProducts && cartProducts.reverse()}


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
                                        <span>$ {cartTotal}.00</span>
                                    </div>
                                    <div>
                                        <span>Energy Surcharge</span>
                                        <span>$ {70 * cartProducts.length}.00</span>
                                    </div>
                                    <div>
                                        <span>Sales Tax</span>
                                        <span>$ {490 * cartProducts.length}.00</span>
                                    </div>
                                    <div className='my-2'>
                                        <h5>TOTAL</h5>
                                        <h5>$ {cartTotal + 490 * cartProducts.length + 70 * cartProducts.length}.00</h5>
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
