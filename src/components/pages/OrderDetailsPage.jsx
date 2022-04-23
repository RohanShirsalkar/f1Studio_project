import React from 'react'
import Navigation from '../Navigation'
import ConfigureMenu from '../ConfigureMenu'
import downarrowicon from '../../icons/downarrowicon.svg'
import DropdownButton from '../DropdownButton'
import Footer from '../Footer'

export default function OrderDetailsPage() {
    return (
        <div>
            <Navigation previousUrl={"/new_order/configure_order"} title={"Configure a new door 2/3"} />

            <div className="container mt-3 w-75">

                <div className="progress w-25 mx-auto mb-2" style={{ height: "5px" }}>
                    <div className="progress-bar bg-success w-50" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" ></div>
                </div>
                <span className='text-center'><p><strong>50%</strong> Completed</p></span>

                <div className="card  mx-auto shadow-sm mb-3" style={{ border: "none" }}>
                    <div className="card-header mb-4 fw-bold">
                        Layout options
                    </div>

                    <div className="container" style={{ width: "70%" }}>

                        <ConfigureMenu title={"Assembly Type"} />

                        <div className=' d-flex justify-content-between configureMenu'>
                            <p>Measure Size</p>

                            <div className="d-flex flex-column" style={{ width: "450px" }}>

                                <div className='d-flex align-items-center justify-content-between mb-3'>
                                    <p className='mb-0 me-5'>Width</p>
                                    <DropdownButton title={"Feet"} />
                                    <DropdownButton title={"Inch"} />
                                </div>

                                <div className='d-flex align-items-center justify-content-between'>
                                    <p className='mb-0 me-5'>Height</p>
                                    <DropdownButton title={"Feet"} />
                                    <DropdownButton title={"Inch"} />
                                </div>

                            </div>

                        </div>

                        <ConfigureMenu title={"Windowcode"} />
                        <ConfigureMenu title={"Design"} />
                        <ConfigureMenu title={"Color"} />
                    </div>

                </div>

                {/* 2nd Block */}

                <div className="card  mx-auto shadow-sm mb-3" style={{ border: "none" }}>
                    <div className="card-header mb-4 fw-bold">
                        Window Options
                    </div>

                    <div className="container" style={{ width: "70%" }}>

                        <ConfigureMenu title={"Glass Type"} />
                        <ConfigureMenu title={"Section(s) Glazed"} />
                        <ConfigureMenu title={"Framing"} />
                    </div>

                </div>

                {/* 3rd Block */}

                <div className="card  mx-auto shadow-sm mb-3" style={{ border: "none" }}>
                    <div className="card-header mb-4 fw-bold">
                        Track Options
                    </div>

                    <div className="container" style={{ width: "70%" }}>

                        <ConfigureMenu title={"Spring"} />
                        <ConfigureMenu title={"Track Size"} />
                        <ConfigureMenu title={"Track Mount"} />
                        <ConfigureMenu title={"Track Lift"} />
                        <ConfigureMenu title={"Track Radius"} />
                    </div>

                </div>

                {/* 4th Block */}

                <div className="card  mx-auto shadow-sm mb-3" style={{ border: "none" }}>
                    <div className="card-header mb-4 fw-bold">
                        Other Options
                    </div>

                    <div className="container" style={{ width: "70%" }}>

                        <ConfigureMenu title={"Lock"} />

                        <div className=' d-flex justify-content-between configureMenu'>
                            <p>MISC Lock Options</p>

                            <div className="form-check" style={{ width: "450px" }}>
                                <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked />
                                <label className="form-check-label" htmlFor="flexRadioDefault2">
                                No Lock Hole
                                </label>
                            </div>
                        </div>


                        <ConfigureMenu title={"Packaging"} />

                        <div className=' d-flex justify-content-between configureMenu mt-4'>
                            <p>Addtional Options</p>

                            <div className="d-flex flex-column" style={{ width: "450px" }}>

                                <div className="form-check d-flex justify-content-between">
                                    <div>
                                        <input className="form-check-input mb-3" type="checkbox" value="" id="flexCheckDefault" />
                                        <label className="form-check-label" htmlFor="flexCheckDefault">
                                        Extra Strut(s)
                                        </label>
                                    </div>

                                    <DropdownButton title={"Extra Stuff"} />
                                </div>

                                <div className="form-check">
                                    <input className="form-check-input mb-3" type="checkbox" value="" id="flexCheckDefault" />
                                    <label className="form-check-label" htmlFor="flexCheckDefault">
                                    Spade Strap Hinge(s)
                                    </label>
                                </div>
                                <div className="form-check">
                                    <input className="form-check-input mb-3" type="checkbox" value="" id="flexCheckDefault" />
                                    <label className="form-check-label" htmlFor="flexCheckDefault">
                                    14 GA Quiet Hinge
                                    </label>
                                </div>
                                <div className="form-check">
                                    <input className="form-check-input mb-3" type="checkbox" value="" id="flexCheckDefault" />
                                    <label className="form-check-label" htmlFor="flexCheckDefault">
                                    Less Bottom Astragal
                                    </label>
                                </div>
                                <div className="form-check">
                                    <input className="form-check-input mb-3" type="checkbox" value="" id="flexCheckDefault" />
                                    <label className="form-check-label" htmlFor="flexCheckDefault">
                                    Gold Bar Gurantee ( Select Dealers )
                                    </label>
                                </div>
                                <div className="form-check">
                                    <input className="form-check-input mb-3" type="checkbox" value="" id="flexCheckDefault" />
                                    <label className="form-check-label" htmlFor="flexCheckDefault">
                                    Medallion Hardware Upgrade
                                    </label>
                                </div>
                                <div className="form-check">
                                    <input className="form-check-input mb-3" type="checkbox" value="" id="flexCheckDefault" />
                                    <label className="form-check-label" htmlFor="flexCheckDefault">
                                    Light Seal Kit 
                                    </label>
                                </div>
                                <div className="form-check">
                                    <input className="form-check-input mb-3" type="checkbox" value="" id="flexCheckDefault" />
                                    <label className="form-check-label" htmlFor="flexCheckDefault">
                                    Slide Lock Mounted at 54”
                                    </label>
                                </div>
                                <div className="form-check">
                                    <input className="form-check-input mb-3" type="checkbox" value="" id="flexCheckDefault" />
                                    <label className="form-check-label" htmlFor="flexCheckDefault">
                                    2 Spear Lift Handles
                                    </label>
                                </div>

                            </div>

                        </div>
                        
                    </div>

                </div>
            </div>

            <Footer btn1={"PREVIEW"} btn2={"ADD TO CART"} url2={"/new_order/configure_order/add_details/cart"}/>

        </div>
    )
}
