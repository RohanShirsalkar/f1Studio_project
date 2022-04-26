import React, { useEffect } from 'react'
import TableRow from '../components/TableRow'
import TableDataCard from '../components/TableDataCard'


export default function Table(props) {

    const tableRowArray = props.data.map(element => {
        return (
            <TableRow productInfo={element.productInfo} cartName={element.cartName} shippingPoint={element.shippingPoint} createdBy={element.createdBy} expiry={element.expiry} date={element.date ? element.date : null} />
        )
    })

    let arrayLength = tableRowArray.length

    return (
        <div>
            {arrayLength == 0 ? 

            <div className='d-flex justify-content-center align-items-center' style={{height : "70vh"}}><h5>NO DATA</h5></div>
            
            :

                <div>
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

                    <div id="homepageCards" >
                        <TableDataCard />
                        <TableDataCard />
                        <TableDataCard />
                        <TableDataCard />
                        <TableDataCard />

                    </div>
                </div>
            }
        </div>
    )
}
