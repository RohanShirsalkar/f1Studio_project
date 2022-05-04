import React, { useEffect, useState } from 'react'
import plusicon from '../../icons/plusicon.svg'
import { Link } from 'react-router-dom'
import searchicon from '../../icons/searchicon.svg'
import filtericon from '../../icons/filtericon.svg'
import Table from '../Table'
import {cart} from '../data/cartData'

export default function Homepage(props) {

    const [query, setQuery] = useState("")
    const handleSearch = (event) => {
        setQuery(event.target.value)
    }

    const finalArray = props.link.filter(element => {
        const lo_assemblyType = element.assemblyType.toLocaleLowerCase().replace(/\s/g, "")
        const lo_query = query.toLocaleLowerCase().replace(/\s/g, "")
        return lo_assemblyType.slice(0, lo_query.length) === lo_query
    })

    return (
        <div>
            <div className="navigation w-100 ">
                <ul className='d-flex py-2 justify-content-center mb-0'>
                    <Link to="/" className='lItem-1 text-white mx-5' style={{ textDecoration: "none" }} >CART</Link>
                    <Link to="/favorites" className='lItem-2 text-white mx-5' style={{ textDecoration: "none" }} >FAVORITES</Link>
                </ul>
            </div>

            <div className="main-container px-3">

                {/* filter 1 For Desktop */}

                <div id="homePageNav-desktop" className="navigation-2 d-flex justify-content-between align-items-center py-3 mb-3 ">
                    <div className="leftNav text-decoration-">
                        <a className='mx-4 fw-bold' href="#">Active Cart ({props.link.length})</a>
                        <a className='mx-4 fw-bold' href='#'>Archived Cart</a>
                    </div>

                    <div className="rightNav">
                        <input className='me-3' type="search by assembly type" placeholder='Search' value={query} onChange={handleSearch} />
                        <button>Filter</button>
                    </div>
                </div>

                {/* filter 2 For Mobile */}

                <div id="homePageNav-mobile" className='mb-2 mt-4'>
                    <div className='d-flex justify-content-between mb-3 fs-5 px-1'>
                        <span>Carts</span>

                        <div>
                            <span className='me-4'><img src={searchicon} alt="" /></span>
                            <span><img src={filtericon} alt="" /></span>
                        </div>
                    </div>
                    <div>
                        <div class="btn-group w-100 shadow-sm" role="group" aria-label="Basic outlined example">
                            <button type="button" class="btn  border" style={{ width: "100%", backgroundColor: "white" }}>Active ({props.link.length})</button>
                            <Link to="/archivedcarts" type="button" class="btn  border" style={{ width: "100%", backgroundColor: "white" }}>Archived </Link>
                        </div>
                    </div>
                </div>


                <Link style={{ zIndex: "10" }} className='shadow-lg btn' id='addButton' to="/new_order" ><img src={plusicon} /></Link>
                <Table data={finalArray} />
            </div>
        </div>
    )
}
