import React, { useState } from 'react'
import Navigation from '../Navigation'
import ConfigureMenu from '../ConfigureMenu'
import DropdownButton from '../DropdownButton'
import Footer from '../Footer'
import { cart } from '../../components/data/cartData'
import { tableData } from '../data/TableData'
import Alert from '../Alert'
import { useContext } from 'react'
import { OrderDetailsContext } from '../context/OrderDetails'

export default function OrderDetailsPage(props) {

    const orderStatus = useContext(OrderDetailsContext)

    const [progressBar, setProgerssBar] = useState(0)
    const [field1, setField1] = useState(false)
    const [field2, setField2] = useState(false)
    const [field3, setField3] = useState(false)
    const [field4, setField4] = useState(false)

    const [assemblyType, setAssemblyType] = useState()
    const [design, setDesign] = useState()
    const [color, setColor] = useState()
    const [windowCode, setWindowCode] = useState()
    const [trackRadius, setTrackRadius] = useState()
    const [trackSize, setTrackSize] = useState()
    const [glassType, setGlassType] = useState()
    const [section, setSection] = useState()
    const [farming, setFarming] = useState()
    const [spring, setSpring] = useState()
    const [trackMount, setTrackMount] = useState()
    const [trackLift, setTracklift] = useState()
    const [lock, setLock] = useState()
    const [packaging, setPackaging] = useState()

    const date = new Date().toLocaleDateString()


    const onLoadfn = () => {
        props.status.setStatus(false)
    }

    const alert = document.getElementById('alert')
    const showAlert = () => {
        alert.style.display = 'block'
    }

    const hideAlert = () => {
        alert.style.display = "none"
    }



    const checkForm2 = () => {

        if (!field1) {
            if (!field2) {
                if (!field3) {
                    if (!field4) {
                        addToCart()
                        hideAlert()
                        props.status.setStatus(true)
                    } else {
                        showAlert()
                    }
                } else {
                    showAlert()
                }
            } else {
                showAlert()
            }
        } else {
            showAlert()
        }
    }


    const updateProgress = () => {

        if (field1) {

            if (assemblyType) {
                if (windowCode) {
                    if (design) {
                        if (color) {
                            setProgerssBar(progressBar + 25)
                            setField1(true)
                        }
                    }
                }
            }
        }

        if (field2) {

            if (glassType) {
                if (section) {
                    if (farming) {
                        setProgerssBar(progressBar + 25)
                        setField2(true)
                    }
                }
            }
        }

        if (field3) {

            if (spring) {
                if (trackSize) {
                    if (trackMount) {
                        if (trackLift) {
                            if (trackRadius) {
                                setProgerssBar(progressBar + 25)
                                setField3(true)
                            }
                        }
                    }
                }
            }
        }

        if (field4) {

            if (lock) {
                if (packaging) {
                    setProgerssBar(progressBar + 25)
                    setField4(true)
                }
            }
        }
    }


    const handleChange = (event) => {

        const field = event.target.name
        updateProgress()


        switch (field) {
            case "assemblyType":
                setAssemblyType(event.target.value)

                break;

            case "design":
                setDesign(event.target.value)

                break;

            case "color":
                setColor(event.target.value)

                break;

            case "windowCode":
                setWindowCode(event.target.value)

                break;

            case "trackRadius":
                setTrackRadius(event.target.value)

                break;

            case "trackSize":
                setTrackSize(event.target.value)

                break;
            case "glassType":
                setGlassType(event.target.value)

                break;
            case "section":
                setSection(event.target.value)

                break;
            case "farming":
                setFarming(event.target.value)

                break;

            case "spring":
                setSpring(event.target.value)

                break;

            case "trackMount":
                setTrackMount(event.target.value)

                break;

            case "trackLift":
                setTracklift(event.target.value)

                break;


            case "packaging":
                setPackaging(event.target.value)

                break;
            case "lock":
                setLock(event.target.value)

                break;

            default:
                break;
        }
    }



    const addToCart = () => {



        cart.push({
            assemblyType: assemblyType,
            design: design,
            color: color,
            windowCode: windowCode,
            trackRadius: trackRadius,
            trackSize: trackSize,
            glassType: glassType,
            farming: farming,
            section: section,
            spring: spring,
            trackMount: trackMount,
            trackLift: trackLift,
            packaging: packaging,
            lock: lock,
            price: 4000,
            date: date,
            id: tableData.length + 1
        })

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

        <div onLoad={onLoadfn}>

            <Navigation previousUrl={"/new_order/configure_order"} title={"Configure a new door 2/3"} />
            <Alert message={"Fill complete form"} />

            <div id="createOrderPage_3" className="container mt-3 w-75">

                <div className="progress w-25 mx-auto mb-2" style={{ height: "5px" }}>
                    <div className="progress-bar bg-success " role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style={{ width: `${progressBar}%` }}></div>
                </div>
                <span className='text-center'><p><strong>50%</strong> Completed</p></span>

                <div className="card  mx-auto shadow-sm mb-3" style={{ border: "none" }}>
                    <div className="card-header mb-4 fw-bold">
                        Layout options
                    </div>


                    {/* 1st Block */}

                    <div className="container" style={{ width: "70%" }}>

                        <ConfigureMenu menuName={assemblyType} fieldName={"assemblyType"} handleChange={handleChange} menus={configurationMenus.assemblyTypes} title={"Assembly Type"} />

                        <div className='dRow d-flex justify-content-between configureMenu'>
                            <p>Measure Size</p>

                            <div id='block-1' className="d-flex flex-column" style={{ width: "450px" }}>

                                <div className='d-flex align-items-center justify-content-between mb-3'>
                                    <p className='mb-0 me-5'>Width</p>
                                    <DropdownButton handleChange={handleChange} menus={configurationMenus.measureSizeFt} title={"Feet"} />
                                    <DropdownButton handleChange={handleChange} menus={configurationMenus.measureSizetIn} title={"Inch"} />
                                </div>

                                <div className='d-flex align-items-center justify-content-between'>
                                    <p className='mb-0 me-5'>Height</p>
                                    <DropdownButton handleChange={handleChange} menus={configurationMenus.measureSizeFt} title={"Feet"} />
                                    <DropdownButton handleChange={handleChange} menus={configurationMenus.measureSizetIn} title={"Inch"} />
                                </div>

                            </div>

                        </div>

                        <ConfigureMenu menuName={windowCode} fieldName={"windowCode"} handleChange={handleChange} menus={configurationMenus.windowCodes} title={"Windowcode"} />
                        <ConfigureMenu menuName={design} fieldName={"design"} handleChange={handleChange} menus={configurationMenus.designs} title={"Design"} />
                        <ConfigureMenu menuName={color} fieldName={"color"} handleChange={handleChange} menus={configurationMenus.colors} title={"Color"} />
                    </div>

                </div>

                {/* 2nd Block */}

                <div className="card  mx-auto shadow-sm mb-3" style={{ border: "none" }}>

                    <div className="card-header mb-4 fw-bold">
                        Window Options
                    </div>

                    <div className="container" style={{ width: "70%" }}>

                        <ConfigureMenu menuName={``} fieldName={"glassType"} handleChange={handleChange} menus={configurationMenus.glassTypes} title={"Glass Type"} />
                        <ConfigureMenu menuName={``} fieldName={"section"} handleChange={handleChange} menus={configurationMenus.glazedSections} title={"Section(s) Glazed"} />
                        <ConfigureMenu menuName={``} fieldName={"farming"} handleChange={handleChange} menus={configurationMenus.farmings} title={"Framing"} />
                    </div>

                </div>

                {/* 3rd Block */}

                <div className="card  mx-auto shadow-sm mb-3" style={{ border: "none" }}>
                    <div className="card-header mb-4 fw-bold">
                        Track Options
                    </div>

                    <div className="container" style={{ width: "70%" }}>

                        <ConfigureMenu menuName={``} fieldName={"spring"} handleChange={handleChange} menus={configurationMenus.springs} title={"Spring"} />
                        <ConfigureMenu menuName={trackSize} fieldName={"trackSize"} handleChange={handleChange} menus={configurationMenus.trackSizes} title={"Track Size"} />
                        <ConfigureMenu menuName={``} fieldName={"trackMount"} handleChange={handleChange} menus={configurationMenus.trankMounts} title={"Track Mount"} />
                        <ConfigureMenu menuName={``} fieldName={"trackLift"} handleChange={handleChange} menus={configurationMenus.trackLifts} title={"Track Lift"} />
                        <ConfigureMenu menuName={trackRadius} fieldName={"trackRadius"} handleChange={handleChange} menus={configurationMenus.trackRadius} title={"Track Radius"} />
                    </div>

                </div>

                {/* 4th Block */}

                <div className="card  mx-auto shadow-sm mb-3" style={{ border: "none" }}>
                    <div className="card-header mb-4 fw-bold">
                        Other Options
                    </div>

                    <div className="container" style={{ width: "70%" }}>

                        <ConfigureMenu menuName={``} fieldName={"lock"} handleChange={handleChange} menus={configurationMenus.locks} title={"Lock"} />

                        <div id="radioCheck" className=' d-flex justify-content-between configureMenu'>
                            <p>MISC Lock Options</p>

                            <div className="form-check" style={{ width: "450px" }}>
                                <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked />
                                <label className="form-check-label" htmlFor="flexRadioDefault2">
                                    No Lock Hole
                                </label>
                            </div>
                        </div>


                        <ConfigureMenu menuName={``} fieldName={"packaging"} handleChange={handleChange} menus={configurationMenus.pacakgings} title={"Packaging"} />

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

                                    <DropdownButton handleChange={handleChange} id={"extraStrutsDropdown"} menus={configurationMenus.extraStruts} title={"Extra Stuff"} />
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
                                    <input required={true} className="form-check-input mb-3" type="checkbox" value="" id="flexCheckDefault" />
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

            <Footer btn1={"PREVIEW"}  onClickBtn2={checkForm2} btn2={"ADD TO CART"} url2={"/new_order/configure_order/add_details/cart"} />

        </div>
    )
}
