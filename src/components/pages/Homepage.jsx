import React from 'react'
import TableRow from '../TableRow'
import { tableData } from '../data/TableData'
import plusicon from '../../icons/plusicon.svg'
import { Link } from 'react-router-dom'
import TableDataCard from '../TableDataCard'
import searchicon from '../../icons/searchicon.svg'
import filtericon from '../../icons/filtericon.svg'

export default function Homepage() {

    const tableRowArray = tableData.map(element => {
        return (
            <TableRow productInfo={element.productInfo} cartName={element.cartName} shippingPoint={element.shippingPoint} createdBy={element.createdBy} expiry={element.expiry} date={element.date ? element.date : null} />
        )
    })

    return (
        <div>
            <div className="navigation w-100 ">
                <ul className='d-flex py-2 justify-content-center mb-0'>
                    <li className='lItem-1'>CARTS</li>
                    <li className='lItem-2'>FAVORITES</li>
                </ul>
            </div>

            <div className="main-container px-3">

                {/* filter 1 */}

                <div className="navigation-2 d-flex justify-content-between align-items-center py-3 mb-3 d-none">
                    <div className="leftNav text-decoration-">
                        <a className='mx-4 fw-bold' href="#">Archived Cart</a>
                        <a className='mx-4 fw-bold' href="#">Active Cart</a>
                    </div>

                    <div className="rightNav ">
                        <input className='me-3' type="search" placeholder='Search' />
                        <button >Filter</button>
                    </div>
                </div>

                {/* filter 2 */}

                <div className='mb-2 mt-4'>
                    <div className='d-flex justify-content-between mb-3 fs-5 px-1'>
                        <span>Carts</span>

                        <div>

                            <span className='me-4'><img src={searchicon} alt="" /></span>
                            <span><img  src={filtericon} alt="" /></span>
                        </div>
                    </div>
                    <div>
                        <div class="btn-group w-100 shadow-sm" role="group" aria-label="Basic outlined example">
                            <button type="button" class="btn  border" style={{ width: "100%", backgroundColor: "white" }}>Active (12)</button>
                            <button type="button" class="btn  border" style={{ width: "100%", backgroundColor: "white" }}>Archived (3)</button>
                        </div>
                    </div>
                </div>


                <Link style={{ zIndex: "10" }} className='shadow-lg btn' id='addButton' to="/new_order" ><img src={plusicon} /></Link>

                {/* Desktop Table */}

                <table id="homepageTable" className="table table-striped table-borderless shadow">
                    <thead className='text-secondary' style={{ fontSize: "12px" }}>
                        <tr>
                            <th scope="col">PRODUCT INFORMATION</th>
                            <th scope="col">CART NAME</th>
                            <th scope="col">SHIPPING POINT</th>
                            <th scope="col">CREATED BY</th>
                            <th scope="col">EXPIRY</th>
                        </tr>
                    </thead>
                    <tbody style={{ fontSize: "15px" }}>
                        {tableRowArray.reverse()}
                    </tbody>
                </table>

                {/* Mobile Cards */}

                <div>
                    <TableDataCard />
                    <TableDataCard />
                    <TableDataCard />
                    <TableDataCard />
                    <TableDataCard />

                </div>


            </div>
        </div>

    )
}
