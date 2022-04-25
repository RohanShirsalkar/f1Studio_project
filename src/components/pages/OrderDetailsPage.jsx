import React, { useState } from 'react'
import Navigation from '../Navigation'
import ConfigureMenu from '../ConfigureMenu'
import downarrowicon from '../../icons/downarrowicon.svg'
import DropdownButton from '../DropdownButton'
import Footer from '../Footer'
import { useContext } from 'react'
import { OrderDetailsContext } from '../context/OrderDetails'

export default function OrderDetailsPage() {

    const [progressBar, setProgerssBar] = useState(0)
    const [cartData, setCartData] = useState([])

    const [assemblyType, setAssemblyType] = useState()
    const [design, setDesign] = useState()
    const [color, setColor] = useState()
    const [windowCode, setWindowCode] = useState()
    const [trackRadius, setTrackRadius] = useState()
    const [trackSize, setTrackSize] = useState()


    let cart = []

    let orderData = {
        assemblyType: assemblyType,
        design: design,
        color: color,
        windowCode: windowCode,
        trackRadius: trackRadius,
        trackSize: trackSize
    }

   

    const handleClick = (event) => {
        console.log(event.target.text)
        const data = event.target.text
        const field = event.target.name

        switch (field) {
            case "assemblyType":
               setAssemblyType(data)

                break;

            case "design":
                setDesign(data)


                break;

            case "color":
                setColor(data)


                break;

            case "windowCode":
                setWindowCode(data)


                break;

            case "trackRadius":
                setTrackRadius(data)


                break;

            case "trackSize":
                setTrackSize(data)


                break;

            default:
                break;
        }
    }

    const addToCart = () => {
        cart.push(orderData)
        console.log(cart)
    }

    const configurationMenus = {

        windowCodes: ["Windowcode W1", "Windowcode W2", "Windowcode W3",],
        glazedSections: ["Section 3", "Section 4", "Section 6",],
        farmings: ["Arch 1 Designs", "Arch 2 Designs"],
        measureSizetIn: [2, 4, 6],
        measureSizeFt: [6, 8, 10],
        assemblyTypes: ["Complete Door", "2 Entry Door", "1 Entry Door"],
        springs: ["Galvanized Torsion"],
        designs: ["CC", "AA1", "BB2"],
        colors: ["Dark Finish", "Light Finish"],
        trackSizes: ["2” Flag & Jamb Brackets Loose", "1” Flag & Jamb Brackets Loose"],
        trankMounts: ["Brackets", "Standard"],
        trackLifts: ["Standard", "Advance"],
        trackRadius: ['10"Radius', '12"Radius', '14"Radius'],
        locks: ["Inside Slide Lock (#2)", "Inside Slide Lock (#1)", "Outside Slide Lock (#2)"],
        pacakgings: ["[x] Distributor"],
        extraStruts: [3, 4, 5],
        glassTypes: ["Solid(no windows)"],

    }



    return (
        <div>
            <Navigation previousUrl={"/new_order/configure_order"} title={"Configure a new door 2/3"} />

            <div id="createOrderPage_3" className="container mt-3 w-75">

                <div className="progress w-25 mx-auto mb-2" style={{ height: "5px" }}>
                    <div className="progress-bar bg-success w-50" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" ></div>
                </div>
                <span className='text-center'><p><strong>50%</strong> Completed</p></span>

                <div className="card  mx-auto shadow-sm mb-3" style={{ border: "none" }}>
                    <div className="card-header mb-4 fw-bold">
                        Layout options
                    </div>


                    {/* 1st Block */}

                    <div className="container" style={{ width: "70%" }}>

                        <ConfigureMenu  menuName={assemblyType}  fieldName={"assemblyType"} handleClick={handleClick} menus={configurationMenus.assemblyTypes} title={"Assembly Type"} />

                        <div className='dRow d-flex justify-content-between configureMenu'>
                            <p>Measure Size</p>

                            <div id='block-1' className="d-flex flex-column" style={{ width: "450px" }}>

                                <div className='d-flex align-items-center justify-content-between mb-3'>
                                    <p className='mb-0 me-5'>Width</p>
                                    <DropdownButton menus={configurationMenus.measureSizeFt} title={"Feet"} />
                                    <DropdownButton menus={configurationMenus.measureSizetIn} title={"Inch"} />
                                </div>

                                <div className='d-flex align-items-center justify-content-between'>
                                    <p className='mb-0 me-5'>Height</p>
                                    <DropdownButton menus={configurationMenus.measureSizeFt} title={"Feet"} />
                                    <DropdownButton menus={configurationMenus.measureSizetIn} title={"Inch"} />
                                </div>

                            </div>

                        </div>

                        <ConfigureMenu  menuName={windowCode}  fieldName={"windowCode"} handleClick={handleClick} menus={configurationMenus.windowCodes} title={"Windowcode"} />
                        <ConfigureMenu  menuName={design}  fieldName={"design"} handleClick={handleClick} menus={configurationMenus.designs} title={"Design"} />
                        <ConfigureMenu  menuName={color}  fieldName={"color"} handleClick={handleClick} menus={configurationMenus.colors} title={"Color"} />
                    </div>

                </div>

                {/* 2nd Block */}

                <div className="card  mx-auto shadow-sm mb-3" style={{ border: "none" }}>
                    <div className="card-header mb-4 fw-bold">
                        Window Options
                    </div>

                    <div className="container" style={{ width: "70%" }}>

                        <ConfigureMenu  menuName={``}  fieldName={"glassType"} handleClick={handleClick} menus={configurationMenus.glassTypes} title={"Glass Type"} />
                        <ConfigureMenu  menuName={``}  fieldName={"section"} handleClick={handleClick} menus={configurationMenus.glazedSections} title={"Section(s) Glazed"} />
                        <ConfigureMenu  menuName={``}  fieldName={"farming"} handleClick={handleClick} menus={configurationMenus.farmings} title={"Framing"} />
                    </div>

                </div>

                {/* 3rd Block */}

                <div className="card  mx-auto shadow-sm mb-3" style={{ border: "none" }}>
                    <div className="card-header mb-4 fw-bold">
                        Track Options
                    </div>

                    <div className="container" style={{ width: "70%" }}>

                        <ConfigureMenu  menuName={``}  fieldName={"spring"} handleClick={handleClick} menus={configurationMenus.springs} title={"Spring"} />
                        <ConfigureMenu  menuName={trackSize}  fieldName={"trackSize"} handleClick={handleClick} menus={configurationMenus.trackSizes} title={"Track Size"} />
                        <ConfigureMenu  menuName={``}  fieldName={"trackMount"} handleClick={handleClick} menus={configurationMenus.trankMounts} title={"Track Mount"} />
                        <ConfigureMenu  menuName={``}  fieldName={"trackLift"} handleClick={handleClick} menus={configurationMenus.trackLifts} title={"Track Lift"} />
                        <ConfigureMenu  menuName={trackRadius}  fieldName={"trackRadius"} handleClick={handleClick} menus={configurationMenus.trackRadius} title={"Track Radius"} />
                    </div>

                </div>

                {/* 4th Block */}

                <div className="card  mx-auto shadow-sm mb-3" style={{ border: "none" }}>
                    <div className="card-header mb-4 fw-bold">
                        Other Options
                    </div>

                    <div className="container" style={{ width: "70%" }}>

                        <ConfigureMenu  menuName={``}  fieldName={"lock"} handleClick={handleClick} menus={configurationMenus.locks} title={"Lock"} />

                        <div id="radioCheck" className=' d-flex justify-content-between configureMenu'>
                            <p>MISC Lock Options</p>

                            <div  className="form-check" style={{ width: "450px" }}>
                                <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked />
                                <label className="form-check-label" htmlFor="flexRadioDefault2">
                                    No Lock Hole
                                </label>
                            </div>
                        </div>


                        <ConfigureMenu  menuName={``}  fieldName={"packaging"} handleClick={handleClick} menus={configurationMenus.pacakgings} title={"Packaging"} />

                        <div className='dRow d-flex justify-content-between configureMenu mt-4'>
                            <p>Addtional Options</p>

                            <div className="d-flex flex-column" style={{ width: "450px" }}>

                                <div className=" dRow form-check d-flex justify-content-between">
                                    <div>
                                        <input className="form-check-input mb-3" type="checkbox" value="" id="flexCheckDefault" />
                                        <label className="form-check-label" htmlFor="flexCheckDefault">
                                            Extra Strut(s)
                                        </label>
                                    </div>

                                    <DropdownButton id={"extraStrutsDropdown"} menus={configurationMenus.extraStruts} title={"Extra Stuff"} />
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

            <Footer btn1={"PREVIEW"} onClick={addToCart} btn2={"ADD TO CART"} url2={"/new_order/configure_order/add_details/cart"} />

        </div>
    )
}
